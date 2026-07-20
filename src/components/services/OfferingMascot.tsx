"use client";

import { openChatbot } from "@/components/Chatbot";

export type MascotPlacement =
  | "top-right"
  | "top-left"
  | "mid-right"
  | "bottom-left";

type OfferingMascotProps = {
  message: string;
  placement: MascotPlacement;
  compact?: boolean;
};

const PLACEMENT_CLASS: Record<MascotPlacement, string> = {
  "top-right": "right-2 top-[-5.25rem] lg:right-6",
  "top-left": "left-2 top-[-5.25rem] lg:left-6",
  "mid-right": "right-[-1.5rem] top-1/2 -translate-y-1/2 lg:right-[-2.5rem]",
  "bottom-left": "left-4 bottom-[-4.5rem] lg:left-8",
};

const BUBBLE_ALIGN: Record<MascotPlacement, string> = {
  "top-right": "ml-auto mr-4",
  "top-left": "mr-auto ml-2",
  "mid-right": "ml-auto mr-0 max-w-[11rem]",
  "bottom-left": "mr-auto ml-2",
};

export default function OfferingMascot({
  message,
  placement,
  compact = false,
}: OfferingMascotProps) {
  const sizeClass = compact ? "h-[96px] w-[88px]" : "h-[118px] w-[108px]";

  return (
    <div
      className={[
        "services-offerings-robot pointer-events-none absolute z-20 hidden lg:block",
        PLACEMENT_CLASS[placement],
      ].join(" ")}
    >
      <div
        className={[
          "services-offerings-bubble relative mb-2 w-fit max-w-[14rem] rounded-2xl border border-white/70 bg-white px-3.5 py-2 text-[13px] font-medium leading-snug text-neutral-800 shadow-[0_10px_30px_rgba(15,23,42,0.08)]",
          BUBBLE_ALIGN[placement],
          placement === "mid-right" ? "absolute right-full top-[-0.5rem] mr-3" : "",
        ].join(" ")}
      >
        {message}
        <span
          className={[
            "absolute size-3 rotate-45 border-b border-r border-white/70 bg-white",
            placement === "top-right" ? "-bottom-2 right-8" : "",
            placement === "top-left" ? "-bottom-2 left-8" : "",
            placement === "mid-right" ? "top-1/2 -right-[0.35rem] -translate-y-1/2 border-b-0 border-r border-t border-l-0" : "",
            placement === "bottom-left" ? "-top-2 left-10 border-b-0 border-t border-r border-l-0" : "",
          ].join(" ")}
          aria-hidden="true"
        />
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          openChatbot();
        }}
        className={[
          "services-offerings-robot-body pointer-events-auto block",
          placement === "top-right" || placement === "mid-right" ? "ml-auto" : "",
          placement === "top-left" || placement === "bottom-left" ? "mr-auto" : "",
        ].join(" ")}
        aria-label="Open chat"
      >
        <svg viewBox="0 0 120 130" className={sizeClass} aria-hidden="true">
          <ellipse cx="60" cy="118" rx="34" ry="8" fill="rgba(15,23,42,0.08)" />
          <rect x="28" y="42" width="64" height="72" rx="22" fill="#fff" stroke="#e5e7eb" />
          <rect x="38" y="54" width="44" height="34" rx="10" fill="#111827" />
          <circle cx="50" cy="68" r="4" fill="#60a5fa" className="services-offerings-eye" />
          <circle cx="70" cy="68" r="4" fill="#60a5fa" className="services-offerings-eye" />
          <path
            d="M48 78q12 8 24 0"
            stroke="#60a5fa"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <rect x="18" y="72" width="16" height="28" rx="8" fill="#fff" stroke="#e5e7eb" />
          <rect x="86" y="72" width="16" height="28" rx="8" fill="#fff" stroke="#e5e7eb" />
          <circle cx="26" cy="98" r="7" fill="#111827" />
          <circle cx="94" cy="98" r="7" fill="#111827" />
          <rect x="46" y="28" width="28" height="18" rx="9" fill="#fff" stroke="#e5e7eb" />
          <circle cx="60" cy="18" r="5" fill="#93c5fd" />
        </svg>
      </button>
    </div>
  );
}
