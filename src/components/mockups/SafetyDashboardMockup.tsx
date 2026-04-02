import React from "react";
import { Shield, TrendingDown, AlertTriangle, ChevronRight, BarChart3 } from "lucide-react";

const SafetyDashboardMockup: React.FC = () => {
  return (
    <div className="h-full bg-background flex flex-col text-foreground">
      {/* Header */}
      <div className="px-4 pt-2 pb-3 border-b border-border">
        <h1 className="text-sm font-semibold">Safety Dashboard</h1>
        <p className="text-[9px] text-muted-foreground">Downtown · Live</p>
      </div>

      <div className="flex-1 overflow-auto px-4 pt-3 pb-2">
        {/* Safety Score */}
        <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 mb-3 text-center">
          <p className="text-[9px] font-semibold text-accent uppercase tracking-wider mb-1">Zone Safety Score</p>
          <div className="flex items-center justify-center gap-2">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-3xl font-bold text-foreground">92</span>
            <span className="text-sm text-muted-foreground">/100</span>
          </div>
          <div className="flex items-center justify-center gap-1 mt-1">
            <TrendingDown className="w-3 h-3 text-accent" />
            <span className="text-[9px] text-accent font-medium">↓ 2 incidents vs last week</span>
          </div>
        </div>

        {/* Mini chart */}
        <div className="mb-3">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Weekly Trend</p>
          <div className="p-3 rounded-xl bg-card border border-border">
            <div className="flex items-end gap-1.5 h-[50px]">
              {[60, 45, 70, 35, 50, 25, 20].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className={`w-full rounded-sm ${i === 6 ? "bg-accent" : "bg-primary/30"}`}
                    style={{ height: `${h}%` }}
                  />
                  <span className="text-[7px] text-muted-foreground">
                    {["M", "T", "W", "T", "F", "S", "S"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { value: "3", label: "Open Cases", color: "text-destructive" },
            { value: "12", label: "Resolved", color: "text-accent" },
            { value: "4.2h", label: "Avg Response", color: "text-primary" },
          ].map((s) => (
            <div key={s.label} className="p-2.5 rounded-xl bg-card border border-border text-center">
              <p className={`text-lg font-bold ${s.color}`}>{s.value}</p>
              <p className="text-[8px] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Recent incidents */}
        <div>
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Recent Reports</p>
          {[
            { type: "Near-miss", time: "2h ago", status: "Under Review", statusColor: "text-yellow-500 bg-yellow-500/10" },
            { type: "Noise complaint", time: "5h ago", status: "Resolved", statusColor: "text-accent bg-accent/10" },
            { type: "Sidewalk blockage", time: "1d ago", status: "Resolved", statusColor: "text-accent bg-accent/10" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-card border border-border mb-2">
              <AlertTriangle className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold truncate">{item.type}</p>
                <p className="text-[8px] text-muted-foreground">{item.time}</p>
              </div>
              <span className={`text-[8px] font-medium px-2 py-0.5 rounded-full ${item.statusColor}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="border-t border-border px-6 py-2 flex items-center justify-between">
        {[
          { icon: BarChart3, label: "Map", active: false },
          { icon: BarChart3, label: "Deliveries", active: false },
          { icon: Shield, label: "Safety", active: true },
          { icon: BarChart3, label: "Alerts", active: false },
        ].map((tab) => (
          <div key={tab.label} className="flex flex-col items-center gap-0.5">
            <tab.icon className={`w-4 h-4 ${tab.active ? "text-primary" : "text-muted-foreground"}`} />
            <span className={`text-[8px] ${tab.active ? "text-primary font-semibold" : "text-muted-foreground"}`}>{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafetyDashboardMockup;
