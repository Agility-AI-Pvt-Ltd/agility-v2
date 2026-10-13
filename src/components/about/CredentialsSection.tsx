import Image from "next/image";
import CredentialPhoto from "@/components/about/CredentialPhoto";
import GroupRelationshipDiagram from "@/components/about/GroupRelationshipDiagram";
import Reveal from "@/components/about/Reveal";
import { PARENT_COMPANY_BLURB } from "@/lib/company";

const ASSET = "/assets/credentials";

type EntityHolder = "lyfshilp" | "agility" | "both";

type CredLogo = {
  id: string;
  alt: string;
  entity: EntityHolder;
  src?: string;
  textLabel?: string;
};

type CredentialBlock = {
  number: string;
  title: string;
  headline: string;
  description: string;
  photo: string;
  photoAlt: string;
  logos: CredLogo[];
};

const partnerGrid: CredLogo[] = [
  {
    id: "iiit",
    alt: "IIIT Allahabad",
    entity: "lyfshilp",
    textLabel: "IIIT Allahabad",
  },
  {
    id: "nsrcel",
    alt: "NSRCEL IIM Bangalore",
    entity: "lyfshilp",
    src: `${ASSET}/01_nsrcel_iim_bangalore.png`,
  },
  {
    id: "irma",
    alt: "IRMA ISEED Foundation",
    entity: "agility",
    src: `${ASSET}/04_irma_iseed_foundation.png`,
  },
  {
    id: "stanford-seed",
    alt: "Stanford Seed",
    entity: "lyfshilp",
    src: `${ASSET}/05_stanford_seed.png`,
  },
  {
    id: "stanford-gsb",
    alt: "Stanford Graduate School of Business",
    entity: "lyfshilp",
    src: `${ASSET}/06_stanford_graduate_school_business.png`,
  },
  {
    id: "dpiit",
    alt: "DPIIT Startup India",
    entity: "both",
    src: `${ASSET}/07_dpiit_startup_india.png`,
  },
  {
    id: "startup-india",
    alt: "Startup India",
    entity: "both",
    src: `${ASSET}/07_dpiit_startup_india.png`,
  },
  {
    id: "nvidia",
    alt: "NVIDIA Inception Program",
    entity: "agility",
    src: `${ASSET}/08_nvidia_inception.png`,
  },
  {
    id: "sarvam",
    alt: "Sarvam AI",
    entity: "agility",
    src: `${ASSET}/09_sarvam_ai.png`,
  },
  {
    id: "claude",
    alt: "Anthropic Claude Partner Program",
    entity: "agility",
    src: `${ASSET}/10_claude.png`,
  },
  {
    id: "nddb",
    alt: "NDDB",
    entity: "both",
    src: `${ASSET}/11_nddb.png`,
  },
  {
    id: "up-govt",
    alt: "Government of Uttar Pradesh",
    entity: "both",
    src: `${ASSET}/12_government_uttar_pradesh.png`,
  },
];

const credentialBlocks: CredentialBlock[] = [
  {
    number: "01",
    title: "INCUBATION",
    headline: "Incubated by leading institutions.",
    description:
      "Incubated at IIIT Allahabad, NSRCEL (IIM Bangalore) under Women Startup Program, and IRMA ISEED Foundation.",
    photo: `${ASSET}/photos/01_incubation.jpg`,
    photoAlt: "IIIT Allahabad campus entrance",
    logos: [
      {
        id: "iiit",
        alt: "IIIT Allahabad",
        entity: "lyfshilp",
        textLabel: "IIIT Allahabad",
      },
      {
        id: "nsrcel-row",
        alt: "NSRCEL IIM Bangalore",
        entity: "lyfshilp",
        src: `${ASSET}/01_nsrcel_iim_bangalore.png`,
      },
      {
        id: "irma-row",
        alt: "IRMA ISEED Foundation",
        entity: "agility",
        src: `${ASSET}/04_irma_iseed_foundation.png`,
      },
    ],
  },
  {
    number: "02",
    title: "RECOGNITION",
    headline: "Recognised among top startups.",
    description:
      "Stanford Seed, Stanford Graduate School of Business — among South Asia's top 15 startups. DPIIT-recognised startup and part of Startup India.",
    photo: `${ASSET}/photos/02_recognition.jpg`,
    photoAlt: "Stanford campus",
    logos: [
      {
        id: "stanford-seed-row",
        alt: "Stanford Seed",
        entity: "lyfshilp",
        src: `${ASSET}/05_stanford_seed.png`,
      },
      {
        id: "dpiit-row",
        alt: "DPIIT Startup India",
        entity: "both",
        src: `${ASSET}/07_dpiit_startup_india.png`,
      },
      {
        id: "startup-india-row",
        alt: "Startup India",
        entity: "both",
        src: `${ASSET}/07_dpiit_startup_india.png`,
      },
    ],
  },
  {
    number: "03",
    title: "AI PROGRAMMES",
    headline: "Supported by global AI leaders.",
    description:
      "Member of NVIDIA Inception Program, Sarvam AI Startup Programme, and Anthropic (Claude) Partner Program.",
    photo: `${ASSET}/photos/03_ai_programmes.jpg`,
    photoAlt: "NVIDIA Inception workspace",
    logos: [
      {
        id: "nvidia-row",
        alt: "NVIDIA Inception Program",
        entity: "agility",
        src: `${ASSET}/08_nvidia_inception.png`,
      },
      {
        id: "sarvam-row",
        alt: "Sarvam AI",
        entity: "agility",
        src: `${ASSET}/09_sarvam_ai.png`,
      },
      {
        id: "claude-row",
        alt: "Anthropic Claude Partner Program",
        entity: "agility",
        src: `${ASSET}/10_claude.png`,
      },
    ],
  },
  {
    number: "04",
    title: "GOVERNMENT ENGAGEMENT",
    headline: "Working with government bodies.",
    description:
      "Onboarded by NDDB to train officers and staff across its work locations; financial incentive felicitation by Govt. of UP, by Hon'ble CM.",
    photo: `${ASSET}/photos/04_government.jpg`,
    photoAlt: "Government training session",
    logos: [
      {
        id: "nddb-row",
        alt: "NDDB",
        entity: "both",
        src: `${ASSET}/11_nddb.png`,
      },
      {
        id: "up-row",
        alt: "Government of Uttar Pradesh",
        entity: "both",
        src: `${ASSET}/12_government_uttar_pradesh.png`,
      },
    ],
  },
];

const PHOTO_FALLBACK: Record<string, string> = {
  "01": `${ASSET}/nsrcel.png`,
  "02": `${ASSET}/seed.png`,
  "03": `${ASSET}/nvidia.png`,
  "04": `${ASSET}/nddb.png`,
};

const SIDEBAR_KEYWORDS = [
  "PEOPLE",
  "PROGRAMMES",
  "INSTITUTIONS",
  "REAL-WORLD IMPACT",
] as const;

function EntityPill({ entity }: { entity: EntityHolder }) {
  const config = {
    lyfshilp: {
      label: "Held by Lyfshilp Academy",
      className:
        "border-orange-200/80 bg-orange-50 text-orange-800/90",
    },
    agility: {
      label: "Held by Agility AI",
      className: "border-blue-200/80 bg-blue-50 text-blue-800/90",
    },
    both: {
      label: "Held by Both",
      className: "border-emerald-200/80 bg-emerald-50 text-emerald-900/90",
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

function LogoTile({ logo, compact }: { logo: CredLogo; compact?: boolean }) {
  return (
    <div
      className={[
        "flex min-w-0 flex-col items-center justify-between border border-neutral-200/90 bg-white",
        compact ? "min-h-[108px] p-2.5 sm:min-h-[118px] sm:p-3" : "min-h-[120px] p-3 sm:min-h-[132px]",
      ].join(" ")}
    >
      <div className="flex flex-1 items-center justify-center px-1 py-2">
        {logo.src ? (
          <Image
            src={logo.src}
            alt={logo.alt}
            width={400}
            height={160}
            sizes="(max-width: 640px) 28vw, 120px"
            className="max-h-10 w-auto max-w-full object-contain sm:max-h-11"
          />
        ) : (
          <p className="text-center font-[family-name:var(--font-geist-mono)] text-[9px] font-semibold uppercase leading-snug tracking-[0.1em] text-neutral-700 sm:text-[10px]">
            {logo.textLabel ?? logo.alt}
          </p>
        )}
      </div>
      <EntityPill entity={logo.entity} />
    </div>
  );
}

function SidebarConcept() {
  return (
    <div className="relative hidden pl-2 lg:block">
      <svg
        viewBox="0 0 120 280"
        className="absolute -left-2 top-0 h-[280px] w-[100px] text-neutral-300"
        aria-hidden="true"
      >
        <path
          d="M8 20 C 40 40, 70 80, 95 130 S 110 200, 105 260"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <path
          d="M98 255 l8 5 -6 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <ul className="ml-14 space-y-5 pt-6">
        {SIDEBAR_KEYWORDS.map((word) => (
          <li
            key={word}
            className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400"
          >
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CredentialRow({ block }: { block: CredentialBlock }) {
  const fallback = PHOTO_FALLBACK[block.number] ?? `${ASSET}/nsrcel.png`;

  return (
    <article className="border border-neutral-200/90 bg-white">
      <div className="flex flex-col lg:flex-row">
        <CredentialPhoto
          src={block.photo}
          fallback={fallback}
          alt={block.photoAlt}
        />

        <div className="flex min-w-0 flex-1 flex-col gap-4 border-t border-neutral-200/80 p-5 sm:p-6 lg:border-l lg:border-t-0">
          <div>
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-400">
              <span className="text-neutral-500">{block.number}</span>{" "}
              {block.title}
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-serif)] text-[1.2rem] leading-snug tracking-[-0.02em] text-neutral-950 sm:text-[1.35rem]">
              {block.headline}
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-neutral-600 sm:text-[15px]">
              {block.description}
            </p>
          </div>

          <ul
            className={[
              "grid gap-2",
              block.logos.length === 2
                ? "grid-cols-2"
                : "grid-cols-2 sm:grid-cols-3",
            ].join(" ")}
          >
            {block.logos.map((logo) => (
              <li key={`${block.number}-${logo.id}`}>
                <LogoTile logo={logo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function CredentialsSection() {
  return (
    <section
      id="credentials"
      aria-label="Credentials"
      className="border-t border-neutral-200 bg-white text-black"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20 md:px-14 lg:px-16 xl:px-20">
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[3px] w-8 bg-black" aria-hidden="true" />
            <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
              Credentials · One group
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="max-w-[22ch] font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.5vw,2.4rem)] leading-[1.12] tracking-[-0.02em] text-neutral-950">
            Recognised. Incubated. Accountable.
          </h2>
          <p className="mt-4 max-w-[62ch] text-[14px] leading-relaxed text-neutral-600 sm:text-[15px] sm:leading-[1.7]">
            {PARENT_COMPANY_BLURB}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <GroupRelationshipDiagram />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:mt-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start lg:gap-10 xl:gap-14">
          <Reveal delay={120}>
            <ul className="flex flex-col gap-4 sm:gap-5">
              {credentialBlocks.map((block) => (
                <li key={block.number}>
                  <CredentialRow block={block} />
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="flex flex-col gap-8 lg:gap-10">
            <Reveal delay={160}>
              <SidebarConcept />
              <p className="max-w-[52ch] font-[family-name:var(--font-serif)] text-[clamp(1.35rem,2.4vw,1.65rem)] leading-[1.25] tracking-[-0.02em] text-neutral-950 lg:mt-2">
                Backed by leading institutions, recognised among top startups,
                and working with government bodies to drive real-world impact.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-neutral-300" aria-hidden="true" />
                  <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                    Partners &amp; recognitions
                  </p>
                </div>

                <ul className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  {partnerGrid.map((logo) => (
                    <li key={logo.id}>
                      <LogoTile logo={logo} compact />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
