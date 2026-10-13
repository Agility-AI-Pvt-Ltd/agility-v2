import Image from "next/image";
import Reveal from "@/components/about/Reveal";

const ASSET = "/assets/credentials";

type PartnerMark =
  | { id: string; type: "image"; src: string; alt: string }
  | { id: string; type: "text"; label: string };

type CredentialBlock = {
  number: string;
  title: string;
  photo: string;
  photoAlt: string;
  description: string;
  logos: PartnerMark[];
};

const partnerMarks: PartnerMark[] = [
  {
    id: "nsrcel-iim",
    type: "image",
    src: `${ASSET}/01_nsrcel_iim_bangalore.png`,
    alt: "NSRCEL, IIM Bangalore",
  },
  {
    id: "iim-bangalore",
    type: "image",
    src: `${ASSET}/02_iim_bangalore.png`,
    alt: "IIM Bangalore",
  },
  { id: "iiit-allahabad", type: "text", label: "IIIT Allahabad" },
  {
    id: "irma-iseed",
    type: "image",
    src: `${ASSET}/04_irma_iseed_foundation.png`,
    alt: "IRMA ISEED Foundation",
  },
  {
    id: "stanford-seed",
    type: "image",
    src: `${ASSET}/05_stanford_seed.png`,
    alt: "Stanford Seed",
  },
  {
    id: "stanford-gsb",
    type: "image",
    src: `${ASSET}/06_stanford_graduate_school_business.png`,
    alt: "Stanford Graduate School of Business",
  },
  {
    id: "dpiit",
    type: "image",
    src: `${ASSET}/07_dpiit_startup_india.png`,
    alt: "DPIIT Startup India",
  },
  {
    id: "nvidia",
    type: "image",
    src: `${ASSET}/08_nvidia_inception.png`,
    alt: "NVIDIA Inception Program",
  },
  {
    id: "sarvam",
    type: "image",
    src: `${ASSET}/09_sarvam_ai.png`,
    alt: "Sarvam AI",
  },
  {
    id: "nddb",
    type: "image",
    src: `${ASSET}/11_nddb.png`,
    alt: "NDDB",
  },
  {
    id: "up-govt",
    type: "image",
    src: `${ASSET}/12_government_uttar_pradesh.png`,
    alt: "Government of Uttar Pradesh",
  },
];

const credentialBlocks: CredentialBlock[] = [
  {
    number: "01",
    title: "INCUBATION",
    photo: `${ASSET}/nsrcel.png`,
    photoAlt: "NSRCEL at IIM Bangalore",
    description:
      "Lyfshilp Academy: NSRCEL Women Startup Program (IIM Bangalore); incubated at IIIT Allahabad. Agility AI: IRMA ISEED Foundation.",
    logos: partnerMarks.slice(0, 4),
  },
  {
    number: "02",
    title: "RECOGNITION",
    photo: `${ASSET}/seed.png`,
    photoAlt: "Stanford Seed recognition award",
    description:
      "Lyfshilp Academy: among South Asia's top 15 startups (Stanford Seed, Stanford GSB). Group: DPIIT-recognised under Startup India (DIPP205863) — Lyfshilp Academy and Agility AI.",
    logos: partnerMarks.slice(4, 7),
  },
  {
    number: "03",
    title: "STARTUP PROGRAMMES",
    photo: `${ASSET}/nvidia.png`,
    photoAlt: "NVIDIA Inception workspace",
    description:
      "Agility AI: NVIDIA Inception Program; Sarvam AI Startup Programme.",
    logos: partnerMarks.slice(7, 9),
  },
  {
    number: "04",
    title: "GOVERNMENT ENGAGEMENT",
    photo: `${ASSET}/nddb.png`,
    photoAlt: "NDDB training session",
    description:
      "Onboarded by NDDB to train officers and staff across its work locations; Financial incentive felicitation by Govt. of UP, by Hon'ble CM",
    logos: partnerMarks.slice(9, 11),
  },
];

function CredentialMark({
  mark,
  className,
  maxHeightClass = "max-h-11 sm:max-h-12",
}: {
  mark: PartnerMark;
  className?: string;
  maxHeightClass?: string;
}) {
  return (
    <div
      className={[
        "relative flex w-full min-w-0 items-center justify-center overflow-visible px-2 py-2 sm:px-3",
        className,
      ].join(" ")}
    >
      {mark.type === "text" ? (
        <p className="text-center font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] text-neutral-700 sm:text-[11px]">
          {mark.label}
        </p>
      ) : (
        <Image
          src={mark.src}
          alt={mark.alt}
          width={520}
          height={240}
          sizes="(max-width: 640px) 40vw, 180px"
          className={`h-auto w-auto max-w-full object-contain object-center ${maxHeightClass}`}
        />
      )}
    </div>
  );
}

function logoStripCols(count: number) {
  if (count <= 2) return "grid-cols-2";
  if (count === 3) return "grid-cols-2 sm:grid-cols-3";
  return "grid-cols-2";
}

function CredentialCard({ block }: { block: CredentialBlock }) {
  return (
    <article className="border border-neutral-200 bg-white">
      <div className="flex flex-col sm:flex-row">
        <div className="relative aspect-[4/3] w-full shrink-0 bg-neutral-100 sm:aspect-auto sm:h-auto sm:w-[148px] sm:min-h-[148px] md:w-[168px] md:min-h-[168px]">
          <Image
            src={block.photo}
            alt={block.photoAlt}
            fill
            sizes="(max-width: 640px) 100vw, 168px"
            className="object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between gap-4 p-5 sm:p-6">
          <div>
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-400">
              <span className="text-neutral-500">{block.number}</span>{" "}
              {block.title}
            </p>
            <p className="mt-3 font-[family-name:var(--font-serif)] text-[15px] leading-[1.45] tracking-[-0.01em] text-neutral-900 sm:text-[16px] sm:leading-[1.5]">
              {block.description}
            </p>
          </div>

          <ul
            className={[
              "grid gap-px border border-neutral-200 bg-neutral-200",
              logoStripCols(block.logos.length),
            ].join(" ")}
          >
            {block.logos.map((mark) => (
              <li
                key={mark.id}
                className="flex min-h-[64px] items-center justify-center bg-[#fafafa] sm:min-h-[72px]"
              >
                <CredentialMark mark={mark} />
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
              Credentials
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-[22ch] font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.5vw,2.4rem)] leading-[1.12] tracking-[-0.02em] text-neutral-950">
            Recognised. Incubated. Accountable.
          </h2>
          <p className="mt-4 max-w-[58ch] text-[14px] leading-relaxed text-neutral-600 sm:text-[15px]">
            Agility AI and its parent, Lyfshilp Academy, are backed by these
            institutions — tagged by entity in each card below.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-14 xl:gap-16">
          <Reveal delay={120}>
            <ul className="flex flex-col gap-4 sm:gap-5">
              {credentialBlocks.map((block) => (
                <li key={block.number}>
                  <CredentialCard block={block} />
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="flex flex-col gap-8 lg:gap-10">
            <Reveal delay={160}>
              <div>
                <h3 className="font-[family-name:var(--font-serif)] text-[clamp(1.5rem,2.8vw,2rem)] leading-[1.15] tracking-[-0.02em] text-neutral-950">
                  Built with credible institutions.
                  <br />
                  Recognised by those shaping what&apos;s next.
                </h3>
                <p className="mt-5 max-w-[52ch] text-[14px] leading-relaxed text-neutral-600 sm:text-[15px] sm:leading-[1.7]">
                  Agility AI has been incubated and supported by leading academic
                  institutions, recognised among top startups, selected for global
                  startup programmes, and engaged with government bodies to drive
                  real-world impact.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-neutral-300" aria-hidden="true" />
                  <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                    Our partners &amp; recognitions
                  </p>
                </div>

                <ul className="flex flex-wrap gap-px border border-neutral-200 bg-neutral-200">
                  {partnerMarks.map((mark) => (
                    <li
                      key={mark.id}
                      className="flex min-h-[88px] min-w-[calc(50%-1px)] flex-1 items-center justify-center bg-white px-3 py-4 sm:min-h-[96px] sm:min-w-[calc(33.333%-1px)] sm:max-w-[calc(33.333%-1px)] sm:px-4"
                    >
                      <CredentialMark
                        mark={mark}
                        maxHeightClass="max-h-12 sm:max-h-14"
                      />
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
