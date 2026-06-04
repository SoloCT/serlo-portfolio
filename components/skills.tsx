import { SectionHead } from "@/components/ui/section-head";
import { Reveal } from "@/components/ui/reveal";
import { skills } from "@/lib/content";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-line py-[110px]"
      style={{ background: "linear-gradient(180deg, var(--panel), var(--bg))" }}
    >
      <div className="mx-auto max-w-5xl px-7">
        <SectionHead eyebrow="Toolkit" title="Skills" />
        <div className="mt-12 flex flex-col gap-7">
          {skills.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 0.05}>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">
                {g.group}
              </div>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-line bg-panel px-3.5 py-2 text-sm text-[#cfd3dc] transition-colors hover:border-accent hover:text-white"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
