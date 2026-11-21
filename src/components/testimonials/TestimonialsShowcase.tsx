"use client";

import { useMemo, useState } from "react";
import AppreciationLetters from "@/components/testimonials/AppreciationLetters";
import TestimonialPhotoMarquee from "@/components/testimonials/TestimonialPhotoMarquee";
import TestimonialVideoGrid from "@/components/testimonials/TestimonialVideoGrid";
import {
  WORKSHOP_MEDIA_FILTERS,
  getAppreciationLetters,
  getClientVoiceSections,
  getWorkshopImageSections,
  getWorkshopVideos,
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
  const [workshopMedia, setWorkshopMedia] = useState<WorkshopMediaId>("video");

  const clientVoiceVideos = useMemo(() => {
    const list = getClientVoiceSections().flatMap((section) => section.videos);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [limit]);
  const photoSections = useMemo(() => getWorkshopImageSections(), []);
  const letters = useMemo(() => {
    const list = getAppreciationLetters();
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [limit]);

  const videoItems = useMemo(() => {
    const list = getWorkshopVideos();
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [limit]);

  const limitedPhotoSections = useMemo(() => {
    if (typeof limit !== "number") return photoSections;
    let remaining = limit;
    const sections = [];
    for (const section of photoSections) {
      if (remaining <= 0) break;
      const photos = section.photos.slice(0, remaining);
      if (photos.length === 0) continue;
      sections.push({ ...section, photos });
      remaining -= photos.length;
    }
    return sections;
  }, [photoSections, limit]);

  return (
    <section
      id="testimonials"
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
          <span className="text-[#3b2f8f]">outcomes.</span>
        </h2>

        <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-neutral-500 sm:text-[16px] sm:leading-[1.7]">
          Leaders and teams from government, corporates, institutions and social
          enterprises, in their own words.
        </p>

        {clientVoiceVideos.length > 0 && (
          <div className="mt-10 border-b border-dashed border-neutral-200 pb-12">
            <TestimonialVideoGrid videos={clientVoiceVideos} />
          </div>
        )}

        <div
          role="tablist"
          aria-label="Workshop media type"
          className="mt-8 flex flex-wrap gap-2"
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

        {workshopMedia !== "images" && (
          <div className="mt-10">
            {workshopMedia === "video" ? (
              videoItems.length > 0 ? (
                <TestimonialVideoGrid videos={videoItems} />
              ) : (
                <p className="rounded-lg border border-dashed border-neutral-300 bg-neutral-50 px-5 py-10 text-center text-[14px] text-neutral-500">
                  Media for this category is being prepared.
                </p>
              )
            ) : letters.length > 0 ? (
              <AppreciationLetters letters={letters} />
            ) : (
              <p className="rounded-lg border border-dashed border-neutral-300 bg-neutral-50 px-5 py-10 text-center text-[14px] text-neutral-500">
                Media for this category is being prepared.
              </p>
            )}
          </div>
        )}
      </div>

      {workshopMedia === "images" && (
        <div className="pb-14 sm:pb-16 md:pb-20">
          {limitedPhotoSections.length > 0 ? (
            <div className="mt-2 space-y-14 sm:space-y-16">
              {limitedPhotoSections.map((section) => (
                <TestimonialPhotoMarquee
                  key={section.id}
                  label={section.label}
                  photos={section.photos}
                />
              ))}
            </div>
          ) : (
            <p className="mx-auto max-w-[1100px] rounded-lg border border-dashed border-neutral-300 bg-neutral-50 px-5 py-10 text-center text-[14px] text-neutral-500">
              Media for this category is being prepared.
            </p>
          )}
        </div>
      )}
    </section>
  );
}
