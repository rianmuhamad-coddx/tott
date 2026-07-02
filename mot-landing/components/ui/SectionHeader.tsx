import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  heading: string;
  headingAccent?: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  heading,
  headingAccent,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {label && (
        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
          {label}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {heading}{" "}
        {headingAccent && <span className="text-white">{headingAccent}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-zinc-400">{description}</p>
      )}
    </div>
  );
}
