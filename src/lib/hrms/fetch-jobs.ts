import { getHrmsConfig, hrmsAuthHeaders } from "./config";
import type { Job, JobsResponse } from "./types";

export async function fetchJobs(): Promise<{
  jobs: Job[];
  error?: string;
}> {
  const config = getHrmsConfig();

  if (!config) {
    return {
      jobs: [],
      error: "Careers API is not configured. Set HRMS_API_URL and CAREERS_API_KEY.",
    };
  }

  try {
    const res = await fetch(`${config.baseUrl}/api/public/jobs`, {
      headers: hrmsAuthHeaders(config.apiKey),
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return {
        jobs: [],
        error: `Unable to load open roles (${res.status}).`,
      };
    }

    const data = (await res.json()) as JobsResponse;
    return { jobs: data.jobs ?? [] };
  } catch {
    return {
      jobs: [],
      error: "Unable to reach the careers service. Please try again later.",
    };
  }
}
