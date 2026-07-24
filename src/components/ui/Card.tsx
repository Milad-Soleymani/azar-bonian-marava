import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-white/20 ${className}`}
    >
      {children}
    </div>
  );
}