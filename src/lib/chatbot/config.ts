export type OpenRouterConfig = {
  apiKey: string;
  jevModel: string;
  synthesisModel: string;
  decisionsUrl: string;
  chatUrl: string;
};

export type GroqConfig = {
  apiKey: string;
  model: string;
};

const DEFAULT_JEV_MODEL = "typesafe/jev-1.14";
const DEFAULT_OPENROUTER_SYNTHESIS_MODEL = "meta-llama/llama-3.3-70b-instruct";
const DEFAULT_GROQ_MODEL = "openai/gpt-oss-120b";

export function getOpenRouterConfig(): OpenRouterConfig | null {
  const apiKey = process.env.OPENROUTER_API_KEY?.trim();
  if (!apiKey) return null;

  return {
    apiKey,
    jevModel: process.env.JEV_MODEL?.trim() || DEFAULT_JEV_MODEL,
    synthesisModel:
      process.env.OPENROUTER_SYNTHESIS_MODEL?.trim() ||
      DEFAULT_OPENROUTER_SYNTHESIS_MODEL,
    decisionsUrl: "https://openrouter.ai/api/alpha/decisions",
    chatUrl: "https://openrouter.ai/api/v1/chat/completions",
  };
}

export function isOpenRouterConfigured(): boolean {
  return getOpenRouterConfig() !== null;
}

export function getGroqConfig(): GroqConfig | null {
  const apiKey = process.env.GROQ_API_KEY?.trim();
  if (!apiKey) return null;

  const model = process.env.GROQ_MODEL?.trim() || DEFAULT_GROQ_MODEL;
  return { apiKey, model };
}

export function isGroqConfigured(): boolean {
  return getGroqConfig() !== null;
}

