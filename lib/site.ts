export const pillars = [
  {
    num: "01",
    title: "Cutting the cost of running AI",
    body: "Most teams overpay for AI by 5–50×. I find where expensive proprietary APIs can be replaced with open-source or self-hosted alternatives that match the quality — and I prove the savings with real numbers before you commit a cent. Embeddings, transcription, generation, vector storage: all of it has a cheaper path that nobody's measuring.",
    stat: "Up to <strong>99% cost reduction</strong> · <strong>$30K+/yr</strong> eliminated",
  },
  {
    num: "02",
    title: "Making models reliable on hard tasks",
    body: "LLMs break on structurally complex, multi-step work — they hallucinate, lose state, and contradict themselves. I design the system around the model: multi-agent architectures with cross-verification, retrieval and embedding strategies, and guardrails that make behavior predictable on tasks the model would otherwise fail. The result is AI you can actually put in production.",
    stat: "Multi-agent orchestration · <strong>cross-verified</strong> pipelines",
  },
];

export const stats = [
  { number: "99%+", label: "Maximum AI cost reduction vs proprietary services" },
  { number: "$30K+", label: "Annual client AI infrastructure costs eliminated" },
  { number: "4", label: "Production AI systems in active commercial use" },
];

export const services = [
  {
    num: "01",
    title: "AI Strategy Consulting",
    body: "The right AI opportunities for your business. The right models for your specific tasks. Avoid burning $50K to learn what costs $500 to research first.",
  },
  {
    num: "02",
    title: "AI Implementation",
    body: "Production-ready AI systems, built end-to-end. Multi-agent architectures, cost-optimized infrastructure, security-first deployment. Solo or leading your team.",
  },
  {
    num: "03",
    title: "Cost Optimization Audits",
    body: "Paying premium prices for AI APIs? You're probably overpaying. I find the open-source alternatives that match quality at a fraction of the cost — and prove it.",
  },
  {
    num: "04",
    title: "CTO as a Service",
    body: "For early-stage startups: ongoing technical leadership across AI strategy, architecture, and team scaling. Available as monthly retainer.",
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
    body: "I design the cheapest stack that still hits your quality bar: open-source where it wins, proprietary where it's worth it, orchestration that keeps the models reliable.",
  },
  {
    num: "STEP 03",
    title: "Ship & prove",
    body: "I build it end-to-end, deploy to production, and show the before/after on both cost and reliability. No hand-waving — measured results.",
  },
];

export const work = [
  {
    slug: "metra-ai",
    number: "01 — Metra AI",
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
  {
    slug: "open-source-lipsync",
    number: "02 — Open Source Lipsync",
    title: "99%+ cost reduction vs premium video AI",
    meta: ["Solo Developer", "6+ months in production", "3+ commercial deployments"],
    summary:
      "Replaced premium proprietary video AI service at $3–5 per minute with open source ComfyUI workflow built on Infinity Talk and Wan 2.1. Per-video costs dropped from dollars to cents.",
    highlights: [
      { number: "99%+", label: "Cost reduction vs proprietary API" },
      { number: "6+ mo", label: "Continuous production use" },
    ],
    tech: "ComfyUI · Infinity Talk · Wan 2.1 · Docker",
  },
  {
    slug: "video-localization",
    number: "03 — Video Localization Pipeline",
    title: "Multi-model AI pipeline for video uniqualization",
    meta: ["Solo Developer", "3 months active production"],
    summary:
      "Architected complex multi-model AI pipeline combining semantic embedding generation, self-hosted speech transcription, LLM-based script rewriting, and multi-language voice synthesis.",
    highlights: [
      { number: "< $1", label: "Per 20-minute video produced" },
      { number: "4+", label: "AI services orchestrated" },
    ],
    tech: "Vertex AI · Whisper · Gemini · Qdrant",
  },
  {
    slug: "motion-control",
    number: "04 — Motion Control Workflow",
    title: "84% cost reduction with capability premium services can't match",
    meta: ["Solo Developer", "4–5 months active production", "2 commercial clients"],
    summary:
      "Replaced premium proprietary motion control video services with open source ComfyUI workflow on Wan 2.2. Approximately $12,000 in annual savings at the client's production scale.",
    highlights: [
      { number: "84%", label: "Cost reduction at production scale" },
      { number: "~$12K", label: "Annual savings per client" },
    ],
    tech: "ComfyUI · Wan 2.2 · RunningHub · FFmpeg",
  },
];

export const additional = [
  {
    title: "AI Reels Pipeline & Content Generation Bot",
    body: "Industrial-scale content automation (target 100+ videos/hour) combining motion control workflows with image uniqualization pipelines.",
  },
  {
    title: "Anonymous Multi-Bot Platform — Financial Services",
    body: "Multi-tenant Telegram bot infrastructure with full operator-to-user anonymity, sub-bot creation system, multi-currency transaction tracking.",
  },
  {
    title: "AI-Powered B2B Sales Outreach Pipeline",
    body: "Automated vacancy aggregator with LLM-based relevance scoring and AI-personalized outreach generation.",
  },
  {
    title: "Telegram CRM Infrastructure (YappiGram)",
    body: "Multi-account CRM with Telethon/MTProto session management, anonymity layer, encrypted message storage.",
  },
  {
    title: "Video Content Repurposing Tool",
    body: "FFmpeg-based mass uniqualization pipeline supporting 60+ video modifications for platform algorithm anti-detection.",
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
};

export const testimonials: Testimonial[] = [
  {
    avatar: "G",
    name: "G.",
    title: "Owner, Digital Media Agency",
    large: true,
    quote:
      "David and his team are invaluable when it comes to helping us build complex workflows for AI image and video generation. He always replies fast, solves problems quickly, and is very chill to work with.",
  },
  {
    avatar: "M",
    name: "M.",
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
    quote: "David helped us solve many automation challenges. What stood out:",
    list: [
      "You take initiative without being asked — show a product idea today, see version one the next day",
      "You assess work honestly and fix issues without extra charges, even long after delivery",
      "We always get what we expect, and when something doesn't fit, you're flexible and detailed with revisions",
      "You don't just work for payment — you genuinely solve client pain. There are a lot of people overcharging in this market, and very few specialists who actually care",
    ],
    quote2:
      "You're a great guy. Glad we started working together — even though I was initially against it. What sold me was that you take on any task and the word \"impossible\" doesn't exist for you. Hope we build many more profitable projects together.",
  },
];
