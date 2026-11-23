import Image from "next/image";
import Reveal from "@/components/about/Reveal";

const ASSET = "/assets/credentials";
const INCUB_ASSET = "/assets/incubations";

type EntityHolder = "lyfshilp" | "agility";

const LOGOS = [
  {
    id: "iif-iiit-allahabad",
    alt: "IIF, IIIT Allahabad",
    entity: "lyfshilp" as const,
    src: `${INCUB_ASSET}/iiit-allahabad.jpeg`,
    textLabel: "IIF, IIIT Allahabad",
  },
  {
    id: "siic-iit-kanpur",
    alt: "SIIC, IIT Kanpur",
    entity: "lyfshilp" as const,
    src: `${INCUB_ASSET}/siic-iit-kanpur.webp`,
    textLabel: "SIIC, IIT Kanpur",
  },
  {
    id: "nsrcel",
    alt: "NSRCEL, IIM Bangalore",
    entity: "lyfshilp" as const,
    src: `${INCUB_ASSET}/nsrcel.webp`,
    textLabel: "NSRCEL, IIM Bangalore",
  },
  {
    id: "irma",
    alt: "IRMA ISEED Foundation",
    entity: "agility" as const,
    src: `${ASSET}/04_irma_iseed_foundation.png`,
    textLabel: "IRMA ISEED Foundation",
  },
] as const;

function EntityPill({ entity }: { entity: EntityHolder }) {
  const config = {
    lyfshilp: {
      label: "Held by Lyfshilp Academy",
      className: "border-orange-200/80 bg-orange-50 text-orange-800/90",
    },
    agility: {
      label: "Held by Agility AI",
      className: "border-blue-200/80 bg-blue-50 text-blue-800/90",
    },
  }[entity];

  return (
    <span
      className={[
        "inline-flex max-w-full items-center justify-center rounded-full border px-2 py-0.5 text-center font-[family-name:var(--font-geist-mono)] text-[8px] font-medium uppercase leading-tight tracking-[0.06em] sm:text-[9px]",
        config.className,
      ].join(" ")}
    >
      {config.label}
    </span>
  );
}

export default function HomeIncubation() {
  return (
    <section
      aria-labelledby="home-incubation-heading"
      className="relative z-10 border-b border-neutral-200 bg-white text-black"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-12 sm:px-10 sm:py-14 lg:py-16">
        <Reveal>
          <h2
            id="home-incubation-heading"
            className="max-w-[28ch] font-[family-name:var(--font-serif)] text-[clamp(1.6rem,3.2vw,2.25rem)] leading-[1.12] tracking-[-0.02em] text-neutral-950"
          >
            Incubated by leading institutions.
          </h2>
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-3 max-w-[62ch] text-[14px] leading-relaxed text-neutral-600 sm:text-[15px] sm:leading-[1.7]">
            Incubated at IIF (IIIT Allahabad), SIIC (IIT Kanpur), NSRCEL (IIM
            Bangalore) under Women Startup Program, and IRMA ISEED Foundation.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-8 grid grid-cols-2 gap-2 sm:mt-10 sm:gap-3 lg:grid-cols-4">
            {LOGOS.map((logo) => (
              <li key={logo.id}>
                <div className="flex min-h-[120px] min-w-0 flex-col items-center justify-between border border-neutral-200/90 bg-white p-3 sm:min-h-[132px]">
                  <div className="flex flex-1 flex-col items-center justify-center gap-2 px-1 py-2">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={400}
                      height={160}
                      sizes="(max-width: 640px) 40vw, 180px"
                      className="max-h-10 w-auto max-w-full object-contain sm:max-h-11"
                    />
                    <p className="text-center font-[family-name:var(--font-geist-mono)] text-[9px] font-semibold uppercase leading-snug tracking-[0.1em] text-neutral-700 sm:text-[10px]">
                      {logo.textLabel}
                    </p>
                  </div>
                  <EntityPill entity={logo.entity} />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
