/** Company identity line used in footer, contact, and metadata. */
export const COMPANY_SUBHEADING =
  "Agility AI Pvt. Ltd. — a subsidiary of Lyfshilp Academy, an AI enablement and automation company.";

export const COMPANY_LEGAL_NAME = "Agility AI Pvt. Ltd.";

export const LYFSHILP_ACADEMY_NAME = "Lyfshilp Academy";

/** Override with NEXT_PUBLIC_LYFSHILP_URL if needed. */
export const LYFSHILP_ACADEMY_URL =
  process.env.NEXT_PUBLIC_LYFSHILP_URL?.trim() || "https://www.lyfshilp.com/";

/** Parent company logo (About credentials diagram, footer lock-up). */
export const LYFSHILP_ACADEMY_LOGO = "/assets/credentials/group/lyfshilp.png";

export const PARENT_COMPANY_BLURB =
  "Agility AI is the AI automation arm of Lyfshilp Academy, an AI enablement company working with government, corporates, institutions, schools and social enterprises. Lyfshilp trains people to use AI; Agility AI builds the systems they use it in.";

export const CONTACT_EMAIL = "organization@agilityai.in";

export const PROGRAMMES_CONTACT = {
  name: "Bhawna Khorwal",
  role: "Head of Programmes",
  phoneDisplay: "7042149608",
  phoneE164: "917042149608",
} as const;

const BOOK_CALL_WHATSAPP_MESSAGE =
  "Hi Bhawna, I'd like to book a call with Agility AI.";

/** Opens WhatsApp chat with Bhawna (programmes & sales). */
export const BOOK_CALL_WHATSAPP_URL = `https://wa.me/${PROGRAMMES_CONTACT.phoneE164}?text=${encodeURIComponent(BOOK_CALL_WHATSAPP_MESSAGE)}`;
