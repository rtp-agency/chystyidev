import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { ProcessCycle } from "@/components/ProcessCycle";
import { Particles } from "@/components/Particles";
import { ContactForm } from "@/components/ContactForm";
import { CardCostBar } from "@/components/CardCostBar";
import { OfferVisual } from "@/components/OfferVisual";
import { ProcessSteps } from "@/components/ProcessSteps";
import { stats, offers, work, additional, testimonials } from "@/lib/site";

const CAL_URL = "https://cal.com/david-chistiy-lmbu8n";

export default function Home() {
  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <Nav variant="home" />

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
                  Spend <em>far less</em> on AI.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lead">
                  I cut what companies spend running AI at scale — and keep it
                  reliable on the work that usually breaks.
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
                    Get a free AI cost audit <span className="arrow">→</span>
                  </a>
                  <a href="#work" className="btn btn-secondary">
                    See the work
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="hero-visual">
              <ProcessCycle />
            </div>
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
              <h2>Two things — done exceptionally well.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">
                Not generic &ldquo;AI consulting.&rdquo; Two focused engagements
                with a clear outcome: a smaller bill, and AI you can actually
                rely on.
              </p>
            </Reveal>
          </div>

          <div className="offers">
            {offers.map((o, i) => (
              <Reveal key={o.num} delay={i * 0.1}>
                <div className="offer">
                  <OfferVisual kind={o.visual} />
                  <div className="offer-num">{o.num}</div>
                  <h3 className="offer-name">{o.name}</h3>
                  <p className="offer-promise">{o.promise}</p>
                  <div className="offer-does-label">What I do</div>
                  <ul className="offer-does">
                    {o.does.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
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
      <section id="work" className="section-line">
        <div className="container-read">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">Selected work</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>Production AI systems that shipped.</h2>
            </Reveal>
          </div>

          <div className="reading-col">
            {work.map((c) => (
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

      {/* Additional */}
      <section className="section-line section-raised">
        <div className="container-read">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">Also built</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>Additional engineering work.</h2>
            </Reveal>
          </div>

          <div className="additional-grid reading-col">
            {additional.map((a) => (
              <div className="additional-item" key={a.title}>
                <h4>{a.title}</h4>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-line">
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
