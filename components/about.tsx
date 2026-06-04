import { SectionHead } from "@/components/ui/section-head";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="py-[110px]">
      <div className="mx-auto max-w-3xl px-7">
        <SectionHead eyebrow="About" title="Who I am" />
        <div className="mt-8 flex flex-col gap-5">
          {profile.about.map((para, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg leading-relaxed text-muted">{para}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
