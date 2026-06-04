import { SectionHead } from "@/components/ui/section-head";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section id="projects" className="py-[110px]">
      <div className="mx-auto max-w-5xl px-7">
        <SectionHead
          eyebrow="Beyond the day job"
          title="Projects"
          sub="I build things for fun — automation fleets, AI tooling, and content systems."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-accent">
                <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-2.5 py-1 text-xs text-faint"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
