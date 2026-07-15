import Link from "next/link";

const team = [
  { name: "Shreya", role: "AI Adoption & Enablement", initials: "SH", tone: "bg-neutral-800" },
  { name: "Sharad", role: "Strategy & Client Delivery", initials: "SR", tone: "bg-neutral-700" },
  { name: "Aryan", role: "AI Implementation & Automation", initials: "AR", tone: "bg-neutral-600" },
] as const;

export default function TeamTeaser() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="bg-black text-white"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20 md:px-14 lg:px-16 xl:px-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-8 bg-[#3b6ef5]" aria-hidden="true" />
              <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
                Team
              </p>
            </div>
            <h2
              id="team-heading"
              className="font-[family-name:var(--font-serif)] text-[clamp(1.85rem,3.8vw,2.75rem)] leading-[1.12] tracking-[-0.02em] text-white"
            >
              Practitioners who ship systems and build capability
            </h2>
            <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-white/55 sm:text-[16px]">
              Placeholder profiles for now—swap in real photos and bios on the
              full Team page.
            </p>
          </div>

          <Link
            href="/team"
            className="cta-cut inline-flex h-11 w-fit items-center justify-center bg-white px-5 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] text-black transition-all duration-300 hover:bg-white/90"
          >
            Meet the Team
          </Link>
        </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-3 lg:gap-5">
          {team.map((member) => (
            <li key={member.name} className="group">
              <div
                className={[
                  "relative aspect-[4/5] overflow-hidden",
                  member.tone,
                ].join(" ")}
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent_45%)]" />
                <span className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-geist-mono)] text-3xl tracking-[0.2em] text-white/25">
                  {member.initials}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[15px] font-semibold text-white">
                    {member.name}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.12em] text-white/60">
                    {member.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
