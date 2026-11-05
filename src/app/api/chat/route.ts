import { isGroqConfigured, isOpenRouterConfigured } from "@/lib/chatbot/config";
import { getChatReply, type ChatTurn } from "@/lib/chatbot/reply";
import { NextResponse } from "next/server";

const MAX_MESSAGES = 20;
const MAX_CONTENT_LENGTH = 1000;

function isValidTurn(value: unknown): value is ChatTurn {
  if (!value || typeof value !== "object") return false;
  const turn = value as Record<string, unknown>;
  return (
    (turn.role === "user" || turn.role === "assistant") &&
    typeof turn.content === "string" &&
    turn.content.trim().length > 0 &&
    turn.content.length <= MAX_CONTENT_LENGTH
  );
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { messages } = body as { messages?: unknown };

  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "Messages are required." }, { status: 400 });
  }

  if (messages.length > MAX_MESSAGES) {
    return NextResponse.json({ error: "Too many messages." }, { status: 400 });
  }

  if (!messages.every(isValidTurn)) {
    return NextResponse.json({ error: "Invalid message format." }, { status: 400 });
  }

  if (!isOpenRouterConfigured() && !isGroqConfigured() && process.env.NODE_ENV === "development") {
    console.warn(
      "[chat] Neither OPENROUTER_API_KEY nor GROQ_API_KEY is configured. Using local deterministic fallback.",
    );
  }

  const result = await getChatReply(messages);

  return NextResponse.json(result);
}
