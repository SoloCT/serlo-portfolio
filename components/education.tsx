import { SectionHead } from "@/components/ui/section-head";
import { Reveal } from "@/components/ui/reveal";
import { education } from "@/lib/content";

export function Education() {
  return (
    <section id="education" className="border-t border-line py-[110px]">
      <div className="mx-auto max-w-5xl px-7">
        <SectionHead eyebrow="Foundations" title="Education" />
        <div className="mt-10 flex flex-col gap-5">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.06}>
              <div className="flex flex-col justify-between gap-1 rounded-xl border border-line bg-panel p-5 sm:flex-row sm:items-center">
                <div>
                  <div className="font-display text-base font-semibold">{e.school}</div>
                  <div className="text-sm text-muted">{e.degree}</div>
                </div>
                <div className="shrink-0 text-sm text-accentbright">{e.year}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
