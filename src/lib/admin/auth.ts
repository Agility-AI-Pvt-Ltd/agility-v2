import { cookies } from "next/headers";
import { getDb } from "@/lib/db";
import { ensureAdminSchema } from "@/lib/admin/schema";
import { verifyPassword } from "@/lib/admin/password";

export const ADMIN_COOKIE = "agility_admin_session";
const SESSION_DAYS = 7;

export type AdminUser = {
  id: string;
  email: string;
};

function sessionExpiry() {
  return new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);
}

export async function loginAdmin(email: string, password: string) {
  await ensureAdminSchema();
  const sql = getDb();
  const normalized = email.trim().toLowerCase();

  const rows = await sql`
    SELECT id, email, password_hash
    FROM admin_users
    WHERE email = ${normalized}
    LIMIT 1
  `;

  const admin = rows[0] as
    | { id: string; email: string; password_hash: string }
    | undefined;

  if (!admin) {
    return { ok: false as const, error: "Invalid email or password." };
  }

  const valid = await verifyPassword(password, admin.password_hash);
  if (!valid) {
    return { ok: false as const, error: "Invalid email or password." };
  }

  const sessionId = crypto.randomUUID();
  const expiresAt = sessionExpiry();

  await sql`
    INSERT INTO admin_sessions (id, admin_id, expires_at)
    VALUES (${sessionId}::uuid, ${admin.id}::uuid, ${expiresAt.toISOString()}::timestamptz)
  `;

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE, sessionId, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: expiresAt,
  });

  return { ok: true as const, admin: { id: admin.id, email: admin.email } };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  if (token) {
    try {
      await ensureAdminSchema();
      const sql = getDb();
      await sql`DELETE FROM admin_sessions WHERE id = ${token}::uuid`;
    } catch {
      // ignore logout DB errors
    }
  }
  cookieStore.delete(ADMIN_COOKIE);
}

export async function getAdminSession(): Promise<AdminUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  if (!token) return null;

  try {
    await ensureAdminSchema();
    const sql = getDb();
    const rows = await sql`
      SELECT a.id, a.email
      FROM admin_sessions s
      JOIN admin_users a ON a.id = s.admin_id
      WHERE s.id = ${token}::uuid
        AND s.expires_at > NOW()
      LIMIT 1
    `;
    const admin = rows[0] as AdminUser | undefined;
    return admin ?? null;
  } catch {
    return null;
  }
}

export async function requireAdmin() {
  const admin = await getAdminSession();
  if (!admin) {
    throw new Error("UNAUTHORIZED");
  }
  return admin;
}
