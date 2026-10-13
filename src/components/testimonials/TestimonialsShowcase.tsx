"use client";

import { useMemo, useState } from "react";
import TestimonialVideoGrid from "@/components/testimonials/TestimonialVideoGrid";
import TextTestimonials from "@/components/testimonials/TextTestimonials";
import {
  MAIN_FILTERS,
  WORKSHOP_MEDIA_FILTERS,
  getFuturexVideos,
  getWorkshopImages,
  getWorkshopVideos,
  type MainFilterId,
  type WorkshopMediaId,
} from "@/lib/testimonials";

type TestimonialsShowcaseProps = {
  /** Limit cards on compact surfaces such as the homepage. */
  limit?: number;
  className?: string;
};

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={[
        "inline-flex h-10 items-center justify-center rounded-full px-4 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] transition-colors",
        active
          ? "bg-neutral-900 text-white"
          : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

export default function TestimonialsShowcase({
  limit,
  className = "",
}: TestimonialsShowcaseProps) {
  const [mainFilter, setMainFilter] = useState<MainFilterId>("futurex");
  const [workshopMedia, setWorkshopMedia] = useState<WorkshopMediaId>("video");

  const items = useMemo(() => {
    const list =
      mainFilter === "futurex"
        ? getFuturexVideos()
        : workshopMedia === "video"
          ? getWorkshopVideos()
          : getWorkshopImages();

    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [mainFilter, workshopMedia, limit]);

  const showWorkshopQuotes =
    mainFilter === "workshops" && workshopMedia === "video";

  return (
    <section
      id="testimonial"
      aria-labelledby="testimonials-heading"
      className={["border-b border-neutral-200 bg-white text-black", className].join(
        " ",
      )}
    >
      <div className="mx-auto max-w-[1100px] px-6 py-14 sm:px-10 sm:py-16 md:py-20">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-[3px] w-8 bg-black" aria-hidden="true" />
          <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
            Testimonials
          </p>
        </div>

        <h2
          id="testimonials-heading"
          className="max-w-[18ch] font-[family-name:var(--font-serif)] text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-neutral-950"
        >
          Real people. Real{" "}
          <span className="relative inline-block text-[#3b2f8f]">
            outcomes.
            <svg
              viewBox="0 0 220 18"
              className="pointer-events-none absolute -bottom-1 left-0 h-[0.55em] w-full text-[#c4b5fd]"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <path
                d="M2 11c38-6 72-9 108-7 36 2 72 8 108 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-neutral-500 sm:text-[16px] sm:leading-[1.7]">
          From students and founders to institutional partners, hear how Agility
          AI is creating real impact in learning, business, and public sector
          efforts.
        </p>

        <div
          role="tablist"
          aria-label="Filter testimonials"
          className="mt-8 flex flex-wrap gap-2"
        >
          {MAIN_FILTERS.map((item) => (
            <FilterPill
              key={item.id}
              label={item.label}
              active={mainFilter === item.id}
              onClick={() => {
                setMainFilter(item.id);
                if (item.id === "workshops") setWorkshopMedia("video");
              }}
            />
          ))}
        </div>

        {mainFilter === "workshops" && (
          <div
            role="tablist"
            aria-label="Workshop media type"
            className="mt-3 flex flex-wrap gap-2"
          >
            {WORKSHOP_MEDIA_FILTERS.map((item) => (
              <FilterPill
                key={item.id}
                label={item.label}
                active={workshopMedia === item.id}
                onClick={() => setWorkshopMedia(item.id)}
              />
            ))}
          </div>
        )}

        {showWorkshopQuotes && (
          <div className="mt-10">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-[3px] w-8 bg-black" aria-hidden="true" />
              <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                In their words
              </p>
            </div>
            <TextTestimonials />
          </div>
        )}

        <div className={showWorkshopQuotes ? "mt-12" : "mt-10"}>
          {items.length > 0 ? (
            <TestimonialVideoGrid videos={items} />
          ) : (
            <p className="rounded-lg border border-dashed border-neutral-300 bg-neutral-50 px-5 py-10 text-center text-[14px] text-neutral-500">
              Media for this category is being prepared.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
