import SiteChrome, { PageHero } from "@/components/SiteChrome";

const quotes = [
  {
    quote:
      "Working with Agility AI helped our leadership team move from scattered AI experiments to a clear operating rhythm.",
    name: "Client Name",
    role: "Title, Organisation",
    sector: "Enterprise",
  },
  {
    quote:
      "They didn't just ship tools—they built the capability for our people to run and extend what was delivered.",
    name: "Client Name",
    role: "Title, Organisation",
    sector: "Cooperative",
  },
  {
    quote:
      "Adoption and implementation were treated as one programme. That made the difference.",
    name: "Client Name",
    role: "Title, Organisation",
    sector: "Education",
  },
  {
    quote:
      "Placeholder quote ready for a real client voice on fluency, delivery, or governance outcomes.",
    name: "Client Name",
    role: "Title, Organisation",
    sector: "Sector",
  },
] as const;

const logos = [
  "Logo 01",
  "Logo 02",
  "Logo 03",
  "Logo 04",
  "Logo 05",
  "Logo 06",
] as const;

export default function TestimonialsPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Client Voices"
        title="Proof in the words of teams who put AI to work"
        description="This page is structured and ready to publish. Swap placeholder quotes and logos when real client permissions are in place—no redesign required."
      />

      {/* Trusted by strip — greyed placeholder */}
      <section
        aria-label="Trusted by"
        className="border-b border-neutral-200 bg-white"
      >
        <div className="mx-auto max-w-[1100px] px-6 py-10 sm:px-10">
          <div className="flex flex-col gap-6 border border-dashed border-neutral-300 bg-[#fafafa] px-5 py-6 sm:flex-row sm:items-center sm:px-8">
            <p className="shrink-0 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">
              Trusted by
            </p>
            <ul className="flex min-w-0 flex-1 flex-wrap items-center gap-x-6 gap-y-3 sm:justify-evenly">
              {logos.map((logo) => (
                <li
                  key={logo}
                  className="font-[family-name:var(--font-geist-mono)] text-[12px] uppercase tracking-[0.14em] text-neutral-300"
                >
                  [{logo}]
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-3 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-neutral-400">
            Greyed placeholders until approved logos arrive
          </p>
        </div>
      </section>

      {/* Quote cards */}
      <section className="bg-[#f6f6f6] text-black">
        <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
          <ul className="grid gap-5 md:grid-cols-2">
            {quotes.map((item, index) => (
              <li
                key={index}
                className="flex flex-col border border-neutral-200 bg-white p-7 sm:p-8"
              >
                <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.16em] text-[#3b6ef5]">
                  {item.sector}
                </p>
                <blockquote className="mt-4 flex-1 text-[16px] leading-relaxed text-neutral-800 sm:text-[17px] sm:leading-[1.65]">
                  “{item.quote}”
                </blockquote>
                <div className="mt-6 border-t border-dashed border-neutral-300 pt-4">
                  <p className="text-[13px] font-semibold text-neutral-950">
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
      </section>
    </SiteChrome>
  );
}
