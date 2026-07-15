import Link from "next/link";
import SiteChrome, { PageHero } from "@/components/SiteChrome";

const team = [
  {
    name: "Shreya",
    role: "AI Adoption & Enablement",
    initials: "SH",
    tone: "bg-neutral-800",
    bio: "Leads fluency and change programmes so teams can actually use AI in daily work. Focused on operating cadence, leadership readiness, and making adoption measurable—not theatrical.",
    markers: ["Enablement lead", "Org change & fluency"],
  },
  {
    name: "Sharad",
    role: "Strategy & Client Delivery",
    initials: "SR",
    tone: "bg-neutral-700",
    bio: "Shapes dual-track engagements that connect business outcomes to delivery reality. Brings IRMA-grounded systems thinking and sector pragmatism to how programmes are scoped and governed.",
    markers: ["IRMA background", "Sector & programme design"],
  },
  {
    name: "Aryan",
    role: "AI Implementation & Automation",
    initials: "AR",
    tone: "bg-neutral-600",
    bio: "Builds and integrates production AI systems into real workflows. Obsessed with handoffs that last—documentation, ownership, and architectures organisations can extend without starting over.",
    markers: ["Implementation", "Automation & systems"],
  },
] as const;

export default function TeamPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Team"
        title="Practitioners who ship systems and build capability"
        description="Adoption and implementation only work together when the people delivering both take ownership of the outcome—not just the artefact."
      />

      <section className="bg-white text-black">
        <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
          <ul className="grid gap-8 lg:grid-cols-3">
            {team.map((member) => (
              <li key={member.name} className="flex flex-col">
                <div
                  className={[
                    "relative aspect-[4/5] overflow-hidden",
                    member.tone,
                  ].join(" ")}
                >
                  <span className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-geist-mono)] text-4xl tracking-[0.2em] text-white/20">
                    {member.initials}
                  </span>
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent_50%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[18px] font-semibold text-white">
                      {member.name}
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.12em] text-white/65">
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-[14px] leading-relaxed text-neutral-600 sm:text-[15px] sm:leading-[1.7]">
                  {member.bio}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {member.markers.map((marker) => (
                    <li
                      key={marker}
                      className="border border-neutral-200 bg-[#fafafa] px-2.5 py-1 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.1em] text-neutral-500"
                    >
                      {marker}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="mt-14 border-t border-neutral-200 pt-8">
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.16em] text-neutral-400">
              Credibility
            </p>
            <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-neutral-600 sm:text-[15px]">
              Agility AI is recognised under Startup India (DPIIT Certificate
              No. DIPP205863) and incubated at the IRMA ISEED Foundation. That
              institutional backing sits behind a team built for both
              organisational change and technical delivery.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="cta-cut inline-flex h-10 items-center justify-center border border-black px-4 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.06em] text-black transition-all hover:bg-black hover:text-white"
              >
                About Agility AI
              </Link>
              <Link
                href="/careers"
                className="cta-cut inline-flex h-10 items-center justify-center bg-black px-4 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.06em] text-white transition-all hover:bg-neutral-800"
              >
                Join the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
