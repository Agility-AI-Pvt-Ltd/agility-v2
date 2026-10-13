"use client";

import { BookCallButton } from "@/components/BookCallModal";
import { BOOK_CALL_WHATSAPP_URL, CONTACT_EMAIL } from "@/lib/company";

type ContactCTAProps = {
  id?: string;
  tone?: "light" | "dark";
};

const PROGRAMMES_PHONE = "7042149608";

export default function ContactCTA({
  id = "contact",
  tone = "dark",
}: ContactCTAProps) {
  const isDark = tone === "dark";

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={isDark ? "bg-black text-white" : "bg-white text-black"}
    >
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20 md:px-14 lg:px-16 xl:px-20">
        <div className="max-w-2xl">
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
            Tell us what you need. We reply within one working day — book a call
            on WhatsApp or email us directly.
          </p>

          <BookCallButton
            className={[
              "cta-cut mt-8 inline-flex h-11 items-center justify-center px-6 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] transition-all duration-300",
              isDark
                ? "bg-white text-black hover:bg-white/90"
                : "bg-black text-white hover:bg-neutral-800",
            ].join(" ")}
          >
            Book a Call
          </BookCallButton>

          <div
            className={[
              "mt-10 space-y-3 border-t pt-8 text-[14px]",
              isDark ? "border-white/10 text-white/55" : "border-neutral-200 text-neutral-600",
            ].join(" ")}
          >
            <p>
              Email{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={[
                  "underline-offset-2 transition-colors hover:underline",
                  isDark ? "text-white/80 hover:text-white" : "text-neutral-900",
                ].join(" ")}
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p>
              WhatsApp — Bhawna Khorwal, Head of Programmes{" "}
              <a
                href={BOOK_CALL_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "underline-offset-2 transition-colors hover:underline",
                  isDark ? "text-white/80 hover:text-white" : "text-neutral-900",
                ].join(" ")}
              >
                {PROGRAMMES_PHONE}
              </a>
            </p>
          </div>
        </div>

        <div
          id={id === "contact" ? "book-call" : undefined}
          className="sr-only"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
