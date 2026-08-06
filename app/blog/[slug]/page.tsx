import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { BlockView } from "@/components/BlockView";
import { publishedPosts, getPost, postsByDate } from "@/lib/posts";
import { jsonLdScript } from "@/lib/jsonld";

export function generateStaticParams() {
  return publishedPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  const description = p.metaDescription ?? p.lead;
  return {
    title: `${p.metaTitle ?? p.title} · David Chystyi`,
    description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      title: p.title,
      description,
      type: "article",
      publishedTime: p.date,
      modifiedTime: p.updated ?? p.date,
      authors: ["David Chystyi"],
      url: `https://chystyi.dev/blog/${p.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description,
    },
  };
}

const fmtDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  const url = `https://chystyi.dev/blog/${p.slug}`;
  const description = p.metaDescription ?? p.lead;
  const more = postsByDate.filter((x) => x.slug !== p.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        headline: p.title,
        description,
        url,
        datePublished: p.date,
        dateModified: p.updated ?? p.date,
        author: { "@id": "https://chystyi.dev/#david" },
        publisher: { "@id": "https://chystyi.dev/#david" },
        mainEntityOfPage: url,
        isPartOf: { "@id": "https://chystyi.dev/blog#blog" },
        articleSection: p.topic,
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
          { "@type": "ListItem", position: 3, name: p.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />
      <Nav variant="blog" />

      <div className="case-detail">
        <div className="container">
          <section className="case-hero">
            <nav className="case-crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog">Blog</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{p.title}</span>
            </nav>
            <Reveal>
              <div className="case-eyebrow">{p.topic}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1>{p.title}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">{p.lead}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="case-meta">
                <span className="case-meta-item">
                  <strong>By:</strong> David Chystyi
                </span>
                <span className="case-meta-divider">·</span>
                <time className="case-meta-item" dateTime={p.date}>
                  {fmtDate(p.date)}
                </time>
                <span className="case-meta-divider">·</span>
                <span className="case-meta-item">
                  {p.readingMinutes} min read
                </span>
              </div>
            </Reveal>
          </section>

          {p.sections.map((sec) => (
            <Reveal key={sec.heading} as="section" className="case-section">
              <h2>{sec.heading}</h2>
              {sec.blocks.map((block, i) => (
                <BlockView key={i} block={block} />
              ))}
            </Reveal>
          ))}
        </div>

        <section className="case-related container">
          <h2>Keep reading</h2>
          <div className="case-related-grid">
            {more.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="case-related-card"
              >
                <span className="case-related-eyebrow">{r.topic}</span>
                <span className="case-related-title">{r.title}</span>
              </Link>
            ))}
          </div>
          <p className="case-related-note">
            Want this done on your own stack?{" "}
            <Link href="/audit">Book a free AI Systems Audit</Link>.
          </p>
        </section>
      </div>
    </>
  );
}
