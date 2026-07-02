"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Pill } from "@/components/ui/Pill";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const values = [
  "Results first",
  "Startup-ready",
  "Move fast, build right",
  "Transparent",
  "Long-term minded",
];

const stats = [
  { value: "12+", label: "Projects shipped" },
  { value: "3", label: "Weeks avg delivery" },
  { value: "95%", label: "Client retention" },
  { value: "100%", label: "Startup focus" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <SectionHeader
              label="Why MOT"
              heading="Built for Startups,"
              headingAccent="Not Enterprises"
              align="left"
              className="max-w-none text-left"
            />
            <div className="mt-8 space-y-4 text-lg leading-8 text-zinc-400">
              <p>
                MOT is a small, hands-on agency. We don&apos;t chase volume — we
                partner with founders who need real tech built fast. From AI
                agents that think and act on their own, to websites that convert
                visitors into customers.
              </p>
              <p>
                We believe early-stage startups deserve the same caliber of
                technology that big companies build — without the bureaucracy,
                delays, or bloated teams.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {values.map((value) => (
                <Pill key={value}>{value}</Pill>
              ))}
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card rounded-2xl p-6 h-full"
                >
                  <p className="font-mono text-4xl font-bold tracking-tight text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-zinc-400">
                    {stat.label}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
