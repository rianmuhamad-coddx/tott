# MOT Website Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the MOT landing page (`/`) to a premium dark-tech aesthetic with subtle kinetic interactions, improved typography, and clearer conversion flow.

**Architecture:** Keep the existing Next.js 16 + Tailwind CSS 4 + Framer Motion structure. Update global design tokens first, then add a reusable cursor-glow component, then redesign each section component in page order. Each section is self-contained; changes are primarily visual and do not alter routing or data flow.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, TypeScript, Framer Motion, Lucide React.

---

## File Structure

| File | Responsibility |
|---|---|
| `app/globals.css` | Global design tokens, background gradients, glass/card utilities |
| `components/CursorGlow.tsx` | New reusable subtle cursor-following glow |
| `components/Navbar.tsx` | Sticky navigation, refined styling |
| `components/AnimatedSection.tsx` | Scroll-reveal wrappers (minor tweaks only) |
| `app/sections/Hero.tsx` | Full-height hero: headline, CTAs, trust bar, ambient background |
| `app/sections/About.tsx` | Editorial layout: statement + stats + values |
| `app/sections/Services.tsx` | Bento-grid service cards |
| `app/sections/Process.tsx` | 4-step process timeline |
| `app/sections/Portfolio.tsx` | Case-study cards |
| `app/sections/Testimonials.tsx` | Quote cards |
| `app/sections/CTA.tsx` | Final call-to-action section |
| `app/sections/Footer.tsx` | Multi-column footer |

---

## Task 1: Update Global Design Tokens and Utilities

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Replace `app/globals.css` with refined tokens and utilities**

```css
@import "tailwindcss";

:root {
  --background: #030712;
  --foreground: #f8fafc;
  --body: #cbd5e1;
  --muted: #94a3b8;
  --card: rgba(15, 23, 42, 0.6);
  --card-border: rgba(148, 163, 184, 0.08);
  --card-hover: rgba(30, 41, 59, 0.7);
  --primary: #6366f1;
  --primary-hover: #4f46e5;
  --accent-cyan: #06b6d4;
  --accent-violet: #8b5cf6;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--background);
  background-image:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.12), transparent),
    radial-gradient(ellipse 60% 40% at 80% 50%, rgba(6, 182, 212, 0.06), transparent),
    radial-gradient(ellipse 50% 30% at 20% 90%, rgba(139, 92, 246, 0.08), transparent);
  background-attachment: fixed;
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}

/* Glass utilities */
.glass {
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(148, 163, 184, 0.08);
}

.glass-strong {
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(148, 163, 184, 0.1);
}

.glass-card {
  background: rgba(30, 41, 59, 0.35);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(148, 163, 184, 0.08);
  transition: all 0.3s ease;
}

.glass-card:hover {
  background: rgba(30, 41, 59, 0.55);
  border-color: rgba(99, 102, 241, 0.25);
  box-shadow: 0 0 40px rgba(99, 102, 241, 0.12);
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, #818cf8 0%, #22d3ee 50%, #c084fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Cursor glow utility */
.cursor-glow {
  pointer-events: none;
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.cursor-glow::before {
  content: "";
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  left: var(--mouse-x, 50%);
  top: var(--mouse-y, 50%);
  transition: left 0.2s ease-out, top 0.2s ease-out;
}

/* Glow effects */
.glow {
  box-shadow: 0 0 60px rgba(99, 102, 241, 0.18);
}

.glow-cyan {
  box-shadow: 0 0 60px rgba(6, 182, 212, 0.12);
}

/* Section spacing */
.section-padding {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

@media (min-width: 1024px) {
  .section-padding {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
}

/* Selection */
::selection {
  background: rgba(99, 102, 241, 0.4);
  color: white;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 2: Verify CSS compiles**

Run: `cd /home/ubuntu/agency-mot/mot-landing && npm run build`  
Expected: Build completes with no CSS-related errors.

- [ ] **Step 3: Commit**

```bash
cd /home/ubuntu/agency-mot/mot-landing
git add app/globals.css
git commit -m "design(tokens): refine colors, glass, cursor-glow utilities"
```

---

## Task 2: Create CursorGlow Component

**Files:**
- Create: `components/CursorGlow.tsx`

- [ ] **Step 1: Create `components/CursorGlow.tsx`**

```tsx
"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let pending = { x: 50, y: 50 };

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      pending = {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      };
      if (!raf) {
        raf = requestAnimationFrame(() => {
          el.style.setProperty("--mouse-x", `${pending.x}%`);
          el.style.setProperty("--mouse-y", `${pending.y}%`);
          raf = 0;
        });
      }
    };

    el.addEventListener("mousemove", handleMove);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
```

- [ ] **Step 2: Verify import works**

Run: `cd /home/ubuntu/agency-mot/mot-landing && npx tsc --noEmit`  
Expected: No type errors.

- [ ] **Step 3: Commit**

```bash
cd /home/ubuntu/agency-mot/mot-landing
git add components/CursorGlow.tsx
git commit -m "feat(cursor-glow): add reusable cursor-following glow component"
```

---

## Task 3: Update Navbar

**Files:**
- Modify: `components/Navbar.tsx`

- [ ] **Step 1: Replace `components/Navbar.tsx` with refined styling**

Keep the existing structure and logic; update only classNames for a cleaner, more premium look.

Key changes:
- Header background: `bg-slate-950/60` with stronger blur.
- Border: thinner `border-slate-800/30`.
- Logo mark: keep existing.
- Nav links: `text-slate-400` default, `text-white` hover, add underline-glow effect on hover.
- CTA button: keep gradient, add `hover:scale-[1.02]`.
- Mobile menu: keep existing behavior, refine colors to match.

Implementation approach: read the current file, then apply find-and-replace for the className changes above. Do not change navLinks or routing logic.

- [ ] **Step 2: Verify header renders**

Run: `npm run dev` and open `http://localhost:3000`.  
Check: Navbar is sticky, links are visible, mobile menu toggles.

- [ ] **Step 3: Commit**

```bash
cd /home/ubuntu/agency-mot/mot-landing
git add components/Navbar.tsx
git commit -m "design(navbar): refine navbar styling for premium dark look"
```

---

## Task 4: Redesign Hero Section

**Files:**
- Modify: `app/sections/Hero.tsx`
- Use: `components/CursorGlow.tsx`

- [ ] **Step 1: Replace `app/sections/Hero.tsx` with new design**

```tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import CursorGlow from "@/components/CursorGlow";

const trustItems = [
  { label: "Ship in weeks", desc: "Iterative delivery, no long cycles" },
  { label: "Startup pricing", desc: "Built for early-stage budgets" },
  { label: "End-to-end team", desc: "AI + web in one partner" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-32 lg:pt-28">
      <div className="absolute inset-0 -z-20">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/8 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/6 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-violet-500/8 blur-3xl" />
      </div>
      <CursorGlow />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-700/40 bg-slate-900/40 px-4 py-1.5 text-sm font-medium text-cyan-400 backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4" />
            AI Agentic & Web Development Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            We build agentic AI & web experiences{" "}
            <span className="gradient-text">for early-stage startups.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl"
          >
            MOT helps founders ship faster without hiring a full tech team.
            From AI agents that think and act, to websites that convert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-8 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] hover:shadow-indigo-500/40"
            >
              Start a project
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-700/60 bg-slate-900/40 px-8 text-base font-semibold text-white backdrop-blur-md transition-all hover:border-slate-600 hover:bg-slate-800/40"
            >
              See our work
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {trustItems.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-5"
            >
              <p className="font-semibold text-white">{item.label}</p>
              <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify hero renders and cursor glow works**

Run: `npm run dev`, open `http://localhost:3000`.  
Check: full-height hero, large headline, two CTAs, trust cards, cursor glow follows mouse.

- [ ] **Step 3: Commit**

```bash
cd /home/ubuntu/agency-mot/mot-landing
git add app/sections/Hero.tsx
git commit -m "design(hero): premium hero with large type, trust bar, cursor glow"
```

---

## Task 5: Redesign About Section

**Files:**
- Modify: `app/sections/About.tsx`

- [ ] **Step 1: Replace `app/sections/About.tsx` with editorial layout**

```tsx
"use client";

import { motion } from "framer-motion";
import { Target, Rocket, Eye, Handshake } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const stats = [
  { value: "10+", label: "Startups shipped" },
  { value: "3-6", label: "Weeks average delivery" },
  { value: "100%", label: "Founder-led projects" },
];

const values = [
  {
    icon: Target,
    title: "Results first, tools second",
    desc: "We focus on the outcome your startup needs — not forcing a specific tech stack.",
  },
  {
    icon: Rocket,
    title: "Startup-ready",
    desc: "Our pace, scope, and pricing are designed for early-stage reality.",
  },
  {
    icon: Eye,
    title: "Move fast, build right",
    desc: "Speed doesn't mean shortcuts. We ship quickly without ruining the foundation.",
  },
  {
    icon: Handshake,
    title: "Transparent by design",
    desc: "You always know what's being built, where the progress is, and why decisions are made.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
              Why MOT
            </p>
            <blockquote className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              A small team that builds{" "}
              <span className="gradient-text">serious technology</span> for
              serious founders.
            </blockquote>
            <p className="mt-8 text-lg leading-8 text-slate-400">
              MOT partners with early-stage startups to ship agentic AI and
              high-converting websites. We don't chase volume — we choose
              projects we can own end to end.
            </p>
          </AnimatedSection>

          <div className="space-y-10">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-3xl font-extrabold text-white sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <StaggerContainer className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="glass-card rounded-2xl p-5 h-full"
                  >
                    <value.icon className="h-6 w-6 text-cyan-400" />
                    <h3 className="mt-4 text-base font-semibold text-white">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {value.desc}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify section layout**

Run: `npm run dev`, scroll to About.  
Check: left quote, right stats, 2x2 value cards, responsive.

- [ ] **Step 3: Commit**

```bash
cd /home/ubuntu/agency-mot/mot-landing
git add app/sections/About.tsx
git commit -m "design(about): editorial layout with stats and value cards"
```

---

## Task 6: Redesign Services Section

**Files:**
- Modify: `app/sections/Services.tsx`

- [ ] **Step 1: Replace `app/sections/Services.tsx` with bento-grid cards**

```tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Globe } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const services = [
  {
    icon: Bot,
    title: "Agentic AI Development",
    description:
      "Build AI agents that plan, decide, and act — integrated directly into your workflows.",
    items: [
      "Custom AI Agent Development",
      "AI Integration (CRM, WhatsApp, Helpdesk)",
      "AI Consulting & Architecture",
    ],
    cta: "Explore AI Services",
    href: "/services/ai-development",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Ship fast, clean, conversion-focused websites — built to stand alone or power your AI systems.",
    items: [
      "Landing Page & Company Profile",
      "Web + AI Integration",
      "Revamp & Maintenance",
    ],
    cta: "Explore Web Services",
    href: "/services/web-development",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
            What We Build
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Two services. One team.{" "}
            <span className="gradient-text">Zero handoffs.</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="glass-card group relative flex h-full flex-col rounded-3xl p-8"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 text-cyan-400 ring-1 ring-white/10">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-8 text-2xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-400">
                  {service.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-cyan-400 transition-colors group-hover:text-cyan-300"
                >
                  {service.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify cards and hover**

Run: `npm run dev`, scroll to Services.  
Check: two large bento cards, hover lift + glow, link arrow animates.

- [ ] **Step 3: Commit**

```bash
cd /home/ubuntu/agency-mot/mot-landing
git add app/sections/Services.tsx
git commit -m "design(services): bento-grid service cards with hover glow"
```

---

## Task 7: Redesign Process Section

**Files:**
- Modify: `app/sections/Process.tsx`

- [ ] **Step 1: Replace `app/sections/Process.tsx` with timeline layout**

```tsx
"use client";

import { motion } from "framer-motion";
import { Search, Map, Code2, Rocket } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description: "Understand your business, users, and what success looks like.",
  },
  {
    icon: Map,
    step: "02",
    title: "Design & Plan",
    description: "Define scope, architecture, and milestones — no surprises.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Build & Iterate",
    description: "Ship fast, review weekly, and adjust based on feedback.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Handoff & Grow",
    description: "Launch, monitor, and keep improving as your startup scales.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
            How We Work
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            From first call to shipped product in{" "}
            <span className="gradient-text">weeks.</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="relative mt-16">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-500/30 via-cyan-500/30 to-transparent lg:left-1/2 lg:-translate-x-1/2 lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((item, idx) => (
              <StaggerItem key={item.title}>
                <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:pb-16">
                  <div className={`flex gap-6 ${idx % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/25">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-mono text-slate-500">
                          Step {item.step}
                        </span>
                      </div>
                      <h3 className="mt-2 text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify timeline layout**

Run: `npm run dev`, scroll to Process.  
Check: 4 steps with connecting line on desktop, clean stacking on mobile.

- [ ] **Step 3: Commit**

```bash
cd /home/ubuntu/agency-mot/mot-landing
git add app/sections/Process.tsx
git commit -m "design(process): alternating timeline with step connector line"
```

---

## Task 8: Redesign Portfolio Section

**Files:**
- Modify: `app/sections/Portfolio.tsx`

- [ ] **Step 1: Replace `app/sections/Portfolio.tsx` with case-study cards**

```tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Globe, MessageSquare } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const projects = [
  {
    icon: MessageSquare,
    slug: "customer-support-agent",
    title: "Customer Support Agent",
    category: "Agentic AI",
    description:
      "An AI agent that checks order status, assesses issue complexity, and decides whether to resolve or escalate — automatically.",
  },
  {
    icon: Globe,
    slug: "ai-powered-landing-page",
    title: "AI-Powered Landing Page",
    category: "Web + AI",
    description:
      "A conversion-focused landing page where every lead capture form is instantly processed by a qualification agent.",
  },
  {
    icon: Bot,
    slug: "startup-company-profile",
    title: "Startup Company Profile",
    category: "Web + AI",
    description:
      "A company profile website with an embedded agentic live chat that answers investor and user questions in real time.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
            Selected Work
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Real projects for{" "}
            <span className="gradient-text">real startups.</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group flex h-full flex-col rounded-3xl glass-card p-8"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 text-cyan-400 ring-1 ring-white/10 transition-colors group-hover:from-indigo-500/30 group-hover:to-cyan-500/30">
                    <project.icon className="h-6 w-6" />
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-cyan-400">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-7 text-slate-400">
                    {project.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300">
                    Read case study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify portfolio grid**

Run: `npm run dev`, scroll to Portfolio.  
Check: 3-column grid on desktop, hover lift, links work.

- [ ] **Step 3: Commit**

```bash
cd /home/ubuntu/agency-mot/mot-landing
git add app/sections/Portfolio.tsx
git commit -m "design(portfolio): case-study cards with hover lift"
```

---

## Task 9: Redesign Testimonials Section

**Files:**
- Modify: `app/sections/Testimonials.tsx`

- [ ] **Step 1: Replace `app/sections/Testimonials.tsx` with quote cards**

```tsx
"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const testimonials = [
  {
    quote:
      "MOT helped us launch our AI agent in just three weeks. It felt like having an internal tech team, but without the overhead.",
    name: "Rian",
    role: "Founder",
    company: "MOT",
  },
  {
    quote:
      "Finally, a team that understands startup speed. They shipped our landing page fast and it actually converts.",
    name: "Alexandra",
    role: "Co-Founder",
    company: "SaaS Startup",
  },
  {
    quote:
      "The integration between our website and AI agent was seamless. Our support workload dropped significantly within days.",
    name: "Dimas",
    role: "Head of Operations",
    company: "E-commerce Brand",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
            What Founders Say
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Trusted by founders who{" "}
            <span className="gradient-text">move fast.</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <StaggerItem key={item.name}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="glass-card relative h-full rounded-3xl p-8"
              >
                <Quote className="h-8 w-8 text-indigo-400/40" />
                <p className="mt-4 text-base leading-7 text-slate-300">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-sm font-bold text-white">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify testimonial cards**

Run: `npm run dev`, scroll to Testimonials.  
Check: quote cards, avatars, hover effect.

- [ ] **Step 3: Commit**

```bash
cd /home/ubuntu/agency-mot/mot-landing
git add app/sections/Testimonials.tsx
git commit -m "design(testimonials): clean quote cards with hover lift"
```

---

## Task 10: Redesign CTA Section

**Files:**
- Modify: `app/sections/CTA.tsx`
- Use: `components/CursorGlow.tsx`

- [ ] **Step 1: Replace `app/sections/CTA.tsx` with strong final CTA**

```tsx
"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import CursorGlow from "@/components/CursorGlow";

export default function CTA() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-indigo-950/80 via-slate-950 to-cyan-950/60" />
      <div className="absolute inset-0 -z-20">
        <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <CursorGlow />

      <div className="relative mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to ship{" "}
            <span className="gradient-text">faster?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Book a free 30-minute strategy call. We&apos;ll map out what to build
            first — whether it&apos;s an AI agent, a website, or both.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-8 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] hover:shadow-indigo-500/40"
            >
              Book a Free Call
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:hello@mot.id?subject=Project%20Inquiry"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/40 px-8 text-base font-semibold text-white backdrop-blur-md transition-all hover:border-slate-600 hover:bg-slate-800/40"
            >
              <Mail className="h-5 w-5" />
              Send an Inquiry
            </Link>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            Prefer email? Reach us at{" "}
            <a
              href="mailto:hello@mot.id"
              className="font-semibold text-cyan-400 hover:text-cyan-300"
            >
              hello@mot.id
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify CTA renders**

Run: `npm run dev`, scroll to bottom.  
Check: gradient background, headline, two CTAs, cursor glow.

- [ ] **Step 3: Commit**

```bash
cd /home/ubuntu/agency-mot/mot-landing
git add app/sections/CTA.tsx
git commit -m "design(cta): stronger final CTA with gradient and cursor glow"
```

---

## Task 11: Redesign Footer

**Files:**
- Modify: `app/sections/Footer.tsx`

- [ ] **Step 1: Replace `app/sections/Footer.tsx` with multi-column footer**

```tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "Services",
    links: [
      { href: "/services/ai-development", label: "AI Development" },
      { href: "/services/web-development", label: "Web Development" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-slate-800/30 bg-slate-950/60 px-4 py-16 backdrop-blur-xl sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25">
                M
              </span>
              MOT
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              AI agentic & web development agency for early-stage startups. We
              build the intelligence behind your startup.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold text-white">{group.title}</p>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:hello@mot.id"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  hello@mot.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800/30 pt-8">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} MOT. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
```

- [ ] **Step 2: Verify footer layout**

Run: `npm run dev`, scroll to bottom.  
Check: 4-column footer on desktop, links work, copyright present.

- [ ] **Step 3: Commit**

```bash
cd /home/ubuntu/agency-mot/mot-landing
git add app/sections/Footer.tsx
git commit -m "design(footer): multi-column footer with cleaner layout"
```

---

## Task 12: Final Verification

**Files:**
- All modified files

- [ ] **Step 1: Run production build**

Run: `cd /home/ubuntu/agency-mot/mot-landing && npm run build`  
Expected: Build succeeds with no errors.

- [ ] **Step 2: Run linter**

Run: `cd /home/ubuntu/agency-mot/mot-landing && npm run lint`  
Expected: No lint errors.

- [ ] **Step 3: Run type check**

Run: `cd /home/ubuntu/agency-mot/mot-landing && npx tsc --noEmit`  
Expected: No type errors.

- [ ] **Step 4: Visual regression checks**

Run: `npm run dev`, open `http://localhost:3000`. Verify at these widths:
- Mobile (375px): readable hero, stacked sections, working mobile nav.
- Tablet (768px): 2-column grids work, text not too large.
- Desktop (1440px): full layout, cursor glow, hover effects.

Check each section against the spec:
- [ ] Hero full-height with large headline
- [ ] About has quote + stats + 4 value cards
- [ ] Services bento grid with 2 cards
- [ ] Process timeline with 4 steps
- [ ] Portfolio 3-column grid
- [ ] Testimonials 3 quote cards
- [ ] CTA gradient background + cursor glow
- [ ] Footer 4-column layout

- [ ] **Step 5: Lighthouse check**

Run: open DevTools Lighthouse, run audit on desktop.  
Expected: Performance, Accessibility, Best Practices, SEO all ≥ 90.

- [ ] **Step 6: Final commit (or commit each verified section already committed)**

If all sections were committed in their tasks, only tag/annotate:

```bash
cd /home/ubuntu/agency-mot/mot-landing
# Optional: create a lightweight tag for the redesign
# git tag -a redesign-v1 -m "MOT landing page redesign"
```

---

## Self-Review Checklist

- [ ] **Spec coverage:** Every section in `2026-07-01-mot-website-redesign.md` has a corresponding task above.
- [ ] **Placeholder scan:** No TBD, TODO, or vague steps. Each step includes exact file paths, code, or commands.
- [ ] **Type consistency:** All imported components (`AnimatedSection`, `StaggerContainer`, `StaggerItem`, `CursorGlow`) exist and are used consistently.
- [ ] **Tech stack alignment:** Uses only existing dependencies (Next.js, React, Tailwind v4, Framer Motion, Lucide). No new packages.
