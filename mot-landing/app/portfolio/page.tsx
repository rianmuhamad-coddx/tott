import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/app/sections/Footer";
import { PortfolioGrid } from "./PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio — MOT",
  description:
    "See selected projects built by MOT for startups. Agentic AI systems, AI-integrated websites, and more.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioGrid />
      </main>
      <Footer />
    </>
  );
}
