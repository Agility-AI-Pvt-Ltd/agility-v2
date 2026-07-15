import ContactCTA from "@/components/ContactCTA";
import SiteChrome, { PageHero } from "@/components/SiteChrome";

const details = [
  { label: "Email", value: "hello@agilityai.in", href: "mailto:hello@agilityai.in" },
  { label: "Entity", value: "Agility AI Pvt. Ltd." },
  {
    label: "Focus",
    value: "AI integration, adoption, and enablement",
  },
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
        title="Start with a brief—or book a call"
        description="Form is the primary path. Book-a-call is secondary but always visible. Share where AI should create leverage and we’ll respond with a clear next step."
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
