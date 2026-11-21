/** Company identity line used in footer, contact, and metadata. */
/** Meta / OG / Twitter description. Do not add headcount claims here until Shreya verifies 6,300+. */
export const COMPANY_SUBHEADING =
  "We build AI automations and assistants into your workflows and train your teams to run them. For government, corporates, institutions and social enterprises.";

export const COMPANY_LEGAL_NAME = "Agility AI Private Limited";

export const COMPANY_CIN = "U62099UP2025PTC215093";

export const COMPANY_GSTIN = "09ABBCA9983H1Z5";

export const COMPANY_REGISTERED_OFFICE = "Ghaziabad, Uttar Pradesh";

export const VALUE_PROPOSITION =
  "We build AI into your workflows, then train your people to run it.";

export const LYFSHILP_ACADEMY_NAME = "Lyfshilp Academy";

/** Override with NEXT_PUBLIC_LYFSHILP_URL if needed. */
export const LYFSHILP_ACADEMY_URL =
  process.env.NEXT_PUBLIC_LYFSHILP_URL?.trim() || "https://www.lyfshilp.com/";

/** Parent company logo (About credentials diagram, footer lock-up). */
export const LYFSHILP_ACADEMY_LOGO = "/assets/credentials/group/lyfshilp.png";

export const PARENT_COMPANY_BLURB =
  "Agility AI is the AI automation arm of Lyfshilp Academy, an AI enablement company working with government, corporates, institutions, schools and social enterprises. Lyfshilp trains people to use AI; Agility AI builds the systems they use it in.";

export const CONTACT_EMAIL = "organisation@agilityai.in";

export const PROGRAMMES_CONTACT = {
  name: "Bhawna Khorwal",
  role: "Head of Programs",
  phoneDisplay: "7042149608",
  phoneE164: "917042149608",
} as const;

const BOOK_CALL_WHATSAPP_MESSAGE =
  "Hi Bhawna, I'd like to book a call with Agility AI.";

/** Opens WhatsApp chat with Bhawna (programmes & sales). */
export const BOOK_CALL_WHATSAPP_URL = `https://wa.me/${PROGRAMMES_CONTACT.phoneE164}?text=${encodeURIComponent(BOOK_CALL_WHATSAPP_MESSAGE)}`;
