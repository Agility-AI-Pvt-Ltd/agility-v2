export type RungLevel = 1 | 2 | 3 | 4 | 5;

export type Rung = {
  level: RungLevel;
  name: string;
  summary: string;
};

export const RUNGS: Rung[] = [
  {
    level: 1,
    name: "Unaware",
    summary:
      "AI hasn't seriously come up yet, or nobody's really using it.",
  },
  {
    level: 2,
    name: "Curious",
    summary:
      "A few people have tried it on their own, but there's no shared approach.",
  },
  {
    level: 3,
    name: "Piloting",
    summary:
      "One team uses it regularly for specific tasks, but it hasn't spread beyond them.",
  },
  {
    level: 4,
    name: "Adopted",
    summary:
      "Multiple teams use it as part of daily work, but you're still leaning on an outside vendor to keep it running.",
  },
  {
    level: 5,
    name: "Fluent",
    summary:
      "AI is folded into daily work, owned internally, and your own people can extend or fix it without calling anyone.",
  },
];

export type StoryChapter = {
  level: RungLevel;
  title: string;
  body: string;
  beat: string;
};

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    level: 1,
    title: "Chapter 1 — Unaware",
    beat: "Northfield Logistics · Year zero",
    body: "Leadership hasn't put AI on the agenda. A few people have heard about it in the news, but nobody's using it in their actual work. The first rung is quiet — and that's where most organisations start.",
  },
  {
    level: 2,
    title: "Chapter 2 — Curious",
    beat: "One warehouse manager tries ChatGPT",
    body: "A shift lead starts drafting route notes with ChatGPT. Two colleagues copy the habit. Useful, but informal — no shared approach, no training, and no one owns what happens next.",
  },
  {
    level: 3,
    title: "Chapter 3 — Piloting",
    beat: "Operations builds a proof of concept",
    body: "The ops team automates dispatch scheduling for one region. It works. Other departments hear about it, but they're still waiting for someone to show them how — the playbook lives in one team.",
  },
  {
    level: 4,
    title: "Chapter 4 — Adopted",
    beat: "AI spreads — the vendor holds the keys",
    body: "Finance, HR, and operations all use AI daily. When an integration breaks at month-end, the call goes straight to the outside vendor. Multiple teams depend on it, but nobody internally could fix it alone.",
  },
  {
    level: 5,
    title: "Chapter 5 — Fluent",
    beat: "Ownership moves inside",
    body: "Six months later, Northfield's own people run the stack, train new hires, and ship improvements without waiting on anyone else. AI isn't a project anymore — it's part of how work gets done.",
  },
];

export type QuizOption = {
  label: string;
  weight: RungLevel;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "ai-use",
    prompt: "How would you describe AI use in your organisation right now?",
    options: [
      { label: "It hasn't seriously come up yet", weight: 1 },
      { label: "A few people have tried it on their own", weight: 2 },
      { label: "One team uses it regularly for specific tasks", weight: 3 },
      { label: "Multiple teams use it as part of daily work", weight: 4 },
      { label: "AI is folded into daily work across the organisation", weight: 5 },
    ],
  },
  {
    id: "shared-approach",
    prompt:
      "Is there a shared approach, or is everyone figuring it out alone?",
    options: [
      { label: "Nobody's really using it yet", weight: 1 },
      { label: "Everyone's figuring it out alone", weight: 2 },
      { label: "One team has an approach, but it's not shared", weight: 3 },
      { label: "There's a shared approach across several teams", weight: 4 },
      { label: "Organisation-wide standards, owned internally", weight: 5 },
    ],
  },
  {
    id: "who-fixes",
    prompt: "If something in your AI setup broke tomorrow, who'd fix it?",
    options: [
      { label: "We don't have an AI setup", weight: 1 },
      { label: "No one internally — we'd be stuck", weight: 2 },
      { label: "We'd call our outside vendor", weight: 3 },
      { label: "Internal team for basics, vendor for complex", weight: 4 },
      { label: "Our own people would fix and extend it", weight: 5 },
    ],
  },
  {
    id: "training",
    prompt: "Has anyone actually been trained, or did they just pick it up?",
    options: [
      { label: "No training — it hasn't come up", weight: 1 },
      { label: "Self-taught, no formal training", weight: 2 },
      { label: "One team had a hands-on session", weight: 3 },
      { label: "Several teams have been trained", weight: 4 },
      { label: "Ongoing enablement built into how we work", weight: 5 },
    ],
  },
  {
    id: "team-spread",
    prompt: "How many teams or departments use AI in their actual workflow?",
    options: [
      { label: "None yet", weight: 1 },
      { label: "One or two individuals only", weight: 2 },
      { label: "One team or department", weight: 3 },
      { label: "Multiple teams", weight: 4 },
      { label: "Most departments in daily workflow", weight: 5 },
    ],
  },
];

export type ResultContent = {
  level: RungLevel;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export const RESULTS: ResultContent[] = [
  {
    level: 1,
    title: "Unaware",
    body: "You're at the starting line, and that's fine — everyone starts here. The first move isn't a big rollout. It's a single hands-on session for one team, so people see what this actually looks like in their own work before you commit to anything bigger.",
    ctaLabel: "Book a corporate training (AI Enablement)",
    ctaHref: "/services#enablement",
  },
  {
    level: 2,
    title: "Curious",
    body: "A few people are already trying things on their own, which is useful, but it isn't going anywhere without a shared approach. The next step is turning what one or two curious people are doing informally into a proper session the rest of the team can actually learn from.",
    ctaLabel: "Book a corporate training (AI Enablement)",
    ctaHref: "/services#enablement",
  },
  {
    level: 3,
    title: "Piloting",
    body: "One team has already proven this works. Now it's about spreading that playbook. Document what's actually working for that team, and give a second team the same starting point, rather than asking them to figure it out from scratch.",
    ctaLabel: "AI Enablement",
    ctaHref: "/services#enablement",
    secondaryLabel: "Explore AI Integration",
    secondaryHref: "/services#integration",
  },
  {
    level: 4,
    title: "Adopted",
    body: "Multiple teams are using this daily, which most companies never get to. The gap now is ownership: you're still leaning on an outside vendor to keep it running. The next step is integration work that hands the keys back to your own team, so you're not dependent on anyone else for the day to day.",
    ctaLabel: "AI Integration",
    ctaHref: "/services#integration",
  },
  {
    level: 5,
    title: "Fluent",
    body: "You've actually arrived. AI is folded into daily work, and your own people can run and extend it without calling anyone. From here, the conversation isn't about catching up — it's about what you build next, and whether a ready-made product could save you from building something from scratch.",
    ctaLabel: "AI Products",
    ctaHref: "/services#products",
  },
];

export function scoreToRungLevel(weights: number[]): RungLevel {
  if (weights.length === 0) return 1;
  const average =
    weights.reduce((sum, value) => sum + value, 0) / weights.length;
  const rounded = Math.round(average);
  return Math.min(5, Math.max(1, rounded)) as RungLevel;
}

export function getResultForLevel(level: RungLevel): ResultContent {
  return RESULTS.find((result) => result.level === level) ?? RESULTS[0];
}
