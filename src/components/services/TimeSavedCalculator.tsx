"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const REDUCTION_RATE = 0.65;
const HOURS_PER_WORK_WEEK = 40;
const WEEKS_PER_MONTH = 52 / 12;

function clampNumber(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function TimeSavedCalculator() {
  const [teamSize, setTeamSize] = useState(12);
  const [hoursPerPerson, setHoursPerPerson] = useState(6);

  const results = useMemo(() => {
    const safeTeam = clampNumber(teamSize, 1, 5000);
    const safeHours = clampNumber(hoursPerPerson, 0, 80);
    const totalRepetitiveWeekly = safeTeam * safeHours;
    const savedWeekly = totalRepetitiveWeekly * REDUCTION_RATE;
    const savedMonthly = savedWeekly * WEEKS_PER_MONTH;
    const savedYearly = savedWeekly * 52;
    const workWeeksReclaimed = savedYearly / HOURS_PER_WORK_WEEK;

    return {
      savedWeekly,
      savedMonthly,
      workWeeksReclaimed,
    };
  }, [hoursPerPerson, teamSize]);

  return (
    <section
      id="time-saved"
      className="border-t border-neutral-200 bg-[#f6f6f6] text-black"
    >
      <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-[3px] w-8 bg-black" aria-hidden="true" />
          <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
            Time saved calculator
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.5vw,2.4rem)] leading-[1.12] tracking-[-0.02em] text-neutral-950">
          What could your team get back?
        </h2>
        <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
          Estimate hours reclaimed from repetitive work. Assumes a{" "}
          {Math.round(REDUCTION_RATE * 100)}% reduction in time spent on those
          tasks — a planning estimate for conversation, not a guaranteed client
          outcome.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
          <div className="space-y-8 border border-neutral-200 bg-white p-6 sm:p-8">
            <label className="block">
              <span className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
                Team size
              </span>
              <div className="mt-3 flex items-center gap-4">
                <input
                  type="range"
                  min={1}
                  max={500}
                  value={teamSize}
                  onChange={(event) => setTeamSize(Number(event.target.value))}
                  className="services-range w-full"
                  aria-valuemin={1}
                  aria-valuemax={500}
                  aria-valuenow={teamSize}
                />
                <input
                  type="number"
                  min={1}
                  max={5000}
                  value={teamSize}
                  onChange={(event) =>
                    setTeamSize(Number(event.target.value) || 1)
                  }
                  className="w-20 border border-neutral-300 bg-[#fafafa] px-2 py-2 text-center font-[family-name:var(--font-geist-mono)] text-[14px] tabular-nums"
                />
              </div>
            </label>

            <label className="block">
              <span className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
                Hours per person, weekly, on repetitive work
              </span>
              <div className="mt-3 flex items-center gap-4">
                <input
                  type="range"
                  min={0}
                  max={40}
                  step={0.5}
                  value={hoursPerPerson}
                  onChange={(event) =>
                    setHoursPerPerson(Number(event.target.value))
                  }
                  className="services-range w-full"
                  aria-valuemin={0}
                  aria-valuemax={40}
                  aria-valuenow={hoursPerPerson}
                />
                <input
                  type="number"
                  min={0}
                  max={80}
                  step={0.5}
                  value={hoursPerPerson}
                  onChange={(event) =>
                    setHoursPerPerson(Number(event.target.value) || 0)
                  }
                  className="w-20 border border-neutral-300 bg-[#fafafa] px-2 py-2 text-center font-[family-name:var(--font-geist-mono)] text-[14px] tabular-nums"
                />
              </div>
            </label>
          </div>

          <div className="flex flex-col justify-between border border-neutral-900 bg-black p-6 text-white sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-white/45">
                  Hours saved weekly
                </p>
                <p className="mt-2 font-[family-name:var(--font-geist-mono)] text-[clamp(2rem,4vw,2.75rem)] font-semibold tabular-nums leading-none">
                  {Math.round(results.savedWeekly).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-white/45">
                  Hours saved monthly
                </p>
                <p className="mt-2 font-[family-name:var(--font-geist-mono)] text-[clamp(2rem,4vw,2.75rem)] font-semibold tabular-nums leading-none">
                  {Math.round(results.savedMonthly).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-white/45">
                Full work weeks reclaimed yearly
              </p>
              <p className="mt-2 font-[family-name:var(--font-serif)] text-[clamp(2.2rem,5vw,3.25rem)] leading-[1.05] tracking-[-0.02em]">
                {results.workWeeksReclaimed.toLocaleString(undefined, {
                  maximumFractionDigits: 1,
                })}{" "}
                <span className="text-[0.45em] font-[family-name:var(--font-geist-mono)] uppercase tracking-[0.08em] text-white/55">
                  weeks / year
                </span>
              </p>
              <p className="mt-3 max-w-[42ch] text-[13px] leading-relaxed text-white/50">
                Screenshot-ready for a leadership conversation — based on your
                inputs above.
              </p>
            </div>

            <Link
              href="/contact"
              className="cta-cut mt-8 inline-flex h-11 w-fit items-center justify-center bg-white px-6 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] text-black transition-all hover:bg-white/90"
            >
              See what this looks like for your team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
