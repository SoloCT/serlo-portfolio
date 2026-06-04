"use client";

import { useEffect, useState } from "react";
import { nav as navItems } from "@/lib/content";
import { scrollToId } from "@/components/ui/smooth-scroll";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent, selector: string) => {
    e.preventDefault();
    scrollToId(selector);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-7 py-4 backdrop-blur-md transition-colors ${
        scrolled ? "border-b border-line bg-bg/70" : "border-b border-transparent bg-bg/30"
      }`}
    >
      <a
        href="#top"
        onClick={(e) => go(e, "body")}
        className="font-display text-base font-bold"
      >
        Serlo<span className="text-accentbright">.</span>
      </a>
      <div className="hidden gap-6 sm:flex">
        {navItems.map((n) => (
          <a
            key={n.href}
            href={n.href}
            onClick={(e) => go(e, n.href)}
            className="text-sm text-muted transition-colors hover:text-text"
          >
            {n.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
