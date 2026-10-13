import Link from "next/link";

const voices = [
  {
    quote:
      "Working with Agility AI helped our leadership team move from scattered AI experiments to a clear operating rhythm.",
    name: "Client Name",
    role: "Title, Organisation",
  },
  {
    quote:
      "They didn't just ship tools—they built the capability for our people to run and extend what was delivered.",
    name: "Client Name",
    role: "Title, Organisation",
  },
  {
    quote:
      "Adoption and implementation were treated as one programme. That made the difference.",
    name: "Client Name",
    role: "Title, Organisation",
  },
] as const;

const digDeeper = [
  { label: "AI Maturity Check", href: "/ai-maturity-check" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/about#faq" },
] as const;

export default function Testimonials() {
  return (
    <>
      {/* Trust strip */}
      {/* <section
        id="testimonial"
        aria-label="Trust strip"
        className="border-y border-neutral-200 bg-[#f6f6f6] text-black"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10 sm:py-12 md:px-14 lg:px-16 xl:px-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[3px] w-8 bg-black" aria-hidden="true" />
            <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
              Trust strip
            </p>
          </div>
          <p className="max-w-[36ch] font-[family-name:var(--font-serif)] text-[clamp(1.4rem,2.8vw,1.9rem)] leading-[1.2] tracking-[-0.02em] text-neutral-950">
            Teams trust Agility AI to make AI work in the real world
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-neutral-200 pt-6">
            {["Client", "Partner", "Org", "Brand"].map((label) => (
              <span
                key={label}
                className="font-[family-name:var(--font-geist-mono)] text-[12px] uppercase tracking-[0.18em] text-neutral-300"
              >
                {label} logo
              </span>
            ))}
          </div>
        </div>
      </section> */}

      {/* Voices preview */}
      {/* <section
        aria-labelledby="voices-heading"
        className="border-b border-neutral-200 bg-white text-black"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 sm:py-16 md:px-14 lg:px-16 xl:px-20">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2
                id="voices-heading"
                className="font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-neutral-950"
              >
                Hear it from people we&apos;ve worked with
              </h2>
              <p className="mt-3 max-w-[40ch] text-[14px] leading-relaxed text-neutral-500 sm:text-[15px]">
                A preview of the same voices you&apos;ll hear more from on our
                testimonials page.
              </p>
            </div>
            <Link
              href="/testimonials"
              className="cta-cut inline-flex h-11 w-fit shrink-0 items-center justify-center border border-neutral-900 bg-transparent px-5 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.08em] text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
            >
              All testimonials
            </Link>
          </div>

          <ul className="mt-10 grid gap-0 border border-neutral-200 md:grid-cols-3 md:divide-x md:divide-neutral-200">
            {voices.map((item, index) => (
              <li
                key={index}
                className="flex flex-col border-b border-neutral-200 px-5 py-7 last:border-b-0 md:border-b-0 md:px-7 md:py-8"
              >
                <p className="flex-1 text-[15px] leading-relaxed text-neutral-700 sm:text-[16px] sm:leading-[1.65]">
                  “{item.quote}”
                </p>
                <div className="mt-6 border-t border-dashed border-neutral-300 pt-4">
                  <p className="text-[13px] font-semibold text-neutral-900">
                    {item.name}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.1em] text-neutral-400">
                    {item.role}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section> */}

      {/* Dig deeper */}
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
