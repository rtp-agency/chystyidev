"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Reveal } from "./Reveal";
import type { CSSProperties } from "react";

type Graphic = "video" | "cost" | "content" | "leads" | "receipts";

type Niche = {
  key: string;
  accent: string;
  eyebrow: string;
  title: string;
  desc: string;
  metrics: { n: string; l: string }[];
  href?: string;
  linkLabel?: string;
  graphic: Graphic;
  reverse: boolean;
};

const NICHES: Niche[] = [
  {
    key: "video",
    accent: "#52b6ae",
    eyebrow: "Video production",
    title: "An hour of editing per video, done in three minutes.",
    desc: "A London video agency sends raw lesson recordings; a pipeline cleans, reframes and AI-edits them and sends finished, brand-consistent videos back. Editors stopped doing the repetitive pass.",
    metrics: [
      { n: "~3 min", l: "per video (was ~1 hr)" },
      { n: "25+", l: "videos, built for 100s" },
    ],
    href: "/work/black-camel",
    linkLabel: "Read case study",
    graphic: "video",
    reverse: false,
  },
  {
    key: "media",
    accent: "#cf9a5c",
    eyebrow: "Media & creative agencies",
    title: "Premium video-AI quality, at open-source cost.",
    desc: "Lipsync and motion-control generation moved off $3–5/min proprietary APIs onto custom ComfyUI workflows — same quality, cost in cents, and capabilities the premium tools cap out on.",
    metrics: [
      { n: "99%+", l: "cheaper (lipsync)" },
      { n: "84%", l: "cheaper (motion)" },
    ],
    href: "/work/open-source-lipsync",
    linkLabel: "Read case studies",
    graphic: "cost",
    reverse: true,
  },
  {
    key: "coaching",
    accent: "#8b93df",
    eyebrow: "Online coaching & education",
    title: "A content studio that runs itself — in your voice.",
    desc: "An autonomous engine ranks what formats win, writes posts in the creator's real voice, builds realistic visuals, and publishes to Threads on one-tap approval. From a standing-still account.",
    metrics: [
      { n: "1.3M+", l: "views in 5 days" },
      { n: "2,500+", l: "new followers" },
    ],
    href: "/work/threads-content-engine",
    linkLabel: "Read case study",
    graphic: "content",
    reverse: false,
  },
  {
    key: "ecom",
    accent: "#6bbf7b",
    eyebrow: "E-commerce",
    title: "Leads in, scored and personally reached out — automatically.",
    desc: "A lead-processing system built on the Metra AI stack: aggregate leads, score relevance with an LLM, and generate personalised outreach — so the team works only the leads worth working.",
    metrics: [
      { n: "Auto", l: "scoring + outreach" },
      { n: "Metra AI", l: "multi-agent stack" },
    ],
    graphic: "leads",
    reverse: true,
  },
  {
    key: "accounting",
    accent: "#6aa3d8",
    eyebrow: "Accounting & professional services",
    title: "Receipts logged, reconciled and reported — without the manual grind.",
    desc: "A custom CRM for 150 teams that captures receipts, reconciles them automatically, and generates the reports finance used to assemble by hand.",
    metrics: [
      { n: "150", l: "teams on it" },
      { n: "Auto", l: "reconcile + reports" },
    ],
    graphic: "receipts",
    reverse: false,
  },
];

function ViewsCounter() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const fmt = (n: number) =>
      n >= 1e6
        ? (n / 1e6).toFixed(1) + "M"
        : n >= 1e3
          ? Math.round(n / 1e3) + "K"
          : String(n);
    if (reduce) {
      el.textContent = "1.3M";
      return;
    }
    let raf = 0;
    let timer: ReturnType<typeof setTimeout>;
    const run = () => {
      let start = 0;
      const dur = 2600;
      const target = 1_300_000;
      const step = (t: number) => {
        if (!start) start = t;
        const p = Math.min((t - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(Math.round(e * target));
        if (p < 1) raf = requestAnimationFrame(step);
        else timer = setTimeout(run, 1600);
      };
      raf = requestAnimationFrame(step);
    };
    run();
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);
  return <b ref={ref}>0</b>;
}

function Graphic({ kind }: { kind: Graphic }) {
  if (kind === "video") {
    return (
      <div className="gfx">
        <div>
          <div className="vt2-track">
            <span className="vt2-seg" style={{ width: "22%" }} />
            <span className="vt2-seg cut" style={{ width: "9%" }} />
            <span className="vt2-seg" style={{ width: "26%" }} />
            <span className="vt2-seg cut" style={{ width: "8%" }} />
            <span className="vt2-seg" style={{ width: "16%" }} />
            <span className="vt2-seg cut" style={{ width: "9%" }} />
            <span className="vt2-seg" style={{ width: "20%" }} />
            <span className="vt2-play" />
          </div>
          <div className="vt2-read">
            ≈1 hr manual → <b>≈3 min automated</b>
          </div>
        </div>
      </div>
    );
  }
  if (kind === "cost") {
    return (
      <div className="gfx">
        <div>
          <div className="cb-row">
            <span className="cb-lbl">Premium API</span>
            <div className="cb-track cb-full">
              <div className="cb-fill" />
            </div>
          </div>
          <div className="cb-row">
            <span className="cb-lbl">Open-source</span>
            <div className="cb-track cb-short">
              <div className="cb-fill" />
            </div>
          </div>
          <div className="cb-big">−99%</div>
        </div>
      </div>
    );
  }
  if (kind === "content") {
    return (
      <div className="gfx">
        <div className="ce">
          <div className="ce-card">
            <div className="ce-bubble">“i finally get the subjunctive…”</div>
            <div className="ce-hook">POV: your student at 2am</div>
          </div>
          <div className="ce-count">
            <ViewsCounter /> views
          </div>
          <div className="ce-sub">+2,500 followers · first 5 days</div>
        </div>
      </div>
    );
  }
  if (kind === "leads") {
    return (
      <div className="gfx">
        <div className="lf">
          <span className="lf-tag lf-in">raw leads</span>
          <div className="lf-fun" />
          <span className="lf-tag lf-mid">scored</span>
          <span className="lf-tag lf-out">personalised outreach</span>
          <b style={{ "--x": "-34px", animationDelay: "0s" } as CSSProperties} />
          <b className="q" style={{ "--x": "-8px", animationDelay: ".5s" } as CSSProperties} />
          <b style={{ "--x": "20px", animationDelay: "1s" } as CSSProperties} />
          <b className="q" style={{ "--x": "-22px", animationDelay: "1.6s" } as CSSProperties} />
          <b style={{ "--x": "36px", animationDelay: "2.1s" } as CSSProperties} />
          <b className="q" style={{ "--x": "6px", animationDelay: "2.6s" } as CSSProperties} />
        </div>
      </div>
    );
  }
  // receipts
  return (
    <div className="gfx">
      <div className="rc">
        <div className="rc-row">
          <span className="rc-doc" />
          <span className="rc-line" />
          <span className="rc-check">✓</span>
        </div>
        <div className="rc-row">
          <span className="rc-doc" />
          <span className="rc-line s" />
          <span className="rc-check">✓</span>
        </div>
        <div className="rc-row">
          <span className="rc-doc" />
          <span className="rc-line" />
          <span className="rc-check">✓</span>
        </div>
        <div className="rc-report">receipts → auto-reconciled → report</div>
      </div>
    </div>
  );
}

export function NicheCases() {
  return (
    <div className="container niche-wrap">
      <div className="section-header niche-head">
        <Reveal>
          <div className="eyebrow">Case studies · by what your team does</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2>Real automations, per niche.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lead">
            Each one is a team that got faster without getting bigger. Same
            idea, different workflow — pick the one that looks like yours.
          </p>
        </Reveal>
      </div>

      {NICHES.map((c) => (
        <Reveal
          key={c.key}
          as="section"
          className={`nc${c.reverse ? " nc-rev" : ""}`}
          style={{ "--a": c.accent } as CSSProperties}
        >
          <div className="nc-gfx">
            <Graphic kind={c.graphic} />
          </div>
          <div className="nc-txt">
            <div className="nc-eye">
              <span className="dot" />
              {c.eyebrow}
            </div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <div className="nc-metrics">
              {c.metrics.map((m) => (
                <div className="nc-metric" key={m.l}>
                  <div className="n">{m.n}</div>
                  <div className="l">{m.l}</div>
                </div>
              ))}
            </div>
            {c.href ? (
              <Link href={c.href} className="nc-link">
                {c.linkLabel ?? "Read case study"} <span className="arw">→</span>
              </Link>
            ) : (
              <span className="nc-soon">Full case study coming</span>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
