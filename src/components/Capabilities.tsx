import type { ReactNode } from "react";

const capabilities = [
  {
    title: "AI Strategy",
    description:
      "Clarify where AI creates value, what to prioritise, and how adoption and delivery should work together across the organisation.",
    icon: StrategyIcon,
  },
  {
    title: "Training & Enablement",
    description:
      "Build AI fluency for teams and leaders—so people can use, challenge, and improve AI systems with confidence.",
    icon: EnablementIcon,
  },
  {
    title: "Automation Delivery",
    description:
      "Design, integrate, and ship AI-powered workflows into production—not demos—wired into the tools your organisation already runs.",
    icon: AutomationIcon,
  },
  {
    title: "Governance",
    description:
      "Put ownership, controls, and operating rhythms in place so AI can be run, audited, and extended without creating risk or sprawl.",
    icon: GovernanceIcon,
  },
] as const;

function StrategyIcon() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="mx-auto h-28 w-28 sm:h-32 sm:w-32"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="clip-strategy">
          <polygon points="60,12 108,60 60,108 12,60" />
        </clipPath>
        <pattern
          id="scan-strategy"
          width="120"
          height="3.2"
          patternUnits="userSpaceOnUse"
        >
          <rect width="120" height="1.4" fill="#3b6ef5" />
        </pattern>
      </defs>
      <rect
        width="120"
        height="120"
        fill="url(#scan-strategy)"
        clipPath="url(#clip-strategy)"
      />
    </svg>
  );
}

function EnablementIcon() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="mx-auto h-28 w-28 sm:h-32 sm:w-32"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="clip-enable">
          <path d="M62 10 L74 52 L118 52 L84 78 L96 118 L62 92 L28 118 L40 78 L6 52 L50 52 Z" />
        </clipPath>
        <pattern
          id="scan-enable"
          width="120"
          height="3.2"
          patternUnits="userSpaceOnUse"
        >
          <rect width="120" height="1.4" fill="#3b6ef5" />
        </pattern>
      </defs>
      <rect
        width="120"
        height="120"
        fill="url(#scan-enable)"
        clipPath="url(#clip-enable)"
      />
    </svg>
  );
}

function AutomationIcon() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="mx-auto h-28 w-28 sm:h-32 sm:w-32"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="clip-auto">
          <path d="M68 8 L78 48 L118 54 L78 62 L68 112 L58 62 L18 54 L58 48 Z" />
        </clipPath>
        <pattern
          id="scan-auto"
          width="120"
          height="3.2"
          patternUnits="userSpaceOnUse"
        >
          <rect width="120" height="1.4" fill="#3b6ef5" />
        </pattern>
      </defs>
      <rect
        width="120"
        height="120"
        fill="url(#scan-auto)"
        clipPath="url(#clip-auto)"
      />
    </svg>
  );
}

function GovernanceIcon() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="mx-auto h-28 w-28 sm:h-32 sm:w-32"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="clip-gov">
          <path d="M40 54 V42 C40 28 50 18 60 18 C70 18 80 28 80 42 V54 H88 V102 H32 V54 H40 Z M50 54 V42 C50 34 54 28 60 28 C66 28 70 34 70 42 V54 H50 Z" />
        </clipPath>
        <pattern
          id="scan-gov"
          width="120"
          height="3.2"
          patternUnits="userSpaceOnUse"
        >
          <rect width="120" height="1.4" fill="#3b6ef5" />
        </pattern>
      </defs>
      <rect
        width="120"
        height="120"
        fill="url(#scan-gov)"
        clipPath="url(#clip-gov)"
      />
    </svg>
  );
}

const tabClip =
  "polygon(0 14px, 68% 14px, 76% 0, 100% 0, 100% 100%, 0 100%)";

function CapabilityCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: () => ReactNode;
}) {
  return (
    <div className="relative h-full min-h-[360px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-neutral-200"
        style={{ clipPath: tabClip }}
      />
      <article
        className="absolute inset-[1px] flex flex-col bg-white"
        style={{ clipPath: tabClip }}
      >
        <div className="flex flex-1 flex-col px-5 pb-6 pt-8 sm:px-6 sm:pb-7 sm:pt-9">
          <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-neutral-950 sm:text-[17px]">
            {title}
          </h3>

          <div className="flex flex-1 items-center justify-center py-6 sm:py-8">
            <Icon />
          </div>

          <div className="border-t border-dashed border-neutral-300 pt-5">
            <p className="text-[13px] leading-relaxed text-neutral-500 sm:text-[14px] sm:leading-[1.65]">
              {description}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="bg-white text-black"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20 md:px-14 lg:px-16 lg:py-24 xl:px-20">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span
              className="h-[3px] w-8 bg-[#3b6ef5] sm:w-10"
              aria-hidden="true"
            />
            <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500 sm:text-[12px]">
              Stop settling for trade-offs
            </p>
          </div>

          <h2
            id="capabilities-heading"
            className="font-[family-name:var(--font-serif)] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.12] tracking-[-0.02em] text-neutral-900"
          >
            Capability that turns AI intent into organisational muscle
          </h2>
          <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-neutral-500 sm:mt-5 sm:text-[16px] sm:leading-[1.65]">
            Four ways we help you move from AI interest to durable adoption,
            delivery, and control.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item) => (
            <CapabilityCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
