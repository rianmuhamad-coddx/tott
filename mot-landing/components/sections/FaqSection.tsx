"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Script from "next/script";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { generateFaqJsonLd } from "@/lib/structured-data";

interface FAQItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqData?: FAQItem[];
  className?: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "What does MOT stand for?",
    answer:
      "MOT stands for 'Move On Time' — a reflection of our philosophy: ship fast, ship right. We are a boutique agency that builds agentic AI systems and high-converting websites for early-stage startups.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects are delivered within 3 weeks. We keep our scope tight and our team focused on what matters most: getting your product into users' hands. If the scope is larger, we break it into phases so you can launch incrementally.",
  },
  {
    question: "Do you work with early-stage startups only?",
    answer:
      "Yes — we specialise in early-stage startups that need to move fast without a large engineering team. Our process, pricing, and communication style are built for founders. We don't do enterprise-style RFPs or long contracts.",
  },
  {
    question: "What kind of AI projects do you build?",
    answer:
      "We build agentic AI systems — autonomous agents that can reason, plan, and execute tasks. Think: AI customer support agents, AI content pipelines, AI research assistants, and AI-powered internal tools for startups. We focus on practical, deployable agents, not just demos.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free 30-minute strategy call via the link above. We'll discuss your current situation, what you need, and whether we're a good fit. If it makes sense, we'll scope out a first phase and start within a week.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We build with modern, battle-tested tools: Next.js 16, Tailwind CSS 4, TypeScript, Framer Motion, and Node.js for the frontend; Python, LangGraph, and CrewAI for AI agents. We also integrate with Vercel, Supabase, OpenAI, and Anthropic APIs. We pick the stack that matches your startup's needs — not our preferences.",
  },
  {
    question: "Can I see examples of your work?",
    answer:
      "Absolutely. Check out our portfolio section for live projects and case studies. We also publish open-source work on GitHub — you can see our actual code quality before committing to anything.",
  },
];

export default function FaqSection({ faqData, className }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionId = useId();

  const faqs = faqData ?? defaultFaqs;
  const faqJsonLd = generateFaqJsonLd(faqs);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className={cn("py-24 sm:py-32", className)}
      aria-labelledby={`${sectionId}-title`}
    >
      {/* JSON-LD FAQPage Schema */}
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Container>
        <div id={`${sectionId}-title`}>
          <SectionHeader
            heading="Frequently Asked Questions"
          description="Everything you need to know before getting started"
          />
        </div>

        <div className="mt-16 mx-auto max-w-4xl">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {faqs.map((faq, index) => (
              <div
                key={`${sectionId}-faq-${index}`}
                className={cn(
                  "glass-card rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm",
                  "transition-all duration-300 hover:border-white/[0.12]",
                  openIndex === index && "border-white/[0.12]",
                  // Single column on last item if odd count
                  index === faqs.length - 1 &&
                    faqs.length % 2 !== 0 &&
                    "md:col-span-2"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className={cn(
                    "flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
                    "transition-colors duration-200"
                  )}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-300",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0">
                        <p className="text-sm leading-relaxed text-zinc-400">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}