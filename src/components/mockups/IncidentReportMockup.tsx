import React from "react";
import { ArrowLeft, Camera, MapPin, AlertTriangle, ChevronDown, Shield } from "lucide-react";

const IncidentReportMockup: React.FC = () => {
  return (
    <div className="h-full bg-background flex flex-col text-foreground">
      {/* Header */}
      <div className="px-4 pt-2 pb-3 flex items-center gap-3 border-b border-border">
        <ArrowLeft className="w-4 h-4 text-foreground" />
        <h1 className="text-sm font-semibold">Report an Incident</h1>
      </div>

      <div className="flex-1 overflow-auto px-4 pt-4 pb-2">
        {/* Urgency selector */}
        <div className="mb-4">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Urgency Level</p>
          <div className="flex gap-2">
            {[
              { label: "Low", color: "border-accent bg-accent/10 text-accent" },
              { label: "Medium", color: "border-yellow-400 bg-yellow-400/10 text-yellow-600" },
              { label: "High", color: "border-destructive bg-destructive/10 text-destructive font-semibold ring-2 ring-destructive/20" },
            ].map((level) => (
              <div key={level.label} className={`flex-1 text-center py-2 rounded-lg border text-[10px] font-medium ${level.color}`}>
                {level.label}
              </div>
            ))}
          </div>
        </div>

        {/* Incident Type */}
        <div className="mb-4">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Incident Type</p>
          <div className="flex items-center justify-between p-3 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-3.5 h-3.5 text-destructive" />
              <span className="text-[11px] font-medium">Near-miss collision</span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
        </div>

        {/* Location */}
        <div className="mb-4">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Location</p>
          <div className="p-3 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="text-[11px] font-medium">742 Evergreen Terrace</span>
            </div>
            {/* Mini map */}
            <div className="h-[60px] rounded-lg bg-gradient-to-br from-primary/5 via-accent/5 to-secondary relative overflow-hidden">
              <div className="absolute inset-0 opacity-15">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="absolute w-full h-px bg-foreground/20" style={{ top: `${(i + 1) * 20}%` }} />
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-destructive/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-destructive rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Description</p>
          <div className="p-3 rounded-xl bg-card border border-border min-h-[60px]">
            <p className="text-[10px] text-foreground leading-relaxed">
              Delivery drone descended too quickly near the crosswalk at Main St. Several pedestrians had to step back.
            </p>
          </div>
        </div>

        {/* Photo Upload */}
        <div className="mb-4">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Evidence</p>
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-1">
              <Camera className="w-4 h-4 text-muted-foreground" />
              <span className="text-[7px] text-muted-foreground">Add photo</span>
            </div>
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-muted to-secondary" />
          </div>
        </div>

        {/* Accountability notice */}
        <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 mb-4">
          <div className="flex items-start gap-2">
            <Shield className="w-3.5 h-3.5 text-primary mt-0.5" />
            <div>
              <p className="text-[9px] font-semibold text-primary">Tracked & Accountable</p>
              <p className="text-[8px] text-muted-foreground leading-relaxed">
                Your report generates a case ID. The operator must respond within 48 hours per city regulation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="px-4 pb-4 pt-2">
        <div className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
          <span className="text-[11px] font-semibold text-primary-foreground">Submit Report</span>
        </div>
      </div>
    </div>
  );
};

export default IncidentReportMockup;
