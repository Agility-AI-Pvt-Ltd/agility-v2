import type { Metadata } from "next";
import Link from "next/link";
import JobsList from "@/components/careers/JobsList";
import SiteChrome from "@/components/SiteChrome";
import { fetchJobs } from "@/lib/hrms/fetch-jobs";

export const metadata: Metadata = {
  title: {
    absolute: "Careers at Agility AI | Join Our Team",
  },
  description:
    "Agility AI is hiring people who want real ownership over what they build. See open roles and how our hiring process works.",
  openGraph: {
    title: "Careers at Agility AI | Join Our Team",
    description:
      "Agility AI is hiring people who want real ownership over what they build. See open roles and how our hiring process works.",
  },
  twitter: {
    title: "Careers at Agility AI | Join Our Team",
    description:
      "Agility AI is hiring people who want real ownership over what they build. See open roles and how our hiring process works.",
  },
};

const hiringSteps = [
  {
    number: "01",
    title: "Tell us about yourself",
    body: "And what you'd want to build here.",
    accent: "#e11d48",
  },
  {
    number: "02",
    title: "A short call",
    body: "Twenty minutes, no trick questions.",
    accent: "#eab308",
  },
  {
    number: "03",
    title: "A small trial task",
    body: "So you can show us how you think, not just what's on your resume.",
    accent: "#2563eb",
  },
  {
    number: "04",
    title: "A decision",
    body: "Usually within a week.",
    accent: "#16a34a",
  },
] as const;

export default async function CareersPage() {
  const { jobs, error } = await fetchJobs();

  return (
    <SiteChrome>
      {/* Hero — light, bold, centered */}
      <section className="bg-[#e8e8e4] text-black">
        <div className="mx-auto flex min-h-[42svh] max-w-[1100px] flex-col items-center justify-center px-6 py-20 text-center sm:px-10 sm:py-28">
          <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
            Careers
          </p>
          <h1 className="mt-6 max-w-[18ch] text-[clamp(1.75rem,5.5vw,3.75rem)] font-semibold uppercase leading-[1.05] tracking-[0.02em] text-neutral-950">
            We hire people who&apos;d rather build the thing than talk about
            building it.
          </h1>
          <p className="mt-8 max-w-[42ch] text-[14px] leading-relaxed text-neutral-600 sm:text-[15px]">
            Agility AI is hiring people who want real ownership over what they
            build. See open roles and how our hiring process works.
          </p>
        </div>
      </section>

      {/* Culture — dark, two columns */}
      <section className="bg-[#222] text-white">
        <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-24">
          <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-medium tracking-[-0.02em]">
            Culture
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="space-y-5 text-[14px] leading-[1.75] text-white/75 sm:text-[15px]">
              <p className="text-[18px] font-medium leading-snug tracking-[-0.01em] text-white sm:text-[20px]">
                Small team, real ownership.
              </p>
              <p>
                What you build here goes live — it doesn&apos;t sit in a deck
                waiting for approval. If you want to be told exactly what to do
                every day, this probably isn&apos;t the place.
              </p>
            </div>
            <div className="space-y-5 text-[14px] leading-[1.75] text-white/75 sm:text-[15px]">
              <p>
                You&apos;ll work directly with the founders, not through three
                layers of management.
              </p>
              <p>
                The things you ship this month are usually live by next month,
                not stuck in a review cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How hiring works — sidebar + accent cards */}
      <section className="border-t border-neutral-200 bg-[#f4f4f2] text-black">
        <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-10">
            <div className="lg:border-r lg:border-neutral-300 lg:pr-8">
              <p className="font-[family-name:var(--font-geist-mono)] text-[12px] font-semibold uppercase tracking-[0.04em] text-neutral-950">
                How hiring works
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-neutral-500">
                Four steps. No theatre.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {hiringSteps.map((step) => (
                <li
                  key={step.number}
                  className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
                >
                  <span
                    className="block h-1.5 w-full"
                    style={{ backgroundColor: step.accent }}
                    aria-hidden="true"
                  />
                  <div className="p-5 sm:p-6">
                    <p className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.14em] text-neutral-400">
                      Step {step.number}
                    </p>
                    <h3 className="mt-3 text-[17px] font-semibold tracking-[-0.01em] text-neutral-950">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section
        id="open-roles"
        className="border-t border-neutral-200 bg-[#f4f4f2] text-black"
      >
        <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-10">
            <div className="lg:border-r lg:border-neutral-300 lg:pr-8">
              <p className="font-[family-name:var(--font-geist-mono)] text-[12px] font-semibold uppercase tracking-[0.04em] text-neutral-950">
                Open roles
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-neutral-500">
                Pulled from our HRMS. Apply directly — no separate account
                needed.
              </p>
            </div>

            <div>
              <p className="mb-6 max-w-xl text-[14px] leading-relaxed text-neutral-600 sm:text-[15px]">
                Each listing shows the title, location, and a short description,
                with a direct Apply button into the application flow.
              </p>
              <JobsList jobs={jobs} fetchError={error} />
            </div>
          </div>
        </div>
      </section>

      {/* Yellow banner CTA */}
      <section className="border-t border-black/10 bg-[#f5e642] text-black">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-12">
          <div className="flex items-start gap-4 sm:items-center">
            <span
              className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-black/20 sm:mt-0"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9" />
                <path d="M8.5 14c1.2 1.3 2.6 2 3.5 2s2.3-.7 3.5-2" strokeLinecap="round" />
                <circle cx="9" cy="10" r="0.9" fill="currentColor" stroke="none" />
                <circle cx="15" cy="10" r="0.9" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <div>
              <p className="text-[clamp(1.35rem,2.5vw,1.75rem)] font-semibold tracking-[-0.02em]">
                We like you already.
              </p>
              <p className="mt-1 text-[14px] text-black/65">
                Don&apos;t see a fit? Still interested — tell us what you&apos;d
                want to build here. →
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-black px-6 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.08em] text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </SiteChrome>
  );
}
