import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { postsByDate } from "@/lib/posts";
import { cases } from "@/lib/cases";
import { jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Blog — Cutting AI Costs & Making Production AI Reliable · David Chystyi",
  description:
    "Writing on AI cost optimization and production reliability, plus case studies from shipped systems — every figure traced to real work.",
  keywords: [
    "AI cost optimization",
    "LLM cost reduction",
    "production AI reliability",
    "AI evals",
    "self-hosted AI",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — David Chystyi",
    description:
      "Writing on AI cost optimization and production reliability, plus case studies from shipped systems.",
    type: "website",
    url: "https://chystyi.dev/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — David Chystyi",
    description:
      "Writing on AI cost optimization and production reliability, plus case studies from shipped systems.",
  },
};

const fmtDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://chystyi.dev/blog#blog",
      name: "David Chystyi — Blog",
      description:
        "Writing on AI cost optimization and production AI reliability.",
      url: "https://chystyi.dev/blog",
      author: { "@id": "https://chystyi.dev/#david" },
      isPartOf: { "@id": "https://chystyi.dev/#website" },
      blogPost: postsByDate.map((p) => ({
        "@type": "BlogPosting",
        "@id": `https://chystyi.dev/blog/${p.slug}#post`,
        headline: p.title,
        description: p.metaDescription ?? p.lead,
        url: `https://chystyi.dev/blog/${p.slug}`,
        datePublished: p.date,
        dateModified: p.updated ?? p.date,
        author: { "@id": "https://chystyi.dev/#david" },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://chystyi.dev",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://chystyi.dev/blog",
        },
      ],
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />
      <Nav variant="blog" />

      <section className="hero hero-center hero-short">
        <div className="container">
          <div className="hero-copy-center">
            <Reveal>
              <div className="eyebrow eyebrow-center">Writing</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1>
                Notes from <em>production</em>.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lead">
                What I&apos;ve learned cutting AI running costs and keeping
                production AI reliable. Every number here traces to a system
                that shipped.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-line floating-section">
        <div className="container">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">Articles</div>
            </Reveal>
          </div>

          <div className="post-list">
            {postsByDate.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.07}>
                <Link href={`/blog/${p.slug}`} className="post-card island">
                  <div className="post-card-meta">
                    <span className="post-card-topic">{p.topic}</span>
                    <span className="post-card-dot" aria-hidden="true" />
                    <time dateTime={p.date}>{fmtDate(p.date)}</time>
                    <span className="post-card-dot" aria-hidden="true" />
                    <span>{p.readingMinutes} min read</span>
                  </div>
                  <h2 className="post-card-title">{p.title}</h2>
                  <p className="post-card-lead">{p.lead}</p>
                  <span className="post-card-more">
                    Read <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/*
        Case studies are listed here but link to /work/<slug>, where they
        already live. Re-publishing the same prose under /blog would put two
        URLs in competition for the same query.
      */}
      <section className="section-line floating-section">
        <div className="container">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">Case studies</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>Written up in full, with the numbers.</h2>
            </Reveal>
          </div>

          <div className="post-case-grid">
            {cases.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <Link
                  href={`/work/${c.slug}`}
                  className="post-case-card island"
                >
                  <span className="post-case-eyebrow">{c.eyebrow}</span>
                  <span className="post-case-title">{c.title}</span>
                  <span className="post-case-lead">{c.lead}</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="case-related-note">
              <Link href="/work">See the full case-study index</Link> — role,
              timeline and stack for each.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="cta section-line">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Free, no commitment</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>
              Want these numbers for <em>your</em> stack?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              The AI Systems Audit finds where your AI overspends and where it
              breaks — in your figures, not generic percentages.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="contact-options">
              <Link href="/audit" className="btn btn-primary">
                See the free audit <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
