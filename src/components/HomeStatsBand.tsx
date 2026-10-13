import Reveal from "@/components/about/Reveal";

const STATS = [
  {
    value: "5,200+",
    label:
      "professionals trained across government, PSUs, corporates and non-profits",
  },
  {
    value: "600+",
    label: "staff trained across NDDB and its associated bodies",
  },
  {
    value: "92%+",
    label: "rated the sessions excellent",
  },
] as const;

export default function HomeStatsBand() {
  return (
    <section
      aria-label="Track record highlights"
      className="border-b border-neutral-200 bg-white text-black"
    >
      <div className="mx-auto max-w-[1100px] px-6 py-10 sm:px-10 sm:py-12">
        <ul className="grid gap-px border border-neutral-900 bg-neutral-900 sm:grid-cols-3">
          {STATS.map((stat, index) => (
            <li key={stat.value}>
              <Reveal delay={60 + index * 70} className="h-full">
                <div className="flex h-full flex-col bg-[#0b1f4a] px-5 py-6 sm:px-6 sm:py-7">
                  <p className="font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.2vw,2.35rem)] leading-none tracking-[-0.02em] text-[#f0e6a8]">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.12em] text-neutral-400">
          Training and enablement outcomes across institutional and corporate
          programmes
        </p>
      </div>
    </section>
  );
}
