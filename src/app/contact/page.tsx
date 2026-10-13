import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";
import SiteChrome, { PageHero } from "@/components/SiteChrome";
import {
  BOOK_CALL_WHATSAPP_URL,
  COMPANY_SUBHEADING,
  CONTACT_EMAIL,
  PROGRAMMES_CONTACT,
} from "@/lib/company";

export const metadata: Metadata = {
  title: { absolute: "Contact Agility AI | Book a Call or Email" },
  description:
    "Tell us where AI should create leverage. Book a call on WhatsApp, email organization@agilityai.in, or reach our programmes team directly.",
  openGraph: {
    title: "Contact Agility AI | Book a Call or Email",
    description:
      "Book a call on WhatsApp or email organization@agilityai.in for enablement, integration and products.",
  },
};

const details = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    label: "Book a call (WhatsApp)",
    value: `${PROGRAMMES_CONTACT.name} · ${PROGRAMMES_CONTACT.phoneDisplay}`,
    href: BOOK_CALL_WHATSAPP_URL,
  },
  { label: "About", value: COMPANY_SUBHEADING },
  {
    label: "Recognition",
    value: "Startup India · DIPP205863 · IRMA ISEED",
  },
] as const;

export default function ContactPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Contact"
        title="Book a call—or reach us directly"
        description="Tell us what you need. We reply within one working day — book a call on WhatsApp with Bhawna or use email below."
      />

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto grid max-w-[1100px] gap-6 px-6 py-12 sm:grid-cols-2 sm:px-10 lg:grid-cols-4">
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

      <ContactCTA id="contact" tone="light" />
    </SiteChrome>
  );
}
