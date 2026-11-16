import Image from "next/image";
import Reveal from "@/components/about/Reveal";

const QUOTES = [
  {
    text: "AI is reshaping every industry in every market, and the future of work will belong to organisations that partner well and move early.",
    name: "Shimal Thakrar",
    title: "Founder & CEO, 108 Meridian",
  },
  {
    text: "Through Shimal, 108 Meridian brings vision, senior relationships and delivery experience to help UAE organisations move from AI intent to real impact.",
    name: "Sharad Utsav",
    title: "Founder & CEO, Agility AI",
  },
] as const;

function UaeFlag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 8" className={className} aria-hidden="true" role="img">
      <title>Flag of the United Arab Emirates</title>
      <rect width="12" height="8" fill="#fff" />
      <rect width="12" height="2.666" y="0" fill="#00732f" />
      <rect width="12" height="2.666" y="5.334" fill="#000" />
      <rect width="3" height="8" fill="#ff0000" />
    </svg>
  );
}

export default function UaePartnerSection() {
  return (
    <section
      aria-labelledby="uae-partner-heading"
      className="relative overflow-hidden border-t border-[#e9e0ff] bg-[#f6f1ff] text-black"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 z-[1] h-[70%] w-[min(95%,900px)]"
      >
        <Image
          src="/assets/dubai_buildings.png"
          alt=""
          fill
          sizes="60vw"
          className="object-contain object-right-bottom opacity-90"
        />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#f6f1ff] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
        <Reveal>
          <p className="inline-flex items-center gap-2 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-[#5b21b6]">
            <UaeFlag className="h-3 w-[18px] overflow-hidden rounded-[2px] ring-1 ring-black/10" />
            Our partner in the UAE
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="uae-partner-heading"
            className="mt-4 max-w-[28ch] font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.5vw,2.4rem)] leading-[1.12] tracking-[-0.02em] text-neutral-950"
          >
            Agility AI and 108 Meridian partner to implement AI in the UAE
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {QUOTES.map((quote, index) => (
            <li key={quote.name}>
              <Reveal delay={140 + index * 80} className="h-full">
                <article className="flex h-full flex-col rounded-[1.35rem] border border-[#ebe4ff] bg-white p-6 sm:p-7">
                  <p className="font-[family-name:var(--font-serif)] text-[1.1rem] font-semibold italic leading-[1.55] text-neutral-900">
                    {quote.text}
                  </p>
                  <div className="mt-auto pt-6">
                    <p className="font-[family-name:var(--font-serif)] text-[1.15rem] font-bold text-neutral-950">
                      {quote.name}
                    </p>
                    <p className="mt-1.5 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-[#7c3aed]">
                      {quote.title}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
