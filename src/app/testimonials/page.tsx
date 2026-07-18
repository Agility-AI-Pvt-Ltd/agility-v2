import type { Metadata } from "next";
import SiteChrome, { PageHero } from "@/components/SiteChrome";
import TestimonialVideoGrid, {
  type TestimonialVideo,
} from "@/components/testimonials/TestimonialVideoGrid";

export const metadata: Metadata = {
  title: {
    absolute: "Client Voices | Agility AI AI Enablement Testimonials",
  },
  description:
    "Hear directly from people who have gone through Agility AI's AI enablement sessions, in their own words.",
  openGraph: {
    title: "Client Voices | Agility AI AI Enablement Testimonials",
    description:
      "Hear directly from people who have gone through Agility AI's AI enablement sessions, in their own words.",
  },
  twitter: {
    title: "Client Voices | Agility AI AI Enablement Testimonials",
    description:
      "Hear directly from people who have gone through Agility AI's AI enablement sessions, in their own words.",
  },
};

/**
 * Swap in unlisted YouTube IDs as footage is pulled from Instagram / Drive.
 * Captions stay visible to search engines even before play.
 */
const videos: TestimonialVideo[] = [
  {
    id: "1",
    name: "Participant Name",
    organization: "Organisation",
    caption:
      "How a 40 person team went from AI curious to AI fluent in two sessions.",
  },
  {
    id: "2",
    name: "Participant Name",
    organization: "Organisation",
    caption:
      "What changed when enablement was built around real daily tools, not a generic deck.",
  },
  {
    id: "3",
    name: "Participant Name",
    organization: "Organisation",
    caption:
      "From one curious teammate to a shared approach the rest of the floor could actually use.",
  },
  {
    id: "4",
    name: "Participant Name",
    organization: "Organisation",
    caption:
      "Why a hands-on session stuck longer than the last training deck that got read once and forgotten.",
  },
  {
    id: "5",
    name: "Participant Name",
    organization: "Organisation",
    caption:
      "How a task that used to take an afternoon started taking twenty minutes — and everyone knew why.",
  },
  {
    id: "6",
    name: "Participant Name",
    organization: "Organisation",
    caption:
      "What it felt like when AI stopped being a side experiment and started living inside the workflow.",
  },
];

export default function TestimonialsPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Testimonials"
        title="Hear it straight from the people who sat through these sessions."
        description="Real video testimonials recorded from actual AI enablement sessions — in their own words."
      />

      <section className="border-b border-neutral-200 bg-[#f6f6f6] text-black">
        <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-[3px] w-8 bg-black" aria-hidden="true" />
            <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
              Video grid
            </p>
          </div>

          <TestimonialVideoGrid videos={videos} />

          <p className="mt-8 max-w-[62ch] text-[13px] leading-relaxed text-neutral-500">
            Videos will play from unlisted YouTube links once footage is pulled
            together from Instagram and Google Drive. Each card already carries
            a written caption so search and answer engines can read the story
            before anyone presses play.
          </p>
        </div>
      </section>
    </SiteChrome>
  );
}
