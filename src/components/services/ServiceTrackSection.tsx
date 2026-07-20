"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "@/components/about/Reveal";
import OfferingIcon from "@/components/services/OfferingIcon";
import OfferingMascot, {
  type MascotPlacement,
} from "@/components/services/OfferingMascot";

type OfferingVariant = "enablement" | "integration" | "products";

type ServiceTrackSectionProps = {
  id: string;
  label: string;
  title: string;
  summary: string;
  extra?: ReactNode;
  includes: readonly string[];
  forWhom: readonly string[];
  doneLooksLike: readonly string[];
  cta?: {
    label: string;
    href: string;
  };
  variant: OfferingVariant;
};

const VARIANT_CONFIG: Record<
  OfferingVariant,
  {
    icon: "layers" | "connect" | "product";
    gradient: string;
    mascot: { placement: MascotPlacement; message: string; anchor: "hero" | "card"; cardIndex?: number };
    cardOffsets: [string, string, string];
  }
> = {
  enablement: {
    icon: "layers",
    gradient: "services-offering-detail-a",
    mascot: {
      placement: "top-right",
      message: "Let's get your team fluent!",
      anchor: "hero",
    },
    cardOffsets: ["", "lg:mt-8", "lg:mt-16"],
  },
  integration: {
    icon: "connect",
    gradient: "services-offering-detail-b",
    mascot: {
      placement: "mid-right",
      message: "No new dashboards. Promise.",
      anchor: "card",
      cardIndex: 1,
    },
    cardOffsets: ["lg:mt-4", "lg:mt-12", "lg:mt-20"],
  },
  products: {
    icon: "product",
    gradient: "services-offering-detail-c",
    mascot: {
      placement: "bottom-left",
      message: "Start using it this week!",
      anchor: "card",
      cardIndex: 2,
    },
    cardOffsets: ["", "lg:mt-6", "lg:mt-12"],
  },
};

const DETAIL_BLOCKS = [
  { key: "includes", title: "What's included" },
  { key: "forWhom", title: "Who it's for" },
  { key: "doneLooksLike", title: "What done looks like" },
] as const;

function DetailCard({
  title,
  items,
  offsetClass,
  mascot,
}: {
  title: string;
  items: readonly string[];
  offsetClass: string;
  mascot?: ReactNode;
}) {
  return (
    <article
      className={[
        "services-offering-detail-card relative flex min-h-[240px] flex-col rounded-[1.5rem] border border-white/80 bg-white p-6 shadow-[0_16px_44px_rgba(15,23,42,0.07)] sm:min-h-[260px] sm:p-7",
        mascot ? "overflow-visible" : "",
        offsetClass,
      ].join(" ")}
    >
      {mascot}
      <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-[#94a3b8]">
        {title}
      </p>
      <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-[#475569]">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span
              className="mt-2 size-1.5 shrink-0 rounded-full bg-[#3b6ef5]"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ServiceTrackSection({
  id,
  label,
  title,
  summary,
  extra,
  includes,
  forWhom,
  doneLooksLike,
  cta,
  variant,
}: ServiceTrackSectionProps) {
  const config = VARIANT_CONFIG[variant];
  const lists = { includes, forWhom, doneLooksLike };

  return (
    <section
      id={id}
      className={[
        "relative overflow-x-hidden overflow-y-visible border-b border-[#dbeafe]/60 scroll-mt-20",
        config.gradient,
      ].join(" ")}
    >
      <div
        className="pointer-events-none absolute inset-0 services-offerings-glow"
        aria-hidden="true"
      />

      <div
        className={[
          "relative z-10 mx-auto max-w-[1100px] px-6 sm:px-10",
          variant === "enablement"
            ? "pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20"
            : "py-14 sm:py-16 lg:py-20",
        ].join(" ")}
      >
        <Reveal className="overflow-visible">
          <article className="services-offering-detail-hero relative overflow-visible rounded-[1.75rem] border border-white/80 bg-white p-6 shadow-[0_20px_55px_rgba(15,23,42,0.09)] sm:p-8 lg:p-10">
            {config.mascot.anchor === "hero" && (
              <OfferingMascot
                placement={config.mascot.placement}
                message={config.mascot.message}
              />
            )}

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
              <div className="shrink-0">
                <OfferingIcon kind={config.icon} className="size-12 sm:size-14" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-[#3b6ef5]">
                  {label}
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-serif)] text-[clamp(1.85rem,3.8vw,2.75rem)] leading-[1.1] tracking-[-0.03em] text-[#0f172a]">
                  {title}
                </h2>
                <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-[#475569] sm:text-[16px]">
                  {summary}
                </p>
                {extra && <div className="mt-4">{extra}</div>}

                {cta && (
                  <div className="mt-6">
                    <Link
                      href={cta.href}
                      className="cta-cut inline-flex h-11 items-center justify-center bg-[#0f172a] px-6 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] text-white transition-all hover:bg-[#1e293b]"
                    >
                      {cta.label}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </article>
        </Reveal>

        <div
          className={[
            "mt-8 grid gap-5 md:grid-cols-3 md:gap-6 lg:mt-10 lg:items-start",
            variant === "products" ? "lg:pb-16" : "",
          ].join(" ")}
        >
          {DETAIL_BLOCKS.map((block, index) => (
            <Reveal key={block.key} delay={100 + index * 80} className={config.cardOffsets[index]}>
              <DetailCard
                title={block.title}
                items={lists[block.key]}
                offsetClass=""
                mascot={
                  config.mascot.anchor === "card" &&
                  index === (config.mascot.cardIndex ?? DETAIL_BLOCKS.length - 1) ? (
                    <OfferingMascot
                      placement={config.mascot.placement}
                      message={config.mascot.message}
                      compact={config.mascot.placement !== "mid-right"}
                    />
                  ) : undefined
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
