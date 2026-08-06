import { FAQ_ITEMS } from "@/lib/faq";

export const SITE_PAGES = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About", anchors: ["#faq", "#contact"] },
  { path: "/services", label: "Services", anchors: ["#enablement", "#integration", "#products", "#built-projects"] },
  { path: "/industries", label: "Industries" },
  { path: "/team", label: "Team and Advisors" },
  { path: "/careers", label: "Careers", anchors: ["#open-roles"] },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/ai-maturity-check", label: "AI Maturity Check" },
  { path: "/contact", label: "Contact", anchors: ["#contact", "#book-call"] },
] as const;

export function buildSiteKnowledgeBase() {
  const faqBlock = FAQ_ITEMS.map(
    (item) => `Q: ${item.question}\nA: ${item.answer}`,
  ).join("\n\n");

  const pagesBlock = SITE_PAGES.map((page) => {
    const anchors = "anchors" in page ? ` (${page.anchors.join(", ")})` : "";
    return `- ${page.label}: ${page.path}${anchors}`;
  }).join("\n");

  return `
## COMPANY OVERVIEW
- Legal entity: Agility AI Pvt. Ltd.
- Tagline: "Not just AI powered. AI fluent."
- Core promise: Agility AI helps organisations adopt, integrate and run AI in daily work, through AI enablement training, integration builds and ready to use AI products.
- Positioning: AI adoption and AI implementation are two different problems, solved together.
- Philosophy: Most organisations don't need another vendor — they need to stop needing one.
- What they deliver: The working system, plus internal muscle memory to run it, govern it, and change it without calling Agility AI every time.
- Email: hello@agilityai.in
- Focus: AI integration, adoption, and enablement.
- Recognition: Startup India (DIPP205863), IRMA ISEED Foundation incubator, CEO Sharad Raj Utsav selected for Stanford Seed programme (one of 100 ventures across South Asia).

## FOUR CAPABILITY PILLARS
- Strategy: Figure out where AI actually pays for itself, and where it's just noise.
- Enablement: Train your people to use what is built, so it doesn't sit unused in six months.
- Automation: Take repetitive work off your team's plate — properly, not as a demo.
- Governance: Know what your systems are doing before a regulator, client, or board asks.

## THREE OFFERINGS

### 1. AI Enablement (training)
- Summary: Teach employees to use AI in the work they're already doing — folded into their actual day, not as a separate skill.
- Includes: Live hands-on sessions around your team's actual tools; practice tied to real daily tasks; short follow-up window after the session.
- Who it's for: Teams where AI was rolled out but nobody uses it; orgs launching AI tools who want people ready before day one; anyone tired of training decks that get forgotten.
- Outcomes: Team using AI in real workflow without reminders; fewer questions to IT; tasks that took an afternoon now take twenty minutes.
- Session length: Half a day to a full day — not a week away from desks.
- Track record: 120+ AI enablement sessions across industries.
- CTA path: /contact?intent=training or book a call with interest "AI Enablement".

### 2. AI Integration
- Summary: Wire AI into systems you already use — works quietly in the background, not another tab or dashboard.
- Includes: Audit of current systems; integration plan around existing stack (not a rebuild); actual build tested against how your team works; runbook your own people can read.
- Who it's for: Orgs with real working systems AI needs to plug into; teams burned by vendors who dropped a black box and left.
- Outcomes: AI running inside tools your team already opens; no new login; system your own people can maintain and adjust.
- Data safety: Governance is part of every integration — you know what systems do with your data.
- CTA path: /contact?intent=sales or book a call with interest "AI Integration".

### 3. AI Products
- Summary: Ready-made tools you can start using without a custom build — configured to how your organisation works.
- Includes: Direct access to a working product (not a pilot); onboarding support; configuration to fit your operations.
- Who it's for: Teams that need something working now, not in a quarter, without a fully bespoke build.
- Outcomes: Tool your team is using within a week.
- CTA path: /contact?intent=sales or book a call with interest "AI Products".

## BUILT PRODUCTS / PROJECTS
- FutureX Fellowship: AI mentorship platform for student entrepreneurs building real ventures.
- Invoicely: Handles accounting questions in one place — invoices, payments, etc.
- Edumaniax: Turns learning into something closer to a game so it sticks.
- Fairly Settled: Helps legal professionals get through long documents faster; AI does first read.
- HRMS: One place for hiring, attendance, and reimbursements.

## HOW ENGAGEMENTS WORK
1. Discovery — short conversation to understand what's actually stuck.
2. Build or train — scoped to something your team can absorb, not a six-month roadmap nobody reads.
3. Handover — documentation your own people can use; defined point where you stop needing Agility AI day-to-day.

## INDUSTRIES SERVED
- Explicitly worked with: dairy, FMCG, education, legal, auditing, among others.
- Common pattern: too much manual work, not enough time to think.
- Sector approaches on /industries:
  - Dairy/Cooperative: enablement + automation in procurement, quality, member services, planning.
  - Education: AI literacy + systems for learning support, knowledge work, admin load with governance.
  - Enterprise/Corporate: align adoption and implementation; prioritise use cases; ship into real stacks.
  - Flexible/Emerging: dual-track programme shaped to pace and risk.
- Also relevant: financial services, healthcare, manufacturing, public sector, professional services, retail & commerce.
- Don't see your sector? Dual-track model still applies — they'll tailor framing with you.

## TEAM

### Founding team
- Sharad Raj Utsav — Director and CEO. B.Tech NSUT Delhi; MBA Rural Management IRMA Anand; advanced Data Science/AI BITS Pilani; Stanford Seed. Leads vision, strategy, institutional partnerships.
- Shreya Sinha — Director and COO. B.Tech NSUT Delhi; PGP Digital Marketing MICA Ahmedabad; ~6 years Piramal Pharma Solutions; ~2 years Piramal Foundation (rural schools Rajasthan). Leads operations, programme design, stakeholder experience.
- Aryan Shukla — Co-Founder and CTO. Integrated B.Tech/M.Tech Math & Computing IIT (BHU) Varanasi; ~3 years ML Engineer Samsung Research Delhi. Owns tech stack, AI systems, automation pipelines.

### Advisory board
- Sri R. Ramaseshan — Former IAS; former MD/CEO NCDEX; policy/governance.
- Prof. Nakul Parameswar — Asst Prof Strategic Management & Entrepreneurship, IIT Hyderabad — org adoption research.
- Prof. Sumit Kumar Yadav — Asst Prof IIT Roorkee; PhD IIM Ahmedabad — institutional/strategy.
- Prof. Aashish Argade — Asst Prof IRMA Anand; PhD IIM Ahmedabad — rural/institutional systems.
- Prof. Ashok R. Patil — Vice Chancellor NUSRL Ranchi; former Professor NLSIU Bengaluru — legal/policy.

## CAREERS / HIRING
- Culture: Small team, real ownership. What you build goes live. Work directly with founders. Things shipped this month are usually live next month.
- Not for people who want to be told exactly what to do every day.
- Hiring process (4 steps): (1) Tell us about yourself and what you'd want to build, (2) 20-minute call — no trick questions, (3) small trial task, (4) decision usually within a week.
- Open roles: listed on /careers (#open-roles), apply directly through HRMS — no separate account needed.
- No matching role? Still reach out via /contact and say what you'd want to build.

## AI MATURITY CHECK (/ai-maturity-check)
- Five quick questions, about one minute, to find where your organisation sits on the AI maturity ladder.
- Five rungs:
  1. Unaware — AI hasn't seriously come up or nobody uses it.
  2. Curious — a few people tried it; no shared approach.
  3. Piloting — one team uses it regularly; hasn't spread.
  4. Adopted — multiple teams use it daily; still leaning on outside vendor.
  5. Fluent — AI folded into daily work, owned internally; own people can extend/fix it.
- Recommended next steps by rung:
  - Unaware/Curious → AI Enablement (/services#enablement)
  - Piloting → AI Enablement + optional Integration
  - Adopted → AI Integration (/services#integration)
  - Fluent → AI Products (/contact)

## TESTIMONIALS (/testimonials)
- Real video testimonials from AI enablement sessions.
- Common themes: teams going from AI curious to AI fluent; enablement built around real daily tools not generic decks; hands-on sessions that stick; afternoon tasks now take twenty minutes; AI living inside workflow not as side experiment.

## CONTACT & BOOKING
- Email: hello@agilityai.in
- Contact page (/contact): form is primary path; book-a-call is secondary.
- Book a call interests: AI Enablement, AI Integration, AI Products, Not sure yet.
- Book a call flow: share details → team confirms a time by email.
- About contact section (/about#contact): two paths — corporate training (/contact?intent=training) or sales (/contact?intent=sales).

## PRICING
- No fixed prices published on the website.
- Enablement pricing depends on team size, format, and whether it's a single session or ongoing programme.
- Always suggest booking a call for a straight answer rather than inventing a quote.
- ROI proof: compare time a task used to take vs what it takes now.

## PROOF / ROI FRAMING
- Example: same question ("Who needs a follow-up this week?") — 6 hours by hand vs 20 minutes with Agility AI.
- Time saved calculator on /services assumes 65% reduction in time on repetitive tasks (placeholder estimate, not a published client outcome).

## SITE PAGES (for directing users)
${pagesBlock}

## FULL FAQ
${faqBlock}
`.trim();
}

export function buildChatSystemPrompt() {
  return `You are the website assistant for Agility AI (Agility AI Pvt. Ltd.). You answer questions about the company, services, team, careers, industries, products, AI maturity check, contact, and anything on the Agility AI website.

Rules:
- Answer ONLY using the knowledge base below. Do not invent pricing, client names, case studies, or capabilities not listed.
- Be concise, expressive, and friendly. Prefer very short replies.
- Format most answers as 2-4 short points, with each point on its own new line.
- Do not use markdown bold, headings, or asterisks. Simple numbered points like "1. ...", "2. ..." are allowed and preferred when listing things.
- When relevant, mention the page they can visit (e.g. /services, /careers, /ai-maturity-check).
- For pricing: say it depends on scope and suggest booking a call — never make up numbers.
- For booking or contact requests: confirm you can help and mention book a call or hello@agilityai.in.
- If the question is outside the knowledge base: say you're not sure, suggest booking a call or the contact form, and offer to help with services, team, careers, or the maturity check instead.
- Do not mention that you are an AI model, Groq, or Llama. You represent Agility AI.

KNOWLEDGE BASE:
${buildSiteKnowledgeBase()}`;
}
