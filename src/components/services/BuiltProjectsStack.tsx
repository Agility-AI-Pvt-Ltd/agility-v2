"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

export type BuiltProject = {
  name: string;
  description: string;
};

type CardTransform = {
  scale: number;
  y: number;
  opacity: number;
};

const THEMES = [
  {
    bg: "#ebe4ff",
    accent: "#5b21b6",
    visualBg: "#2d1b4e",
    tag: "Education",
    visual: "mentorship" as const,
  },
  {
    bg: "#ffe8d1",
    accent: "#c2410c",
    visualBg: "#1c1917",
    tag: "Finance",
    visual: "invoice" as const,
  },
  {
    bg: "#d8f5e4",
    accent: "#15803d",
    visualBg: "#14532d",
    tag: "Learning",
    visual: "game" as const,
  },
  {
    bg: "#fce7f3",
    accent: "#9d174d",
    visualBg: "#3b0764",
    tag: "Legal",
    visual: "document" as const,
  },
  {
    bg: "#dbeafe",
    accent: "#1d4ed8",
    visualBg: "#172554",
    tag: "Operations",
    visual: "hrms" as const,
  },
] as const;

const DEFAULT_TRANSFORM: CardTransform = { scale: 1, y: 0, opacity: 1 };

function computeTransforms(
  tracks: (HTMLDivElement | null)[],
  reduceMotion: boolean,
): CardTransform[] {
  if (reduceMotion) {
    return tracks.map(() => DEFAULT_TRANSFORM);
  }

  const vh = window.innerHeight;

  return tracks.map((track, index) => {
    if (!track) return DEFAULT_TRANSFORM;

    const rect = track.getBoundingClientRect();
    const scrollable = Math.max(track.offsetHeight - vh, 1);

    const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
    const entry = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.92)));
    const entryY = (1 - entry) * (index === 0 ? 36 : 96);

    const scale = 1 - progress * 0.085 - (1 - entry) * 0.03;
    const exitY = -progress * 56;
    const opacity = 1 - progress * 0.22;

    return {
      scale: Math.max(0.88, scale),
      y: entryY + exitY,
      opacity: Math.max(0.68, opacity),
    };
  });
}

function ProjectVisual({
  kind,
  accent,
  visualBg,
}: {
  kind: (typeof THEMES)[number]["visual"];
  accent: string;
  visualBg: string;
}) {
  return (
    <div
      className="built-project-visual relative h-full min-h-[220px] overflow-hidden rounded-[1.35rem] p-4 sm:min-h-[280px] sm:p-5 lg:min-h-[320px]"
      style={{ background: visualBg }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {kind === "mentorship" && (
        <div className="relative z-10 flex h-full flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-red-400" />
            <span className="size-2 rounded-full bg-amber-300" />
            <span className="size-2 rounded-full bg-emerald-400" />
          </div>
          <div className="flex flex-1 flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 flex-col justify-center rounded-2xl bg-[#fef3c7] p-4 text-[#422006]">
              <p className="font-[family-name:var(--font-serif)] text-[1.1rem] leading-tight sm:text-[1.35rem]">
                Build real ventures
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-[#92400e]/70">
                Mentor path · Week 4
              </p>
            </div>
            <div
              className="flex flex-1 items-center justify-center rounded-2xl p-4"
              style={{
                background:
                  "linear-gradient(135deg, #f472b6 0%, #7c3aed 55%, #2563eb 100%)",
              }}
            >
              <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-white/80">
                AI mentorship
              </p>
            </div>
          </div>
          <span
            className="built-project-cursor absolute bottom-8 right-10 rounded-full px-2.5 py-1 text-[11px] font-medium text-white"
            style={{ background: accent }}
          >
            Mentor
          </span>
        </div>
      )}

      {kind === "invoice" && (
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="w-full max-w-[280px] rounded-2xl border border-white/15 bg-white p-4 text-neutral-900 shadow-2xl">
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-neutral-400">
              Invoicely
            </p>
            <p className="mt-2 font-[family-name:var(--font-serif)] text-[1.25rem] leading-tight">
              Payment cleared
            </p>
            <div className="mt-4 space-y-2">
              <div className="h-2 rounded-full bg-neutral-100" />
              <div className="h-2 w-4/5 rounded-full bg-neutral-100" />
              <div
                className="mt-3 h-8 rounded-lg"
                style={{ background: `${accent}22`, border: `1px solid ${accent}55` }}
              />
            </div>
          </div>
          <span
            className="built-project-cursor absolute bottom-10 right-12 rounded-full px-2.5 py-1 text-[11px] font-medium text-white"
            style={{ background: "#ef4444" }}
          >
            Finance
          </span>
        </div>
      )}

      {kind === "game" && (
        <div className="relative z-10 grid h-full grid-cols-2 gap-2 sm:gap-3">
          {["Quest", "Score", "Badge", "Level"].map((label, index) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/10 p-3"
            >
              <span
                className="mb-2 size-8 rounded-lg"
                style={{
                  background: ["#fbbf24", "#34d399", "#60a5fa", "#f472b6"][index],
                }}
              />
              <span className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.1em] text-white/75">
                {label}
              </span>
            </div>
          ))}
        </div>
      )}

      {kind === "document" && (
        <div className="relative z-10 flex h-full items-center gap-4">
          <div className="h-[78%] w-[38%] rounded-xl border-4 border-white bg-[#fef9c3] shadow-xl" />
          <div className="flex flex-1 flex-col justify-center rounded-2xl bg-white/95 p-4 text-neutral-900">
            <p className="font-[family-name:var(--font-serif)] text-[1.05rem] leading-tight text-[#78350f] sm:text-[1.2rem]">
              First read done
            </p>
            <p className="mt-2 text-[12px] leading-relaxed text-neutral-600">
              Highlights ready for human review.
            </p>
            <div className="mt-4 h-1.5 rounded-full bg-neutral-100">
              <div
                className="h-full w-[72%] rounded-full"
                style={{ background: accent }}
              />
            </div>
          </div>
        </div>
      )}

      {kind === "hrms" && (
        <div className="relative z-10 flex h-full flex-col justify-center gap-3">
          {["Hiring", "Attendance", "Reimburse"].map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3"
            >
              <span
                className="flex size-7 items-center justify-center rounded-full text-[11px] font-medium text-white"
                style={{ background: accent }}
              >
                {index + 1}
              </span>
              <span className="text-[13px] font-medium text-white/90">{step}</span>
              {index < 2 && (
                <span className="ml-auto font-[family-name:var(--font-geist-mono)] text-[10px] text-white/40">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

type BuiltProjectsStackProps = {
  projects: readonly BuiltProject[];
};

export default function BuiltProjectsStack({ projects }: BuiltProjectsStackProps) {
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [transforms, setTransforms] = useState<CardTransform[]>(() =>
    projects.map(() => DEFAULT_TRANSFORM),
  );
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(media.matches);
    const onChange = () => setReduceMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    trackRefs.current = trackRefs.current.slice(0, projects.length);

    let frame = 0;

    const update = () => {
      setTransforms(computeTransforms(trackRefs.current, reduceMotion));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [projects.length, reduceMotion]);

  return (
    <section
      id="built-projects"
      className="relative border-t border-neutral-200 bg-white text-black"
    >
      <div className="mx-auto max-w-[1100px] px-6 pt-16 sm:px-10 sm:pt-20">
        <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
          Built projects
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-neutral-950">
          What we&apos;ve built
        </h2>
        <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-neutral-600">
          Scroll — each project card rises and settles over the last.
        </p>
      </div>

      <div className="relative mt-10 sm:mt-12">
        {projects.map((project, index) => {
          const theme = THEMES[index % THEMES.length];
          const transform = transforms[index] ?? DEFAULT_TRANSFORM;
          const stackInset = index * 16;

          const cardStyle: CSSProperties = {
            background: theme.bg,
            transform: `translate3d(0, ${transform.y}px, 0) scale(${transform.scale})`,
            opacity: transform.opacity,
            transformOrigin: "center top",
            boxShadow: `0 ${24 + index * 4}px ${70 + index * 8}px rgba(15,23,42,${0.12 + index * 0.02})`,
          };

          return (
            <div
              key={project.name}
              ref={(node) => {
                trackRefs.current[index] = node;
              }}
              className="built-project-track relative h-[185svh]"
            >
              <article
                className="built-project-panel sticky top-0 flex h-svh items-stretch overflow-visible"
                style={{ zIndex: 10 + index }}
              >
                <div
                  className="built-project-card mx-auto flex h-full w-full max-w-[1100px] flex-col px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8"
                  style={{ paddingTop: `calc(0.5rem + ${stackInset}px)` }}
                >
                  <div
                    className="built-project-card-inner grid h-full min-h-0 flex-1 gap-0 overflow-hidden rounded-[1.75rem] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:rounded-[2rem]"
                    style={cardStyle}
                  >
                    <div className="flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                      <p
                        className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.16em]"
                        style={{ color: theme.accent }}
                      >
                        {String(index + 1).padStart(2, "0")} · {theme.tag}
                      </p>
                      <h3 className="mt-3 font-[family-name:var(--font-serif)] text-[clamp(1.6rem,3.2vw,2.35rem)] leading-[1.08] tracking-[-0.03em] text-neutral-950">
                        {project.name}
                      </h3>
                      <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-neutral-700 sm:text-[16px]">
                        {project.description}
                      </p>
                    </div>

                    <div className="relative min-h-[240px] p-4 sm:p-6 lg:p-8">
                      <ProjectVisual
                        kind={theme.visual}
                        accent={theme.accent}
                        visualBg={theme.visualBg}
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
