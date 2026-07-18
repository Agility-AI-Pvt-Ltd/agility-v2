import Link from "next/link";
import type { ReactNode } from "react";
import OfferingVisual from "@/components/services/OfferingVisual";

type ServiceTrackSectionProps = {
  id: string;
  label: string;
  title: string;
  summary: string;
  extra?: ReactNode;
  includes: readonly string[];
  forWhom: readonly string[];
  doneLooksLike: readonly string[];
  cta?: {
    label: string;
    href: string;
  };
  inverted?: boolean;
  sticky?: boolean;
  zIndex?: number;
  visual?: "enablement" | "integration" | "products";
};

export default function ServiceTrackSection({
  id,
  label,
  title,
  summary,
  extra,
  includes,
  forWhom,
  doneLooksLike,
  cta,
  inverted,
  sticky,
  zIndex = 10,
  visual,
}: ServiceTrackSectionProps) {
  const tone = inverted ? "bg-[#f0f0f0] text-black" : "bg-white text-black";

  return (
    <section
      id={id}
      style={sticky ? { zIndex } : undefined}
      className={[
        tone,
        sticky
          ? "sticky top-0 flex h-svh max-h-svh flex-col overflow-hidden border-b border-neutral-200/80 shadow-[0_-12px_40px_rgba(0,0,0,0.08)]"
          : "",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto flex w-full max-w-[1100px] flex-col",
          sticky
            ? "h-full min-h-0 justify-between gap-4 overflow-y-auto overscroll-contain px-6 py-7 sm:gap-5 sm:px-10 sm:py-9 lg:justify-center lg:gap-6 lg:py-10"
            : "px-6 py-12 sm:px-10 sm:py-16",
        ].join(" ")}
      >
        <div
          className={[
            sticky ? "min-h-0 shrink" : "",
            visual ? "grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_200px] lg:items-start" : "",
          ].join(" ")}
        >
          <div>
            <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-[#3b6ef5]">
              {label}
            </p>
            <h2
              className={[
                "mt-2 font-[family-name:var(--font-serif)] leading-[1.12] tracking-[-0.02em] text-neutral-950",
                sticky
                  ? "text-[clamp(1.5rem,2.8vw,2.15rem)]"
                  : "mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)]",
              ].join(" ")}
            >
              {title}
            </h2>
            <p
              className={[
                "max-w-[58ch] leading-relaxed text-neutral-600",
                sticky
                  ? "mt-2 text-[14px] sm:text-[15px]"
                  : "mt-4 text-[15px] sm:text-[16px]",
              ].join(" ")}
            >
              {summary}
            </p>
            {extra}
          </div>
          {visual && (
            <div className="hidden lg:block">
              <OfferingVisual kind={visual} />
            </div>
          )}
        </div>

        <div
          className={[
            "grid border-t border-neutral-200 md:grid-cols-3",
            sticky
              ? "mt-4 min-h-0 gap-5 pt-4 md:gap-6 md:pt-5"
              : "mt-8 gap-8 pt-8 md:mt-10 md:pt-10",
          ].join(" ")}
        >
          <div>
            <h3 className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
              What&apos;s included
            </h3>
            <ul
              className={[
                "leading-relaxed text-neutral-700",
                sticky
                  ? "mt-2.5 space-y-2 text-[13px]"
                  : "mt-4 space-y-3 text-[14px]",
              ].join(" ")}
            >
              {includes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#3b6ef5]" aria-hidden="true">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
              Who it&apos;s for
            </h3>
            <ul
              className={[
                "leading-relaxed text-neutral-700",
                sticky
                  ? "mt-2.5 space-y-2 text-[13px]"
                  : "mt-4 space-y-3 text-[14px]",
              ].join(" ")}
            >
              {forWhom.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#3b6ef5]" aria-hidden="true">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
              What done looks like
            </h3>
            <ul
              className={[
                "leading-relaxed text-neutral-700",
                sticky
                  ? "mt-2.5 space-y-2 text-[13px]"
                  : "mt-4 space-y-3 text-[14px]",
              ].join(" ")}
            >
              {doneLooksLike.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#3b6ef5]" aria-hidden="true">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {cta && (
          <div
            className={[
              "border-t border-dashed border-neutral-300",
              sticky ? "mt-4 shrink-0 pt-4" : "mt-8 pt-6 md:mt-10 md:pt-8",
            ].join(" ")}
          >
            <Link
              href={cta.href}
              className="cta-cut inline-flex h-10 items-center justify-center bg-black px-5 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] text-white transition-all hover:bg-neutral-800 sm:h-11 sm:px-6"
            >
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
