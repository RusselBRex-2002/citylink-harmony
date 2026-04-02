import React from "react";
import { ArrowLeft, Clock, CheckCircle, MessageSquare, Shield, AlertTriangle } from "lucide-react";

const CaseTrackingMockup: React.FC = () => {
  return (
    <div className="h-full bg-background flex flex-col text-foreground">
      {/* Header */}
      <div className="px-4 pt-2 pb-3 flex items-center gap-3 border-b border-border">
        <ArrowLeft className="w-4 h-4 text-foreground" />
        <div>
          <h1 className="text-sm font-semibold">Case #IR-4821</h1>
          <p className="text-[9px] text-muted-foreground">Near-miss collision · High priority</p>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-4 pt-4 pb-2">
        {/* Status banner */}
        <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 mb-4 flex items-center gap-2">
          <Clock className="w-4 h-4 text-yellow-500" />
          <div>
            <p className="text-[10px] font-semibold text-yellow-600">Awaiting Operator Response</p>
            <p className="text-[8px] text-muted-foreground">Deadline: 36h remaining</p>
          </div>
        </div>

        {/* Timeline */}
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">Case Timeline</p>
        <div className="relative pl-5 mb-4">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-1 bottom-1 w-px bg-border" />

          {[
            { icon: AlertTriangle, color: "bg-destructive", title: "Report Submitted", time: "Today, 9:41 AM", desc: "Near-miss at Main St & 5th Ave" },
            { icon: CheckCircle, color: "bg-accent", title: "Auto-Verified", time: "Today, 9:42 AM", desc: "Location confirmed via GPS" },
            { icon: MessageSquare, color: "bg-primary", title: "Operator Notified", time: "Today, 9:45 AM", desc: "SkyDrop Inc. received case" },
            { icon: Clock, color: "bg-yellow-500", title: "Response Pending", time: "Due Apr 4", desc: "Operator must respond" },
          ].map((item, i) => (
            <div key={i} className="relative mb-4 last:mb-0">
              <div className={`absolute -left-5 top-0.5 w-3.5 h-3.5 rounded-full ${item.color} flex items-center justify-center`}>
                <item.icon className="w-2 h-2 text-primary-foreground" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-foreground">{item.title}</p>
                <p className="text-[8px] text-muted-foreground mb-0.5">{item.time}</p>
                <p className="text-[9px] text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Operator info */}
        <div className="p-3 rounded-xl bg-card border border-border mb-4">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Operator</p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-[10px] font-bold text-primary">SD</span>
            </div>
            <div>
              <p className="text-[11px] font-semibold">SkyDrop Inc.</p>
              <p className="text-[8px] text-muted-foreground">License #DRN-2847 · 94% compliance</p>
            </div>
          </div>
        </div>

        {/* Accountability */}
        <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
          <div className="flex items-start gap-2">
            <Shield className="w-3.5 h-3.5 text-primary mt-0.5" />
            <div>
              <p className="text-[9px] font-semibold text-primary">Your Rights</p>
              <p className="text-[8px] text-muted-foreground leading-relaxed">
                If the operator doesn't respond within 48h, this case auto-escalates to the City Transportation Authority.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action button */}
      <div className="px-4 pb-4 pt-2">
        <div className="w-full py-3 rounded-xl bg-card border border-border flex items-center justify-center">
          <span className="text-[11px] font-semibold text-foreground">Add Additional Evidence</span>
        </div>
      </div>
    </div>
  );
};

export default CaseTrackingMockup;
