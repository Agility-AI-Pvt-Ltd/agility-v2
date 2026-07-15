const placeholders = [
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

export default function Testimonials() {
  return (
    <section
      id="testimonial"
      aria-labelledby="testimonials-heading"
      className="border-y border-neutral-200 bg-[#f6f6f6] text-black"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 sm:py-16 md:px-14 lg:px-16 xl:px-20">
        <div className="flex flex-col gap-6 border-b border-neutral-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-8 bg-[#3b6ef5]" aria-hidden="true" />
              <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                Trust strip
              </p>
            </div>
            <h2
              id="testimonials-heading"
              className="font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-neutral-950"
            >
              Teams trust Agility AI to make AI work in the real world
            </h2>
          </div>
          <p className="max-w-sm font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.12em] text-neutral-400">
            Placeholder quotes — replace with real testimonials
          </p>
        </div>

        <ul className="mt-0 grid divide-y divide-neutral-200 md:grid-cols-3 md:divide-x md:divide-y-0">
          {placeholders.map((item, index) => (
            <li key={index} className="flex flex-col px-0 py-8 md:px-8 md:py-10 first:md:pl-0 last:md:pr-0">
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
    </section>
  );
}
