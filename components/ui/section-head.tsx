import { Reveal } from "@/components/ui/reveal";

type SectionHeadProps = {
  eyebrow: string;
  title: string;
  sub?: string;
};

export function SectionHead({ eyebrow, title, sub }: SectionHeadProps) {
  return (
    <>
      <Reveal>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accentbright">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-[clamp(28px,4vw,44px)] font-bold tracking-tight">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.1}>
          <p className="mt-3 max-w-xl text-muted">{sub}</p>
        </Reveal>
      )}
    </>
  );
}
