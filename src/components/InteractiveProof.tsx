"use client";

import { useEffect, useId, useState } from "react";

type Mode = "manual" | "agility";

const RAW_ROWS = [
  { id: "R-1042", signal: "47.2", note: "unlabelled", flag: "—" },
  { id: "R-1043", signal: "12.8", note: "dup?", flag: "warn" },
  { id: "R-1044", signal: "91.0", note: "null field", flag: "—" },
  { id: "R-1045", signal: "3.4", note: "mixed unit", flag: "err" },
  { id: "R-1046", signal: "66.1", note: "unlabelled", flag: "—" },
] as const;

const INSIGHTS = [
  { label: "Primary driver", value: "Volume concentration in segment B" },
  { label: "Anomaly rate", value: "6.2% of rows need review" },
  { label: "Recommended action", value: "Reallocate capacity to top 3 queues" },
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

function ManualPanel() {
  return (
    <div className="grid h-full min-h-0 gap-3 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="flex min-h-0 flex-col border border-neutral-200 bg-[#f7f7f7]">
        <div className="flex shrink-0 items-center justify-between border-b border-neutral-200 px-3 py-2">
          <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-neutral-500">
            Source data
          </p>
          <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-amber-700">
            Unresolved
          </p>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden">
          <table className="w-full text-left font-[family-name:var(--font-geist-mono)] text-[11px]">
            <thead className="border-b border-neutral-200 text-[9px] uppercase tracking-[0.12em] text-neutral-400">
              <tr>
                <th className="px-3 py-1.5 font-medium">Record</th>
                <th className="px-3 py-1.5 font-medium">Signal</th>
                <th className="hidden px-3 py-1.5 font-medium sm:table-cell">
                  Note
                </th>
                <th className="px-3 py-1.5 font-medium">Flag</th>
              </tr>
            </thead>
            <tbody className="text-neutral-600">
              {RAW_ROWS.map((row) => (
                <tr key={row.id} className="border-b border-neutral-200/80">
                  <td className="px-3 py-1.5">{row.id}</td>
                  <td className="px-3 py-1.5 tabular-nums">{row.signal}</td>
                  <td className="hidden px-3 py-1.5 text-neutral-400 sm:table-cell">
                    {row.note}
                  </td>
                  <td className="px-3 py-1.5">
                    <span
                      className={
                        row.flag === "err"
                          ? "text-red-600"
                          : row.flag === "warn"
                            ? "text-amber-600"
                            : "text-neutral-300"
                      }
                    >
                      {row.flag}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex min-h-0 flex-col border border-dashed border-neutral-300 bg-white">
        <div className="shrink-0 border-b border-dashed border-neutral-300 px-3 py-2">
          <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-neutral-500">
            Insight
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-2 px-4 py-4 text-center">
          <div className="size-8 border border-neutral-300" aria-hidden="true">
            <div className="flex h-full items-center justify-center text-neutral-300">
              ?
            </div>
          </div>
          <p className="max-w-[22ch] font-[family-name:var(--font-geist-mono)] text-[12px] leading-relaxed text-neutral-400">
            Still sorting fields by hand. Patterns stay buried in the dump.
          </p>
          <p className="font-[family-name:var(--font-geist-mono)] text-[9px] uppercase tracking-[0.14em] text-neutral-300">
            Progress · stalled
          </p>
        </div>
      </div>
    </div>
  );
}

function AgilityPanel({ animate }: { animate: boolean }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (!animate) {
      setStage(3);
      return;
    }

    setStage(0);
    const timers = [
      window.setTimeout(() => setStage(1), 350),
      window.setTimeout(() => setStage(2), 1100),
      window.setTimeout(() => setStage(3), 1900),
    ];

    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [animate]);

  const stages = [
    { label: "Ingest", done: stage >= 1 },
    { label: "Structure", done: stage >= 2 },
    { label: "Insight", done: stage >= 3 },
  ];

  return (
    <div className="grid h-full min-h-0 gap-3 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="flex min-h-0 flex-col border border-neutral-200 bg-neutral-950 text-white">
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-3 py-2">
          <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-white/50">
            Pipeline
          </p>
          <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-emerald-300">
            Moving
          </p>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-2.5 px-3 py-2.5">
          <div className="flex shrink-0 flex-wrap gap-1.5">
            {stages.map((item, index) => (
              <div
                key={item.label}
                className={[
                  "flex items-center gap-1.5 border px-2 py-1 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] transition-all duration-500",
                  item.done
                    ? "border-white/40 bg-white/10 text-white"
                    : "border-white/10 text-white/30",
                ].join(" ")}
              >
                <span
                  className={[
                    "size-1.5 rounded-full transition-colors duration-500",
                    item.done ? "bg-emerald-300" : "bg-white/20",
                  ].join(" ")}
                />
                {index + 1}. {item.label}
              </div>
            ))}
          </div>

          <div className="relative min-h-0 flex-1 overflow-hidden border border-white/10 bg-black/40">
            <div
              className={[
                "proof-stream divide-y divide-white/5 font-[family-name:var(--font-geist-mono)] text-[10px]",
                animate ? "proof-stream-active" : "",
              ].join(" ")}
            >
              {[...RAW_ROWS, ...RAW_ROWS, ...RAW_ROWS].map((row, index) => (
                <div
                  key={`${row.id}-${index}`}
                  className="flex items-center justify-between gap-3 px-2.5 py-1.5 text-white/55"
                >
                  <span>{row.id}</span>
                  <span className="tabular-nums text-white/35">
                    {row.signal}
                  </span>
                  <span
                    className={[
                      "transition-colors duration-500",
                      stage >= 2 ? "text-emerald-300/80" : "text-white/25",
                    ].join(" ")}
                  >
                    {stage >= 2 ? "mapped" : row.note}
                  </span>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-neutral-950 to-transparent" />
          </div>
        </div>
      </div>

      <div className="flex min-h-0 flex-col border border-neutral-200 bg-white">
        <div className="flex shrink-0 items-center justify-between border-b border-neutral-200 px-3 py-2">
          <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-neutral-500">
            Readable result
          </p>
          <p
            className={[
              "font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] transition-colors duration-500",
              stage >= 3 ? "text-emerald-700" : "text-neutral-300",
            ].join(" ")}
          >
            {stage >= 3 ? "Ready" : "Building"}
          </p>
        </div>

        <div className="flex min-h-0 flex-1 flex-col justify-center gap-2 overflow-hidden px-3 py-2.5">
          {INSIGHTS.map((insight, index) => {
            const visible = stage >= 3;
            return (
              <div
                key={insight.label}
                className={[
                  "border border-neutral-200 bg-[#fafafa] px-2.5 py-2 transition-all duration-500",
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-1 opacity-30",
                ].join(" ")}
                style={{ transitionDelay: visible ? `${index * 90}ms` : "0ms" }}
              >
                <p className="font-[family-name:var(--font-geist-mono)] text-[9px] uppercase tracking-[0.14em] text-neutral-400">
                  {insight.label}
                </p>
                <p className="mt-1 text-[13px] leading-snug tracking-[-0.02em] text-neutral-900">
                  {insight.value}
                </p>
              </div>
            );
          })}
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
    }, 4500);

    return () => window.clearInterval(id);
  }, [reduceMotion, paused]);

  function selectMode(next: Mode) {
    setMode(next);
  }

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
        <div className="mx-auto w-full max-w-[40rem] shrink-0 text-center">
          {/* <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.16em] text-neutral-500">
            Interactive proof
          </p> */}
          <h2
            id={labelId}
            className="mt-1.5 font-[family-name:var(--font-serif)] text-[clamp(1.25rem,2.8vw,1.85rem)] leading-[1.15] tracking-[-0.02em] text-neutral-950"
          >
            Same task. Two ways through the data.
          </h2>
          <p className="mx-auto mt-1.5 hidden max-w-[40ch] font-[family-name:var(--font-geist-mono)] text-[12px] leading-relaxed text-neutral-500 sm:block">
            A raw data dump becomes a clear insight — either by hand, or with
            Agility AI.
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
            onClick={() => selectMode("manual")}
            className={[
              "flex-1 px-3 py-2 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.1em] transition-colors sm:text-[11px]",
              mode === "manual"
                ? "bg-neutral-950 text-white"
                : "text-neutral-500 hover:text-neutral-900",
            ].join(" ")}
          >
            Manual
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "agility"}
            onClick={() => selectMode("agility")}
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
          <TimeBadge
            label="Manual"
            value="6 hours"
            active={mode === "manual"}
          />
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
