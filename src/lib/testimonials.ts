import type { TestimonialVideo } from "@/components/testimonials/TestimonialVideoGrid";
import { PHOTO_CATEGORY_SOURCES } from "@/lib/testimonial-photo-sources";

// Futurex filter commented out — student testimonials moved off this site.
export type MainFilterId = /* "futurex" | */ "workshops";

export type WorkshopMediaId = "video" | "images" | "letters";

export type CategorisedTestimonial = TestimonialVideo & {
  category: MainFilterId /* | "futurex" */;
};

export type AppreciationLetter = {
  id: string;
  organization: string;
  location?: string;
  title: string;
  pdfUrl: string;
  logoSrc: string;
};

export const MAIN_FILTERS = [
  // { id: "futurex" as const, label: "Futurex" },
  { id: "workshops" as const, label: "Workshops" },
] as const;

export const WORKSHOP_MEDIA_FILTERS = [
  { id: "video" as const, label: "Video" },
  { id: "images" as const, label: "Images" },
  { id: "letters" as const, label: "Letters" },
] as const;

const APPRECIATION_LETTERS_DIR = "/assets/appreciation-letters";

export const APPRECIATION_LETTERS: AppreciationLetter[] = [
  {
    id: "nddb-appreciation",
    organization: "National Dairy Development Board",
    title: "Official letter of appreciation",
    pdfUrl: `${APPRECIATION_LETTERS_DIR}/nddb-appreciation-letter.pdf`,
    logoSrc: "/assets/clients/nddb.jpg",
  },
  {
    id: "hipa-appreciation",
    organization: "Haryana Institute of Public Administration",
    location: "Gurugram",
    title: "Appreciation letter",
    pdfUrl: `${APPRECIATION_LETTERS_DIR}/hipa-appreciation-letter.pdf`,
    logoSrc: "/assets/clients/hipa.jpg",
  },
];

export function getAppreciationLetters(): AppreciationLetter[] {
  return APPRECIATION_LETTERS;
}

/**
 * Client voice videos from
 * https://drive.google.com/drive/folders/1ksLe5KThDes7wi5HZS336XyzkDyLhkCx
 *
 * Paste each file's Drive ID (from Share → Copy link → /file/d/FILE_ID/view).
 * Folder must be shared as "Anyone with the link" for playback on the site.
 */
export type ClientVoiceSection = {
  id: string;
  label: string;
  videos: CategorisedTestimonial[];
};

export const CLIENT_VOICE_SECTIONS: ClientVoiceSection[] = [
  {
    id: "government",
    label: "Government",
    videos: [
      {
        id: "exec-director-nddb",
        driveFileId: "17tH3FYAY6_ssITe8_qSfh9_xrKa4W_2t",
        name: "Executive Director",
        organization: "NDDB",
        category: "workshops",
        kind: "video",
        aspect: "portrait",
      },
    ],
  },
  {
    id: "corporates",
    label: "Corporates",
    videos: [
      {
        id: "md-idmc",
        driveFileId: "1b_WUPielIcP0i13BEjqmyqkSA8RXoxnP",
        name: "Managing Director",
        organization: "IDMC Limited",
        category: "workshops",
        kind: "video",
        aspect: "portrait",
      },
    ],
  },
  {
    id: "social-enterprises",
    label: "Social enterprises",
    videos: [
      {
        id: "client-voice-2026-10-07-b",
        driveFileId: "1gUsy9ntFsbXHXQ8yZ5BfjFsoJWM9uVgJ",
        name: "Client voice",
        organization: "Social enterprise programme",
        category: "workshops",
        kind: "video",
        aspect: "portrait",
      },
    ],
  },
];

export function getClientVoiceSections(): ClientVoiceSection[] {
  return CLIENT_VOICE_SECTIONS.map((section) => ({
    ...section,
    videos: section.videos.filter((video) => Boolean(video.driveFileId)),
  })).filter((section) => section.videos.length > 0);
}

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

// Futurex student testimonials commented out — move to FutureX / Lyfshilp site.
// const futurexVideos: CategorisedTestimonial[] = [
//   {
//     id: "adhiraj-singh",
//     driveFileId: "19MucXrIJ2Z3UMMDGu8tA2IJaIrLOk0n7",
//     name: "Adhiraj Singh",
//     organization: "DPS Sec-45, Gurugram · Class 8",
//   },
//   {
//     id: "nivaan-johri",
//     driveFileId: "1FMilsOfNAjXUZCVB8iDeda0fsCBScl18",
//     name: "Nivaan Johri",
//     organization: "Delhi Public School · Class VII",
//   },
//   {
//     id: "punav-sangram",
//     driveFileId: "1zwL-cgjtnGhUTT_LdgU-gpTIb0imY6QR",
//     name: "Punav Sangram Jagdale",
//   },
//   {
//     id: "swara-agarwal",
//     driveFileId: "16-o43-007l3WogOeqLgf76NIEgCrMBAH",
//     name: "Swara Agarwal",
//     organization: "DPS Gurgaon · Class 7",
//   },
//   {
//     id: "vedang-pandey",
//     driveFileId: "1dG2-RHUVoEG2Ok5xHIl1eNaUbEnN9iTn",
//     name: "Vedang Pandey",
//     organization: "DPS Gurugram Sec-45",
//   },
//   {
//     id: "wrishik-ghosh",
//     driveFileId: "14wP9BFfToxNmzoM1phxaDU4u1P4EdVEr",
//     name: "Wrishik Ghosh",
//   },
// ].map((video) => ({
//   ...video,
//   category: "futurex" as const,
//   kind: "video" as const,
//   aspect: "portrait" as const,
//   thumbnailUrl: `/testimonials/thumbs/futurex/${video.id}.jpg`,
// }));

export type PhotoCategorySection = {
  id: string;
  label: string;
  folder: string;
  photos: CategorisedTestimonial[];
};

function slugifyFolder(folder: string): string {
  return folder
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const PHOTO_CATEGORY_SECTIONS: PhotoCategorySection[] =
  PHOTO_CATEGORY_SOURCES.map((source) => {
    const id = slugifyFolder(source.folder);
    const photos: CategorisedTestimonial[] = source.files.map((file, index) => {
      const path = `/testimonials/photos/${encodeURIComponent(source.folder)}/${encodeURIComponent(file)}`;
      return {
        id: `${id}-${index + 1}`,
        category: "workshops" as const,
        kind: "photo" as const,
        aspect: "landscape" as const,
        thumbnailUrl: path,
        imageUrl: path,
      };
    });
    return {
      id,
      label: source.label,
      folder: source.folder,
      photos,
    };
  });

// export function getFuturexVideos(): CategorisedTestimonial[] {
//   return futurexVideos;
// }

export function getWorkshopVideos(): CategorisedTestimonial[] {
  return workshopVideos;
}

export function getWorkshopImageSections(): PhotoCategorySection[] {
  return PHOTO_CATEGORY_SECTIONS.filter((section) => section.photos.length > 0);
}

export function getWorkshopImages(): CategorisedTestimonial[] {
  return getWorkshopImageSections().flatMap((section) => section.photos);
}
