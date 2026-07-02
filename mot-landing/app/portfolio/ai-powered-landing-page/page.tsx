import type { Metadata } from "next";
import { CaseStudyLayout } from "../CaseStudyLayout";

export const metadata: Metadata = {
  title: "Case Study: AI-Powered Landing Page — MOT",
  description:
    "How MOT built a conversion-focused landing page with an embedded AI agent that qualifies leads instantly.",
};

const highlights = [
  "High-converting landing page design",
  "Lead capture forms processed by AI in real time",
  "Automatic lead scoring and prioritization",
  "Direct handoff to sales team for hot leads",
];

const technologies = [
  "Next.js",
  "Tailwind CSS",
  "OpenAI GPT",
  "Formspree",
  "CRM Webhooks",
];

export default function AIPoweredLandingPageCaseStudy() {
  return (
    <CaseStudyLayout
      title="AI-Powered Landing"
      accentWord="Page"
      category="Web + AI"
      description="A startup product landing page where every lead capture form is instantly processed by an AI qualification agent — enabling faster follow-ups and higher conversion rates."
      challenge="The startup was driving traffic to their landing page but struggling to qualify and respond to leads quickly. Form submissions piled up, and hot leads often went cold before anyone followed up."
      highlights={highlights}
      technologies={technologies}
      results="Lead response time dropped to under a minute. The sales team now receives pre-qualified leads with context, allowing them to focus on prospects most likely to convert."
      gradientFrom="from-cyan-950/80"
      gradientTo="to-slate-900/80"
      icon="globe"
      prev={{ slug: "customer-support-agent", title: "Customer Support Agent" }}
      next={{ slug: "startup-company-profile", title: "Startup Company Profile" }}
    />
  );
}
