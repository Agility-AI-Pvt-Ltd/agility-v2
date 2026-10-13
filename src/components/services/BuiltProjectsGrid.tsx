"use client";

import Image from "next/image";
import Reveal from "@/components/about/Reveal";

const AVATARS = [
  "/assets/built/avatars/01.jpg",
  "/assets/built/avatars/02.jpg",
  "/assets/built/avatars/03.jpg",
  "/assets/built/avatars/04.jpg",
] as const;

const PROJECTS = [
  {
    number: "01",
    category: "Mentorship",
    name: "FutureX Fellowship",
    slug: "futurex",
    description:
      "An AI mentorship platform that helps student entrepreneurs build real ventures, not just learn the theory.",
    image: "/assets/built/01_futurex_fellowship.jpg",
    bg: "bg-[#f3efff]",
    badgeBg: "bg-[#ede9fe] text-[#6d28d9]",
    accent: "#7c3aed",
    chips: ["Live cohort", "Build real ventures"],
    wide: true,
  },
  {
    number: "02",
    category: "Finance",
    name: "Invoicely",
    slug: "invoicely",
    description:
      "Handles a company's accounting questions in one place — invoices, payments, the works.",
    image: "/assets/built/02_invoicely.jpg",
    bg: "bg-[#eef4ff]",
    badgeBg: "bg-[#dbeafe] text-[#1d4ed8]",
    accent: "#2563eb",
    chips: ["Invoices", "Payments", "Expenses"],
    wide: true,
  },
  {
    number: "03",
    category: "Learning",
    name: "Edumaniax",
    slug: "edumaniax",
    description:
      "Turns learning into something closer to a game, so it actually sticks instead of getting forgotten by Monday.",
    image: "/assets/built/03_edumaniax.jpg",
    bg: "bg-[#fff7e6]",
    badgeBg: "bg-[#ffedd5] text-[#c2410c]",
    accent: "#ea580c",
    chips: ["Quest", "Score", "Level"],
    wide: false,
  },
  {
    number: "04",
    category: "Legal",
    name: "Fairly Settled",
    slug: "fairly-settled",
    description:
      "Helps legal professionals get through long documents faster, with AI doing the first read so people can focus on the judgment calls that actually need a human.",
    image: "/assets/built/04_fairly_settled.jpg",
    bg: "bg-[#e6f9f0]",
    badgeBg: "bg-[#dcfce7] text-[#15803d]",
    accent: "#16a34a",
    chips: ["First read done"],
    wide: false,
  },
  {
    number: "05",
    category: "Operations",
    name: "HRMS",
    slug: "hrms",
    description:
      "One place for hiring, attendance, and reimbursements, instead of three different logins nobody wants to open.",
    image: "/assets/built/05_hrms.jpg",
    bg: "bg-[#f9e6f0]",
    badgeBg: "bg-[#fce7f3] text-[#be185d]",
    accent: "#db2777",
    chips: ["Hiring", "Attendance", "Reimburse"],
    wide: false,
  },
] as const;

function CategoryIcon({ category }: { category: string }) {
  const className = "size-4 shrink-0";
  if (category === "Mentorship") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M2 12V4l6-2 6 2v8l-6 2-6-2z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (category === "Finance") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <rect x="3" y="2" width="10" height="12" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 6h6M5 9h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (category === "Learning") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <circle cx="8" cy="8" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 5v3l2 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (category === "Legal") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M8 2l5 3v4c0 3-2.5 5-5 5S3 12 3 9V5l5-3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        d="M3 4h10v8H3V4zm2 2v4M7 6v4M11 8v2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UsersStatBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-[#dbeafe]/80 bg-[#eef4ff] px-4 py-3 shadow-[0_8px_24px_rgba(37,99,235,0.08)] sm:gap-4 sm:px-5 sm:py-3.5">
      <div className="flex items-center">
        <div className="flex -space-x-2.5">
          {AVATARS.map((src, index) => (
            <div
              key={src}
              className="relative size-9 overflow-hidden rounded-full ring-2 ring-[#eef4ff] sm:size-10"
              style={{ zIndex: AVATARS.length - index }}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="40px" />
            </div>
          ))}
        </div>
        <span className="ml-2 rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold text-[#1d4ed8] shadow-sm">
          +2K
        </span>
      </div>
      <span className="hidden h-8 w-px bg-[#bfdbfe] sm:block" aria-hidden="true" />
      <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase leading-tight tracking-[0.12em] text-[#1e3a8a] sm:text-[11px]">
        2,000+ users
        <span className="mt-0.5 block font-normal normal-case tracking-normal text-[#475569]">
          per platform
        </span>
      </p>
    </div>
  );
}

function ProjectBadge({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <div
      className={[
        "inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.12em]",
        project.badgeBg,
      ].join(" ")}
    >
      <CategoryIcon category={project.category} />
      <span>
        {project.number} {project.category}
      </span>
    </div>
  );
}

function ProjectChips({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {project.chips.map((chip) => (
        <span
          key={chip}
          className="inline-flex items-center rounded-full border border-neutral-200/80 bg-white px-3 py-1 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium text-neutral-800"
        >
          {chip}
        </span>
      ))}
    </div>
  );
}

function WideProjectCard({
  project,
  priority,
}: {
  project: (typeof PROJECTS)[number];
  priority?: boolean;
}) {
  return (
    <article
      className={[
        "built-projects-bento-card group flex h-full flex-col overflow-hidden rounded-[1.75rem] p-5 shadow-[0_10px_36px_rgba(15,23,42,0.06)] sm:rounded-[2rem] sm:p-6 lg:flex-row lg:items-stretch lg:gap-6 lg:p-8",
        project.bg,
      ].join(" ")}
    >
      <div className="flex min-w-0 flex-1 flex-col lg:max-w-[48%] lg:py-1">
        <ProjectBadge project={project} />

        <h3 className="mt-4 font-[family-name:var(--font-serif)] text-[clamp(1.35rem,2.2vw,1.75rem)] leading-[1.12] tracking-[-0.02em] text-neutral-950">
          {project.name}
        </h3>

        <p className="mt-3 text-[14px] leading-relaxed text-neutral-600 sm:text-[15px]">
          {project.description}
        </p>

        <ProjectChips project={project} />
      </div>

      <div className="relative mt-6 min-h-[200px] flex-1 lg:mt-0 lg:min-h-[220px]">
        <div className="relative mx-auto h-full w-full max-w-[420px] lg:max-w-none">
          <Image
            src={project.image}
            alt={`${project.name} product preview`}
            width={640}
            height={480}
            priority={priority}
            className="h-auto w-full rounded-2xl object-contain object-center drop-shadow-[0_16px_40px_rgba(15,23,42,0.12)] transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 1024px) 90vw, 420px"
          />
        </div>
      </div>
    </article>
  );
}

function CompactProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <article
      className={[
        "built-projects-bento-card group relative flex h-full min-h-[28rem] flex-col overflow-hidden rounded-[2rem] p-6 shadow-[0_10px_36px_rgba(15,23,42,0.06)] sm:min-h-[30rem] sm:p-8",
        project.bg,
      ].join(" ")}
    >
      <div className="relative mb-2 min-h-[7.5rem] shrink-0 sm:min-h-[8.5rem]">
        <ProjectBadge project={project} />
        <div className="pointer-events-none absolute -right-1 top-0 z-10 w-[min(52%,11rem)] sm:w-[min(48%,12.5rem)]">
          <Image
            src={project.image}
            alt={`${project.name} product preview`}
            width={480}
            height={360}
            className="h-auto w-full rounded-xl border border-white/60 object-cover object-top shadow-[0_14px_32px_rgba(15,23,42,0.14)]"
            sizes="(max-width: 1024px) 45vw, 200px"
          />
        </div>
      </div>

      <h3 className="relative z-0 max-w-[85%] font-[family-name:var(--font-serif)] text-[clamp(1.35rem,2vw,1.65rem)] leading-[1.12] tracking-[-0.02em] text-neutral-950">
        {project.name}
      </h3>

      <p className="mt-3 min-h-[5.5rem] flex-1 font-[family-name:var(--font-geist-mono)] text-[12px] leading-[1.65] text-neutral-700 sm:text-[13px]">
        {project.description}
      </p>

      <ProjectChips project={project} />
    </article>
  );
}

export type BuiltProject = {
  name: string;
  description: string;
};

type BuiltProjectsGridProps = {
  projects?: readonly BuiltProject[];
};

export default function BuiltProjectsGrid(_props: BuiltProjectsGridProps) {
  const topRow = PROJECTS.filter((p) => p.wide);
  const bottomRow = PROJECTS.filter((p) => !p.wide);

  return (
    <section
      id="built-projects"
      className="relative overflow-hidden border-t border-neutral-200 bg-[#f7f8fa] text-black"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 12% 0%, rgba(124,58,237,0.08), transparent 40%), radial-gradient(circle at 88% 8%, rgba(37,99,235,0.06), transparent 38%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-16 sm:px-10 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="max-w-[640px]">
            <Reveal>
              <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-[#7c3aed]">
                What we&apos;ve built
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-4 font-[family-name:var(--font-serif)] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] tracking-[-0.03em] text-neutral-950">
                Real products. Real{" "}
                <span className="relative inline-block whitespace-nowrap font-[family-name:var(--font-cursive)] text-[1.15em] font-normal text-[#7c3aed]">
                  impact.
                  <svg
                    viewBox="0 0 120 10"
                    className="absolute -bottom-0.5 left-0 h-2.5 w-full text-[#7c3aed]"
                    aria-hidden="true"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 7c28-4 55 2 82-1s28-2 36 1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-5 max-w-[48ch] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
                Each platform serves{" "}
                <span className="font-semibold text-neutral-900">2,000+ users</span>
                — mentorship, finance, learning, legal, and operations tools
                people use every day.
              </p>
            </Reveal>
          </div>

          <Reveal delay={160} className="shrink-0 lg:pt-2">
            <UsersStatBadge />
          </Reveal>
        </div>

        <div className="mt-12 space-y-4 sm:mt-14 sm:space-y-5">
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
            {topRow.map((project, index) => (
              <Reveal key={project.slug} delay={120 + index * 80}>
                <WideProjectCard project={project} priority={index === 0} />
              </Reveal>
            ))}
          </div>

          <div className="grid gap-4 sm:gap-5 lg:grid-cols-3 lg:items-stretch">
            {bottomRow.map((project, index) => (
              <Reveal key={project.slug} delay={200 + index * 70} className="h-full">
                <CompactProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
