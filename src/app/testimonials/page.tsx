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

const workshopVideos: TestimonialVideo[] = [
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

const futurexVideos: TestimonialVideo[] = [
  {
    id: "adhiraj-singh",
    driveFileId: "19MucXrIJ2Z3UMMDGu8tA2IJaIrLOk0n7",
    name: "Adhiraj Singh",
    organization: "DPS Sec-45, Gurugram · Class 8",
  },
  {
    id: "nivaan-johri",
    driveFileId: "1FMilsOfNAjXUZCVB8iDeda0fsCBScl18",
    name: "Nivaan Johri",
    organization: "Delhi Public School · Class VII",
  },
  {
    id: "punav-sangram",
    driveFileId: "1zwL-cgjtnGhUTT_LdgU-gpTIb0imY6QR",
    name: "Punav Sangram Jagdale",
  },
  {
    id: "swara-agarwal",
    driveFileId: "16-o43-007l3WogOeqLgf76NIEgCrMBAH",
    name: "Swara Agarwal",
    organization: "DPS Gurgaon · Class 7",
  },
  {
    id: "vedang-pandey",
    driveFileId: "1dG2-RHUVoEG2Ok5xHIl1eNaUbEnN9iTn",
    name: "Vedang Pandey",
    organization: "DPS Gurugram Sec-45",
  },
  {
    id: "wrishik-ghosh",
    driveFileId: "14wP9BFfToxNmzoM1phxaDU4u1P4EdVEr",
    name: "Wrishik Ghosh",
  },
].map((video) => ({
  ...video,
  aspect: "portrait" as const,
  thumbnailUrl: `/testimonials/thumbs/futurex/${video.id}.jpg`,
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

          <TestimonialVideoGrid videos={workshopVideos} />

          <div
            className="my-14 border-t border-dashed border-neutral-300 sm:my-16"
            aria-hidden="true"
          />

          <div className="mb-8 flex items-center gap-3">
            <span className="h-[3px] w-8 bg-black" aria-hidden="true" />
            <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
              Futurex Testimonials
            </p>
          </div>

          <TestimonialVideoGrid videos={futurexVideos} />
        </div>
      </section>
    </SiteChrome>
  );
}
