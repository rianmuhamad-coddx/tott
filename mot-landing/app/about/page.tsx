import type { Metadata } from "next";
import { ArrowRight, Target, Rocket, Zap, Eye, Handshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/app/sections/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { GlowOrb } from "@/components/ui/GlowOrb";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About — MOT",
  description:
    "MOT is a hands-on agency that builds agentic AI and websites for early-stage startups. Quality over quantity, partner over vendor.",
};

const values = [
  {
    icon: Target,
    title: "Results first, tools second",
    desc: "We focus on the outcome your startup needs, not on forcing a specific technology stack.",
  },
  {
    icon: Rocket,
    title: "Startup-ready",
    desc: "Our pace, scope, and pricing are shaped around the realities of early-stage companies.",
  },
  {
    icon: Zap,
    title: "Move fast, build right",
    desc: "Speed matters, but never at the cost of a foundation that can scale as you grow.",
  },
  {
    icon: Eye,
    title: "Transparent by design",
    desc: "You always know what we are building, why we made a decision, and where the project stands.",
  },
  {
    icon: Handshake,
    title: "Long-term minded",
    desc: "Every solution is built with the assumption that your startup will evolve and expand.",
  },
];

const team = [
  {
    name: "Rian",
    role: "Founder & Tech Lead",
    bio: "Building agentic AI and web products for early-stage startups.",
  },
  {
    name: "TBD",
    role: "AI Engineer",
    bio: "Placeholder for future team member.",
  },
  {
    name: "TBD",
    role: "Full-Stack Developer",
    bio: "Placeholder for future team member.",
  },
];

const stats = [
  { value: "12+", label: "Projects shipped" },
  { value: "3", label: "Weeks avg delivery" },
  { value: "95%", label: "Client retention" },
  { value: "100%", label: "Startup focus" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:px-8">
          <GlowOrb
            color="indigo"
            size={600}
            className="left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
          />
          <Container>
            <AnimatedSection className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-white">
                About MOT
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                We Build the{" "}
                <span className="gradient-text">Intelligence</span> Behind Your
                Startup
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                MOT (Mind of Things) is a technology agency specializing in
                agentic AI and web development for startups. We are not a
                platform. We are a small, hands-on team that works directly with
                founders from idea to launch.
              </p>
            </AnimatedSection>
          </Container>
        </section>

        <section className="relative px-4 py-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <AnimatedSection>
                <SectionHeader
                  label="Our Story"
                  heading="Why We"
                  headingAccent="Exist"
                  align="left"
                  className="max-w-none text-left"
                />
                <div className="mt-8 space-y-4 text-lg leading-8 text-zinc-400">
                  <p>
                    Too many great startup ideas stall because the founder lacks
                    the time, team, or budget to build the technology behind it.
                  </p>
                  <p>
                    MOT exists to close that gap. We handle the complex work —
                    agentic AI systems that think and act, and websites that
                    convert — so founders can focus on business, customers, and
                    growth.
                  </p>
                  <p>
                    As a small agency, we choose projects carefully. We prefer
                    quality partnerships over volume, and long-term collaboration
                    over one-off delivery.
                  </p>
                </div>
              </AnimatedSection>

              <StaggerContainer className="grid gap-6 sm:grid-cols-2">
                {values.map((value) => (
                  <StaggerItem key={value.title}>
                    <div className="glass-card rounded-2xl p-6 h-full">
                      <value.icon className="h-8 w-8 text-white" />
                      <h3 className="mt-4 text-lg font-semibold text-white">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                        {value.desc}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </Container>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <Container>
            <AnimatedSection className="mx-auto max-w-3xl text-center">
              <SectionHeader
                label="By the Numbers"
                heading="Small Team,"
                headingAccent="Real Momentum"
              />
            </AnimatedSection>
            <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="glass-card rounded-2xl p-6 text-center">
                    <p className="font-mono text-4xl font-bold tracking-tight text-white">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-medium text-zinc-400">
                      {stat.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        <section className="relative px-4 py-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
          <Container>
            <AnimatedSection className="mx-auto max-w-3xl text-center">
              <SectionHeader
                label="The People"
                heading="Meet the"
                headingAccent="Team"
                description="Small team, big impact. We keep things lean so we can move fast."
              />
            </AnimatedSection>

            <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <StaggerItem key={member.name}>
                  <div className="glass-card rounded-3xl p-8 text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br bg-white text-black text-2xl font-bold text-white shadow-lg shadow-white/10">
                      {member.name[0]}
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-white">
                      {member.role}
                    </p>
                    <p className="mt-4 text-sm text-zinc-400">{member.bio}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-zinc-950 via-black to-zinc-950" />
          <GlowOrb
            color="cyan"
            size={500}
            className="right-0 top-1/2 -translate-y-1/2 translate-x-1/3"
          />
          <Container>
            <AnimatedSection className="mx-auto max-w-4xl text-center">
              <SectionHeader
                heading="Ready to Build Something"
                headingAccent="Together?"
                description="Have a project in mind? We would love to hear about it."
              />
              <div className="mt-10 flex justify-center">
                <Button href="/contact" icon={<ArrowRight className="h-5 w-5" />}>
                  Start a Conversation
                </Button>
              </div>
            </AnimatedSection>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
