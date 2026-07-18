import type { Metadata } from "next";
import Link from "next/link";
import SiteChrome, { PageHero } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: {
    absolute: "Our Team and Advisory Board | Agility AI",
  },
  description:
    "Meet the founding team and advisory board behind Agility AI, spanning AI engineering, rural management, public policy, law and entrepreneurship.",
  openGraph: {
    title: "Our Team and Advisory Board | Agility AI",
    description:
      "Meet the founding team and advisory board behind Agility AI, spanning AI engineering, rural management, public policy, law and entrepreneurship.",
  },
  twitter: {
    title: "Our Team and Advisory Board | Agility AI",
    description:
      "Meet the founding team and advisory board behind Agility AI, spanning AI engineering, rural management, public policy, law and entrepreneurship.",
  },
};

const founders = [
  {
    name: "Sharad Raj Utsav",
    role: "Director and CEO",
    initials: "SR",
    tone: "bg-neutral-800",
    bio: "B.Tech, NSUT Delhi; MBA (Rural Management), IRMA Anand; advanced studies in Data Science and AI, BITS Pilani. Selected for the Stanford Seed programme at Stanford Graduate School of Business, one of 100 ventures chosen across South Asia. Leads vision, strategy, and institutional partnerships.",
  },
  {
    name: "Shreya Sinha",
    role: "Director and COO",
    initials: "SS",
    tone: "bg-neutral-700",
    bio: "B.Tech, NSUT Delhi; PGP in Digital Marketing and Strategic Marketing, MICA Ahmedabad. Nearly six years leading digital marketing and analytics at Piramal Pharma Solutions, and two years with the Piramal Foundation across rural government schools in Rajasthan. Leads operations, programme design, and stakeholder experience.",
  },
  {
    name: "Aryan Shukla",
    role: "Co-Founder and CTO",
    initials: "AS",
    tone: "bg-neutral-600",
    bio: "Integrated B.Tech and M.Tech in Mathematics and Computing, IIT (BHU) Varanasi. Nearly three years as a Machine Learning Engineer at Samsung Research Institute, Delhi. Owns the technology stack, AI systems, and automation pipelines.",
  },
] as const;

const advisors = [
  {
    name: "Sri R. Ramaseshan",
    role: "Advisor",
    bio: "Former IAS officer; former MD and CEO, NCDEX; former Chairman, National Commodity Clearing Ltd. Brings national level policy and governance experience to any engagement operating inside regulatory or institutional constraints.",
  },
  {
    name: "Prof. Nakul Parameswar",
    role: "Advisor",
    bio: "Assistant Professor, Strategic Management and Entrepreneurship, IIT Hyderabad. Research grounding in how organisations actually adopt new systems, not just deploy them.",
  },
  {
    name: "Prof. Sumit Kumar Yadav",
    role: "Advisor",
    bio: "Assistant Professor, IIT Roorkee; PhD, IIM Ahmedabad. Adds further academic rigor on the institutional and strategy side of our advisory work.",
  },
  {
    name: "Prof. Aashish Argade",
    role: "Advisor",
    bio: "Assistant Professor, IRMA Anand; PhD, IIM Ahmedabad. Expertise in rural and institutional systems broadly, relevant to any large, decentralised organisation, not one sector alone.",
  },
  {
    name: "Prof. Ashok R. Patil",
    role: "Advisor",
    bio: "Vice Chancellor, NUSRL Ranchi; former Professor, NLSIU Bengaluru. Legal and policy expertise relevant to governance and compliance conversations.",
  },
] as const;

export default function TeamPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Team and Advisors"
        title="The people building this, and the people making sure we build it right."
        description="Meet the founding team and advisory board behind Agility AI — spanning AI engineering, rural management, public policy, law and entrepreneurship."
      />

      {/* Founding team */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-[3px] w-8 bg-black" aria-hidden="true" />
            <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
              Founding team
            </p>
          </div>

          <ul className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {founders.map((member) => (
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
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Advisory board */}
      <section className="border-t border-neutral-200 bg-[#f7f7f7] text-black">
        <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[3px] w-8 bg-black" aria-hidden="true" />
            <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
              Advisory board
            </p>
          </div>
          <h2 className="max-w-[28ch] font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.5vw,2.4rem)] leading-[1.12] tracking-[-0.02em] text-neutral-950">
            The people who make sure we&apos;re not just moving fast, but moving
            right.
          </h2>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {advisors.map((advisor) => (
              <li
                key={advisor.name}
                className="border border-neutral-200 bg-white p-6 sm:p-7"
              >
                <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-[#3b6ef5]">
                  {advisor.role}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-serif)] text-[1.25rem] leading-tight tracking-[-0.02em] text-neutral-950">
                  {advisor.name}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-neutral-600 sm:text-[15px] sm:leading-[1.65]">
                  {advisor.bio}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer links */}
      <section className="border-t border-white/10 bg-black text-white">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-14">
          <div className="max-w-xl">
            <p className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.16em] text-[#3b6ef5]">
              Next
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-serif)] text-[clamp(1.4rem,2.8vw,1.85rem)] leading-[1.15] tracking-[-0.02em]">
              Want to work with us — or join the team?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/about"
              className="cta-cut inline-flex h-11 items-center justify-center border border-white/25 px-5 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] text-white transition-all hover:border-white/50 hover:bg-white/5"
            >
              About Agility AI
            </Link>
            <Link
              href="/careers"
              className="cta-cut inline-flex h-11 items-center justify-center bg-white px-5 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] text-black transition-all hover:bg-white/90"
            >
              Join the team
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
