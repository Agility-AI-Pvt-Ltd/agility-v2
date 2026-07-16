import Link from "next/link";
import JobsList from "@/components/careers/JobsList";
import SiteChrome, { PageHero } from "@/components/SiteChrome";
import { fetchJobs } from "@/lib/hrms/fetch-jobs";

const values = [
  {
    title: "Fluency over flash",
    body: "We care more about what teams can run next month than what looks impressive in a deck.",
  },
  {
    title: "Both sides of the work",
    body: "Adoption without systems is theatre. Systems without adoption are scrap. We hold both.",
  },
  {
    title: "Own the handoff",
    body: "Done means the client can operate, govern, and extend—not just receive a deliverable.",
  },
] as const;

export default async function CareersPage() {
  const { jobs, error } = await fetchJobs();

  return (
    <SiteChrome>
      <PageHero
        eyebrow="Careers"
        title="Build AI fluency into organisations—with us"
        description="We're hiring people who take adoption as seriously as delivery. Open roles are listed below—apply directly from this page."
      />

      <section className="bg-white text-black">
        <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
          <div className="max-w-2xl">
            <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-[#3b6ef5]">
              Culture & values
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-serif)] text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.15] tracking-[-0.02em] text-neutral-950">
              How we work when the pilot ends
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
              Agility AI is a delivery and enablement company. That means clear
              ownership, plain language with clients, and a bias toward systems
              people can live with—not just launch.
            </p>
          </div>

          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <li
                key={value.title}
                className="border border-neutral-200 bg-[#fafafa] p-6"
              >
                <h3 className="text-[16px] font-semibold text-neutral-950">
                  {value.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-neutral-600">
                  {value.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-[#f6f6f6] text-black">
        <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
          <div>
            <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-[#3b6ef5]">
              Open roles
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-serif)] text-[clamp(1.5rem,3vw,2rem)] tracking-[-0.02em] text-neutral-950">
              Apply below
            </h2>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-neutral-500">
              Roles are loaded from our HRMS. Select a position, complete the
              form, and upload your resume.
            </p>
          </div>

          <JobsList jobs={jobs} fetchError={error} />
        </div>
      </section>

      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-5 px-6 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p className="max-w-xl text-[15px] text-white/60">
            Don&apos;t see a fit? Still interested in Agility AI—tell us how
            you work at the adoption/implementation intersection.
          </p>
          <Link
            href="/contact"
            className="cta-cut inline-flex h-11 w-fit items-center justify-center bg-white px-5 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] text-black transition-all hover:bg-white/90"
          >
            Contact us
          </Link>
        </div>
      </section>
    </SiteChrome>
  );
}
