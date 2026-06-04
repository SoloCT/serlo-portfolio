import { ChevronsDown } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { HeroBackground } from "@/components/hero-background";
import { profile } from "@/lib/content";

export function Hero() {
  return (
    <header className="relative flex min-h-screen items-center overflow-hidden">
      <HeroBackground />
      <div className="relative z-[2] mx-auto w-full max-w-5xl px-7">
        <Reveal>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-accentbright">
            {profile.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-[clamp(48px,9vw,104px)] font-bold leading-[0.98] tracking-tight">
            {profile.name}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 font-display text-[clamp(20px,3.4vw,34px)] font-semibold">
            {profile.roleLead} <span className="text-accentbright">{profile.roleAccent}</span>{" "}
            {profile.roleTail}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl text-[clamp(15px,1.7vw,18px)] text-muted">{profile.lede}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="rounded-[10px] bg-accent px-6 py-3 text-sm font-semibold text-[#05070e] shadow-[0_8px_30px_-8px_var(--glow)] transition hover:-translate-y-0.5"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-[10px] border border-line px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-accent"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
      <div className="absolute bottom-8 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-faint">
        <ChevronsDown className="animate-bounce" size={20} />
        Scroll
      </div>
    </header>
  );
}
