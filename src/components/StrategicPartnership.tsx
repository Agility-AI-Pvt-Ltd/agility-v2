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

export default function StrategicPartnership() {
  return (
    <section
      aria-labelledby="strategic-partnership-heading"
      className="relative overflow-hidden border-b border-[#e9e0ff] bg-[#f6f1ff] text-black"
    >
      {/* Soft corner glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 size-[28rem] rounded-full bg-[#e9d8ff]/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-16 size-[32rem] rounded-full bg-[#ddd6fe]/55 blur-3xl"
      />

      {/* Dubai skyline — right side */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 z-[1] h-[72%] w-[min(110%,820px)] sm:-right-56 sm:h-[85%] sm:w-[min(95%,980px)] lg:-right-72 lg:h-[95%] lg:w-[min(88%,1180px)] xl:-right-80"
      >
        <Image
          src="/assets/dubai_buildings.png"
          alt=""
          fill
          sizes="(max-width: 768px) 110vw, 90vw"
          className="object-contain object-right-bottom scale-110 sm:scale-125"
          priority={false}
        />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#f6f1ff] via-[#f6f1ff]/65 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-[#f6f1ff] to-transparent" />
      </div>

      {/* Orbital rings near robot */}
      <svg
        aria-hidden="true"
        viewBox="0 0 420 280"
        className="pointer-events-none absolute bottom-0 right-0 hidden h-[260px] w-[400px] text-[#a78bfa]/40 sm:block lg:h-[300px] lg:w-[460px]"
      >
        <ellipse
          cx="250"
          cy="200"
          rx="190"
          ry="95"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <ellipse
          cx="250"
          cy="200"
          rx="140"
          ry="70"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-16 sm:px-10 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[44rem] text-center">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#ddd6fe] bg-white/80 px-4 py-1.5 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-[#5b21b6] shadow-[0_8px_24px_rgba(124,58,237,0.08)]">
              Client voices
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="strategic-partnership-heading"
              className="mt-6 font-[family-name:var(--font-serif)] text-[clamp(1.85rem,4.2vw,2.85rem)] leading-[1.12] tracking-[-0.03em] text-neutral-950"
            >
              In our clients&apos;{" "}
              <span className="relative inline-block whitespace-nowrap">
                words
                <svg
                  viewBox="0 0 80 10"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-[#7c3aed]"
                  aria-hidden="true"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 7c16-5 32 3 48-2s22-3 28 2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Cards + robot share one baseline */}
        <div className="relative mt-10 sm:mt-12 lg:mt-14">
          <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:pr-32 xl:pr-36">
            {QUOTES.map((quote, index) => (
              <li key={quote.name}>
                <Reveal delay={140 + index * 90} className="h-full">
                  <article className="relative flex h-full min-h-[280px] flex-col rounded-[1.5rem] border-2 border-[#ddd6fe] bg-white p-7 shadow-[0_22px_60px_rgba(91,33,182,0.12)] sm:min-h-[320px] sm:p-9 lg:p-10">
                    <span
                      aria-hidden="true"
                      className="font-[family-name:var(--font-serif)] text-[3.75rem] leading-none text-[#a78bfa] sm:text-[4.25rem]"
                    >
                      “
                    </span>
                    <p className="mt-1 font-[family-name:var(--font-serif)] text-[1.2rem] font-semibold italic leading-[1.55] tracking-[-0.015em] text-neutral-950 sm:text-[1.35rem] sm:leading-[1.6] lg:text-[1.45rem]">
                      <mark className="bg-[#ede9fe] px-1 box-decoration-clone text-neutral-950">
                        {quote.text}
                      </mark>
                    </p>
                    <div className="mt-auto pt-8">
                      <span
                        aria-hidden="true"
                        className="mb-4 block h-0.5 w-12 bg-[#a78bfa]"
                      />
                      <p className="font-[family-name:var(--font-serif)] text-[1.3rem] font-bold leading-tight tracking-[-0.02em] text-neutral-950 sm:text-[1.4rem]">
                        {quote.name}
                      </p>
                      <p className="mt-2 font-[family-name:var(--font-geist-mono)] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6d28d9] sm:text-[12px]">
                        {quote.title}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>

          {/* Robot — base aligned to card base */}
          <div className="pointer-events-none absolute bottom-0 right-10 z-10 hidden w-[130px] sm:right-14 sm:block lg:right-16 lg:w-[150px]">
            <div className="relative origin-bottom animate-[services-robot-bob_3.2s_ease-in-out_infinite]">
              <Image
                src="/assets/proof/robot.png"
                alt=""
                width={150}
                height={150}
                className="h-auto w-full object-contain object-bottom drop-shadow-[0_16px_32px_rgba(124,58,237,0.28)]"
              />
              <span
                aria-hidden="true"
                className="absolute -left-1 top-8 size-2 rotate-45 bg-[#a78bfa]/80 sm:size-2.5"
              />
              <span
                aria-hidden="true"
                className="absolute right-3 top-2 size-1.5 rotate-45 bg-[#c4b5fd] sm:size-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
