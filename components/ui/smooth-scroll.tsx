"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { MotionConfig } from "motion/react";

let lenisRef: Lenis | null = null;

/** Smoothly scroll to an element by CSS selector (used by nav anchors). */
export function scrollToId(selector: string) {
  const el = document.querySelector(selector);
  if (!el) return;
  if (lenisRef) {
    lenisRef.scrollTo(el as HTMLElement, { offset: -64 });
  } else {
    (el as HTMLElement).scrollIntoView({ behavior: "smooth" });
  }
}

/** App-wide client providers: Lenis inertia scroll + reduced-motion-aware motion config. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenisRef = lenis;
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef = null;
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
