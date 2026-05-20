"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
};

// Scroll-triggered reveal. Uses Framer Motion's whileInView so the animation
// fires once when the element enters the viewport and never re-runs.
// API preserved from the prior IntersectionObserver-based version so all
// consumers keep working without changes — delay and duration are in ms.
export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 24,
  duration = 500,
}: RevealProps) {
  const initial: { opacity: number; x?: number; y?: number } = { opacity: 0 };
  switch (direction) {
    case "up":    initial.y = distance;  break;
    case "down":  initial.y = -distance; break;
    case "left":  initial.x = distance;  break;
    case "right": initial.x = -distance; break;
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: duration / 1000,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger variant for grids — wrap a list of children and they reveal in sequence.
export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};
