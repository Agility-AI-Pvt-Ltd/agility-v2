import Link from "next/link";

const industries = [
  { name: "Financial Services", blurb: "Risk, ops, and client experience" },
  { name: "Healthcare", blurb: "Care workflows and knowledge systems" },
  { name: "Manufacturing", blurb: "Quality, planning, and shop-floor AI" },
  { name: "Public Sector", blurb: "Service delivery with governance" },
  { name: "Professional Services", blurb: "Delivery leverage and research" },
  { name: "Retail & Commerce", blurb: "Demand, support, and merchandising" },
] as const;

export default function IndustriesTeaser() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="bg-white text-black"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20 md:px-14 lg:px-16 xl:px-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-8 bg-[#3b6ef5]" aria-hidden="true" />
              <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                Industries
              </p>
            </div>
            <h2
              id="industries-heading"
              className="font-[family-name:var(--font-serif)] text-[clamp(1.85rem,3.8vw,2.75rem)] leading-[1.12] tracking-[-0.02em] text-neutral-950"
            >
              Sector context, without one-size-fits-all playbooks
            </h2>
            <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-neutral-500 sm:text-[16px]">
              We adapt adoption and implementation to how your industry
              decides, delivers, and governs change.
            </p>
          </div>

          <Link
            href="/industries"
            className="cta-cut inline-flex h-11 w-fit items-center justify-center border border-black bg-transparent px-5 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] text-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            Explore Industries
          </Link>
        </div>

        <ul className="mt-12 grid gap-px bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <li key={industry.name} className="bg-white p-6 sm:p-7">
              <Link
                href="/industries"
                className="group block transition-colors"
              >
                <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-neutral-950 group-hover:text-[#3b6ef5] sm:text-[17px]">
                  {industry.name}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-neutral-500 sm:text-[14px]">
                  {industry.blurb}
                </p>
                <span className="mt-4 inline-flex font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.12em] text-neutral-400 transition-colors group-hover:text-neutral-700">
                  View details →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
