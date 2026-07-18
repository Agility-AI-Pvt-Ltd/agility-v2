"use client";

import { useState, type FormEvent } from "react";

type ContactCTAProps = {
  id?: string;
  tone?: "light" | "dark";
};

export default function ContactCTA({
  id = "contact",
  tone = "dark",
}: ContactCTAProps) {
  const [submitted, setSubmitted] = useState(false);

  const isDark = tone === "dark";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={isDark ? "bg-black text-white" : "bg-white text-black"}
    >
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20 md:px-14 lg:px-16 xl:px-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id={`${id}-heading`}
              className="font-[family-name:var(--font-serif)] text-[clamp(1.85rem,3.8vw,2.75rem)] leading-[1.12] tracking-[-0.02em]"
            >
              Tell us where AI should create leverage
            </h2>
            <p
              className={[
                "mt-4 max-w-[42ch] text-[15px] leading-relaxed sm:text-[16px]",
                isDark ? "text-white/55" : "text-neutral-500",
              ].join(" ")}
            >
              Share a short brief or book a call. We&apos;ll help you map
              adoption and implementation without the theatre.
            </p>

            <a
              href="#book-call"
              className={[
                "cta-cut mt-8 inline-flex h-11 items-center justify-center px-6 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] transition-all duration-300",
                isDark
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-black text-white hover:bg-neutral-800",
              ].join(" ")}
            >
              Book a Call
            </a>
          </div>

          <form
            onSubmit={onSubmit}
            className={[
              "border p-6 sm:p-8",
              isDark ? "border-white/15 bg-white/[0.03]" : "border-neutral-200 bg-[#fafafa]",
            ].join(" ")}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span
                  className={[
                    "mb-2 block font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.12em]",
                    isDark ? "text-white/45" : "text-neutral-500",
                  ].join(" ")}
                >
                  Name
                </span>
                <input
                  required
                  name="name"
                  type="text"
                  className={[
                    "h-11 w-full border bg-transparent px-3 text-[14px] outline-none transition-colors",
                    isDark
                      ? "border-white/20 text-white focus:border-white/50"
                      : "border-neutral-300 text-neutral-900 focus:border-neutral-500",
                  ].join(" ")}
                />
              </label>
              <label className="block sm:col-span-1">
                <span
                  className={[
                    "mb-2 block font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.12em]",
                    isDark ? "text-white/45" : "text-neutral-500",
                  ].join(" ")}
                >
                  Email
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  className={[
                    "h-11 w-full border bg-transparent px-3 text-[14px] outline-none transition-colors",
                    isDark
                      ? "border-white/20 text-white focus:border-white/50"
                      : "border-neutral-300 text-neutral-900 focus:border-neutral-500",
                  ].join(" ")}
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span
                className={[
                  "mb-2 block font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.12em]",
                  isDark ? "text-white/45" : "text-neutral-500",
                ].join(" ")}
              >
                Message
              </span>
              <textarea
                required
                name="message"
                rows={4}
                className={[
                  "w-full resize-y border bg-transparent px-3 py-2.5 text-[14px] outline-none transition-colors",
                  isDark
                    ? "border-white/20 text-white focus:border-white/50"
                    : "border-neutral-300 text-neutral-900 focus:border-neutral-500",
                ].join(" ")}
              />
            </label>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className={[
                  "cta-cut inline-flex h-11 items-center justify-center px-6 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] transition-all duration-300",
                  isDark
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-black text-white hover:bg-neutral-800",
                ].join(" ")}
              >
                Send Message
              </button>
              <p
                className={[
                  "font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.04em]",
                  isDark ? "text-white/40" : "text-neutral-400",
                ].join(" ")}
              >
                {submitted
                  ? "Thanks — placeholder form received."
                  : "Form is placeholder-ready."}
              </p>
            </div>
          </form>
        </div>

        {/* Repeated book-a-call band */}
        <div
          id={id === "contact" ? "book-call" : undefined}
          className={[
            "mt-12 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between",
            isDark ? "border-white/10" : "border-neutral-200",
          ].join(" ")}
        >
          <p
            className={[
              "max-w-xl text-[14px] leading-relaxed sm:text-[15px]",
              isDark ? "text-white/55" : "text-neutral-500",
            ].join(" ")}
          >
            Prefer a conversation first? Book a call and we&apos;ll walk through
            adoption vs implementation for your context.
          </p>
          <a
            href={
              id === "contact" ? "https://cal.com" : "/contact#book-call"
            }
            {...(id === "contact"
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className={[
              "cta-cut inline-flex h-11 shrink-0 items-center justify-center border px-6 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] transition-all duration-300",
              isDark
                ? "border-white/70 text-white hover:bg-white hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white",
            ].join(" ")}
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
