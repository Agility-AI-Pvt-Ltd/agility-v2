import Image from "next/image";

const PROGRAMMES = [
  {
    id: "claude",
    label: "Claude Partner Network",
    logos: [
      {
        src: "/assets/credentials/10_claude.png",
        alt: "Claude Partner Network",
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
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 sm:py-20 lg:py-24">
        <h2
          id="programmes-partnerships-heading"
          className="text-center font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em] text-neutral-900"
        >
          Programmes &amp; Partnerships
        </h2>

        <ul className="mt-12 grid gap-10 sm:mt-14 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-16 lg:grid-cols-3 lg:gap-10">
          {PROGRAMMES.map((item) => (
            <li
              key={item.id}
              className="flex h-full flex-col items-center text-center"
            >
              <div className="flex min-h-[7.5rem] w-full items-center justify-center gap-3 sm:min-h-[8.5rem]">
                {item.logos.map((logo) => (
                  <div
                    key={logo.src}
                    className="flex h-28 w-full max-w-[14rem] items-center justify-center bg-white px-5 py-4 shadow-[0_1px_0_rgba(0,0,0,0.04)] sm:h-32"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={220}
                      height={96}
                      className="h-16 w-auto max-w-full object-contain sm:h-20"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-5 flex min-h-[3.25rem] items-start justify-center px-2 text-[15px] font-semibold leading-snug text-neutral-800 sm:mt-6 sm:min-h-[3.5rem] sm:text-[16px]">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
