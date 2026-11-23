"use client";

import { useEffect, useId, useState, type FormEvent, type ReactNode } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

type MessageUsButtonProps = {
  children?: ReactNode;
  className?: string;
};

const fieldClass =
  "h-11 w-full border border-neutral-300 bg-white px-3 text-[14px] text-neutral-900 outline-none focus:border-neutral-500 disabled:opacity-60";

const labelClass =
  "mb-2 block font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-neutral-500";

export function MessageUsButton({
  children = "Message us",
  className,
}: MessageUsButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      {open ? <MessageUsDialog onClose={() => setOpen(false)} /> : null}
    </>
  );
}

function MessageUsDialog({ onClose }: { onClose: () => void }) {
  const titleId = useId();
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape" && state !== "submitting") onClose();
    }

    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, state]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setError(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      let body: { error?: string } = {};
      try {
        body = (await res.json()) as { error?: string };
      } catch {
        body = {};
      }

      if (!res.ok) {
        if (res.status === 503) {
          throw new Error(body.error || "SMTP is not configured.");
        }
        throw new Error(body.error || "Message could not be sent.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/55"
        aria-label="Close message form"
        onClick={() => {
          if (state !== "submitting") onClose();
        }}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-[520px] overflow-hidden border border-neutral-200 bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-neutral-200 bg-black px-5 py-4 text-white">
          <div>
            <p
              id={titleId}
              className="font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.12em]"
            >
              Message us
            </p>
            <p className="mt-0.5 text-[12px] text-white/55">
              We&apos;ll get back to you shortly.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={state === "submitting"}
            className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.1em] text-white/70 transition-colors hover:text-white disabled:opacity-50"
          >
            Close
          </button>
        </div>

        <div className="max-h-[min(78vh,640px)] overflow-y-auto p-5 sm:p-6">
          {state === "success" ? (
            <div className="border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-[14px] font-medium text-emerald-900">
                Message sent.
              </p>
              <p className="mt-2 text-[13px] text-emerald-800">
                Thanks — we&apos;ve received your note and will reply soon.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.12em] text-emerald-900 underline-offset-2 hover:underline"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className={labelClass}>Full name</span>
                  <input
                    required
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    disabled={state === "submitting"}
                    className={fieldClass}
                  />
                </label>
                <label className="block sm:col-span-1">
                  <span className={labelClass}>Email</span>
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    disabled={state === "submitting"}
                    className={fieldClass}
                  />
                </label>
                <label className="block sm:col-span-1">
                  <span className={labelClass}>Phone</span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    disabled={state === "submitting"}
                    className={fieldClass}
                  />
                </label>
                <label className="block sm:col-span-1">
                  <span className={labelClass}>Organisation</span>
                  <input
                    name="organization"
                    type="text"
                    autoComplete="organization"
                    disabled={state === "submitting"}
                    className={fieldClass}
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className={labelClass}>Interest</span>
                  <select
                    name="interest"
                    disabled={state === "submitting"}
                    defaultValue=""
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="AI Enablement">AI Enablement</option>
                    <option value="Automation">Automation</option>
                    <option value="Engineering Products">
                      Engineering Products
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className={labelClass}>Message</span>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    disabled={state === "submitting"}
                    className="w-full resize-y border border-neutral-300 bg-white px-3 py-2.5 text-[14px] text-neutral-900 outline-none focus:border-neutral-500 disabled:opacity-60"
                  />
                </label>
              </div>

              {error ? (
                <p className="mt-4 text-[13px] text-red-600" role="alert">
                  {error}
                </p>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="cta-cut inline-flex h-10 items-center justify-center bg-black px-5 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.06em] text-white transition-all hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {state === "submitting" ? "Sending…" : "Send message"}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  disabled={state === "submitting"}
                  className="inline-flex h-10 items-center justify-center px-2 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.06em] text-neutral-500 transition-colors hover:text-neutral-900 disabled:opacity-60"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
