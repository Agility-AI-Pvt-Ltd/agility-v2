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
};

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";
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
      "demo",
    ])
  ) {
    return "book_call";
  }

  if (
    includesAny(query, [
      "contact",
      "email you",
      "send a message",
      "reach out",
      "get in touch",
      "hello@agilityai",
      "contact form",
    ])
  ) {
    return "contact";
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
  const apiKey = process.env.GROQ_API_KEY?.trim();
  if (!apiKey) return null;

  try {
    const res = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        temperature: 0.4,
        max_tokens: 600,
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
    return "Hi — ask me about our services, team, careers, industries, the AI maturity check, or how to get in touch.";
  }

  const query = normalize(lastUser.content);

  const faqMatch = FAQ_ITEMS.find((item) => {
    const question = normalize(item.question);
    return tokenize(lastUser.content).some((word) => question.includes(word));
  });
  if (faqMatch) return faqMatch.answer;

  const snippet = extractKnowledgeSnippet(lastUser.content);
  if (snippet) {
    const lines = snippet
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("##") && !line.startsWith("###"));

    const summary = lines.slice(0, 4).join(" ");
    if (summary) {
      return `${summary} Visit the relevant page on agilityai.in or say "book a call" for more detail.`;
    }
  }

  if (scoreKnowledgeMatch(lastUser.content) > 0) {
    return "I can help with that — try asking about enablement, integration, products, team, careers, industries, or the AI maturity check. Or say \"book a call\" to speak with the team.";
  }

  return "I'm not sure I have a precise answer for that. Say \"book a call\", visit /contact, or ask about our services, team, or careers.";
}

export async function getChatReply(messages: ChatTurn[]): Promise<ChatReply> {
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const action = lastUser ? detectAction(normalize(lastUser.content)) : undefined;

  const reply = sanitizeReply(
    (await getGroqReply(messages)) ?? getFallbackReply(messages),
  );

  return action ? { reply, action } : { reply };
}
