"use client";

import { motion } from "framer-motion";

// Hero animation for /agencies: an editing timeline that auto-edits itself.
// A playhead sweeps across a raw clip; the silence/filler segments collapse
// out, the footage compacts, and the result bar shows the time saved. Loops.
const EASE = [0.16, 1, 0.3, 1] as const;
const LOOP = 4.6; // seconds

// width in px, and whether the auto-editor removes it (silence / filler / repeat)
const SEGMENTS = [
  { w: 70, cut: false },
  { w: 34, cut: true },
  { w: 90, cut: false },
  { w: 30, cut: true },
  { w: 60, cut: false },
  { w: 36, cut: true },
  { w: 80, cut: false },
];

// each cut collapses just after the playhead reaches it
const CUT_TIMES: Record<number, number[]> = {
  1: [0, 0.16, 0.22, 0.9, 1],
  3: [0, 0.34, 0.4, 0.9, 1],
  5: [0, 0.48, 0.55, 0.9, 1],
};

export function VideoAutoEdit() {
  return (
    <div className="vt" aria-hidden="true">
      <div className="vt-head">
        <span className="vt-dot" />
        <span className="vt-head-label">Auto-edit</span>
        <span className="vt-head-meta">silence · fillers · repeats</span>
      </div>

      <div className="vt-track">
        <motion.span
          className="vt-playhead"
          animate={{ left: ["0%", "100%", "100%", "0%"] }}
          transition={{
            duration: LOOP,
            times: [0, 0.6, 0.85, 1],
            ease: "linear",
            repeat: Infinity,
          }}
        />
        {SEGMENTS.map((s, i) =>
          s.cut ? (
            <motion.span
              key={i}
              className="vt-seg vt-seg-cut"
              style={{ width: s.w }}
              animate={{ width: [s.w, s.w, 0, 0, s.w], opacity: [1, 1, 0, 0, 1] }}
              transition={{
                duration: LOOP,
                times: CUT_TIMES[i],
                ease: EASE,
                repeat: Infinity,
              }}
            />
          ) : (
            <span key={i} className="vt-seg" style={{ width: s.w }} />
          )
        )}
      </div>

      <div className="vt-result">
        <div className="vt-result-track">
          <motion.div
            className="vt-result-fill"
            animate={{ width: ["0%", "30%", "30%", "0%"] }}
            transition={{
              duration: LOOP,
              times: [0, 0.6, 0.85, 1],
              ease: EASE,
              repeat: Infinity,
            }}
          />
        </div>
        <div className="vt-result-time">
          <span className="vt-time-from">≈1 hr</span>
          <span className="vt-time-arrow" aria-hidden="true">
            →
          </span>
          <span className="vt-time-to">≈3 min</span>
        </div>
      </div>
    </div>
  );
}
