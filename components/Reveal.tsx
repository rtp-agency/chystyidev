"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
} & Omit<HTMLMotionProps<"div">, "ref">;

export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
  as = "div",
  ...rest
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  const reduce = useReducedMotion();

  // Reduced motion: a gentle cross-fade, no travel (Apple §14).
  // Otherwise a critically-damped spring — the value settles at the target
  // with no overshoot, the calm Apple default (§4).
  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={
        reduce
          ? { duration: 0.3, delay }
          : { type: "spring", bounce: 0, duration: 0.65, delay }
      }
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
