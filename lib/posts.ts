import type { Section } from "./cases";

/**
 * Blog posts.
 *
 * Deliberately the same Block/Section shape as lib/cases.ts so both render
 * through components/BlockView.
 *
 * Case studies are NOT duplicated in here. They live at /work/<slug> and the
 * blog index links to them; publishing the same prose at two URLs would split
 * the ranking signal between them for no gain.
 *
 * Every figure below traces to a published case study. Do not add numbers here
 * that are not backed by one.
 */
export type Post = {
  slug: string;
  topic: string;
  title: string;
  lead: string;
  /**
   * Short <title> for search results — headline-length titles get truncated
   * around 60 characters once " · David Chystyi" is appended. Falls back to
   * `title`.
   */
  metaTitle?: string;
  /** ≤155 chars, outcome-first. Falls back to lead. */
  metaDescription?: string;
  /** ISO date, used for sitemap lastmod, JSON-LD and the visible byline. */
  date: string;
  updated?: string;
  readingMinutes: number;
  /**
   * Written but not published. Drafts are excluded from the index, the
   * sitemap, the RSS feed and static generation, so nothing reaches search
   * engines or readers until this is removed.
   */
  draft?: boolean;
  sections: Section[];
};

export const posts: Post[] = [
  {
    slug: "ai-video-generation-cost-per-minute",
    topic: "AI cost optimization",
    title: "What AI video generation really costs per minute at volume",
    metaTitle: "AI video generation cost per minute",
    lead: "Per-output pricing is the right answer for a one-off and the wrong one for a production line. Here is where the crossover sits, and the limit nobody quotes you until you hit it.",
    metaDescription:
      "AI video APIs charge $0.05–0.75 per second. Renting the compute instead changes the maths at volume — and removes the length caps that stop you outright.",
    date: "2026-08-06",
    readingMinutes: 10,
    draft: true,
    sections: [
      {
        heading: "The only question that matters: once, or every day",
        blocks: [
          {
            t: "p",
            html: `If you need one video, use a finished service. HeyGen, Kling, Runway and the rest are genuinely good, they cost a few dollars, and building anything yourself would be a waste of a week. That is not a close call and I would tell any client the same.`,
          },
          {
            t: "p",
            html: `The decision only changes when the same job repeats — hundreds of videos a month, or dozens a day. At that point you stop buying a video and start buying a production line, and the pricing model that was cheap for one becomes the most expensive line in the business.`,
          },
          {
            t: "quote",
            text: "Per-output pricing is rented convenience. It is worth paying for until the moment it becomes the product itself.",
          },
        ],
      },
      {
        heading: "What paying per output costs",
        blocks: [
          {
            t: "p",
            html: `Video APIs bill per second of finished output. As of 2026 the range across the main providers runs roughly <b>$0.05 to $0.75 per second</b> — about <b>$3 to $45 per minute</b>. The spread between cheapest and dearest is around 7×, which already tells you the price reflects positioning as much as compute.`,
          },
          {
            t: "p",
            html: `Avatar and lipsync services price the same way. HeyGen's pay-as-you-go API works out at roughly <b>$1 to $4 per finished minute</b> depending on the avatar engine, and its subscription tiers convert to credits at a similar rate — the entry plan is about ten minutes of its top avatar engine per month.`,
          },
          {
            t: "p",
            html: `None of that is unreasonable for occasional use. Run it daily and do the multiplication: one thirty-minute video a day on a $2-per-minute engine is $1,800 a month, for one video a day.`,
          },
        ],
      },
      {
        heading: "What paying for compute costs instead",
        blocks: [
          {
            t: "p",
            html: `The alternative is not "buy a server". I have never bought a GPU for a client. You rent the card by the hour, run your own workflow on it, and pay for time rather than for output.`,
          },
          {
            t: "p",
            html: `Real marketplace listings at the time of writing, not datasheet figures — what you can actually put a card on:`,
          },
          {
            t: "table",
            rows: [
              ["H200 — $3.953/hr", "140 GB VRAM · 4,046 GB/s · 53.5 TFLOPS"],
              ["B200 — $6.006/hr", "179 GB VRAM · 6,061 GB/s · 59.6 TFLOPS"],
            ],
          },
          {
            t: "p",
            html: `Worth reading that table carefully, because the obvious conclusion is the wrong one. The B200 costs <b>52% more</b> and gives 28% more VRAM and 50% more bandwidth — but measured on raw performance per dollar it is actually the <i>worse</i> buy. You take it for one reason: fitting more into a single pass. For video diffusion the binding constraint is usually VRAM and memory bandwidth rather than raw compute, so the card that holds your clip in one piece beats the card with the better price-performance ratio.`,
          },
          {
            t: "p",
            html: `Note also that these are marketplace numbers, and they move. The first provider I used was priced well above what equivalent capacity costs today. Re-checking the market is part of the job, not a one-time decision.`,
          },
          {
            t: "p",
            html: `The billing unit changes from "per minute of output" to "per hour of card". Whether that is cheaper comes down to one measurement: how many finished minutes your workflow produces per rented hour.`,
          },
        ],
      },
      {
        heading: "Length is a constraint you inherit",
        blocks: [
          {
            t: "p",
            html: `Per-output services carry caps that have nothing to do with your budget. A leading avatar API stops at 30 minutes per video. Motion-control services have commonly capped output at 30 <i>seconds</i>.`,
          },
          {
            t: "p",
            html: `Most work sits comfortably inside those limits, so for most people this never comes up. But when it does, no amount of money moves it — you are not paying for a longer clip, you are asking for a feature that is not on offer.`,
          },
          {
            t: "p",
            html: `With the card in front of you the ceiling is VRAM instead, and VRAM is something you choose. On a 140 GB card a single pass holds a clip in the range of seven to eight minutes; a 179 GB card holds more. Longer material gets segmented. The limit becomes an engineering decision rather than a line in someone else's pricing page.`,
          },
          {
            t: "p",
            html: `That is what happened on motion control. Replacing a premium motion-control service with our own workflow cut cost by 84% — roughly <b>$12,000 a year</b> at that client's volume, with per-video cost down in the tens of cents against a service charging <b>$0.09–0.14 per second</b>. It also removed the 30-second cap. Replacing a managed service sometimes buys capability, not only margin.`,
          },
          {
            t: "stats",
            items: [
              { number: "84%", label: "Motion control cost reduction" },
              { number: "99%+", label: "Lipsync cost reduction" },
              { number: "~$12K", label: "Annual saving, one client" },
              { number: "30 sec", label: "Cap the paid service imposed" },
            ],
          },
        ],
      },
      {
        heading: "Where the saving actually comes from",
        blocks: [
          {
            t: "p",
            html: `"Use open source" is the lazy version of this answer and it is not what does the work. Four separate levers matter, and the model licence is only one of them.`,
          },
          {
            t: "ul",
            items: [
              `<b>Which model you call.</b> The largest available model is rarely the one that clears the bar for a specific step. Most pipelines are sized once during prototyping and never revisited.`,
              `<b>Whether you call a model at all.</b> This is the one most teams miss. A surprising share of steps inside an "AI pipeline" are deterministic — trimming, reframing, cropping, sequencing, format conversion — and belong in ordinary code. Every one of those you move out of a model call costs nothing and never hallucinates.`,
              `<b>What you pay for.</b> Per-output APIs, pay-per-generation services and rented compute are three different pricing models for the same result. The cheapest one changes with volume, and nothing stops you using different ones for different steps.`,
              `<b>Where it runs.</b> Rented capacity, chosen per workload. The first provider I used was priced well above what the same work costs now; the market moves and it is worth re-checking.`,
            ],
          },
          {
            t: "p",
            html: `Most of the reduction on the pipelines I have built came from the first three. Compute was the last step, not the trick.`,
          },
        ],
      },
      {
        heading: "Where the proprietary service still wins",
        blocks: [
          {
            t: "p",
            html: `Worth being straight about the limits, because the honest version of this argument is narrower than the marketing version.`,
          },
          {
            t: "p",
            html: `<b>One-off work.</b> Already covered — do not build a pipeline for a job you will run once.`,
          },
          {
            t: "p",
            html: `<b>Top-end photorealism.</b> The open video models are not currently at the level of the best proprietary ones for pure realism. They can get remarkably close, but doing it needs a very specific workflow — the right model, the right LoRAs, prompts tuned for that combination — and that is a real engineering effort, not a download. If your output is a brand film where realism is the product, the paid service is probably still the right call.`,
          },
          {
            t: "p",
            html: `One useful piece of context: I rebuilt these workflows more than six months ago and re-checked the landscape while writing this. The significant open video models have not changed. That stability cuts both ways — the quality gap has not closed, but a workflow built on them does not rot either.`,
          },
        ],
      },
      {
        heading: "How to decide",
        blocks: [
          {
            t: "p",
            html: `Three numbers settle it. How many finished minutes do you need per month? What is the per-minute rate you are paying now? And how many minutes does one hour of a rented card actually produce on your workflow?`,
          },
          {
            t: "p",
            html: `If the monthly volume is small, stop — you already have the right answer. If it is large, or if you are hitting a length cap, the third number is the one worth measuring, and it is measurable in an afternoon.`,
          },
          {
            t: "p",
            html: `If you want that worked out against your actual volume rather than a generic table, the <a href="/audit">free AI Systems Audit</a> does exactly this: your current per-unit cost, where it goes, and what the realistic alternative would be.`,
          },
        ],
      },
    ],
  },
  {
    slug: "cut-ai-inference-costs",
    topic: "AI cost optimization",
    title: "How to cut AI inference costs by 80–99% without losing quality",
    metaTitle: "How to cut AI inference costs 80–99%",
    lead: "Most teams overpay for AI by a large multiple and never measure where. Here is the method I use to find the waste and replace it — and what it actually produced on four production systems.",
    metaDescription:
      "The method behind 84–99% AI cost reductions: find the per-unit price, isolate the expensive step, replace it with a self-hosted equivalent, and prove it.",
    date: "2026-08-06",
    readingMinutes: 9,
    sections: [
      {
        heading: "Nobody knows their per-unit cost",
        blocks: [
          {
            t: "p",
            html: `Almost every team I audit can tell me their monthly AI bill. Almost none can tell me what one unit of output costs — one video, one generated post, one processed document. That single number is where the whole exercise starts, because a monthly total hides everything that matters. It cannot tell you which step is expensive, whether cost scales with usage or with waste, or what you would save by changing any one thing.`,
          },
          {
            t: "p",
            html: `The gap is usually large. In one case a client was paying <b>$3–5 per minute</b> of generated video to a proprietary API. That is an unremarkable-looking line item until you multiply it by production volume, at which point it is the single biggest cost in the business — and it had never been expressed per minute before the audit.`,
          },
          {
            t: "quote",
            text: "You cannot optimize a number you have never calculated. The first deliverable of any cost work is the per-unit price, not a recommendation.",
          },
        ],
      },
      {
        heading: "Where the money actually goes",
        blocks: [
          {
            t: "p",
            html: `Once you have a per-unit figure, break it into steps. AI spend concentrates in a few predictable places, and in my experience the ranking is remarkably stable:`,
          },
          {
            t: "ul",
            items: [
              `<b>Premium managed services.</b> Proprietary APIs that wrap an open model and charge for convenience. This is almost always the largest line, and almost always the most replaceable.`,
              `<b>Paying for the wrong tier.</b> A frontier model doing work a much smaller one handles identically. Model choice is often set once during prototyping and never revisited.`,
              `<b>Context you resend on every call.</b> Long unstructured prompts re-uploaded per request, billed per token, every time.`,
              `<b>Capacity you are not using.</b> Reserved compute sized for a peak that never arrives.`,
            ],
          },
          {
            t: "p",
            html: `The important property of that list is that none of these are model-quality problems. They are architecture and procurement problems, which is why the savings can be so large without the output getting worse.`,
          },
        ],
      },
      {
        heading: "Replace the expensive step, not the system",
        blocks: [
          {
            t: "p",
            html: `The instinct when a bill is too high is to rebuild. That is usually wrong. The cheaper and safer move is to isolate the single most expensive step and replace only that, holding the quality bar fixed and leaving everything around it alone.`,
          },
          {
            t: "h3",
            text: "Lipsync: $3–5 per minute to cents",
          },
          {
            t: "p",
            html: `A premium proprietary video-AI service was doing lipsync at $3–5 per minute. The replacement was a custom <b>ComfyUI</b> workflow built on <b>Infinity Talk</b> and <b>Wan 2.1</b>, self-hosted. Per-video cost went from dollars to cents — a reduction over 99% — and it has been running in production for more than six months. Nothing else in the client's pipeline changed.`,
          },
          {
            t: "h3",
            text: "Motion control: ~$12,000 a year back",
          },
          {
            t: "p",
            html: `The same approach against premium motion-control video services, this time on <b>Wan 2.2</b>: an 84% cost reduction, roughly <b>$12,000 in annual savings</b> at that client's production scale. A side effect worth noting — the self-hosted workflow also removed the 30-second duration cap the paid service imposed. Replacing a managed service sometimes buys you capability, not just margin.`,
          },
          {
            t: "h3",
            text: "Localization: under $1 per 20-minute video",
          },
          {
            t: "p",
            html: `A multi-model pipeline — <b>Whisper</b> for transcription, <b>Gemini</b> and <b>Vertex AI</b> for translation, <b>Qdrant</b> for retrieval, multi-language TTS for delivery — produces a fully localized derivative of a 20-minute video for <b>under $1</b>. The saving here comes from routing each step to the cheapest model that clears the bar for that specific step, rather than sending everything to one expensive general-purpose model.`,
          },
          {
            t: "stats",
            items: [
              { number: "99%+", label: "Lipsync cost reduction" },
              { number: "84%", label: "Motion control reduction" },
              { number: "~$12K", label: "Annual saving, one client" },
              { number: "<$1", label: "Per 20-min localized video" },
            ],
          },
        ],
      },
      {
        heading: "Compress the context instead of resending it",
        blocks: [
          {
            t: "p",
            html: `Not every saving is an infrastructure swap. On a content system, users supplied channel lore that frequently ran past <b>3,000 tokens</b> of unstructured text. The naive design sends that with every generation request and pays for it every time.`,
          },
          {
            t: "p",
            html: `Instead, the lore is compressed and translated into the channel's posting language once, at upload time. Generation then receives a structured, language-matched summary rather than the raw text. Per-video token cost settled at roughly <b>200 tokens</b> — negligible at volume. The relevance of the output went <i>up</i>, because the model was no longer being asked to find the signal in three thousand tokens of prose on every single call.`,
          },
          {
            t: "p",
            html: `That is the general pattern worth internalising: work done once at write time is work you are not billed for on every read.`,
          },
        ],
      },
      {
        heading: "Prove it, or it did not happen",
        blocks: [
          {
            t: "p",
            html: `A cost project that ends with an estimate is not finished. Measure the same per-unit number before and after, on the same workload, and keep measuring after launch — prices, models and usage patterns all move. The claim you should be able to make at the end is not "we switched to open source" but "this unit cost $X and now costs $Y, at the same quality bar, verified on production traffic."`,
          },
          {
            t: "p",
            html: `If you want that number for your own stack, the <a href="/audit">free AI Systems Audit</a> produces it: where the spend goes, which step is the expensive one, and what the realistic saving is — in your numbers, not generic percentages.`,
          },
        ],
      },
    ],
  },
  {
    slug: "ai-works-in-demo-breaks-in-production",
    topic: "AI reliability",
    title: "Why your AI works in the demo and breaks in production",
    metaTitle: "Why AI breaks in production",
    lead: "The failure is rarely the model. It is asking one prompt to satisfy too many constraints at once — and having nothing in place to catch it when it quietly gets one wrong.",
    metaDescription:
      "Production AI usually fails for structural reasons, not model quality: overloaded prompts, no verification, no guardrails, and silent failures nobody sees.",
    date: "2026-08-06",
    readingMinutes: 8,
    sections: [
      {
        heading: "The demo was never the hard part",
        blocks: [
          {
            t: "p",
            html: `A demo runs once, on input someone chose, watched by a person who will forgive a retry. Production runs thousands of times on input nobody inspected, and the failures are seen by customers — or by no one at all, which is worse. Systems that look identical in a demo behave completely differently under those two conditions, and the difference is almost never the model.`,
          },
        ],
      },
      {
        heading: "One prompt, too many constraints",
        blocks: [
          {
            t: "p",
            html: `The most common structural failure I find is a single large prompt carrying every requirement at once. It works during prototyping, when you are testing one requirement at a time, and degrades as soon as all of them apply simultaneously.`,
          },
          {
            t: "quote",
            text: "LLMs perform poorly when given too many simultaneous constraints. A single 3000-token prompt asking for \"rewrite this post in voice X, with lore Y, in format Z, with rules A/B/C\" produces inconsistent results because attention dilutes across requirements.",
          },
          {
            t: "p",
            html: `The tell is characteristic: output that is never wrong in the same way twice. Voice is right but format slips. Format is right but a rule is dropped. Each individual run looks like bad luck; in aggregate it is the architecture telling you the request is overloaded.`,
          },
          {
            t: "p",
            html: `The fix is decomposition — re-architecting one large request into focused stages, each with a single job, each verifiable on its own. It costs more calls and gets you an output you can actually reason about. Where a stage matters enough, a second pass cross-checks the first.`,
          },
        ],
      },
      {
        heading: "Silent failure is the expensive kind",
        blocks: [
          {
            t: "p",
            html: `A crash is cheap. Something raised, something logged, somebody knows. The failures that cost real money are the ones that produce confident, well-formatted, wrong output and return HTTP 200.`,
          },
          {
            t: "p",
            html: `So the question worth asking about any AI step is not "what happens if it fails" but "would we find out". Concretely, for each stage:`,
          },
          {
            t: "ul",
            items: [
              `If this produced plausible nonsense, what downstream check would catch it — and is that check actually there?`,
              `What is the fallback when it fails, and has that path ever run outside a test?`,
              `Does anything alert, or does the bad output just proceed quietly to the customer?`,
              `Is there a record of what the model was asked and what it returned, so a bad output can be reproduced later?`,
            ],
          },
        ],
      },
      {
        heading: "Guardrails: what it may touch",
        blocks: [
          {
            t: "p",
            html: `Reliability and safety converge on the same question — what is this system permitted to do? An AI step that can take irreversible action is a different risk class from one that returns text, and the distinction is often never drawn explicitly.`,
          },
          {
            t: "p",
            html: `Worth separating deliberately: destructive or irreversible operations, anything touching customer-visible state, anything that spends money, and anything that reads data the output should not be able to leak. Each of those wants either a hard block or a human checkpoint — and a human checkpoint is only real if the human has enough context to say no. An approval step nobody can meaningfully evaluate is theatre.`,
          },
          {
            t: "p",
            html: `The same logic extends to data at rest. On one production system, sensitive fields — phone numbers, messages, passwords — are encrypted with salt and pepper and GPU-resistant hashing, with decryption keys held off-server. The AI layer being clever does not exempt the boring parts from being correct.`,
          },
        ],
      },
      {
        heading: "You cannot fix what you do not measure",
        blocks: [
          {
            t: "p",
            html: `Most teams evaluate AI output by looking at it. That scales to roughly a dozen examples and then stops working entirely, which means quality regressions ship unnoticed until a customer reports one.`,
          },
          {
            t: "p",
            html: `Evals fix this: a fixed set of representative inputs, an explicit definition of a correct response, and a score you can watch move. They do not need to be sophisticated to be useful. A few dozen real cases with clear pass criteria will catch more regressions than any amount of re-reading prompts, and they turn "it feels worse since we changed the model" into a number.`,
          },
          {
            t: "p",
            html: `Once that exists, drift becomes visible instead of anecdotal, and you can change models on evidence rather than vibes.`,
          },
        ],
      },
      {
        heading: "Where to start",
        blocks: [
          {
            t: "p",
            html: `If your AI is unpredictable in production, the highest-yield sequence is: find the overloaded prompt and split it; add verification to the stage whose failure costs most; write down what the system is never allowed to do; then build a small eval set so you can tell whether any of it helped.`,
          },
          {
            t: "p",
            html: `That is the same order the <a href="/audit">free AI Systems Audit</a> works through — mapping failure points, missing guardrails and output drift against your actual system, and ranking them by what they cost you.`,
          },
        ],
      },
    ],
  },
];

/**
 * Everything publishable. Import this — not `posts` — anywhere the output is
 * user- or crawler-facing, so a draft cannot leak into the index, the sitemap,
 * the feed or a generated route.
 */
export const publishedPosts = posts.filter((p) => !p.draft);

export function getPost(slug: string): Post | undefined {
  return publishedPosts.find((p) => p.slug === slug);
}

/** Newest first, for the index and the feed. */
export const postsByDate = [...publishedPosts].sort((a, b) =>
  b.date.localeCompare(a.date)
);
