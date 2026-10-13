import { CONTACT_EMAIL } from "@/lib/company";

const PROGRAMMES_PHONE = "7042149608";
const PROGRAMMES_PHONE_HREF = "tel:+917042149608";
const PROGRAMMES_CONTACT = {
  name: "Bhawna Khorwal",
  role: "Head of Programmes",
} as const;

export default function AboutContactSection() {
  return (
    <section
      id="contact"
      className="about-contact relative overflow-hidden border-t border-white/10 bg-black text-white"
    >
      <div className="about-contact-grid" aria-hidden="true" />
      <div className="about-contact-orb about-contact-orb-a" aria-hidden="true" />
      <div className="about-contact-orb about-contact-orb-b" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-24">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-[3px] w-8 bg-[#3b6ef5]" aria-hidden="true" />
          <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
            Contact
          </p>
        </div>

        <h2 className="max-w-[22ch] font-[family-name:var(--font-serif)] text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.08] tracking-[-0.02em]">
          Got something stuck? Tell us what it is.
        </h2>
        <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-white/55 sm:text-[16px] sm:leading-[1.7]">
          We&apos;ll tell you straight whether AI is actually the fix, or
          whether you&apos;re chasing the wrong answer entirely.
        </p>

        <p className="mt-12 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-white/35">
          Pick your reason
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <a
            href={PROGRAMMES_PHONE_HREF}
            className="about-contact-card group"
          >
            <div className="about-contact-card-glow" aria-hidden="true" />
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.16em] text-[#3b6ef5]">
              Path 01
            </p>
            <h3 className="mt-4 font-[family-name:var(--font-serif)] text-[clamp(1.4rem,2.5vw,1.85rem)] leading-tight tracking-[-0.02em]">
              Book a corporate training
            </h3>
            <p className="mt-3 max-w-[36ch] text-[14px] leading-relaxed text-white/50">
              AI enablement for teams who need fluency in the work they already
              do — not another deck.
            </p>
            <div className="mt-8 space-y-1">
              <p className="text-[14px] font-medium text-white/85">
                {PROGRAMMES_CONTACT.name}
              </p>
              <p className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.12em] text-white/45">
                {PROGRAMMES_CONTACT.role}
              </p>
              <p className="font-[family-name:var(--font-geist-mono)] text-[12px] tracking-[0.08em] text-white/70 transition-colors group-hover:text-white">
                {PROGRAMMES_PHONE}
              </p>
            </div>
          </a>

          <a href={PROGRAMMES_PHONE_HREF} className="about-contact-card group">
            <div className="about-contact-card-glow" aria-hidden="true" />
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.16em] text-[#3b6ef5]">
              Path 02
            </p>
            <h3 className="mt-4 font-[family-name:var(--font-serif)] text-[clamp(1.4rem,2.5vw,1.85rem)] leading-tight tracking-[-0.02em]">
              Talk to sales
            </h3>
            <p className="mt-3 max-w-[36ch] text-[14px] leading-relaxed text-white/50">
              Integration builds, products, or a programme that mixes both —
              start with a straight conversation.
            </p>
            <div className="mt-8 space-y-1">
              <p className="text-[14px] font-medium text-white/85">
                {PROGRAMMES_CONTACT.name}
              </p>
              <p className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.12em] text-white/45">
                {PROGRAMMES_CONTACT.role}
              </p>
              <p className="font-[family-name:var(--font-geist-mono)] text-[12px] tracking-[0.08em] text-white/70 transition-colors group-hover:text-white">
                {PROGRAMMES_PHONE}
              </p>
            </div>
          </a>
        </div>

        <p className="mt-8 text-[13px] text-white/35">
          Or email{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-white/60 underline-offset-2 transition-colors hover:text-white hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
