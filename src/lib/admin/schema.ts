import { getDb, isDatabaseConfigured } from "@/lib/db";
import { hashPassword } from "@/lib/admin/password";

let schemaReady: Promise<void> | null = null;

export async function ensureAdminSchema() {
  if (!isDatabaseConfigured()) {
    throw new Error("DATABASE_URL is not configured.");
  }

  if (!schemaReady) {
    schemaReady = (async () => {
      const sql = getDb();

      await sql`
        CREATE TABLE IF NOT EXISTS admin_users (
          id UUID PRIMARY KEY,
          email TEXT NOT NULL UNIQUE,
          password_hash TEXT NOT NULL,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `;

      await sql`
        CREATE TABLE IF NOT EXISTS admin_sessions (
          id UUID PRIMARY KEY,
          admin_id UUID NOT NULL REFERENCES admin_users(id) ON DELETE CASCADE,
          expires_at TIMESTAMPTZ NOT NULL,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `;

      await sql`
        CREATE INDEX IF NOT EXISTS admin_sessions_admin_id_idx
        ON admin_sessions (admin_id)
      `;

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

      // Older installs may already have chat tables without visitor columns.
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
      await sql`
        CREATE INDEX IF NOT EXISTS chat_messages_created_at_idx
        ON chat_messages (created_at DESC)
      `;

      await seedAdminFromEnv();
    })().catch((error) => {
      schemaReady = null;
      throw error;
    });
  }

  await schemaReady;
}

async function seedAdminFromEnv() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD?.trim();
  if (!email || !password) return;

  const sql = getDb();
  const existing = await sql`
    SELECT id FROM admin_users WHERE email = ${email} LIMIT 1
  `;

  if (existing.length > 0) return;

  const id = crypto.randomUUID();
  const passwordHash = await hashPassword(password);
  await sql`
    INSERT INTO admin_users (id, email, password_hash)
    VALUES (${id}::uuid, ${email}, ${passwordHash})
  `;
}
