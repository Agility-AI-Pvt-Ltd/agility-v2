import { NextResponse } from "next/server";
import { loginAdmin } from "@/lib/admin/auth";
import { isDatabaseConfigured } from "@/lib/db";

export async function POST(request: Request) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { error: "Database is not configured." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const email =
    body && typeof body === "object" && "email" in body
      ? String((body as { email?: unknown }).email ?? "")
      : "";
  const password =
    body && typeof body === "object" && "password" in body
      ? String((body as { password?: unknown }).password ?? "")
      : "";

  if (!email.trim() || !password) {
    return NextResponse.json(
      { error: "Email and password are required." },
      { status: 400 },
    );
  }

  try {
    const result = await loginAdmin(email, password);
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 401 });
    }
    return NextResponse.json({ ok: true, email: result.admin.email });
  } catch (error) {
    console.error("[admin/login]", error);
    const message =
      error instanceof Error && /ENOTFOUND|ECONNREFUSED|getaddrinfo/i.test(error.message)
        ? "Could not reach the database. Check DATABASE_URL and your network."
        : "Could not sign in. Check database and admin credentials.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
