"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Bot, CheckCircle, Globe, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/app/sections/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

interface NavLink {
  slug: string;
  title: string;
}

type IconName = "message-square" | "globe" | "bot";

const iconMap = {
  "message-square": MessageSquare,
  globe: Globe,
  bot: Bot,
};

interface CaseStudyLayoutProps {
  title: string;
  accentWord: string;
  category: string;
  description: string;
  challenge: string;
  highlights: string[];
  technologies: string[];
  results: string;
  gradientFrom: string;
  gradientTo: string;
  icon: IconName;
  prev?: NavLink;
  next?: NavLink;
}

export function CaseStudyLayout({
  title,
  accentWord,
  category,
  description,
  challenge,
  highlights,
  technologies,
  results,
  gradientFrom,
  gradientTo,
  icon,
  prev,
  next,
}: CaseStudyLayoutProps) {
  const Icon = iconMap[icon];
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden pb-24 pt-36">
          <GlowOrb
            color="indigo"
            size={600}
            className="left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
          />
          <Container>
            <div className="mx-auto max-w-4xl">
              <AnimatedSection>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-zinc-300"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Portfolio
                </Link>
                <Pill className="mt-8 text-white">{category}</Pill>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  {title}{" "}
                  <span className="gradient-text">{accentWord}</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-zinc-400">
                  {description}
                </p>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        <section className="py-24">
          <Container>
            <div className="mx-auto max-w-4xl">
              <AnimatedSection>
                <div
                  className={cn(
                    "rounded-3xl border border-slate-700/50 bg-gradient-to-br p-8 text-white shadow-2xl backdrop-blur-xl sm:p-12",
                    gradientFrom,
                    gradientTo
                  )}
                >
                  {Icon && <Icon className="h-12 w-12 text-white" />}
                  <h2 className="mt-6 text-2xl font-bold">The Challenge</h2>
                  <p className="mt-4 text-zinc-400">{challenge}</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="mt-12">
                <SectionHeader
                  heading="What We"
                  headingAccent="Built"
                  align="left"
                  className="max-w-none text-left"
                />
                <ul className="mt-6 space-y-4">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.3} className="mt-12">
                <h2 className="text-2xl font-bold text-white">Technologies</h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {technologies.map((tech) => (
                    <Pill key={tech} className="px-4 py-2 text-sm">
                      {tech}
                    </Pill>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4} className="mt-12">
                <h2 className="text-2xl font-bold text-white">Results</h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  {results}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.5} className="mt-12">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <Button
                    href="/contact"
                    icon={<ArrowRight className="h-5 w-5" />}
                  >
                    Build Something Similar
                  </Button>
                  <div className="flex flex-wrap gap-3">
                    {prev && (
                      <Button
                        href={`/portfolio/${prev.slug}`}
                        variant="secondary"
                      >
                        ← {prev.title}
                      </Button>
                    )}
                    {next && (
                      <Button
                        href={`/portfolio/${next.slug}`}
                        variant="secondary"
                      >
                        {next.title} →
                      </Button>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
