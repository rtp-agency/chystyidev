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
} from "@/lib/site";

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} className="stat">
                <div className="stat-number">
                  <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="stat-label">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="services" className="section-line">
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
                <div className="offer offer-min">
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
        </div>
      </section>

      {/* Process */}
      <section className="section-line section-raised">
        <div className="container">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">How I work</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>Audit, architect, prove.</h2>
            </Reveal>
          </div>

          <ProcessSteps />
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

      {/* CTA — Free AI Cost Audit */}
      <section id="contact" className="cta section-line">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Free, no commitment</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>A free 30-minute AI cost audit.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              Find out exactly how much you could be saving on AI — and how to
              make it more reliable. No pitch, just a straight diagnostic.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="audit-list">
              <li>A review of your current AI tools and where the spend goes</li>
              <li>The specific places you&apos;re overpaying</li>
              <li>1–3 concrete, cheaper alternatives for your use case</li>
              <li>An estimate of your potential annual savings</li>
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
