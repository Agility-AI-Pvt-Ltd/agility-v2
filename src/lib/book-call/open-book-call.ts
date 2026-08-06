"use client";

export const OPEN_BOOK_CALL_EVENT = "agility:open-book-call";

export function openBookCall() {
  window.dispatchEvent(new CustomEvent(OPEN_BOOK_CALL_EVENT));
}
