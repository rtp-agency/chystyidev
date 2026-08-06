import { postsByDate } from "@/lib/posts";

// RSS for the blog. Static — regenerated at build time with everything else.
export const dynamic = "force-static";

const BASE = "https://chystyi.dev";

// XML has five predefined entities; escaping all of them keeps a stray
// ampersand or angle bracket in a title from breaking the whole feed.
const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const rfc822 = (iso: string) =>
  new Date(iso + "T00:00:00Z").toUTCString();

export function GET() {
  const items = postsByDate
    .map((p) => {
      const url = `${BASE}/blog/${p.slug}`;
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(p.date)}</pubDate>
      <category>${esc(p.topic)}</category>
      <description>${esc(p.metaDescription ?? p.lead)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>David Chystyi — Blog</title>
    <link>${BASE}/blog</link>
    <description>Writing on AI cost optimization and production AI reliability.</description>
    <language>en</language>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
