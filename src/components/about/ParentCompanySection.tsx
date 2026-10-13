import Link from "next/link";
import Reveal from "@/components/about/Reveal";
import {
  LYFSHILP_ACADEMY_NAME,
  LYFSHILP_ACADEMY_URL,
  PARENT_COMPANY_BLURB,
} from "@/lib/company";

export default function ParentCompanySection() {
  return (
    <section
      id="parent-company"
      className="border-t border-neutral-200 bg-[#fafafa] text-black"
    >
      <div className="mx-auto max-w-[1100px] px-6 py-14 sm:px-10 sm:py-16">
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[3px] w-8 bg-black" aria-hidden="true" />
            <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
              Our parent company
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-[28ch] font-[family-name:var(--font-serif)] text-[clamp(1.65rem,3.2vw,2.25rem)] leading-[1.12] tracking-[-0.02em] text-neutral-950">
            {LYFSHILP_ACADEMY_NAME}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px] sm:leading-[1.7]">
            {PARENT_COMPANY_BLURB}
          </p>
          <Link
            href={LYFSHILP_ACADEMY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.08em] text-[#3b6ef5] transition-colors hover:text-[#2563eb]"
          >
            Visit {LYFSHILP_ACADEMY_NAME}
            <span aria-hidden="true">↗</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
