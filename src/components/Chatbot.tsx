"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { openBookCall } from "@/lib/book-call/open-book-call";

export const OPEN_CHAT_EVENT = "agility:open-chat";

export function openChatbot() {
  window.dispatchEvent(new CustomEvent(OPEN_CHAT_EVENT));
}

type Message = {
  id: string;
  from: "bot" | "user";
  text: string;
};

const WELCOME: Message = {
  id: "welcome",
  from: "bot",
  text: "Hi — I know this site inside out: services, team, careers, industries, products, and the AI maturity check.\n\nAsk anything. When you want a human next step, use Book a call or Contact below.",
};

export default function Chatbot() {
  const titleId = useId();
  const inputId = useId();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_CHAT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CHAT_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKey);
    inputRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  function toApiMessages(nextMessages: Message[]) {
    return nextMessages.map((message) => ({
      role: message.from === "user" ? ("user" as const) : ("assistant" as const),
      content: message.text,
    }));
  }

  function handleAction(action?: "book_call" | "contact") {
    if (action === "book_call") {
      setOpen(false);
      openBookCall();
      return;
    }
    if (action === "contact") {
      setOpen(false);
      window.location.href = "/contact";
    }
  }

  async function sendText(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMessage: Message = {
      id: `u-${Date.now()}`,
      from: "user",
      text: trimmed,
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: toApiMessages(nextMessages) }),
      });

      const body = (await res.json()) as {
        reply?: string;
        action?: "book_call" | "contact";
        error?: string;
      };

      if (!res.ok) {
        throw new Error(body.error ?? "Request failed");
      }

      const botMessage: Message = {
        id: `b-${Date.now()}`,
        from: "bot",
        text: body.reply ?? "Sorry — I couldn't reply just then. Try again in a moment.",
      };

      setMessages((prev) => [...prev, botMessage]);
      handleAction(body.action);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `b-${Date.now()}`,
          from: "bot",
          text: "Something went wrong on my end. Try again, or use Book a call below.",
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendText(input);
  }

  function chooseBookCall() {
    setOpen(false);
    openBookCall();
  }

  function chooseContact() {
    setOpen(false);
    window.location.href = "/contact";
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="cta-cut fixed bottom-5 right-5 z-50 inline-flex h-11 items-center justify-center bg-white px-4 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.08em] text-black shadow-lg transition-all hover:bg-neutral-100 sm:bottom-6 sm:right-6"
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          Talk to us
        </button>
      )}

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6"
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/45"
            aria-label="Close chatbot"
            onClick={() => setOpen(false)}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 flex w-full max-w-[380px] flex-col overflow-hidden border border-neutral-200 bg-[#fafafa] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-neutral-200 bg-black px-4 py-3 text-white">
              <div>
                <p
                  id={titleId}
                  className="font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.12em]"
                >
                  Agility AI
                </p>
                <p className="mt-0.5 text-[12px] text-white/55">
                  Usually replies instantly
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.1em] text-white/70 transition-colors hover:text-white"
              >
                Close
              </button>
            </div>

            <div
              data-lenis-prevent
              className="flex max-h-[min(52vh,420px)] flex-col gap-3 overflow-y-auto px-4 py-4"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={[
                    "max-w-[90%] whitespace-pre-line px-3 py-2 text-[13px] leading-relaxed",
                    message.from === "bot"
                      ? "self-start border border-neutral-200 bg-white text-neutral-800"
                      : "self-end bg-black text-white",
                  ].join(" ")}
                >
                  {message.text}
                </div>
              ))}

              {loading && (
                <div className="self-start border border-neutral-200 bg-white px-3 py-2 text-[13px] text-neutral-500">
                  <span className="inline-flex gap-1">
                    <span className="animate-pulse">•</span>
                    <span className="animate-pulse [animation-delay:120ms]">•</span>
                    <span className="animate-pulse [animation-delay:240ms]">•</span>
                  </span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-neutral-200 bg-white p-3">
              <div className="mb-2 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={chooseBookCall}
                  disabled={loading}
                  className="cta-cut inline-flex h-8 items-center justify-center bg-black px-3 font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.08em] text-white transition-colors hover:bg-neutral-800 disabled:opacity-50"
                >
                  Book a call
                </button>
                <button
                  type="button"
                  onClick={chooseContact}
                  disabled={loading}
                  className="inline-flex h-8 items-center justify-center border border-neutral-300 px-3 font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.08em] text-neutral-700 transition-colors hover:border-neutral-500 hover:text-neutral-950 disabled:opacity-50"
                >
                  Contact
                </button>
              </div>

              <form onSubmit={onSubmit} className="flex gap-2">
                <label htmlFor={inputId} className="sr-only">
                  Message
                </label>
                <input
                  ref={inputRef}
                  id={inputId}
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask anything…"
                  disabled={loading}
                  autoComplete="off"
                  className="min-w-0 flex-1 border border-neutral-300 bg-white px-3 py-2 text-[13px] text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-500 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="cta-cut inline-flex shrink-0 items-center justify-center bg-black px-4 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.08em] text-white transition-colors hover:bg-neutral-800 disabled:opacity-50"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
