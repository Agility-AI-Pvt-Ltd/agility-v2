import type { TestimonialVideo } from "@/components/testimonials/TestimonialVideoGrid";

export type MainFilterId = "futurex" | "workshops";

export type WorkshopMediaId = "video" | "images";

export type CategorisedTestimonial = TestimonialVideo & {
  category: MainFilterId | "founder-on-stage" | "anand-workshop";
};

export const MAIN_FILTERS = [
  { id: "futurex" as const, label: "Futurex" },
  { id: "workshops" as const, label: "Workshops" },
] as const;

export const WORKSHOP_MEDIA_FILTERS = [
  { id: "video" as const, label: "Video" },
  { id: "images" as const, label: "Images" },
] as const;


const workshopVideos: CategorisedTestimonial[] = [
  { id: "IMG_4141", driveFileId: "19GoScUvUAnhHMcA9lgdqEuY6o4YZ2RUb" },
  { id: "IMG_4183", driveFileId: "1pKxp8CY92kcQ3c6G8Dm5RymCgdNZPWMs" },
  { id: "IMG_4184", driveFileId: "1njYghf6sXc1fxAIU7iaX7Nt3cnkhCQFM" },
  { id: "IMG_4225", driveFileId: "1WbttR9JS5uFaEQWlK225lvzX6KuiGnCG" },
  { id: "IMG_4263", driveFileId: "1uRKLNuSqP6wqmMuyZFMDi0dEBrBxtO8O" },
  { id: "IMG_4354", driveFileId: "1cxBz8XE3XA_DESrb_5OUjndRw7VJlZD7" },
].map((video) => ({
  ...video,
  category: "workshops" as const,
  kind: "video" as const,
  aspect: "portrait" as const,
  thumbnailUrl: `/testimonials/thumbs/${video.id}.jpg`,
}));

const futurexVideos: CategorisedTestimonial[] = [
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
  category: "futurex" as const,
  kind: "video" as const,
  aspect: "portrait" as const,
  thumbnailUrl: `/testimonials/thumbs/futurex/${video.id}.jpg`,
}));

const FOUNDER_PHOTOS = [
  "IMG_2498.jpg",
  "IMG_2508.jpg",
  "IMG_2509.jpg",
  "IMG_4173.jpg",
  "IMG_4174-1.jpg",
  "IMG_4177-1.jpg",
  "IMG_4180.jpg",
  "IMG_4181-1.jpg",
] as const;

const ANAND_PHOTOS = [
  "IMG-20260914-WA0000.jpg",
  "IMG-20260914-WA0001.jpg",
  "IMG-20260914-WA0002.jpg",
  "IMG-20260914-WA0003.jpg",
  "IMG-20260914-WA0010.jpg",
  "IMG-20260914-WA0016.jpg",
  "IMG-20260914-WA0017.jpg",
  "IMG-20260914-WA0018.jpg",
  "IMG-20260914-WA0019.jpg",
  "IMG-20260914-WA0020.jpg",
  "IMG-20260914-WA0021.jpg",
  "IMG-20260914-WA0022.jpg",
] as const;

const founderOnStagePhotos: CategorisedTestimonial[] = FOUNDER_PHOTOS.map(
  (file) => {
    const id = file.replace(/\.[^.]+$/, "");
    return {
      id: `founder-${id}`,
      category: "founder-on-stage" as const,
      kind: "photo" as const,
      aspect: "landscape" as const,
      thumbnailUrl: `/assets/founder-on-stage/${file}`,
      imageUrl: `/assets/founder-on-stage/${file}`,
    };
  },
);

const anandWorkshopPhotos: CategorisedTestimonial[] = ANAND_PHOTOS.map(
  (file) => {
    const id = file.replace(/\.[^.]+$/, "");
    return {
      id: `anand-${id}`,
      category: "anand-workshop" as const,
      kind: "photo" as const,
      aspect: "landscape" as const,
      thumbnailUrl: `/assets/anand-workshop/${file}`,
      imageUrl: `/assets/anand-workshop/${file}`,
    };
  },
);

export function getFuturexVideos(): CategorisedTestimonial[] {
  return futurexVideos;
}

export function getWorkshopVideos(): CategorisedTestimonial[] {
  return workshopVideos;
}

export function getWorkshopImages(): CategorisedTestimonial[] {
  return [...founderOnStagePhotos, ...anandWorkshopPhotos];
}
