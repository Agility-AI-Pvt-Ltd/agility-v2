import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function SiteChrome({
  children,
  hideFooterCta = false,
}: {
  children: ReactNode;
  hideFooterCta?: boolean;
}) {
  return (
    <div className="flex min-h-full flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer hideCta={hideFooterCta} />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10 sm:py-20 lg:py-24">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-[3px] w-8 bg-[#3b6ef5]" aria-hidden="true" />
          <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
            {eyebrow}
          </p>
        </div>
        <h1 className="font-[family-name:var(--font-serif)] text-[clamp(2.1rem,5vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-white">
          {title}
        </h1>
        <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-white/60 sm:text-[16px] sm:leading-[1.7]">
          {description}
        </p>
      </div>
    </section>
  );
}
