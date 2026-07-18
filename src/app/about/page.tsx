import type { Metadata } from "next";
import AboutContactSection from "@/components/about/AboutContactSection";
import AboutHeroVisual from "@/components/about/AboutHeroVisual";
import {
  DualProblemViz,
  FoundingMixViz,
  StagesPipelineViz,
} from "@/components/about/AboutIllustrations";
import FaqAccordion from "@/components/about/FaqAccordion";
import Reveal from "@/components/about/Reveal";
import SiteChrome from "@/components/SiteChrome";
import { FAQ_ITEMS, buildFaqPageSchema } from "@/lib/faq";

export const metadata: Metadata = {
  title: {
    absolute: "About Agility AI | AI Enablement and Integration Company",
  },
  description:
    "Agility AI is an AI enablement, integration and product company built on the idea that AI adoption and AI implementation are two different problems, solved together.",
  openGraph: {
    title: "About Agility AI | AI Enablement and Integration Company",
    description:
      "Agility AI is an AI enablement, integration and product company built on the idea that AI adoption and AI implementation are two different problems, solved together.",
  },
  twitter: {
    title: "About Agility AI | AI Enablement and Integration Company",
    description:
      "Agility AI is an AI enablement, integration and product company built on the idea that AI adoption and AI implementation are two different problems, solved together.",
  },
};

function QuietCredentialMarks() {
  return (
    <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
      <svg
        viewBox="0 0 128 28"
        className="h-8 w-auto text-neutral-400 sm:h-9"
        fill="currentColor"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="14"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 6.8c2.4 2 3.8 4.2 3.8 7.2S14.4 19.2 12 21.2C9.6 19.2 8.2 17 8.2 14S9.6 8.8 12 6.8z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.15"
        />
        <text
          x="28"
          y="12.5"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="9.5"
          fontWeight="700"
          letterSpacing="0.1em"
        >
          STARTUP
        </text>
        <text
          x="28"
          y="23"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="9.5"
          fontWeight="700"
          letterSpacing="0.22em"
        >
          INDIA
        </text>
      </svg>

      <span
        className="hidden h-8 w-px bg-neutral-200 sm:block"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 148 28"
        className="h-8 w-auto text-neutral-400 sm:h-9"
        fill="currentColor"
        aria-hidden="true"
      >
        <rect
          x="1.5"
          y="4"
          width="20"
          height="20"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M6.4 18.2V9.8h3.4c1.9 0 3 .95 3 2.45 0 1.55-1.15 2.5-3 2.5H8.6v3.45H6.4zm2.2-5.3h1c.85 0 1.35-.4 1.35-1.05S10.4 10.8 9.6 10.8h-1v2.1z"
          fill="currentColor"
        />
        <text
          x="30"
          y="12.5"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="9.5"
          fontWeight="700"
          letterSpacing="0.14em"
        >
          IRMA ISEED
        </text>
        <text
          x="30"
          y="23"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="8"
          fontWeight="500"
          letterSpacing="0.18em"
        >
          FOUNDATION
        </text>
      </svg>
    </div>
  );
}

const stages = [
  {
    number: "01",
    title: "Discovery",
    body: "A short conversation to understand what's actually stuck, not what a sales deck assumes is stuck.",
  },
  {
    number: "02",
    title: "Build or train",
    body: "Scoped to something your team can absorb, rather than a six month roadmap nobody reads past page one.",
  },
  {
    number: "03",
    title: "Handover",
    body: "Documentation your own people can use, and a defined point where you stop needing us for the day to day.",
  },
] as const;

export default function AboutPage() {
  return (
    <SiteChrome>
      {/* Opening */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black text-white">
        <div className="absolute inset-0 about-hero-ambient" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid max-w-[1100px] gap-12 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-10 lg:py-28">
          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[3px] w-8 bg-[#3b6ef5]" aria-hidden="true" />
                <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
                  About
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-[family-name:var(--font-serif)] text-[clamp(2.1rem,5vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-white">
                We didn&apos;t start Agility AI to{" "}
                <span className="about-text-shimmer">sell you AI.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-white/60 sm:text-[16px] sm:leading-[1.75]">
                <p>
                  Plenty of people already do that. We started it because most
                  organisations don&apos;t need another vendor. They need to
                  stop needing one.
                </p>
                <p>
                  The people behind Agility AI came into this from different
                  directions. One side of the founding team spent years inside
                  rural management and institutional systems, watching well
                  funded initiatives stall not because the technology failed,
                  but because nobody built the habit of actually using it.
                  Another side came from digital marketing and analytics,
                  watching the same pattern play out in corporate teams instead
                  of cooperatives. A third side is pure engineering, the people
                  who actually build the systems everyone else is trying to
                  adopt. That mix is why the company exists the way it does:
                  adoption and engineering, treated as one problem instead of
                  two separate vendors handing off to each other.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={220} className="hidden lg:block">
            <div className="space-y-8">
              <AboutHeroVisual />
              <FoundingMixViz />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Positioning */}
      <section className="overflow-hidden bg-white text-black">
        <div className="mx-auto grid max-w-[1100px] gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16 lg:py-24">
          <div>
            <Reveal>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[3px] w-8 bg-[#3b6ef5]" aria-hidden="true" />
                <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                  Positioning
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="max-w-[28ch] font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.8vw,2.6rem)] leading-[1.12] tracking-[-0.02em] text-neutral-950">
                Adoption and implementation are not the same problem.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-[62ch] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px] sm:leading-[1.7]">
                They get talked about as if they are. Treating them that way is
                usually why an AI initiative looks promising in month one and
                forgotten by month six. We build both sides: the working system,
                and the internal muscle memory to run it, govern it, and change
                it without picking up the phone to us every time.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <DualProblemViz />
          </Reveal>
        </div>
      </section>

      {/* How we work */}
      <section className="border-t border-neutral-200 bg-[#f7f7f7] text-black">
        <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
          <Reveal>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-8 bg-black" aria-hidden="true" />
              <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                How we work
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="max-w-[36ch] font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.5vw,2.4rem)] leading-[1.12] tracking-[-0.02em] text-neutral-950">
              Three stages. Same pattern every time.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
              Most engagements move through the same three stages, whether
              it&apos;s a training programme, an integration build, or a product
              rollout.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8">
              <StagesPipelineViz />
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {stages.map((stage, index) => (
              <Reveal key={stage.number} delay={120 + index * 90}>
                <article className="about-stage-card h-full border border-neutral-200 bg-white p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-[#3b6ef5]">
                      Stage {stage.number}
                    </p>
                    <span className="about-stage-icon" aria-hidden="true">
                      {index === 0 && "◎"}
                      {index === 1 && "◇"}
                      {index === 2 && "→"}
                    </span>
                  </div>
                  <h3 className="mt-3 font-[family-name:var(--font-serif)] text-[1.35rem] leading-tight tracking-[-0.02em] text-neutral-950">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-neutral-600">
                    {stage.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section
        aria-label="Credentials"
        className="border-t border-neutral-200 bg-white text-black"
      >
        <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
          <Reveal>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-8 bg-black" aria-hidden="true" />
              <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                Credentials
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.5vw,2.4rem)] leading-[1.12] tracking-[-0.02em] text-neutral-950">
              Recognised. Incubated. Accountable.
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-8 flex flex-col gap-8 border-t border-neutral-200 pt-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
              <QuietCredentialMarks />
              <p className="max-w-[58ch] text-[14px] leading-relaxed text-neutral-600 sm:text-[15px] sm:leading-[1.7]">
                Agility AI is recognised as a Startup by the Department for
                Promotion of Industry and Internal Trade (DPIIT), Ministry of
                Commerce and Industry, Government of India, under Startup India
                Certificate No. DIPP205863, and is incubated at the IRMA ISEED
                Foundation, the technology business incubator of the Institute
                of Rural Management, Anand. Our CEO was also selected for the
                Stanford Seed programme at Stanford Graduate School of Business,
                one of 100 ventures chosen across South Asia.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="border-t border-neutral-200 bg-[#f6f6f6] text-black"
      >
        <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] lg:items-start lg:gap-14">
            <div className="lg:sticky lg:top-8">
              <Reveal>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-[3px] w-8 bg-black" aria-hidden="true" />
                  <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                    FAQ
                  </p>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.85rem,3.8vw,2.6rem)] leading-[1.1] tracking-[-0.02em] text-neutral-950">
                  Straight answers. Quotable ones.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-neutral-600">
                  Common questions about enablement, integration, products,
                  pricing, timelines, industries, and how to apply for a role.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="faq-visual mt-8 hidden lg:block" aria-hidden="true">
                  <div className="faq-visual-ring faq-visual-ring-1" />
                  <div className="faq-visual-ring faq-visual-ring-2" />
                  <div className="faq-visual-ring faq-visual-ring-3" />
                  <div className="faq-visual-core" />
                  <p className="faq-visual-label">
                    {FAQ_ITEMS.length} questions · FAQPage schema
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <FaqAccordion items={FAQ_ITEMS} />
            </Reveal>
          </div>
        </div>
      </section>

      <AboutContactSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqPageSchema(FAQ_ITEMS)),
        }}
      />
    </SiteChrome>
  );
}
