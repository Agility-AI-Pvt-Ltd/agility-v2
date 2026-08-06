import { getBookCallConfig } from "@/lib/book-call/config";
import { sendBookCallEmail } from "@/lib/book-call/send-book-call-email";
import { NextResponse } from "next/server";

const INTERESTS = new Set([
  "AI Enablement",
  "AI Integration",
  "AI Products",
  "Not sure yet",
]);

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function readString(value: unknown, field: string, maxLength: number) {
  if (typeof value !== "string") {
    return { error: `${field} is required.` };
  }

  const trimmed = value.trim();

  if (!trimmed) {
    return { error: `${field} is required.` };
  }

  if (trimmed.length > maxLength) {
    return { error: `${field} is too long.` };
  }

  return { value: trimmed };
}

export async function POST(request: Request) {
  const config = getBookCallConfig();

  if (!config) {
    return NextResponse.json(
      { error: "Book-a-call email is not configured on the server." },
      { status: 503 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;

  const name = readString(payload.name, "Name", 120);
  if ("error" in name) return NextResponse.json({ error: name.error }, { status: 400 });

  const email = readString(payload.email, "Email", 160);
  if ("error" in email) return NextResponse.json({ error: email.error }, { status: 400 });
  if (!isValidEmail(email.value)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const phone = readString(payload.phone, "Phone", 40);
  if ("error" in phone) return NextResponse.json({ error: phone.error }, { status: 400 });

  const company = readString(payload.company, "Company", 160);
  if ("error" in company) {
    return NextResponse.json({ error: company.error }, { status: 400 });
  }

  const role =
    typeof payload.role === "string" ? payload.role.trim().slice(0, 120) : "";

  const interest = readString(payload.interest, "Interest", 80);
  if ("error" in interest) {
    return NextResponse.json({ error: interest.error }, { status: 400 });
  }
  if (!INTERESTS.has(interest.value)) {
    return NextResponse.json({ error: "Select a valid interest." }, { status: 400 });
  }

  const preferredTimes = readString(
    payload.preferredTimes,
    "Preferred times",
    500,
  );
  if ("error" in preferredTimes) {
    return NextResponse.json({ error: preferredTimes.error }, { status: 400 });
  }

  const message = readString(payload.message, "Message", 2000);
  if ("error" in message) {
    return NextResponse.json({ error: message.error }, { status: 400 });
  }

  try {
    await sendBookCallEmail(config, {
      name: name.value,
      email: email.value,
      phone: phone.value,
      company: company.value,
      role,
      interest: interest.value,
      preferredTimes: preferredTimes.value,
      message: message.value,
    });

    return NextResponse.json({
      ok: true,
      message: "Request sent — we'll be in touch to confirm a time.",
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[book-call]", error);
    }

    return NextResponse.json(
      { error: "Could not send your request. Please try again shortly." },
      { status: 502 },
    );
  }
}
