import { getDb } from "@/lib/db";
import { ensureAdminSchema } from "@/lib/admin/schema";

export type ChatDaySummary = {
  day: string;
  sessionCount: number;
  messageCount: number;
};

export type ChatSessionSummary = {
  id: string;
  userId: string;
  ip: string | null;
  userAgent: string | null;
  acceptLanguage: string | null;
  createdAt: string;
  updatedAt: string;
  messageCount: number;
  preview: string | null;
};

export type ChatMessageRow = {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
};

function asIso(value: unknown) {
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "string") return value;
  return String(value ?? "");
}

export async function listChatDays(): Promise<ChatDaySummary[]> {
  await ensureAdminSchema();
  const sql = getDb();
  const rows = await sql`
    SELECT
      to_char(date_trunc('day', m.created_at AT TIME ZONE 'UTC'), 'YYYY-MM-DD') AS day,
      COUNT(DISTINCT m.session_id)::int AS session_count,
      COUNT(*)::int AS message_count
    FROM chat_messages m
    GROUP BY 1
    ORDER BY 1 DESC
    LIMIT 60
  `;

  return rows.map((row) => ({
    day: String(row.day),
    sessionCount: Number(row.session_count),
    messageCount: Number(row.message_count),
  }));
}

export async function listSessionsForDay(day: string): Promise<ChatSessionSummary[]> {
  await ensureAdminSchema();
  const sql = getDb();
  const rows = await sql`
    SELECT
      s.id,
      s.user_id,
      s.ip,
      s.user_agent,
      s.accept_language,
      s.created_at,
      s.updated_at,
      COUNT(m.id)::int AS message_count,
      (
        SELECT content
        FROM chat_messages
        WHERE session_id = s.id AND role = 'user'
        ORDER BY created_at ASC
        LIMIT 1
      ) AS preview
    FROM chat_sessions s
    JOIN chat_messages m ON m.session_id = s.id
    WHERE m.created_at >= (${day}::date)
      AND m.created_at < (${day}::date + INTERVAL '1 day')
    GROUP BY s.id
    ORDER BY s.updated_at DESC
  `;

  return rows.map((row) => ({
    id: String(row.id),
    userId: String(row.user_id),
    ip: row.ip ? String(row.ip) : null,
    userAgent: row.user_agent ? String(row.user_agent) : null,
    acceptLanguage: row.accept_language ? String(row.accept_language) : null,
    createdAt: asIso(row.created_at),
    updatedAt: asIso(row.updated_at),
    messageCount: Number(row.message_count),
    preview: row.preview ? String(row.preview) : null,
  }));
}

export async function getSessionMessages(sessionId: string): Promise<{
  session: ChatSessionSummary | null;
  messages: ChatMessageRow[];
}> {
  await ensureAdminSchema();
  const sql = getDb();

  const sessionRows = await sql`
    SELECT
      s.id,
      s.user_id,
      s.ip,
      s.user_agent,
      s.accept_language,
      s.created_at,
      s.updated_at,
      COUNT(m.id)::int AS message_count,
      NULL AS preview
    FROM chat_sessions s
    LEFT JOIN chat_messages m ON m.session_id = s.id
    WHERE s.id = ${sessionId}::uuid
    GROUP BY s.id
    LIMIT 1
  `;

  const sessionRow = sessionRows[0];
  if (!sessionRow) {
    return { session: null, messages: [] };
  }

  const messageRows = await sql`
    SELECT id, role, content, created_at
    FROM chat_messages
    WHERE session_id = ${sessionId}::uuid
    ORDER BY created_at ASC
  `;

  return {
    session: {
      id: String(sessionRow.id),
      userId: String(sessionRow.user_id),
      ip: sessionRow.ip ? String(sessionRow.ip) : null,
      userAgent: sessionRow.user_agent ? String(sessionRow.user_agent) : null,
      acceptLanguage: sessionRow.accept_language
        ? String(sessionRow.accept_language)
        : null,
      createdAt: asIso(sessionRow.created_at),
      updatedAt: asIso(sessionRow.updated_at),
      messageCount: Number(sessionRow.message_count),
      preview: null,
    },
    messages: messageRows.map((row) => ({
      id: String(row.id),
      role: row.role === "assistant" ? "assistant" : "user",
      content: String(row.content),
      createdAt: asIso(row.created_at),
    })),
  };
}
