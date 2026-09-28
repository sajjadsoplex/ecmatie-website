import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-[28px]
        border
        border-white/70
        bg-white/70
        shadow-[0_15px_50px_rgba(7,27,58,0.06)]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_25px_70px_rgba(7,27,58,0.10)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}