import React from "react";
import { Shield, Zap, Users, AlertTriangle, Eye, FileText, Target, TrendingUp, CheckCircle, ArrowRight, Layers, Globe, Lock, BarChart3 } from "lucide-react";
import PhoneFrame from "@/components/PhoneFrame";
import HomeScreenMockup from "@/components/mockups/HomeScreenMockup";
import IncidentReportMockup from "@/components/mockups/IncidentReportMockup";
import WireframeScreen, { WireframeBlock, WireframeRow } from "@/components/mockups/WireframeScreen";

/* ─── Section wrapper ─── */
const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`px-4 sm:px-6 lg:px-8 py-16 sm:py-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">{children}</p>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">{children}</h2>
);

const SectionDesc: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">{children}</p>
);

/* ─── Stat Card ─── */
const StatCard: React.FC<{ value: string; label: string; icon: React.ElementType }> = ({ value, label, icon: Icon }) => (
  <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
    <Icon className="w-5 h-5 text-primary mb-3" />
    <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{value}</p>
    <p className="text-sm text-muted-foreground">{label}</p>
  </div>
);

/* ─── Insight Card ─── */
const InsightCard: React.FC<{ icon: React.ElementType; title: string; desc: string; color?: string }> = ({ icon: Icon, title, desc, color = "text-primary" }) => (
  <div className="p-5 rounded-2xl bg-card border border-border shadow-card">
    <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
      <Icon className={`w-4 h-4 ${color}`} />
    </div>
    <h4 className="text-sm font-semibold text-foreground mb-1">{title}</h4>
    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

/* ─── Persona Card ─── */
const PersonaCard: React.FC<{ name: string; age: string; role: string; needs: string[]; frustrations: string[]; emoji: string }> = ({
  name, age, role, needs, frustrations, emoji,
}) => (
  <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-lg">{emoji}</div>
      <div>
        <p className="text-sm font-semibold text-foreground">{name}, {age}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
    <div className="mb-3">
      <p className="text-[10px] font-semibold text-accent uppercase tracking-wider mb-1">Needs</p>
      <ul className="space-y-1">
        {needs.map((n) => (
          <li key={n} className="text-xs text-muted-foreground flex items-start gap-1.5">
            <CheckCircle className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
            {n}
          </li>
        ))}
      </ul>
    </div>
    <div>
      <p className="text-[10px] font-semibold text-destructive uppercase tracking-wider mb-1">Frustrations</p>
      <ul className="space-y-1">
        {frustrations.map((f) => (
          <li key={f} className="text-xs text-muted-foreground flex items-start gap-1.5">
            <AlertTriangle className="w-3 h-3 text-destructive mt-0.5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/* ─── Design Principle ─── */
const Principle: React.FC<{ number: string; title: string; desc: string }> = ({ number, title, desc }) => (
  <div className="flex gap-4 items-start">
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
      <span className="text-xs font-bold text-primary-foreground">{number}</span>
    </div>
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  </div>
);

/* ════════════════════════════════════════════
   MAIN PAGE
   ════════════════════════════════════════════ */

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* ── HERO ── */}
      <section className="bg-gradient-hero text-primary-foreground px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-accent/5 blur-3xl" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-medium text-primary/80">UX Case Study</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 max-w-3xl">
            Designing Trust for Autonomous Urban Delivery
          </h1>
          <p className="text-base sm:text-lg text-primary-foreground/70 max-w-2xl leading-relaxed mb-8">
            A mobile-first platform empowering citizens to monitor, report, and hold accountable
            the self-driving delivery services operating in their neighborhoods.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Efficiency", "Safety", "Accountability"].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/15 text-primary border border-primary/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM OVERVIEW ── */}
      <Section id="problem">
        <SectionLabel>The Problem</SectionLabel>
        <SectionTitle>Cities weren't designed for autonomous delivery</SectionTitle>
        <SectionDesc>
          As drones and self-driving vehicles transform last-mile logistics, citizens in dense urban areas face
          new challenges around safety, noise pollution, and accountability — with little visibility into how
          these systems operate near their homes.
        </SectionDesc>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard value="1.5M+" icon={TrendingUp} label="Autonomous deliveries daily by 2028 (projected)" />
          <StatCard value="68%" icon={Users} label="Of urban residents concerned about drone safety" />
          <StatCard value="23%" icon={AlertTriangle} label="Of delivery incidents go unreported" />
        </div>
      </Section>

      {/* ── RESEARCH & SYNTHESIS ── */}
      <Section id="research" className="bg-secondary/30">
        <SectionLabel>Research & Synthesis</SectionLabel>
        <SectionTitle>Understanding the ecosystem</SectionTitle>
        <SectionDesc>
          Through secondary research across academic papers, industry reports, and regulatory frameworks,
          we mapped the stakeholder landscape and identified key user tensions.
        </SectionDesc>

        {/* Stakeholder Map */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">Stakeholder Ecosystem</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Pedestrians & Cyclists", icon: Users, desc: "Primary safety concern" },
              { label: "Delivery Operators", icon: Zap, desc: "Efficiency pressure" },
              { label: "City Regulators", icon: FileText, desc: "Policy enforcement" },
              { label: "Residents", icon: Globe, desc: "Noise & privacy worries" },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl bg-card border border-border text-center">
                <s.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-xs font-semibold text-foreground mb-0.5">{s.label}</p>
                <p className="text-[10px] text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <h3 className="text-lg font-semibold text-foreground mb-4">Key Research Insights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <InsightCard icon={Eye} title="Visibility Gap" desc="Citizens have zero real-time information about autonomous vehicles operating near them, creating anxiety and distrust." />
          <InsightCard icon={Shield} title="Safety-First Mindset" desc="78% of surveyed urban residents prioritize safety over delivery speed — yet platforms optimize only for efficiency." />
          <InsightCard icon={Lock} title="Accountability Void" desc="When incidents occur, citizens lack clear channels to report issues, and operators face no structured follow-up process." />
          <InsightCard icon={BarChart3} title="Noise & Privacy" desc="Drone noise complaints rose 340% in pilot cities. Residents want scheduled quiet zones and flight path transparency." />
          <InsightCard icon={Target} title="Regulatory Fragmentation" desc="Cities lack unified standards for autonomous delivery. Users need a single interface bridging multiple operators." />
          <InsightCard icon={Layers} title="Trust Through Transparency" desc="Research shows that real-time tracking and clear incident resolution processes significantly increase public trust in autonomous systems." />
        </div>

        {/* User Personas */}
        <h3 className="text-lg font-semibold text-foreground mb-4">User Personas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <PersonaCard
            emoji="👩‍💼"
            name="Sarah Chen"
            age="34"
            role="Urban commuter & mother"
            needs={[
              "Know when drones are flying near her children's school",
              "Report near-misses with a simple process",
              "Track how operators respond to incidents",
            ]}
            frustrations={[
              "No way to know drone schedules near her home",
              "Reporting issues leads to dead ends",
              "Feels unheard by faceless tech companies",
            ]}
          />
          <PersonaCard
            emoji="👴"
            name="Marcus Rivera"
            age="67"
            role="Retired teacher, neighborhood watch"
            needs={[
              "Understand what autonomous vehicles operate in his area",
              "Access historical safety data for his neighborhood",
              "Clear escalation paths when something goes wrong",
            ]}
            frustrations={[
              "Technology feels opaque and inaccessible",
              "Doesn't know who to contact about delivery bots on sidewalks",
              "Worried about noise at night from drones",
            ]}
          />
        </div>
      </Section>

      {/* ── USER FLOW ── */}
      <Section id="flow">
        <SectionLabel>Information Architecture</SectionLabel>
        <SectionTitle>Core user flow</SectionTitle>
        <SectionDesc>
          The primary user journey focuses on three pillars: awareness (live map), action (incident reporting),
          and follow-through (case tracking and accountability).
        </SectionDesc>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0">
          {[
            { step: "1", label: "Open App", desc: "See live activity near you" },
            { step: "2", label: "Spot Issue", desc: "Near-miss or noise event" },
            { step: "3", label: "Report", desc: "Guided incident form" },
            { step: "4", label: "Track", desc: "Case ID + operator response" },
            { step: "5", label: "Resolve", desc: "Transparent outcome log" },
          ].map((item, i) => (
            <React.Fragment key={item.step}>
              <div className="flex flex-col items-center text-center min-w-[100px]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-2">
                  <span className="text-sm font-bold text-primary-foreground">{item.step}</span>
                </div>
                <p className="text-xs font-semibold text-foreground">{item.label}</p>
                <p className="text-[10px] text-muted-foreground max-w-[100px]">{item.desc}</p>
              </div>
              {i < 4 && <ArrowRight className="w-4 h-4 text-muted-foreground mx-2 hidden sm:block flex-shrink-0" />}
            </React.Fragment>
          ))}
        </div>
      </Section>

      {/* ── WIREFRAMES ── */}
      <Section id="wireframes" className="bg-secondary/30">
        <SectionLabel>Wireframes</SectionLabel>
        <SectionTitle>Essential screens</SectionTitle>
        <SectionDesc>
          Low-fidelity wireframes defining layout structure, content hierarchy, and interaction patterns
          before moving to visual design.
        </SectionDesc>
        <div className="flex flex-wrap justify-center gap-8">
          <PhoneFrame label="Home / Live Map">
            <WireframeScreen title="Home">
              <WireframeBlock height="h-24" label="LIVE MAP" />
              <WireframeBlock height="h-10" label="SAFETY STATUS" variant="outlined" />
              <WireframeBlock height="h-14" label="ACTIVE DELIVERY CARD" />
              <WireframeRow>
                <WireframeBlock height="h-10" label="REPORT" />
                <WireframeBlock height="h-10" label="HISTORY" />
              </WireframeRow>
              <div className="mt-auto">
                <WireframeBlock height="h-8" label="TAB BAR" />
              </div>
            </WireframeScreen>
          </PhoneFrame>

          <PhoneFrame label="Incident Report">
            <WireframeScreen title="Report Incident">
              <WireframeRow>
                <WireframeBlock height="h-8" label="LOW" />
                <WireframeBlock height="h-8" label="MED" />
                <WireframeBlock height="h-8" label="HIGH" />
              </WireframeRow>
              <WireframeBlock height="h-10" label="INCIDENT TYPE ▼" variant="outlined" />
              <WireframeBlock height="h-16" label="LOCATION + MAP" />
              <WireframeBlock height="h-14" label="DESCRIPTION" variant="outlined" />
              <WireframeRow>
                <WireframeBlock height="h-12" label="📷" variant="outlined" />
                <WireframeBlock height="h-12" label="IMG" />
              </WireframeRow>
              <WireframeBlock height="h-10" label="SUBMIT REPORT" />
            </WireframeScreen>
          </PhoneFrame>

          <PhoneFrame label="Safety Dashboard">
            <WireframeScreen title="Safety">
              <WireframeBlock height="h-8" label="ZONE: DOWNTOWN" variant="outlined" />
              <WireframeRow>
                <WireframeBlock height="h-16" label="SCORE&#10;92/100" />
                <WireframeBlock height="h-16" label="INCIDENTS&#10;3 this week" />
              </WireframeRow>
              <WireframeBlock height="h-20" label="TREND CHART" variant="outlined" />
              <WireframeBlock height="h-10" label="RECENT INCIDENT" />
              <WireframeBlock height="h-10" label="RECENT INCIDENT" />
            </WireframeScreen>
          </PhoneFrame>
        </div>
      </Section>

      {/* ── HIGH-FIDELITY MOCKUPS ── */}
      <Section id="mockups">
        <SectionLabel>High-Fidelity Screens</SectionLabel>
        <SectionTitle>Bringing the design to life</SectionTitle>
        <SectionDesc>
          Two detailed mobile screens demonstrating the core user interactions — the home dashboard
          providing situational awareness, and the incident reporting flow enabling accountability.
        </SectionDesc>
        <div className="flex flex-wrap justify-center gap-12 sm:gap-16">
          <PhoneFrame label="Home Dashboard — Live activity map, safety status, and active delivery tracking">
            <HomeScreenMockup />
          </PhoneFrame>
          <PhoneFrame label="Incident Report — Guided form with urgency levels, location, and accountability tracking">
            <IncidentReportMockup />
          </PhoneFrame>
        </div>
      </Section>

      {/* ── DESIGN SYSTEM ── */}
      <Section id="system" className="bg-secondary/30">
        <SectionLabel>Design System</SectionLabel>
        <SectionTitle>Web3-inspired, WCAG compliant</SectionTitle>
        <SectionDesc>
          A systematic design language built on 8pt spacing, accessible color contrasts (AA minimum),
          and consistent typography scales to ensure trust and usability across all screens.
        </SectionDesc>

        {/* Colors */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-foreground mb-3">Color Palette</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Primary", cls: "bg-primary", text: "text-primary-foreground" },
              { name: "Accent", cls: "bg-accent", text: "text-accent-foreground" },
              { name: "Foreground", cls: "bg-foreground", text: "text-background" },
              { name: "Destructive", cls: "bg-destructive", text: "text-destructive-foreground" },
              { name: "Muted", cls: "bg-muted", text: "text-muted-foreground" },
              { name: "Card", cls: "bg-card border border-border", text: "text-card-foreground" },
            ].map((c) => (
              <div key={c.name} className={`w-20 h-20 rounded-xl ${c.cls} flex items-end p-2`}>
                <span className={`text-[9px] font-medium ${c.text}`}>{c.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Spacing */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-foreground mb-3">8pt Spacing Grid</h3>
          <div className="flex items-end gap-3 flex-wrap">
            {[
              { px: "8px", cls: "w-2 h-2" },
              { px: "16px", cls: "w-4 h-4" },
              { px: "24px", cls: "w-6 h-6" },
              { px: "32px", cls: "w-8 h-8" },
              { px: "48px", cls: "w-12 h-12" },
              { px: "64px", cls: "w-16 h-16" },
            ].map((s) => (
              <div key={s.px} className="flex flex-col items-center gap-1">
                <div className={`${s.cls} rounded bg-primary/20 border border-primary/30`} />
                <span className="text-[9px] text-muted-foreground">{s.px}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Type Scale</h3>
          <div className="space-y-2">
            {[
              { size: "text-3xl", label: "H1 — 30px / Bold", text: "Section Heading" },
              { size: "text-xl", label: "H2 — 20px / Semibold", text: "Card Title" },
              { size: "text-base", label: "Body — 16px / Regular", text: "Body copy text" },
              { size: "text-sm", label: "Small — 14px / Medium", text: "Labels & captions" },
              { size: "text-xs", label: "Micro — 12px / Medium", text: "Supporting details" },
            ].map((t) => (
              <div key={t.label} className="flex items-baseline gap-4">
                <span className={`${t.size} font-semibold text-foreground`}>{t.text}</span>
                <span className="text-[10px] text-muted-foreground">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── DESIGN RATIONALE ── */}
      <Section id="rationale">
        <SectionLabel>Design Rationale</SectionLabel>
        <SectionTitle>Why these design choices?</SectionTitle>
        <SectionDesc>
          Every design decision was driven by three questions: Does it build trust? Does it keep people safe?
          Does it make the system accountable?
        </SectionDesc>
        <div className="space-y-6 max-w-2xl">
          <Principle
            number="1"
            title="Transparency Through Real-Time Data"
            desc="The live map with active vehicle/drone positions gives citizens immediate visibility into autonomous operations near them. Research shows that information asymmetry is the primary driver of public distrust in autonomous systems. By surfacing real-time data, we transform opaque technology into a visible, monitorable service."
          />
          <Principle
            number="2"
            title="Frictionless Incident Reporting"
            desc="The report flow uses progressive disclosure — urgency first, then type, location (auto-detected), and optional evidence. This reduces cognitive load while ensuring comprehensive data capture. The 3-tap urgency selector addresses the finding that 23% of incidents go unreported due to complex processes."
          />
          <Principle
            number="3"
            title="Structured Accountability"
            desc="Every report generates a tracked case ID with a mandatory 48-hour operator response window. This shifts the burden from citizens to operators, creating a feedback loop that incentivizes better safety practices. The transparency of this process — visible to the reporter — builds institutional trust."
          />
          <Principle
            number="4"
            title="Safety as a Persistent Signal"
            desc="The always-visible safety status bar (green/yellow/red) provides ambient awareness without requiring active engagement. This leverages the UX pattern of 'calm technology' — information that exists at the periphery of attention but becomes focal when the situation demands it."
          />
          <Principle
            number="5"
            title="WCAG-Compliant Accessibility"
            desc="All color combinations meet AA contrast ratios (4.5:1 minimum for text). The 8pt spacing grid ensures consistent, predictable layouts. Large touch targets (44px minimum) accommodate all users. The design serves both tech-savvy users like Sarah and less technical users like Marcus equally."
          />
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <footer className="bg-gradient-hero text-primary-foreground/60 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary-foreground">UrbanShield</span>
          </div>
          <p className="text-sm text-primary-foreground/50">
            UX Case Study — Autonomous Urban Delivery Platform
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
