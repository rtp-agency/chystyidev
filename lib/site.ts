export const stats = [
  { value: 99, prefix: "", suffix: "%+", label: "Maximum reduction in AI running costs" },
  { value: 30, prefix: "$", suffix: "K+", label: "Annual client AI infrastructure costs eliminated" },
  { value: 4, prefix: "", suffix: "", label: "Production AI systems in active commercial use" },
];

// Scrolling credibility strip under the hero.
export const marqueeTech = [
  "Multi-agent LLM",
  "FastAPI",
  "React",
  "ComfyUI",
  "Whisper",
  "Gemini",
  "Vertex AI",
  "Qdrant",
  "Wan 2.2",
  "FFmpeg",
  "Docker",
  "PostgreSQL",
  "Celery",
  "Redis",
];

export type Offer = {
  num: string;
  name: string;
  promise: string;
  problem: string;
  does: string[];
  metric: string;
  metricLabel: string;
  visual: "cost" | "reliability";
};

export const offers: Offer[] = [
  {
    num: "01",
    name: "AI Cost Optimization",
    promise: "Slash what you spend running AI — without giving up quality.",
    problem: "Most teams overpay for AI by 5–50× and never measure where.",
    does: [
      "Audit your AI stack for waste",
      "Swap costly pieces for cheaper equals",
      "Prove the savings in real numbers",
      "Ship it and keep it tuned",
    ],
    metric: "80–99%",
    metricLabel: "lower AI cost",
    visual: "cost",
  },
  {
    num: "02",
    name: "AI Reliability Engineering",
    promise: "Make your AI behave on the complex work where it breaks.",
    problem: "Brilliant in a demo, then hallucinations and drift at scale.",
    does: [
      "Map where your AI fails",
      "Re-architect into focused steps",
      "Add verification that catches errors",
      "Build guardrails for consistent output",
    ],
    metric: "−90%",
    metricLabel: "fewer errors",
    visual: "reliability",
  },
];

export const process = [
  {
    num: "01",
    title: "Audit",
    icon: "scan" as const,
    body: "I map where your AI fails and overspends — with real numbers.",
  },
  {
    num: "02",
    title: "Architect",
    icon: "graph" as const,
    body: "I design a leaner, reliable stack that hits your quality bar.",
  },
  {
    num: "03",
    title: "Ship & prove",
    icon: "check" as const,
    body: "I build it, ship to production, and prove the before/after.",
  },
];

// /agencies — the productized service presented as a three-step process.
export const agencyProcess = [
  {
    num: "01",
    title: "Audit",
    icon: "scan" as const,
    body: "Free, 30 minutes. I map your process and show what's automatable and the projected savings.",
  },
  {
    num: "02",
    title: "Build",
    icon: "graph" as const,
    body: "Fixed-scope, typically 2–4 weeks. Built on open-source models — no premium API markup.",
  },
  {
    num: "03",
    title: "Run",
    icon: "check" as const,
    body: "Managed service on my infrastructure. You send source files, you get finished videos back.",
  },
];

// /agencies proof bar — every figure is backed by a published case study.
export const agencyStats = [
  { number: "~3 min", label: "Per video — was ~1 hour" },
  { number: "99%+", label: "Cost cut vs proprietary AI" },
  { number: "<$1", label: "Per localized video" },
  { number: "5", label: "Systems in production" },
];

// /agencies FAQ — answers long-tail agency queries for organic search, and
// feeds FAQPage structured data. Plain text only (reused verbatim in JSON-LD).
// Every claim maps to a published case number; no invented metrics, no pricing
// beyond figures already public on the site.
export const agencyFaq = [
  {
    q: "What kind of video editing can actually be automated?",
    a: "The repetitive, per-video work: cleanup (removing silences, filler words, coughs and repeated or stumbled lines, with human approval), cropping and reframing, presenter-bubble repositioning, subtitle generation, lipsync and localization into other languages, bulk editing of templated formats, and render plus delivery. Anything that follows a consistent spec across many videos is a candidate.",
  },
  {
    q: "How much editing time does automation actually save?",
    a: "For Black Camel Productions, a London video agency, roughly an hour of hands-on Premiere Pro editing per lesson video became about three minutes of automated processing, with rendering roughly 2× faster after Apple Silicon optimisation. The exact saving depends on your workflow — the free audit estimates it for your content.",
  },
  {
    q: "Is this cheaper than the AI video tools we already pay for?",
    a: "Usually, yes. The pipelines are built on open-source models running on my own infrastructure, so there's no premium API markup. In production cases this has meant 84–99%+ lower cost than proprietary video AI, and localized video produced for under $1 per 20-minute output.",
  },
  {
    q: "Do we have to hire anyone or manage servers?",
    a: "No. On the Run tier it's a managed service: the pipeline runs on my infrastructure, you send source files in bulk and receive finished, brand-consistent videos back. No hiring, no GPUs, no ops on your side.",
  },
  {
    q: "Will automated edits match our brand and quality standard?",
    a: "Yes. Brand geometry — framing, spacing, layout and the presenter overlay — is reproduced to the pixel from your own presets and reference videos, which removes the editor-to-editor drift you get with manual editing. Content cuts like silence, filler and repeated-line removal are proposed automatically but approved by a human before anything is delivered.",
  },
  {
    q: "How long does it take to set up, and how do we start?",
    a: "It starts with a free 30-minute workflow audit that maps your current process and shows exactly what can be automated and the projected savings. If it's a fit, the Build stage is fixed-scope and typically takes 2–4 weeks before the pipeline goes into production.",
  },
  {
    q: "What kinds of agencies is this for?",
    a: "Creative, video and content production agencies with repetitive, high-volume editing — for example course and lesson content, UGC ads, and other templated video formats. If your editors spend hours on the same kind of edit again and again, it's a good fit.",
  },
];

// /agencies — repetitive agency workflows, framed input → output (X → Y).
export const agencyAutomations = [
  "Raw recordings → export-ready cuts",
  "Messy takes → clean audio (silences, fillers, stumbles removed)",
  "One video → N languages, lip-synced",
  "One asset → dozens of variants",
  "Finished edits → rendered & delivered, at batch scale",
];

// `kind` drives the case card's category accent + motif + tag label.
export type WorkKind = "video" | "cost" | "pipeline" | "saas";

export type WorkItem = {
  slug: string;
  number: string;
  title: string;
  meta: string[];
  summary: string;
  highlights: { number: string; label: string }[];
  tech: string;
  costBar?: { reduction: string; afterPct: number };
  kind: WorkKind;
};

// Flagship result — leads the grid.
export const threadsCard: WorkItem = {
  slug: "threads-content-engine",
  number: "01 — Autonomous Content Engine",
  title: "1.3M+ views and 2,500+ followers in five days",
  meta: ["Autonomous content system", "Threads", "Live in production"],
  summary:
    "An autonomous system that generates on-voice posts with realistic visuals, publishes to Threads on one-tap approval, and learns what converts. Off a standing-still account.",
  highlights: [
    { number: "1.3M+", label: "Views in the first 5 days" },
    { number: "2,500+", label: "New followers in 5 days" },
  ],
  tech: "Python · FastAPI · Celery · pgvector · LLM ensemble",
  kind: "pipeline",
};

// Managed agency case — leads the /agencies grid. No pricing figures.
export const blackCamelCard: WorkItem = {
  slug: "black-camel",
  number: "02 — Black Camel Productions",
  title: "~1 hour of manual editing per video → ~3 minutes automated",
  meta: ["Managed service", "London video production agency", "25+ videos processed"],
  summary:
    "A managed pipeline for a London video agency: raw lesson recordings in, finished brand-consistent videos out. AI cleanup, pixel-accurate reframing, human approval on cuts.",
  highlights: [
    { number: "~3 min", label: "Automated processing (was ~1 hr manual)" },
    { number: "25+", label: "Videos processed, built for hundreds" },
  ],
  tech: "Python · FFmpeg · OpenCV · Whisper · Gemini",
  kind: "video",
};

// Case studies, ordered cost-first (most relevant proof for the primary visitor first).
export const work: WorkItem[] = [
  threadsCard,
  blackCamelCard,
  {
    slug: "open-source-lipsync",
    number: "03 — Lipsync System",
    title: "99%+ cost reduction vs premium video AI",
    meta: ["Solo Developer", "6+ months in production", "3+ commercial deployments"],
    summary:
      "Replaced a premium proprietary video AI service at $3–5 per minute with a custom ComfyUI workflow built on Infinity Talk and Wan 2.1. Per-video costs dropped from dollars to cents.",
    highlights: [
      { number: "99%+", label: "Cost reduction vs proprietary API" },
      { number: "6+ mo", label: "Continuous production use" },
    ],
    tech: "ComfyUI · Infinity Talk · Wan 2.1 · Docker",
    costBar: { reduction: "99%+", afterPct: 2 },
    kind: "cost",
  },
  {
    slug: "motion-control",
    number: "04 — Motion Control Workflow",
    title: "84% cost reduction with capability premium services can't match",
    meta: ["Solo Developer", "4–5 months active production", "2 commercial clients"],
    summary:
      "Replaced premium proprietary motion-control video services with a custom ComfyUI workflow on Wan 2.2. Approximately $12,000 in annual savings at the client's production scale.",
    highlights: [
      { number: "84%", label: "Cost reduction at production scale" },
      { number: "~$12K", label: "Annual savings per client" },
    ],
    tech: "ComfyUI · Wan 2.2 · RunningHub · FFmpeg",
    costBar: { reduction: "84%", afterPct: 16 },
    kind: "cost",
  },
  {
    slug: "video-localization",
    number: "05 — Video Localization Pipeline",
    title: "Multi-model AI pipeline for video localization at scale",
    meta: ["Solo Developer", "3 months active production"],
    summary:
      "Architected a complex multi-model AI pipeline combining semantic embedding generation, self-hosted speech transcription, LLM-based script rewriting, and multi-language voice synthesis.",
    highlights: [
      { number: "< $1", label: "Per 20-minute video produced" },
      { number: "4+", label: "AI services orchestrated" },
    ],
    tech: "Vertex AI · Whisper · Gemini · Qdrant",
    kind: "pipeline",
  },
  {
    slug: "metra-ai",
    number: "06 — Metra AI",
    title: "Production SaaS for Telegram content automation",
    meta: ["Founding Engineer", "Live in production", "metra-ai.org"],
    summary:
      "Solo-built end-to-end SaaS platform automating content creation for Telegram channels. Architected multi-agent LLM orchestration with cross-verification that prevents typical AI failures.",
    highlights: [
      { number: "3 months", label: "Solo development to launch" },
      { number: "16", label: "Docker containers in production" },
    ],
    tech: "FastAPI · React · PostgreSQL · Multi-agent LLM",
    kind: "saas",
  },
];

// /agencies case list — a tight, on-ICP trio: the flagship editing-automation
// case, then lipsync and localization (editing → localization → scale). Motion
// Control and Metra AI are less relevant here and stay on the homepage only.
// Renumbered 01–03 for this page, independent of the homepage grid numbers.
export const agencyWork: WorkItem[] = [
  blackCamelCard,
  work.find((w) => w.slug === "open-source-lipsync")!,
  work.find((w) => w.slug === "video-localization")!,
].map((c, i) => ({
  ...c,
  number: `${String(i + 1).padStart(2, "0")}${c.number.slice(
    c.number.indexOf(" — ")
  )}`,
}));

export const additional = [
  {
    title: "AI Reels Pipeline & Content Generation Bot",
    body: "Industrial-scale content automation (target 100+ videos/hour) combining motion-control workflows with automated image variation pipelines.",
  },
  {
    title: "Multi-Tenant Bot Platform — Financial Services",
    body: "Multi-tenant Telegram bot infrastructure with strict tenant isolation, a sub-bot provisioning system, and multi-currency transaction tracking.",
  },
  {
    title: "AI-Powered B2B Sales Outreach Pipeline",
    body: "Automated lead aggregator with LLM-based relevance scoring and AI-personalized outreach generation.",
  },
  {
    title: "Telegram CRM Infrastructure (YappiGram)",
    body: "Multi-account CRM with Telethon/MTProto session management, role-based access controls, and encrypted message storage.",
  },
  {
    title: "Video Content Processing Tool",
    body: "FFmpeg-based media processing pipeline supporting 60+ transformation modes for large-scale video variation.",
  },
  {
    title: "Production Payment Processing Integration",
    body: "Multi-gateway invoicing system (Stripe, PayPal, CryptoCloud) with automated receipt generation.",
  },
];

// Homepage FAQ — answer-first, definitional Q&As mapped to the prompts buyers
// actually type into search and AI assistants. Feeds both a visible FAQ section
// and FAQPage structured data. Every number traces to a published case study.
export const homeFaq = [
  {
    q: "Who is David Chystyi?",
    a: "David Chystyi is a solo AI engineer and consultant who cuts the cost of running AI in production by 80–99% and builds production video-automation pipelines for agencies. He works by replacing expensive proprietary AI services with custom open-source pipelines at the same quality.",
  },
  {
    q: "How do you cut AI running costs by 80–99%?",
    a: "I audit your AI stack, find where the spend goes, and replace the overpriced parts — usually proprietary APIs or managed services — with custom open-source pipelines that hit the same quality bar. In one case a premium video-AI API at $3–5 per minute was replaced by a self-hosted ComfyUI workflow, cutting cost by 99%+.",
  },
  {
    q: "What is AI reliability engineering?",
    a: "AI reliability engineering makes AI behave on complex, multi-step production work. Instead of one large prompt that hallucinates and drifts, I re-architect the task into focused, verified stages with cross-verification, so the output stays consistent at scale.",
  },
  {
    q: "What does the free AI cost audit include?",
    a: "The audit is a free 30-minute diagnostic: a review of your current AI tools and where the spend goes, the specific places you're overpaying, one to three cheaper alternatives for your use case, and an estimate of your potential annual savings. No pitch, no commitment.",
  },
  {
    q: "Can you automate video editing for an agency at scale?",
    a: "Yes. I build custom AI pipelines that automate repetitive per-video editing at volume — cleanup, reframing, subtitles, and lipsync or localization. For one video agency, roughly an hour of manual editing per video became about three minutes of automated processing.",
  },
  {
    q: "Do you use open-source models or proprietary APIs?",
    a: "Primarily open-source models, self-hosted on cost-optimized infrastructure — that's what removes the premium API markup. Proprietary APIs are used only where they're genuinely the best value for a specific step.",
  },
  {
    q: "Who do you work with?",
    a: "Two kinds of client: companies running AI at scale that want lower costs and higher reliability, and creative, video and content production agencies with repetitive, high-volume editing.",
  },
];

export type Testimonial = {
  /** Initial shown when there is no avatarSrc. */
  avatar: string;
  /**
   * Path to a logo/portrait in /public, e.g. "/avatars/yappi.png". Most quotes
   * here are under NDA and stay initials-only; this is for the few clients who
   * agreed to be named.
   */
  avatarSrc?: string;
  name: string;
  title: string;
  quote: string;
  large?: boolean;
  list?: string[];
  quote2?: string;
  link?: string;
};

export const testimonials: Testimonial[] = [
  {
    avatar: "D",
    name: "Daniel",
    title: "Owner, Digital Media Agency",
    large: true,
    quote:
      "David and his team are invaluable when it comes to helping us build complex workflows for AI image and video generation. He always replies fast, solves problems quickly, and is very chill to work with.",
  },
  {
    avatar: "M",
    name: "Mark",
    title: "Owner, Content Production Agency",
    quote:
      "Any question about AI or engineering details — solved. David also consistently finds significantly cheaper options for AI tasks as we work. Highly recommend.",
  },
  {
    avatar: "A",
    name: "A.",
    title: "Founder, Media Agency",
    quote:
      "I've been searching for this AI tool for a long time, then suddenly you showed up — strong, clear vision, smooth and easy to work with. Very helpful, understandable developer, responsive, and a man of word. Thank you for everything, let's keep it up.",
  },
  {
    avatar: "Y",
    name: "Yappi Agency",
    title: "Creative Design Agency",
    link: "https://yappi-agency.com",
    quote:
      "David helped us solve a lot of automation challenges. He takes initiative without being asked, assesses the work honestly, and fixes issues long after delivery without extra charges. He genuinely solves the problem instead of just billing for it.",
  },
];

/* ---------------------------------------------------------------------------
 * AI Systems Audit
 *
 * The productized entry offer. The audit itself is free — it is the thing that
 * scopes paid work, so its price is deliberately zero and the number that
 * matters is projectPriceFrom below.
 * ------------------------------------------------------------------------- */

export const pricing = {
  /** Entry price for implementing what the audit finds. */
  projectFrom: "$1,500",
  auditPrice: "Free",
};

export const auditLead =
  "A fixed-scope review of your AI setup that shows you exactly where you're losing money, where it's likely to break, and what it would take to fix.";

export const auditProblem =
  "You already use AI in your product or operations. But you're not sure if it's costing more than it should, whether it's reliable enough to trust in production, or whether it's actually delivering. This audit answers those questions with numbers, not opinions.";

export type AuditSection = {
  num: string;
  title: string;
  tagline: string;
  items: string[];
};

export const auditSections: AuditSection[] = [
  {
    num: "01",
    title: "Cost analysis",
    tagline: "where your money is actually going",
    items: [
      "Full breakdown of your current AI/infrastructure spend — API calls, compute, tooling, per-run fees",
      "Identification of the biggest cost drivers and where you're overpaying",
      "Concrete savings opportunities: where proprietary services can be replaced with open-source or self-hosted alternatives, with estimated savings %",
      "Right-sizing check: are you paying for capacity or models you don't need",
    ],
  },
  {
    num: "02",
    title: "Reliability review",
    tagline: "what will break, and when",
    items: [
      "Assessment of failure points: where your AI can fail silently, produce wrong output, or take down production",
      "Guardrail check: what the AI is allowed to do vs. what it should never be allowed to touch — irreversible actions, destructive commands, data exposure",
      "Human-in-the-loop analysis: where a human checkpoint is missing and should exist",
      "Error handling and fallback review: what happens when the AI fails, and whether you'd even know",
    ],
  },
  {
    num: "03",
    title: "Output quality",
    tagline: "is it actually delivering",
    items: [
      "Evaluation of whether your AI produces consistent, correct results (eval testing)",
      "Where output drifts, hallucinates, or degrades over time",
      "Whether the AI is solving the problem it was built for, or quietly underperforming",
    ],
  },
  {
    num: "04",
    title: "Architecture & context",
    tagline: "how the system is put together",
    items: [
      "Review of how your AI system is structured — context handling, prompt design, tool/agent setup",
      "Where context is lost, where agents drift, where the design causes avoidable problems",
      "Scalability check: will this hold up as usage grows",
    ],
  },
];

export const auditDeliverables = [
  {
    title: "Your current state",
    body: "Spend, reliability risks, and quality issues, with specifics.",
  },
  {
    title: "Prioritised findings",
    body: "Ranked by impact — biggest cost leak and biggest reliability risk first.",
  },
  {
    title: "Concrete recommendations",
    body: "What to fix, in what order, and the estimated cost saving or risk reduction for each.",
  },
  {
    title: "A roadmap",
    body: "What a fix would involve, so you can decide what's worth doing.",
  },
];

export const auditProcess = [
  {
    num: "01",
    title: "Short call",
    body: "We go over your setup and you give me access to what I need to review.",
  },
  { num: "02", title: "I run the audit", body: "No time of yours required." },
  {
    num: "03",
    title: "Report and walkthrough",
    body: "You get the report, and we walk through it together so you know exactly what it means and what to do next.",
  },
];

export const auditFitFor = [
  "You already use AI in your product or operations, but you're not sure it's worth what it costs",
  "Your AI/API/compute bills keep growing and you don't have a clear picture of why",
  "Your AI works in testing but breaks, hallucinates, or behaves unpredictably in production",
  "You're relying on proprietary AI services and suspect you're overpaying",
  "You've built AI features but they're underdelivering, and you can't tell if it's the model, the setup, or the approach",
  "You want AI you can actually trust in production, not a demo that falls apart under real use",
  "You'd rather know exactly where the money and risk are before spending more",
];

export const auditNotFor = [
  "You haven't started using AI yet and just want general advice on getting into it",
  "You're looking for the cheapest possible freelancer to build a quick prototype",
  "You want someone to promise AI will magically solve a problem it can't",
  "You need a full-time employee rather than a focused expert on a specific problem",
  "Your AI setup is small and simple enough that a quick fix would obviously do",
  "You're not willing to give access to the actual system, spend data, or code needed to review it properly",
];
