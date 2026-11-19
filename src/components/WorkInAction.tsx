import Image from "next/image";

const WORK_IN_ACTION_FILES = [
  "IMG-20260914-WA0001.jpg",
  "IMG-20260914-WA0002.jpg",
  "IMG_4177 (1) (1).JPG",
  "WhatsApp Image 2026-05-13 at 18.10.40 (5) (2).jpeg",
  "WhatsApp Image 2026-11-04 at 7.35.01 PM (2).jpeg",
  "WhatsApp Image 2026-11-04 at 7.35.04 PM.jpeg",
  "WhatsApp Image 2026-11-04 at 7.35.04 PM (1).jpeg",
  "WhatsApp Image 2026-11-04 at 7.35.06 PM (1).jpeg",
  "WhatsApp Image 2026-11-16 at 12.40.43 PM.jpeg",
  "WhatsApp Image 2026-11-16 at 12.42.59 PM.jpeg",
  "WhatsApp Image 2026-11-16 at 1.17.05 PM.jpeg",
  "WhatsApp Image 2026-11-16 at 1.17.07 PM.jpeg",
] as const;

const IMAGES = WORK_IN_ACTION_FILES.map((file, index) => ({
  id: `work-${index + 1}`,
  src: `/assets/work_in_action/${encodeURIComponent(file)}`,
  alt: `Engagement photo ${index + 1}`,
}));

const ROW_A = IMAGES.filter((_, index) => index % 2 === 0);
const ROW_B = IMAGES.filter((_, index) => index % 2 === 1);

function MarqueeRow({
  images,
  direction,
  duration,
}: {
  images: typeof IMAGES;
  direction: "rtl" | "ltr";
  duration: string;
}) {
  const loop = [...images, ...images, ...images];

  return (
    <div className="work-in-action-marquee relative overflow-hidden" aria-hidden="true">
      <div
        className={[
          "flex w-max gap-4 sm:gap-5",
          direction === "rtl"
            ? "work-in-action-marquee-rtl"
            : "work-in-action-marquee-ltr",
        ].join(" ")}
        style={{ animationDuration: duration }}
      >
        {loop.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="relative h-44 w-[16rem] shrink-0 overflow-hidden rounded-2xl bg-neutral-200 sm:h-52 sm:w-[19rem] lg:h-56 lg:w-[21rem]"
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="(max-width: 640px) 256px, (max-width: 1024px) 304px, 336px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WorkInAction() {
  return (
    <section
      aria-labelledby="work-in-action-heading"
      className="relative z-10 overflow-hidden border-b border-neutral-200 bg-[#f5f5f5] text-black"
    >
      <div className="mx-auto max-w-[1100px] px-6 pt-16 text-center sm:px-10 sm:pt-20 lg:pt-24">
        <h2
          id="work-in-action-heading"
          className="font-[family-name:var(--font-serif)] text-[clamp(1.9rem,4.2vw,2.85rem)] font-bold leading-[1.1] tracking-[-0.03em] text-neutral-950"
        >
          Our Work in Action
        </h2>
        <p className="mx-auto mt-4 max-w-[42ch] text-[14px] leading-relaxed text-neutral-500 sm:text-[15px]">
          Snapshots from our engagements across organizations and communities.
        </p>
      </div>

      <ul className="sr-only">
        {IMAGES.map((image) => (
          <li key={image.id}>{image.alt}</li>
        ))}
      </ul>

      <div className="relative mt-10 space-y-4 pb-16 sm:mt-12 sm:space-y-5 sm:pb-20 lg:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#f5f5f5] to-transparent sm:w-16"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#f5f5f5] to-transparent sm:w-16"
        />

        <MarqueeRow images={ROW_A} direction="rtl" duration="48s" />
        <MarqueeRow images={ROW_B} direction="ltr" duration="52s" />
      </div>
    </section>
  );
}
