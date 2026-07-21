"use client";

import Link from "next/link";
import type { PointerEvent, CSSProperties } from "react";
import { CardCostBar } from "./CardCostBar";
import type { WorkItem, WorkKind } from "@/lib/site";

// Muted category accents — low saturation so they live inside the dark world.
const KIND: Record<WorkKind, { accent: string; label: string }> = {
  video: { accent: "#52b6ae", label: "Video automation" },
  cost: { accent: "#cf9a5c", label: "Cost reduction" },
  pipeline: { accent: "#8b93df", label: "Multi-model pipeline" },
  saas: { accent: "#8b93df", label: "Production SaaS" },
};

function Motif({ kind }: { kind: WorkKind }) {
  if (kind === "cost") {
    // descending bars — cost coming down
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
    // edit timeline — clips + playhead
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
  // pipeline / saas — connected nodes
  return (
    <svg width="48" height="26" viewBox="0 0 48 26" fill="none" aria-hidden="true">
      <line x1="7" y1="13" x2="41" y2="13" stroke="currentColor" strokeWidth="1.3" opacity="0.5" />
      <circle cx="7" cy="13" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="24" cy="13" r="4" fill="currentColor" opacity="0.4" />
      <circle cx="41" cy="13" r="4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function CaseCard({ c }: { c: WorkItem }) {
  const k = KIND[c.kind];
  const hero = c.highlights[0];

  function onMove(e: PointerEvent<HTMLAnchorElement>) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  }

  return (
    <Link
      href={`/work/${c.slug}`}
      className="case-study cc"
      style={{ "--accent": k.accent } as CSSProperties}
      onPointerMove={onMove}
    >
      <span className="cc-spine" aria-hidden="true" />
      <span className="cc-motif" aria-hidden="true">
        <Motif kind={c.kind} />
      </span>

      <div className="cc-tagrow">
        <span className="cc-dot" aria-hidden="true" />
        <span className="cc-tag">{k.label}</span>
      </div>

      {hero && (
        <div className="cc-metricwrap">
          <div className="cc-metric">{hero.number}</div>
          <div className="cc-metric-sub">{hero.label}</div>
        </div>
      )}

      <h3>{c.title}</h3>
      <p className="case-summary">{c.summary}</p>

      {c.costBar && <CardCostBar {...c.costBar} />}

      <div className="cc-foot">
        <span className="cc-tech">{c.tech}</span>
        <span className="cc-more">
          Read case study <span className="arw">→</span>
        </span>
      </div>
    </Link>
  );
}
