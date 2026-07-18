"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../../public/new_logo.png";

const navLinks = [
  { label: "AI Maturity Check", href: "/ai-maturity-check" },
  { label: "Services", href: "/services" },
  // { label: "Industries", href: "/industries" },
  { label: "Testimonial", href: "/testimonials" },
  { label: "Team and Advisors", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "About", href: "/about" },
  // { label: "Contact", href: "/contact" },
] as const;

function Logo() {
  return (
    <a
      href="/"
      aria-label="Home"
      className="relative z-50 flex shrink-0 items-center overflow-hidden rounded-sm transition-transform duration-300 hover:scale-[1.03] active:scale-95"
    >
      <Image
        src={logo}
        alt="Agility AI"
        width={72}
        height={72}
        priority
        unoptimized
        className="size-11 object-contain sm:size-12"
      />
    </a>
  );
}

function Divider() {
  return (
    <span
      aria-hidden="true"
      className="mx-1 h-3.5 w-px shrink-0 bg-white/25 sm:mx-1.5"
    />
  );
}

function NavLinkItem({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="px-0.5 text-[12px] font-medium uppercase tracking-[0.04em] text-white/90 transition-colors duration-200 hover:text-white xl:px-1 xl:text-[13px]"
    >
      {label}
    </a>
  );
}

function HamburgerButton({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="relative z-50 flex size-10 items-center justify-center rounded-md transition-colors duration-300 hover:bg-white/10 lg:hidden"
    >
      <span className="relative block h-3.5 w-[18px]">
        <span
          className={[
            "absolute left-0 block h-[1.5px] w-full origin-center rounded-full bg-white transition-all duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "top-[6px] rotate-45" : "top-0 rotate-0",
          ].join(" ")}
        />
        <span
          className={[
            "absolute left-0 top-[6px] block h-[1.5px] w-full rounded-full bg-white transition-all duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100",
          ].join(" ")}
        />
        <span
          className={[
            "absolute left-0 block h-[1.5px] w-full origin-center rounded-full bg-white transition-all duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "top-[6px] -rotate-45" : "top-[12px] rotate-0",
          ].join(" ")}
        />
      </span>
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="relative z-40 w-full border-b border-white/10 bg-black font-[family-name:var(--font-geist-mono)]">
      <nav className="relative z-50 mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3 lg:gap-5">
          <Logo />

          <div className="hidden items-center lg:flex">
            {navLinks.map((link, index) => (
              <div key={link.label} className="flex items-center">
                {index > 0 && <Divider />}
                <NavLinkItem label={link.label} href={link.href} />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#get-started"
            className="cta-cut inline-flex h-9 items-center justify-center bg-white px-3.5 text-[12px] font-medium uppercase tracking-[0.04em] text-black transition-all duration-300 hover:bg-white/90 active:scale-[0.98]"
          >
            Get Started
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#get-started"
            className={[
              "cta-cut inline-flex h-8 items-center justify-center bg-white px-3 text-[11px] font-medium uppercase tracking-[0.04em] text-black transition-all duration-300 hover:bg-white/90",
              open ? "pointer-events-none scale-95 opacity-0" : "opacity-100",
            ].join(" ")}
          >
            Get Started
          </a>
          <HamburgerButton open={open} onToggle={() => setOpen((v) => !v)} />
        </div>
      </nav>

      {/* Mobile overlay + panel */}
      <div
        className={[
          "fixed inset-0 z-30 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
          className={[
            "absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        <div
          className={[
            "absolute inset-x-0 top-0 origin-top border-b border-white/10 bg-black px-4 pb-6 pt-[4.5rem] shadow-[0_24px_60px_rgba(0,0,0,0.45)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6",
            open
              ? "translate-y-0 scale-y-100 opacity-100"
              : "pointer-events-none -translate-y-3 scale-y-[0.96] opacity-0",
          ].join(" ")}
        >
          <ul className="flex flex-col">
            {navLinks.map((link, index) => {
              const delay = open ? `${80 + index * 45}ms` : "0ms";

              return (
                <li
                  key={link.label}
                  style={{ transitionDelay: delay }}
                  className={[
                    "border-b border-white/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0",
                  ].join(" ")}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3.5 text-[15px] font-medium uppercase tracking-[0.06em] text-white transition-colors hover:text-white/60"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div
            style={{ transitionDelay: open ? "420ms" : "0ms" }}
            className={[
              "mt-5 flex flex-col gap-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
            ].join(" ")}
          >
            <a
              href="#get-started"
              onClick={() => setOpen(false)}
              className="cta-cut inline-flex h-11 w-full items-center justify-center bg-white text-[13px] font-medium uppercase tracking-[0.05em] text-black transition-all duration-300 hover:bg-white/90"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
