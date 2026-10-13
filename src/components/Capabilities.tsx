import Image from "next/image";

const organisationItems = [
  {
    title: "Priorities",
    subtitle: "What matters most to your business",
    level: 75,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Tools",
    subtitle: "Your current tech stack and systems",
    level: 40,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Work",
    subtitle: "How your teams actually work",
    level: 60,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Risk",
    subtitle: "Compliance, security and adoption",
    level: 70,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

const agilityStages = [
  {
    title: "Strategy",
    subtitle: "Identify the right use cases and roadmap for impact.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 8v4l3 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Enablement",
    subtitle: "Train your teams and drive adoption.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        aria-hidden="true"
      >
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
    subtitle: "Deploy AI tools and integrations into your workflows.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        aria-hidden="true"
      >
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
    subtitle: "Set up guardrails, monitoring and responsible usage.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 3l7 4v5c0 5-3 9-7 9s-7-4-7-9V7l7-4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="11" r="2" fill="currentColor" />
      </svg>
    ),
  },
] as const;

const workflows = [
  {
    name: "Document Processing",
    status: "Active",
    tone: "green" as const,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-4 text-neutral-400"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Support Assistant",
    status: "Active",
    tone: "green" as const,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-4 text-neutral-400"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Data Insights",
    status: "Running",
    tone: "blue" as const,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-4 text-neutral-400"
        fill="none"
        aria-hidden="true"
      >
        <ellipse
          cx="12"
          cy="5"
          rx="9"
          ry="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    name: "Workflow Automation",
    status: "Active",
    tone: "green" as const,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-4 text-neutral-400"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const;

const runOwnExtend = [
  {
    label: "Run",
    hint: "Daily use in real workflows",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 19V5M4 19h16M8 15V9M12 17V7M16 13v-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Own",
    hint: "Your team maintains it",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 3l2.2 4.5 5 .7-3.6 3.5.85 5L12 14.8 7.55 16.7l.85-5L4.8 8.2l5-.7L12 3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Extend",
    hint: "Improve and scale over time",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M7 17l10-10M13 7h4v4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

const HUB_STROKE = "#9333ea";
const HUB_DASH = "3 5";

function AgilityHubNetwork() {
  return (
    <div
      className="relative mx-auto my-8 hidden h-[10.5rem] w-full max-w-md sm:max-w-none lg:block"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 size-full overflow-visible"
        viewBox="0 0 400 168"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M 14 34 C 44 34, 88 58, 118 84"
          fill="none"
          stroke={HUB_STROKE}
          strokeWidth="1.5"
          strokeDasharray={HUB_DASH}
          strokeLinecap="round"
        />
        <path
          d="M 14 134 C 44 134, 88 110, 118 84"
          fill="none"
          stroke={HUB_STROKE}
          strokeWidth="1.5"
          strokeDasharray={HUB_DASH}
          strokeLinecap="round"
        />
        <path
          d="M 126 84 L 168 84"
          fill="none"
          stroke={HUB_STROKE}
          strokeWidth="1.5"
          strokeDasharray={HUB_DASH}
          strokeLinecap="round"
        />
        <path
          d="M 232 84 L 274 84"
          fill="none"
          stroke={HUB_STROKE}
          strokeWidth="1.5"
          strokeDasharray={HUB_DASH}
          strokeLinecap="round"
        />
        <path
          d="M 282 84 C 312 58, 356 34, 386 34"
          fill="none"
          stroke={HUB_STROKE}
          strokeWidth="1.5"
          strokeDasharray={HUB_DASH}
          strokeLinecap="round"
        />
        <path
          d="M 282 84 C 312 110, 356 134, 386 134"
          fill="none"
          stroke={HUB_STROKE}
          strokeWidth="1.5"
          strokeDasharray={HUB_DASH}
          strokeLinecap="round"
        />

        <circle cx="14" cy="34" r="4" fill={HUB_STROKE} />
        <circle cx="14" cy="134" r="4" fill={HUB_STROKE} />
        <circle cx="386" cy="34" r="4" fill={HUB_STROKE} />
        <circle cx="386" cy="134" r="4" fill={HUB_STROKE} />

        <circle
          cx="122"
          cy="84"
          r="5.5"
          fill="none"
          stroke={HUB_STROKE}
          strokeWidth="1.75"
        />
        <circle
          cx="278"
          cy="84"
          r="5.5"
          fill="none"
          stroke={HUB_STROKE}
          strokeWidth="1.75"
        />

        <circle cx="200" cy="84" r="48" fill="none" stroke="#ede9fe" strokeWidth="1" />
        <circle cx="200" cy="84" r="64" fill="none" stroke="#f5f3ff" strokeWidth="1" />
      </svg>

      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex size-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#6366f1] shadow-[0_16px_40px_rgba(124,58,237,0.35)] ring-1 ring-white/20 sm:size-28">
          <Image
            src="/new_logo.png"
            alt=""
            width={72}
            height={72}
            className="size-14 object-contain brightness-0 invert sm:size-16"
          />
        </div>
      </div>
    </div>
  );
}

function AgilityHubLogoOnly() {
  return (
    <div className="relative mx-auto my-8 flex justify-center lg:hidden">
      <div className="relative flex size-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#6366f1] shadow-[0_16px_40px_rgba(124,58,237,0.35)] sm:size-28">
        <Image
          src="/new_logo.png"
          alt=""
          width={72}
          height={72}
          className="size-14 object-contain brightness-0 invert sm:size-16"
        />
      </div>
    </div>
  );
}

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="relative overflow-hidden bg-white py-16 text-black sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#ede9fe]/80 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#ddd6fe]/70 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-10">
        <header className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-neutral-300" aria-hidden="true" />
            <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
              What we do
            </p>
            <span className="h-px w-8 bg-neutral-300" aria-hidden="true" />
          </div>
          <h2
            id="capabilities-heading"
            className="font-[family-name:var(--font-serif)] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-neutral-950"
          >
            Buy AI fast.{" "}
            <span className="bg-gradient-to-r from-[#6366f1] to-[#7c3aed] bg-clip-text text-transparent">
              Run it well.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-[15px] leading-relaxed text-neutral-500 sm:text-[16px]">
            We help organisations move from AI intent to real business impact —
            with the right strategy, tools, implementation and ongoing support.
          </p>
        </header>

        <div className="relative mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-5">
          {/* 01 Your organisation */}
          <article className="relative rounded-[1.25rem] border border-neutral-200/80 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-7">
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
              01 Your organisation
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-serif)] text-[clamp(1.35rem,2.2vw,1.65rem)] leading-snug tracking-[-0.02em] text-neutral-950">
              We understand your starting point.
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-neutral-500 sm:text-[14px]">
              We work closely with your team to understand your context, goals
              and constraints.
            </p>

            <ul className="mt-6 space-y-4">
              {organisationItems.map((item) => (
                <li key={item.title}>
                  <div className="flex gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#ede9fe] text-[#6d28d9]">
                      {item.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[14px] font-semibold text-neutral-900">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-[12px] text-neutral-500">
                        {item.subtitle}
                      </p>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-neutral-100">
                        <span
                          className="block h-full rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#6366f1]"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          {/* 02 Agility AI */}
          <article className="relative rounded-[1.25rem] border border-neutral-200/80 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-7">
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
              02 Agility AI
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-serif)] text-[clamp(1.35rem,2.2vw,1.65rem)] leading-snug tracking-[-0.02em] text-neutral-950">
              We design and deploy the right AI solution.
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-neutral-500 sm:text-[14px]">
              From strategy to execution, we set up AI systems that fit your
              business and are easy to adopt.
            </p>

            <AgilityHubNetwork />
            <AgilityHubLogoOnly />

            <ul className="grid grid-cols-2 gap-3">
              {agilityStages.map((stage) => (
                <li
                  key={stage.title}
                  className="rounded-xl border border-neutral-100 bg-[#fafafa] p-3.5 text-center sm:p-4"
                >
                  <div className="mx-auto mb-2 flex size-10 items-center justify-center rounded-lg bg-[#ede9fe] text-[#6d28d9]">
                    {stage.icon}
                  </div>
                  <p className="text-[13px] font-semibold text-neutral-900">
                    {stage.title}
                  </p>
                  <p className="mt-1.5 text-[11px] leading-snug text-neutral-500">
                    {stage.subtitle}
                  </p>
                </li>
              ))}
            </ul>
          </article>

          {/* 03 Running well */}
          <article className="relative rounded-[1.25rem] border border-neutral-200/80 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-7">
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
              03 Running well
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-serif)] text-[clamp(1.35rem,2.2vw,1.65rem)] leading-snug tracking-[-0.02em] text-neutral-950">
              You get real, ongoing value.
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-neutral-500 sm:text-[14px]">
              We ensure the solution runs smoothly, delivers impact, and
              improves over time.
            </p>

            <div className="mt-6 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
              <div className="flex items-center justify-between bg-[#1e1b4b] px-4 py-2.5">
                <span className="flex items-center gap-2 font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.12em] text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Live
                </span>
                <span className="flex items-center gap-2 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.1em] text-white/80">
                  <svg
                    viewBox="0 0 16 16"
                    className="size-3.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 12V4M6 12V8M10 12V6M14 12V2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  Running well
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
                <p className="text-[13px] font-medium text-neutral-800">
                  AI workflows
                </p>
                <span className="flex items-center gap-1.5 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.1em] text-emerald-600">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  Fluent
                </span>
              </div>

              <ul className="divide-y divide-neutral-100 px-2 py-1">
                {workflows.map((row) => (
                  <li
                    key={row.name}
                    className="flex items-center justify-between gap-3 px-2 py-2.5"
                  >
                    <span className="flex items-center gap-2.5 text-[13px] text-neutral-700">
                      {row.icon}
                      {row.name}
                    </span>
                    <span
                      className={[
                        "shrink-0 rounded-full px-2.5 py-0.5 font-[family-name:var(--font-geist-mono)] text-[9px] font-medium uppercase tracking-[0.06em]",
                        row.tone === "green"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-blue-50 text-blue-700",
                      ].join(" ")}
                    >
                      {row.status}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-px border-t border-neutral-200 bg-neutral-200">
                {runOwnExtend.map(({ label, hint, icon }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center bg-white px-2 py-3 text-center"
                  >
                    <span className="text-[#7c3aed]">{icon}</span>
                    <p className="mt-1.5 font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-800">
                      {label}
                    </p>
                    <p className="mt-1 text-[9px] leading-snug text-neutral-500">
                      {hint}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
