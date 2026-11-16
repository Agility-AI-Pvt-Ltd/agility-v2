"use client";

import Image from "next/image";
import Link from "next/link";
import { BookCallButton } from "@/components/BookCallModal";
import {
  useCallback,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";
import Reveal from "@/components/about/Reveal";

type Theme = "purple" | "blue" | "green";

type DetailBlock = {
  title: string;
  icon: ReactNode;
  items: readonly string[];
};

type Offering = {
  id: string;
  number: string;
  theme: Theme;
  image: string;
  title: string;
  description: string;
  banner?: { icon: ReactNode; text: string };
  cta?: { label: string; href: string };
  details: DetailBlock[];
};

const THEME: Record<
  Theme,
  {
    label: string;
    iconBg: string;
    check: string;
    bannerBg: string;
    bannerText: string;
    highlightBg: string;
  }
> = {
  purple: {
    label: "text-[#7c3aed]",
    iconBg: "bg-[#ede9fe] text-[#7c3aed]",
    check: "text-[#7c3aed]",
    bannerBg: "bg-[#ede9fe]",
    bannerText: "text-[#6d28d9]",
    highlightBg: "bg-[#f5f3ff]",
  },
  blue: {
    label: "text-[#2563eb]",
    iconBg: "bg-[#dbeafe] text-[#2563eb]",
    check: "text-[#2563eb]",
    bannerBg: "bg-[#eff6ff]",
    bannerText: "text-[#1d4ed8]",
    highlightBg: "bg-[#eff6ff]",
  },
  green: {
    label: "text-[#16a34a]",
    iconBg: "bg-[#dcfce7] text-[#16a34a]",
    check: "text-[#16a34a]",
    bannerBg: "bg-[#ecfdf5]",
    bannerText: "text-[#15803d]",
    highlightBg: "bg-[#ecfdf5]",
  },
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        d="M3.5 8.2l2.4 2.4L12.5 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M5 5.5A2.5 2.5 0 017.5 3H18v16H7.5A2.5 2.5 0 005 16.5V5.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M7.5 3v16" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconPeople({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4 18c0-2.5 2.2-4 5-4s5 1.5 5 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="16.5" cy="9" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M14 18c.3-1.8 1.8-3 3.5-3 1.2 0 2.3.4 3 1.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconTarget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  );
}

function IconWrench({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M14.5 6.5a4.5 4.5 0 01-6.2 6.2L5 16l3 3 3.3-3.3a4.5 4.5 0 006.2-6.2l-2.1 2.1-1.4-1.4 2.1-2.1z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCube({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 4l7 4v8l-7 4-7-4V8l7-4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 12l7-4M12 12v8M12 12L5 8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconPlug({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M9 7V4M15 7V4M8 11h8v5a4 4 0 01-8 0v-5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBolt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M13 2L5 14h6l-1 8 8-12h-6l1-8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const OFFERINGS: Offering[] = [
  {
    id: "integration",
    number: "01",
    theme: "blue",
    image: "/assets/offerings/02_ai_integration.jpg",
    title: "AI Integration",
    description:
      "We connect AI to the tools your teams already use, so routine work runs on its own and people approve what matters.",
    banner: {
      icon: <IconPlug className="size-5" />,
      text: "No new dashboards. Promise.",
    },
    details: [
      {
        title: "Automation Sprint",
        icon: <IconBolt className="size-5" />,
        items: [
          "One workflow, mapped, automated and handed over.",
          "You leave with a working automation and a team that can run it.",
        ],
      },
      {
        title: "Custom AI Assistant",
        icon: <IconWrench className="size-5" />,
        items: [
          "An assistant built on your documents and processes, for your staff or your public.",
          "Every answer shows its source.",
        ],
      },
    ],
  },
  {
    id: "products",
    number: "02",
    theme: "green",
    image: "/assets/offerings/03_ai_products.jpg",
    title: "AI Products",
    description:
      "Ready-made tools you can start using without waiting on a custom project, shaped to how your organisation actually works.",
    banner: {
      icon: <IconBolt className="size-5" />,
      text: "Start using it this week!",
    },
    details: [
      {
        title: "Invoicely",
        icon: <IconCube className="size-5" />,
        items: [
          "Handles a company's accounting questions in one place: invoices, payments, and the works. Status: Live.",
        ],
      },
      {
        title: "AI Sales Agent",
        icon: <IconCube className="size-5" />,
        items: [
          "Finds and follows up leads, and drafts replies for your sales team to approve. Status: Live.",
        ],
      },
      {
        title: "HRMS",
        icon: <IconCube className="size-5" />,
        items: [
          "HR records, leave and attendance in one place, instead of three different logins nobody wants to open. Status: Live.",
        ],
      },
      {
        title: "Multilingual Voice Translator",
        icon: <IconCube className="size-5" />,
        items: ["Speak in one language, be heard in another. Status: Live."],
      },
      {
        title: "FutureX Fellowship platform",
        icon: <IconCube className="size-5" />,
        items: [
          "The learning platform behind the FutureX student programme, built for our parent company, Lyfshilp Academy. Status: Live.",
        ],
      },
      {
        title: "Edumaniax",
        icon: <IconCube className="size-5" />,
        items: [
          "Turns learning into something closer to a game, so it actually sticks instead of getting forgotten by Monday. Status: Live.",
        ],
      },
      {
        title: "Fairly Settled",
        icon: <IconCube className="size-5" />,
        items: [
          "Helps legal professionals get through long documents faster, with AI doing the first read so people can focus on the judgment calls that actually need a human. Status: Live.",
        ],
      },
    ],
  },
  {
    id: "enablement",
    number: "03",
    theme: "purple",
    image: "/assets/offerings/01_ai_enablement.jpg",
    title: "AI Enablement",
    description:
      "Hands-on training so your teams use what we build, and keep improving it.",
    cta: { label: "Book a corporate training", href: "/contact" },
    details: [
      {
        title: "AI Foundations Workshop",
        icon: <IconBook className="size-5" />,
        items: [
          "Start here.",
          "One day. Participants practise AI on their own work and leave with tasks they can repeat the next day.",
        ],
      },
      {
        title: "Role-based AI Programme or FDP",
        icon: <IconPeople className="size-5" />,
        items: [
          "Designed around one role or department.",
          "Participants leave with prompts, templates and one finished piece of real work.",
        ],
      },
      {
        title: "AI Champions",
        icon: <IconTarget className="size-5" />,
        items: [
          "We train a small internal group to train everyone else, so adoption does not depend on us.",
        ],
      },
      {
        title: "Annual Enablement Partnership",
        icon: <IconBook className="size-5" />,
        items: [
          "A year of training, new automations and support, reviewed every quarter against agreed measures.",
        ],
      },
    ],
  },
];

function OfferingDetailsBody({ offering }: { offering: Offering }) {
  const theme = THEME[offering.theme];

  return (
    <>
      <p className="text-[14px] leading-relaxed text-neutral-600 sm:text-[15px]">
        {offering.description}
      </p>

      {offering.banner && (
        <div
          className={[
            "mt-5 flex items-center gap-3 rounded-2xl px-4 py-3.5 sm:px-5",
            theme.bannerBg,
          ].join(" ")}
        >
          <span
            className={[
              "flex size-10 shrink-0 items-center justify-center rounded-xl",
              theme.iconBg,
            ].join(" ")}
          >
            {offering.banner.icon}
          </span>
          <p
            className={[
              "text-[15px] font-semibold leading-snug sm:text-[16px]",
              theme.bannerText,
            ].join(" ")}
          >
            {offering.banner.text}
          </p>
        </div>
      )}

      {offering.cta && (
        <div className="mt-5">
          <Link
            href={offering.cta.href}
            className="inline-flex h-11 w-full items-center justify-center rounded-full bg-neutral-950 px-5 text-[13px] font-medium text-white transition-colors hover:bg-neutral-800 sm:text-[14px]"
          >
            {offering.cta.label}
            <span className="ml-1.5" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      )}

      <div className="mt-7 space-y-6 border-t border-neutral-100 pt-6">
        {offering.details.map((block) => (
          <div key={block.title}>
            <div className="flex items-center gap-3">
              <span
                className={[
                  "flex size-9 shrink-0 items-center justify-center rounded-lg",
                  theme.iconBg,
                ].join(" ")}
              >
                {block.icon}
              </span>
              <h3 className="text-[14px] font-semibold text-neutral-900 sm:text-[15px]">
                {block.title}
              </h3>
            </div>
            <ul className="mt-3 space-y-2.5">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-[13px] leading-relaxed text-neutral-600 sm:text-[14px]"
                >
                  <CheckIcon
                    className={["mt-0.5 size-4 shrink-0", theme.check].join(" ")}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

function OfferingModal({
  offering,
  onClose,
}: {
  offering: Offering;
  onClose: () => void;
}) {
  const titleId = useId();
  const theme = THEME[offering.theme];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center overflow-hidden p-4 overscroll-none sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Close offering details"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex h-[min(92vh,820px)] w-full max-w-[560px] flex-col overflow-hidden rounded-[1.25rem] border border-neutral-200 bg-white shadow-2xl"
      >
        <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-neutral-100 sm:aspect-[16/8]">
          <Image
            src={offering.image}
            alt=""
            fill
            className="object-cover object-center"
            sizes="560px"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full bg-white/95 text-neutral-800 shadow-md transition-colors hover:bg-white"
            aria-label="Close"
          >
            <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
              <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div
          data-lenis-prevent
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 [-webkit-overflow-scrolling:touch] sm:px-6 sm:py-6"
        >
          <p
            className={[
              "font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.14em]",
              theme.label,
            ].join(" ")}
          >
            {offering.number} — Offering
          </p>
          <h2
            id={titleId}
            className="mt-2 font-[family-name:var(--font-serif)] text-[clamp(1.65rem,3.2vw,2.1rem)] leading-[1.12] tracking-[-0.02em] text-neutral-950"
          >
            {offering.title}
          </h2>
          <div className="mt-4">
            <OfferingDetailsBody offering={offering} />
          </div>
        </div>
      </div>
    </div>
  );
}

function OfferingCard({
  offering,
  index,
  onOpen,
}: {
  offering: Offering;
  index: number;
  onOpen: () => void;
}) {
  const theme = THEME[offering.theme];

  return (
    <article
      id={offering.id}
      className="scroll-mt-24 flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-neutral-200/80 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
    >
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-neutral-100">
        <Image
          src={offering.image}
          alt=""
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={index === 0}
        />
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-5 py-6 sm:px-6 sm:py-7">
        <p
          className={[
            "font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.14em]",
            theme.label,
          ].join(" ")}
        >
          {offering.number} — Offering
        </p>
        <h2 className="mt-2 min-h-[2.5em] font-[family-name:var(--font-serif)] text-[clamp(1.65rem,3.2vw,2rem)] leading-[1.12] tracking-[-0.02em] text-neutral-950">
          {offering.title}
        </h2>
        <p className="mt-3 min-h-[6.25rem] line-clamp-4 text-[14px] leading-relaxed text-neutral-600 sm:min-h-[6.75rem] sm:text-[15px]">
          {offering.description}
        </p>

        <button
          type="button"
          onClick={onOpen}
          className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-[13px] font-medium text-neutral-800 transition-colors hover:border-neutral-300 hover:bg-neutral-100"
        >
          View details
          <span aria-hidden="true">→</span>
        </button>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <BookCallButton className="inline-flex h-10 flex-1 items-center justify-center rounded-full bg-neutral-900 px-4 text-[12px] font-medium text-white transition-colors hover:bg-neutral-800">
            Book a call
          </BookCallButton>
          <Link
            href="/ai-maturity-check"
            className="inline-flex h-10 flex-1 items-center justify-center rounded-full border border-neutral-200 bg-white px-4 text-[12px] font-medium text-neutral-800 transition-colors hover:border-neutral-300"
          >
            Maturity check
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function OfferingsShowcase() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = OFFERINGS.find((o) => o.id === activeId) ?? null;

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash || !OFFERINGS.some((o) => o.id === hash)) return;
      setActiveId(hash);
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const closeModal = useCallback(() => {
    setActiveId(null);
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (OFFERINGS.some((o) => o.id === hash)) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <section className="relative border-b border-neutral-200 bg-[#f4f4f5]">
      <div className="mx-auto max-w-[1200px] px-6 py-14 sm:px-10 sm:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch lg:gap-6 xl:gap-8">
          {OFFERINGS.map((offering, index) => (
            <Reveal key={offering.id} delay={80 + index * 100} className="h-full">
              <OfferingCard
                offering={offering}
                index={index}
                onOpen={() => setActiveId(offering.id)}
              />
            </Reveal>
          ))}
        </div>
      </div>

      {active && <OfferingModal offering={active} onClose={closeModal} />}
    </section>
  );
}
