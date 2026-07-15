import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function QuietCredentialMarks() {
  return (
    <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
      <svg
        viewBox="0 0 128 28"
        className="h-8 w-auto text-neutral-400 sm:h-9"
        fill="currentColor"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="14"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 6.8c2.4 2 3.8 4.2 3.8 7.2S14.4 19.2 12 21.2C9.6 19.2 8.2 17 8.2 14S9.6 8.8 12 6.8z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.15"
        />
        <text
          x="28"
          y="12.5"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="9.5"
          fontWeight="700"
          letterSpacing="0.1em"
        >
          STARTUP
        </text>
        <text
          x="28"
          y="23"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="9.5"
          fontWeight="700"
          letterSpacing="0.22em"
        >
          INDIA
        </text>
      </svg>

      <span className="hidden h-8 w-px bg-neutral-200 sm:block" aria-hidden="true" />

      <svg
        viewBox="0 0 148 28"
        className="h-8 w-auto text-neutral-400 sm:h-9"
        fill="currentColor"
        aria-hidden="true"
      >
        <rect
          x="1.5"
          y="4"
          width="20"
          height="20"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M6.4 18.2V9.8h3.4c1.9 0 3 .95 3 2.45 0 1.55-1.15 2.5-3 2.5H8.6v3.45H6.4zm2.2-5.3h1c.85 0 1.35-.4 1.35-1.05S10.4 10.8 9.6 10.8h-1v2.1z"
          fill="currentColor"
        />
        <text
          x="30"
          y="12.5"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="9.5"
          fontWeight="700"
          letterSpacing="0.14em"
        >
          IRMA ISEED
        </text>
        <text
          x="30"
          y="23"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="8"
          fontWeight="500"
          letterSpacing="0.18em"
        >
          FOUNDATION
        </text>
      </svg>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="flex min-h-full flex-col bg-black text-white">
      <Navbar />

      <main className="flex-1">
        {/* Origin / mission */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10 sm:py-24 lg:py-28">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-8 bg-[#3b6ef5]" aria-hidden="true" />
              <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
                About
              </p>
            </div>

            <h1 className="font-[family-name:var(--font-serif)] text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.08] tracking-[-0.02em] text-white">
              Built for organisations that refuse to treat AI as theatre
            </h1>

            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-white/60 sm:text-[16px] sm:leading-[1.75]">
              <p>
                Agility AI Pvt. Ltd. started from a simple observation: most AI
                programmes fail between the pilot and the operating model.
                Tools get demoed. Dashboards get applauded. Then nothing
                durable remains—no ownership, no fluency, no system that people
                trust enough to run tomorrow.
              </p>
              <p>
                Our mission is to close that gap. We help organisations not
                only deploy AI systems, but build the internal capability to
                run, govern, and extend them. Agility AI Pvt. Ltd. is the
                contracting and delivery entity for those client engagements.
              </p>
              <p>
                We work at the intersection of adoption and implementation—
                because installing AI without organisational readiness creates
                shelved projects, and “AI training” without real systems creates
                inspiration without leverage.
              </p>
            </div>
          </div>
        </section>

        {/* Positioning depth */}
        <section className="bg-white text-black">
          <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20 lg:py-24">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[3px] w-8 bg-[#3b6ef5]" aria-hidden="true" />
                <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                  How we position the work
                </p>
              </div>
              <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.8vw,2.6rem)] leading-[1.12] tracking-[-0.02em] text-neutral-950">
                Adoption + implementation, explained properly
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-neutral-500 sm:text-[16px] sm:leading-[1.7]">
                These are not synonyms. Treating them as one vague “AI project”
                is how organisations spend twice and learn half as much.
              </p>
            </div>

            <div className="mt-12 grid gap-0 border border-neutral-200 md:grid-cols-2">
              <article className="border-b border-neutral-200 p-7 sm:p-9 md:border-b-0 md:border-r">
                <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-[#3b6ef5]">
                  AI Adoption
                </p>
                <h3 className="mt-3 text-[20px] font-semibold tracking-[-0.02em] text-neutral-950 sm:text-[22px]">
                  The organisational side of AI
                </h3>
                <div className="mt-4 space-y-4 text-[14px] leading-relaxed text-neutral-600 sm:text-[15px] sm:leading-[1.7]">
                  <p>
                    Adoption is how people, teams, and leadership become
                    AI-fluent. It covers readiness, change, skills, decision
                    rights, and day-to-day operating cadence.
                  </p>
                  <p>
                    Without adoption, even strong implementations sit idle—or
                    get used inconsistently, unsafely, or only by a handful of
                    enthusiasts.
                  </p>
                  <p>
                    In practice, that means clarifying use-cases, building
                    fluency across roles, establishing ownership, and making AI
                    part of how work actually gets done.
                  </p>
                </div>
              </article>

              <article className="p-7 sm:p-9">
                <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-[#3b6ef5]">
                  AI Implementation
                </p>
                <h3 className="mt-3 text-[20px] font-semibold tracking-[-0.02em] text-neutral-950 sm:text-[22px]">
                  The systems side of AI
                </h3>
                <div className="mt-4 space-y-4 text-[14px] leading-relaxed text-neutral-600 sm:text-[15px] sm:leading-[1.7]">
                  <p>
                    Implementation is technical delivery: integrating models
                    and tools into real workflows, data paths, and production
                    environments.
                  </p>
                  <p>
                    Without implementation, adoption becomes theatre—
                    workshops and enthusiasm with nothing durable to operate.
                  </p>
                  <p>
                    In practice, that means designing for production, wiring
                    systems into existing stacks, and leaving behind something
                    the organisation can run, govern, and extend.
                  </p>
                </div>
              </article>
            </div>

            <p className="mt-10 max-w-3xl border-t border-dashed border-neutral-300 pt-8 text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
              Agility AI exists in the overlap. We help clients move from
              intent to operating capability—so AI is not just powered into
              the stack, but fluent inside the organisation.
            </p>
          </div>
        </section>

        {/* Team link */}
        <section className="border-y border-white/10 bg-black">
          <div className="mx-auto flex max-w-[1100px] flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-14">
            <div className="max-w-xl">
              <p className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.16em] text-[#3b6ef5]">
                People
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-serif)] text-[clamp(1.5rem,3vw,2rem)] leading-[1.15] tracking-[-0.02em] text-white">
                Meet the practitioners behind the work
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-white/55 sm:text-[15px]">
                Strategy, enablement, delivery, and governance—one team that
                treats adoption and implementation as a single programme.
              </p>
            </div>
            <Link
              href="/team"
              className="cta-cut inline-flex h-11 w-fit shrink-0 items-center justify-center bg-white px-6 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] text-black transition-all hover:bg-white/90"
            >
              View Team
            </Link>
          </div>
        </section>

        {/* Quiet credentials — lower on page */}
        <section
          aria-label="Credentials"
          className="bg-[#f7f7f7] text-neutral-700"
        >
          <div className="mx-auto max-w-[1100px] px-6 py-12 sm:px-10 sm:py-14">
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              Recognition
            </p>

            <div className="mt-6 flex flex-col gap-8 border-t border-neutral-200 pt-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <QuietCredentialMarks />

              <div className="max-w-xl space-y-3 text-[12px] leading-relaxed text-neutral-500 sm:text-[13px]">
                <p>
                  Recognised as a Startup by DPIIT, Ministry of Commerce &amp;
                  Industry, Government of India — Startup India Certificate No.
                  DIPP205863.
                </p>
                <p>
                  Incubated at the IRMA ISEED Foundation, the technology
                  business incubator of the Institute of Rural Management Anand
                  (IRMA).
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
