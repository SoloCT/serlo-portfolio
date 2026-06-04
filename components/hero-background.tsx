"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { StaggerGrid } from "@/components/stagger-grid";

export function HeroBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <motion.div
      aria-hidden
      style={{ y, opacity }}
      className="pointer-events-none absolute inset-0 z-0"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(620px 420px at 72% 18%, rgba(79,141,255,0.16), transparent 70%), radial-gradient(520px 380px at 12% 88%, rgba(79,141,255,0.08), transparent 70%)",
        }}
      />
      <StaggerGrid />
      <div
        className="absolute right-[6%] top-[22%] h-[460px] w-[460px] animate-[float_9s_ease-in-out_infinite] rounded-full blur-[36px]"
        style={{ background: "radial-gradient(circle, var(--glow), transparent 65%)" }}
      />
    </motion.div>
  );
}
