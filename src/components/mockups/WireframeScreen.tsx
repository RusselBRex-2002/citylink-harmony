import React from "react";

interface WireframeScreenProps {
  title: string;
  children: React.ReactNode;
}

const WireframeScreen: React.FC<WireframeScreenProps> = ({ title, children }) => (
  <div className="h-full bg-secondary/50 flex flex-col">
    {/* Wireframe header */}
    <div className="px-4 pt-2 pb-2 border-b border-foreground/10">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded bg-foreground/15" />
        <div className="text-[11px] font-medium text-foreground/60">{title}</div>
      </div>
    </div>
    <div className="flex-1 px-4 py-3 space-y-3">
      {children}
    </div>
  </div>
);

export const WireframeBlock: React.FC<{ height?: string; label?: string; variant?: "filled" | "outlined" }> = ({
  height = "h-8",
  label,
  variant = "filled",
}) => (
  <div className={`${height} rounded-lg ${variant === "filled" ? "bg-foreground/8" : "border-2 border-dashed border-foreground/15"} flex items-center justify-center`}>
    {label && <span className="text-[8px] text-foreground/30 font-medium">{label}</span>}
  </div>
);

export const WireframeRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex gap-2">{children}</div>
);

export default WireframeScreen;
