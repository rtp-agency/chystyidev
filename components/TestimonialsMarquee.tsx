import type { Testimonial } from "@/lib/site";

// Horizontal, left-to-right carousel of testimonial cards. Duplicated once for
// a seamless -50% loop; pauses on hover so quotes stay readable/clickable.
export function TestimonialsMarquee({ items }: { items: Testimonial[] }) {
  const row = [...items, ...items];
  return (
    <div className="hmarq">
      <div className="hmarq-track">
        {row.map((t, i) => (
          <figure className="hmarq-card" key={i} aria-hidden={i >= items.length}>
            <span className="hmarq-glow" aria-hidden="true" />
            <p className="hmarq-quote">{t.quote}</p>
            <figcaption className="testimonial-author">
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
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
