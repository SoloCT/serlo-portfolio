"use client";

import { useEffect, useRef } from "react";
import { animate, stagger, createScope } from "animejs";

const COLS = 22;
const ROWS = 12;
const TOTAL = COLS * ROWS;

// anime.js signature stagger-grid: a field of dots that ripples out from the
// center in a continuous wave. Kept low-opacity so it reads as ambient texture.
export function StaggerGrid() {
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    scope.current = createScope({ root }).add(() => {
      animate(".grid-dot", {
        opacity: [0.1, 0.55],
        scale: [0.85, 1.3],
        delay: stagger(90, { grid: [COLS, ROWS], from: "center" }),
        loop: true,
        alternate: true,
        duration: 1500,
        ease: "inOutSine",
      });
    });
    return () => scope.current?.revert();
  }, []);

  return (
    <div
      ref={root}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 opacity-70"
      style={{
        maskImage: "radial-gradient(circle at 62% 42%, black, transparent 72%)",
        WebkitMaskImage: "radial-gradient(circle at 62% 42%, black, transparent 72%)",
      }}
    >
      <div
        className="grid h-full w-full"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        }}
      >
        {Array.from({ length: TOTAL }).map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            <span
              className="grid-dot block h-1 w-1 rounded-full"
              style={{ background: "var(--accent)", opacity: 0.12 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
