import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CONTACT_EMAIL } from "@/lib/company";

type ContactBody = {
  fullName?: string;
  email?: string;
  phone?: string;
  organization?: string;
  interest?: string;
  message?: string;
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getRecipients() {
  const fromEnv = process.env.CONTACT_FORM_TO?.split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  if (fromEnv && fromEnv.length > 0) return fromEnv;
  return [CONTACT_EMAIL];
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = asString(body.fullName);
  const email = asString(body.email);
  const phone = asString(body.phone);
  const organization = asString(body.organization);
  const interest = asString(body.interest);
  const message = asString(body.message);

  if (!fullName || !email || !phone || !message) {
    return NextResponse.json(
      { error: "Name, email, phone, and message are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const port = Number(process.env.SMTP_PORT || "587");

  if (!host || !user || !pass) {
    return NextResponse.json(
      { error: "SMTP is not configured." },
      { status: 503 },
    );
  }

  const recipients = getRecipients();
  const from =
    process.env.CONTACT_FORM_FROM?.trim() ||
    `"Agility AI Website" <${user}>`;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const text = [
    `New message from the Agility AI contact form`,
    ``,
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    organization ? `Organisation: ${organization}` : null,
    interest ? `Interest: ${interest}` : null,
    ``,
    `Message:`,
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await transporter.sendMail({
      from,
      to: recipients,
      replyTo: email,
      subject: `Website message from ${fullName}${interest ? ` · ${interest}` : ""}`,
      text,
    });
  } catch (error) {
    console.error("[contact] failed to send email", error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
