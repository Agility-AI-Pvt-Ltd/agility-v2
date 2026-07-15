import Link from "next/link";
import SiteChrome, { PageHero } from "@/components/SiteChrome";

const industries = [
  {
    name: "Dairy / Cooperative",
    problem:
      "Fragmented member data, field operations, and decision cycles that move slower than market and supply realities.",
    approach:
      "We pair enablement for co-op teams with practical automation in procurement, quality, member services, and planning—so AI supports the cooperative model instead of fighting it.",
  },
  {
    name: "Education",
    problem:
      "Institutions adopt tools for teaching or administration without the fluency, ownership, or workflow design to sustain them.",
    approach:
      "We help academic and operations teams build AI literacy, then implement systems for learning support, knowledge work, and administrative load with clear governance.",
  },
  {
    name: "Enterprise / Corporate",
    problem:
      "Pilots multiply across functions while production systems, accountability, and operating rhythms stay thin.",
    approach:
      "We align adoption and implementation across business and tech—prioritising use cases, shipping into real stacks, and installing owners who can extend what ships.",
  },
  {
    name: "Flexible / Emerging",
    problem:
      "New or hybrid sectors need AI leverage without inherited enterprise playbooks that ignore their constraints.",
    approach:
      "We start from how your organisation decides and delivers, then shape a dual-track programme that fits your pace, risk profile, and operating model.",
  },
] as const;

export default function IndustriesPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Industries"
        title="Sector context without one-size-fits-all scripts"
        description="Every industry has different decision rights, risk tolerances, and workflow realities. We adapt adoption and implementation to how your sector actually operates."
      />

      <section className="bg-white text-black">
        <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
          <ul className="grid gap-5 md:grid-cols-2">
            {industries.map((industry) => (
              <li
                key={industry.name}
                className="flex flex-col border border-neutral-200 bg-[#fafafa] p-7 sm:p-8"
              >
                <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-neutral-950 sm:text-[22px]">
                  {industry.name}
                </h2>
                <div className="mt-6 space-y-5 border-t border-dashed border-neutral-300 pt-6">
                  <div>
                    <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-400">
                      The problem
                    </p>
                    <p className="mt-2 text-[14px] leading-relaxed text-neutral-600 sm:text-[15px]">
                      {industry.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.16em] text-[#3b6ef5]">
                      How Agility AI approaches it
                    </p>
                    <p className="mt-2 text-[14px] leading-relaxed text-neutral-700 sm:text-[15px]">
                      {industry.approach}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-4 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-[14px] text-neutral-500">
              Don&apos;t see your sector listed? The dual-track model still
              applies—we&apos;ll tailor the framing with you.
            </p>
            <Link
              href="/contact"
              className="cta-cut inline-flex h-11 w-fit items-center justify-center bg-black px-6 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] text-white transition-all hover:bg-neutral-800"
            >
              Discuss your sector
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
