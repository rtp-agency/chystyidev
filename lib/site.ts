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
    body: "I map where your AI spend goes and where models fail — with real numbers. You see the problem before you pay to fix it.",
  },
  {
    num: "02",
    title: "Architect",
    icon: "graph" as const,
    body: "I design the cheapest stack that still hits your quality bar, with orchestration that keeps models reliable.",
  },
  {
    num: "03",
    title: "Ship & prove",
    icon: "check" as const,
    body: "I build it end-to-end, deploy to production, and prove the before/after on cost and reliability.",
  },
];

// /agencies — the productized service presented as a three-step process.
export const agencyProcess = [
  {
    num: "01",
    title: "Audit",
    icon: "scan" as const,
    body: "Free, 30 minutes. I map your current production process and show exactly which steps can be automated — with the projected per-video savings. No commitment.",
  },
  {
    num: "02",
    title: "Build",
    icon: "graph" as const,
    body: "Typically 2–4 weeks. A fixed-scope pipeline built for your workflow on open-source models — so there's no premium API markup.",
  },
  {
    num: "03",
    title: "Run",
    icon: "check" as const,
    body: "Managed service. The pipeline runs on my infrastructure. You don't hire anyone and you don't manage servers — you send source files and receive finished videos.",
  },
];

// /agencies hero — the animated ProcessCycle relabeled for video (not AI cost).
export const agencyCycle = [
  { n: "01", label: "Ingest", desc: "Raw recordings in, queued at volume" },
  { n: "02", label: "Process", desc: "Clean, reframe, and AI-edit automatically" },
  { n: "03", label: "Deliver", desc: "Finished, brand-consistent videos back" },
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

export type WorkItem = {
  slug: string;
  number: string;
  title: string;
  meta: string[];
  summary: string;
  highlights: { number: string; label: string }[];
  tech: string;
  costBar?: { reduction: string; afterPct: number };
};

// Flagship agency case — leads the grids. No pricing figures (managed service).
export const blackCamelCard: WorkItem = {
  slug: "black-camel",
  number: "01 — Black Camel Productions",
  title: "~1 hour of manual editing per video → ~3 minutes automated",
  meta: ["Managed service", "London video production agency", "25+ videos processed"],
  summary:
    "A managed pipeline for a London video agency: raw lesson recordings in, finished brand-consistent videos out. AI cleanup, pixel-accurate reframing, human approval on cuts.",
  highlights: [
    { number: "~3 min", label: "Automated processing (was ~1 hr manual)" },
    { number: "25+", label: "Videos processed, built for hundreds" },
  ],
  tech: "Python · FFmpeg · OpenCV · Whisper · Gemini",
};

// Case studies, ordered cost-first (most relevant proof for the primary visitor first).
export const work: WorkItem[] = [
  blackCamelCard,
  {
    slug: "open-source-lipsync",
    number: "02 — Lipsync System",
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
  },
  {
    slug: "motion-control",
    number: "03 — Motion Control Workflow",
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
  },
  {
    slug: "video-localization",
    number: "04 — Video Localization Pipeline",
    title: "Multi-model AI pipeline for video localization at scale",
    meta: ["Solo Developer", "3 months active production"],
    summary:
      "Architected a complex multi-model AI pipeline combining semantic embedding generation, self-hosted speech transcription, LLM-based script rewriting, and multi-language voice synthesis.",
    highlights: [
      { number: "< $1", label: "Per 20-minute video produced" },
      { number: "4+", label: "AI services orchestrated" },
    ],
    tech: "Vertex AI · Whisper · Gemini · Qdrant",
  },
  {
    slug: "metra-ai",
    number: "05 — Metra AI",
    title: "Production SaaS for Telegram content automation",
    meta: ["Founding Engineer", "Live in production", "metra-ai.org"],
    summary:
      "Solo-built end-to-end SaaS platform automating content creation for Telegram channels. Architected multi-agent LLM orchestration with cross-verification that prevents typical AI failures.",
    highlights: [
      { number: "3 months", label: "Solo development to launch" },
      { number: "16", label: "Docker containers in production" },
    ],
    tech: "FastAPI · React · PostgreSQL · Multi-agent LLM",
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

export type Testimonial = {
  avatar: string;
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
