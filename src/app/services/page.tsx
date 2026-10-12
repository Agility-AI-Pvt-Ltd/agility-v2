import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/about/Reveal";
import BuiltProjectsGrid from "@/components/services/BuiltProjectsGrid";
import OfferingsShowcase from "@/components/services/OfferingsShowcase";
import ServiceTrackSection from "@/components/services/ServiceTrackSection";
import ServicesHeroVisual from "@/components/services/ServicesHeroVisual";
import SessionCounter from "@/components/services/SessionCounter";
import TimeSavedCalculator from "@/components/services/TimeSavedCalculator";
import SiteChrome from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: {
    absolute: "AI Enablement, AI Integration and AI Products | Agility AI",
  },
  description:
    "Explore Agility AI's three offerings: AI enablement training, AI integration builds and ready to use AI products, built for organisations across every industry.",
  openGraph: {
    title: "AI Enablement, AI Integration and AI Products | Agility AI",
    description:
      "Explore Agility AI's three offerings: AI enablement training, AI integration builds and ready to use AI products, built for organisations across every industry.",
  },
  twitter: {
    title: "AI Enablement, AI Integration and AI Products | Agility AI",
    description:
      "Explore Agility AI's three offerings: AI enablement training, AI integration builds and ready to use AI products, built for organisations across every industry.",
  },
};

const builtProjects = [
  {
    name: "FutureX Fellowship",
    description:
      "An AI mentorship platform that helps student entrepreneurs build real ventures, not just learn the theory.",
  },
  {
    name: "Invoicely",
    description:
      "Handles a company's accounting questions in one place — invoices, payments, the works.",
  },
  {
    name: "Edumaniax",
    description:
      "Turns learning into something closer to a game, so it actually sticks instead of getting forgotten by Monday.",
  },
  {
    name: "Fairly Settled",
    description:
      "Helps legal professionals get through long documents faster, with AI doing the first read so people can focus on the judgment calls that actually need a human.",
  },
  {
    name: "HRMS",
    description:
      "One place for hiring, attendance, and reimbursements, instead of three different logins nobody wants to open.",
  },
] as const;

const trackRecord = [
  {
    value: "5,200+",
    label:
      "professionals trained across government, PSUs, corporates and non-profits",
  },
  {
    value: "600+",
    label: "staff trained across NDDB and its associated bodies",
  },
  {
    value: "92%+",
    label: "rated the sessions excellent",
  },
  {
    value: "4-6 hrs",
    label: "saved per week on routine documentation",
  },
] as const;

export default function ServicesPage() {
  return (
    <SiteChrome>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black text-white">
        <div
          className="absolute inset-0 services-hero-ambient"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto grid max-w-[1100px] gap-12 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-10 lg:py-28">
          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[3px] w-8 bg-[#3b6ef5]" aria-hidden="true" />
                <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
                  Services
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-[family-name:var(--font-serif)] text-[clamp(2.1rem,5vw,3.5rem)] leading-[1.08] tracking-[-0.02em]">
                Three ways in.{" "}
                <span className="about-text-shimmer">
                  Pick where you&apos;re stuck.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-[48ch] text-[15px] leading-relaxed text-white/60 sm:text-[16px] sm:leading-[1.7]">
                AI enablement training, AI integration builds, and ready to use
                AI products — built for organisations across every industry.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  { label: "Enablement", href: "#enablement" },
                  { label: "Integration", href: "#integration" },
                  { label: "Products", href: "#products" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="services-jump-chip"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="hidden lg:block">
            <ServicesHeroVisual />
          </Reveal>
        </div>
      </section>

      <div className="relative">
        <OfferingsShowcase />

        <ServiceTrackSection
          id="enablement"
          variant="enablement"
          label="Offering 01"
          title="AI Enablement"
          summary="We teach your employees to use AI in the work they're already doing, not as a separate skill to pick up on the side, but folded into their actual day. Efficiency doesn't creep up slowly. It jumps."
          extra={<SessionCounter />}
          includes={[
            "Live, hands on sessions built around your team's actual tools, not generic slideware or a canned demo.",
            "Practice tied to real daily tasks, so the learning sticks past the last slide of the workshop.",
            "A short follow up window after the session for questions, so people aren't left stuck the first time they try it alone.",
          ]}
          forWhom={[
            "Teams where AI was technically rolled out but nobody's actually opened it twice.",
            "Organisations about to launch an AI tool and wanting people ready before day one, not scrambling after.",
            "Anyone tired of a training deck that got read once and forgotten.",
          ]}
          doneLooksLike={[
            "Your team using AI inside their real workflow without being reminded to.",
            "Fewer questions bouncing back to IT, or back to us.",
            "A task that used to take an afternoon now taking twenty minutes, and everyone knowing why.",
          ]}
          cta={{
            label: "Book a corporate training",
            href: "/contact",
          }}
        />

        <ServiceTrackSection
          id="integration"
          variant="integration"
          label="Offering 02"
          title="AI Integration"
          summary="We don't hand you a new dashboard to check every morning. We wire AI into the systems you already use, so it works quietly in the background instead of becoming one more tab. That includes hands on workshops for your team and integration builds shaped around the systems you're already running, not a generic plug in."
          includes={[
            "An audit of what you're already running, so nothing gets ripped out that was actually working.",
            "An integration plan built around your existing stack, not a rebuild disguised as an upgrade.",
            "The actual build, tested against how your team really works, plus a runbook your own people can read without calling us.",
          ]}
          forWhom={[
            "Organisations with real, working systems that AI needs to plug into, not a blank slate.",
            "Teams who've been burned before by a vendor that dropped in a black box and disappeared the day it shipped.",
          ]}
          doneLooksLike={[
            "AI running inside the tools your team already opens every day, with no new login anyone resents.",
            "A system your own people can maintain and adjust, not one that only makes sense to the person who built it.",
          ]}
        />

        <ServiceTrackSection
          id="products"
          variant="products"
          label="Offering 03"
          title="AI Products"
          summary="We also build ready made tools, the kind you can start using without waiting on a custom project. But even these get shaped and customized to how your organization actually works, not handed over exactly as they are, off the shelf."
          includes={[
            "Direct access to a working product, not a pilot or a proof of concept.",
            "Onboarding support so your team is using it inside days, not months.",
            "Configuration to fit how your organisation actually operates, rather than forcing your process to match the software.",
          ]}
          forWhom={[
            "Teams that need something working now, not in a quarter, and don't need a fully bespoke build to get real value.",
          ]}
          doneLooksLike={[
            "A tool your team is actually using inside a week, not sitting in a folder marked to try later.",
          ]}
        />

        <div className="relative">
          <section className="border-t border-neutral-200 bg-[#f7f7f7] text-black">
            <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
              <Reveal>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-[3px] w-8 bg-black" aria-hidden="true" />
                  <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                    Industries we&apos;ve worked with
                  </p>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.5vw,2.4rem)] leading-[1.12] tracking-[-0.02em] text-neutral-950">
                  Our Track Record
                </h2>
              </Reveal>

              <Reveal delay={140}>
                <ul className="mt-8 grid gap-px border border-neutral-900 bg-neutral-900 sm:grid-cols-2 lg:grid-cols-4">
                  {trackRecord.map((stat) => (
                    <li
                      key={stat.value}
                      className="flex flex-col bg-[#0b1f4a] px-5 py-7 sm:px-6 sm:py-8"
                    >
                      <p className="font-[family-name:var(--font-serif)] text-[clamp(1.85rem,3.5vw,2.5rem)] leading-none tracking-[-0.02em] text-[#f0e6a8]">
                        {stat.value}
                      </p>
                      <p className="mt-4 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
                        {stat.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-6 max-w-[70ch] text-[14px] leading-relaxed text-neutral-600 sm:text-[15px] sm:leading-[1.7]">
                  Institutional engagements include NDDB, the Foundation for
                  Innovation and Action (FIA), the Entrepreneurship Development
                  Institute of India (EDII), NCDFI, KMF and IDMC.
                </p>
              </Reveal>
            </div>
          </section>

          <BuiltProjectsGrid projects={builtProjects} />

          <Reveal>
            <TimeSavedCalculator />
          </Reveal>

          <section className="relative overflow-hidden border-t border-white/10 bg-black text-white">
            <div className="services-cta-orb" aria-hidden="true" />
            <div className="relative z-10 mx-auto flex max-w-[1100px] flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-20">
              <Reveal>
                <div>
                  <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.12] tracking-[-0.02em]">
                    Not sure which offering fits?
                  </h2>
                  <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-white/60">
                    Start with a brief on the contact page — we&apos;ll point
                    you to enablement, integration, or products based on where
                    you&apos;re stuck.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <Link
                  href="/contact"
                  className="cta-cut inline-flex h-11 w-fit items-center justify-center bg-white px-6 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] text-black transition-all hover:bg-white/90"
                >
                  Talk to us
                </Link>
              </Reveal>
            </div>
          </section>
        </div>
      </div>
    </SiteChrome>
  );
}
