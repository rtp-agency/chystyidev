import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { jsonLdScript } from "@/lib/jsonld";
import {
  auditLead,
  auditProblem,
  auditSections,
  auditDeliverables,
  auditProcess,
  auditFitFor,
  auditNotFor,
  pricing,
} from "@/lib/site";

const CAL_URL = "https://cal.com/david-chistiy-lmbu8n";

export const metadata: Metadata = {
  title: "Free AI Systems Audit · David Chystyi",
  description:
    "A free, fixed-scope review of your AI setup: where you're overpaying, where it will break, and whether it's actually delivering. You get a prioritised report and a roadmap.",
  keywords: [
    "AI audit",
    "AI cost audit",
    "AI systems audit",
    "LLM reliability review",
    "AI eval testing",
    "free AI audit",
  ],
  alternates: { canonical: "/audit" },
  openGraph: {
    title: "Free AI Systems Audit — David Chystyi",
    description:
      "Where your AI loses money, where it breaks, and what it would take to fix — backed by your actual numbers.",
    type: "website",
    url: "https://chystyi.dev/audit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Systems Audit — David Chystyi",
    description:
      "Where your AI loses money, where it breaks, and what it would take to fix.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://chystyi.dev/audit#service",
      name: "AI Systems Audit",
      description: auditLead,
      url: "https://chystyi.dev/audit",
      serviceType: "AI systems audit",
      provider: { "@id": "https://chystyi.dev/#david" },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description:
          "The audit is free. Implementation projects start at $1,500.",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://chystyi.dev/audit#page",
      url: "https://chystyi.dev/audit",
      name: "Free AI Systems Audit",
      isPartOf: { "@id": "https://chystyi.dev/#website" },
      about: { "@id": "https://chystyi.dev/#david" },
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
            name: "AI Systems Audit",
            item: "https://chystyi.dev/audit",
          },
        ],
      },
    },
  ],
};

function Check() {
  return (
    <svg viewBox="0 0 17 17" fill="none" aria-hidden="true">
      <path
        d="M3.5 9L6.8 12.2L13.5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Cross() {
  return (
    <svg viewBox="0 0 17 17" fill="none" aria-hidden="true">
      <path
        d="M5 5L12 12M12 5L5 12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AuditPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />
      <Nav variant="work" />

      {/* Hero */}
      <section className="hero hero-center">
        <div className="container">
          <div className="hero-copy-center">
            <Reveal>
              <div className="eyebrow eyebrow-center">
                Free · Fixed scope · No pitch
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1>
                AI Systems <em>Audit</em>.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lead">{auditLead}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="hero-actions">
                <a
                  href={CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Book a free audit <span className="arrow">→</span>
                </a>
                <a href="#covers" className="btn btn-secondary">
                  What it covers
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The problem it answers */}
      <section className="floating-section">
        <div className="container">
          <Reveal>
            <div className="island audit-problem">
              <p>{auditProblem}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What the audit covers */}
      <section id="covers" className="section-line floating-section">
        <div className="container">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">What the audit covers</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>Four passes over your system.</h2>
            </Reveal>
          </div>

          <div className="audit-grid">
            {auditSections.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.08}>
                <div className="island audit-card">
                  <div className="audit-card-head">
                    <span className="audit-num">{s.num}</span>
                    <div>
                      <h3>{s.title}</h3>
                      <span className="audit-tagline">{s.tagline}</span>
                    </div>
                  </div>
                  <ul className="audit-points">
                    {s.items.map((item) => (
                      <li key={item}>
                        <span className="audit-point-ico audit-point-ico-check">
                          <Check />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="section-line floating-section">
        <div className="container">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">What you get</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>A report you can act on.</h2>
            </Reveal>
          </div>

          <div className="audit-deliverables">
            {auditDeliverables.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.07}>
                <div className="island audit-deliverable">
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="audit-kicker">
              No vague advice. Every finding is backed by your actual numbers
              and tied to a next step.
            </p>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="section-line floating-section">
        <div className="container">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">How it works</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>Three steps.</h2>
            </Reveal>
          </div>

          <div className="audit-steps">
            {auditProcess.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.08}>
                <div className="audit-step">
                  <span className="audit-step-num">{p.num}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="section-line floating-section">
        <div className="container">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">Fit</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>Who this is for.</h2>
            </Reveal>
          </div>

          <div className="audit-fit">
            <Reveal>
              <div className="island audit-fit-col">
                <h3 className="audit-fit-head">This is for you if</h3>
                <ul className="audit-points">
                  {auditFitFor.map((f) => (
                    <li key={f}>
                      <span className="audit-point-ico audit-point-ico-check">
                        <Check />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="island audit-fit-col audit-fit-col-no">
                <h3 className="audit-fit-head">This is not for you if</h3>
                <ul className="audit-points">
                  {auditNotFor.map((f) => (
                    <li key={f}>
                      <span className="audit-point-ico audit-point-ico-cross">
                        <Cross />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Price */}
      <section className="section-line floating-section">
        <div className="container">
          <Reveal>
            <div className="island audit-price">
              <div className="audit-price-col">
                <span className="audit-price-label">The audit</span>
                <span className="audit-price-value">{pricing.auditPrice}</span>
                <p>
                  Fixed scope, no commitment. You keep the report either way.
                </p>
              </div>
              <div className="audit-price-divider" aria-hidden="true" />
              <div className="audit-price-col">
                <span className="audit-price-label">
                  If you want the fixes built
                </span>
                <span className="audit-price-value">
                  from {pricing.projectFrom}
                </span>
                <p>
                  Implementation is scoped from the audit&apos;s findings, so
                  you know what you&apos;re buying before you commit.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA — mirrors the homepage contact section */}
      <section id="contact" className="cta section-line">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Free, no commitment</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>
              Find out what your AI is <em>really</em> costing you.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              Book a free audit, or tell me about your setup and I&apos;ll come
              back to you.
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
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
