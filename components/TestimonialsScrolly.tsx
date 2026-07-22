"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import type { Testimonial } from "@/lib/site";

type Intro = { eyebrow: string; heading: string };

function Author({ t }: { t: Testimonial }) {
  return (
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
  );
}

// Pinned, scroll-scrubbed horizontal carousel — the section pins and the row of
// testimonial cards moves left with the scroll, the centred card in focus.
export function TestimonialsScrolly({
  items,
  intro,
}: {
  items: Testimonial[];
  intro: Intro;
}) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => setMounted(true), []);
  const live = mounted && !reduce;

  useEffect(() => {
    if (!live) return;
    const root = rootRef.current;
    if (!root) return;
    const row = root.querySelector<HTMLElement>(".hsc-row");
    const viewport = root.querySelector<HTMLElement>(".hsc-viewport");
    if (!row || !viewport) return;
    const cards = Array.from(row.querySelectorAll<HTMLElement>(".hsc-card"));
    const MULT = 1.2;
    const clamp = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);

    const range = () => Math.max(1, row.scrollWidth - viewport.clientWidth);
    const measure = () => {
      root.style.height = `${window.innerHeight + range() * MULT}px`;
    };

    let ticking = false;
    const update = () => {
      ticking = false;
      const total = root.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = clamp(-root.getBoundingClientRect().top / total);
      const rng = range();
      row.style.transform = `translateX(${-p * rng}px)`;

      const vp = viewport.getBoundingClientRect();
      const center = vp.left + vp.width / 2;
      cards.forEach((card) => {
        const r = card.getBoundingClientRect();
        const d = Math.abs(r.left + r.width / 2 - center) / (vp.width / 2);
        const k = clamp(1 - d);
        card.style.opacity = String(0.4 + 0.6 * k);
        card.style.transform = `scale(${0.955 + 0.045 * k})`;
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    const onResize = () => {
      measure();
      update();
    };
    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      root.style.height = "";
    };
  }, [live, items.length]);

  if (!live) {
    return (
      <div className="container-read">
        <div className="section-header">
          <div className="eyebrow">{intro.eyebrow}</div>
          <h2>{intro.heading}</h2>
        </div>
        <div className="testimonials-grid reading-col">
          {items.map((t) => (
            <div className="testimonial" key={t.name}>
              <p
                className={`testimonial-quote${
                  t.large ? " testimonial-quote-large" : ""
                }`}
              >
                {t.quote}
              </p>
              <Author t={t} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className="hsc"
      style={{ "--n": items.length } as CSSProperties}
    >
      <div className="hsc-stage">
        <div className="cs-glow" aria-hidden="true" />
        <div className="cs-grid" aria-hidden="true" />
        <div className="hsc-inner">
          <div className="section-header hsc-head">
            <div className="eyebrow">{intro.eyebrow}</div>
            <h2>{intro.heading}</h2>
          </div>
          <div className="hsc-viewport">
            <div className="hsc-row">
              {items.map((t) => (
                <figure className="hsc-card" key={t.name}>
                  <span className="hmarq-glow" aria-hidden="true" />
                  <p className="hsc-quote">{t.quote}</p>
                  <Author t={t} />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
