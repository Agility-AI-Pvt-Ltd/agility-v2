import Link from "next/link";
import TestimonialsShowcase from "@/components/testimonials/TestimonialsShowcase";

const digDeeper = [
  { label: "AI Maturity Check", href: "/ai-maturity-check" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Team", href: "/team" },
  { label: "FAQ", href: "/about#faq" },
] as const;

export default function Testimonials() {
  return (
    <>
      <TestimonialsShowcase limit={6} />

      <section
        aria-labelledby="dig-deeper-heading"
        className="border-b border-neutral-200 bg-[#fafafa] text-black"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 sm:py-16 md:px-14 lg:px-16 xl:px-20">
          <h2
            id="dig-deeper-heading"
            className="font-[family-name:var(--font-serif)] text-[clamp(1.6rem,3.2vw,2.25rem)] leading-[1.15] tracking-[-0.02em] text-neutral-950"
          >
            Dig deeper
          </h2>

          <ul className="mt-8 grid gap-px border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
            {digDeeper.map((item) => (
              <li key={item.label} className="bg-[#fafafa]">
                <Link
                  href={item.href}
                  className="group flex h-full min-h-[120px] flex-col justify-between bg-white p-5 transition-colors hover:bg-neutral-950 sm:p-6"
                >
                  <span className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.14em] text-neutral-400 transition-colors group-hover:text-white/45">
                    Explore
                  </span>
                  <span className="mt-6 text-[18px] font-semibold tracking-[-0.02em] text-neutral-950 transition-colors group-hover:text-white sm:text-[20px]">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
