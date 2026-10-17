"use client";

import Image from "next/image";
import { useId, useState } from "react";

type Mode = "manual" | "agility";

const ASSET = "/assets/proof";

const SOURCES = [
  {
    id: "email",
    label: "Email",
    detail: "47 unread threads",
    iconBase: "source-email",
  },
  {
    id: "spreadsheet",
    label: "Spreadsheet",
    detail: "3 tabs, outdated",
    iconBase: "source-spreadsheet",
  },
  {
    id: "crm",
    label: "CRM",
    detail: "Notes in 4 places",
    iconBase: "source-crm",
  },
  {
    id: "chat",
    label: "Team chat",
    detail: "Scattered updates",
    iconBase: "source-chat",
  },
] as const;

const BRANDS = [
  { id: "gmail", label: "Gmail", iconBase: "brand-gmail", rotate: "-8deg" },
  { id: "sheets", label: "Sheets", iconBase: "brand-sheets", rotate: "-3deg" },
  {
    id: "salesforce",
    label: "Salesforce",
    iconBase: "brand-salesforce",
    rotate: "3deg",
  },
  { id: "slack", label: "Slack", iconBase: "brand-slack", rotate: "8deg" },
] as const;

const FOLLOW_UPS = [
  {
    initials: "NO",
    name: "Northfield Ops",
    note: "Contract renewal due Friday",
    source: "Email",
    sourceTone: "bg-[#ede9fe] text-[#6d28d9]",
    date: "May 3",
  },
  {
    initials: "HF",
    name: "Harbor Finance",
    note: "Asked twice, no reply yet",
    source: "CRM",
    sourceTone: "bg-[#fee2e2] text-[#b91c1c]",
    date: "May 4",
  },
  {
    initials: "SL",
    name: "Summit Legal",
    note: "Waiting on signed scope",
    source: "Spreadsheet",
    sourceTone: "bg-[#dcfce7] text-[#15803d]",
    date: "May 5",
  },
  {
    initials: "BG",
    name: "BrightGrowth",
    note: "Interested in expansion plan",
    source: "Team chat",
    sourceTone: "bg-[#ede9fe] text-[#6d28d9]",
    date: "May 6",
  },
] as const;

function ProofImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <span className={["relative inline-flex shrink-0", className].join(" ")}>
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        className="object-contain"
      />
    </span>
  );
}

function SparkleIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <ProofImage
      src={`${ASSET}/27_sparkle_decorations.png`}
      alt=""
      className={className}
    />
  );
}

function ManualCard({ active }: { active: boolean }) {
  return (
    <article
      className={[
        "relative flex h-full flex-col rounded-[1.75rem] border bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all duration-500 sm:p-6 lg:z-0",
        active
          ? "border-neutral-200 opacity-100"
          : "border-neutral-100 opacity-75 lg:translate-y-2 lg:scale-[0.98]",
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        <ProofImage
          src={`${ASSET}/clock.svg`}
          alt=""
          className="mt-0.5 size-9 shrink-0"
        />
        <div>
          <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.16em] text-[#ea580c]">
            By hand
          </p>
          <p className="mt-0.5 font-[family-name:var(--font-serif)] text-[clamp(1.7rem,2.4vw,2.1rem)] leading-none tracking-[-0.02em] text-neutral-950">
            6 hours
          </p>
          <p className="mt-1.5 text-[13px] text-neutral-500">
            Dig through multiple tools and tabs
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-[#fff7ed] px-4 py-3.5">
        <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.14em] text-[#ea580c]">
          The question
        </p>
        <p className="mt-1.5 text-[15px] font-semibold tracking-[-0.01em] text-neutral-950 sm:text-[16px]">
          Who needs a follow-up this week?
        </p>
      </div>

      <div className="mt-5 flex min-h-0 flex-1 flex-col">
        <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-400">
          Checking multiple sources
        </p>
        <ul className="mt-3 space-y-2">
          {SOURCES.map((source, index) => (
            <li
              key={source.id}
              className="proof-manual-source flex items-center gap-3 rounded-xl border border-neutral-200 bg-[#fafafa] px-3 py-2.5"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white text-neutral-500 shadow-sm">
                <ProofImage
                  src={`${ASSET}/${source.iconBase}.svg`}
                  alt=""
                  className="size-4"
                />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-semibold text-neutral-900">
                  {source.label}
                </p>
                <p className="text-[11px] text-neutral-400">{source.detail}</p>
              </div>
              <span
                className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-[#ea580c]/50"
                aria-hidden="true"
              >
                ···
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="relative mx-auto flex h-16 max-w-[260px] items-end justify-center gap-2">
            {BRANDS.map((brand, index) => (
              <div
                key={brand.id}
                className="relative size-11 shrink-0 overflow-hidden rounded-2xl bg-white shadow-[0_8px_20px_rgba(15,23,42,0.12)] ring-1 ring-black/5"
                style={{
                  transform: `rotate(${brand.rotate}) translateY(${index % 2 === 0 ? "6px" : "0px"})`,
                }}
              >
                <ProofImage
                  src={`${ASSET}/${brand.iconBase}.png`}
                  alt={brand.label}
                  className="size-full p-1.5"
                />
              </div>
            ))}
          </div>
          <p className="mt-3 text-center font-[family-name:var(--font-cursive)] text-[1.15rem] leading-tight text-neutral-500">
            Jumping between tools, trying to piece it together...
          </p>
        </div>
      </div>
    </article>
  );
}

function AgilityCard({ active }: { active: boolean }) {
  return (
    <article
      className={[
        "relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border bg-[#f8f6ff] p-5 shadow-[0_22px_60px_rgba(124,58,237,0.14)] transition-all duration-500 sm:p-6 lg:z-10",
        active
          ? "border-[#c4b5fd] opacity-100 lg:-translate-y-2 lg:scale-[1.01]"
          : "border-[#ddd6fe]/70 opacity-80",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute -right-1 -top-2 z-10 hidden w-[120px] sm:block lg:w-[130px]">
        <Image
          src={`${ASSET}/robot.png`}
          alt=""
          width={130}
          height={130}
          className="h-auto w-full object-contain drop-shadow-[0_12px_24px_rgba(124,58,237,0.25)]"
        />
        <div className="absolute -left-[4.5rem] top-10 hidden rotate-[-8deg] lg:block">
          <svg
            viewBox="0 0 72 36"
            className="h-8 w-16 text-[#7c3aed]"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 28c18-18 36-22 60-18"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeDasharray="3 3"
            />
            <path
              d="M56 6l10 4-8 6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="mt-0.5 max-w-[9ch] font-[family-name:var(--font-cursive)] text-[1.05rem] leading-tight text-[#7c3aed]">
            Clear answer with sources
          </p>
        </div>
      </div>

      <div className="relative z-0 flex items-start gap-3 pr-16 sm:pr-24">
        <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-[#ddd6fe]">
          <ProofImage
            src={`${ASSET}/bolt.svg`}
            alt=""
            className="size-5"
          />
        </span>
        <div>
          <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.16em] text-[#7c3aed]">
            With Agility AI
          </p>
          <p className="mt-0.5 font-[family-name:var(--font-serif)] text-[clamp(1.7rem,2.4vw,2.1rem)] leading-none tracking-[-0.02em] text-neutral-950">
            20 minutes
          </p>
          <p className="mt-1.5 text-[13px] text-neutral-500">
            One clear answer, with sources
          </p>
        </div>
      </div>

      <div className="mt-5 flex min-h-0 flex-1 flex-col rounded-2xl border border-[#e9e4ff] bg-white/80 p-4 backdrop-blur-sm">
        <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-400">
          The answer
        </p>

        <div className="mt-3 flex gap-3 rounded-2xl bg-[#ecfdf5] px-3.5 py-3">
          <ProofImage
            src={`${ASSET}/check.svg`}
            alt=""
            className="mt-0.5 size-5 shrink-0"
          />
          <div>
            <p className="text-[14px] font-semibold tracking-[-0.01em] text-neutral-950 sm:text-[15px]">
              12 customers need a follow-up this week
            </p>
            <p className="mt-1 text-[12px] leading-relaxed text-neutral-500">
              Here are the key ones, pulled from email, CRM and your team&apos;s
              notes.
            </p>
          </div>
        </div>

        <ul className="mt-3 space-y-2">
          {FOLLOW_UPS.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-[#fafafa] px-3 py-2.5"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#ede9fe] text-[11px] font-semibold text-[#6d28d9]">
                {item.initials}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold text-neutral-900">
                  {item.name}
                </p>
                <p className="truncate text-[11px] text-neutral-400">
                  {item.note}
                </p>
              </div>
              <span
                className={`hidden rounded-full px-2 py-0.5 text-[10px] font-medium sm:inline-flex ${item.sourceTone}`}
              >
                {item.source}
              </span>
              <span className="shrink-0 font-[family-name:var(--font-geist-mono)] text-[10px] text-neutral-400">
                {item.date}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-center font-[family-name:var(--font-cursive)] text-[1.15rem] leading-tight text-[#7c3aed]">
          Minutes, not hours — with sources attached.
        </p>
      </div>
    </article>
  );
}

function TransitionArrow() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-[44%] z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 88 64"
        className="h-14 w-20 text-[#7c3aed] drop-shadow-sm"
        fill="none"
      >
        <path
          d="M8 40c18-26 42-34 72-28"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M66 8l16 6-10 12"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function InteractiveProof() {
  const labelId = useId();
  const [mode, setMode] = useState<Mode>("agility");

  return (
    <section
      id="proof"
      aria-labelledby={labelId}
      className="relative z-10 overflow-hidden border-b border-neutral-200 bg-[#f5f5f7] text-black"
    >
      <div className="mx-auto max-w-[1180px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[40rem] text-center">
          <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-[#7c3aed]">
            Same question. Two very different afternoons.
          </p>
          <h2
            id={labelId}
            className="mt-4 font-[family-name:var(--font-serif)] text-[clamp(1.85rem,4vw,3rem)] leading-[1.12] tracking-[-0.03em] text-neutral-950"
          >
            A simple business question. Two very different{" "}
            <span className="relative inline-block whitespace-nowrap">
              afternoons.
              <svg
                viewBox="0 0 160 10"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-[#7c3aed]"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7c30-5 60 3 90-2s48-3 66 2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-[14px] leading-relaxed text-neutral-500 sm:text-[15px]">
            See how the same question goes from hours of digging to a clear
            answer in minutes with Agility AI.
          </p>
        </div>

        <div
          className="mx-auto mt-7 flex w-full max-w-[340px] rounded-full border border-neutral-200 bg-white p-1 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:mt-8"
          role="tablist"
          aria-label="Compare approaches"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === "manual"}
            onClick={() => setMode("manual")}
            className={[
              "flex-1 rounded-full px-4 py-2.5 text-[13px] font-medium transition-all",
              mode === "manual"
                ? "bg-white text-neutral-950 shadow-[0_2px_10px_rgba(15,23,42,0.08)] ring-1 ring-neutral-200"
                : "text-neutral-500 hover:text-neutral-800",
            ].join(" ")}
          >
            By Hand
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "agility"}
            onClick={() => setMode("agility")}
            className={[
              "inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-[13px] font-medium transition-all",
              mode === "agility"
                ? "bg-[#1e1b4b] text-white shadow-[0_8px_20px_rgba(30,27,75,0.28)]"
                : "text-neutral-500 hover:text-neutral-800",
            ].join(" ")}
          >
            {mode === "agility" ? (
              <SparkleIcon className="size-3.5 brightness-0 invert" />
            ) : (
              <SparkleIcon className="size-3.5 opacity-70" />
            )}
            With Agility AI
          </button>
        </div>

        <div className="relative mt-10 lg:mt-12">
          <TransitionArrow />

          <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch lg:gap-7">
            <div
              className={mode === "manual" ? "block" : "hidden lg:block"}
              role="tabpanel"
              aria-hidden={mode !== "manual"}
            >
              <ManualCard active={mode === "manual"} />
            </div>
            <div
              className={mode === "agility" ? "block" : "hidden lg:block"}
              role="tabpanel"
              aria-hidden={mode !== "agility"}
            >
              <AgilityCard active={mode === "agility"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
