"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <motion.div
      style={{
        scaleX,
        background: "linear-gradient(90deg, var(--accent), var(--accent-bright))",
        boxShadow: "0 0 12px var(--glow)",
      }}
      className="fixed left-0 right-0 top-0 z-[100] h-[3px] origin-left"
    />
  );
}
