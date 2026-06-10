import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import {
  stats,
  offers,
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
            Spend <em>far less</em> on AI — and make it work on the hard problems.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lead">
            I help companies running AI at scale cut what they spend — by
            replacing the overpriced parts of their setup with equivalents that
            cost a fraction at the same quality — and re-engineer AI to stay
            reliable on the complex, multi-step tasks where it usually breaks.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="hero-actions">
            <a
              href="mailto:david@chystyi.dev?subject=Free%20AI%20Cost%20Audit"
              className="btn btn-primary"
            >
              Get a free AI cost audit <span className="arrow">→</span>
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

      {/* Offers */}
      <section id="services" className="container section-line">
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
              with a clear outcome: a smaller bill, and AI you can actually rely
              on.
            </p>
          </Reveal>
        </div>

        <div className="offers">
          {offers.map((o, i) => (
            <Reveal key={o.num} delay={i * 0.1}>
              <div className="offer">
                <div className="offer-num">{o.num}</div>
                <h3 className="offer-name">{o.name}</h3>
                <p className="offer-promise">{o.promise}</p>
                <p className="offer-problem">{o.problem}</p>
                <div className="offer-does-label">What I do</div>
                <ul className="offer-does">
                  {o.does.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <div className="offer-result">{o.result}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container section-line section-raised">
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
      <section id="work" className="container-narrow section-line">
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
      <section className="container-narrow section-line section-raised">
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
      <section id="testimonials" className="container-narrow section-line">
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

      {/* CTA — Free AI Cost Audit */}
      <section id="contact" className="cta container-narrow section-line">
        <Reveal>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Free, no commitment
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2>A free 30-minute AI cost audit.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lead">
            Find out exactly how much you could be saving on AI — and how to make
            it more reliable. No pitch, just a straight diagnostic.
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
              href="mailto:david@chystyi.dev?subject=Free%20AI%20Cost%20Audit"
              className="btn btn-primary"
            >
              Book your free audit <span className="arrow">→</span>
            </a>
            <a href="https://t.me/haknnde" className="btn btn-secondary">
              Telegram
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
