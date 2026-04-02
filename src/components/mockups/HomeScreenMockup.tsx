import React from "react";
import { MapPin, Bell, Shield, AlertTriangle, ChevronRight, Navigation, Clock, Package } from "lucide-react";

const HomeScreenMockup: React.FC = () => {
  return (
    <div className="h-full bg-background flex flex-col text-foreground">
      {/* Header */}
      <div className="px-4 pt-2 pb-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-muted-foreground">Good morning</p>
            <p className="text-sm font-semibold">Sarah Chen</p>
          </div>
          <div className="relative">
            <Bell className="w-4 h-4 text-muted-foreground" />
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-destructive rounded-full" />
          </div>
        </div>
      </div>

      {/* Live Map Preview */}
      <div className="mx-4 h-[120px] rounded-xl bg-gradient-to-br from-primary/10 via-accent/5 to-secondary overflow-hidden relative mb-3">
        <div className="absolute inset-0 opacity-20">
          {/* Grid lines for map effect */}
          {[...Array(8)].map((_, i) => (
            <div key={`h-${i}`} className="absolute w-full h-px bg-foreground/10" style={{ top: `${(i + 1) * 12.5}%` }} />
          ))}
          {[...Array(6)].map((_, i) => (
            <div key={`v-${i}`} className="absolute h-full w-px bg-foreground/10" style={{ left: `${(i + 1) * 16.6}%` }} />
          ))}
        </div>
        {/* Drone icons */}
        <div className="absolute top-6 left-8 w-5 h-5 bg-accent rounded-full flex items-center justify-center shadow-sm">
          <Navigation className="w-2.5 h-2.5 text-accent-foreground" />
        </div>
        <div className="absolute top-14 right-12 w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-sm">
          <Navigation className="w-2.5 h-2.5 text-primary-foreground rotate-45" />
        </div>
        <div className="absolute bottom-6 left-1/2 w-5 h-5 bg-accent rounded-full flex items-center justify-center shadow-sm">
          <Navigation className="w-2.5 h-2.5 text-accent-foreground -rotate-30" />
        </div>
        {/* Map label */}
        <div className="absolute bottom-2 left-3 flex items-center gap-1 bg-card/90 backdrop-blur-sm rounded-md px-2 py-1">
          <MapPin className="w-2.5 h-2.5 text-primary" />
          <span className="text-[9px] font-medium">3 active nearby</span>
        </div>
      </div>

      {/* Safety Status */}
      <div className="mx-4 mb-3 p-3 rounded-xl bg-accent/10 border border-accent/20">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
            <Shield className="w-3 h-3 text-accent" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-semibold text-accent">All Clear</p>
            <p className="text-[8px] text-muted-foreground">No safety alerts in your area</p>
          </div>
          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
        </div>
      </div>

      {/* Active Delivery */}
      <div className="mx-4 mb-3">
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Active Delivery</p>
        <div className="p-3 rounded-xl bg-card border border-border shadow-card">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
              <Package className="w-3.5 h-3.5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-semibold">Order #AV-2847</p>
              <p className="text-[9px] text-muted-foreground">Drone • ETA 4 min</p>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
          {/* Progress */}
          <div className="flex items-center gap-1.5">
            <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
            <span className="text-[8px] font-medium text-muted-foreground">75%</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mx-4 mb-3">
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Quick Actions</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: AlertTriangle, label: "Report Issue", color: "text-destructive", bg: "bg-destructive/10" },
            { icon: Clock, label: "Delivery History", color: "text-primary", bg: "bg-primary/10" },
          ].map((action) => (
            <div key={action.label} className="flex items-center gap-2 p-2.5 rounded-xl bg-card border border-border">
              <div className={`w-6 h-6 rounded-lg ${action.bg} flex items-center justify-center`}>
                <action.icon className={`w-3 h-3 ${action.color}`} />
              </div>
              <span className="text-[10px] font-medium">{action.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="mt-auto border-t border-border px-6 py-2 flex items-center justify-between">
        {[
          { icon: MapPin, label: "Map", active: true },
          { icon: Package, label: "Deliveries", active: false },
          { icon: Shield, label: "Safety", active: false },
          { icon: Bell, label: "Alerts", active: false },
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

export default HomeScreenMockup;
