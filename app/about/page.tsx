import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { jsonLdScript } from "@/lib/jsonld";

const CAL_URL = "https://cal.com/david-chistiy-lmbu8n";

export const metadata: Metadata = {
  title: "About David Chystyi — AI Engineer & Consultant",
  description:
    "Solo AI engineer. Started in DevOps at 16, built an automation agency at 18 past $20k in six months. I make production AI reliable and stop it overspending.",
  keywords: [
    "David Chystyi",
    "AI engineer",
    "AI implementation consultant",
    "production AI reliability",
    "AI cost optimization",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About David Chystyi — AI Engineer & Consultant",
    description:
      "I make AI systems that businesses can actually rely on, without paying more than they should.",
    type: "profile",
    url: "https://chystyi.dev/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About David Chystyi",
    description:
      "I make AI systems that businesses can actually rely on, without paying more than they should.",
  },
};

// ProfilePage is the schema type for a page *about* a person, and pointing
// mainEntity at the existing #david node keeps one Person in the graph rather
// than minting a second one that competes with it.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://chystyi.dev/about#page",
      url: "https://chystyi.dev/about",
      name: "About David Chystyi",
      isPartOf: { "@id": "https://chystyi.dev/#website" },
      mainEntity: { "@id": "https://chystyi.dev/#david" },
      breadcrumb: {
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
            name: "About",
            item: "https://chystyi.dev/about",
          },
        ],
      },
    },
  ],
};

function Portrait() {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet="/img/david-chystyi-sm.webp 440w, /img/david-chystyi.webp 880w"
        sizes="(max-width: 760px) 260px, 400px"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/david-chystyi.jpg"
        srcSet="/img/david-chystyi-sm.jpg 440w, /img/david-chystyi.jpg 880w"
        sizes="(max-width: 760px) 260px, 400px"
        alt="David Chystyi"
        width={880}
        height={880}
        // Above the fold on this page, so it should not be lazy.
        loading="eager"
        fetchPriority="high"
      />
    </picture>
  );
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />
      <Nav variant="blog" />

      {/* Hero — portrait beside the one-line positioning */}
      <section className="hero hero-short about-hero">
        <div className="container">
          <div className="about-hero-grid">
            <Reveal>
              <div className="about-portrait">
                <Portrait />
              </div>
            </Reveal>
            <div className="about-hero-copy">
              <Reveal delay={0.05}>
                <div className="eyebrow">About</div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1>
                  I make AI systems businesses can actually <em>rely on</em>.
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="lead">
                  Without paying more than they should.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-line floating-section">
        <div className="container">
          <div className="about-body">
            <Reveal>
              <h2>How I got here</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                I got into this early. At 16 I started teaching myself DevOps
                and a bit of programming, mostly because I wanted to understand
                how things actually run, not just how to build them. That turned
                out to be the useful half. Most people can get an AI to work on
                their laptop. Making it survive in production is a different
                skill, and that&apos;s the one I kept going deeper on.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                At 18 I started an automation agency with a friend. In about six
                months we went from zero to real paying clients and over $20k in
                revenue, working with businesses in London and across Europe. Not
                prototypes or side projects — actual systems handling real
                traffic.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2>A few things I&apos;ve built</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <ul className="about-built">
                <li>
                  <span className="about-built-num">01</span>
                  <div>
                    A content pipeline for a language teacher that pulled{" "}
                    <b>1.3M views and 2,500 new followers in five days</b>, with
                    the top post hitting 865k views and a comment from one of the
                    country&apos;s largest telecom brands.
                  </div>
                </li>
                <li>
                  <span className="about-built-num">02</span>
                  <div>
                    An automated video editing system for a London agency that
                    took their turnaround from{" "}
                    <b>an hour per video down to about three minutes</b>.
                  </div>
                </li>
                <li>
                  <span className="about-built-num">03</span>
                  <div>
                    Eval testing systems for Metra AI and its lead-automation
                    product, so the AI&apos;s output could actually be measured
                    and trusted instead of hoped for.
                  </div>
                </li>
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="about-note">
                Each of these is written up in full, with the numbers, in the{" "}
                <Link href="/work">case studies</Link>.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2>What I actually do</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                What I actually do is the unglamorous part most people skip.
                Guardrails so an agent can&apos;t break your production. Human
                checkpoints where they matter. Eval tests that prove the output
                is correct instead of assuming it. And replacing expensive
                proprietary services with open-source pipelines, which usually
                cuts costs by a lot.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2>How I work</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                I work directly. No agency layers, no account managers, no
                telephone game. You talk to the person who builds the thing. That
                means straight answers about what AI can and can&apos;t do, fast
                iteration, and systems built to hold up under real use, not to
                look good in a pitch.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="about-closer island">
                <p>
                  If your AI costs too much, breaks too often, or just
                  isn&apos;t delivering what it promised — that&apos;s exactly
                  the problem I solve.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="cta section-line">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Free, no commitment</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>Start with the audit.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              I&apos;ll map where your AI overspends and where it breaks — in
              your numbers. Then you decide what&apos;s worth doing.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="contact-options">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Book a free audit <span className="arrow">→</span>
              </a>
              <Link href="/audit" className="btn btn-secondary">
                What the audit covers
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
