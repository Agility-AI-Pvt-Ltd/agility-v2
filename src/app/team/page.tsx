import type { Metadata } from "next";
import Image from "next/image";
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
    name: "Sharad Raaj Utsav",
    role: "Founder & CEO",
    image: "/assets/image/sharad.jpeg",
    bio: "Leads strategy and partnerships. MBA, IRMA. Lead facilitator of NDDB's two-day AI Productivity Programme.",
  },
  {
    name: "Shreya Sinha",
    role: "Co-Founder & COO",
    image: "/assets/image/shreya.png",
    bio: "Leads sales, product design and delivery. B.Tech, NSUT Delhi; PGP, MICA Ahmedabad. About eight years at Piramal Group in digital marketing, data analytics and market research, including two years as a Gandhi Fellow in rural government schools in Rajasthan.",
  },
  {
    name: "Aryan Shukla",
    role: "Co-Founder & CTO",
    image: "/assets/image/aryan.png",
    bio: "Leads engineering and builds our products and client systems. IIT BHU. Former ML Engineer, Samsung Research.",
  },
] as const;

/** Bust Next/Image + browser cache when public cutouts are replaced in-place. */
const FOUNDER_IMAGE_VERSION = "20261013a";

const advisors = [
  {
    name: "Prof. Srinivasan Radhakrishnan",
    role: "Advisor",
    initials: "SR",
    image: "/image/advisory/shrinivasan.jpeg",
    bio: "Faculty, Indian Institute of Management Ahmedabad (IIM-A). PhD. Northeastern University",
  },
  {
    name: "Sri R. Ramaseshan",
    role: "Advisor",
    initials: "RR",
    image: "/image/advisory/R_Ramaseshan_sir.jpg",
    bio: "Former IAS. Ex-MD & CEO, NCDEX. Chairman, National Commodity Clearing Ltd.",
  },

  {
    name: "Prof. Nakul Parameswar",
    role: "Advisor",
    initials: "NP",
    image: "/image/advisory/nakul.jpeg",
    bio: "IIT Hyderabad. PhD, IIT Delhi.",
  },
  {
    name: "Prof. Sumit Kumar Yadav",
    role: "Advisor",
    initials: "SY",
    image: "/image/advisory/sumit.jpg",
    bio: "IIT Roorkee. PhD, IIM Ahmedabad. B.Tech, IIT Bombay.",
  },
  {
    name: "Prof. Aashish Argade",
    role: "Advisor",
    initials: "AA",
    image: "/image/advisory/aashish.jpg",
    bio: "IRMA Anand. PhD, IIM Ahmedabad.",
  },
  {
    name: "Cdr Praveen Kumar",
    role: "Advisor",
    initials: "PK",
    image: "/image/advisory/cdr_praveen.jpeg",
    bio: "CIO, Nykaa. B.Tech, IIT Kanpur. ISB Hyderabad.",
  },

  {
    name: "Prof. Manzoor UI Akram",
    role: "Advisor",
    initials: "MA",
    image: "/image/advisory/manzoor.jpeg",
    bio: "Faculty, BITS Pilani Dubai. PhD. IIM Rohtak",
  },
  {
    name: "Prof. Ashok R. Patil",
    role: "Advisor",
    initials: "AP",
    image: "/image/advisory/ashok.jpg",
    bio: "Vice Chancellor, NUSRL Ranchi. Professor, NLSIU Bengaluru.",
  },
];

export default function TeamPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Team and Advisors"
        title="The people who build and train"
        description="Meet the founding team and advisers behind Agility AI, spanning AI engineering, rural management, public policy, law and entrepreneurship."
      />

      {/* Founding team */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-[3px] w-8 bg-black" aria-hidden="true" />
            <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
              The people who build and train
            </p>
          </div>

          <ul className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {founders.map((member) => (
              <li key={member.name} className="flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden bg-white">
                  <Image
                    src={`${member.image}?v=${FOUNDER_IMAGE_VERSION}`}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-center"
                    unoptimized
                  />
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
              Our advisers
            </p>
          </div>
          <h2 className="max-w-[28ch] font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.5vw,2.4rem)] leading-[1.12] tracking-[-0.02em] text-neutral-950">
            Our advisers
          </h2>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {advisors.map((advisor) => (
              <li
                key={advisor.name}
                className="flex gap-4 border border-neutral-200 bg-white p-5 sm:gap-5 sm:p-6 sm:last:odd:col-span-2 sm:last:odd:w-full sm:last:odd:max-w-[calc(50%-0.5rem)] sm:last:odd:justify-self-center"
              >
                <div className="relative size-20 shrink-0 overflow-hidden bg-neutral-800 sm:size-24">
                  {advisor.image ? (
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      sizes="96px"
                      className="object-cover object-top"
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-geist-mono)] text-lg tracking-[0.12em] text-white/35">
                      {advisor.initials}
                    </span>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-[#3b6ef5]">
                    {advisor.role}
                  </p>
                  <h3 className="mt-1.5 font-[family-name:var(--font-serif)] text-[1.2rem] leading-tight tracking-[-0.02em] text-neutral-950 sm:text-[1.25rem]">
                    {advisor.name}
                  </h3>
                  <p className="mt-2.5 text-[14px] font-semibold leading-relaxed text-neutral-600 sm:text-[15px] sm:leading-[1.65]">
                    {advisor.bio}
                  </p>
                </div>
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
              Explore
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
