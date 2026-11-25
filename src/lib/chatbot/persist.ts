import { getDb, isDatabaseConfigured } from "@/lib/db";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

let schemaReady: Promise<void> | null = null;

export function isChatUuid(value: unknown): value is string {
  return typeof value === "string" && UUID_RE.test(value);
}

export type ChatVisitorMeta = {
  ip?: string | null;
  userAgent?: string | null;
  acceptLanguage?: string | null;
};

async function ensureChatSchema() {
  if (!isDatabaseConfigured()) return;
  if (!schemaReady) {
    schemaReady = (async () => {
      const sql = getDb();
      await sql`
        CREATE TABLE IF NOT EXISTS chat_users (
          id UUID PRIMARY KEY,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `;
      await sql`
        CREATE TABLE IF NOT EXISTS chat_sessions (
          id UUID PRIMARY KEY,
          user_id UUID NOT NULL REFERENCES chat_users(id) ON DELETE CASCADE,
          ip TEXT,
          user_agent TEXT,
          accept_language TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `;
      await sql`
        CREATE TABLE IF NOT EXISTS chat_messages (
          id UUID PRIMARY KEY,
          session_id UUID NOT NULL REFERENCES chat_sessions(id) ON DELETE CASCADE,
          user_id UUID NOT NULL REFERENCES chat_users(id) ON DELETE CASCADE,
          role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
          content TEXT NOT NULL,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `;
      await sql`ALTER TABLE chat_sessions ADD COLUMN IF NOT EXISTS ip TEXT`;
      await sql`ALTER TABLE chat_sessions ADD COLUMN IF NOT EXISTS user_agent TEXT`;
      await sql`ALTER TABLE chat_sessions ADD COLUMN IF NOT EXISTS accept_language TEXT`;
      await sql`
        CREATE INDEX IF NOT EXISTS chat_sessions_user_id_idx
        ON chat_sessions (user_id)
      `;
      await sql`
        CREATE INDEX IF NOT EXISTS chat_messages_session_id_idx
        ON chat_messages (session_id)
      `;
      await sql`
        CREATE INDEX IF NOT EXISTS chat_messages_user_id_idx
        ON chat_messages (user_id)
      `;
    })().catch((error) => {
      schemaReady = null;
      throw error;
    });
  }
  await schemaReady;
}

export async function persistChatTurn(input: {
  userId: string;
  sessionId: string;
  userMessage: string;
  assistantMessage: string;
  visitor?: ChatVisitorMeta;
}) {
  if (!isDatabaseConfigured()) return;
  if (!isChatUuid(input.userId) || !isChatUuid(input.sessionId)) return;

  try {
    await ensureChatSchema();
    const sql = getDb();
    const ip = input.visitor?.ip?.trim() || null;
    const userAgent = input.visitor?.userAgent?.trim() || null;
    const acceptLanguage = input.visitor?.acceptLanguage?.trim() || null;

    await sql`
      INSERT INTO chat_users (id)
      VALUES (${input.userId}::uuid)
      ON CONFLICT (id) DO NOTHING
    `;

    await sql`
      INSERT INTO chat_sessions (id, user_id, ip, user_agent, accept_language)
      VALUES (
        ${input.sessionId}::uuid,
        ${input.userId}::uuid,
        ${ip},
        ${userAgent},
        ${acceptLanguage}
      )
      ON CONFLICT (id) DO UPDATE
      SET
        updated_at = NOW(),
        ip = COALESCE(EXCLUDED.ip, chat_sessions.ip),
        user_agent = COALESCE(EXCLUDED.user_agent, chat_sessions.user_agent),
        accept_language = COALESCE(EXCLUDED.accept_language, chat_sessions.accept_language)
    `;

    const userMessageId = crypto.randomUUID();
    const assistantMessageId = crypto.randomUUID();

    await sql`
      INSERT INTO chat_messages (id, session_id, user_id, role, content)
      VALUES
        (${userMessageId}::uuid, ${input.sessionId}::uuid, ${input.userId}::uuid, 'user', ${input.userMessage}),
        (${assistantMessageId}::uuid, ${input.sessionId}::uuid, ${input.userId}::uuid, 'assistant', ${input.assistantMessage})
    `;
  } catch (error) {
    console.error("[chat] failed to persist conversation", error);
  }
}

export function getRequestVisitorMeta(request: Request): ChatVisitorMeta {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip =
    forwarded?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    request.headers.get("cf-connecting-ip")?.trim() ||
    null;

  return {
    ip,
    userAgent: request.headers.get("user-agent"),
    acceptLanguage: request.headers.get("accept-language"),
  };
}
