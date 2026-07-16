function normalizeEnv(value: string | undefined) {
  if (!value) return undefined;
  return value.replace(/^["']|["']$/g, "").trim();
}

export function getHrmsConfig() {
  const baseUrl = normalizeEnv(process.env.HRMS_API_URL)?.replace(/\/$/, "");
  const apiKey = normalizeEnv(process.env.CAREERS_API_KEY);

  if (!baseUrl || !apiKey) {
    return null;
  }

  return { baseUrl, apiKey };
}

export function hrmsAuthHeaders(apiKey: string): HeadersInit {
  return { Authorization: `Bearer ${apiKey}` };
}
