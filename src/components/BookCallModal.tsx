"use client";

import { useEffect, type ReactNode } from "react";
import { BOOK_CALL_WHATSAPP_URL } from "@/lib/company";
import { openBookCall } from "@/lib/book-call/open-book-call";

type BookCallButtonProps = {
  children: ReactNode;
  className?: string;
};

export function BookCallButton({ children, className }: BookCallButtonProps) {
  return (
    <a
      href={BOOK_CALL_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

/** Handles `#book-call` deep links by opening WhatsApp. */
export default function BookCallHashHandler() {
  useEffect(() => {
    const runIfHash = () => {
      if (window.location.hash !== "#book-call") return;
      openBookCall();
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    };

    runIfHash();
    window.addEventListener("hashchange", runIfHash);
    return () => window.removeEventListener("hashchange", runIfHash);
  }, []);

  return null;
}
