"use client";

import { motion } from "motion/react";

// 10 (x,y) points across a 0..308 x 0..150 viewBox; index 7 is the anomaly spike.
const POINTS: [number, number][] = [
  [10, 118],
  [42, 104],
  [74, 112],
  [106, 86],
  [138, 92],
  [170, 64],
  [202, 72],
  [234, 30],
  [266, 80],
  [298, 54],
];
const ANOMALY = 7;
const lineStr = POINTS.map((p) => p.join(",")).join(" ");
const areaStr = `10,150 ${lineStr} 298,150`;

const STATS = [
  { k: "Txns / mo", v: "500K+" },
  { k: "Flagged", v: "<20" },
  { k: "Accuracy", v: "100%" },
];

export function HeroChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
      className="relative w-full rounded-2xl border border-line bg-panel/70 p-5 backdrop-blur-sm"
      style={{ boxShadow: "0 24px 70px -25px rgba(0,0,0,0.7)" }}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Fraud signal
        </div>
        <span className="text-[10px] font-medium uppercase tracking-wider text-faint">live</span>
      </div>

      <svg viewBox="0 0 308 150" className="w-full" role="img" aria-label="Animated anomaly detection chart">
        <defs>
          <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[30, 70, 110].map((y) => (
          <line key={y} x1="0" y1={y} x2="308" y2={y} stroke="var(--line)" strokeWidth="1" />
        ))}

        <motion.polygon
          points={areaStr}
          fill="url(#heroArea)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        />

        <motion.polyline
          points={lineStr}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, delay: 0.5, ease: "easeInOut" }}
        />

        {POINTS.map(([x, y], i) => {
          const isAnomaly = i === ANOMALY;
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r={isAnomaly ? 5 : 2.5}
              fill={isAnomaly ? "var(--accent)" : "var(--bg)"}
              stroke="var(--accent)"
              strokeWidth={isAnomaly ? 0 : 1.5}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.12 }}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            />
          );
        })}

        <motion.circle
          cx={POINTS[ANOMALY][0]}
          cy={POINTS[ANOMALY][1]}
          r={5}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: [1, 2.8], opacity: [0.7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 2.2, ease: "easeOut" }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      </svg>

      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-line pt-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.k}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 + i * 0.12 }}
          >
            <div className="font-display text-sm font-bold text-white">{s.v}</div>
            <div className="text-[10px] uppercase tracking-wider text-faint">{s.k}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
