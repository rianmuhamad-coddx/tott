import Navbar from "@/components/Navbar";
import Hero from "./sections/Hero";
import TrustLogos from "./sections/TrustLogos";
import About from "./sections/About";
import Services from "./sections/Services";
import Process from "./sections/Process";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustLogos />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <FaqSection />
      <Footer />
    </>
  );
}
