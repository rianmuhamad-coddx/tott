"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowOrbProps {
  color?: "indigo" | "cyan" | "violet";
  size?: number;
  className?: string;
  animate?: boolean;
}

export function GlowOrb({
  color = "indigo",
  size = 500,
  className,
  animate = true,
}: GlowOrbProps) {
  const colors = {
    indigo: "bg-white/5",
    cyan: "bg-white/5",
    violet: "bg-white/5",
  };

  return (
    <motion.div
      initial={animate ? { scale: 0.95, opacity: 0.8 } : false}
      animate={animate ? { scale: [0.95, 1.05, 0.95], opacity: [0.6, 0.8, 0.6] } : false}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className={cn("pointer-events-none absolute -z-10 rounded-full blur-3xl", colors[color], className)}
      style={{ width: size, height: size }}
    />
  );
}
