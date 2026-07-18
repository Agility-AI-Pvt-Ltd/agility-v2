"use client";

import { useState } from "react";
import type { Job } from "@/lib/hrms/types";
import { jobMeta, jobSummary } from "@/lib/hrms/display";
import ApplyForm from "./ApplyForm";

type JobsListProps = {
  jobs: Job[];
  fetchError?: string;
};

export default function JobsList({ jobs, fetchError }: JobsListProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  if (fetchError) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-[14px] text-amber-900">{fetchError}</p>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-center">
        <p className="text-[20px] font-semibold tracking-[-0.02em] text-neutral-900">
          No open roles right now
        </p>
        <p className="mt-3 text-[14px] leading-relaxed text-neutral-500">
          Check back soon — or reach out if you&apos;d like to introduce
          yourself anyway.
        </p>
      </div>
    );
  }

  return (
    <ul className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      {jobs.map((job, index) => {
        const isOpen = activeSlug === job.slug;

        return (
          <li
            key={job.slug}
            className={[
              "p-6 sm:p-7",
              index > 0 ? "border-t border-neutral-200" : "",
            ].join(" ")}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-2xl">
                <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-neutral-950">
                  {job.title}
                </h3>
                <p className="mt-1.5 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.12em] text-neutral-400">
                  {jobMeta(job)}
                </p>
                <p className="mt-3 whitespace-pre-line text-[14px] leading-relaxed text-neutral-600">
                  {jobSummary(job)}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveSlug(isOpen ? null : job.slug)}
                className={[
                  "inline-flex h-11 shrink-0 items-center justify-center rounded-full px-6 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.08em] transition-all active:scale-[0.98]",
                  isOpen
                    ? "border border-neutral-300 bg-white text-neutral-800 hover:border-neutral-400"
                    : "bg-[#222] text-white hover:bg-black",
                ].join(" ")}
              >
                {isOpen ? "Close" : "Apply"}
              </button>
            </div>

            {isOpen && (
              <ApplyForm
                slug={job.slug}
                jobTitle={job.title}
                onCancel={() => setActiveSlug(null)}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}
