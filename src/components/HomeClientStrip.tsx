"use client";

import Image from "next/image";
import { useState } from "react";

/** FIA stays off this strip until Shreya confirms FIA is a client for this line. */
const CLIENTS = [
  { id: "mea", label: "MEA", image: "/assets/clients/mea.png" as string | null },
  { id: "nddb", label: "NDDB", image: "/assets/clients/nddb.jpg" as string | null },
  { id: "hipa", label: "HIPA", image: "/assets/clients/hipa.jpg" as string | null },
  { id: "edii", label: "EDII", image: "/assets/clients/EDII.jpg" as string | null },
] as const;

function StripLogo({
  label,
  image,
}: {
  label: string;
  image: string | null;
}) {
  const [failed, setFailed] = useState(false);

  if (!image || failed) {
    return (
      <span className="font-[family-name:var(--font-geist-mono)] text-[13px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
        {label}
      </span>
    );
  }

  return (
    <Image
      src={image}
      alt={label}
      width={140}
      height={48}
      className="h-10 w-auto max-w-[140px] object-contain opacity-90 sm:h-11"
      onError={() => setFailed(true)}
    />
  );
}

export default function HomeClientStrip() {
  return (
    <section
      aria-label="Organisations we work with"
      className="border-b border-neutral-200 bg-[#f6f6f6] text-black"
    >
      <div className="mx-auto max-w-[1100px] px-6 py-8 sm:px-10 sm:py-10">
        <p className="text-center font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.16em] text-neutral-400">
          Programmes delivered for MEA, NDDB, HIPA and EDII
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {CLIENTS.map((client) => (
            <li key={client.id} className="flex items-center justify-center">
              <StripLogo label={client.label} image={client.image} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
