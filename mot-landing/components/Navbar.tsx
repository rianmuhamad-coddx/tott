"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/ai-development", label: "AI Development" },
      { href: "/services/web-development", label: "Web Development" },
    ],
  },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeAnchor = (anchor: string) => {
    if (isHome) return anchor;
    return `/${anchor}`;
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 glass-strong"
          : "border-white/10 bg-black/30 backdrop-blur-md"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br bg-white text-black text-white shadow-lg shadow-white/10">
            M
          </span>
          MOT
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-white/10 bg-black/90 py-2 shadow-xl backdrop-blur-xl"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            )
          )}
          {isHome && (
            <>
              <Link
                href={handleHomeAnchor("#process")}
                className="text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-white"
              >
                Process
              </Link>
              <Link
                href={handleHomeAnchor("#testimonials")}
                className="text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-white"
              >
                Testimonials
              </Link>
            </>
          )}
        </nav>

        <div className="hidden items-center md:flex">
          <Button variant="primary" href="/contact" className="h-10 px-5 text-sm">
            Book a Call
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-zinc-300 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {isOpen && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
          <Container>
            <div className="space-y-1 py-4">
                {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <p className="px-3 py-2 text-sm font-semibold text-white">
                      {link.label}
                    </p>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-6 py-2 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-zinc-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              {isHome && (
                <>
                  <Link
                    href={handleHomeAnchor("#process")}
                    className="block rounded-md px-3 py-2 text-base font-medium text-zinc-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Process
                  </Link>
                  <Link
                    href={handleHomeAnchor("#testimonials")}
                    className="block rounded-md px-3 py-2 text-base font-medium text-zinc-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Testimonials
                  </Link>
                </>
              )}
              <Button
                variant="primary"
                href="/contact"
                className="mt-4 h-10 w-full px-5 text-sm"
              >
                Book a Call
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
