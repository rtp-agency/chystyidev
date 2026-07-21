"use client";

import { motion, useReducedMotion } from "framer-motion";

// Slim before/after bar for homepage case cards: a bright sliver (the new cost)
// in a dim track (the old cost), animating in on scroll, with the reduction.
export function CardCostBar({
  reduction,
  afterPct,
}: {
  reduction: string;
  afterPct: number;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="ccb">
      <div className="ccb-track">
        <motion.div
          className="ccb-fill"
          initial={reduce ? false : { width: 0 }}
          whileInView={{ width: `${afterPct}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={
            reduce
              ? { duration: 0 }
              : { type: "spring", bounce: 0, duration: 1, delay: 0.1 }
          }
        />
      </div>
      <span className="ccb-label">−{reduction} cost</span>
    </div>
  );
}
