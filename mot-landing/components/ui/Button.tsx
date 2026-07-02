import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className,
  icon,
}: ButtonProps) {
  const base =
    "inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 text-base font-semibold transition-all";
  const variants = {
    primary:
      "bg-white text-black shadow-lg shadow-white/10 hover:bg-zinc-200 hover:scale-[1.02]",
    secondary:
      "border border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/10",
    ghost: "text-white hover:text-zinc-300",
  };

  const content = (
    <>
      {children}
      {icon}
    </>
  );

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
