import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { ProcessCycle } from "@/components/ProcessCycle";
import { Particles } from "@/components/Particles";
import { ContactForm } from "@/components/ContactForm";
import { CardCostBar } from "@/components/CardCostBar";
import { ProcessSteps } from "@/components/ProcessSteps";
import {
  agencyStats,
  agencyAutomations,
  agencyCycle,
  agencyProcess,
  agencyWork,
  agencyFaq,
  testimonials,
} from "@/lib/site";

const CAL_URL = "https://cal.com/david-chistiy-lmbu8n";

// Page-specific structured data for organic search: a Service describing the
// productized offer, an FAQPage (rich-result eligible), and a breadcrumb.
const agencyJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://chystyi.dev/agencies#service",
      name: "Video Production Automation for Agencies",
      serviceType: "Video production automation",
      description:
        "Custom AI video pipelines for agencies — automated editing, cleanup, reframing, lipsync and localization at scale, built on open-source models.",
      url: "https://chystyi.dev/agencies",
      areaServed: "Worldwide",
      provider: {
        "@type": "Person",
        name: "David Chystyi",
        url: "https://chystyi.dev",
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Creative, video and content production agencies",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Video automation engagement",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Workflow Audit",
              description:
                "Free 30-minute audit mapping which editing steps can be automated and the projected per-video savings.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Build",
              description:
                "Fixed-scope pipeline implementation, typically 2–4 weeks, built on open-source models with no premium API markup.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Run",
              description:
                "Managed service — the pipeline runs on my infrastructure; you send source files and receive finished, brand-consistent videos.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://chystyi.dev/agencies#faq",
      mainEntity: agencyFaq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
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
          name: "For agencies",
          item: "https://chystyi.dev/agencies",
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Video Production Automation for Agencies — David Chystyi",
  description:
    "Custom AI video pipelines for agencies — automated editing, cleanup, reframing, lipsync and localization at scale. An hour of manual editing done in ~3 minutes. Book a free workflow audit.",
  keywords: [
    "video production automation for agencies",
    "AI video pipeline",
    "automated video editing at scale",
    "AI video editing pipeline",
    "video production automation",
    "bulk video editing automation",
    "AI video localization",
  ],
  alternates: { canonical: "/agencies" },
  openGraph: {
    title: "Video Production Automation for Agencies — David Chystyi",
    description:
      "Custom AI video pipelines for agencies: automated editing, cleanup, reframing, lipsync and localization at scale. An hour of manual editing done in ~3 minutes.",
    type: "website",
    url: "https://chystyi.dev/agencies",
    siteName: "David Chystyi",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Production Automation for Agencies — David Chystyi",
    description:
      "Custom AI video pipelines for agencies. An hour of manual editing done in ~3 minutes.",
  },
};

export default function Agencies() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agencyJsonLd) }}
      />
      <div className="bg-grid" aria-hidden="true" />
      <Nav variant="agencies" />

      {/* Hero */}
      <section className="hero">
        <Particles />
        <div className="hero-deco" aria-hidden="true">
          <svg className="hero-deco-1" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="98" />
          </svg>
          <svg className="hero-deco-2" viewBox="0 0 200 200">
            <polygon points="100,5 182,52 182,148 100,195 18,148 18,52" />
          </svg>
        </div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <Reveal>
                <h1>
                  Your editors spend an hour per video. My pipelines do it in{" "}
                  <em>3 minutes</em>.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lead">
                  Custom AI video pipelines for agencies — automated cleanup,
                  reframing, and AI editing at volume, running in production for
                  real clients.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="hero-actions">
                  <a
                    href={CAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Get a free workflow audit <span className="arrow">→</span>
                  </a>
                  <a href="#work" className="btn btn-secondary">
                    See the work
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="hero-visual">
              <ProcessCycle steps={agencyCycle} />
            </div>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span className="scroll-cue-track">
            <span className="scroll-cue-dot" />
          </span>
        </div>
      </section>

      {/* Proof bar */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid proof-bar">
            {agencyStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} className="stat">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What I automate */}
      <section id="automate" className="section-line">
        <div className="container">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">What I automate</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>The repetitive work, handled end to end.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">
                The recurring editing your team does by hand, rebuilt as
                pipelines — input in, finished output back.
              </p>
            </Reveal>
          </div>

          <div className="automate-grid">
            {agencyAutomations.map((a, i) => {
              const [from, to] = a.split(" → ");
              return (
                <Reveal key={a} delay={i * 0.06}>
                  <div className="automate-card">
                    <span className="automate-from">{from}</span>
                    <span className="automate-arrow" aria-hidden="true">
                      →
                    </span>
                    <span className="automate-to">{to}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="section-line section-raised">
        <div className="container">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">How it works</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>Audit → Build → Run.</h2>
            </Reveal>
          </div>

          <ProcessSteps steps={agencyProcess} />
        </div>
      </section>

      {/* Work */}
      <section id="work" className="section-line">
        <div className="container-read">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">Selected work</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>Production video pipelines that shipped.</h2>
            </Reveal>
          </div>

          <div className="reading-col">
            {agencyWork.map((c) => (
              <Reveal key={c.slug}>
                <Link href={`/work/${c.slug}`} className="case-study">
                  <div className="case-number">{c.number}</div>
                  <h3>{c.title}</h3>
                  <div className="case-meta">
                    {c.meta.map((m, i) => (
                      <span key={m} style={{ display: "contents" }}>
                        {i > 0 && <span className="case-meta-divider">·</span>}
                        <span>{m}</span>
                      </span>
                    ))}
                  </div>
                  <div className="case-summary">{c.summary}</div>
                  <div className="case-highlights">
                    {c.highlights.map((h) => (
                      <div key={h.label}>
                        <div className="case-highlight-number">{h.number}</div>
                        <div className="case-highlight-label">{h.label}</div>
                      </div>
                    ))}
                  </div>
                  {c.costBar && <CardCostBar {...c.costBar} />}
                  <div className="case-footer">
                    <div className="case-tech-mini">{c.tech}</div>
                    <span className="case-read-more">
                      Read case study <span className="arrow">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-line section-raised">
        <div className="container-read">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">Clients</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>What clients say.</h2>
            </Reveal>
          </div>

          <div className="testimonials-grid reading-col">
            {testimonials.map((t) => (
              <Reveal key={t.name}>
                <div className="testimonial">
                  <p
                    className={`testimonial-quote${
                      t.large ? " testimonial-quote-large" : ""
                    }`}
                  >
                    {t.quote}
                  </p>
                  {t.list && (
                    <ul className="testimonial-list">
                      {t.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  )}
                  {t.quote2 && (
                    <p className="testimonial-quote" style={{ marginTop: 24 }}>
                      {t.quote2}
                    </p>
                  )}
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.avatar}</div>
                    <div className="testimonial-author-info">
                      <span className="testimonial-author-name">
                        {t.link ? (
                          <a
                            href={t.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="testimonial-author-link"
                          >
                            {t.name}
                          </a>
                        ) : (
                          t.name
                        )}
                      </span>
                      <span className="testimonial-author-title">{t.title}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-line">
        <div className="container-read">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">FAQ</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>Questions agency owners ask.</h2>
            </Reveal>
          </div>

          <div className="faq reading-col">
            {agencyFaq.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i * 0.05, 0.2)}>
                <details className="faq-item">
                  <summary className="faq-q">
                    <span>{f.q}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </summary>
                  <div className="faq-a">
                    <p>{f.a}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Free production workflow audit */}
      <section id="contact" className="cta section-line">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Free, no commitment</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>A free 30-minute production workflow audit.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              See exactly which parts of your video editing can be automated —
              and what it would save you at your volume. No pitch, just a
              straight diagnostic.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="audit-list">
              <li>A review of your current editing workflow, step by step</li>
              <li>Which steps can be fully automated</li>
              <li>A realistic per-video cost estimate on your content</li>
              <li>Projected monthly savings at your production volume</li>
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="contact-options">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Book your free audit <span className="arrow">→</span>
              </a>
            </div>
            <div className="contact-or">or send a message</div>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
