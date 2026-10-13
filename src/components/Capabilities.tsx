"use client";

const sources = [
  { label: "Priorities", level: 42 },
  { label: "Tools", level: 56 },
  { label: "Work", level: 70 },
  { label: "Risk", level: 84 },
] as const;

const stages = [
  {
    title: "Strategy",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
        <path d="M12 3l8 9-8 9-8-9 8-9z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Enablement",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
        <path
          d="M12 3l1.8 5.4H19l-4.2 3.2 1.6 5.4L12 14.2 7.6 17l1.6-5.4L5 8.4h5.2L12 3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Automation",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
        <path
          d="M13 3L5 13h6l-1 8 9-12h-6l0-6z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Governance",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
] as const;

function NoteIcon() {
  return (
    <span
      className="relative inline-flex size-7 shrink-0 items-center justify-center"
      aria-hidden="true"
    >
      <span className="absolute inset-0 rotate-[-8deg] rounded-[4px] bg-neutral-200" />
      <span className="absolute inset-[3px] rotate-[4deg] rounded-[3px] border border-neutral-400 bg-white" />
      <span className="relative size-2 rounded-sm bg-black" />
    </span>
  );
}

function HubGlyph() {
  return (
    <svg viewBox="0 0 64 64" className="size-10 text-white" aria-hidden="true">
      <circle
        cx="32"
        cy="32"
        r="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.35"
      />
      <circle cx="32" cy="32" r="6" fill="currentColor" />
      <path
        d="M32 8v10M32 46v10M8 32h10M46 32h10M14 14l7 7M43 43l7 7M50 14l-7 7M21 43l-7 7"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.55"
      />
    </svg>
  );
}

function TraceBars() {
  const rows = [
    [18, 42, 28],
    [8, 55, 20],
    [24, 30, 35],
    [12, 48, 22],
    [30, 25, 28],
    [6, 60, 18],
    [20, 38, 26],
  ];

  return (
    <div
      className="capabilities-trace flex flex-1 flex-col justify-center gap-2 px-3 py-3"
      aria-hidden="true"
    >
      {rows.map((segments, row) => (
        <div key={row} className="flex h-2.5 items-center gap-1">
          {segments.map((flex, i) => (
            <span
              key={i}
              className="h-full rounded-sm"
              style={{
                flex,
                backgroundColor:
                  i === 0
                    ? "rgba(0,0,0,0.12)"
                    : i === 1
                      ? "#111111"
                      : "rgba(0,0,0,0.06)",
                animationDelay: `${row * 0.12 + i * 0.05}s`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function PulseRing({ className = "" }: { className?: string }) {
  return (
    <span
      className={[
        "capabilities-pulse absolute rounded-full border border-black/20",
        className,
      ].join(" ")}
      aria-hidden="true"
    />
  );
}

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="sticky top-0 z-20 flex h-svh flex-col overflow-hidden bg-white text-black"
    >
      <div className="mx-auto flex h-full w-full max-w-[1280px] min-h-0 flex-col px-4 py-5 sm:px-6 sm:py-6 md:px-8 lg:py-7">
        <div className="mx-auto w-full max-w-2xl shrink-0 text-center">
          <div className="mb-2 flex items-center justify-center gap-2">
            <NoteIcon />
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-500">
              What we do
            </p>
          </div>
          <h2
            id="capabilities-heading"
            className="text-[clamp(1.15rem,2.4vw,1.65rem)] font-semibold leading-snug tracking-[-0.02em] text-black"
          >
            Buy AI fast. Run it well.
          </h2>
        </div>

        <div className="relative mt-4 grid min-h-0 flex-1 gap-3 lg:mt-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr] lg:gap-4">
          <div className="relative flex min-h-0 flex-col rounded-2xl border border-neutral-200 bg-[#fafafa] p-3 sm:p-4">
            <p className="mb-3 font-[family-name:var(--font-geist-mono)] text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-600">
              Your organisation
            </p>
            <div className="relative flex min-h-0 flex-1 flex-col justify-center gap-3">
              {sources.map((item) => (
                <div key={item.label} className="relative flex items-center gap-3">
                  <div className="relative flex size-11 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white">
                    <PulseRing className="inset-[-4px]" />
                    <span className="size-2.5 rounded-full bg-black" />
                  </div>
                  <div className="min-w-0 flex-1 rounded-lg border border-neutral-200 bg-white px-3 py-2.5">
                    <p className="text-[13px] font-medium tracking-[-0.01em] text-neutral-900">
                      {item.label}
                    </p>
                    <div
                      className="capabilities-meter mt-1.5 h-1 overflow-hidden rounded-full bg-neutral-100"
                      aria-hidden="true"
                    >
                      <span
                        className="block h-full rounded-full bg-black"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}

              <svg
                className="pointer-events-none absolute right-[-18px] top-1/2 hidden h-[70%] w-5 -translate-y-1/2 lg:block"
                viewBox="0 0 20 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {[18, 42, 66, 90].map((y) => (
                  <path
                    key={y}
                    className="capabilities-dash"
                    d={`M0 ${y} C10 ${y}, 10 50, 20 50`}
                    fill="none"
                    stroke="rgba(0,0,0,0.28)"
                    strokeWidth="1.2"
                  />
                ))}
              </svg>
            </div>
          </div>

          <div className="relative flex min-h-0 flex-col rounded-2xl border border-neutral-200 bg-[#fafafa] p-3 sm:p-4">
            <p className="mb-3 font-[family-name:var(--font-geist-mono)] text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-600">
              Agility AI
            </p>

            <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center">
              <div className="relative mb-5 flex size-24 items-center justify-center rounded-2xl bg-black sm:size-28">
                <PulseRing className="inset-[-10px] border-black/20" />
                <PulseRing className="inset-[-22px] border-black/10" />
                <HubGlyph />
              </div>

              <div className="grid w-full max-w-md grid-cols-2 gap-2.5 sm:gap-3">
                {stages.map((stage, index) => (
                  <div
                    key={stage.title}
                    className="capabilities-stage relative overflow-hidden rounded-xl border border-neutral-200 bg-white px-3 py-3 text-center"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div
                      className="mx-auto mb-2 flex size-10 items-center justify-center rounded-lg bg-neutral-100 text-black"
                      aria-hidden="true"
                    >
                      {stage.icon}
                    </div>
                    <p className="text-[12px] font-semibold tracking-[-0.01em] text-black sm:text-[13px]">
                      {stage.title}
                    </p>
                    <span className="capabilities-stage-bar absolute inset-x-0 bottom-0 h-0.5 bg-black" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex min-h-0 flex-col rounded-2xl border border-neutral-200 bg-[#fafafa] p-3 sm:p-4">
            <p className="mb-3 font-[family-name:var(--font-geist-mono)] text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-600">
              Running well
            </p>

            <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white">
              <div className="flex items-center justify-between border-b border-neutral-200 bg-black px-3 py-2">
                <span className="font-[family-name:var(--font-geist-mono)] text-[9px] uppercase tracking-[0.14em] text-white/50">
                  Live
                </span>
                <span className="flex items-center gap-1.5 font-[family-name:var(--font-geist-mono)] text-[9px] uppercase tracking-[0.12em] text-white">
                  <span className="capabilities-live-dot size-1.5 rounded-full bg-white" />
                  Fluent
                </span>
              </div>
              <TraceBars />
              <div className="grid grid-cols-3 gap-px border-t border-neutral-200 bg-neutral-200">
                {[
                  { label: "Run", hint: "Daily use in real workflows" },
                  { label: "Own", hint: "Your team maintains it" },
                  { label: "Extend", hint: "Improve without us" },
                ].map(({ label, hint }) => (
                  <div key={label} className="bg-white px-2 py-2.5 text-center">
                    <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.1em] text-neutral-800">
                      {label}
                    </p>
                    <p className="mt-1 text-[9px] leading-snug text-neutral-500">
                      {hint}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
