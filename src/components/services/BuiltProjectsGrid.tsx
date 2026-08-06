"use client";

import Reveal from "@/components/about/Reveal";

export type BuiltProject = {
  name: string;
  description: string;
};

const PROJECT_META = [
  {
    tag: "Mentorship",
    accent: "#3b6ef5",
    visual: "mentorship" as const,
    featured: true,
  },
  {
    tag: "Finance",
    accent: "#0f172a",
    visual: "invoice" as const,
    featured: false,
  },
  {
    tag: "Learning",
    accent: "#2563eb",
    visual: "game" as const,
    featured: false,
  },
  {
    tag: "Legal",
    accent: "#1d4ed8",
    visual: "document" as const,
    featured: false,
  },
  {
    tag: "Operations",
    accent: "#1e3a8a",
    visual: "hrms" as const,
    featured: false,
  },
] as const;

function ProjectVisual({ kind }: { kind: (typeof PROJECT_META)[number]["visual"] }) {
  if (kind === "mentorship") {
    return (
      <div
        className="relative flex h-full min-h-[140px] items-end overflow-hidden rounded-[1.25rem] p-5"
        style={{
          background:
            "linear-gradient(145deg, #1e3a8a 0%, #3b6ef5 55%, #60a5fa 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-25" aria-hidden="true">
          <div className="absolute -right-6 -top-8 size-32 rounded-full bg-white/30 blur-2xl" />
          <div className="absolute bottom-0 left-4 size-20 rounded-full bg-white/20 blur-xl" />
        </div>
        <div className="relative z-10 rounded-xl border border-white/20 bg-white/15 px-4 py-3 backdrop-blur-sm">
          <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-white/70">
            Live cohort
          </p>
          <p className="mt-1 text-[15px] font-medium text-white">Build real ventures</p>
        </div>
      </div>
    );
  }

  if (kind === "invoice") {
    return (
      <div className="flex h-full min-h-[120px] items-center justify-center rounded-[1.25rem] bg-[#0f172a] p-4">
        <div className="w-full max-w-[200px] rounded-xl bg-white p-3 shadow-lg">
          <p className="font-[family-name:var(--font-geist-mono)] text-[9px] uppercase tracking-[0.12em] text-neutral-400">
            Invoicely
          </p>
          <p className="mt-1 text-[14px] font-semibold text-neutral-900">Payment cleared</p>
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 rounded-full bg-neutral-100" />
            <div className="h-1.5 w-3/4 rounded-full bg-neutral-100" />
            <div className="mt-2 h-6 rounded-md bg-[#3b6ef5]/15" />
          </div>
        </div>
      </div>
    );
  }

  if (kind === "game") {
    return (
      <div className="grid h-full min-h-[120px] grid-cols-2 gap-2 rounded-[1.25rem] bg-[#eff6ff] p-3">
        {["Quest", "Score", "Badge", "Level"].map((label, index) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center rounded-xl bg-white p-2 shadow-sm"
          >
            <span
              className="mb-1.5 size-6 rounded-md"
              style={{
                background: ["#fbbf24", "#34d399", "#60a5fa", "#f472b6"][index],
              }}
            />
            <span className="font-[family-name:var(--font-geist-mono)] text-[9px] uppercase tracking-[0.1em] text-neutral-500">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "document") {
    return (
      <div className="flex h-full min-h-[120px] items-center gap-3 rounded-[1.25rem] bg-[#1e3a8a] p-4">
        <div className="h-[72%] w-[34%] rounded-lg border-4 border-white bg-[#fef9c3]" />
        <div className="flex-1 rounded-xl bg-white p-3">
          <p className="text-[13px] font-semibold text-[#1e3a8a]">First read done</p>
          <div className="mt-2 h-1.5 rounded-full bg-neutral-100">
            <div className="h-full w-[72%] rounded-full bg-[#3b6ef5]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-[120px] flex-col justify-center gap-2 rounded-[1.25rem] bg-[#0f172a] p-4">
      {["Hiring", "Attendance", "Reimburse"].map((step, index) => (
        <div
          key={step}
          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2"
        >
          <span className="flex size-5 items-center justify-center rounded-full bg-[#3b6ef5] text-[10px] text-white">
            {index + 1}
          </span>
          <span className="text-[12px] font-medium text-white/90">{step}</span>
        </div>
      ))}
    </div>
  );
}

type BuiltProjectsGridProps = {
  projects: readonly BuiltProject[];
};

export default function BuiltProjectsGrid({ projects }: BuiltProjectsGridProps) {
  return (
    <section
      id="built-projects"
      className="relative overflow-hidden border-t border-neutral-200 bg-[#f5f7fb] text-black"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 15% 0%, rgba(59,110,245,0.12), transparent 42%), radial-gradient(circle at 90% 20%, rgba(15,23,42,0.06), transparent 40%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20 lg:py-24">
        <Reveal>
          <p className="text-center font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-[#3b6ef5]">
            Built projects
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mx-auto mt-4 max-w-[18ch] text-center font-[family-name:var(--font-serif)] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] text-[#0f172a]">
            What we&apos;ve built
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mx-auto mt-5 max-w-[22ch] text-center font-[family-name:var(--font-serif)] text-[clamp(1.45rem,3.2vw,2.15rem)] leading-[1.15] tracking-[-0.02em] text-[#0f172a]">
            Each platform has over{" "}
            <span className="relative inline-block whitespace-nowrap text-[#3b6ef5]">
              2,000+
              <span
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#3b6ef5]/35"
                aria-hidden="true"
              />
            </span>{" "}
            users.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-4 max-w-[44ch] text-center text-[15px] leading-relaxed text-neutral-500 sm:text-[16px]">
            Real tools in the wild — mentorship, finance, learning, legal, and
            operations — each serving thousands of people every day.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[minmax(240px,auto)] gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-6">
          {projects.map((project, index) => {
            const meta = PROJECT_META[index % PROJECT_META.length];
            const isFeatured = index === 0;
            const isWide = index === 3;

            return (
              <Reveal
                key={project.name}
                delay={120 + index * 70}
                className={[
                  isFeatured
                    ? "md:col-span-2 lg:col-span-4 lg:row-span-2"
                    : isWide
                      ? "md:col-span-2 lg:col-span-4"
                      : "md:col-span-1 lg:col-span-2",
                ].join(" ")}
              >
                <article
                  className={[
                    "built-projects-bento-card group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/80 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all duration-300 sm:rounded-[1.75rem] sm:p-6",
                    isFeatured ? "lg:p-8" : "",
                  ].join(" ")}
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span
                      className="inline-flex rounded-full px-3 py-1 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em]"
                      style={{
                        color: meta.accent,
                        background: `${meta.accent}14`,
                      }}
                    >
                      {meta.tag}
                    </span>
                    <span className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-neutral-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3
                    className={[
                      "font-[family-name:var(--font-serif)] leading-[1.1] tracking-[-0.02em] text-[#0f172a]",
                      isFeatured
                        ? "text-[clamp(1.5rem,2.5vw,2rem)]"
                        : "text-[1.25rem] sm:text-[1.35rem]",
                    ].join(" ")}
                  >
                    {project.name}
                  </h3>

                  <p
                    className={[
                      "mt-3 leading-relaxed text-neutral-500",
                      isFeatured
                        ? "max-w-[42ch] text-[15px] sm:text-[16px]"
                        : "text-[14px]",
                    ].join(" ")}
                  >
                    {project.description}
                  </p>

                  <div
                    className={[
                      "mt-auto pt-5",
                      isFeatured ? "min-h-[180px] sm:min-h-[220px]" : "min-h-[120px]",
                    ].join(" ")}
                  >
                    <ProjectVisual kind={meta.visual} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
