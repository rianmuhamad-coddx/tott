import type { Metadata } from "next";
import { CaseStudyLayout } from "../CaseStudyLayout";

export const metadata: Metadata = {
  title: "Case Study: Customer Support Agent — MOT",
  description:
    "How MOT built an agentic AI customer support system that checks orders, triages issues, and escalates to humans when needed.",
};

const highlights = [
  "Checks order status across internal systems automatically",
  "Assesses issue complexity and decides resolution path",
  "Escalates to human agents only when necessary",
  "Reduces first-response time from hours to seconds",
];

const technologies = [
  "OpenAI GPT",
  "LangChain",
  "REST APIs",
  "Webhook Integrations",
];

export default function CustomerSupportAgentCaseStudy() {
  return (
    <CaseStudyLayout
      title="Customer Support"
      accentWord="Agent"
      category="Agentic AI"
      description="An autonomous AI agent that handles customer inquiries end-to-end — checking order status, resolving common issues, and escalating only when a human is truly needed."
      challenge="The startup's support team was overwhelmed with repetitive order-status questions. Most tickets were simple lookups, but agents had to handle each one manually — slowing response times and increasing cost."
      highlights={highlights}
      technologies={technologies}
      results="The agent now handles over 60% of inbound support requests without human intervention. Response times dropped from hours to seconds, and the support team can focus on complex, high-value conversations."
      gradientFrom="from-indigo-950/80"
      gradientTo="to-slate-900/80"
      icon="message-square"
      next={{ slug: "ai-powered-landing-page", title: "AI-Powered Landing Page" }}
    />
  );
}
