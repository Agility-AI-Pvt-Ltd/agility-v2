export type FaqItem = {
  question: string;
  answer: string;
};

/** Answers with unresolved [CONFIRM] items are omitted until Shreya fills them. */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Will you sign an NDA?",
    answer: "Yes, before any data is shared.",
  },
  {
    question: "Will AI replace our staff?",
    answer:
      "Our work takes routine tasks off people's desks. People keep the decisions and approve every output that matters.",
  },
  {
    question: "What documents can you give us for procurement?",
    answer:
      "Our legal name, CIN, GSTIN, DPIIT certificate, a sample programme outline and our credentials pack. All are on the Contact page.",
  },
  {
    question: "Can we speak to a past client?",
    answer:
      "Yes. We arrange reference calls in your sector, with the client's consent.",
  },
  {
    question: "How does an engagement start?",
    answer:
      "With a 20-minute call. We then suggest the smallest first step, usually a one-day workshop or a single automation, so you see results before committing to more.",
  },
  {
    question:
      "What's the difference between AI enablement, AI integration, and AI products?",
    answer:
      "Enablement is hands-on training so your teams use what we build. Integration connects AI to the tools you already use. Products are ready-made tools you can start using without a full custom build. Most engagements involve more than one.",
  },
  {
    question: "How do I apply for a job at Agility AI?",
    answer:
      "Visit the Careers page, pick a role that fits, and apply directly through our HRMS. No separate account needed. We usually respond within a week.",
  },
];

export function buildFaqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
