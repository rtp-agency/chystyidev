"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

type Intro = { eyebrow: string; heading: string };

// Pinned, scroll-scrubbed vertical carousel — the section pins and the card
// column moves 1:1 with the scroll, the centred card in focus. Progressive
// enhancement: SSR / no-JS / reduced-motion render a plain static list.
export function AdditionalScrolly({
  items,
  intro,
}: {
  items: { title: string; body: string }[];
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
    const col = root.querySelector<HTMLElement>(".vsc-col");
    const viewport = root.querySelector<HTMLElement>(".vsc-viewport");
    if (!col || !viewport) return;
    const cards = Array.from(col.querySelectorAll<HTMLElement>(".vsc-card"));
    const MULT = 1.5; // scroll length per px of travel (higher = slower/longer)
    const clamp = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);

    const range = () => Math.max(1, col.scrollHeight - viewport.clientHeight);
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
      col.style.transform = `translateY(${-p * rng}px)`;

      const vp = viewport.getBoundingClientRect();
      const center = vp.top + vp.height / 2;
      cards.forEach((card) => {
        const r = card.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - center) / (vp.height / 2);
        const k = clamp(1 - d);
        card.style.opacity = String(0.32 + 0.68 * k);
        card.style.transform = `scale(${0.95 + 0.05 * k})`;
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
        <div className="additional-grid reading-col">
          {items.map((a) => (
            <div className="additional-item" key={a.title}>
              <h4>{a.title}</h4>
              <p>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className="vsc"
      style={{ "--n": items.length } as CSSProperties}
    >
      <div className="vsc-stage">
        <div className="cs-glow" aria-hidden="true" />
        <div className="cs-grid" aria-hidden="true" />
        <div className="vsc-inner">
          <div className="section-header vsc-head">
            <div className="eyebrow">{intro.eyebrow}</div>
            <h2>{intro.heading}</h2>
          </div>
          <div className="vsc-viewport">
            <div className="vsc-col">
              {items.map((a) => (
                <article className="vsc-card" key={a.title}>
                  <span className="vsc-cardglow" aria-hidden="true" />
                  <h4>{a.title}</h4>
                  <p>{a.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
