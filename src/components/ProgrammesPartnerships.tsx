import Image from "next/image";

const PROGRAMMES = [
  {
    id: "claude",
    label: "Claude Partner Network",
    logos: [
      {
        src: "/assets/ai_programmes/claude.png",
        alt: "Claude Partner Network",
        imageClassName: "h-16 w-auto max-w-full object-contain sm:h-20",
      },
    ],
  },
  {
    id: "sarvam",
    label: "Sarvam Startup Program",
    logos: [
      {
        src: "/assets/sarvamai.png",
        alt: "Sarvam AI",
      },
    ],
  },
  {
    id: "nvidia",
    label: "NVIDIA Inception Program",
    logos: [
      {
        src: "/assets/credentials/08_nvidia_inception.png",
        alt: "NVIDIA Inception",
      },
    ],
  },
] as const;

export default function ProgrammesPartnerships() {
  return (
    <section
      aria-labelledby="programmes-partnerships-heading"
      className="relative z-10 border-b border-neutral-200 bg-[#f5f5f5] text-black"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-10 sm:px-10 sm:py-12 lg:py-14">
        <h2
          id="programmes-partnerships-heading"
          className="text-center font-[family-name:var(--font-serif)] text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.02em] text-neutral-900"
        >
          Programmes &amp; Partnerships
        </h2>

        <ul className="mt-8 grid gap-6 sm:mt-9 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 lg:mt-10 lg:grid-cols-3 lg:gap-8">
          {PROGRAMMES.map((item) => (
            <li
              key={item.id}
              className="flex h-full flex-col items-center text-center"
            >
              <div className="flex min-h-[5.5rem] w-full items-center justify-center gap-3 sm:min-h-[6rem]">
                {item.logos.map((logo) => (
                  <div
                    key={logo.src}
                    className="flex h-20 w-full max-w-[12rem] items-center justify-center bg-white px-4 py-3 shadow-[0_1px_0_rgba(0,0,0,0.04)] sm:h-24"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={220}
                      height={96}
                      className={
                        "imageClassName" in logo && logo.imageClassName
                          ? logo.imageClassName
                          : "h-12 w-auto max-w-full object-contain sm:h-14"
                      }
                    />
                  </div>
                ))}
              </div>
              <p className="mt-3 flex items-start justify-center px-2 text-[14px] font-semibold leading-snug text-neutral-800 sm:mt-4 sm:text-[15px]">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
