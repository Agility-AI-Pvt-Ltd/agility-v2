import Link from "next/link";

export default function CareersTeaser() {
  return (
    <section
      id="careers"
      aria-labelledby="careers-heading"
      className="border-y border-white/10 bg-[#0a0a0a] text-white"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-12 sm:px-10 sm:py-14 md:flex-row md:items-center md:justify-between md:px-14 lg:px-16 xl:px-20">
        <div className="max-w-2xl">
          <div className="mb-3 flex items-center gap-3">
            <span
              className="inline-flex items-center gap-2 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-[#3b6ef5]"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#3b6ef5] opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-[#3b6ef5]" />
              </span>
              We&apos;re hiring
            </span>
          </div>
          <h2
            id="careers-heading"
            className="font-[family-name:var(--font-serif)] text-[clamp(1.6rem,3.2vw,2.25rem)] leading-[1.15] tracking-[-0.02em] text-white"
          >
            Build AI fluency into organisations—with us
          </h2>
          <p className="mt-3 max-w-[48ch] text-[14px] leading-relaxed text-white/55 sm:text-[15px]">
            Looking for people who care about adoption as much as delivery.
            Explore open roles and how we work.
          </p>
        </div>

        <Link
          href="/careers"
          className="cta-cut inline-flex h-11 w-fit shrink-0 items-center justify-center bg-white px-6 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] text-black transition-all duration-300 hover:bg-white/90"
        >
          View Careers
        </Link>
      </div>
    </section>
  );
}
