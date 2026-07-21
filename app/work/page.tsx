import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { work } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies — Production AI & Video Automation · David Chystyi",
  description:
    "Case studies: open-source AI pipelines that cut video-AI costs 84–99%, automated video editing at scale, and multi-model localization under $1 per video.",
  keywords: [
    "AI consulting case studies",
    "AI cost optimization case study",
    "video production automation",
    "automated video editing at scale",
    "production AI systems",
  ],
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Case Studies — David Chystyi",
    description:
      "Production AI systems that shipped: AI cost optimization and video production automation, each with the numbers.",
    type: "website",
    url: "https://chystyi.dev/work",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies — David Chystyi",
    description:
      "Production AI systems that shipped: AI cost optimization and video production automation.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://chystyi.dev/work#collection",
      name: "Case Studies",
      url: "https://chystyi.dev/work",
      isPartOf: { "@id": "https://chystyi.dev/#website" },
      about: { "@id": "https://chystyi.dev/#david" },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: work.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `https://chystyi.dev/work/${c.slug}`,
          name: c.title,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://chystyi.dev" },
        { "@type": "ListItem", position: 2, name: "Work", item: "https://chystyi.dev/work" },
      ],
    },
  ],
};

export default function WorkIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav variant="work" />

      <div className="case-detail">
        <div className="container-read work-index">
          <nav className="case-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Work</span>
          </nav>

          <div className="section-header">
            <Reveal>
              <div className="eyebrow">Selected work</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1>Production AI systems that shipped.</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">
                Case studies in AI cost optimization and video production
                automation — each one with the numbers.
              </p>
            </Reveal>
          </div>

          <div className="reading-col">
            {work.map((c) => (
              <Reveal key={c.slug}>
                <CaseCard c={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
