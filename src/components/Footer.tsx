import Link from "next/link";
import { BookCallButton } from "@/components/BookCallModal";
import {
  COMPANY_LEGAL_NAME,
  COMPANY_SUBHEADING,
  LYFSHILP_ACADEMY_NAME,
  LYFSHILP_ACADEMY_URL,
} from "@/lib/company";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "AI Maturity Check", href: "/ai-maturity-check" },
  { label: "Team", href: "/team" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

type FooterProps = {
  hideCta?: boolean;
};

export default function Footer({ hideCta = false }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      {!hideCta && (
        <div className="border-b border-white/10">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between md:px-14 lg:px-16 xl:px-20">
            <div>
              <p className="mt-2 font-[family-name:var(--font-serif)] text-[clamp(1.4rem,2.8vw,1.9rem)] tracking-[-0.02em] text-white">
                Ready when you are
              </p>
              <p className="mt-2 max-w-md text-[14px] text-white/50">
                Send us a brief or book a 20-minute call on WhatsApp with our
                programmes team.
              </p>
            </div>
            <BookCallButton className="cta-cut inline-flex h-11 items-center justify-center bg-white px-5 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.06em] text-black transition-all hover:bg-white/90">
              Book a Call
            </BookCallButton>
          </div>
        </div>
      )}

      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-10 sm:px-10 md:flex-row md:items-start md:justify-between md:px-14 lg:px-16 xl:px-20">
        <div>
          <p className="font-[family-name:var(--font-cursive)] text-4xl text-white">
            Agility AI
          </p>
          <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-white/45">
            {COMPANY_SUBHEADING}
          </p>
          <p className="mt-4 max-w-sm text-[12px] leading-relaxed text-white/40">
            {COMPANY_LEGAL_NAME} is a subsidiary of{" "}
            <Link
              href={LYFSHILP_ACADEMY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 underline-offset-2 transition-colors hover:text-white hover:underline"
            >
              {LYFSHILP_ACADEMY_NAME}
            </Link>
            . A {LYFSHILP_ACADEMY_NAME} company.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.14em] text-white/55 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-6 py-5 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.12em] text-white/35 sm:flex-row sm:items-center sm:justify-between sm:px-10 md:px-14 lg:px-16 xl:px-20">
          <p>
            © {new Date().getFullYear()} {COMPANY_LEGAL_NAME}
          </p>
          <p>Startup India · DIPP205863</p>
        </div>
      </div>
    </footer>
  );
}
