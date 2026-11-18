"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import type { AppreciationLetter } from "@/lib/testimonials";

function LetterDialog({
  letter,
  onClose,
}: {
  letter: AppreciationLetter;
  onClose: () => void;
}) {
  const titleId = useId();

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8">
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        aria-label="Close appreciation letter"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[min(94vh,980px)] w-full max-w-[860px] flex-col overflow-hidden bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between gap-4 border-b border-neutral-200 px-4 py-3">
          <div className="min-w-0">
            <p
              id={titleId}
              className="truncate font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-900"
            >
              {letter.organization}
            </p>
            <p className="mt-0.5 truncate text-[13px] text-neutral-500">
              {letter.title}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <a
              href={letter.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.1em] text-neutral-500 transition-colors hover:text-neutral-900"
            >
              Open PDF
            </a>
            <button
              type="button"
              onClick={onClose}
              className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.1em] text-neutral-500 transition-colors hover:text-neutral-900"
            >
              Close
            </button>
          </div>
        </div>

        <iframe
          src={`${letter.pdfUrl}#toolbar=0&navpanes=0`}
          title={`${letter.title} — ${letter.organization}`}
          className="h-[min(78vh,860px)] w-full bg-neutral-100"
        />
      </div>
    </div>
  );
}

export default function AppreciationLetters({
  letters,
}: {
  letters: readonly AppreciationLetter[];
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = letters.find((letter) => letter.id === activeId) ?? null;

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        {letters.map((letter) => (
          <li key={letter.id}>
            <button
              type="button"
              onClick={() => setActiveId(letter.id)}
              className="group flex h-full w-full flex-col border border-neutral-200 bg-white text-left transition-colors hover:border-neutral-900"
              aria-label={`Preview appreciation letter from ${letter.organization}`}
            >
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-neutral-50">
                <Image
                  src={letter.logoSrc}
                  alt=""
                  width={220}
                  height={120}
                  className="h-16 w-auto max-w-[70%] object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-20"
                />
                <span className="absolute bottom-3 right-3 bg-neutral-900 px-2.5 py-1 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-white">
                  View letter
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 border-t border-neutral-200 px-4 py-4">
                <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-[#3b6ef5]">
                  Appreciation letter
                </p>
                <p className="font-[family-name:var(--font-serif)] text-[1.15rem] leading-snug tracking-[-0.02em] text-neutral-950">
                  {letter.organization}
                </p>
                <p className="text-[13px] leading-relaxed text-neutral-500">
                  {letter.location
                    ? `${letter.title} · ${letter.location}`
                    : letter.title}
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <LetterDialog letter={active} onClose={() => setActiveId(null)} />
      ) : null}
    </>
  );
}
