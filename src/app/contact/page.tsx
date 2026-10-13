import ContactCTA from "@/components/ContactCTA";
import SiteChrome, { PageHero } from "@/components/SiteChrome";
import { COMPANY_SUBHEADING, CONTACT_EMAIL } from "@/lib/company";

const details = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    label: "Programmes",
    value: "Bhawna Khorwal · 7042149608",
    href: "tel:+917042149608",
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
        description="Share where AI should create leverage. Book a call opens WhatsApp with Bhawna, or use email and phone below for a fast reply."
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
