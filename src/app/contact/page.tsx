import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";
import SiteChrome, { PageHero } from "@/components/SiteChrome";
import {
  BOOK_CALL_WHATSAPP_URL,
  COMPANY_CIN,
  COMPANY_GSTIN,
  COMPANY_LEGAL_NAME,
  COMPANY_REGISTERED_OFFICE,
  CONTACT_EMAIL,
  PROGRAMMES_CONTACT,
} from "@/lib/company";

export const metadata: Metadata = {
  title: { absolute: "Talk to us | Contact Agility AI" },
  description:
    "Tell us what you want to build or who you want to train. Book a call on WhatsApp or email us.",
  openGraph: {
    title: "Talk to us | Contact Agility AI",
    description:
      "Book a call on WhatsApp or email us for enablement, integration and products.",
  },
};

const details = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    label: "Phone and WhatsApp",
    value: `+91 ${PROGRAMMES_CONTACT.phoneDisplay.replace(/(\d{5})(\d{5})/, "$1 $2")}`,
    href: BOOK_CALL_WHATSAPP_URL,
  },
  {
    label: "Recognition",
    value: "DPIIT-recognised startup · DIPP205863",
  },
] as const;

export default function ContactPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Contact"
        title="Talk to us"
        description="Tell us what you want to build or who you want to train. Book a 20-minute call on WhatsApp with Bhawna, or email us."
      />

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto grid max-w-[1100px] gap-6 px-6 py-12 sm:grid-cols-3 sm:px-10">
          {details.map((item) => (
            <div key={item.label}>
              <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.16em] text-white/40">
                {item.label}
              </p>
              {"href" in item && item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-2 block text-[14px] text-white/80 transition-colors hover:text-white"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 text-[14px] text-white/80">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-white/10 bg-black text-white">
        <div className="mx-auto max-w-[1100px] px-6 py-14 sm:px-10 sm:py-16">
          <p className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.16em] text-[#3b6ef5]">
            For procurement officers
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-serif)] text-[clamp(1.5rem,3vw,2rem)] tracking-[-0.02em]">
            Everything you need for a file note, in one place.
          </h2>
          <ul className="mt-6 space-y-2 text-[14px] leading-relaxed text-white/70">
            <li>{COMPANY_LEGAL_NAME}</li>
            <li>CIN {COMPANY_CIN}</li>
            <li>GSTIN {COMPANY_GSTIN}</li>
            <li>Registered office: {COMPANY_REGISTERED_OFFICE}</li>
            <li>DPIIT-recognised startup · DIPP205863</li>
          </ul>
        </div>
      </section>

      <ContactCTA id="contact" tone="light" />
    </SiteChrome>
  );
}
