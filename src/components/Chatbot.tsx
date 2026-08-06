"use client";

import { useEffect, useId, useState } from "react";
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

export default function Chatbot() {
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      from: "bot",
      text: "Hi — how can we help? The fastest path is usually a short call.",
    },
  ]);

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
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function chooseBookCall() {
    setMessages((prev) => [
      ...prev,
      { id: `u-${Date.now()}`, from: "user", text: "Book a call" },
      {
        id: `b-${Date.now()}`,
        from: "bot",
        text: "Fill in a few details — we’ll confirm a time by email.",
      },
    ]);
    setOpen(false);
    openBookCall();
  }

  function chooseMessage() {
    setMessages((prev) => [
      ...prev,
      { id: `u-${Date.now()}`, from: "user", text: "Send a message" },
      {
        id: `b-${Date.now()}`,
        from: "bot",
        text: "Jump to the contact form below and share a short brief — we’ll reply shortly.",
      },
    ]);
    setOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="cta-cut fixed bottom-5 right-5 z-50 inline-flex h-11 items-center justify-center bg-white px-4 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.08em] text-black shadow-lg transition-all hover:bg-neutral-100 sm:bottom-6 sm:right-6"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        Talk to us
      </button>

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
                    "max-w-[90%] px-3 py-2 text-[13px] leading-relaxed",
                    message.from === "bot"
                      ? "self-start border border-neutral-200 bg-white text-neutral-800"
                      : "self-end bg-black text-white",
                  ].join(" ")}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <div className="border-t border-neutral-200 bg-white p-3">
              <p className="mb-2 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                Choose an option
              </p>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={chooseBookCall}
                  className="cta-cut inline-flex h-10 items-center justify-center bg-black px-4 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.08em] text-white transition-colors hover:bg-neutral-800"
                >
                  Book a call
                </button>
                <button
                  type="button"
                  onClick={chooseMessage}
                  className="inline-flex h-10 items-center justify-center border border-neutral-300 px-4 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.08em] text-neutral-700 transition-colors hover:border-neutral-500 hover:text-neutral-950"
                >
                  Send a message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
