import { Mail } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { contact } from "@/lib/content";

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Contact() {
  return (
    <footer id="contact" className="border-t border-line py-[90px] text-center">
      <div className="mx-auto max-w-5xl px-7">
        <Reveal>
          <div className="font-display text-[clamp(26px,4vw,40px)] font-semibold">
            Let&apos;s talk.
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-[10px] bg-accent px-5 py-3 text-sm font-semibold text-[#05070e] transition hover:-translate-y-0.5"
            >
              <Mail size={16} /> {contact.email}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] border border-line px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-accent"
            >
              <LinkedInIcon size={16} /> LinkedIn
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-8 text-sm text-faint">{contact.location} · © 2026 Serlo Tam</div>
        </Reveal>
      </div>
    </footer>
  );
}
