import type { Job } from "./types";

export function jobMeta(job: Job): string {
  const parts = [
    job.employmentType ?? job.type,
    job.location,
    job.department,
  ].filter(Boolean);

  return parts.join(" · ") || "Open role";
}

export function jobSummary(job: Job): string {
  return (
    job.summary ??
    job.description ??
    "Apply below to join Agility AI."
  );
}
