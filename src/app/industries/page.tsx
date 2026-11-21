import type { Metadata } from "next";
import Link from "next/link";
import SiteChrome, { PageHero } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: {
    absolute:
      "AI for Government, Corporates, Institutions and Schools | Agility AI",
  },
  description:
    "We build and train for government, corporates, institutions, schools and social enterprises. Each segment names the organisations we have worked with.",
  openGraph: {
    title:
      "AI for Government, Corporates, Institutions and Schools | Agility AI",
    description:
      "We build and train for government, corporates, institutions, schools and social enterprises.",
  },
};

const industries = [
  {
    name: "Government",
    promise:
      "AI for officers, departments and training academies, designed around how government works.",
    clients: "MEA, SSIFS, HIPA, MoFAHD, NDDB",
  },
  {
    name: "Corporates",
    promise:
      "AI that takes routine work off busy teams, from sales to the back office.",
    clients: "IDMC Limited",
  },
  {
    name: "Institutions",
    promise:
      "AI for training institutes, federations and the people they serve.",
    clients: "EDII, KMF, NCDFI",
  },
  {
    name: "Schools",
    promise:
      "AI programmes for students and teachers, delivered with our parent company, Lyfshilp Academy.",
    clients:
      "DPS Gurugram Sector 45, DPS R.K. Puram, Mount Carmel Dwarka, Springdales Pusa Road, Modern School Barakhamba Road",
  },
  {
    name: "Social enterprises",
    promise:
      "AI for foundations and non-profits that need to do more with small teams.",
    clients: "FIA",
  },
] as const;

export default function IndustriesPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Industries"
        title="Where we work"
        description="We build and train for government, corporates, institutions, schools and social enterprises. Each segment below names the organisations we have worked with."
      />

      <section className="bg-white text-black">
        <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
          <ul className="grid gap-5 md:grid-cols-2">
            {industries.map((industry) => (
              <li
                key={industry.name}
                className="flex flex-col border border-neutral-200 bg-[#fafafa] p-7 sm:p-8"
              >
                <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-neutral-950 sm:text-[22px]">
                  {industry.name}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-700 sm:text-[16px]">
                  {industry.promise}
                </p>
                <div className="mt-6 border-t border-dashed border-neutral-300 pt-5">
                  <p className="text-[14px] leading-relaxed text-neutral-600">
                    {industry.clients}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-4 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-[14px] text-neutral-500">
              Don&apos;t see your sector listed? Enablement, integration and
              products still apply. We will tailor the framing with you.
            </p>
            <Link
              href="/contact"
              className="cta-cut inline-flex h-11 w-fit items-center justify-center bg-black px-6 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] text-white transition-all hover:bg-neutral-800"
            >
              Discuss your sector
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
