"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Globe, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Pill } from "@/components/ui/Pill";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const projects = [
  {
    icon: MessageSquare,
    slug: "customer-support-agent",
    title: "Customer Support Agent",
    category: "Agentic AI",
    description:
      "An AI agent that checks order status, assesses issue complexity, and decides whether to resolve or escalate to a human agent — automatically.",
  },
  {
    icon: Globe,
    slug: "ai-powered-landing-page",
    title: "AI-Powered Landing Page",
    category: "Web + AI",
    description:
      "A conversion-focused landing page where every lead capture form is instantly processed by a qualification agent for faster follow-up.",
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
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950" />

      <Container>
        <AnimatedSection>
          <SectionHeader
            label="Selected Work"
            heading="Real Projects Built for"
            headingAccent="Real Startups"
            description="A glimpse of what we can build together."
          />
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group flex flex-col overflow-hidden rounded-3xl glass-card h-full"
                >
                  <div className="relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-white/5 via-black/50 to-white/5">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-white/5 to-white/10 text-white ring-1 ring-white/10 transition-all duration-300 group-hover:from-indigo-500/30 group-hover:to-cyan-500/30 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/5">
                      <project.icon className="h-10 w-10" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <Pill className="self-start">{project.category}</Pill>
                    <h3 className="mt-4 text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-base leading-7 text-zinc-400">
                      {project.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-zinc-300">
                      Read case study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
