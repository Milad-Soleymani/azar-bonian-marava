import { ElementType } from "react";

const GREEN = "#39FFA0";

interface IconBadgeProps {
  icon: ElementType;
}

export default function IconBadge({ icon: Icon }: IconBadgeProps) {
  return (
    <div
      className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border"
      style={{
        borderColor: `${GREEN}40`,
        backgroundColor: `${GREEN}14`,
      }}
    >
      <Icon className="h-5 w-5" style={{ color: GREEN }} />
    </div>
  );
}