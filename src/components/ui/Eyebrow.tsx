import { ReactNode } from "react";

const GREEN = "#39FFA0";

interface EyebrowProps {
  children: ReactNode;
}

export default function Eyebrow({ children }: EyebrowProps) {
  return (
    <p
      className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
      style={{ color: GREEN }}
    >
      {children}
    </p>
  );
}