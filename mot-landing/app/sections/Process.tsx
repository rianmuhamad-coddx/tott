"use client";

import { motion } from "framer-motion";
import { Search, Map, Code2, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description:
      "We start by understanding your business, users, and goals. The best solutions come from asking the right questions first.",
  },
  {
    icon: Map,
    step: "02",
    title: "Plan",
    description:
      "We define the scope, architecture, and delivery milestones. No surprises — you know exactly what we're building and when.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Build",
    description:
      "We ship fast, review weekly, and adjust quickly. Your feedback shapes the product at every step.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Ship & Scale",
    description:
      "We deploy, monitor, and stick around. As your startup grows, your product grows with it.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionHeader
            label="How We Work"
            heading="From First Call to Shipped Product in"
            headingAccent="Weeks"
            description="No bloated process. Just a clear path from idea to reality."
          />
        </AnimatedSection>

        <StaggerContainer className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent lg:block" />

          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="glass-card w-full rounded-2xl p-6"
                  >
                    <div className="flex flex-col items-center">
                      <span className="font-mono text-sm font-semibold uppercase tracking-wide text-white">
                        Step {item.step}
                      </span>
                      <div className="relative mt-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br bg-white text-black text-white shadow-lg shadow-white/10">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </Container>
    </section>
  );
}
