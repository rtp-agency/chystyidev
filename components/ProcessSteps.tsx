"use client";

import { motion, useReducedMotion } from "framer-motion";
import { process } from "@/lib/site";

function Icon({ kind }: { kind: "scan" | "graph" | "check" }) {
  if (kind === "scan") {
    return (
      <svg className="ps-ico" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="17" cy="17" r="10" />
        <line x1="24.5" y1="24.5" x2="33" y2="33" />
      </svg>
    );
  }
  if (kind === "graph") {
    return (
      <svg className="ps-ico" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <line x1="10" y1="14" x2="30" y2="11" />
        <line x1="10" y1="14" x2="20" y2="30" />
        <line x1="30" y1="11" x2="20" y2="30" />
        <circle className="dot" cx="10" cy="14" r="3.4" />
        <circle className="dot" cx="30" cy="11" r="3.4" />
        <circle className="dot" cx="20" cy="30" r="3.4" />
      </svg>
    );
  }
  return (
    <svg className="ps-ico" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="14" />
      <polyline points="13,20.5 18,25.5 28,14" />
    </svg>
  );
}

export function ProcessSteps({ steps = process }: { steps?: typeof process }) {
  const reduce = useReducedMotion();
  return (
    <div className="ps">
      <div className="ps-connector">
        <motion.div
          className="ps-connector-fill"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={
            reduce
              ? { duration: 0 }
              : { type: "spring", bounce: 0, duration: 1.1, delay: 0.2 }
          }
        />
      </div>

      <div className="ps-grid">
        {steps.map((p, i) => (
          <motion.div
            className="ps-step"
            key={p.num}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={
              reduce
                ? { duration: 0.3 }
                : {
                    type: "spring",
                    bounce: 0,
                    duration: 0.6,
                    delay: 0.3 + i * 0.35,
                  }
            }
          >
            <div className="ps-node">
              <Icon kind={p.icon} />
            </div>
            <div className="ps-num">STEP {p.num}</div>
            <h4>{p.title}</h4>
            <p>{p.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
