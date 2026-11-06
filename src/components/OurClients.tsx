"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/about/Reveal";

/** Drop logo files into `public/assets/clients/` using these filenames. */
const CLIENTS = [
  {
    id: "mea",
    name: "Ministry of External Affairs",
    short: "MEA",
    image: "/assets/clients/mea.png",
  },
  {
    id: "ssifs",
    name: "Sushma Swaraj Institute of Foreign Service",
    short: "SSIFS, MEA",
    image: "/assets/clients/ssifs.png",
  },
  {
    id: "hipa",
    name: "Haryana Institute of Public Administration",
    short: "HIPA",
    image: "/assets/clients/hipa.png",
  },
  {
    id: "nddb",
    name: "National Dairy Development Board",
    short: "NDDB",
    image: "/assets/clients/nddb.png",
  },
  {
    id: "mofahd",
    name: "Ministry of Fisheries, Animal Husbandry and Dairying",
    short: "MoFAHD",
    image: "/assets/clients/ministry_of_fishery.png",
  },
  {
    id: "kmf",
    name: "Karnataka Milk Federation",
    short: "KMF",
    image: "/assets/clients/kmf.png",
  },
  {
    id: "idmc",
    name: "Indian Dairy Machinery Company Limited",
    short: "IDMC Limited",
    image: "/assets/clients/idmc.png",
  },
  {
    id: "ncdfi",
    name: "National Cooperative Dairy Federation of India",
    short: "NCDFI",
    image: "/assets/clients/ncdfi.png",
  },
  {
    id: "edii",
    name: "Entrepreneurship Development Institute of India",
    short: "EDII",
    image: "/assets/clients/edii.png",
  },
] as const;

const ROW_A = CLIENTS.slice(0, 5);
const ROW_B = CLIENTS.slice(5);

function ClientLogo({
  src,
  label,
  name,
}: {
  src: string;
  label: string;
  name: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-[#f3e8ff] font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#6d28d9]">
        {label.slice(0, 3)}
      </span>
    );
  }

  return (
    <span className="relative flex size-14 shrink-0 items-center justify-center overflow-hidden">
      <Image
        src={src}
        alt={name}
        width={56}
        height={56}
        className="h-12 w-12 object-contain"
        onError={() => setFailed(true)}
      />
    </span>
  );
}

function ClientCard({
  client,
}: {
  client: (typeof CLIENTS)[number];
}) {
  return (
    <article className="relative flex w-[min(100%,20.5rem)] shrink-0 items-center gap-3 overflow-hidden rounded-[1.15rem] border border-[#ebe4ff] bg-white px-4 py-3.5 shadow-[0_12px_32px_rgba(91,33,182,0.07)] sm:w-[22rem] sm:gap-3.5 sm:px-5 sm:py-4">
      <ClientLogo src={client.image} label={client.short} name={client.name} />
      <span aria-hidden="true" className="h-11 w-px shrink-0 bg-neutral-200" />
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-semibold leading-snug text-neutral-900 sm:text-[14px]">
          {client.name}{" "}
          <span className="font-medium text-neutral-500">({client.short})</span>
        </p>
      </div>
      {/* Decorative wave */}
      <svg
        aria-hidden="true"
        viewBox="0 0 120 48"
        className="pointer-events-none absolute -bottom-1 -right-1 h-12 w-28 text-[#ede9fe]"
      >
        <path
          d="M0 36c18-10 28-4 42-10s26-14 40-8 22 10 38 4v26H0V36Z"
          fill="currentColor"
        />
      </svg>
    </article>
  );
}

function MarqueeRow({
  clients,
  duration = "42s",
}: {
  clients: readonly (typeof CLIENTS)[number][];
  duration?: string;
}) {
  // Four copies so translateX(-50%) → 0 loops cleanly left-to-right.
  const loop = [...clients, ...clients, ...clients, ...clients];

  return (
    <div className="clients-marquee relative overflow-hidden" aria-hidden="true">
      <div
        className="clients-marquee-track flex w-max gap-3 sm:gap-4"
        style={{ animationDuration: duration }}
      >
        {loop.map((client, index) => (
          <ClientCard key={`${client.id}-${index}`} client={client} />
        ))}
      </div>
    </div>
  );
}

export default function OurClients() {
  return (
    <section
      aria-labelledby="our-clients-heading"
      className="relative overflow-hidden border-b border-[#e9e0ff] bg-[#f7f3ff] text-black"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 -top-24 size-[28rem] rounded-full bg-[#e9d8ff]/45 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-20 size-[32rem] rounded-full bg-[#ddd6fe]/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1100px] px-6 pt-16 sm:px-10 sm:pt-20 lg:pt-24">
        <div className="mx-auto max-w-[40rem] text-center">
          <Reveal>
            <p className="inline-flex items-center rounded-full border border-[#ddd6fe] bg-white/80 px-4 py-1.5 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-[#5b21b6] shadow-[0_8px_24px_rgba(124,58,237,0.08)]">
              Our clients
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="our-clients-heading"
              className="mt-6 font-[family-name:var(--font-serif)] text-[clamp(1.85rem,4.2vw,2.85rem)] leading-[1.12] tracking-[-0.03em] text-neutral-950"
            >
              Trusted by Leading Government Institutions &{" "}
              <span className="relative inline-block whitespace-nowrap">
                Organizations
                <svg
                  viewBox="0 0 180 10"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-[#7c3aed]"
                  aria-hidden="true"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 7c40-5 80 3 120-2s42-3 56 2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mx-auto mt-4 max-w-[46ch] text-[14px] leading-relaxed text-neutral-500 sm:text-[15px]">
              We proudly support premier government bodies, institutes, and
              industry leaders across India.
            </p>
          </Reveal>
        </div>
      </div>

      <ul className="sr-only">
        {CLIENTS.map((client) => (
          <li key={client.id}>
            {client.name} ({client.short})
          </li>
        ))}
      </ul>

      <div className="relative mt-10 space-y-3 pb-16 sm:mt-12 sm:space-y-4 sm:pb-20 lg:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#f7f3ff] to-transparent sm:w-16"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#f7f3ff] to-transparent sm:w-16"
        />

        <MarqueeRow clients={ROW_A} duration="48s" />
        <MarqueeRow clients={ROW_B} duration="40s" />
      </div>
    </section>
  );
}
