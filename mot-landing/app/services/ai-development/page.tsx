import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle,
  Code2,
  Compass,
  FileText,
  Layers,
  Layout,
  MessageSquare,
  Rocket,
  Search,
  Settings,
  Sparkles,
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
  title: "Agentic AI Development — MOT",
  description:
    "MOT builds custom AI agents that plan, decide, and act. From customer support to sales qualification and operations automation.",
};

const benefits = [
  "Autonomous decision-making agents",
  "Deep integration with your stack",
  "Built for startup speed & scale",
];

const offerings = [
  {
    icon: Bot,
    title: "Custom AI Agent Development",
    description:
      "We design and build agents tailored to your workflow — whether it's customer support, sales qualification, onboarding, or operations.",
    features: ["LLM selection & prompt engineering", "Tool-calling & memory design", "Evaluation & safety guardrails"],
  },
  {
    icon: Layers,
    title: "AI Integration",
    description:
      "Connect your agent to CRMs, helpdesks, WhatsApp Business, payment gateways, internal databases, and any API your business already uses.",
    features: ["CRM & helpdesk connections", "Messaging & voice channels", "Custom API orchestration"],
  },
  {
    icon: Settings,
    title: "AI Consulting & Architecture",
    description:
      "Not sure where to start? We map your processes, identify the highest-value automation opportunities, and design the architecture before writing code.",
    features: ["Workflow audit & prioritization", "Technical architecture design", "ROI-driven roadmap"],
  },
];

const useCases = [
  "Customer support agents that triage, resolve, and escalate issues autonomously",
  "Sales agents that verify leads, score qualification, and prioritize follow-ups",
  "Onboarding agents that adapt guidance based on user progress and behavior",
  "Operations agents that monitor data and trigger actions across tools",
];

const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We audit your workflows, data sources, and the highest-friction customer or team touchpoints.",
    icon: Search,
  },
  {
    step: "02",
    title: "Plan",
    description:
      "We design the agent architecture, choose the right models, and map integrations before writing code.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Build",
    description:
      "We prototype fast, wire up tools and memory, and run real-world evaluations with your data.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Deploy & Scale",
    description:
      "We ship to production, monitor performance, and iterate as usage and edge cases grow.",
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

export default function AIDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        {/* Hero */}
        <section className="relative px-4 pb-24 pt-36 sm:px-6 lg:px-8">
          <GlowOrb color="indigo" size={600} className="left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" />
          <GlowOrb color="cyan" size={420} className="right-0 top-1/3" />
          <Container>
            <AnimatedSection className="mx-auto max-w-4xl text-center">
              <Pill>Services</Pill>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Agentic AI{" "}
                <span className="gradient-text">Development</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                AI agents that plan, decide, and act — not just chat. We build
                autonomous systems that integrate with your tools and scale with
                your startup.
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
                  Discuss Your AI Project
                </Button>
                <Button href="/services/web-development" variant="secondary">
                  Explore Web Development
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
              heading="End-to-end agentic AI solutions, from"
              headingAccent="strategy to deployment"
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

        {/* Use cases */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <AnimatedSection>
                <Pill className="mb-6">Use Cases</Pill>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Real scenarios for{" "}
                  <span className="gradient-text">agentic AI</span>
                </h2>
                <p className="mt-4 text-lg text-zinc-400">
                  Here are some of the agentic AI systems we can build for your
                  startup.
                </p>
                <ul className="mt-8 space-y-4">
                  {useCases.map((useCase) => (
                    <li key={useCase} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                      <span className="text-slate-300">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="rounded-3xl border border-slate-700/50 bg-gradient-to-br from-zinc-950/80 to-black/80 p-8 text-white shadow-2xl shadow-white/5 backdrop-blur-xl sm:p-12">
                  <Layout className="h-12 w-12 text-white" />
                  <h3 className="mt-6 text-2xl font-bold">
                    Not sure which process to automate first?
                  </h3>
                  <p className="mt-4 text-zinc-400">
                    Book a free AI consultation. We&apos;ll map your workflows and
                    identify the highest-impact place to start.
                  </p>
                  <div className="mt-8">
                    <Button href="/contact" icon={<ArrowRight className="h-5 w-5" />}>
                      Book Free Consultation
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
              heading="A tailored 4-step path to your first"
              headingAccent="AI agent"
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
              heading="AI projects we've"
              headingAccent="shipped"
              description="A few examples of how we've turned agentic AI into business outcomes."
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
                    Ready to ship your first{" "}
                    <span className="gradient-text">AI agent?</span>
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
                    Tell us what you&apos;re building. We&apos;ll reply within one business day with a clear next step.
                  </p>
                  <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button href="/contact" icon={<ArrowRight className="h-5 w-5" />}>
                      Discuss Your AI Project
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
