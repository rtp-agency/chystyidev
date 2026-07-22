"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { CaseCard } from "./CaseCard";
import type { CSSProperties } from "react";
import type { WorkItem, WorkKind } from "@/lib/site";

const ACCENT: Record<WorkKind, string> = {
  video: "#52b6ae",
  cost: "#cf9a5c",
  pipeline: "#8b93df",
  saas: "#8b93df",
};
const LABEL: Record<WorkKind, string> = {
  video: "Video automation",
  cost: "Cost reduction",
  pipeline: "Multi-model pipeline",
  saas: "Production SaaS",
};

function Motif({ kind }: { kind: WorkKind }) {
  if (kind === "cost") {
    return (
      <svg width="44" height="26" viewBox="0 0 44 26" fill="none" aria-hidden="true">
        <rect x="1" y="2" width="7" height="22" rx="2" fill="currentColor" opacity="0.3" />
        <rect x="12" y="8" width="7" height="16" rx="2" fill="currentColor" opacity="0.45" />
        <rect x="23" y="14" width="7" height="10" rx="2" fill="currentColor" opacity="0.6" />
        <rect x="34" y="19" width="7" height="5" rx="2" fill="currentColor" />
      </svg>
    );
  }
  if (kind === "video") {
    return (
      <svg width="46" height="26" viewBox="0 0 46 26" fill="none" aria-hidden="true">
        <rect x="1" y="7" width="8" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <rect x="12" y="9" width="5" height="8" rx="1.5" fill="currentColor" opacity="0.35" />
        <rect x="20" y="4" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <rect x="33" y="9" width="4" height="8" rx="1.5" fill="currentColor" opacity="0.35" />
        <line x1="41" y1="2" x2="41" y2="24" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  return (
    <svg width="48" height="26" viewBox="0 0 48 26" fill="none" aria-hidden="true">
      <line x1="7" y1="13" x2="41" y2="13" stroke="currentColor" strokeWidth="1.3" opacity="0.5" />
      <circle cx="7" cy="13" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="24" cy="13" r="4" fill="currentColor" opacity="0.4" />
      <circle cx="41" cy="13" r="4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

type Intro = { eyebrow: string; heading: string; sub: string };

// staggered reveal window per element role: [start, end, dx, dy]
const ROLE: Record<string, [number, number, number, number]> = {
  tag: [0.06, 0.32, -30, 0],
  metric: [0.12, 0.46, 0, 52],
  sub: [0.18, 0.5, 0, 34],
  title: [0.24, 0.56, 0, 36],
  desc: [0.32, 0.64, 0, 42],
  tech: [0.44, 0.8, 0, 44],
};

export function CaseScrolly({
  items,
  intro,
}: {
  items: WorkItem[];
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

    const introEl = root.querySelector<HTMLElement>(".cs-intro");
    const glow = root.querySelector<HTMLElement>(".cs-glow");
    const caseEls = Array.from(root.querySelectorAll<HTMLElement>(".cs-case"));
    const dots = Array.from(root.querySelectorAll<HTMLElement>(".cs-dot"));
    if (!introEl || !glow) return;

    const N = caseEls.length;
    const SEG = 1 / (N + 1);
    const ACC = caseEls.map((el) => el.style.getPropertyValue("--accent") || "#d8d8d8");
    const roles = caseEls.map((el) =>
      Array.from(el.querySelectorAll<HTMLElement>("[data-role]"))
    );

    const clamp = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);
    const smooth = (t: number) => {
      t = clamp(t);
      return t * t * (3 - 2 * t);
    };

    let ticking = false;
    const update = () => {
      ticking = false;
      const total = root.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = clamp(-root.getBoundingClientRect().top / total);

      const introLp = clamp(p / SEG);
      const out = smooth((introLp - 0.5) / 0.5);
      introEl.style.opacity = String(1 - out);
      introEl.style.transform = `translateY(${-80 * out}px)`;

      let active = 0;
      caseEls.forEach((card, i) => {
        const segStart = SEG * (i + 1);
        const lpRaw = (p - segStart) / SEG;
        const lp = clamp(lpRaw);
        const fadeIn = smooth((lpRaw + 0.1) / 0.34);
        const fadeOut = 1 - smooth((lpRaw - 1.0) / 0.3);
        const cardO = clamp(Math.min(fadeIn, fadeOut));
        card.style.opacity = String(cardO);
        card.style.pointerEvents = cardO > 0.6 ? "auto" : "none";
        if (lpRaw >= -0.05) active = i;
        roles[i].forEach((el) => {
          const r = ROLE[el.dataset.role || ""];
          if (!r) return;
          const t = smooth((lp - r[0]) / (r[1] - r[0]));
          el.style.opacity = String(t);
          el.style.transform = `translate(${r[2] * (1 - t)}px, ${r[3] * (1 - t)}px)`;
        });
      });

      glow.style.color = ACC[active];
      dots.forEach((d, i) => {
        if (i === active && p >= SEG - 0.0001) {
          d.classList.add("on");
          d.style.setProperty("--dotc", ACC[i]);
        } else {
          d.classList.remove("on");
        }
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [live, items.length]);

  // SSR + no-JS + reduced-motion: a plain, readable list of cards (SEO-safe).
  if (!live) {
    return (
      <div className="container-read cs-fallback">
        <div className="section-header">
          <div className="eyebrow">{intro.eyebrow}</div>
          <h2>{intro.heading}</h2>
          <p className="lead">{intro.sub}</p>
        </div>
        <div className="reading-col">
          {items.map((c) => (
            <CaseCard key={c.slug} c={c} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className="case-scrolly scrolly-live"
      style={{ "--n": items.length } as CSSProperties}
    >
      <div className="cs-stage">
        <div className="cs-glow" aria-hidden="true" />
        <div className="cs-grid" aria-hidden="true" />

        <div className="cs-intro">
          <div className="eyebrow">{intro.eyebrow}</div>
          <h2>{intro.heading}</h2>
          <p className="lead">{intro.sub}</p>
        </div>

        {items.map((c) => (
          <article
            className="cs-case"
            key={c.slug}
            style={{ "--accent": ACCENT[c.kind] } as CSSProperties}
          >
            <a href={`/work/${c.slug}`} className="cs-link">
              <div className="cs-tag" data-role="tag">
                <span className="cs-motif">
                  <Motif kind={c.kind} />
                </span>
                <span className="cs-tag-label">{LABEL[c.kind]}</span>
              </div>
              {c.highlights[0] && (
                <>
                  <div className="cs-metric" data-role="metric">
                    {c.highlights[0].number}
                  </div>
                  <div className="cs-sub" data-role="sub">
                    {c.highlights[0].label}
                  </div>
                </>
              )}
              <h3 className="cs-title" data-role="title">
                {c.title}
              </h3>
              <p className="cs-desc" data-role="desc">
                {c.summary}
              </p>
              <div className="cs-foot" data-role="tech">
                <span className="cs-tech">{c.tech}</span>
                <span className="cs-more">Read case study →</span>
              </div>
            </a>
          </article>
        ))}

        <div className="cs-dots" aria-hidden="true">
          {items.map((c) => (
            <span className="cs-dot" key={c.slug} />
          ))}
        </div>
      </div>
    </div>
  );
}
