import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { ContactForm } from "@/components/ContactForm";
import { CaseScrolly } from "@/components/CaseScrolly";
import { AdditionalScrolly } from "@/components/AdditionalScrolly";
import { TestimonialsScrolly } from "@/components/TestimonialsScrolly";
import { OfferVisual } from "@/components/OfferVisual";
import { ProcessSteps } from "@/components/ProcessSteps";
import {
  stats,
  offers,
  work,
  additional,
  testimonials,
  homeFaq,
  pricing,
} from "@/lib/site";
import { jsonLdScript } from "@/lib/jsonld";

const CAL_URL = "https://cal.com/david-chistiy-lmbu8n";

// FAQ structured data. Note: Google removed FAQ *rich results* in May 2026, so
// this is no longer a SERP feature — it stays for entity understanding and as
// extractable Q&A for AI answer engines (GEO).
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://chystyi.dev/#faq",
  mainEntity: homeFaq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqJsonLd) }}
      />
      <Nav variant="home" />

      {/* Hero */}
      <section className="hero hero-center">
        <div className="container">
          <div className="hero-copy-center">
            <Reveal>
              <div className="eyebrow eyebrow-center">
                Reliable · Safe · Automated
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1>
                AI that&apos;s reliable, safe, and <em>does the work</em>.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lead">
                I make production AI dependable and secure — and automate the
                high-volume processes behind your business.
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
                  Book a free audit <span className="arrow">→</span>
                </a>
                <a href="#work" className="btn btn-secondary">
                  See the work
                </a>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span className="scroll-cue-track">
            <span className="scroll-cue-dot" />
          </span>
        </div>
      </section>

      {/* Stats */}
      <section className="stats floating-section">
        <div className="container">
          <div className="island island-float stats-island">
            <div className="stats-grid">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1} className="stat">
                  <div className="stat-number">
                    <CountUp
                      value={s.value}
                      prefix={s.prefix}
                      suffix={s.suffix}
                    />
                  </div>
                  <div className="stat-label">{s.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="services" className="section-line floating-section">
        <div className="container">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">How I help</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>Two things, done exceptionally well.</h2>
            </Reveal>
          </div>

          <div className="offers">
            {offers.map((o, i) => (
              <Reveal key={o.num} delay={i * 0.1}>
                <div className="offer offer-min island">
                  <OfferVisual kind={o.visual} />
                  <h3 className="offer-name">{o.name}</h3>
                  <p className="offer-promise">{o.promise}</p>
                  <div className="offer-metric">
                    <span className="offer-metric-num">{o.metric}</span>
                    <span className="offer-metric-label">{o.metricLabel}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="offers-price-note">
              Projects start at <b>{pricing.projectFrom}</b>. Scope and price
              come out of the{" "}
              <Link href="/audit" className="offers-price-link">
                free audit
              </Link>
              , so you know what you&apos;re buying before you commit.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section-line floating-section">
        <div className="container">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">How I work</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>Audit, architect, prove.</h2>
            </Reveal>
          </div>

          <div className="island island-float d2 process-island">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="section-line cases-section">
        <CaseScrolly
          items={work}
          intro={{
            eyebrow: "Selected work",
            heading: "Production AI systems that shipped.",
            sub: "Not demos — real pipelines running in production, each one with the numbers.",
          }}
        />
      </section>

      {/* Additional */}
      <section className="section-line cases-section">
        <AdditionalScrolly
          items={additional}
          intro={{ eyebrow: "Also built", heading: "Additional engineering work." }}
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
      <section id="faq" className="section-line section-raised">
        <div className="container-read">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">FAQ</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>Common questions.</h2>
            </Reveal>
          </div>

          <div className="faq reading-col">
            {homeFaq.map((f, i) => (
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

      {/* CTA — the one audit offer. Summary only; /audit carries the detail. */}
      <section id="contact" className="cta section-line">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Free, no commitment</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>A free AI Systems Audit.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              A fixed-scope review that shows you where you&apos;re losing
              money, where your AI is likely to break, and what it would take to
              fix. Numbers, not opinions.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="audit-list">
              <li>Cost — where your spend goes and where you&apos;re overpaying</li>
              <li>Reliability — what will break, and when</li>
              <li>Output quality — whether it&apos;s actually delivering</li>
              <li>A prioritised report, walked through with you</li>
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
                Book a free audit <span className="arrow">→</span>
              </a>
              <Link href="/audit" className="btn btn-secondary">
                What the audit covers
              </Link>
            </div>
            <div className="contact-or">or send a message</div>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
