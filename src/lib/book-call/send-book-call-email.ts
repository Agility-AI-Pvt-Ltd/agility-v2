import nodemailer from "nodemailer";
import type { BookCallConfig } from "@/lib/book-call/config";

export type BookCallSubmission = {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  interest: string;
  preferredTimes: string;
  message: string;
};

function buildEmailBody(data: BookCallSubmission) {
  return [
    "New book-a-call request",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Company: ${data.company}`,
    `Role: ${data.role || "—"}`,
    `Interest: ${data.interest}`,
    "",
    "Preferred times:",
    data.preferredTimes,
    "",
    "What should we prepare:",
    data.message,
  ].join("\n");
}

export async function sendBookCallEmail(
  config: BookCallConfig,
  data: BookCallSubmission,
) {
  const transport = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.secure,
    auth: {
      user: config.smtp.user,
      pass: config.smtp.pass,
    },
  });

  await transport.sendMail({
    from: config.smtp.from,
    to: config.toEmail,
    replyTo: data.email,
    subject: `Book a call — ${data.name} (${data.company})`,
    text: buildEmailBody(data),
  });
}
