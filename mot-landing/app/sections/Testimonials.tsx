"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
    <section className="relative py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionHeader
            label="What Founders Say"
            heading="Trusted by Founders Who"
            headingAccent="Move Fast"
          />
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <StaggerItem key={item.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="glass-card relative flex h-full flex-col rounded-3xl p-8"
              >
                <Quote className="h-10 w-10 text-indigo-400/40" strokeWidth={1.5} />

                <p className="mt-6 flex-1 text-lg leading-relaxed text-slate-300">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-4 border-t border-slate-700/30 pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br bg-white text-black text-base font-bold text-white">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.name}
                    </p>
                    <p className="text-xs text-zinc-400">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
