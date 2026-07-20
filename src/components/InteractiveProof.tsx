"use client";

import { useEffect, useId, useState } from "react";

type Mode = "manual" | "agility";

const SOURCES = [
  { id: "email", label: "Email", detail: "47 unread threads" },
  { id: "sheet", label: "Spreadsheet", detail: "3 tabs, outdated" },
  { id: "crm", label: "CRM", detail: "Notes in 4 places" },
  { id: "chat", label: "Team chat", detail: "Scattered updates" },
] as const;

const FOLLOW_UPS = [
  { name: "Northfield Ops", note: "Contract renewal due Friday" },
  { name: "Harbor Finance", note: "Asked twice, no reply yet" },
  { name: "Summit Legal", note: "Waiting on signed scope" },
] as const;

function TimeBadge({
  label,
  value,
  active,
}: {
  label: string;
  value: string;
  active: boolean;
}) {
  return (
    <div
      className={[
        "flex items-center justify-between gap-3 border px-3 py-2 transition-colors duration-300 sm:block sm:px-3.5 sm:py-2.5",
        active
          ? "border-neutral-900 bg-neutral-950 text-white"
          : "border-neutral-200 bg-white text-neutral-400",
      ].join(" ")}
    >
      <p className="font-[family-name:var(--font-geist-mono)] text-[9px] uppercase tracking-[0.14em] sm:text-[10px]">
        {label}
      </p>
      <p
        className={[
          "font-[family-name:var(--font-geist-mono)] text-[16px] font-light tracking-[-0.04em] sm:mt-0.5 sm:text-[18px]",
          active ? "text-white" : "text-neutral-400",
        ].join(" ")}
      >
        {value}
      </p>
    </div>
  );
}

function SourceIcon({ kind }: { kind: (typeof SOURCES)[number]["id"] }) {
  const paths: Record<(typeof SOURCES)[number]["id"], string> = {
    email: "M4 6h12v8H4V6zm0 0l6 4 6-4",
    sheet: "M6 4h8l4 4v10H6V4zm8 0v4h4",
    crm: "M8 8a3 3 0 116 0 3 3 0 01-6 0zm-5 10a5 5 0 0110 0",
    chat: "M5 6h10v6H9l-2 2v-2H5V6z",
  };

  return (
    <svg
      viewBox="0 0 20 20"
      className="size-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d={paths[kind]} strokeLinejoin="round" />
    </svg>
  );
}

function ManualPanel() {
  return (
    <div className="flex h-full min-h-0 flex-col gap-4">
      <div className="shrink-0 rounded-sm border border-amber-200 bg-amber-50 px-3 py-2.5 sm:px-4">
        <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-amber-800">
          The question
        </p>
        <p className="mt-1 text-[14px] font-medium tracking-[-0.01em] text-neutral-900 sm:text-[15px]">
          Who needs a follow-up this week?
        </p>
      </div>

      <div className="grid min-h-0 flex-1 gap-3 sm:grid-cols-2">
        <div className="flex min-h-0 flex-col border border-neutral-200 bg-white p-3 sm:p-4">
          <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-neutral-500">
            Checking by hand
          </p>
          <ul className="mt-3 space-y-2">
            {SOURCES.map((source, index) => (
              <li
                key={source.id}
                className="proof-manual-source flex items-center gap-3 border border-neutral-200 bg-[#fafafa] px-3 py-2.5"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <span className="text-neutral-400">
                  <SourceIcon kind={source.id} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-medium text-neutral-800">
                    {source.label}
                  </p>
                  <p className="text-[11px] text-neutral-400">{source.detail}</p>
                </div>
                <span className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.1em] text-amber-600">
                  Open
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-auto pt-3 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-neutral-400">
            One tab at a time · copy · paste · repeat
          </p>
        </div>

        <div className="flex min-h-0 flex-col items-center justify-center border border-dashed border-neutral-300 bg-[#f7f7f7] p-4 text-center">
          <div
            className="proof-manual-spin flex size-14 items-center justify-center rounded-full border-2 border-dashed border-neutral-300 bg-white"
            aria-hidden="true"
          >
            <span className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.12em] text-neutral-400">
              ?
            </span>
          </div>
          <p className="mt-4 max-w-[24ch] text-[14px] leading-relaxed text-neutral-600">
            Still hunting through inboxes and spreadsheets. No clear list yet.
          </p>
          <p className="mt-2 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-neutral-400">
            Answer · not ready
          </p>
        </div>
      </div>
    </div>
  );
}

function AgilityPanel({ animate }: { animate: boolean }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!animate) {
      setStep(3);
      return;
    }

    setStep(0);
    const timers = [
      window.setTimeout(() => setStep(1), 400),
      window.setTimeout(() => setStep(2), 1200),
      window.setTimeout(() => setStep(3), 2000),
    ];
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [animate]);

  return (
    <div className="flex h-full min-h-0 flex-col gap-4">
      <div className="shrink-0 rounded-sm border border-emerald-200 bg-emerald-50 px-3 py-2.5 sm:px-4">
        <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-emerald-800">
          The question
        </p>
        <p className="mt-1 text-[14px] font-medium tracking-[-0.01em] text-neutral-900 sm:text-[15px]">
          Who needs a follow-up this week?
        </p>
      </div>

      <div className="grid min-h-0 flex-1 gap-3 lg:grid-cols-[1fr_1.1fr]">
        <div className="relative flex min-h-0 flex-col border border-neutral-200 bg-neutral-950 p-3 text-white sm:p-4">
          <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-white/45">
            All your sources, at once
          </p>

          <div className="relative mt-4 flex min-h-0 flex-1 flex-col justify-between gap-3">
            <ul className="grid grid-cols-2 gap-2">
              {SOURCES.map((source, index) => (
                <li
                  key={source.id}
                  className={[
                    "flex items-center gap-2 border px-2.5 py-2 transition-all duration-500",
                    step >= 1
                      ? "border-emerald-400/40 bg-emerald-400/10 text-white"
                      : "border-white/10 text-white/40",
                  ].join(" ")}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <SourceIcon kind={source.id} />
                  <span className="text-[11px] font-medium">{source.label}</span>
                </li>
              ))}
            </ul>

            <div className="relative flex flex-1 items-center justify-center py-2">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 200 120"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {[30, 70, 130, 170].map((x, index) => (
                  <line
                    key={x}
                    x1={x}
                    y1="20"
                    x2="100"
                    y2="95"
                    stroke="rgba(52,211,153,0.45)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className={[
                      "proof-agility-line transition-opacity duration-500",
                      step >= 1 ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  />
                ))}
              </svg>

              <div
                className={[
                  "relative z-10 flex size-14 items-center justify-center rounded-full border transition-all duration-500",
                  step >= 2
                    ? "border-emerald-300 bg-emerald-400/20 scale-100 opacity-100"
                    : "border-white/20 bg-white/5 scale-90 opacity-50",
                ].join(" ")}
              >
                <span className="font-[family-name:var(--font-geist-mono)] text-[9px] uppercase tracking-[0.1em] text-emerald-200">
                  AI
                </span>
              </div>
            </div>

            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-white/35">
              {step < 2
                ? "Connecting sources…"
                : step < 3
                  ? "Finding patterns…"
                  : "Done"}
            </p>
          </div>
        </div>

        <div className="flex min-h-0 flex-col border border-neutral-200 bg-white p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-neutral-500">
              Your answer
            </p>
            <p
              className={[
                "font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] transition-colors duration-500",
                step >= 3 ? "text-emerald-700" : "text-neutral-300",
              ].join(" ")}
            >
              {step >= 3 ? "Ready" : "Building"}
            </p>
          </div>

          <div
            className={[
              "mt-3 rounded-sm border border-emerald-200 bg-emerald-50 px-3 py-3 transition-all duration-500",
              step >= 3 ? "translate-y-0 opacity-100" : "translate-y-2 opacity-30",
            ].join(" ")}
          >
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-emerald-800">
              This week
            </p>
            <p className="mt-1 font-[family-name:var(--font-serif)] text-[1.35rem] leading-tight tracking-[-0.02em] text-neutral-950">
              12 customers need a follow-up
            </p>
            <p className="mt-1 text-[13px] text-neutral-600">
              Start with these three — pulled from email, CRM, and your team&apos;s
              notes.
            </p>
          </div>

          <ul className="mt-3 min-h-0 flex-1 space-y-2 overflow-hidden">
            {FOLLOW_UPS.map((item, index) => (
              <li
                key={item.name}
                className={[
                  "border border-neutral-200 bg-[#fafafa] px-3 py-2.5 transition-all duration-500",
                  step >= 3
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-25",
                ].join(" ")}
                style={{ transitionDelay: step >= 3 ? `${index * 100}ms` : "0ms" }}
              >
                <p className="text-[13px] font-medium text-neutral-900">
                  {item.name}
                </p>
                <p className="mt-0.5 text-[12px] text-neutral-500">{item.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function InteractiveProof() {
  const labelId = useId();
  const [mode, setMode] = useState<Mode>("manual");
  const [reduceMotion, setReduceMotion] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(media.matches);
    const onChange = () => setReduceMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion || paused) return;

    const id = window.setInterval(() => {
      setMode((current) => (current === "manual" ? "agility" : "manual"));
    }, 5000);

    return () => window.clearInterval(id);
  }, [reduceMotion, paused]);

  return (
    <section
      id="proof"
      aria-labelledby={labelId}
      className="sticky top-0 z-10 flex h-svh flex-col overflow-hidden border-b border-neutral-200 bg-[#f4f4f4]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="mx-auto flex h-full w-full max-w-[1100px] min-h-0 flex-col px-5 py-5 sm:px-6 sm:py-6 md:py-7">
        <div className="mx-auto w-full max-w-[42rem] shrink-0 text-center">
          <h2
            id={labelId}
            className="font-[family-name:var(--font-serif)] text-[clamp(1.25rem,2.8vw,1.85rem)] leading-[1.15] tracking-[-0.02em] text-neutral-950"
          >
            Same question. Two very different afternoons.
          </h2>
          <p className="mx-auto mt-2 max-w-[44ch] text-[13px] leading-relaxed text-neutral-500 sm:text-[14px]">
            A simple business question — answered by digging through tabs, or
            answered in one clear list.
          </p>
        </div>

        <div
          className="mx-auto mt-3 flex w-full max-w-md shrink-0 rounded-none border border-neutral-300 bg-white p-0.5 sm:mt-4"
          role="tablist"
          aria-label="Compare approaches"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === "manual"}
            onClick={() => setMode("manual")}
            className={[
              "flex-1 px-3 py-2 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.1em] transition-colors sm:text-[11px]",
              mode === "manual"
                ? "bg-neutral-950 text-white"
                : "text-neutral-500 hover:text-neutral-900",
            ].join(" ")}
          >
            By hand
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "agility"}
            onClick={() => setMode("agility")}
            className={[
              "flex-1 px-3 py-2 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.1em] transition-colors sm:text-[11px]",
              mode === "agility"
                ? "bg-neutral-950 text-white"
                : "text-neutral-500 hover:text-neutral-900",
            ].join(" ")}
          >
            With Agility AI
          </button>
        </div>

        <div className="mt-3 grid shrink-0 gap-2 sm:grid-cols-2 sm:gap-3">
          <TimeBadge label="By hand" value="6 hours" active={mode === "manual"} />
          <TimeBadge
            label="With Agility AI"
            value="20 minutes"
            active={mode === "agility"}
          />
        </div>

        <div
          className="mt-3 min-h-0 flex-1 sm:mt-4"
          role="tabpanel"
          aria-live="polite"
        >
          {mode === "manual" ? (
            <ManualPanel />
          ) : (
            <AgilityPanel animate={!reduceMotion} />
          )}
        </div>
      </div>
    </section>
  );
}
