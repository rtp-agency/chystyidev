"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STEPS = [
  { n: "01", label: "Audit", desc: "Analyze the stack, find the waste" },
  { n: "02", label: "Architect", desc: "Design the cheaper, reliable system" },
  { n: "03", label: "Ship", desc: "Deploy to production, prove it" },
];

const DURATION = 3800;

function AuditScene() {
  return (
    <div className="sc sc-audit">
      <div className="sc-bars">
        {[44, 70, 100, 58, 34].map((h, i) => (
          <span
            key={i}
            style={{ height: `${h}%` }}
            className={i === 2 ? "flag" : ""}
          />
        ))}
      </div>
      <span className="sc-scan" />
    </div>
  );
}

function ArchScene() {
  const nodes: [number, number, number][] = [
    [40, 32, 0],
    [158, 42, 0.3],
    [92, 74, 0.6],
    [44, 116, 0.9],
    [162, 112, 1.2],
  ];
  return (
    <div className="sc sc-arch">
      <svg viewBox="0 0 200 148" fill="none">
        <line x1="40" y1="32" x2="92" y2="74" className="ln" style={{ animationDelay: "0s" }} />
        <line x1="158" y1="42" x2="92" y2="74" className="ln" style={{ animationDelay: "0.2s" }} />
        <line x1="92" y1="74" x2="44" y2="116" className="ln" style={{ animationDelay: "0.4s" }} />
        <line x1="92" y1="74" x2="162" y2="112" className="ln" style={{ animationDelay: "0.6s" }} />
        <line x1="40" y1="32" x2="158" y2="42" className="ln" style={{ animationDelay: "0.8s" }} />
        {nodes.map(([x, y, d], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="7"
            className="nd"
            style={{ animationDelay: `${d}s` }}
          />
        ))}
      </svg>
    </div>
  );
}

function ShipScene() {
  return (
    <div className="sc sc-ship">
      <svg viewBox="0 0 200 148" className="sc-plane-wrap" fill="none">
        <path
          d="M100,18 L150,128 L100,102 L50,128 Z"
          className="sc-plane"
        />
      </svg>
      <div className="sc-live">
        <span className="sc-live-ring" />
        <span className="sc-live-ring" />
        <span className="sc-live-dot" />
      </div>
    </div>
  );
}

export function ProcessCycle() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;
    const id = setInterval(() => setActive((a) => (a + 1) % 3), DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pc">
      <div className="pc-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="pc-scene"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {active === 0 && <AuditScene />}
            {active === 1 && <ArchScene />}
            {active === 2 && <ShipScene />}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pc-steps">
        {STEPS.map((s, i) => (
          <button
            type="button"
            key={s.n}
            className={`pc-step ${active === i ? "on" : ""}`}
            onClick={() => setActive(i)}
            aria-label={s.label}
          >
            <span className="pc-step-n">{s.n}</span>
            <span className="pc-step-label">{s.label}</span>
          </button>
        ))}
      </div>

      <div className="pc-desc">
        <AnimatePresence mode="wait">
          <motion.span
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
          >
            {STEPS[active].desc}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
