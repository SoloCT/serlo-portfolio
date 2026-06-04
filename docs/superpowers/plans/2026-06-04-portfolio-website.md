# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Serlo Tam's single-page, dark-themed, scroll-animated portfolio site for recruiters and deploy it to Vercel.

**Architecture:** Static Next.js 16 (App Router) single route `/` composed of presentational section components. All copy lives in one typed `lib/content.ts`. Animation via `motion` (reveals, scroll-progress, count-up, parallax) + `lenis` (smooth scroll). No backend, no data fetching.

**Tech Stack:** Next.js 16.2.6 · React 19 · TypeScript 5 · Tailwind v4 · motion · lenis · lucide-react · next/font (Space Grotesk + Inter). Deploy: Vercel.

**Verification model:** This is a static marketing site — no unit-test surface, so a test harness is YAGNI (per spec §9). Each task's gate is: `next build` compiles clean + `next lint` passes + visual check on the dev server (`0.0.0.0:3003`). Reduced-motion + responsive checked at the end.

**Environment:** Node via nvm — prefix PATH with `~/.nvm/versions/node/v22.22.3/bin`. Content source of truth: `docs/content-source.md`. Ports: 3001=cronboard, 3002=mockup, **3003=this dev server**. ⚠️ Next 16 has breaking changes vs training data — read `node_modules/next/dist/docs/` before writing framework code.

---

## File Structure
```
app/layout.tsx        fonts, metadata, <SmoothScroll>, <ScrollProgress>, body bg
app/page.tsx          composes all sections in order
app/globals.css       Tailwind v4 import, design tokens, base + reduced-motion
lib/content.ts        typed content (profile, metrics, experience[], skills[], projects[], education[], contact)
components/nav.tsx
components/hero.tsx
components/impact-stats.tsx
components/about.tsx
components/experience.tsx
components/skills.tsx
components/projects.tsx
components/education.tsx
components/contact.tsx
components/ui/smooth-scroll.tsx   Lenis provider ('use client')
components/ui/scroll-progress.tsx top progress bar ('use client')
components/ui/reveal.tsx          inView fade/slide/blur wrapper ('use client')
components/ui/count-up.tsx        animate number on inView ('use client')
```

---

### Task 1: Scaffold project (match cronboard conventions)
**Files:** whole app skeleton, `package.json`, `tsconfig.json`, `next.config`, `postcss.config`, `.gitignore`

- [ ] **Step 1:** From `~/repos/serlo-portfolio`, scaffold in-place with the same major versions as cronboard's frontend (Next 16.2.6, React 19, Tailwind v4, TS). Easiest: `create-next-app` with TS + Tailwind + App Router, no src dir, import alias `@/*`, then pin `next`/`eslint-config-next` to `16.2.6` if the scaffold drifts. Preserve the existing `docs/` folder.
- [ ] **Step 2:** Install deps: `motion`, `lenis`, `lucide-react`.
- [ ] **Step 3:** Read `node_modules/next/dist/docs/` for any App Router / config breaking changes before editing framework files.
- [ ] **Step 4:** Add `dev`/`start` scripts on `-H 0.0.0.0 -p 3003`.
- [ ] **Verify:** `next build` succeeds on the stock scaffold; `git add -A && git commit -m "chore: scaffold Next.js app"`.

### Task 2: Design tokens, globals, layout, smooth scroll
**Files:** `app/globals.css`, `app/layout.tsx`, `components/ui/smooth-scroll.tsx`

- [ ] **Step 1:** In `globals.css` define tokens (spec §6): `--bg #060608`, panels, borders, text `#e8eaf0`/`#9aa0ad`/`#6b7180`, accent `#4f8dff`/`#7aa9ff`/glow. Base body styles, `::selection`, and a `@media (prefers-reduced-motion: reduce)` block that disables transitions/animations.
- [ ] **Step 2:** `smooth-scroll.tsx` — `'use client'` Lenis provider: init Lenis on mount, rAF loop, destroy on unmount; no-op when `prefers-reduced-motion`.
```tsx
'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    let raf = 0
    const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); lenis.destroy() }
  }, [])
  return <>{children}</>
}
```
- [ ] **Step 3:** `layout.tsx` — load Space Grotesk + Inter via `next/font/google` (CSS vars), set metadata (title "Serlo Tam — Senior Risk & Data Analyst", description, OG), wrap children in `<SmoothScroll>`, mount `<ScrollProgress/>` (Task 4).
- [ ] **Verify:** `next build` clean; dev server renders an empty themed page; commit.

### Task 3: Content module
**Files:** `lib/content.ts`

- [ ] **Step 1:** Transcribe `docs/content-source.md` into typed exports: `profile`, `metrics` (label/value/prefix/suffix/target), `experience` (org, role, dept, period, location, bullets[] with optional highlighted spans), `skills` (group → items[]), `projects` (name, blurb, tags[]), `education[]`, `contact` (email, linkedin, location). Name CIBC + real metrics (approved).
- [ ] **Verify:** `tsc --noEmit` clean; commit.

### Task 4: UI primitives (Reveal, ScrollProgress, CountUp)
**Files:** `components/ui/reveal.tsx`, `components/ui/scroll-progress.tsx`, `components/ui/count-up.tsx`

- [ ] **Step 1:** `reveal.tsx` — `'use client'` wrapper using motion `whileInView` (`once:true`, `viewport margin -10%`): opacity 0→1, y 28→0, blur 6→0; accept `delay`/`as` props for stagger. Honor reduced-motion (render static).
- [ ] **Step 2:** `scroll-progress.tsx` — fixed top bar bound to `useScroll().scrollYProgress` via `scaleX`.
- [ ] **Step 3:** `count-up.tsx` — animate 0→target on first inView with eased rAF, `toLocaleString` formatting, optional prefix/suffix; static value when reduced-motion.
- [ ] **Verify:** `next build` clean; primitives render on a scratch test in `page.tsx`; commit.

### Task 5: Nav + Hero
**Files:** `components/nav.tsx`, `components/hero.tsx`, add to `page.tsx`
- [ ] Nav: fixed, blur + border-appears-on-scroll, anchor links (Impact/Experience/Skills/Contact), brand. Hide links < 640px.
- [ ] Hero: full-viewport, animated bg (radial glow + grid mask + floating blob via motion), eyebrow, big name, role w/ accent, lede, two CTAs, animated scroll cue. Content from `profile`.
- [ ] **Verify:** build clean + visual on :3003; commit.

### Task 6: Impact stats
**Files:** `components/impact-stats.tsx`
- [ ] 4-up grid (2-up on mobile) of `<CountUp>` metrics from `metrics`; bordered band gradient. Reveal-staggered.
- [ ] **Verify:** counters animate on scroll-in; build clean; commit.

### Task 7: About
**Files:** `components/about.tsx`
- [ ] Short bio block (who/what, AI-native, trilingual, SF, DeFi) from `profile`. Reveal.
- [ ] **Verify:** build clean + visual; commit.

### Task 8: Experience timeline (centerpiece)
**Files:** `components/experience.tsx`
- [ ] Vertical timeline; accent line with a scroll-linked "fill" (motion `useScroll` on the section, `scaleY`); per-role group (CIBC 12 bullets → KPMG) with dot, period, role, org; each bullet a card that Reveals + lifts on hover; highlighted metric spans in accent. Content from `experience`.
- [ ] **Verify:** line fills as you scroll the section; cards reveal/stagger; build clean; commit.

### Task 9: Skills
**Files:** `components/skills.tsx`
- [ ] Grouped chip rows from `skills` (group label + chips), Reveal-staggered, hover accent.
- [ ] **Verify:** build clean + visual; commit.

### Task 10: Projects
**Files:** `components/projects.tsx`
- [ ] Card grid from `projects` (name, blurb, tag chips), hover lift + accent border, Reveal.
- [ ] **Verify:** build clean + visual; commit.

### Task 11: Education
**Files:** `components/education.tsx`
- [ ] Two entries from `education` (school, degree, year). Reveal.
- [ ] **Verify:** build clean + visual; commit.

### Task 12: Contact / Footer
**Files:** `components/contact.tsx`
- [ ] Big "Let's talk." + email (mailto) + LinkedIn button (lucide icon) + location. From `contact`. No GitHub, no résumé button.
- [ ] **Verify:** links correct; build clean; commit.

### Task 13: Responsive + a11y + reduced-motion polish
**Files:** all components, `globals.css`
- [ ] Check breakpoints (375 / 768 / 1280); fix overflow, font scaling (`clamp`), nav on mobile. Heading order h1→h2→h3, focus-visible rings, link labels, contrast. Verify `prefers-reduced-motion` kills all motion (toggle OS setting or emulate).
- [ ] **Verify:** build clean; visual at 3 widths + reduced-motion; commit.

### Task 14: Build, lint, Lighthouse, serve for review
- [ ] `next lint` clean; `next build` clean; run `next start -H 0.0.0.0 -p 3003`; Lighthouse sanity (perf + a11y). Fix regressions.
- [ ] **Verify:** send Serlo the `:3003` URL for review. Commit any fixes.

### Task 15: Deploy to Vercel (after Serlo's review)
- [ ] `vercel` (or connect repo) → production deploy on free `*.vercel.app`. Share the live URL. (Custom domain later.)

---

## Self-Review
- **Spec coverage:** every spec §4 component → Tasks 5–12; animations §5 → Tasks 2/4/8; design system §6 → Task 2; content §7 → Task 3; deploy §8 → Task 15; verification §9 → Tasks 13–14. No gaps.
- **Placeholders:** none — primitive code given inline; section tasks reference concrete content keys + animation behavior.
- **Type consistency:** content keys (`profile`, `metrics`, `experience`, `skills`, `projects`, `education`, `contact`) referenced identically across Tasks 3–12; primitives `Reveal`/`ScrollProgress`/`CountUp`/`SmoothScroll` named consistently.
