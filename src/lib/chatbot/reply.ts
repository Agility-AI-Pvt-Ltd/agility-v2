import { getGroqConfig } from "@/lib/chatbot/config";
import { buildChatSystemPrompt, buildSiteKnowledgeBase } from "@/lib/chatbot/knowledge";
import { FAQ_ITEMS } from "@/lib/faq";

export type ChatTurn = {
  role: "user" | "assistant";
  content: string;
};

export type ChatAction = "book_call" | "contact";

export type ChatReply = {
  reply: string;
  action?: ChatAction;
  source?: "groq" | "fallback";
};

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const SITE_KNOWLEDGE = buildSiteKnowledgeBase();

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text: string) {
  const stop = new Set([
    "a",
    "an",
    "the",
    "is",
    "are",
    "was",
    "were",
    "be",
    "been",
    "being",
    "have",
    "has",
    "had",
    "do",
    "does",
    "did",
    "will",
    "would",
    "could",
    "should",
    "may",
    "might",
    "must",
    "can",
    "need",
    "to",
    "of",
    "in",
    "for",
    "on",
    "with",
    "at",
    "by",
    "from",
    "as",
    "what",
    "which",
    "who",
    "how",
    "when",
    "where",
    "why",
    "about",
    "your",
    "you",
    "our",
    "tell",
    "know",
    "get",
  ]);

  return normalize(text)
    .split(" ")
    .filter((word) => word.length > 2 && !stop.has(word));
}

function includesAny(text: string, phrases: string[]) {
  return phrases.some((phrase) => text.includes(phrase));
}

function sanitizeReply(text: string) {
  return text
    .replace(/(\d+\.\s)/g, "\n$1")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/^[\s>*-]+/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/^\n+/, "")
    .replace(/\s+\n/g, "\n")
    .trim();
}

function detectAction(query: string): ChatAction | undefined {
  if (
    includesAny(query, [
      "book a call",
      "book call",
      "schedule a call",
      "schedule call",
      "set up a call",
      "book a meeting",
      "schedule a meeting",
      "talk to someone",
      "speak to someone",
      "speak with someone",
      "talk with someone",
      "demo",
      "how much",
      "pricing",
      "price",
      "cost",
      "quote",
      "proposal",
      "start a project",
      "hire you",
      "work with you",
      "engagement",
    ])
  ) {
    return "book_call";
  }

  if (
    includesAny(query, [
      "contact page",
      "contact details",
      "email address",
      "phone number",
      "your email",
      "your phone",
      "reach you",
      "get in touch",
      "organization@agilityai.in",
      "organization@agilityai",
      "7042149608",
      "bhawna",
    ])
  ) {
    return "contact";
  }

  if (
    includesAny(query, [
      "contact",
      "email you",
      "reach out",
    ])
  ) {
    return "book_call";
  }

  return undefined;
}

function scoreKnowledgeMatch(query: string) {
  const tokens = tokenize(query);
  if (tokens.length === 0) return 0;

  const haystack = normalize(SITE_KNOWLEDGE);
  let hits = 0;

  for (const token of tokens) {
    if (haystack.includes(token)) hits += 1;
  }

  return hits / tokens.length;
}

function extractKnowledgeSnippet(query: string) {
  const tokens = tokenize(query);
  if (tokens.length === 0) return null;

  const sections = SITE_KNOWLEDGE.split(/\n(?=## )/);
  let best: { text: string; score: number } | null = null;

  for (const section of sections) {
    const normalizedSection = normalize(section);
    let hits = 0;

    for (const token of tokens) {
      if (normalizedSection.includes(token)) hits += 1;
    }

    const score = hits / tokens.length;
    if (!best || score > best.score) {
      best = { text: section.trim(), score };
    }
  }

  return best && best.score >= 0.25 ? best.text : null;
}

async function getGroqReply(messages: ChatTurn[]): Promise<string | null> {
  const config = getGroqConfig();
  if (!config) return null;

  try {
    const res = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: config.model,
        temperature: 0.35,
        max_tokens: 700,
        messages: [
          { role: "system", content: buildChatSystemPrompt() },
          ...messages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        ],
      }),
    });

    if (!res.ok) {
      if (process.env.NODE_ENV === "development") {
        const errorBody = await res.text();
        console.error("[chat] Groq error:", res.status, errorBody);
      }
      return null;
    }

    const data = (await res.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    const content = data.choices?.[0]?.message?.content?.trim();
    return content ? sanitizeReply(content) : null;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[chat] Groq request failed:", error);
    }
    return null;
  }
}

function getFallbackReply(messages: ChatTurn[]): string {
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  if (!lastUser) {
    return "Hi — ask me about services, team, careers, industries, products, the AI maturity check, or how to get in touch.\n\nWhen you're ready, use Book a call below to message Bhawna on WhatsApp, or visit /contact for email and phone.";
  }

  const query = normalize(lastUser.content);
  const cta =
    "\n\nNext step: tap Book a call in this chat to message Bhawna on WhatsApp, or visit /contact (organization@agilityai.in · 7042149608).";

  const faqMatch = FAQ_ITEMS.find((item) => {
    const question = normalize(item.question);
    return tokenize(lastUser.content).some((word) => question.includes(word));
  });
  if (faqMatch) return faqMatch.answer + cta;

  const snippet = extractKnowledgeSnippet(lastUser.content);
  if (snippet) {
    const lines = snippet
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("##") && !line.startsWith("###"));

    const summary = lines.slice(0, 4).join(" ");
    if (summary) {
      return `${summary}\n\nSee the matching page on the site, or book a call for a tailored answer.${cta}`;
    }
  }

  if (scoreKnowledgeMatch(lastUser.content) > 0) {
    return (
      "I can help with enablement, integration, products, team, careers, industries, or the AI maturity check." +
      cta
    );
  }

  return (
    "I'm not sure I have a precise answer for that on the site." +
    cta
  );
}

export async function getChatReply(messages: ChatTurn[]): Promise<ChatReply> {
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const action = lastUser ? detectAction(normalize(lastUser.content)) : undefined;

  const groqReply = await getGroqReply(messages);
  const source = groqReply ? ("groq" as const) : ("fallback" as const);
  const reply = sanitizeReply(groqReply ?? getFallbackReply(messages));

  return action ? { reply, action, source } : { reply, source };
}
