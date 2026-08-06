export type BookCallConfig = {
  toEmail: string;
  smtp: {
    host: string;
    port: number;
    secure: boolean;
    user: string;
    pass: string;
    from: string;
  };
};

export function getBookCallConfig(): BookCallConfig | null {
  const toEmail = process.env.BOOK_CALL_TO_EMAIL?.trim();
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const from = process.env.SMTP_FROM?.trim() || toEmail;

  if (!toEmail || !host || !user || !pass || !from) {
    return null;
  }

  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = process.env.SMTP_SECURE === "true";

  return {
    toEmail,
    smtp: {
      host,
      port: Number.isFinite(port) ? port : 587,
      secure,
      user,
      pass,
      from,
    },
  };
}
