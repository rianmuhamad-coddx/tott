# MOT Website Redesign — Design Spec

**Date:** 2026-07-01  
**Status:** Approved by user, ready for implementation plan  
**Scope:** Landing page (`/`) of MOT agency website  
**Tech stack:** Next.js 16, React 19, Tailwind CSS 4, TypeScript, Framer Motion, Lucide React

---

## 1. Goal

Redesign the MOT landing page to better reflect the agency’s positioning as a **premium AI agentic & web development partner for early-stage startups**. The new design should feel mature, technically capable, and conversion-focused — without being noisy or generic.

**Direction chosen:** **A + C — Premium Dark Tech Studio + subtle kinetic interactions**.

---

## 2. Design Direction

- **Premium dark foundation.** Keep the dark mode but make it richer and more refined.
- **Generous whitespace & bold typography.** Let the content breathe; headings should dominate.
- **Subtle kinetic accents.** Cursor-reactive glow, ambient gradient, scroll reveals — just enough to demonstrate MOT’s technical capability.
- **Reduced glassmorphism.** Use it sparingly and cleanly so it feels modern, not cluttered.
- **Studio, not platform.** The visual tone should communicate a small, focused team that takes projects seriously.

---

## 3. Visual Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| Background | `#030712` | Page background |
| Background Elevated | `rgba(15, 23, 42, 0.6)` | Cards, glass surfaces |
| Foreground | `#F8FAFC` | Headings, primary text |
| Body | `#CBD5E1` | Body text |
| Muted | `#94A3B8` | Secondary text, captions |
| Primary | `#6366F1` | CTAs, links, primary accents |
| Primary Hover | `#4F46E5` | Button/link hover |
| Accent Cyan | `#06B6D4` | Highlights, glows |
| Accent Violet | `#8B5CF6` | Gradient endpoints, secondary glows |
| Border | `rgba(148, 163, 184, 0.08)` | Subtle card borders |

### Typography

- **Font family:** Geist Sans for UI; Geist Mono for labels, tags, and tech accents.
- **Scale:**
  - Hero H1: `text-5xl` → `text-7xl` depending on breakpoint
  - Section H2: `text-3xl` → `text-4xl`
  - H3: `text-xl` → `text-2xl`
  - Body: `text-base` → `text-lg`
  - Caption/label: `text-sm`
- **Line height:** tight (`leading-tight`) for headings, relaxed (`leading-relaxed`) for body.

### Spacing & Layout

- **Container:** `max-w-7xl`, centered.
- **Section padding:** `py-24` → `py-32` on desktop.
- **Gap scale:** larger gaps between groups (`gap-8` → `gap-12`).
- **Radius:** cards `rounded-2xl`, buttons/badges `rounded-full`.

### Components

- **Primary button:** gradient indigo → violet, white text, rounded-full, subtle glow on hover.
- **Secondary button:** transparent with subtle border, muted text, hover brightens.
- **Card:** elevated dark surface, thin border, hover lifts slightly with border glow.
- **Badge:** small rounded-full pill with soft background and mono label.

---

## 4. Section-by-Section Redesign

### Hero

- **Layout:** full viewport height (`min-h-screen`), headline left-aligned or centered depending on content length.
- **Headline:** “We build agentic AI & web experiences for early-stage startups.”
- **Subheadline:** one concise sentence about shipping faster without a full tech team.
- **CTAs:** two buttons — primary “Start a project” and secondary “See our work”.
- **Trust bar:** 3–4 items under CTA (e.g., “10+ startups shipped”, “AI + web in one team”, “Weeks, not months”).
- **Background:** ambient mesh gradient + subtle cursor-following glow.

### About

- **Layout:** editorial split — large quote/statement on the left, 3 key stats on the right.
- **Stats examples:** projects shipped, average time-to-market, client retention.
- **Values:** 4 value cards below the stats (outcome-focused, transparent, long-term, startup-ready).

### Services

- **Layout:** bento-style 2-column grid for the two main services.
- **Card content:**
  - Icon + service title.
  - One-sentence outcome.
  - 3 sub-service items.
- **Hover state:** border glow, slight lift, sub-items may fade in.

### Process

- **Layout:** 4-step horizontal timeline on desktop, vertical on mobile.
- **Steps:** Discover → Design → Build → Handoff & Grow.
- **Visual:** large step number, small icon, 1-line description.

### Portfolio

- **Layout:** grid of case-study cards.
- **Card:** thumbnail/mood image, project title, tags, hover overlay with “View case study”.
- **Hover:** thumbnail scales slightly, overlay fades in.

### Testimonials

- **Layout:** 2–3 quote cards in a row.
- **Card:** quote text, client name, role, company logo or avatar.

### CTA

- **Layout:** wide section with strong gradient background.
- **Headline:** “Ready to ship faster? Let’s talk.”
- **Action:** one prominent primary button linking to `/contact`.

### Footer

- **Layout:** 4-column grid: brand, services, company, contact + socials.
- **Style:** muted, clean, no heavy visual weight.

---

## 5. Interactions & Animations

All animations must be GPU-friendly and respect `prefers-reduced-motion`.

| Interaction | Implementation |
|---|---|
| Page load | Staggered fade-in + translate-y for hero elements using Framer Motion |
| Scroll reveal | Sections fade/slide in as they enter viewport |
| Card hover | `translateY(-4px)`, border color shift, subtle box-shadow glow |
| Button hover | Gradient glow intensifies, scale(1.02) optional |
| Cursor glow | CSS radial gradient positioned via `transform` on `mousemove` throttled with `requestAnimationFrame` |
| Ambient background | Slow CSS animation on gradient mesh opacity/position |

**Performance rules:**
- Only animate `transform` and `opacity`.
- Avoid layout-triggering animations.
- Use `will-change` sparingly on active elements.

---

## 6. Content & Copy Strategy

- Lead with **outcomes**, not features.
- Reduce paragraph length; use scannable structure.
- Keep the existing brand voice: confident, transparent, founder-friendly.
- Hero and CTA copy should drive conversion.

---

## 7. Performance & Accessibility

- **Contrast:** ensure all text meets WCAG AA against dark backgrounds.
- **Motion:** implement `prefers-reduced-motion: reduce` fallbacks.
- **Lazy loading:** defer below-fold images and heavy sections.
- **Background effects:** keep them CSS-driven where possible; no heavy JavaScript particles.
- **Keyboard:** visible focus states on all interactive elements.

---

## 8. Testing Plan

- `npm run build` passes with no errors.
- Lighthouse scores target ≥ 90 across Performance, Accessibility, Best Practices, SEO.
- Responsive verification on mobile, tablet, and desktop widths.
- Keyboard navigation and focus order check.
- Visual regression by section.

---

## 9. Out of Scope

- Multi-language support.
- New page creation beyond the landing page.
- Backend or CMS integration.
- Major copywriting overhaul beyond tightening existing content.

---

## 10. Open Questions / Decisions

None remaining. Direction approved by user on 2026-07-01.
