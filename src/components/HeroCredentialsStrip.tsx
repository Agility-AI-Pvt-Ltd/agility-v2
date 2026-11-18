import Image from "next/image";

const CREDENTIALS = [
  {
    id: "irma",
    label: "Incubated at IRMA ISEED Foundation",
    src: "/assets/credentials/04_irma_iseed_foundation.png",
    alt: "IRMA ISEED Foundation",
  },
  {
    id: "dpiit",
    label: "DPIIT-recognised startup",
    src: "/assets/credentials/07_dpiit_startup_india.png",
    alt: "DPIIT Startup India",
  },
  {
    id: "nvidia",
    label: "Member of NVIDIA Inception",
    src: "/assets/credentials/08_nvidia_inception.png",
    alt: "NVIDIA Inception",
  },
] as const;

export default function HeroCredentialsStrip() {
  return (
    <section
      aria-label="Credentials"
      className="relative z-10 border-b border-neutral-200 bg-white text-black"
    >
      <div className="mx-auto max-w-[1100px] px-6 py-6 sm:px-10 sm:py-7">
        <ul className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {CREDENTIALS.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-3 border border-neutral-200 bg-neutral-50 px-3 py-3 sm:flex-col sm:items-stretch sm:gap-2.5 sm:px-4 sm:py-4"
            >
              <div className="flex h-14 w-[9rem] shrink-0 items-center justify-center overflow-visible bg-white px-3 py-2 sm:h-16 sm:w-full sm:px-4 sm:py-2.5">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={220}
                  height={64}
                  className="h-9 w-auto max-h-full max-w-full object-contain sm:h-10"
                />
              </div>
              <p className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase leading-snug tracking-[0.08em] text-neutral-800 sm:text-center sm:text-[12px] sm:tracking-[0.1em]">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
