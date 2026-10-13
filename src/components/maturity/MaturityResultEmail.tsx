"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/company";
import { getResultForLevel, type RungLevel } from "@/lib/maturity-check";

type MaturityResultEmailProps = {
  level: RungLevel;
};

export default function MaturityResultEmail({ level }: MaturityResultEmailProps) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const result = getResultForLevel(level);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    const subject = encodeURIComponent(
      `AI Maturity Check — Rung ${String(level).padStart(2, "0")}`,
    );
    const body = encodeURIComponent(
      `Please email me a summary of my AI Maturity Check result.\n\nRung: ${level} — ${result.title}\nReply-to: ${trimmed}\n`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 rounded-md border border-white/15 bg-white/5 p-4 sm:p-5"
    >
      <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-white/45">
        Email me my report
      </p>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@organisation.in"
          className="min-w-0 flex-1 rounded-sm border border-white/20 bg-black/40 px-3 py-2.5 text-[14px] text-white outline-none placeholder:text-white/35 focus:border-[#e85d04]"
        />
        <button
          type="submit"
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-sm bg-[#e85d04] px-5 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.08em] text-black transition-opacity hover:opacity-90"
        >
          Send request
        </button>
      </div>
      {sent && (
        <p className="mt-3 text-[13px] text-white/55">
          Your email app should open — send the message and we&apos;ll reply with
          a summary within one working day.
        </p>
      )}
    </form>
  );
}
