"use client";

import { useEffect, useId, useState, type FormEvent, type ReactNode } from "react";
import {
  OPEN_BOOK_CALL_EVENT,
  openBookCall,
} from "@/lib/book-call/open-book-call";

const INTERESTS = [
  "AI Enablement",
  "AI Integration",
  "AI Products",
  "Not sure yet",
] as const;

type BookCallButtonProps = {
  children: ReactNode;
  className?: string;
};

export function BookCallButton({ children, className }: BookCallButtonProps) {
  return (
    <button type="button" onClick={() => openBookCall()} className={className}>
      {children}
    </button>
  );
}

export default function BookCallModal() {
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const onOpen = () => {
      setOpen(true);
      setError(null);
      setSuccess(false);
    };

    window.addEventListener(OPEN_BOOK_CALL_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_BOOK_CALL_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (window.location.hash === "#book-call") {
      openBookCall();
    }

    const onHashChange = () => {
      if (window.location.hash === "#book-call") {
        openBookCall();
      }
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          company: data.get("company"),
          role: data.get("role"),
          interest: data.get("interest"),
          preferredTimes: data.get("preferredTimes"),
          message: data.get("message"),
        }),
      });

      const body = (await res.json()) as { error?: string; message?: string };

      if (!res.ok) {
        setError(body.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSuccess(true);
      form.reset();
    } catch {
      setError("Could not reach the server. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Close book a call form"
        onClick={() => setOpen(false)}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[min(92vh,760px)] w-full max-w-[560px] flex-col overflow-hidden border border-neutral-200 bg-white shadow-2xl"
      >
        <div className="flex items-start justify-between border-b border-neutral-200 bg-black px-5 py-4 text-white">
          <div>
            <p
              id={titleId}
              className="font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.12em]"
            >
              Book a call
            </p>
            <p className="mt-1 text-[13px] text-white/55">
              Share a few details — we&apos;ll confirm a time by email.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.1em] text-white/70 transition-colors hover:text-white"
          >
            Close
          </button>
        </div>

        <form
          onSubmit={onSubmit}
          data-lenis-prevent
          className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 py-5"
        >
          {success ? (
            <div className="py-8 text-center">
              <p className="font-[family-name:var(--font-serif)] text-[1.35rem] leading-tight tracking-[-0.02em] text-neutral-950">
                Request sent
              </p>
              <p className="mx-auto mt-3 max-w-[36ch] text-[14px] leading-relaxed text-neutral-600">
                Thanks — we&apos;ll review your details and reply with a time
                that works.
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="cta-cut mt-6 inline-flex h-11 items-center justify-center bg-black px-6 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] text-white hover:bg-neutral-800"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="mb-2 block font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-neutral-500">
                    Full name
                  </span>
                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="h-11 w-full border border-neutral-300 bg-transparent px-3 text-[14px] text-neutral-900 outline-none focus:border-neutral-500"
                  />
                </label>

                <label className="block sm:col-span-1">
                  <span className="mb-2 block font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-neutral-500">
                    Work email
                  </span>
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="h-11 w-full border border-neutral-300 bg-transparent px-3 text-[14px] text-neutral-900 outline-none focus:border-neutral-500"
                  />
                </label>

                <label className="block sm:col-span-1">
                  <span className="mb-2 block font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-neutral-500">
                    Phone
                  </span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="h-11 w-full border border-neutral-300 bg-transparent px-3 text-[14px] text-neutral-900 outline-none focus:border-neutral-500"
                  />
                </label>

                <label className="block sm:col-span-1">
                  <span className="mb-2 block font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-neutral-500">
                    Company
                  </span>
                  <input
                    required
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="h-11 w-full border border-neutral-300 bg-transparent px-3 text-[14px] text-neutral-900 outline-none focus:border-neutral-500"
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="mb-2 block font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-neutral-500">
                  Role (optional)
                </span>
                <input
                  name="role"
                  type="text"
                  autoComplete="organization-title"
                  className="h-11 w-full border border-neutral-300 bg-transparent px-3 text-[14px] text-neutral-900 outline-none focus:border-neutral-500"
                />
              </label>

              <label className="mt-4 block">
                <span className="mb-2 block font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-neutral-500">
                  What are you looking for?
                </span>
                <select
                  required
                  name="interest"
                  defaultValue=""
                  className="h-11 w-full border border-neutral-300 bg-white px-3 text-[14px] text-neutral-900 outline-none focus:border-neutral-500"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {INTERESTS.map((interest) => (
                    <option key={interest} value={interest}>
                      {interest}
                    </option>
                  ))}
                </select>
              </label>

              <label className="mt-4 block">
                <span className="mb-2 block font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-neutral-500">
                  Preferred times
                </span>
                <input
                  required
                  name="preferredTimes"
                  type="text"
                  placeholder="e.g. Tue–Thu mornings, IST"
                  className="h-11 w-full border border-neutral-300 bg-transparent px-3 text-[14px] text-neutral-900 outline-none focus:border-neutral-500"
                />
              </label>

              <label className="mt-4 block">
                <span className="mb-2 block font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-neutral-500">
                  What should we prepare?
                </span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Brief context — team size, current tools, where you're stuck."
                  className="w-full resize-y border border-neutral-300 bg-transparent px-3 py-2.5 text-[14px] text-neutral-900 outline-none focus:border-neutral-500"
                />
              </label>

              {error && (
                <p className="mt-4 text-[13px] leading-relaxed text-red-600">
                  {error}
                </p>
              )}

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={submitting}
                  className="cta-cut inline-flex h-11 items-center justify-center bg-black px-6 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send request"}
                </button>
                <p className="font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.04em] text-neutral-400">
                  We typically reply within one business day.
                </p>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
