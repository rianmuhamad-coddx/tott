import type { Metadata } from "next";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Calendar,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/app/sections/Footer";
import ContactForm from "@/components/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact — MOT",
  description:
    "Get in touch with MOT. Book a free strategy call or send us an inquiry about your AI or web project.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@mot.id",
    href: "mailto:hello@mot.id",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 812-3456-7890",
    href: "tel:+6281234567890",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote-first, based in Indonesia",
    href: null,
  },
];

const faqs = [
  {
    question: "What information should I include in my inquiry?",
    answer:
      "Share a short description of your product, the problem you are solving, and what you need help with — AI agent, website, or both. Links, timelines, and budget ranges are also helpful.",
  },
  {
    question: "How quickly do you respond?",
    answer:
      "We reply to most inquiries within one business day. For urgent requests, feel free to call or message us directly.",
  },
  {
    question: "Do you work with companies that are not startups?",
    answer:
      "Our process and pricing are optimized for early-stage startups, but we are open to speaking with any team building something ambitious.",
  },
  {
    question: "What happens during the free strategy call?",
    answer:
      "We map your goals, identify the best starting point, outline a lean approach, and give you a rough estimate — no pitch deck required.",
  },
];

export default function ContactPage() {
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
          <GlowOrb
            color="cyan"
            size={400}
            className="right-0 top-1/3 translate-x-1/3"
          />
          <Container>
            <AnimatedSection className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-white">
                Contact
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s Build{" "}
                <span className="gradient-text">Together</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Book a free 30-minute strategy call or send us an inquiry. We
                typically respond within 24 hours.
              </p>
            </AnimatedSection>
          </Container>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <Container>
            <div className="grid gap-12 lg:grid-cols-5">
              <AnimatedSection className="lg:col-span-2">
                <div className="glass-card rounded-3xl p-8">
                  <h2 className="text-2xl font-bold text-white">
                    Get in Touch
                  </h2>
                  <p className="mt-4 text-zinc-400">
                    Prefer to reach out directly? Use the contact info below.
                  </p>
                  <div className="mt-8 space-y-6">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white/5 to-white/10 text-white ring-1 ring-white/10">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-zinc-400 transition-colors hover:text-white"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-zinc-400">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white/5 to-white/10 text-white ring-1 ring-white/10">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Response Time
                        </p>
                        <p className="text-zinc-400">
                          Usually within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 rounded-2xl bg-gradient-to-br from-zinc-950/80 to-black/80 p-6 text-white ring-1 ring-white/10 backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-white" />
                      <h3 className="text-lg font-bold">Free Strategy Call</h3>
                    </div>
                    <p className="mt-2 text-sm text-zinc-400">
                      30 minutes to map your project, identify the best starting
                      point, and get a rough estimate.
                    </p>
                    <div className="mt-5">
                      <Button
                        href="mailto:hello@mot.id?subject=Book%20a%20Free%20Strategy%20Call"
                        variant="secondary"
                        className="w-full text-sm"
                        icon={<ArrowRight className="h-4 w-4" />}
                      >
                        Book a Call
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="lg:col-span-3">
                <div className="glass-card rounded-3xl p-8 sm:p-12">
                  <div className="flex items-center gap-3">
                    <Pill>Form</Pill>
                    <span className="text-sm text-zinc-500">
                      All fields required unless marked optional
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-white">
                    Send an Inquiry
                  </h2>
                  <p className="mt-4 text-zinc-400">
                    Tell us about your project. The more details, the better we
                    can help.
                  </p>
                  <div className="mt-8">
                    <ContactForm />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        <section className="relative px-4 py-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
          <Container>
            <AnimatedSection className="mx-auto max-w-3xl">
              <SectionHeader
                label="FAQ"
                heading="Quick"
                headingAccent="Answers"
                description="A few common questions before you reach out."
              />
              <div className="mt-12 space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group glass-card rounded-2xl"
                  >
                    <summary className="flex cursor-pointer items-center justify-between p-6 text-white marker:hidden list-none">
                      <span className="text-base font-semibold">
                        {faq.question}
                      </span>
                      <ChevronDown className="h-5 w-5 flex-shrink-0 text-zinc-500 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-6 pb-6 text-zinc-400">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </AnimatedSection>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
