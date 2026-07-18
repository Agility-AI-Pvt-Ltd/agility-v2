export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question:
      "What's the difference between AI enablement, AI integration, and AI products?",
    answer:
      "Enablement is about training your people to actually use AI in their daily work. Integration is about wiring AI into the systems you already run. Products are ready made tools you can start using without a custom build. Most engagements end up involving more than one of these at once.",
  },
  {
    question: "Will AI take my job?",
    answer:
      "Probably not AI itself. But someone at your company who's actually good with it might end up doing your job faster than you do, which is a more useful thing to worry about than robots. That's the entire point of AI enablement: making sure that person is you, not the colleague three desks over.",
  },
  {
    question: "I don't know how to code, can I still learn AI?",
    answer:
      "Yes. Using AI well in your daily work has almost nothing to do with writing code. Our enablement sessions are built for people who've never touched a line of code and just want the tools to actually work for them, not the other way around.",
  },
  {
    question: "My team isn't very tech savvy, will this actually work for us?",
    answer:
      "Most teams we've trained said the exact same thing before the first session. Tech savvy isn't the requirement. Being willing to try something new for an hour is.",
  },
  {
    question:
      "Will this disrupt everyone's work for days just to get trained?",
    answer:
      "No. A session runs half a day to a full day, not a week away from anyone's desk. We'd rather get your team using AI by Monday afternoon than pull them out of work for a week they'll end up resenting.",
  },
  {
    question:
      "What if we go through all this and people still don't end up using it?",
    answer:
      "That's exactly the problem enablement is built to prevent. Training that ends the moment the workshop does is why most AI rollouts quietly die by month three. We stay on for a short follow up window specifically so nobody gets abandoned the first time they hit a snag.",
  },
  {
    question:
      "Is our company's data safe once AI gets integrated into our systems?",
    answer:
      "Yes, and we treat that as a governance question, not an afterthought. Part of any integration engagement is making sure you actually know what your systems are doing with your data, not just hoping it's fine.",
  },
  {
    question: "What happens if something breaks after your team moves on?",
    answer:
      "You get a runbook your own people can actually read, not a black box only we understand. The entire point of how we work is that you stop needing us for the day to day, not the other way around.",
  },
  {
    question: "How do we prove to leadership that this was actually worth it?",
    answer:
      "Compare the time a task used to take against what it takes now. That number usually makes a more convincing case to a board than any slide we could hand you.",
  },
  {
    question: "What industries does Agility AI work with?",
    answer:
      "We've worked across dairy, FMCG, education, legal, and auditing, among others. The pattern repeats everywhere: too much manual work, not enough time to think it through. That's usually where we start.",
  },
  {
    question: "How much does AI enablement training cost?",
    answer:
      "Pricing depends on team size, format, and whether it's a single session or an ongoing programme. Book a call and we'll give you a straight answer rather than a placeholder quote.",
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
