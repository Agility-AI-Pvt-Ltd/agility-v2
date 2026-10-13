"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  LYFSHILP_ACADEMY_LOGO,
  LYFSHILP_ACADEMY_NAME,
  LYFSHILP_ACADEMY_URL,
} from "@/lib/company";

const GROUP = "/assets/credentials/group";

export default function GroupRelationshipDiagram() {
  const [agilitySrc, setAgilitySrc] = useState(`${GROUP}/agility-ai.png`);

  return (
    <div className="mt-10 rounded-xl border border-neutral-200/90 bg-[#fafafa] p-4 sm:p-5 md:p-6">
      <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-3">
        <article className="flex flex-col rounded-lg border border-neutral-200 bg-white p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-orange-50 sm:size-12">
              <Image
                src={LYFSHILP_ACADEMY_LOGO}
                alt=""
                width={48}
                height={48}
                className="size-full object-contain p-1"
              />
            </div>
            <div className="min-w-0">
              <p className="font-[family-name:var(--font-serif)] text-[17px] leading-tight tracking-[-0.02em] text-neutral-950 sm:text-[18px]">
                {LYFSHILP_ACADEMY_NAME}
              </p>
              <span className="mt-2 inline-flex rounded-full border border-orange-200 bg-orange-50 px-2.5 py-0.5 font-[family-name:var(--font-geist-mono)] text-[9px] font-medium uppercase tracking-[0.1em] text-orange-800">
                Parent company
              </span>
            </div>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-neutral-600">
            AI entrepreneurship and enablement for students.
          </p>
          <Link
            href={LYFSHILP_ACADEMY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.08em] text-[#3b6ef5] hover:underline"
          >
            Visit site ↗
          </Link>
        </article>

        <div className="flex flex-col items-center justify-center px-2 py-1 md:py-6">
          <p className="font-[family-name:var(--font-geist-mono)] text-[9px] uppercase tracking-[0.14em] text-neutral-400">
            Subsidiary
          </p>
          <svg
            viewBox="0 0 48 24"
            className="mt-1 h-5 w-12 text-neutral-300"
            aria-hidden="true"
          >
            <path
              d="M2 12h36m0 0-6-6m6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <article className="flex flex-col rounded-lg border border-neutral-200 bg-white p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="relative size-11 shrink-0 overflow-hidden rounded-lg bg-blue-50 sm:size-12">
              <Image
                src={agilitySrc}
                alt=""
                width={48}
                height={48}
                className="size-full object-contain p-0.5"
                onError={() => {
                  if (agilitySrc !== "/new_logo.png") setAgilitySrc("/new_logo.png");
                }}
              />
            </div>
            <div className="min-w-0">
              <p className="font-[family-name:var(--font-serif)] text-[17px] leading-tight tracking-[-0.02em] text-neutral-950 sm:text-[18px]">
                Agility AI
              </p>
              <span className="mt-2 inline-flex rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 font-[family-name:var(--font-geist-mono)] text-[9px] font-medium uppercase tracking-[0.1em] text-blue-800">
                Subsidiary
              </span>
            </div>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-neutral-600">
            AI enablement and automation for institutions.
          </p>
        </article>
      </div>
    </div>
  );
}
