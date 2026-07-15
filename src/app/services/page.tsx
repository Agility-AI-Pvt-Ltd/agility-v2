import Link from "next/link";
import SiteChrome, { PageHero } from "@/components/SiteChrome";

const tracks = [
  {
    id: "adoption",
    label: "Track 01",
    title: "AI Adoption / Enablement",
    summary:
      "Build organisational fluency so AI is used, owned, and improved—not abandoned after the pilot.",
    includes: [
      "AI readiness and use-case prioritisation",
      "Role-based training and enablement programmes",
      "Operating cadence, ownership, and decision rights",
      "Change support for leaders and frontline teams",
      "Adoption measurement and reinforcement loops",
    ],
    forWhom: [
      "Leadership teams starting or restarting AI programmes",
      "Organisations with tools in place but low usage",
      "HR, L&D, and transformation owners driving fluency",
      "Teams that need governance literacy before scale",
    ],
    doneLooksLike: [
      "Clear owners for AI outcomes—not just vendors",
      "People who can use and challenge AI systems confidently",
      "Repeatable rituals for review, improvement, and escalation",
      "Adoption metrics that show behaviour change, not only installs",
    ],
  },
  {
    id: "implementation",
    label: "Track 02",
    title: "AI Implementation / Automation",
    summary:
      "Design, integrate, and ship AI systems into real workflows—production-ready and extendable.",
    includes: [
      "Solution design and architecture for real workflows",
      "Integration into existing stacks and data paths",
      "Automation delivery from prototype to production",
      "Controls, monitoring, and handoff documentation",
      "Iteration plans for governance and extension",
    ],
    forWhom: [
      "Ops and technology leaders with concrete workflow targets",
      "Teams stuck between PoC and production",
      "Enterprises needing implementation with accountability",
      "Organisations pairing delivery with adoption support",
    ],
    doneLooksLike: [
      "Working systems in production—not demo environments",
      "Documented runbooks and clear internal ownership",
      "Integrations that survive real operational load",
      "A path to extend, audit, and improve without starting over",
    ],
  },
] as const;

function TrackSection({
  track,
  inverted,
}: {
  track: (typeof tracks)[number];
  inverted?: boolean;
}) {
  return (
    <section
      id={track.id}
      className={inverted ? "bg-[#f7f7f7] text-black" : "bg-white text-black"}
    >
      <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
        <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-[#3b6ef5]">
          {track.label}
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.12] tracking-[-0.02em] text-neutral-950">
          {track.title}
        </h2>
        <p className="mt-4 max-w-[54ch] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
          {track.summary}
        </p>

        <div className="mt-10 grid gap-8 border-t border-neutral-200 pt-10 md:grid-cols-3">
          <div>
            <h3 className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
              What it includes
            </h3>
            <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-neutral-700">
              {track.includes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#3b6ef5]" aria-hidden="true">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
              Who it&apos;s for
            </h3>
            <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-neutral-700">
              {track.forWhom.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#3b6ef5]" aria-hidden="true">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
              What “done” looks like
            </h3>
            <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-neutral-700">
              {track.doneLooksLike.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#3b6ef5]" aria-hidden="true">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-dashed border-neutral-300 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-[14px] text-neutral-500">
            Ready to explore this track for your organisation?
          </p>
          <Link
            href="/contact"
            className="cta-cut inline-flex h-11 w-fit items-center justify-center bg-black px-6 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] text-white transition-all hover:bg-neutral-800"
          >
            Talk about {track.id === "adoption" ? "Adoption" : "Implementation"}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Services / Solutions"
        title="Two tracks. One outcome: AI that your organisation can actually run."
        description="We mirror how durable AI programmes work—adoption/enablement and implementation/automation—then connect them so neither side becomes theatre."
      />
      <TrackSection track={tracks[0]} />
      <TrackSection track={tracks[1]} inverted />
    </SiteChrome>
  );
}
