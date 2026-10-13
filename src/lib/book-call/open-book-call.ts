"use client";

import { BOOK_CALL_WHATSAPP_URL } from "@/lib/company";

export function openBookCall() {
  if (typeof window === "undefined") return;
  window.open(BOOK_CALL_WHATSAPP_URL, "_blank", "noopener,noreferrer");
}
