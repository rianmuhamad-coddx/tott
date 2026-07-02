"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const serviceLinks = [
  { href: "/services/ai-development", label: "AI Development" },
  { href: "/services/web-development", label: "Web Development" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const contactInfo = [
  { label: "Email", value: "hello@mot.id", href: "mailto:hello@mot.id" },
  { label: "Phone", value: "+62 812 3456 7890", href: "tel:+6281234567890" },
  { label: "Location", value: "Jakarta, Indonesia", href: null },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-slate-800/50 bg-slate-950/90 py-16 backdrop-blur-xl"
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br bg-white text-black text-white shadow-lg shadow-white/10">
                M
              </span>
              MOT
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              Premium AI agents and web experiences for early-stage startups
              that need to move fast.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              {contactInfo.map((item) => (
                <li key={item.label} className="text-sm">
                  <span className="block text-zinc-500">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-slate-300 transition-colors hover:text-white"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-slate-300">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800/50 pt-8 text-center">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} MOT. All rights reserved.
          </p>
        </div>
      </Container>
    </motion.footer>
  );
}
