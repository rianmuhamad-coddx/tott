import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Code2,
  Compass,
  FileText,
  Globe,
  Layout,
  MessageSquare,
  Rocket,
  Search,
  Sparkles,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/app/sections/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Web Development — MOT",
  description:
    "MOT builds fast, clean, and conversion-focused websites for startups — from landing pages to AI-integrated web experiences.",
};

const benefits = [
  "Conversion-focused design & development",
  "Mobile-first, lightning-fast performance",
  "AI-ready integrations from day one",
];

const offerings = [
  {
    icon: Layout,
    title: "Website & Landing Page",
    description:
      "Custom, responsive, and conversion-optimized websites — from company profiles to product landing pages that turn visitors into leads.",
    features: [
      "Brand-aligned UI/UX",
      "Mobile-first responsive build",
      "SEO & performance tuned",
    ],
  },
  {
    icon: Sparkles,
    title: "Web + AI Integration",
    description:
      "Websites designed to work with AI agents from day one: agentic live chat, smart forms, embedded onboarding assistants, and more.",
    features: [
      "Embedded AI assistants",
      "Smart forms & lead capture",
      "API orchestration with AI agents",
    ],
  },
  {
    icon: Wrench,
    title: "Revamp & Maintenance",
    description:
      "Improve what you already have. Redesign, optimize performance, add new features, or get ongoing maintenance for your existing site.",
    features: [
      "UX/UI refresh",
      "Performance & SEO audits",
      "Continuous updates & support",
    ],
  },
];

const features = [
  "Clean, modern design tailored to your brand",
  "Mobile-first, fully responsive development",
  "SEO-friendly structure and fast performance",
  "Easy-to-manage code with future growth in mind",
  "Optional AI integrations for smarter user experiences",
];

const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We learn about your audience, goals, and brand so the site speaks directly to the people you want to reach.",
    icon: Search,
  },
  {
    step: "02",
    title: "Design",
    description:
      "We craft wireframes and high-fidelity visuals that balance beauty, clarity, and conversion.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Build",
    description:
      "We develop with clean code, modern frameworks, and responsive precision — ready for scale.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Launch & Optimize",
    description:
      "We deploy, monitor performance, and refine based on real user behavior and analytics.",
    icon: Rocket,
  },
];

const portfolioProjects = [
  {
    href: "/portfolio/customer-support-agent",
    category: "AI Agent",
    title: "Customer Support Agent",
    description:
      "An autonomous support agent that triages, resolves, and escalates tickets across channels.",
    icon: MessageSquare,
  },
  {
    href: "/portfolio/ai-powered-landing-page",
    category: "Web + AI",
    title: "AI-Powered Landing Page",
    description:
      "A high-converting landing experience with AI-generated personalization and lead capture.",
    icon: Sparkles,
  },
  {
    href: "/portfolio/startup-company-profile",
    category: "Web",
    title: "Startup Company Profile",
    description:
      "A premium company profile site built to establish trust with investors and early customers.",
    icon: FileText,
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        {/* Hero */}
        <section className="relative px-4 pb-24 pt-36 sm:px-6 lg:px-8">
          <GlowOrb color="cyan" size={600} className="left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" />
          <GlowOrb color="indigo" size={420} className="right-0 top-1/3" />
          <Container>
            <AnimatedSection className="mx-auto max-w-4xl text-center">
              <Pill>Services</Pill>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Web{" "}
                <span className="gradient-text">Development</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Fast, clean, and conversion-focused websites for startups. Built
                to stand alone or integrate seamlessly with your AI systems.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/50 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm"
                  >
                    <CheckCircle className="h-4 w-4 text-white" />
                    {benefit}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact" icon={<ArrowRight className="h-5 w-5" />}>
                  Start Your Website
                </Button>
                <Button href="/services/ai-development" variant="secondary">
                  Explore AI Development
                </Button>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Sub-services */}
        <section className="relative px-4 py-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
          <Container>
            <SectionHeader
              label="What We Build"
              heading="End-to-end web solutions, from"
              headingAccent="concept to launch"
              align="center"
            />

            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
              {offerings.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="glass-card flex h-full flex-col rounded-3xl p-8">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-white/5 to-white/10 text-white ring-1 ring-white/10">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-zinc-400">
                      {item.description}
                    </p>
                    <ul className="mt-6 space-y-3 border-t border-slate-700/30 pt-6">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* Feature list */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <AnimatedSection>
                <Pill className="mb-6">Why MOT</Pill>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Built for Performance &{" "}
                  <span className="gradient-text">Growth</span>
                </h2>
                <p className="mt-4 text-lg text-zinc-400">
                  Every website we build is optimized for speed, search, and
                  conversion — with a foundation that grows as your startup
                  scales.
                </p>
                <ul className="mt-8 space-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="rounded-3xl border border-slate-700/50 bg-gradient-to-br from-zinc-950/80 to-black/80 p-8 text-white shadow-2xl shadow-white/5 backdrop-blur-xl sm:p-12">
                  <Globe className="h-12 w-12 text-white" />
                  <h3 className="mt-6 text-2xl font-bold">
                    Need a website that converts?
                  </h3>
                  <p className="mt-4 text-zinc-400">
                    Tell us about your product and audience. We&apos;ll design a
                    website that turns visitors into qualified leads.
                  </p>
                  <div className="mt-8">
                    <Button href="/contact" icon={<ArrowRight className="h-5 w-5" />}>
                      Get a Free Quote
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* Process */}
        <section className="relative px-4 py-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
          <Container>
            <SectionHeader
              label="Process"
              heading="A tailored 4-step path to your"
              headingAccent="new website"
              description="We keep every phase focused on outcomes, not meetings."
              align="center"
            />

            <StaggerContainer className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="absolute inset-x-0 top-16 -z-10 hidden h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent lg:block" />
              {process.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="glass-card relative rounded-3xl p-8 text-center">
                    <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-white/5 to-white/10 text-white ring-1 ring-white/10">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <p className="mt-4 font-mono text-sm text-zinc-500">{item.step}</p>
                    <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* Related portfolio */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <Container>
            <SectionHeader
              label="Related Work"
              heading="Projects we've"
              headingAccent="shipped"
              description="A few examples of how we've turned design and code into business outcomes."
              align="center"
            />

            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
              {portfolioProjects.map((project) => (
                <StaggerItem key={project.href}>
                  <Link
                    href={project.href}
                    className="glass-card group flex h-full flex-col rounded-3xl p-8"
                  >
                    <div className="flex items-center justify-between">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/5 to-white/10 text-white ring-1 ring-white/10 transition-transform group-hover:scale-110">
                        <project.icon className="h-6 w-6" />
                      </div>
                      <Pill>{project.category}</Pill>
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-zinc-400">
                      {project.description}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-white transition-colors group-hover:text-zinc-300">
                      View case study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* Closing CTA */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <Container>
            <AnimatedSection>
              <div className="relative overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-br from-indigo-950/80 via-slate-900/80 to-slate-900/80 px-6 py-16 text-center shadow-2xl shadow-white/5 backdrop-blur-xl sm:px-12 lg:py-20">
                <GlowOrb color="indigo" size={400} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Ready to launch your{" "}
                    <span className="gradient-text">startup website?</span>
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
                    Tell us what you&apos;re building. We&apos;ll reply within one business day with a clear next step.
                  </p>
                  <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button href="/contact" icon={<ArrowRight className="h-5 w-5" />}>
                      Start Your Website
                    </Button>
                    <Button href="/portfolio" variant="secondary">
                      Explore Our Work
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
