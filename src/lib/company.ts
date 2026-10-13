/** Company identity line used in footer, contact, and metadata. */
export const COMPANY_SUBHEADING =
  "Agility AI Pvt. Ltd. - a subsidiary of Lyfshilp Academy, an AI Enablement and Automation Company.";

export const COMPANY_LEGAL_NAME = "Agility AI Pvt. Ltd.";

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
