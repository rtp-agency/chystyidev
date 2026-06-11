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
  result: string;
};

export const offers: Offer[] = [
  {
    num: "01",
    name: "AI Cost Optimization",
    promise: "Slash what you spend running AI — without giving up quality.",
    problem:
      "If you use AI at any real volume, you're almost certainly overpaying. Oversized models burn through token budgets on tasks a cheaper one handles just as well. Premium generative services bill at a premium when an equivalent produces the same output for a fraction of the price. Most teams never measure where the money actually leaks.",
    does: [
      "Audit your current AI stack and pinpoint exactly where you're overpaying",
      "Re-engineer the expensive pieces with cheaper equivalents at matching quality",
      "Prove the savings with real before/after numbers before anything is changed",
      "Deploy the optimized setup to production and keep it tuned as models evolve",
    ],
    result:
      "Typical outcome: 80–99% lower AI costs — thousands to tens of thousands saved per year.",
  },
  {
    num: "02",
    name: "AI Reliability Engineering",
    promise: "Make your AI behave on the complex, high-stakes work where it breaks.",
    problem:
      "AI looks brilliant in a demo, then falls apart on real, multi-step work — hallucinations, answers that change every run, output you can't trust at scale. The model usually isn't the problem; the system around it is.",
    does: [
      "Map where and why your AI currently fails",
      "Re-architect hard tasks into specialized, focused steps instead of one overloaded prompt",
      "Add verification layers that catch errors before they ever reach the user",
      "Build guardrails for consistent, predictable output you can ship to production",
    ],
    result:
      "Typical outcome: far fewer errors, consistent results, and lower cost from using the right model for each step.",
  },
];

export const process = [
  {
    num: "STEP 01",
    title: "Audit",
    body: "I map exactly where your AI spend goes and where the models fail — with real numbers, not guesses. You see the problem before you pay to fix it.",
  },
  {
    num: "STEP 02",
    title: "Architect",
    body: "I design the cheapest stack that still hits your quality bar, and the orchestration that keeps the models reliable on the tasks that matter.",
  },
  {
    num: "STEP 03",
    title: "Ship & prove",
    body: "I build it end-to-end, deploy to production, and show the before/after on both cost and reliability. No hand-waving — measured results.",
  },
];

// Case studies, ordered cost-first (most relevant proof for the primary visitor first).
export const work = [
  {
    slug: "open-source-lipsync",
    number: "01 — Lipsync System",
    title: "99%+ cost reduction vs premium video AI",
    meta: ["Solo Developer", "6+ months in production", "3+ commercial deployments"],
    summary:
      "Replaced a premium proprietary video AI service at $3–5 per minute with a custom ComfyUI workflow built on Infinity Talk and Wan 2.1. Per-video costs dropped from dollars to cents.",
    highlights: [
      { number: "99%+", label: "Cost reduction vs proprietary API" },
      { number: "6+ mo", label: "Continuous production use" },
    ],
    tech: "ComfyUI · Infinity Talk · Wan 2.1 · Docker",
  },
  {
    slug: "motion-control",
    number: "02 — Motion Control Workflow",
    title: "84% cost reduction with capability premium services can't match",
    meta: ["Solo Developer", "4–5 months active production", "2 commercial clients"],
    summary:
      "Replaced premium proprietary motion-control video services with a custom ComfyUI workflow on Wan 2.2. Approximately $12,000 in annual savings at the client's production scale.",
    highlights: [
      { number: "84%", label: "Cost reduction at production scale" },
      { number: "~$12K", label: "Annual savings per client" },
    ],
    tech: "ComfyUI · Wan 2.2 · RunningHub · FFmpeg",
  },
  {
    slug: "video-localization",
    number: "03 — Video Localization Pipeline",
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
    number: "04 — Metra AI",
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
