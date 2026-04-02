import React from "react";

interface PhoneFrameProps {
  children: React.ReactNode;
  label?: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, label }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-[280px] h-[580px] rounded-[2.5rem] border-[6px] border-foreground/15 bg-card shadow-elevated overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-foreground/15 rounded-b-2xl z-10" />
        {/* Status bar */}
        <div className="h-[44px] flex items-end justify-between px-6 pb-1 text-[10px] font-medium text-foreground/60">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-2.5 border border-foreground/40 rounded-sm relative">
              <div className="absolute inset-[1px] right-[2px] bg-accent rounded-[1px]" />
            </div>
          </div>
        </div>
        {/* Screen content */}
        <div className="h-[calc(100%-44px)] overflow-hidden">
          {children}
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-foreground/20 rounded-full" />
      </div>
      {label && (
        <p className="text-sm font-medium text-muted-foreground text-center max-w-[260px]">{label}</p>
      )}
    </div>
  );
};

export default PhoneFrame;
