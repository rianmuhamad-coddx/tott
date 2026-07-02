import type { Metadata } from "next";
import { CaseStudyLayout } from "../CaseStudyLayout";

export const metadata: Metadata = {
  title: "Case Study: Startup Company Profile — MOT",
  description:
    "How MOT built a company profile website with an embedded agentic live chat for investors and potential users.",
};

const highlights = [
  "Clean, professional company profile design",
  "Agentic live chat embedded across key pages",
  "Answers investor and user questions in real time",
  "Captures and qualifies visitor intent automatically",
];

const technologies = [
  "Next.js",
  "Tailwind CSS",
  "OpenAI GPT",
  "Vector DB",
  "WhatsApp API",
];

export default function StartupCompanyProfileCaseStudy() {
  return (
    <CaseStudyLayout
      title="Startup Company"
      accentWord="Profile"
      category="Web + AI"
      description="A company profile website for an early-stage startup, complete with an agentic live chat that answers questions from investors, partners, and potential users 24/7."
      challenge="The startup needed a credible digital presence to attract investors and early users. At the same time, the small team couldn't respond to every inquiry manually around the clock."
      highlights={highlights}
      technologies={technologies}
      results="The website became the startup's primary trust-building asset. The embedded agent handled the majority of visitor questions, freeing the team to focus on product and investor meetings."
      gradientFrom="from-violet-950/80"
      gradientTo="to-slate-900/80"
      icon="bot"
      prev={{ slug: "ai-powered-landing-page", title: "AI-Powered Landing Page" }}
    />
  );
}
