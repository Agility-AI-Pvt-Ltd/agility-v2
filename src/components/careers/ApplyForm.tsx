"use client";

import { useState, type FormEvent } from "react";

type ApplyFormProps = {
  slug: string;
  jobTitle: string;
  onCancel: () => void;
};

type FormState = "idle" | "submitting" | "success" | "error";

export default function ApplyForm({ slug, jobTitle, onCancel }: ApplyFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`/api/careers/apply/${encodeURIComponent(slug)}`, {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const body = (await res.json()) as { error?: string };
        throw new Error(body.error ?? "Application could not be submitted.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (state === "success") {
    return (
      <div className="mt-4 border border-emerald-200 bg-emerald-50 p-5">
        <p className="text-[14px] font-medium text-emerald-900">
          Application submitted for {jobTitle}.
        </p>
        <p className="mt-2 text-[13px] text-emerald-800">
          Thank you—we&apos;ll review your application and be in touch.
        </p>
        <button
          type="button"
          onClick={onCancel}
          className="mt-4 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.12em] text-emerald-900 underline-offset-2 hover:underline"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-4 border border-neutral-200 bg-[#fafafa] p-5 sm:p-6"
    >
      <p className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.14em] text-[#3b6ef5]">
        Apply · {jobTitle}
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="mb-2 block font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-neutral-500">
            Full name
          </span>
          <input
            required
            name="fullName"
            type="text"
            disabled={state === "submitting"}
            className="h-11 w-full border border-neutral-300 bg-white px-3 text-[14px] text-neutral-900 outline-none focus:border-neutral-500 disabled:opacity-60"
          />
        </label>
        <label className="block sm:col-span-1">
          <span className="mb-2 block font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-neutral-500">
            Email
          </span>
          <input
            required
            name="email"
            type="email"
            disabled={state === "submitting"}
            className="h-11 w-full border border-neutral-300 bg-white px-3 text-[14px] text-neutral-900 outline-none focus:border-neutral-500 disabled:opacity-60"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-neutral-500">
            Phone
          </span>
          <input
            required
            name="phone"
            type="tel"
            disabled={state === "submitting"}
            className="h-11 w-full border border-neutral-300 bg-white px-3 text-[14px] text-neutral-900 outline-none focus:border-neutral-500 disabled:opacity-60"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-neutral-500">
            Cover letter
          </span>
          <textarea
            required
            name="coverLetter"
            rows={4}
            disabled={state === "submitting"}
            className="w-full resize-y border border-neutral-300 bg-white px-3 py-2.5 text-[14px] text-neutral-900 outline-none focus:border-neutral-500 disabled:opacity-60"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-neutral-500">
            Resume
          </span>
          <input
            required
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            disabled={state === "submitting"}
            className="block w-full text-[13px] text-neutral-700 file:mr-4 file:border-0 file:bg-black file:px-3 file:py-2 file:font-[family-name:var(--font-geist-mono)] file:text-[11px] file:uppercase file:tracking-[0.1em] file:text-white disabled:opacity-60"
          />
        </label>
      </div>

      {error && (
        <p className="mt-4 text-[13px] text-red-600" role="alert">
          {error}
        </p>
      )}

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="cta-cut inline-flex h-10 items-center justify-center bg-black px-5 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.06em] text-white transition-all hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "submitting" ? "Submitting…" : "Submit application"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={state === "submitting"}
          className="inline-flex h-10 items-center justify-center px-2 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.06em] text-neutral-500 transition-colors hover:text-neutral-900 disabled:opacity-60"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
