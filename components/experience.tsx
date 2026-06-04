"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/ui/reveal";
import { experience, type Bullet, type Segment } from "@/lib/content";

function renderBullet(b: Bullet) {
  const segs: Segment[] = typeof b === "string" ? [b] : b;
  return segs.map((s, i) =>
    typeof s === "string" ? (
      <span key={i}>{s}</span>
    ) : (
      <span key={i} className="font-medium text-accentbright">
        {s.hl}
      </span>
    ),
  );
}

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-[110px]">
      <div className="mx-auto max-w-5xl px-7">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accentbright">
            Track record
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(28px,4vw,44px)] font-bold tracking-tight">
            Experience
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-14 pl-9">
          <div className="absolute bottom-1.5 left-[7px] top-1.5 w-0.5 bg-line" />
          <motion.div
            style={{
              scaleY,
              background: "linear-gradient(180deg, var(--accent), transparent)",
            }}
            className="absolute bottom-1.5 left-[7px] top-1.5 w-0.5 origin-top"
          />

          {experience.map((job) => (
            <div key={job.org} className="relative pb-12 last:pb-0">
              <span className="absolute -left-9 top-1 h-4 w-4 rounded-full border-2 border-accent bg-bg shadow-[0_0_0_4px_rgba(79,141,255,0.12)]" />
              <Reveal>
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accentbright">
                  {job.period}
                </div>
                <h3 className="mt-1.5 font-display text-xl font-semibold">{job.role}</h3>
                <div className="text-sm text-muted">
                  {job.org}
                  {job.dept ? ` · ${job.dept}` : ""} · {job.location}
                </div>
              </Reveal>
              <ul className="mt-4 flex flex-col gap-3">
                {job.bullets.map((b, bi) => (
                  <Reveal
                    as="li"
                    key={bi}
                    delay={Math.min(bi, 6) * 0.04}
                    className="rounded-xl border border-line bg-panel px-4 py-4 text-[15px] text-[#d2d6df] transition-colors hover:border-accent"
                  >
                    {renderBullet(b)}
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
