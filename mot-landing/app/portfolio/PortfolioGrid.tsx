"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Bot, Globe, LucideIcon, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

type FilterKey = "all" | "ai" | "web";

interface Project {
  icon: LucideIcon;
  slug: string;
  title: string;
  category: string;
  filter: Exclude<FilterKey, "all">;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    icon: MessageSquare,
    slug: "customer-support-agent",
    title: "Customer Support Agent",
    category: "Agentic AI",
    filter: "ai",
    description:
      "An AI agent that checks order status, assesses issue complexity, and decides whether to resolve or escalate to a human agent — automatically.",
    tags: ["AI Agent", "Customer Support", "Automation"],
  },
  {
    icon: Globe,
    slug: "ai-powered-landing-page",
    title: "AI-Powered Landing Page",
    category: "Web + AI",
    filter: "web",
    description:
      "A conversion-focused landing page where every lead capture form is instantly processed by a qualification agent for faster follow-up.",
    tags: ["Landing Page", "Lead Qualification", "AI Integration"],
  },
  {
    icon: Bot,
    slug: "startup-company-profile",
    title: "Startup Company Profile",
    category: "Web + AI",
    filter: "web",
    description:
      "A company profile website with an embedded agentic live chat that answers investor and user questions in real time.",
    tags: ["Company Profile", "Live Chat", "AI Agent"],
  },
];

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI Agents" },
  { key: "web", label: "Web" },
];

export function PortfolioGrid() {
  const [active, setActive] = useState<FilterKey>("all");
  const filtered =
    active === "all" ? projects : projects.filter((p) => p.filter === active);

  return (
    <>
      <section className="relative overflow-hidden pb-24 pt-36">
        <GlowOrb
          color="indigo"
          size={600}
          className="left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
        />
        <Container>
          <SectionHeader
            label="Portfolio"
            heading="Selected"
            headingAccent="Work"
            description="A collection of agentic AI systems and websites we've built for startups."
            align="center"
          />
        </Container>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950" />
        <Container>
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                onClick={() => setActive(filter.key)}
                variant={active === filter.key ? "primary" : "secondary"}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <StaggerItem key={project.title}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group flex h-full flex-col rounded-3xl glass-card p-8 transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/5 to-white/10 text-white ring-1 ring-white/10 transition-colors group-hover:from-indigo-500/30 group-hover:to-cyan-500/30">
                    <project.icon className="h-6 w-6" />
                  </div>
                  <Pill className="mt-6 self-start text-white">
                    {project.category}
                  </Pill>
                  <h2 className="mt-3 text-xl font-bold text-white">
                    {project.title}
                  </h2>
                  <p className="mt-4 flex-1 text-base leading-7 text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Pill key={tag}>{tag}</Pill>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-zinc-300">
                    Read case study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
