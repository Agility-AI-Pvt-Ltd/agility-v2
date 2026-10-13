export type GroqConfig = {
  apiKey: string;
  model: string;
};

/** Groq retired llama-3.3-70b-versatile for free/dev tiers (Aug 2026). */
const DEFAULT_MODEL = "openai/gpt-oss-120b";

export function getGroqConfig(): GroqConfig | null {
  const apiKey = process.env.GROQ_API_KEY?.trim();
  if (!apiKey) {
    return null;
  }

  const model = process.env.GROQ_MODEL?.trim() || DEFAULT_MODEL;

  return { apiKey, model };
}

export function isGroqConfigured(): boolean {
  return getGroqConfig() !== null;
}
