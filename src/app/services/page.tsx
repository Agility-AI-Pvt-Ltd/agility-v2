import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/about/Reveal";
import BuiltProjectsGrid from "@/components/services/BuiltProjectsGrid";
import OfferingsShowcase from "@/components/services/OfferingsShowcase";
import ServicesHeroVisual from "@/components/services/ServicesHeroVisual";
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
    value: "5-7 hrs",
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
                AI enablement training, AI integration builds, and ready-to-use
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

        <div className="relative">
          <section className="border-t border-neutral-200 bg-[#f7f7f7] text-black">
            <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
              <Reveal>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-[3px] w-8 bg-black" aria-hidden="true" />
                  <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                    Track record
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
                  Institute of India (EDII), the National Cooperative Dairy
                  Federation of India (NCDFI), Karnataka Cooperative Milk
                  Federation (KMF) and Indian Dairy Machinery Company (IDMC).
                </p>
              </Reveal>
            </div>
          </section>

          <BuiltProjectsGrid />

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
