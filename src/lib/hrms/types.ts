export type Job = {
  slug: string;
  title: string;
  description?: string | null;
  summary?: string | null;
  location?: string | null;
  employmentType?: string | null;
  type?: string | null;
  department?: string | null;
};

export type JobsResponse = {
  jobs: Job[];
};
