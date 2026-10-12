"use client";

import Link from "next/link";
import Reveal from "@/components/about/Reveal";
import OfferingIcon from "@/components/services/OfferingIcon";
import OfferingMascot from "@/components/services/OfferingMascot";

const OFFERINGS = [
  {
    id: "enablement",
    footerLabel: "AI Enablement",
    description:
      "Teach your team to use AI inside the work they already do — so efficiency jumps, not creeps.",
    offsetClass: "lg:translate-y-0",
    icon: "layers" as const,
  },
  {
    id: "integration",
    footerLabel: "AI Integration",
    description:
      "Wire AI into the tools you already open every day — quietly in the background, not another login.",
    offsetClass: "lg:translate-y-10",
    icon: "connect" as const,
  },
  {
    id: "products",
    footerLabel: "AI Products",
    description:
      "Ready-made tools you can start using this week — configured to match how your organisation works.",
    offsetClass: "lg:translate-y-20",
    icon: "product" as const,
  },
] as const;

export default function OfferingsShowcase() {
  return (
    <section className="services-offerings-gradient relative overflow-hidden border-b border-[#dbeafe]/80">
      <div
        className="pointer-events-none absolute inset-0 services-offerings-glow"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20 lg:py-24">
        <Reveal>
          <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-[#3b6ef5]">
            Offerings
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-3 max-w-[16ch] font-[family-name:var(--font-serif)] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] tracking-[-0.03em] text-[#0f172a]">
            Ready to move faster with AI?
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-[#475569] sm:text-[16px]">
            Three ways in — pick where you&apos;re stuck, then dig into the
            details below.
          </p>
        </Reveal>

        <div className="relative mt-12 lg:mt-16">
          <div className="grid gap-5 md:grid-cols-3 md:gap-6 lg:items-start">
            {OFFERINGS.map((offering, index) => (
              <Reveal
                key={offering.id}
                delay={120 + index * 90}
                className={offering.offsetClass}
              >
                <Link
                  href={`#${offering.id}`}
                  className={[
                    "services-offering-card group relative flex min-h-[280px] flex-col rounded-[1.75rem] border border-white/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all duration-300 sm:min-h-[320px] sm:p-7",
                    index === 2 ? "lg:overflow-visible" : "",
                  ].join(" ")}
                >
                  <OfferingIcon kind={offering.icon} />

                  <p className="mt-6 flex-1 text-[15px] leading-[1.65] text-[#334155] sm:text-[16px]">
                    {offering.description}
                  </p>

                  <p className="mt-8 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.14em] text-[#94a3b8] transition-colors group-hover:text-[#3b6ef5]">
                    {offering.footerLabel}
                  </p>

                  {index === 2 && (
                    <OfferingMascot
                      placement="top-right"
                      message="Hey there! 👋 Need a boost?"
                    />
                  )}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
