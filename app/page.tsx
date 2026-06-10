import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import {
  pillars,
  stats,
  services,
  process,
  work,
  additional,
  testimonials,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <Nav variant="home" />

      {/* Hero */}
      <section className="hero container">
        <Reveal>
          <h1>
            AI that <em>behaves</em> — at a fraction of the cost.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lead">
            I help businesses cut what they spend running AI models, and make
            those models reliable on the structurally complex tasks where they
            usually break. Shipped to commercial clients, running in production
            today.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Start a conversation <span className="arrow">→</span>
            </a>
            <a href="#work" className="btn btn-secondary">
              See the work
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="hero-meta">
            <span className="status">
              <span className="dot" />
              Available for new projects
            </span>
            <span>·</span>
            <span>AI cost optimization &amp; reliability</span>
          </div>
        </Reveal>
      </section>

      {/* Approach / pillars */}
      <section id="approach" className="container">
        <div className="section-header">
          <Reveal>
            <div className="eyebrow">What I do</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>Two problems I solve better than anyone you&apos;ll hire.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              Most AI work fails in one of two places: it costs far too much to
              run, or it falls apart on anything genuinely complex. I specialize
              in both.
            </p>
          </Reveal>
        </div>

        <div className="pillars">
          {pillars.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.1}>
              <div className="pillar">
                <div className="pillar-num">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <div
                  className="pillar-stat"
                  dangerouslySetInnerHTML={{ __html: p.stat }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <Reveal key={s.number} delay={i * 0.1} className="stat">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container">
        <div className="section-header">
          <Reveal>
            <div className="eyebrow">Services</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>Four ways I help.</h2>
          </Reveal>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div className="service" key={s.num}>
              <div className="service-number">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container">
        <div className="section-header">
          <Reveal>
            <div className="eyebrow">How I work</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>Audit, architect, prove.</h2>
          </Reveal>
        </div>

        <div className="process-grid">
          {process.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.1}>
              <div className="process-step">
                <div className="step-num">{p.num}</div>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="container-narrow">
        <div className="section-header">
          <Reveal>
            <div className="eyebrow">Selected work</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>Production AI systems that shipped.</h2>
          </Reveal>
        </div>

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
              <div className="case-footer">
                <div className="case-tech-mini">{c.tech}</div>
                <span className="case-read-more">
                  Read case study <span className="arrow">→</span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      {/* Additional */}
      <section className="container-narrow">
        <div className="section-header">
          <Reveal>
            <div className="eyebrow">Also built</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>Additional engineering work.</h2>
          </Reveal>
        </div>

        <div className="additional-grid">
          {additional.map((a) => (
            <div className="additional-item" key={a.title}>
              <h4>{a.title}</h4>
              <p>{a.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container-narrow">
        <div className="section-header">
          <Reveal>
            <div className="eyebrow">Clients</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>What clients say.</h2>
          </Reveal>
        </div>

        <div className="testimonials-grid">
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
                    <span className="testimonial-author-name">{t.name}</span>
                    <span className="testimonial-author-title">{t.title}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta container-narrow">
        <Reveal>
          <h2>Let&apos;s talk.</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="lead">
            Whether you&apos;re starting your AI journey or looking to cut costs
            on existing systems, I&apos;d love to hear about what you&apos;re
            building.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="contact-options">
            <a href="mailto:david@chystyi.dev" className="btn btn-primary">
              david@chystyi.dev <span className="arrow">→</span>
            </a>
            <a href="https://t.me/haknnde" className="btn btn-secondary">
              Telegram
            </a>
            <a href="https://wa.me/380633623775" className="btn btn-secondary">
              WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
