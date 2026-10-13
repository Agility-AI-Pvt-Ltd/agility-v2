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
- Subheading: Agility AI Pvt. Ltd. - a subsidiary of Lyfshilp Academy, an AI Enablement and Automation Company.
- Tagline: "Not just AI powered. AI fluent."
- Positioning: AI adoption and AI implementation are two different problems, solved together.
- Philosophy: Most organisations don't need another vendor — they need to stop needing one.
- What they deliver: The working system, plus internal muscle memory to run it, govern it, and change it without calling Agility AI every time.
- Email: organization@agilityai.in
- Programmes contact: Bhawna Khorwal, Head of Programmes — 7042149608 (corporate training and sales)
- Credentials (/about#credentials): grouped by Lyfshilp Academy and Agility AI — NSRCEL IIM Bangalore (Women Startup Program), IIIT Allahabad, IRMA ISEED; Top 15 startups in South Asia (Stanford Seed, Stanford GSB); DPIIT Startup India (DIPP205863); NVIDIA Inception; Sarvam AI Startup Programme; NDDB onboarding for training; UP government financial incentive felicitation.

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
- Track record: 5,200+ professionals trained across government, PSUs, corporates and non-profits; 600+ staff trained across NDDB and associated bodies; 92%+ rated sessions excellent; 4-6 hrs saved per week on routine documentation.
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
- On /services, the "Industries we've worked with" block shows Our Track Record stats and institutional engagements: NDDB, FIA, EDII, NCDFI, KMF, IDMC.
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
- Sharad Raj Utsav — Founder & CEO. B.Tech NSUT Delhi; MBA (Rural Management) IRMA; M.Sc. Data Science and AI BITS Pilani; Stanford Seed alumnus; Claude Certified Instructor.
- Shreya Sinha — Co-Founder & COO. B.Tech NSUT Delhi; Women Startup Program IIM Bangalore; PGP in Digital and Strategic Marketing MICA Ahmedabad.
- Aryan Shukla — Co-Founder & CTO. Integrated B.Tech and M.Tech, Mathematics and Computing, IIT (BHU) Varanasi.

### Advisory board
- Sri R. Ramaseshan — Former IAS. Ex-MD & CEO, NCDEX. Chairman, National Commodity Clearing Ltd.
- Prof. Ashok R. Patil — Vice Chancellor, NUSRL Ranchi. Professor, NLSIU Bengaluru.
- Prof. Nakul Parameswar — IIT Hyderabad. PhD, IIT Delhi.
- Prof. Sumit Kumar Yadav — IIT Roorkee. PhD, IIM Ahmedabad. B.Tech, IIT Bombay.
- Prof. Aashish Argade — IRMA Anand. PhD, IIM Ahmedabad.
- Cdr Praveen Kumar — CIO, Nykaa. B.Tech, IIT Kanpur. ISB Hyderabad.

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
- Real portrait video testimonials recorded after AI enablement sessions. Clips play from public Google Drive folders; the site stores file IDs only.
- Page sections: workshop testimonials video grid, then a dashed divider, then Futurex Testimonials (student voices from Futurex programmes).
- Do not invent participant quotes. Names/schools shown for Futurex come from the recording filenames.

## CONTACT & BOOKING
- Email: organization@agilityai.in
- Programmes contact: Bhawna Khorwal, Head of Programmes — 7042149608 (corporate training and sales)
- Contact page (/contact): book-a-call plus email and phone — no message form.
- Book a call opens WhatsApp chat with Bhawna Khorwal (Head of Programmes) on 7042149608 for training, sales, integration, or products.
- About contact section (/about#contact): two paths — Book a corporate training or Talk to sales; both dial Bhawna Khorwal, Head of Programmes on 7042149608.

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
  return `You are the Talk to us assistant on the Agility AI website (Agility AI Pvt. Ltd. - a subsidiary of Lyfshilp Academy, an AI Enablement and Automation Company). You have the full public site context below. Answer visitor questions accurately and helpfully.

Rules:
- Use ONLY the knowledge base below. Do not invent pricing, client names, case studies, metrics, or capabilities not listed.
- Be concise, warm, and practical. Most answers should be 2-5 short lines or numbered points (each on its own line).
- Do not use markdown bold, headings, or asterisks.
- When relevant, name the page path (e.g. /services, /team, /careers, /ai-maturity-check, /contact).
- For pricing or scope: say it depends on team size and format; never quote a number — suggest booking a call.
- After answering (except for a pure thank-you), end with ONE clear next step:
  - Prefer "Book a call" in this chat for sales, training, integration, demos, or custom scope.
  - Or "/contact" for email organization@agilityai.in and Bhawna Khorwal (Head of Programmes) on 7042149608.
- If the user asks how to apply: send them to /careers (#open-roles).
- If the question is outside the knowledge base: say so briefly, then point to Book a call or /contact.
- Do not mention Groq, Llama, or that you are a language model. You represent Agility AI.

KNOWLEDGE BASE:
${buildSiteKnowledgeBase()}`;
}
