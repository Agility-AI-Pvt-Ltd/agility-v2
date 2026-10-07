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

const videos: TestimonialVideo[] = [
  { id: "IMG_4141", driveFileId: "19GoScUvUAnhHMcA9lgdqEuY6o4YZ2RUb" },
  { id: "IMG_4183", driveFileId: "1pKxp8CY92kcQ3c6G8Dm5RymCgdNZPWMs" },
  { id: "IMG_4184", driveFileId: "1njYghf6sXc1fxAIU7iaX7Nt3cnkhCQFM" },
  { id: "IMG_4225", driveFileId: "1WbttR9JS5uFaEQWlK225lvzX6KuiGnCG" },
  { id: "IMG_4263", driveFileId: "1uRKLNuSqP6wqmMuyZFMDi0dEBrBxtO8O" },
  { id: "IMG_4354", driveFileId: "1cxBz8XE3XA_DESrb_5OUjndRw7VJlZD7" },
].map((video) => ({
  ...video,
  aspect: "portrait" as const,
  thumbnailUrl: `/testimonials/thumbs/${video.id}.jpg`,
}));

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
        </div>
      </section>
    </SiteChrome>
  );
}
