"use client";

import { useEffect, useId, useState } from "react";
import type { TestimonialVideo } from "@/components/testimonials/TestimonialVideoGrid";

function PhotoLightbox({
  photo,
  onClose,
}: {
  photo: TestimonialVideo;
  onClose: () => void;
}) {
  const titleId = useId();
  const src = photo.imageUrl || photo.thumbnailUrl;

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

  if (!src) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8">
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        aria-label="Close photo"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[min(92vh,960px)] flex-col bg-black shadow-2xl"
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 text-white">
          <p
            id={titleId}
            className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.14em]"
          >
            {photo.name ?? "Testimonial photo"}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.1em] text-white/70 transition-colors hover:text-white"
          >
            Close
          </button>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={photo.caption ?? photo.name ?? "Testimonial photo"}
          className="max-h-[min(82vh,900px)] w-auto max-w-[min(100vw-2rem,1100px)] object-contain"
        />
      </div>
    </div>
  );
}

function MarqueeRow({
  photos,
  direction,
  duration,
  onOpen,
  startIndex,
}: {
  photos: readonly TestimonialVideo[];
  direction: "rtl" | "ltr";
  duration: string;
  onOpen: (photo: TestimonialVideo) => void;
  startIndex: number;
}) {
  const loop =
    photos.length === 0
      ? []
      : [...photos, ...photos, ...photos, ...photos];

  if (loop.length === 0) return null;

  return (
    <div className="testimonial-photo-marquee relative overflow-hidden">
      <div
        className={[
          "flex w-max gap-4 sm:gap-5",
          direction === "rtl"
            ? "testimonial-photo-marquee-rtl"
            : "testimonial-photo-marquee-ltr",
        ].join(" ")}
        style={{ animationDuration: duration }}
      >
        {loop.map((photo, index) => {
          const src = photo.imageUrl || photo.thumbnailUrl;
          if (!src) return null;
          return (
            <button
              key={`${photo.id}-${index}`}
              type="button"
              onClick={() => onOpen(photo)}
              className="relative h-52 w-[22rem] shrink-0 overflow-hidden rounded-2xl bg-neutral-200 sm:h-64 sm:w-[28rem] lg:h-72 lg:w-[32rem]"
              aria-label={`View photo ${startIndex + (index % photos.length) + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function splitIntoThree(photos: readonly TestimonialVideo[]) {
  const rows: TestimonialVideo[][] = [[], [], []];
  photos.forEach((photo, index) => {
    rows[index % 3].push(photo);
  });

  // Keep marquees full even for small sets by borrowing from the full list.
  return rows.map((row) => (row.length > 0 ? row : [...photos]));
}

export default function TestimonialPhotoMarquee({
  photos,
  label,
}: {
  photos: readonly TestimonialVideo[];
  label: string;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = photos.find((photo) => photo.id === activeId) ?? null;
  const rows = splitIntoThree(photos);
  const durations = ["42s", "50s", "46s"] as const;
  const directions = ["rtl", "ltr", "rtl"] as const;

  if (photos.length === 0) return null;

  const single = photos.length === 1 ? photos[0] : null;
  const singleSrc = single
    ? single.imageUrl || single.thumbnailUrl
    : null;

  return (
    <div className="w-full">
      <div className="mx-auto mb-5 flex max-w-[1100px] items-center gap-3 px-6 sm:px-10">
        <span className="h-[3px] w-8 bg-black" aria-hidden="true" />
        <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
          {label}
        </p>
      </div>

      {single && singleSrc ? (
        <div className="mx-auto max-w-[1100px] px-6 sm:px-10">
          <button
            type="button"
            onClick={() => setActiveId(single.id)}
            className="relative aspect-[16/10] w-full max-w-[42rem] overflow-hidden rounded-2xl bg-neutral-200"
            aria-label={`View ${label} photo`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={singleSrc}
              alt=""
              className="h-full w-full object-cover"
            />
          </button>
        </div>
      ) : (
        <div className="relative space-y-4 sm:space-y-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-16"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-16"
          />

          {rows.map((row, index) => (
            <MarqueeRow
              key={`${label}-row-${index}`}
              photos={row}
              direction={directions[index]}
              duration={durations[index]}
              onOpen={(photo) => setActiveId(photo.id)}
              startIndex={index}
            />
          ))}
        </div>
      )}

      {active ? (
        <PhotoLightbox photo={active} onClose={() => setActiveId(null)} />
      ) : null}
    </div>
  );
}
