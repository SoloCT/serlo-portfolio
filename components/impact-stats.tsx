import { SectionHead } from "@/components/ui/section-head";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { metrics } from "@/lib/content";

export function ImpactStats() {
  return (
    <section
      id="impact"
      className="border-y border-line py-[110px]"
      style={{ background: "linear-gradient(180deg, var(--panel), var(--bg))" }}
    >
      <div className="mx-auto max-w-5xl px-7">
        <SectionHead eyebrow="By the numbers" title="Impact at a glance" />
        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-9 md:grid-cols-4 md:gap-7">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <div className="font-display text-[clamp(36px,5vw,56px)] font-bold text-white">
                <CountUp target={m.target} prefix={m.prefix} suffix={m.suffix} />
              </div>
              <div className="mt-1 text-sm text-muted">{m.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
