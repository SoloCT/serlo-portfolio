"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const motionTags = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  ul: motion.ul,
  span: motion.span,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
} as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof typeof motionTags;
};

export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const MotionTag = motionTags[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </MotionTag>
  );
}
