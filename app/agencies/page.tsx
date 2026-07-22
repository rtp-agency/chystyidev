import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { VideoAutoEdit } from "@/components/VideoAutoEdit";
import { SectionDeco } from "@/components/SectionDeco";
import { Particles } from "@/components/Particles";
import { ContactForm } from "@/components/ContactForm";
import { CaseScrolly } from "@/components/CaseScrolly";
import { TestimonialsScrolly } from "@/components/TestimonialsScrolly";
import { ProcessSteps } from "@/components/ProcessSteps";
import {
  agencyStats,
  agencyAutomations,
  agencyProcess,
  agencyWork,
  agencyFaq,
  testimonials,
} from "@/lib/site";

const CAL_URL = "https://cal.com/david-chistiy-lmbu8n";

// Page-specific structured data for organic search: a Service describing the
// productized offer, an FAQPage (GEO/entity signal — Google dropped FAQ rich
// results in May 2026, but LLM answer engines still lift Q&A), and a breadcrumb.
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
      provider: { "@id": "https://chystyi.dev/#david" },
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

// One icon per "What I automate" card, in order.
const AUTOMATE_ICONS = ["scissors", "wave", "globe", "layers", "send"] as const;

function AutomateIcon({ kind }: { kind: (typeof AUTOMATE_ICONS)[number] }) {
  switch (kind) {
    case "scissors":
      return (
        <svg viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="2.6" />
          <circle cx="6" cy="18" r="2.6" />
          <line x1="8.1" y1="7.6" x2="20" y2="18" />
          <line x1="8.1" y1="16.4" x2="20" y2="6" />
          <line x1="8.1" y1="7.6" x2="14" y2="12" />
        </svg>
      );
    case "wave":
      return (
        <svg viewBox="0 0 24 24">
          <line x1="4" y1="9" x2="4" y2="15" />
          <line x1="8" y1="6" x2="8" y2="18" />
          <line x1="12" y1="4" x2="12" y2="20" />
          <line x1="16" y1="7" x2="16" y2="17" />
          <line x1="20" y1="10" x2="20" y2="14" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <ellipse cx="12" cy="12" rx="4" ry="9" />
        </svg>
      );
    case "layers":
      return (
        <svg viewBox="0 0 24 24">
          <rect x="8" y="8" width="12" height="12" rx="2" />
          <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
        </svg>
      );
    case "send":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M22 2 11 13" />
          <path d="M22 2 15 22 11 13 2 9 22 2Z" />
        </svg>
      );
  }
}

// One animated vector icon per proof-bar stat, in order.
const PROOF_ICONS = ["clock", "bars", "coin", "stack"] as const;

function ProofIcon({ kind }: { kind: (typeof PROOF_ICONS)[number] }) {
  switch (kind) {
    case "clock":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="12" />
          <g className="pf-hand">
            <line x1="16" y1="16" x2="16" y2="8" />
          </g>
          <line className="pf-hand2" x1="16" y1="16" x2="21" y2="19" />
        </svg>
      );
    case "bars":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <rect className="pf-bar" x="4" y="9" width="4" height="18" rx="1" />
          <rect
            className="pf-bar"
            x="11"
            y="9"
            width="4"
            height="18"
            rx="1"
            style={{ animationDelay: "0.2s" }}
          />
          <rect
            className="pf-bar"
            x="18"
            y="9"
            width="4"
            height="18"
            rx="1"
            style={{ animationDelay: "0.4s" }}
          />
          <rect
            className="pf-bar"
            x="25"
            y="9"
            width="4"
            height="18"
            rx="1"
            style={{ animationDelay: "0.6s" }}
          />
        </svg>
      );
    case "coin":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <g className="pf-coin">
            <circle cx="16" cy="16" r="11" />
            <line x1="16" y1="8" x2="16" y2="24" />
            <path d="M20 12 Q16 9.5 13 12 Q10.5 14 14 16 Q19 18 15.5 20.5 Q13 22.5 11 20.5" />
          </g>
        </svg>
      );
    case "stack":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <rect x="6" y="19" width="20" height="6" rx="1.5" />
          <rect x="6" y="12" width="20" height="6" rx="1.5" />
          <rect className="pf-stack-top" x="6" y="5" width="20" height="6" rx="1.5" />
        </svg>
      );
  }
}

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
          <div className="hero-grid hero-grid-agencies">
            <div className="hero-copy">
              <Reveal>
                <h1>
                  An hour of editing, done in <em>3 minutes</em>.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lead">
                  Custom AI pipelines that automate your team&apos;s repetitive
                  video editing — at production scale.
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
              <VideoAutoEdit />
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
                <span className="proof-ico">
                  <ProofIcon kind={PROOF_ICONS[i]} />
                </span>
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What I automate */}
      <section id="automate" className="section-line sd-host">
        <SectionDeco kind="grid" className="sd-tr" />
        <div className="container">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">What I automate</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>The repetitive work, handled end to end.</h2>
            </Reveal>
          </div>

          <div className="automate-grid">
            {agencyAutomations.map((a, i) => {
              const [from, to] = a.split(" → ");
              return (
                <Reveal key={a} delay={i * 0.06}>
                  <div className="automate-card">
                    <span className="automate-ico">
                      <AutomateIcon kind={AUTOMATE_ICONS[i]} />
                    </span>
                    <div className="automate-text">
                      <span className="automate-from">{from}</span>
                      <span className="automate-arrow" aria-hidden="true">
                        →
                      </span>
                      <span className="automate-to">{to}</span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="section-line section-raised sd-host">
        <SectionDeco kind="orbit" className="sd-r" />
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
      <section id="work" className="section-line cases-section">
        <CaseScrolly
          items={agencyWork}
          intro={{
            eyebrow: "Selected work",
            heading: "Production video pipelines that shipped.",
            sub: "The flagship case leads, then the video systems behind it — each with the numbers.",
          }}
        />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-line cases-section">
        <TestimonialsScrolly
          items={testimonials}
          intro={{ eyebrow: "Clients", heading: "What clients say." }}
        />
      </section>

      {/* FAQ */}
      <section id="faq" className="section-line sd-host">
        <SectionDeco kind="grid" className="sd-bl" />
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
      <section id="contact" className="cta section-line sd-host">
        <SectionDeco kind="wave" className="sd-bc" />
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
