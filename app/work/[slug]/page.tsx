import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { CaseVisual } from "@/components/CaseVisual";
import { cases, getCase, type Block } from "@/lib/cases";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  const description = c.metaDescription ?? c.lead;
  return {
    title: `${c.title} · David Chystyi`,
    description,
    keywords: caseKeywords(c.slug),
    alternates: { canonical: `/work/${c.slug}` },
    openGraph: {
      title: c.title,
      description,
      type: "article",
      url: `https://chystyi.dev/work/${c.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description,
    },
  };
}

// Video-pipeline cases vs. the AI-platform case get different topic keywords.
const VIDEO_SLUGS = new Set([
  "black-camel",
  "open-source-lipsync",
  "motion-control",
  "video-localization",
]);

function caseKeywords(slug: string): string[] {
  return VIDEO_SLUGS.has(slug)
    ? [
        "video production automation",
        "automated video editing",
        "AI video pipeline",
        "AI cost optimization",
        "AI consulting case study",
      ]
    : [
        "AI implementation",
        "multi-agent AI systems",
        "production AI reliability",
        "AI consulting case study",
      ];
}

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "p":
      return <p dangerouslySetInnerHTML={{ __html: block.html }} />;
    case "h3":
      return <h3>{block.text}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );
    case "quote":
      return <div className="case-quote-block">{block.text}</div>;
    case "stats":
      return (
        <div className="case-stats-grid">
          {block.items.map((s) => (
            <div key={s.label}>
              <div className="case-stat-number">{s.number}</div>
              <div className="case-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      );
    case "table":
      return (
        <table className="tech-table">
          <tbody>
            {block.rows.map(([k, v]) => (
              <tr key={k}>
                <td>{k}</td>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    default:
      return null;
  }
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  const url = `https://chystyi.dev/work/${c.slug}`;
  const isVideo = VIDEO_SLUGS.has(c.slug);
  const about = (
    isVideo
      ? ["Video production automation", "Automated video editing", "AI cost optimization"]
      : ["AI implementation", "Multi-agent AI systems", "Production AI reliability"]
  ).map((name) => ({ "@type": "Thing", name }));

  // Two sibling cases for internal linking (descriptive anchors below).
  const related = cases.filter((x) => x.slug !== c.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: c.title,
        description: c.metaDescription ?? c.lead,
        url,
        mainEntityOfPage: url,
        inLanguage: "en",
        image: `${url}/opengraph-image`,
        author: { "@id": "https://chystyi.dev/#david" },
        publisher: { "@id": "https://chystyi.dev/#david" },
        isPartOf: { "@id": "https://chystyi.dev/#website" },
        about,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://chystyi.dev" },
          { "@type": "ListItem", position: 2, name: "Work", item: "https://chystyi.dev/work" },
          { "@type": "ListItem", position: 3, name: c.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav variant="case" />

      <div className="case-detail">
        <div className="container">
          <section className="case-hero">
            <nav className="case-crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/work">Work</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{c.title}</span>
            </nav>
            <Reveal>
              <div className="case-eyebrow">{c.eyebrow}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1>{c.title}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">{c.lead}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="case-meta">
                <span className="case-meta-item">
                  <strong>Role:</strong> {c.meta.role}
                </span>
                <span className="case-meta-divider">·</span>
                <span className="case-meta-item">
                  <strong>Timeline:</strong> {c.meta.timeline}
                </span>
                <span className="case-meta-divider">·</span>
                <span className="case-meta-item">
                  <strong>Status:</strong> {c.meta.status}
                </span>
                {c.meta.link && (
                  <>
                    <span className="case-meta-divider">·</span>
                    <a href={c.meta.link.href}>{c.meta.link.text}</a>
                  </>
                )}
              </div>
            </Reveal>
          </section>

          {c.visual && (
            <Reveal>
              <CaseVisual visual={c.visual} />
            </Reveal>
          )}

          {c.sections.map((sec) => (
            <Reveal key={sec.heading} as="section" className="case-section">
              <h2>{sec.heading}</h2>
              {sec.blocks.map((block, i) => (
                <BlockView key={i} block={block} />
              ))}
            </Reveal>
          ))}
        </div>

        <section className="case-related container">
          <h2>Related work</h2>
          <div className="case-related-grid">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/work/${r.slug}`}
                className="case-related-card"
              >
                <span className="case-related-eyebrow">{r.eyebrow}</span>
                <span className="case-related-title">{r.title}</span>
              </Link>
            ))}
          </div>
          {isVideo && (
            <p className="case-related-note">
              Running a video or content agency?{" "}
              <Link href="/agencies">
                See video production automation for agencies
              </Link>
              .
            </p>
          )}
        </section>

        <section className="case-cta">
          <div className="container-narrow">
            <h2>Got a similar problem?</h2>
            <p>I&apos;d love to hear about what you&apos;re building.</p>
            <Link href="/#contact" className="btn btn-primary">
              Let&apos;s talk <span className="arrow">→</span>
            </Link>
          </div>
        </section>

        <div className="case-nav">
          <div className="case-nav-inner">
            <Link href={c.prev.href} className="case-nav-link">
              {c.prev.label}
            </Link>
            <Link href={c.next.href} className="case-nav-link">
              {c.next.label}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
