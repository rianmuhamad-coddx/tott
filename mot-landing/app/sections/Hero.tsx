"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlowOrb } from "@/components/ui/GlowOrb";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 lg:pb-32 lg:pt-44">
      <GlowOrb color="indigo" size={700} className="left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" />
      <GlowOrb color="cyan" size={500} className="right-0 top-1/3 -translate-y-1/2" />
      <GlowOrb color="violet" size={400} className="bottom-0 left-0" />

      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/50 px-4 py-1.5 text-sm font-medium text-white shadow-lg backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4" />
          AI Agentic & Web Development Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          We Build the{" "}
          <span className="gradient-text">Intelligence</span> Behind Your
          Startup
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl"
        >
          MOT helps early-stage startups ship agentic AI systems and
          high-converting websites — without hiring a full tech team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button variant="primary" href="/contact" icon={<ArrowRight className="h-5 w-5" />}>
            Book a Free Strategy Call
          </Button>
          <Button variant="secondary" href="#portfolio">
            See Our Work
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-5 text-sm font-medium text-zinc-500"
        >
          Trusted by early-stage founders
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 text-left sm:grid-cols-3"
        >
          {[
            { label: "Ship in weeks", desc: "Iterative delivery, no long cycles" },
            { label: "Startup pricing", desc: "Built for early-stage budgets" },
            { label: "End-to-end team", desc: "AI + web in one partner" },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="glass-card cursor-default rounded-2xl p-5"
            >
              <p className="font-semibold text-white">{item.label}</p>
              <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
