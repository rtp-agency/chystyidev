import type { MetadataRoute } from "next";

// We WANT to be crawled and cited by AI answer engines (GEO), so every known
// AI crawler is explicitly allowed alongside the standard `*` rule. Listing
// them by name is a clear, durable signal of intent (and easy to tighten later
// if any single bot ever needs to be excluded).
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: "https://chystyi.dev/sitemap.xml",
    host: "https://chystyi.dev",
  };
}
