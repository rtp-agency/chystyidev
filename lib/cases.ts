export type Block =
  | { t: "p"; html: string }
  | { t: "ul"; items: string[] }
  | { t: "h3"; text: string }
  | { t: "quote"; text: string }
  | { t: "table"; rows: [string, string][] }
  | { t: "stats"; items: { number: string; label: string }[] };

export type Section = { heading: string; blocks: Block[] };

export type CaseVisual =
  | { kind: "pipeline"; stages: { label: string; sub: string }[] }
  | {
      kind: "cost";
      beforeLabel: string;
      beforeValue: string;
      afterLabel: string;
      afterValue: string;
      afterPct: number;
      reduction: string;
    };

export type CaseStudy = {
  slug: string;
  eyebrow: string;
  title: string;
  lead: string;
  meta: {
    role: string;
    timeline: string;
    status: string;
    link?: { href: string; text: string };
  };
  visual?: CaseVisual;
  sections: Section[];
  prev: { href: string; label: string };
  next: { href: string; label: string };
};

export const cases: CaseStudy[] = [
  {
    slug: "black-camel",
    eyebrow: "Case Study 01",
    title:
      "Automating a Manual Video-Editing Workflow for Educational Content at Scale",
    lead: "A slow, editor-by-editor Premiere Pro process turned into an automated pipeline that cleans, reframes, and AI-edits recorded lesson videos in minutes — built to run hundreds of videos at volume.",
    meta: {
      role: "Managed service",
      timeline: "Ongoing production",
      status: "25+ videos processed",
      link: { href: "https://blackcamel.productions", text: "blackcamel.productions →" },
    },
    visual: {
      kind: "pipeline",
      stages: [
        { label: "Ingest", sub: "raw lesson recordings in bulk" },
        { label: "Visual cleanup", sub: "toolbars, masks, re-framing" },
        { label: "Adaptive reframe", sub: "content-aware, no collisions" },
        { label: "AI content cleanup", sub: "silence / filler / repeats" },
        { label: "Render + deliver", sub: "brand-consistent finished video" },
      ],
    },
    sections: [
      {
        heading: "The challenge",
        blocks: [
          { t: "p", html: `Black Camel Productions produces a high volume of recorded lesson videos for an educational content client — screen-and-webcam recordings of a teacher walking through slides. Every video went through the same repetitive manual edit in Premiere Pro:` },
          { t: "ul", items: [
            `Cropping recording toolbars and UI clutter`,
            `Scaling and re-framing the screen content`,
            `Enlarging and repositioning the presenter's webcam bubble`,
            `Masking grey page-breaks and margins`,
            `Exporting to a fixed broadcast spec`,
          ] },
          { t: "p", html: `On top of that, an editor had to listen through each video to remove silences, filler words, coughs, and repeated or stumbled lines — the most time-consuming part of all.` },
          { t: "p", html: `The problem wasn't quality — it was throughput. Each video cost an editor roughly <strong>an hour of hands-on time</strong>, the process didn't scale, and quality drifted between editors. At volume, the manual content-cleanup pass became the bottleneck.` },
        ],
      },
      {
        heading: "The solution",
        blocks: [
          { t: "p", html: `I built an automated video-production pipeline that reproduces the manual editing standard programmatically — plus an AI-assisted content-cleanup layer the manual process couldn't do efficiently.` },
          { t: "p", html: `It runs as a managed service: Black Camel sends the raw recordings, the pipeline processes them, and a finished, brand-consistent video comes back — ready for their team to drop into final assembly.` },
          { t: "h3", text: "1. Pixel-accurate brand reproduction" },
          { t: "p", html: `I reverse-engineered the client's exact editing standard from their original Premiere presets and reference videos, so output matches their spec to the pixel — webcam framing, spacing, and scale measured and locked (for example, a 42px webcam margin matched against a reference video, not guessed).` },
          { t: "h3", text: "2. Automated visual cleanup" },
          { t: "p", html: `Toolbar and UI removal, page-break masking, screen re-framing, and presenter-bubble enlargement happen automatically — no manual masking or keyframing.` },
          { t: "h3", text: "3. Adaptive, content-aware framing" },
          { t: "p", html: `The system inspects each slide and adjusts automatically so on-screen images and tables are never cut off and never collide with the presenter overlay — solving real client feedback without per-video manual work.` },
          { t: "h3", text: "4. AI-powered content cleanup" },
          { t: "ul", items: [
            `Silence and dead-air removal using voice-activity detection`,
            `Filler-word, cough, and breath cleanup via speech AI, with safeguards that protect actual speech from being clipped`,
            `Repeated-line and stumble detection using AI transcription plus a text-analysis layer — it finds where the presenter repeated themselves and proposes a tight, word-level cut, leaving a human to approve`,
          ] },
        ],
      },
      {
        heading: "Technical highlights",
        blocks: [
          { t: "h3", text: "Reference-driven accuracy" },
          { t: "p", html: `Brand geometry was decoded from the client's own design assets and measured against a reference video, not estimated — so output is consistent and on-spec every time, eliminating editor-to-editor drift.` },
          { t: "h3", text: "Deterministic repeat detection" },
          { t: "p", html: `For finding repeated lines, the pipeline pairs Whisper transcription (with word-level timestamps) with a text-matching layer tuned for the task — locating duplicated speech precisely and proposing a clean cut, with a human approving the final call.` },
          { t: "h3", text: "Optimised rendering" },
          { t: "p", html: `I tuned the render engine for Apple Silicon with smart frame-reuse, roughly halving render time — from about 6 minutes down to ~3 minutes for a typical 15-minute lesson.` },
          { t: "h3", text: "Resilient at volume" },
          { t: "p", html: `Batch processing with automatic retries on network hiccups, persisted results, and visible warnings so nothing fails silently across a large batch.` },
        ],
      },
      {
        heading: "Results & impact",
        blocks: [
          { t: "stats", items: [
            { number: "~3 min", label: "Automated processing per video (was ~1 hr manual)" },
            { number: "25+", label: "Videos processed across batches" },
            { number: "~2×", label: "Faster rendering after Apple Silicon tuning" },
            { number: "100s", label: "Built to run at volume" },
          ] },
          { t: "ul", items: [
            `From ~1 hour of manual editing per video to ~3 minutes of automated processing — freeing editors from repetitive work`,
            `Brand-consistent output — webcam, layout, and framing matched to the client's reference standard, eliminating editor-to-editor drift`,
            `The hardest manual task — listening for silences, fillers, and repeated lines — is now an automated first pass with human approval, instead of a from-scratch manual job`,
          ] },
        ],
      },
      {
        heading: "The outcome",
        blocks: [
          { t: "p", html: `Black Camel moved from a labour-bound, one-editor-per-video process to a scalable production line: send the recordings in bulk, let the pipeline do the heavy, repetitive work, and apply human judgement only where it adds value.` },
          { t: "p", html: `The result is <strong>lower cost per video, faster turnaround, and consistent brand quality at volume</strong> — turning video production from a bottleneck into a throughput advantage.` },
          { t: "p", html: `Delivered for <a href="https://blackcamel.productions">Black Camel Productions</a>; the educational end-client is kept anonymous by agreement.` },
        ],
      },
      {
        heading: "Tech stack",
        blocks: [
          { t: "table", rows: [
            ["Language", "Python"],
            ["Video Processing", "FFmpeg · OpenCV"],
            ["API / Orchestration", "FastAPI"],
            ["Transcription", "Whisper (word-level timestamps)"],
            ["Speech Cleanup", "Cleanvoice"],
            ["LLM / Text Analysis", "Gemini"],
            ["Optimisation", "Apple Silicon render tuning"],
          ] },
        ],
      },
    ],
    prev: { href: "/agencies", label: "← Back to agencies" },
    next: { href: "/work/open-source-lipsync", label: "Next: Lipsync System →" },
  },

  {
    slug: "metra-ai",
    eyebrow: "Case Study 05",
    title: "Metra AI — Production SaaS for Telegram Content Automation",
    lead: "Solo-built end-to-end SaaS platform with multi-agent LLM orchestration. From architecture to deployment in 3 months.",
    meta: {
      role: "Founding Engineer",
      timeline: "3 months",
      status: "Live with paying users",
      link: { href: "https://metra-ai.org", text: "metra-ai.org →" },
    },
    visual: {
      kind: "pipeline",
      stages: [
        { label: "Structure parser", sub: "extract anatomy, preserve links" },
        { label: "Content rewriter", sub: "per-paragraph, isolated calls" },
        { label: "Style enhancer", sub: "emoji & channel formatting" },
        { label: "Auto-rules validator", sub: "channel-specific rules" },
      ],
    },
    sections: [
      {
        heading: "The business problem",
        blocks: [
          { t: "p", html: `Telegram channel owners and content teams spend enormous amounts of time creating posts manually. Standard solutions either don't fit Telegram's specific UX (Buffer, Hootsuite are built for Instagram/Twitter), or rely on raw ChatGPT output that produces generic, low-quality content requiring extensive manual editing.` },
          { t: "p", html: `The core pain: content teams spend 60–80% of their time on production instead of strategy, and quality suffers because AI-generated content typically lacks brand voice, channel-specific context, and real-time relevance.` },
        ],
      },
      {
        heading: "What I built",
        blocks: [
          { t: "p", html: `A full SaaS platform that automates the entire Telegram content workflow:` },
          { t: "ul", items: [
            `AI-powered post generation that maintains brand voice and channel lore`,
            `Scheduling system with reusable weekly presets`,
            `Real-time data integration for news-driven content`,
            `Integrated Telegram CRM for managing leads without exposing owner account credentials`,
            `Multi-account, multi-operator infrastructure for agencies running multiple channels`,
          ] },
        ],
      },
      {
        heading: "Architecture: why multi-agent instead of single LLM call",
        blocks: [
          { t: "p", html: `The core technical innovation is a multi-stage LLM orchestration pipeline rather than relying on single API calls. This was a deliberate architectural choice based on a key insight:` },
          { t: "quote", text: `LLMs perform poorly when given too many simultaneous constraints. A single 3000-token prompt asking for "rewrite this post in voice X, with lore Y, in format Z, with rules A/B/C" produces inconsistent results because attention dilutes across requirements.` },
          { t: "p", html: `Solution: decompose post generation into specialized stages, each with a single focused responsibility.` },
          { t: "h3", text: "Standard posting pipeline" },
          { t: "ul", items: [
            `Structure parser — extracts post anatomy and preserves links (which premium LLMs strip out by default)`,
            `Content rewriter — handles each paragraph in isolated calls, preserving structural integrity`,
            `Style enhancer — adds emojis and formatting based on channel persona`,
            `Auto-rules validator — applies channel-specific rules (e.g., removing punctuation, enforcing length limits)`,
          ] },
          { t: "h3", text: "Extended posting pipeline (generates from scratch)" },
          { t: "ul", items: [
            `Archetype selector — chooses post structure based on content type and length parameters`,
            `Block-by-block generator — writes each section with focused context`,
            `Style and formatting application`,
            `Auto-rules validation`,
          ] },
          { t: "p", html: `This architecture eliminates the typical AI failures — hallucinations mid-text, structural drift, lore over-application, format breakage — that single-shot LLM calls produce.` },
        ],
      },
      {
        heading: "Key technical innovations",
        blocks: [
          { t: "h3", text: "1. Prompt normalization layer" },
          { t: "p", html: `The image model over-refused legitimate prompts — false positives on ordinary requests like generating people. Rather than switching to a pricier model, I built a prompt-normalization layer that rephrases benign user input so it isn't incorrectly blocked, preserving the original intent. This kept quality high without hosting more expensive alternatives.` },
          { t: "h3", text: "2. Lore compression and translation" },
          { t: "p", html: `User-provided channel lore (often 3000+ tokens of unstructured text) is compressed and translated to the channel's posting language at upload time. The AI receives a structured, language-matched summary instead of raw lore, dramatically improving content relevance while reducing token costs.` },
          { t: "h3", text: "3. Lore as context, not constraint" },
          { t: "p", html: `Discovered through iteration that AI over-applies lore when given it as direct instruction. Architected lore as soft context that influences but doesn't dominate generation — producing more natural content.` },
          { t: "h3", text: "4. Premium LLM selection strategy" },
          { t: "p", html: `Chose specific LLMs for specific reasons:` },
          { t: "ul", items: [
            `Fewer false refusals on legitimate edge cases`,
            `Better real-time news integration via Perplexity-style APIs`,
            `Cost optimization at scale`,
          ] },
        ],
      },
      {
        heading: "Infrastructure",
        blocks: [
          { t: "ul", items: [
            `Multiple Ubuntu servers in production (main service, CRM, staging)`,
            `16 Docker containers orchestrated with appropriate separation of concerns`,
            `Backend as single source of truth — all client requests flow through backend, never directly to AI providers or DB`,
            `Monitoring stack: Prometheus, Grafana, Sentry for error tracking, Uptime Kuma for service health`,
            `Encryption: All sensitive data (phone numbers, messages, passwords) encrypted with proper salt+pepper and GPU-resistant hashing. Decryption keys held off-server.`,
            `Security: 2FA, JWT rotation, session fingerprinting, domain proxying`,
          ] },
        ],
      },
      {
        heading: "Outcome",
        blocks: [
          { t: "stats", items: [
            { number: "3 months", label: "Solo development to launch" },
            { number: "16", label: "Docker containers in production" },
            { number: "Week 1", label: "First paying users acquired" },
            { number: "25/day", label: "Automated posts per channel on paid tier" },
          ] },
          { t: "p", html: `Launched to production within the 3-month development window. Multi-account CRM allows agencies to manage operators without exposing channel owner credentials. Active early-stage traction with growing user base.` },
        ],
      },
      {
        heading: "Tech stack",
        blocks: [
          { t: "table", rows: [
            ["Backend", "FastAPI · Python · Celery"],
            ["Frontend", "React · TypeScript · Next.js"],
            ["Database", "PostgreSQL · Redis"],
            ["Infrastructure", "Docker · Nginx · Multiple Ubuntu servers"],
            ["Monitoring", "Prometheus · Grafana · Sentry · Uptime Kuma"],
            ["AI / LLM", "Multi-provider stack (proprietary + open source)"],
          ] },
        ],
      },
      {
        heading: "What this demonstrates",
        blocks: [
          { t: "ul", items: [
            `Ability to architect and build production SaaS solo`,
            `Deep understanding of LLM limitations and how to architect around them`,
            `Production-grade security and infrastructure design`,
            `Pragmatic cost optimization at architecture level`,
            `End-to-end product thinking: business problem → technical solution → deployment → operations`,
          ] },
        ],
      },
    ],
    prev: { href: "/work/video-localization", label: "← Previous: Video Localization Pipeline" },
    next: { href: "/#work", label: "All case studies →" },
  },

  {
    slug: "open-source-lipsync",
    eyebrow: "Case Study 02",
    title: "Lipsync System — 99%+ Cost Reduction vs Premium Video AI",
    lead: "Replaced premium proprietary video AI at $3–5/minute with open source ComfyUI workflow. Same quality, costs in cents.",
    meta: {
      role: "Solo Developer",
      timeline: "6+ months in production",
      status: "3+ commercial deployments",
    },
    visual: {
      kind: "cost",
      beforeLabel: "Premium video AI API",
      beforeValue: "$3–5 / min",
      afterLabel: "Custom ComfyUI workflow",
      afterValue: "cents / min",
      afterPct: 2,
      reduction: "99%+",
    },
    sections: [
      {
        heading: "The business problem",
        blocks: [
          { t: "p", html: `A motion design agency creating advertising creatives needed lipsync video generation at scale. They were paying premium pricing for the leading proprietary API — approximately $0.05–0.08 per second of video — which translated to:` },
          { t: "ul", items: [
            `$3–5 per minute of generated video`,
            `Tens of dollars per finished creative`,
            `Unsustainable economics at their order volume`,
          ] },
          { t: "p", html: `Beyond cost, they faced API rate limits, quality ceilings, and lack of customization that constrained their creative output. They needed a solution that was significantly cheaper, removed external API dependencies, and could be customized to their specific use cases.` },
        ],
      },
      {
        heading: "My approach",
        blocks: [
          { t: "p", html: `Most teams looking at this problem would either accept the premium pricing or attempt to build a proprietary model. I took a third path: building production infrastructure around best-in-class open source AI models with cost-optimized GPU orchestration.` },
          { t: "p", html: `After evaluating available options, I selected <strong>Infinity Talk (built on Wan 2.1)</strong> as the lipsync foundation. Critical reasoning:` },
          { t: "ul", items: [
            `No comparable open source alternative existed at the time`,
            `ComfyUI-based architecture allowed deep customization through workflow modifications`,
            `Quality matched the premium API for the agency's use cases — and in some scenarios exceeded it`,
            `Could be self-hosted, removing API dependency entirely`,
          ] },
        ],
      },
      {
        heading: "Production architecture",
        blocks: [
          { t: "p", html: `The challenge wasn't running the model — it was making it production-grade.` },
          { t: "p", html: `I built a containerized deployment infrastructure that handles:` },
          { t: "ul", items: [
            `Telegram bot interface (using local Bot API server for handling large media files beyond standard Telegram limits)`,
            `Workflow orchestration for ComfyUI pipelines`,
            `Heavy file processing (large videos in and out)`,
            `Polling and webhook integration with GPU compute providers`,
            `Docker template that I reuse across similar projects — drop in config, deploy, ready in minutes`,
          ] },
          { t: "p", html: `The infrastructure design is modular and replicable — I've since used this same Docker template foundation to deploy similar AI pipelines for other clients with minimal modification.` },
        ],
      },
      {
        heading: "Cost engineering story",
        blocks: [
          { t: "p", html: `This is where the economics get interesting.` },
          { t: "h3", text: "Original premium API costs (their previous solution)" },
          { t: "ul", items: [
            `$3–5 per minute of video`,
            `Tens of dollars per finished creative`,
            `Bound by API rate limits`,
          ] },
          { t: "h3", text: "My initial implementation (VAST AI self-hosted GPU)" },
          { t: "ul", items: [
            `$2/hour for H200 GPU rental`,
            `Batch processing: dozens of videos generated per hour on single GPU instance`,
            `Per-video cost: pennies instead of dollars`,
          ] },
          { t: "h3", text: "Current optimized version (RunningHub)" },
          { t: "ul", items: [
            `$15/month flat subscription for the client (50K tokens + premium GPU access)`,
            `Effectively unlimited generation within practical use`,
            `Per-video token cost: ~200 tokens (negligible at this volume)`,
          ] },
          { t: "quote", text: `Net cost reduction: 99%+ compared to premium API pricing for their volume.` },
          { t: "p", html: `The optimization journey itself demonstrates a key consulting principle: <strong>continuous iteration on infrastructure choice</strong>. VAST AI was the right answer initially, but when their pricing changed and better alternatives emerged, switching to RunningHub delivered another step-change in economics.` },
        ],
      },
      {
        heading: "Photo-to-video vs video-to-video",
        blocks: [
          { t: "p", html: `I implemented both modes, with deliberate use case separation:` },
          { t: "ul", items: [
            `<strong>Photo-to-video</strong> — faster generation, fewer hallucinations, often higher quality. Default for most use cases.`,
            `<strong>Video-to-video</strong> — needed for specific clients with longer-form requirements (5–10 minute workflows). Initially this mode was broken in available implementations; I debugged and got it working, which became a key differentiator.`,
          ] },
          { t: "p", html: `The V2V capability is something no one else in the open source community had working at the time, which led to my next client finding me directly through a technical article I published on Infinity Talk implementation.` },
        ],
      },
      {
        heading: "Recognition and knowledge sharing",
        blocks: [
          { t: "p", html: `Published an in-depth technical write-up on the Infinity Talk implementation, which received editor recognition and strong community response. It became a primary reference for others entering this space and led to direct client acquisition.` },
        ],
      },
      {
        heading: "Outcome",
        blocks: [
          { t: "stats", items: [
            { number: "99%+", label: "Cost reduction vs proprietary API" },
            { number: "6+ mo", label: "Continuous production use" },
            { number: "3", label: "Paid commercial implementations" },
            { number: "$15/mo", label: "Current infrastructure cost" },
          ] },
          { t: "p", html: `For the original client: same volume of lipsync output at fraction of original cost. No API rate limits. Customizable workflow for specific creative needs. 6+ months in continuous production use.` },
          { t: "p", html: `Broader commercial impact: 3 paid implementations across different clients with different needs. Each customized through workflow modifications (V2V for some, I2V for others). Infrastructure foundation reused across multiple AI projects.` },
        ],
      },
      {
        heading: "Tech stack",
        blocks: [
          { t: "table", rows: [
            ["AI Models", "Infinity Talk (Wan 2.1 base)"],
            ["Workflow Engine", "ComfyUI"],
            ["GPU Compute", "VAST AI · RunningHub"],
            ["Interface", "Telegram Bot API (local server)"],
            ["Infrastructure", "Docker · Python orchestration"],
          ] },
        ],
      },
      {
        heading: "What this demonstrates",
        blocks: [
          { t: "ul", items: [
            `Open source AI expertise at production level — not just experimenting, but shipping commercial implementations`,
            `Cost optimization mindset — understanding when API services are appropriate and when self-hosted/alternative providers deliver massive savings`,
            `Production infrastructure thinking — reusable Docker templates, proper file handling, integration with messaging platforms`,
            `Continuous improvement — willing to migrate infrastructure providers when economics or capability shifts`,
            `Thought leadership — sharing knowledge generates inbound business`,
          ] },
        ],
      },
    ],
    prev: { href: "/work/black-camel", label: "← Previous: Black Camel Productions" },
    next: { href: "/work/motion-control", label: "Next: Motion Control Workflow →" },
  },

  {
    slug: "video-localization",
    eyebrow: "Case Study 04",
    title: "Multi-Model AI Video Localization Pipeline",
    lead: "Four AI services orchestrated into one coherent pipeline. Source video in, localized derivative video out — for under $1.",
    meta: {
      role: "Solo Developer",
      timeline: "3 months production",
      status: "Active deployment",
    },
    visual: {
      kind: "pipeline",
      stages: [
        { label: "Transcribe", sub: "Whisper Large (self-hosted)" },
        { label: "Rewrite", sub: "Gemini — preserve meaning" },
        { label: "Voice", sub: "multi-language TTS" },
        { label: "Match footage", sub: "Vertex AI + Qdrant" },
        { label: "Assemble", sub: "FFmpeg (GPU-accelerated)" },
      ],
    },
    sections: [
      {
        heading: "The business problem",
        blocks: [
          { t: "p", html: `A media localization agency wanted to adapt source videos into new, market-specific variations — different languages, audiences, and content niches. The requirement: produce genuinely derivative videos (new assembled footage, rewritten scripts, new voiceovers) rather than 1:1 translations, so each output is a distinct asset built for its target market.` },
          { t: "p", html: `The use case was a custom commercial requirement, not an off-the-shelf product — nothing on the market could do it. The client wanted to test a content-scaling hypothesis: could AI adapt source material into new variations at sufficient quality and volume to make the operation economically viable?` },
        ],
      },
      {
        heading: "What made this hard",
        blocks: [
          { t: "p", html: `A naive approach — translate, re-voice, and republish the same footage — fails for two reasons:` },
          { t: "ul", items: [
            `<strong>Originality</strong> — reusing the source footage and structure produces a near-duplicate; the output has to be a genuinely new asset`,
            `<strong>Distinctness at scale</strong> — every output needs to be visually and structurally distinct, not a copy of the source`,
          ] },
          { t: "p", html: `The system needed to produce videos with:` },
          { t: "ul", items: [
            `New visual footage (assembled from a library, not the source)`,
            `Rewritten scripts (preserving meaning, changing wording)`,
            `New voiceovers in target language`,
            `All while remaining semantically coherent — the new visuals had to actually match what the new audio was saying`,
          ] },
        ],
      },
      {
        heading: "Architecture: two-stage pipeline",
        blocks: [
          { t: "h3", text: "Stage 1: library population" },
          { t: "p", html: `The system first builds a searchable visual library:` },
          { t: "ul", items: [
            `User submits video URLs in bulk via Telegram bot (queue-based processing)`,
            `Videos downloaded server-side, then segmented by scene detection (cut detection, not fixed intervals)`,
            `Each segment gets a semantic embedding via Vertex AI`,
            `Embeddings + segments stored locally in Qdrant vector database`,
            `Each segment also gets a JSON description of its content (improves matching accuracy later)`,
          ] },
          { t: "quote", text: `Architectural decision worth noting: the previous implementation stored embeddings in Firebase, which was expensive and unnecessary. I migrated everything to a locally-hosted Qdrant instance, eliminating the recurring database costs entirely. Only embedding creation costs money now — storage and retrieval are free.` },
          { t: "h3", text: "Stage 2: new video generation" },
          { t: "p", html: `When the client wants to produce a new video:` },
          { t: "ul", items: [
            `Submit source link + configuration (language, voice, music, emoji, subtitles — all selectable via bot)`,
            `FFmpeg extracts audio from source video`,
            `Audio transcribed via self-hosted Whisper Large (locally hosted to avoid API costs at scale)`,
            `Transcript rewritten by Gemini — preserves semantic meaning while changing phrasing`,
            `Rewritten script translated to target language`,
            `Multi-language TTS generates voiceover in selected voice/language`,
            `Vertex AI matches new audio segments to library footage via embedding similarity`,
            `FFmpeg assembles final video: matched footage + new audio + selected enhancements (background music, sound effects, memes, subtitles)`,
            `Delivered to client via Telegram`,
          ] },
        ],
      },
      {
        heading: "Key technical decisions",
        blocks: [
          { t: "h3", text: "Why Vertex AI for embeddings" },
          { t: "p", html: `OpenAI didn't expose API access to the specific video embedding model needed at the time. Local alternatives would be expensive to run. Vertex AI offered the best cost-quality balance for production use.` },
          { t: "h3", text: "Why self-hosted Whisper" },
          { t: "p", html: `At scale, API costs for transcription become significant. Self-hosting on local GPU eliminated recurring transcription expense entirely.` },
          { t: "h3", text: "Why multi-language TTS via reseller provider" },
          { t: "p", html: `Instead of subscribing directly with rigid plan-based API limits, I used a pay-as-you-go reseller. Same quality output, no subscription lock-in, easier cost scaling.` },
          { t: "h3", text: "Why Qdrant locally" },
          { t: "p", html: `Vector database hosted on a local server eliminated cloud database recurring costs. The full library lived on a single home server (i5 10th gen + GTX 1070).` },
        ],
      },
      {
        heading: "Cost engineering",
        blocks: [
          { t: "p", html: `Per-video cost breakdown for a 20-minute output:` },
          { t: "ul", items: [
            `Embedding creation (one-time per source video): negligible`,
            `Whisper transcription: free (self-hosted)`,
            `Gemini rewriting + translation: ~cents`,
            `Multi-language voiceover (via reseller): primary cost component`,
            `Storage: free (local)`,
            `Processing: electricity only`,
          ] },
          { t: "quote", text: `Total per video: under $1, even for long-form 20-minute content.` },
          { t: "p", html: `This is the kind of cost structure that makes large-scale localization economically viable — manually localizing a 20-minute video would take a designer/editor 8–15 hours of work.` },
        ],
      },
      {
        heading: "Production setup",
        blocks: [
          { t: "ul", items: [
            `Deployed on home server (i5-10K + GTX 1070, 16GB RAM)`,
            `Single Telegram bot interface — client submits URLs, receives finished videos`,
            `FFmpeg with GPU acceleration for video assembly`,
            `Throughput: ~2 videos per hour for 20-minute outputs (assembly is the bottleneck)`,
            `Scalable design: architecture supports parallel deployment across multiple GPU nodes (didn't require high-end cards — 2060/3060 sufficient for this workload)`,
            `Category-based embedding namespaces (e.g., separate libraries for cooking content, gaming content) — keeps semantic matching relevant within domains`,
          ] },
        ],
      },
      {
        heading: "Challenges solved",
        blocks: [
          { t: "h3", text: "1. Embedding quality for visual matching" },
          { t: "p", html: `Initial implementation produced poor semantic matches — new audio about Topic X would get visually unrelated footage. Solution: augmented each video segment's embedding with a JSON content description, dramatically improving match relevance.` },
          { t: "h3", text: "2. Pacing and rhythm in assembled videos" },
          { t: "p", html: `Auto-assembled videos initially looked unnatural — segments too short (under 1.5s) or too long (over 15s), character cuts at awkward moments. Built constraints into the assembly logic: minimum/maximum segment durations, avoiding repeat segments within proximity, audio level normalization.` },
          { t: "h3", text: "3. Migration from Firebase to local Qdrant" },
          { t: "p", html: `Inherited architecture stored embeddings in Firebase at recurring cost. Migrated entire pipeline to locally-hosted Qdrant, eliminating ongoing database expense entirely.` },
          { t: "h3", text: "4. Whisper translation quality" },
          { t: "p", html: `Standard Whisper translations sometimes produced awkward output. Added Gemini as a rewriting layer that improved both meaning preservation and natural language flow in the target language.` },
        ],
      },
      {
        heading: "Outcome",
        blocks: [
          { t: "stats", items: [
            { number: "< $1", label: "Per 20-minute video produced" },
            { number: "4+", label: "AI services orchestrated" },
            { number: "~2/hour", label: "Throughput for 20-min outputs" },
            { number: "3 mo", label: "Active production use" },
          ] },
          { t: "p", html: `End-to-end automation — client submits a URL via Telegram, receives ready-to-publish video without intermediate manual steps. Sub-$1 cost per 20-minute output. Scalable architecture designed to expand across multiple GPU instances and category-specific libraries.` },
        ],
      },
      {
        heading: "Tech stack",
        blocks: [
          { t: "table", rows: [
            ["Language", "Python"],
            ["Video Processing", "FFmpeg (GPU-accelerated)"],
            ["Embeddings", "Vertex AI"],
            ["Transcription", "Whisper Large (self-hosted)"],
            ["LLM Rewriting", "Gemini"],
            ["Voice Synthesis", "Multi-language TTS"],
            ["Vector Database", "Qdrant (self-hosted)"],
            ["Interface", "Telegram Bot"],
          ] },
        ],
      },
      {
        heading: "What this demonstrates",
        blocks: [
          { t: "ul", items: [
            `Multi-model AI orchestration — coordinated 4+ AI services into a single coherent pipeline`,
            `Semantic understanding of video content — embedding-based matching for visual-audio coherence`,
            `End-to-end product engineering — from raw input URL to finished deliverable, all automated`,
            `Cost optimization through architecture — strategic decisions on what to self-host vs API, keeping per-video cost under $1 even for premium AI stack`,
            `Custom solution development — built something that didn't exist as a product, for a specific commercial need`,
          ] },
        ],
      },
    ],
    prev: { href: "/work/motion-control", label: "← Previous: Motion Control Workflow" },
    next: { href: "/work/metra-ai", label: "Next: Metra AI →" },
  },

  {
    slug: "motion-control",
    eyebrow: "Case Study 03",
    title: "Motion Control Workflow — 84% Cost Reduction vs Premium Video AI",
    lead: "Replaced premium proprietary motion control services with open source ComfyUI workflow. Approximately $12,000 in annual savings per client at production scale — and capability premium services can't match.",
    meta: {
      role: "Solo Developer",
      timeline: "4–5 months production",
      status: "Active with 2 commercial clients",
    },
    visual: {
      kind: "cost",
      beforeLabel: "Kling 2.6 (premium)",
      beforeValue: "$1.20 / video",
      afterLabel: "Custom Wan 2.2 workflow",
      afterValue: "$0.19 / video",
      afterPct: 16,
      reduction: "84%",
    },
    sections: [
      {
        heading: "The business problem",
        blocks: [
          { t: "p", html: `A digital content agency needed to produce video content at industrial scale — targeting hundreds to thousands of videos per month. They were evaluating premium video AI services (Kling 2.6 and similar) for motion control video generation, where a source video's movements are transferred to a target character.` },
          { t: "p", html: `The economics were brutal:` },
          { t: "ul", items: [
            `Premium services charge $0.21–$1.20 per generation for motion control workflows (3.5–20 credits at ~$0.06–0.08 per credit)`,
            `At their volume (1,000+ videos per month, target of 100 videos per hour during production sprints), this translated to thousands of dollars monthly just for AI generation`,
            `Credit-based limits restricted scaling to their actual output needs`,
            `Premium service content policies restricted what could actually be generated`,
          ] },
          { t: "p", html: `They needed industrial-scale video generation that was both <strong>dramatically cheaper</strong> and <strong>operationally flexible</strong>.` },
        ],
      },
      {
        heading: "What made this hard",
        blocks: [
          { t: "p", html: `Motion control isn't trivially replicable. The technology requires:` },
          { t: "ul", items: [
            `Skeleton/pose detection from source video`,
            `Character segmentation that handles complex motion accurately`,
            `Motion transfer preserving both action and visual coherence`,
            `Background and context handling so the result looks natural`,
          ] },
          { t: "p", html: `Most premium services (Kling, Hailuo, RunwayML) built motion control as proprietary feature, charging accordingly. Open source equivalents existed but were either broken, hard to find, or required deep ComfyUI expertise to make production-ready.` },
        ],
      },
      {
        heading: "My approach",
        blocks: [
          { t: "p", html: `After extensive research and testing, I identified that <strong>Wan 2.2</strong> — an older but underutilized open source model — could match premium motion control quality through the right ComfyUI workflow architecture.` },
          { t: "p", html: `The challenge: existing workflows were either broken or required manual segmentation (manually marking where the character is on each frame — completely impractical at scale).` },
          { t: "h3", text: "Iteration 1" },
          { t: "p", html: `Inherited a broken workflow loaded with mysterious models and unused LoRAs. Stripped it down to working components, but segmentation still required manual frame-by-frame annotation. Unworkable at production scale.` },
          { t: "h3", text: "Iteration 2" },
          { t: "p", html: `After more research, found a better workflow with automated segmentation models. Customized and stabilized it for production use. This became the production version.` },
          { t: "h3", text: "Ongoing refinements" },
          { t: "ul", items: [
            `Integrated video upscaling sub-workflow to improve output quality`,
            `Added frame interpolation (smooth 30fps → 60fps output)`,
            `Built around RunningHub API with multi-key parallel processing`,
            `Handled edge cases (object handling discrepancies between source motion and target character)`,
          ] },
        ],
      },
      {
        heading: "Production architecture",
        blocks: [
          { t: "ul", items: [
            `ComfyUI workflow running on RunningHub GPU compute`,
            `RTX 5080-class GPUs sufficient for the workload (no premium hardware required)`,
            `5 parallel tasks per API key, multi-key setup for scaling beyond single-account limits`,
            `Generation time: ~20 minutes compute per video on standard tier`,
            `Integrated into broader content pipeline (used as a module within larger automated content production system)`,
            `Accessible through multiple interfaces — Telegram bots, web interface, or direct ComfyUI for power users`,
          ] },
        ],
      },
      {
        heading: "Capability comparison: not just cheaper, different capabilities",
        blocks: [
          { t: "p", html: `Beyond cost, premium services have <strong>hard technical limits</strong> that constrain commercial use:` },
          { t: "h3", text: "Premium service limitations (Kling 2.6 Motion Control)" },
          { t: "ul", items: [
            `Maximum 30 seconds per single continuous generation`,
            `Credit-burn scales with duration (longer = exponentially more expensive)`,
            `Content policy restrictions on certain commercial use cases`,
          ] },
          { t: "h3", text: "My implementation" },
          { t: "ul", items: [
            `No hard duration limit — video length constrained only by GPU compute time available`,
            `Can generate 1 minute, 2 minutes, 10+ minute videos in single continuous generation`,
            `Same cost-per-second economics scaling linearly with duration`,
            `No content policy friction for legitimate commercial work`,
          ] },
          { t: "quote", text: `For long-form content production, this isn't an optimization — it's a capability gap that premium services simply don't fill.` },
        ],
      },
      {
        heading: "Cost engineering — the math",
        blocks: [
          { t: "h3", text: "RunningHub pricing structure" },
          { t: "ul", items: [
            `$0.0004 per coin`,
            `24 coins per minute of GPU compute time`,
            `~$0.01 per minute of compute`,
          ] },
          { t: "h3", text: "Per-video cost for typical 30-second output" },
          { t: "p", html: `20 minutes of compute time per video → 480 coins → <strong>~$0.19 per video</strong>` },
          { t: "h3", text: "Kling 2.6 motion control comparison (same 30-second video)" },
          { t: "p", html: `15–20 credits per generation × $0.06–0.08 per credit → <strong>~$0.90–$1.60 per video</strong> (midpoint ~$1.20)` },
          { t: "h3", text: "At client's actual production volume" },
          { t: "p", html: `The per-video cost reduction is the headline, but the combined value comes from three compounding factors: <strong>84% cost reduction</strong>, <strong>removal of duration limits enabling content types competitors can't produce</strong>, and <strong>operational flexibility through parallel multi-key processing</strong>.` },
        ],
      },
      {
        heading: "Quality comparison",
        blocks: [
          { t: "p", html: `The honest answer: <strong>quality matches Kling for the production use case, occasionally better</strong>.` },
          { t: "p", html: `Where premium services slightly edge out: edge cases involving unusual object handling (e.g., source video shows person holding a box, target character doesn't have one — both systems can produce artifacts here, solvable by pre-modifying the source image).` },
          { t: "p", html: `Where my implementation matches or exceeds: standard motion transfer scenarios, which represent 95%+ of production volume.` },
          { t: "p", html: `<em>Both occasionally hallucinate.</em> This is expected behavior for current generation video AI — neither premium nor open source is hallucination-free.` },
        ],
      },
      {
        heading: "Knowledge insights gained",
        blocks: [
          { t: "p", html: `Through this project I developed deep expertise in:` },
          { t: "ul", items: [
            `ComfyUI workflow architecture — including debugging, library management, and the ComfyUI Manager ecosystem`,
            `Open source video model capabilities — particularly Wan 2.2 strengths and limitations (excellent for motion transfer, weaker for from-scratch generation)`,
            `GPU resource optimization — getting production quality on consumer GPUs rather than enterprise hardware`,
            `Video post-processing integration — upscaling and frame interpolation chained into the main generation workflow`,
            `Production stabilization — handling the inevitable breakage when custom node maintainers change repositories, model versions deprecate, etc.`,
          ] },
        ],
      },
      {
        heading: "Outcome",
        blocks: [
          { t: "stats", items: [
            { number: "84%", label: "Cost reduction at production scale" },
            { number: "~$12K", label: "Annual savings per client" },
            { number: "~$0.19", label: "Per-video cost at 30s output" },
            { number: "100+/hr", label: "Industrial-scale throughput target" },
          ] },
          { t: "ul", items: [
            `4–5 months continuous production use by 2 commercial clients in active content production`,
            `Industrial-scale output — supporting target throughput of 100+ videos per hour`,
            `Capability beyond premium services — no 30-second cap on video length`,
            `Integrated foundation for broader automated content production pipeline`,
            `Operational flexibility — no content policy restrictions, no credit-based rate limits beyond infrastructure capacity`,
          ] },
        ],
      },
      {
        heading: "Tech stack",
        blocks: [
          { t: "table", rows: [
            ["AI Model", "Wan 2.2 (open source)"],
            ["Workflow Engine", "ComfyUI"],
            ["Segmentation", "Automated segmentation models"],
            ["GPU Compute", "RunningHub (RTX 5080-class)"],
            ["Video Processing", "FFmpeg"],
            ["Post-processing", "Upscaling · Frame interpolation"],
          ] },
        ],
      },
      {
        heading: "What this demonstrates",
        blocks: [
          { t: "ul", items: [
            `Deep open source AI expertise — finding, debugging, and productionizing workflows that aren't documented or widely known`,
            `Cost arbitrage thinking — identifying when premium AI services charge dollars for capabilities that open source delivers at cents`,
            `Capability gap identification — finding business value in capabilities premium services don't offer at all (long-form motion control)`,
            `Production engineering — taking broken or impractical workflows and making them industrially reliable`,
            `Workflow architecture — chaining multiple processing stages (motion control + segmentation + upscaling + interpolation) into coherent production pipelines`,
            `GPU compute optimization — production results on consumer hardware tier`,
          ] },
        ],
      },
    ],
    prev: { href: "/work/open-source-lipsync", label: "← Previous: Lipsync System" },
    next: { href: "/work/video-localization", label: "Next: Video Localization Pipeline →" },
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
