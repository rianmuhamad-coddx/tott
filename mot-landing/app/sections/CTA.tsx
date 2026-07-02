"use client";

import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-zinc-950 via-black to-zinc-950" />

      <GlowOrb
        color="indigo"
        size={480}
        className="left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <GlowOrb
        color="cyan"
        size={420}
        className="bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3"
      />

      <Container>
        <div className="glass-strong rounded-3xl px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <SectionHeader
              heading="Ready to"
              headingAccent="ship faster?"
              description="Book a free 30-minute strategy call. We&apos;ll map out what to build first — whether it&apos;s an AI agent, a website, or both."
            />

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" icon={<ArrowRight className="h-5 w-5" />}>
                Book a Free Call
              </Button>
              <Button
                href="mailto:hello@mot.id?subject=Project%20Inquiry"
                variant="secondary"
                icon={<Mail className="h-5 w-5" />}
              >
                Send an Inquiry
              </Button>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              Prefer email? Reach us at{" "}
              <a
                href="mailto:hello@mot.id"
                className="font-semibold text-white hover:text-zinc-300"
              >
                hello@mot.id
              </a>
            </p>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
