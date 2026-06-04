# Personal Portfolio Website — Design Spec
**Date:** 2026-06-04 · **Owner:** Serlo Tam · **Status:** Approved design, pre-implementation

## 1. Purpose & Audience
A single-page personal portfolio site for **Serlo Tam**, positioning him as a **Senior Risk & Data Analyst** for **recruiters and hiring managers**. Goal: communicate the depth and measurable impact of his track record fast and memorably, with polished scroll-driven motion as the signature. Comprehensive content (full CIBC + KPMG + education + skills + side projects). Free hosting; extensible later (résumé download, GitHub, custom domain).

**Success criteria**
- A recruiter scanning for 30s grasps: senior analyst, fraud/risk + data infrastructure, hard metrics ($200M+, 99%, 1,100+ hrs, 60+ sites), AI-native.
- "Extremely professional" look: dark, restrained, fast; animation enhances (never distracts).
- Loads fast, fully responsive, accessible (respects reduced-motion), deploys clean to Vercel.

## 2. Scope
**In:** one route (`/`) with sections: Nav, Hero, Impact stats, About, Experience timeline (CIBC in depth → KPMG), Skills, Projects, Education, Contact/Footer. Scroll animations throughout.
**Out (YAGNI):** CMS/blog, dark-light toggle, résumé-download button, GitHub section, contact form/backend, analytics, multi-page routing, i18n. (All deferred; architecture leaves room.)

## 3. Tech Stack
Match the cronboard frontend conventions.
- **Next.js 16.2.6** (App Router) · **React 19** · **TypeScript 5**
- **Tailwind CSS v4** (`@tailwindcss/postcss`) — design tokens in CSS
- **motion** (Framer Motion successor; React 19 compatible) — reveals, scroll-progress, count-up, parallax
- **lenis** — smooth inertia scroll
- **lucide-react** — icons
- Fonts: **Space Grotesk** (display) + **Inter** (body) via `next/font/google`
- Deploy: **Vercel** (free). Dev server `0.0.0.0:3003` (3001 = cronboard).
> NOTE: Next 16 has breaking changes vs training data — read `node_modules/next/dist/docs/` before coding (per cronboard AGENTS.md).

## 4. Architecture
Static, content-driven single page. No backend, no data fetching — all content is typed local data rendered at build time.

```
app/
  layout.tsx        # fonts, metadata, <SmoothScroll>, global bg
  page.tsx          # composes sections in order
  globals.css       # tokens (colors, radii), base styles, reduced-motion
components/
  nav.tsx           # fixed top nav, blurs/borders on scroll, anchor links
  hero.tsx          # name, role, lede, CTAs, animated bg (glow+grid+blob), scroll cue
  impact-stats.tsx  # 4 count-up metrics
  about.tsx         # short bio: who/what, AI-native, trilingual, SF, DeFi
  experience.tsx    # sticky-progress vertical timeline; CIBC (12 bullets) -> KPMG
  skills.tsx        # grouped skill chips
  projects.tsx      # cards: cronboard, automation fleet, fictionalreality, IG venture
  education.tsx     # UIUC MS, UC Davis BA
  contact.tsx       # email + LinkedIn, footer
  ui/
    scroll-progress.tsx  # top progress bar (useScroll)
    reveal.tsx           # inView fade/slide/blur wrapper, staggerable
    count-up.tsx         # animate number on inView
    smooth-scroll.tsx    # Lenis provider
lib/
  content.ts        # typed source of truth for all copy (from /tmp/portfolio-content.md)
```

**Data flow:** `lib/content.ts` (typed objects: profile, metrics, experience[], skills[], projects[], education[], contact) → imported by section components → rendered statically. Editing copy = edit one file. This isolation keeps each section dumb/presentational and makes future additions (résumé button, GitHub, new role) trivial.

## 5. Animation Design (the signature)
- **Smooth scroll:** Lenis wraps the app; syncs with motion's scroll.
- **Reveal:** `<Reveal>` uses motion `whileInView` → opacity 0→1, translateY 28→0, slight blur→0; `once: true`; stagger via index delay. Default for most blocks.
- **Scroll progress:** thin accent bar bound to `useScroll().scrollYProgress`.
- **Count-up:** Impact metrics animate from 0 to target on first inView (eased), formatted (commas, prefix `$`, suffix `M+/%/+`).
- **Experience timeline:** vertical line with an accent "fill" that grows as the section scrolls (sticky/scroll-linked); each item reveals + dot lights up; cards lift on hover.
- **Hero:** subtle parallax/float on the glow blob; animated scroll cue.
- **Accessibility:** all motion gated behind `prefers-reduced-motion` (reduce → instant, no transforms). Keyboard-navigable anchors; focus-visible styles.

## 6. Design System
- **Background:** `#060608` (near-black); panels `#0d0e13`/`#111319`; border `#1d2029`
- **Text:** `#e8eaf0` primary, `#9aa0ad` muted, `#6b7180` faint
- **Accent:** electric blue `#4f8dff` (bright `#7aa9ff`, glow `rgba(79,141,255,.45)`) — single accent, used sparingly for emphasis + metrics
- **Type:** Space Grotesk (headings, tight tracking) · Inter (body)
- **Spacing:** generous section padding (~110px), 1080px max content width
- Tokens defined once in `globals.css`; components consume via Tailwind.

## 7. Content
Source of truth: `/tmp/portfolio-content.md` (synthesized union of all 8 résumés) → transcribed into `lib/content.ts`. **Privacy: name CIBC + use real metrics (user-approved).**
- **Headline metrics:** $200M+ protected · 99% false positives cut · 1,100+ hrs saved/yr · 60+ locations unified.
- **CIBC US — Corporate Security · Senior Risk & Data Analyst / Data Steward / SRO (Aug 2023–present, Remote):** 12 achievement bullets incl. fraud pipeline, insider-threat monitoring, **DTEX UAT leadership**, risk-intelligence parser, master location data, asset tracking, risk-scoring methodology, analytics-from-scratch, team leadership (+30%), resume-fraud→screening-team org change, SRO/governance, Insider Risk Governance Council secretary.
- **KPMG — Audit Associate (2022–23):** SOC-1/2, Power BI (+40%), Alteryx (−60%).
- **Education:** UIUC MS Accounting & Data Analytics (2022); UC Davis BA Economics + Tech Mgmt minor (2020).
- **Skills (grouped):** Languages/Eng · Data/Warehouse · Viz/BI · Risk/Compliance · AI · Leadership · Spoken languages.
- **Projects:** cronboard, AI automation fleet, fictionalreality, Instagram theme-page venture.
- **Contact:** serlotamcho@gmail.com · LinkedIn https://www.linkedin.com/in/serlo-t-571719150/ · San Francisco, CA. (No GitHub yet; no résumé button yet.)

## 8. Deployment
- `next build` → deploy to **Vercel** (free tier), project `serlo-portfolio`, default `*.vercel.app` domain. Custom domain later.
- Local dev/preview on `0.0.0.0:3003` for Serlo to review over the network (headless NUC).

## 9. Verification (no heavy test harness for a static marketing site)
- `next build` + `next lint` pass clean.
- Manual review on the served URL: visual fidelity, all sections present with full content, animations smooth.
- Responsive check (mobile ~375px, tablet, desktop).
- `prefers-reduced-motion` disables motion correctly.
- Basic a11y: heading order, color contrast, focus-visible, link labels.
- Lighthouse sanity pass (performance + accessibility) before deploy.

## 10. Build sequence (for the implementation plan)
1. Scaffold Next.js 16 + Tailwind v4 + TS (match cronboard); add motion, lenis, lucide-react, fonts.
2. Tokens + globals + layout + SmoothScroll + reduced-motion.
3. `lib/content.ts` from the content sheet.
4. UI primitives: Reveal, ScrollProgress, CountUp.
5. Sections in order: Nav, Hero, Impact, About, Experience, Skills, Projects, Education, Contact.
6. Responsive + a11y + reduced-motion polish.
7. `next build`, Lighthouse, fix.
8. Serve on :3003 for sign-off → deploy to Vercel.
