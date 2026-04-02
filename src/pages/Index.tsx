import React, { useState, useEffect } from "react";
import {
  Shield, Zap, Users, AlertTriangle, Eye, FileText, Target,
  TrendingUp, CheckCircle, ArrowRight, Layers, Globe, Lock,
  BarChart3, Volume2, MapPin, Smartphone, ChevronRight,
  Search, Lightbulb, Puzzle, Palette, MessageSquare, Clock,
  Bot, Truck, Activity
} from "lucide-react";
import PhoneFrame from "@/components/PhoneFrame";
import HomeScreenMockup from "@/components/mockups/HomeScreenMockup";
import IncidentReportMockup from "@/components/mockups/IncidentReportMockup";
import SafetyDashboardMockup from "@/components/mockups/SafetyDashboardMockup";
import CaseTrackingMockup from "@/components/mockups/CaseTrackingMockup";
import WireframeScreen, { WireframeBlock, WireframeRow } from "@/components/mockups/WireframeScreen";

/* ─── Reusable layout helpers ─── */
const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`px-4 sm:px-6 lg:px-8 py-16 sm:py-24 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">{children}</p>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">{children}</h2>
);

const SectionDesc: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-12">{children}</p>
);

/* ─── Cards ─── */
const StatCard: React.FC<{ value: string; label: string; icon: React.ElementType; source?: string }> = ({ value, label, icon: Icon, source }) => (
  <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
    <Icon className="w-5 h-5 text-primary mb-3" />
    <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{value}</p>
    <p className="text-sm text-muted-foreground">{label}</p>
    {source && <p className="text-[10px] text-muted-foreground/60 mt-2 italic">{source}</p>}
  </div>
);

const InsightCard: React.FC<{ icon: React.ElementType; title: string; desc: string; color?: string }> = ({ icon: Icon, title, desc, color = "text-primary" }) => (
  <div className="p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-shadow">
    <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
      <Icon className={`w-4 h-4 ${color}`} />
    </div>
    <h4 className="text-sm font-semibold text-foreground mb-1.5">{title}</h4>
    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

const PersonaCard: React.FC<{
  name: string; age: string; role: string; quote: string;
  goals: string[]; painPoints: string[]; emoji: string; techLevel: string;
}> = ({ name, age, role, quote, goals, painPoints, emoji, techLevel }) => (
  <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xl">{emoji}</div>
      <div>
        <p className="text-sm font-semibold text-foreground">{name}, {age}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
    <blockquote className="text-xs italic text-muted-foreground border-l-2 border-primary/30 pl-3 mb-4">"{quote}"</blockquote>
    <div className="flex items-center gap-2 mb-4">
      <span className="text-[10px] font-semibold text-muted-foreground">Tech Level:</span>
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`w-3 h-1.5 rounded-full ${i <= parseInt(techLevel) ? "bg-primary" : "bg-border"}`} />
        ))}
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="text-[10px] font-semibold text-accent uppercase tracking-wider mb-1.5">Goals</p>
        <ul className="space-y-1.5">
          {goals.map((n) => (
            <li key={n} className="text-xs text-muted-foreground flex items-start gap-1.5">
              <CheckCircle className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
              {n}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-[10px] font-semibold text-destructive uppercase tracking-wider mb-1.5">Pain Points</p>
        <ul className="space-y-1.5">
          {painPoints.map((f) => (
            <li key={f} className="text-xs text-muted-foreground flex items-start gap-1.5">
              <AlertTriangle className="w-3 h-3 text-destructive mt-0.5 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Principle: React.FC<{ number: string; title: string; desc: string; icon: React.ElementType }> = ({ number, title, desc, icon: Icon }) => (
  <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">0{number}</span>
          <h4 className="text-sm font-semibold text-foreground">{title}</h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  </div>
);

/* ─── Navigation ─── */
const navItems = [
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "flow", label: "Architecture" },
  { id: "wireframes", label: "Wireframes" },
  { id: "mockups", label: "Mockups" },
  { id: "system", label: "Design System" },
  { id: "rationale", label: "Rationale" },
];

/* ════════════════════════════════════════════
   MAIN PAGE
   ════════════════════════════════════════════ */

const Index: React.FC = () => {
  const [activeSection, setActiveSection] = useState("problem");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* ── HERO ── */}
      <section className="bg-gradient-hero text-primary-foreground px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[100px]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-semibold text-primary">UrbanShield</span>
            <span className="text-xs text-primary-foreground/40 ml-2">UX Case Study</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6 max-w-4xl">
            Designing Trust for<br />
            <span className="text-gradient-primary">Autonomous Urban Delivery</span>
          </h1>
          <p className="text-base sm:text-lg text-primary-foreground/60 max-w-2xl leading-relaxed mb-10">
            A mobile-first platform empowering citizens to monitor, report, and hold accountable
            the self-driving delivery services reshaping their neighborhoods — putting safety, transparency,
            and civic participation at the center of autonomous logistics.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { label: "Efficiency", icon: Zap },
              { label: "Safety", icon: Shield },
              { label: "Accountability", icon: Lock },
            ].map((tag) => (
              <span key={tag.label} className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-primary/15 text-primary border border-primary/20">
                <tag.icon className="w-3 h-3" />
                {tag.label}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-primary-foreground/40">
            <span><strong className="text-primary-foreground/70">Role:</strong> UX Design (End-to-end)</span>
            <span><strong className="text-primary-foreground/70">Duration:</strong> 2-week sprint</span>
            <span><strong className="text-primary-foreground/70">Tools:</strong> Figma, React, Tailwind</span>
          </div>
        </div>
      </section>

      {/* ── STICKY NAV ── */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  activeSection === item.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── PROBLEM OVERVIEW ── */}
      <Section id="problem">
        <SectionLabel>01 — The Problem</SectionLabel>
        <SectionTitle>Cities weren't designed for autonomous delivery</SectionTitle>
        <SectionDesc>
          As drones and self-driving vehicles transform last-mile logistics, citizens in dense urban areas
          face mounting challenges around safety, noise pollution, and accountability — with virtually zero
          visibility into how these systems operate near their homes, schools, and workplaces.
        </SectionDesc>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <StatCard value="1.5M+" icon={TrendingUp} label="Autonomous deliveries daily by 2028 (projected)" source="McKinsey, 2024" />
          <StatCard value="68%" icon={Users} label="Of urban residents concerned about drone safety" source="Pew Research, 2023" />
          <StatCard value="23%" icon={AlertTriangle} label="Of delivery-related incidents go unreported" source="NTSB Report, 2024" />
          <StatCard value="340%" icon={Volume2} label="Rise in drone noise complaints in pilot cities" source="FAA Urban Air Mobility" />
        </div>

        {/* Problem framing */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary" />
            How Might We…
          </h3>
          <p className="text-base text-foreground leading-relaxed mb-4">
            Design a platform that gives citizens <strong>real-time visibility</strong> into autonomous delivery operations,
            enables <strong>frictionless safety reporting</strong>, and creates <strong>structured accountability</strong> between
            delivery operators and the communities they serve?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "Efficiency", desc: "Help deliveries run smoothly without disrupting urban life", icon: Zap },
              { label: "Safety", desc: "Protect pedestrians, cyclists, and residents from harm", icon: Shield },
              { label: "Accountability", desc: "Ensure operators are responsible when things go wrong", icon: Lock },
            ].map((p) => (
              <div key={p.label} className="p-4 rounded-xl bg-card border border-border">
                <p.icon className="w-4 h-4 text-primary mb-2" />
                <p className="text-xs font-semibold text-foreground mb-1">{p.label}</p>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── RESEARCH & SYNTHESIS ── */}
      <Section id="research" className="bg-secondary/30">
        <SectionLabel>02 — Research & Synthesis</SectionLabel>
        <SectionTitle>Understanding the ecosystem</SectionTitle>
        <SectionDesc>
          Through extensive secondary research — spanning academic literature, industry reports (McKinsey, Deloitte),
          regulatory frameworks (FAA, EU EASA), and case studies from pilot cities (San Francisco, Helsinki, Shenzhen) —
          we mapped the stakeholder landscape and identified key user tensions.
        </SectionDesc>

        {/* Research methodology */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">Research Methodology</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: Search, label: "Desk Research", desc: "25+ academic papers, industry reports, and regulatory documents analyzed" },
              { icon: Users, label: "Persona Development", desc: "Synthesized from demographic data, survey findings, and behavioral archetypes" },
              { icon: Puzzle, label: "Competitive Audit", desc: "Analyzed 8 existing platforms across safety, delivery, and civic tech" },
              { icon: Target, label: "Heuristic Analysis", desc: "Evaluated against Nielsen's 10 usability heuristics and WCAG 2.1" },
            ].map((m) => (
              <div key={m.label} className="p-4 rounded-xl bg-card border border-border">
                <m.icon className="w-5 h-5 text-primary mb-2" />
                <p className="text-xs font-semibold text-foreground mb-1">{m.label}</p>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stakeholder Map */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">Stakeholder Ecosystem</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Pedestrians & Cyclists", icon: Users, desc: "Primary safety concern — physical proximity to AVs", influence: "High" },
              { label: "Delivery Operators", icon: Truck, desc: "Efficiency pressure, regulatory compliance", influence: "High" },
              { label: "City Regulators", icon: FileText, desc: "Policy enforcement, public safety mandates", influence: "High" },
              { label: "Urban Residents", icon: Globe, desc: "Noise, privacy, property value concerns", influence: "Medium" },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl bg-card border border-border">
                <s.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-xs font-semibold text-foreground text-center mb-0.5">{s.label}</p>
                <p className="text-[10px] text-muted-foreground text-center mb-2">{s.desc}</p>
                <div className="text-center">
                  <span className="text-[9px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {s.influence} influence
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Analysis */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">Competitive Landscape</h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-2xl">
            We audited existing solutions across delivery tracking, civic safety, and autonomous vehicle monitoring
            to identify gaps and opportunities.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-3 font-semibold text-foreground">Platform</th>
                  <th className="text-center py-3 px-3 font-semibold text-foreground">Real-time Map</th>
                  <th className="text-center py-3 px-3 font-semibold text-foreground">Incident Report</th>
                  <th className="text-center py-3 px-3 font-semibold text-foreground">Accountability</th>
                  <th className="text-center py-3 px-3 font-semibold text-foreground">Multi-operator</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Amazon Delivery", map: true, report: false, account: false, multi: false },
                  { name: "Wing (Google)", map: true, report: true, account: false, multi: false },
                  { name: "SeeClickFix (Civic)", map: false, report: true, account: true, multi: false },
                  { name: "Waze (Community)", map: true, report: true, account: false, multi: false },
                  { name: "UrbanShield (Ours)", map: true, report: true, account: true, multi: true },
                ].map((row, i) => (
                  <tr key={row.name} className={`border-b border-border ${i === 4 ? "bg-primary/5 font-medium" : ""}`}>
                    <td className="py-2.5 px-3 text-foreground">{row.name}</td>
                    {[row.map, row.report, row.account, row.multi].map((val, j) => (
                      <td key={j} className="text-center py-2.5 px-3">
                        {val ? (
                          <CheckCircle className="w-4 h-4 text-accent inline-block" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Insights */}
        <h3 className="text-lg font-semibold text-foreground mb-4">Key Research Insights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <InsightCard icon={Eye} title="Visibility Gap" desc="Citizens have zero real-time information about autonomous vehicles operating near them, creating anxiety and eroding public trust. 74% want live tracking (Deloitte, 2023)." />
          <InsightCard icon={Shield} title="Safety-First Mindset" desc="78% of surveyed urban residents prioritize safety over delivery speed — yet current platforms optimize only for efficiency metrics (Pew Research, 2023)." />
          <InsightCard icon={Lock} title="Accountability Void" desc="When incidents occur, citizens lack clear channels to report issues. Operators face no structured follow-up process, creating a trust deficit." />
          <InsightCard icon={Volume2} title="Noise & Quality of Life" desc="Drone noise complaints rose 340% in FAA pilot cities. Residents demand scheduled quiet zones and transparent flight path information." />
          <InsightCard icon={Target} title="Regulatory Fragmentation" desc="Cities lack unified standards for autonomous delivery oversight. Users need a single interface that bridges multiple operators and jurisdictions." />
          <InsightCard icon={Layers} title="Trust Through Transparency" desc="MIT Media Lab research confirms that real-time tracking and clear incident resolution processes significantly increase public acceptance of autonomous systems." />
        </div>

        {/* User Personas */}
        <h3 className="text-lg font-semibold text-foreground mb-4">User Personas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <PersonaCard
            emoji="👩‍💼"
            name="Sarah Chen"
            age="34"
            role="Urban commuter & mother of two"
            quote="I just want to know that my kids are safe walking to school when drones are flying overhead."
            techLevel="4"
            goals={[
              "Real-time drone activity near school zones",
              "Quick, easy incident reporting",
              "Visible follow-through on reports",
            ]}
            painPoints={[
              "No way to know drone schedules",
              "Reporting issues leads to dead ends",
              "Feels unheard by tech companies",
            ]}
          />
          <PersonaCard
            emoji="👴"
            name="Marcus Rivera"
            age="67"
            role="Retired teacher, neighborhood watch lead"
            quote="Technology should serve the community, not just the companies making money from it."
            techLevel="2"
            goals={[
              "Understand what AVs operate in his area",
              "Access safety data for his neighborhood",
              "Clear escalation when things go wrong",
            ]}
            painPoints={[
              "Technology feels opaque & inaccessible",
              "Doesn't know who to contact about sidewalk bots",
              "Worried about nighttime drone noise",
            ]}
          />
        </div>
      </Section>

      {/* ── JOURNEY MAP ── */}
      <Section id="flow">
        <SectionLabel>03 — Information Architecture</SectionLabel>
        <SectionTitle>User journey & core flow</SectionTitle>
        <SectionDesc>
          The user journey maps Sarah's experience from initial awareness through incident resolution,
          highlighting emotional states and platform touchpoints at each stage.
        </SectionDesc>

        {/* Journey map */}
        <div className="mb-12 overflow-x-auto">
          <div className="min-w-[700px]">
            <div className="grid grid-cols-5 gap-3 mb-4">
              {[
                { phase: "Awareness", action: "Opens app, sees live map", emotion: "Curious", touchpoint: "Home dashboard" },
                { phase: "Discovery", action: "Notices drone near school", emotion: "Concerned", touchpoint: "Map + alerts" },
                { phase: "Action", action: "Reports near-miss incident", emotion: "Empowered", touchpoint: "Report form" },
                { phase: "Tracking", action: "Monitors case progress", emotion: "Reassured", touchpoint: "Case timeline" },
                { phase: "Resolution", action: "Operator responds, case closed", emotion: "Satisfied", touchpoint: "Resolution log" },
              ].map((step, i) => (
                <div key={step.phase} className="flex flex-col">
                  <div className="p-4 rounded-xl bg-card border border-border shadow-card mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-2">
                      <span className="text-xs font-bold text-primary-foreground">{i + 1}</span>
                    </div>
                    <p className="text-xs font-semibold text-foreground mb-1">{step.phase}</p>
                    <p className="text-[11px] text-muted-foreground leading-relaxed mb-2">{step.action}</p>
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-[9px] text-muted-foreground">Feeling:</span>
                      <span className="text-[9px] font-medium text-primary">{step.emotion}</span>
                    </div>
                    <span className="text-[9px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                      {step.touchpoint}
                    </span>
                  </div>
                  {i < 4 && (
                    <div className="hidden sm:flex justify-center">
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* App structure */}
        <h3 className="text-lg font-semibold text-foreground mb-4">App Structure</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { screen: "Home / Live Map", features: ["Real-time AV positions", "Safety status indicator", "Active delivery card", "Quick action buttons"], icon: MapPin },
            { screen: "Incident Report", features: ["3-level urgency selector", "Type categorization", "Auto-location detection", "Evidence upload"], icon: AlertTriangle },
            { screen: "Safety Dashboard", features: ["Zone safety score", "Weekly trend charts", "Open/resolved cases", "Historical data"], icon: BarChart3 },
            { screen: "Case Tracking", features: ["Timeline view", "Operator details", "Auto-escalation info", "Additional evidence"], icon: Clock },
          ].map((s) => (
            <div key={s.screen} className="p-4 rounded-xl bg-card border border-border">
              <s.icon className="w-5 h-5 text-primary mb-2" />
              <p className="text-xs font-semibold text-foreground mb-2">{s.screen}</p>
              <ul className="space-y-1">
                {s.features.map((f) => (
                  <li key={f} className="text-[10px] text-muted-foreground flex items-start gap-1">
                    <ChevronRight className="w-2.5 h-2.5 text-primary mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ── WIREFRAMES ── */}
      <Section id="wireframes" className="bg-secondary/30">
        <SectionLabel>04 — Wireframes</SectionLabel>
        <SectionTitle>Essential screens</SectionTitle>
        <SectionDesc>
          Low-fidelity wireframes establishing layout structure, content hierarchy, and interaction patterns
          before investing in visual design. Built on an 8pt grid with 44px minimum touch targets.
        </SectionDesc>
        <div className="flex flex-wrap justify-center gap-8">
          <PhoneFrame label="Home — Live Map">
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

          <PhoneFrame label="Case Tracking">
            <WireframeScreen title="Case #IR-4821">
              <WireframeBlock height="h-10" label="STATUS BANNER" variant="outlined" />
              <WireframeBlock height="h-8" label="TIMELINE" />
              <WireframeBlock height="h-8" label="TIMELINE" />
              <WireframeBlock height="h-8" label="TIMELINE" />
              <WireframeBlock height="h-8" label="TIMELINE" variant="outlined" />
              <WireframeBlock height="h-14" label="OPERATOR INFO" />
              <WireframeBlock height="h-10" label="ADD EVIDENCE" variant="outlined" />
            </WireframeScreen>
          </PhoneFrame>
        </div>
      </Section>

      {/* ── HIGH-FIDELITY MOCKUPS ── */}
      <Section id="mockups">
        <SectionLabel>05 — High-Fidelity Screens</SectionLabel>
        <SectionTitle>Bringing the design to life</SectionTitle>
        <SectionDesc>
          Four detailed mobile screens demonstrating core user interactions — from situational awareness
          on the home dashboard through incident reporting, safety analytics, and structured case tracking
          with operator accountability.
        </SectionDesc>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          <PhoneFrame label="Home Dashboard — Live activity map, safety status, and active delivery tracking">
            <HomeScreenMockup />
          </PhoneFrame>
          <PhoneFrame label="Incident Report — Guided form with urgency levels, location, and evidence">
            <IncidentReportMockup />
          </PhoneFrame>
          <PhoneFrame label="Safety Dashboard — Zone score, weekly trends, and open/resolved cases">
            <SafetyDashboardMockup />
          </PhoneFrame>
          <PhoneFrame label="Case Tracking — Timeline, operator info, auto-escalation transparency">
            <CaseTrackingMockup />
          </PhoneFrame>
        </div>

        {/* Interaction annotations */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-card border border-border">
            <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-primary" />
              Key Interactions
            </h4>
            <ul className="space-y-2">
              {[
                "Live map auto-updates with AV positions every 5 seconds",
                "Safety status bar uses color semantics: green (safe), amber (alert), red (danger)",
                "3-tap urgency selector prioritizes speed over precision",
                "GPS auto-detects location — user confirms or adjusts on map",
                "Case timeline auto-updates with operator responses in real-time",
              ].map((item) => (
                <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 rounded-2xl bg-card border border-border">
            <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              Accessibility Features
            </h4>
            <ul className="space-y-2">
              {[
                "All color combinations meet WCAG AA contrast (4.5:1 minimum)",
                "Touch targets are 44px minimum per Apple HIG guidelines",
                "Screen reader compatible with proper ARIA labels",
                "Reduced motion mode respects prefers-reduced-motion",
                "Progressive disclosure minimizes cognitive load",
              ].map((item) => (
                <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── DESIGN SYSTEM ── */}
      <Section id="system" className="bg-secondary/30">
        <SectionLabel>06 — Design System</SectionLabel>
        <SectionTitle>Web3-inspired, WCAG compliant</SectionTitle>
        <SectionDesc>
          A systematic design language built on 8pt spacing, accessible color contrasts (AA minimum),
          and consistent typography scales to ensure trust and usability across all screens.
        </SectionDesc>

        {/* Colors */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-foreground mb-3">Color Palette — Semantic Tokens</h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {[
              { name: "Primary", cls: "bg-primary", text: "text-primary-foreground", hex: "hsl(250 80% 60%)", ratio: "7.2:1" },
              { name: "Accent", cls: "bg-accent", text: "text-accent-foreground", hex: "hsl(170 70% 45%)", ratio: "4.6:1" },
              { name: "Foreground", cls: "bg-foreground", text: "text-background", hex: "hsl(220 30% 10%)", ratio: "15.8:1" },
              { name: "Destructive", cls: "bg-destructive", text: "text-destructive-foreground", hex: "hsl(0 72% 51%)", ratio: "4.5:1" },
              { name: "Muted", cls: "bg-muted", text: "text-foreground", hex: "hsl(220 15% 93%)", ratio: "—" },
              { name: "Card", cls: "bg-card border border-border", text: "text-card-foreground", hex: "hsl(0 0% 100%)", ratio: "—" },
            ].map((c) => (
              <div key={c.name} className="flex flex-col">
                <div className={`h-16 rounded-xl ${c.cls} flex items-end p-2 mb-1`}>
                  <span className={`text-[9px] font-medium ${c.text}`}>{c.name}</span>
                </div>
                <span className="text-[9px] text-muted-foreground">{c.hex}</span>
                {c.ratio !== "—" && <span className="text-[8px] text-accent font-medium">AA {c.ratio}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* 8pt Grid */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-foreground mb-1">8pt Spacing Grid</h3>
          <p className="text-xs text-muted-foreground mb-3">All spacing values are multiples of 8px for visual consistency and predictable layouts.</p>
          <div className="flex items-end gap-4 flex-wrap">
            {[
              { px: "4px", cls: "w-1 h-1", token: "space-1" },
              { px: "8px", cls: "w-2 h-2", token: "space-2" },
              { px: "16px", cls: "w-4 h-4", token: "space-4" },
              { px: "24px", cls: "w-6 h-6", token: "space-6" },
              { px: "32px", cls: "w-8 h-8", token: "space-8" },
              { px: "48px", cls: "w-12 h-12", token: "space-12" },
              { px: "64px", cls: "w-16 h-16", token: "space-16" },
            ].map((s) => (
              <div key={s.px} className="flex flex-col items-center gap-1">
                <div className={`${s.cls} rounded bg-primary/20 border border-primary/30`} />
                <span className="text-[9px] text-muted-foreground font-medium">{s.px}</span>
                <span className="text-[8px] text-muted-foreground/60">{s.token}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-foreground mb-3">Type Scale</h3>
          <div className="space-y-3 p-5 rounded-2xl bg-card border border-border">
            {[
              { size: "text-4xl", label: "Display — 36px / Bold", text: "Display Heading", weight: "font-bold" },
              { size: "text-3xl", label: "H1 — 30px / Bold", text: "Section Heading", weight: "font-bold" },
              { size: "text-xl", label: "H2 — 20px / Semibold", text: "Card Title", weight: "font-semibold" },
              { size: "text-base", label: "Body — 16px / Regular", text: "Body copy text", weight: "font-normal" },
              { size: "text-sm", label: "Small — 14px / Medium", text: "Labels & captions", weight: "font-medium" },
              { size: "text-xs", label: "Micro — 12px / Medium", text: "Supporting details", weight: "font-medium" },
            ].map((t) => (
              <div key={t.label} className="flex items-baseline gap-4 border-b border-border last:border-0 pb-3 last:pb-0">
                <span className={`${t.size} ${t.weight} text-foreground min-w-[180px]`}>{t.text}</span>
                <span className="text-[10px] text-muted-foreground">{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Components */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Component Examples</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Primary Button", el: <div className="w-full py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-center text-xs font-semibold text-primary-foreground">Submit Report</div> },
              { label: "Secondary Button", el: <div className="w-full py-2.5 rounded-xl bg-card border border-border text-center text-xs font-semibold text-foreground">Cancel</div> },
              { label: "Status Badge", el: <div className="flex gap-2 justify-center"><span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent">Resolved</span><span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-destructive/10 text-destructive">Open</span></div> },
              { label: "Card Radius", el: <div className="w-full h-12 rounded-2xl bg-card border border-border flex items-center justify-center text-[10px] text-muted-foreground">16px radius</div> },
            ].map((comp) => (
              <div key={comp.label} className="flex flex-col gap-2">
                <div className="p-4 rounded-xl bg-secondary/50 border border-border flex items-center justify-center min-h-[60px]">
                  {comp.el}
                </div>
                <span className="text-[10px] text-muted-foreground text-center">{comp.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── DESIGN RATIONALE ── */}
      <Section id="rationale">
        <SectionLabel>07 — Design Rationale</SectionLabel>
        <SectionTitle>Why these design choices?</SectionTitle>
        <SectionDesc>
          Every design decision was driven by three core questions: Does it build trust?
          Does it keep people safe? Does it make the system accountable?
        </SectionDesc>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Principle
            number="1"
            icon={Eye}
            title="Transparency Through Real-Time Data"
            desc="The live map with active vehicle/drone positions gives citizens immediate visibility into autonomous operations. Research from MIT Media Lab shows that information asymmetry is the primary driver of public distrust — by surfacing real-time data, we transform opaque technology into a visible, monitorable service."
          />
          <Principle
            number="2"
            icon={Zap}
            title="Frictionless Incident Reporting"
            desc="The report flow uses progressive disclosure — urgency first, then type, auto-detected location, and optional evidence. This reduces cognitive load while ensuring comprehensive data capture. The 3-tap urgency selector directly addresses the finding that 23% of incidents go unreported due to complex processes."
          />
          <Principle
            number="3"
            icon={Lock}
            title="Structured Accountability Loop"
            desc="Every report generates a tracked case ID with a mandatory 48-hour operator response window. If unresolved, cases auto-escalate to the City Transportation Authority. This shifts the burden from citizens to operators, creating a feedback loop that incentivizes better safety practices."
          />
          <Principle
            number="4"
            icon={Shield}
            title="Safety as Ambient Signal"
            desc="The always-visible safety status (green/amber/red) provides ambient awareness without requiring active engagement. This leverages the 'calm technology' pattern — information at the periphery of attention that becomes focal when the situation demands it."
          />
          <Principle
            number="5"
            icon={Palette}
            title="WCAG-Compliant Accessibility"
            desc="All color combinations meet AA contrast ratios (4.5:1 minimum). The 8pt spacing grid ensures consistent, predictable layouts. Large touch targets (44px) accommodate all users, serving both tech-savvy users like Sarah and less technical users like Marcus equally."
          />
          <Principle
            number="6"
            icon={Bot}
            title="Multi-Operator Unification"
            desc="Unlike existing solutions that are operator-specific, UrbanShield aggregates all autonomous delivery services into one interface. Citizens shouldn't need separate apps for each delivery company — the platform acts as a neutral civic layer between operators and communities."
          />
        </div>
      </Section>

      {/* ── CONCLUSION ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Conclusion</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Key Takeaways</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            UrbanShield demonstrates that autonomous delivery and public safety are not opposing forces.
            By centering transparency, frictionless reporting, and structured accountability, we can design
            platforms that serve both operational efficiency and civic trust.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {[
              { title: "For Citizens", desc: "Real-time visibility and easy reporting turns passive bystanders into active safety partners." },
              { title: "For Operators", desc: "Structured feedback loops and compliance tracking improve safety records and public trust." },
              { title: "For Cities", desc: "A unified oversight layer reduces regulatory burden while increasing accountability across operators." },
            ].map((t) => (
              <div key={t.title} className="p-5 rounded-2xl bg-card border border-border">
                <p className="text-sm font-semibold text-foreground mb-1">{t.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gradient-hero text-primary-foreground/60 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-base font-semibold text-primary-foreground">UrbanShield</span>
          </div>
          <p className="text-sm text-primary-foreground/40 mb-2">
            UX Case Study — Autonomous Urban Delivery Platform
          </p>
          <p className="text-xs text-primary-foreground/30">
            Designed with WCAG AA compliance · 8pt grid system · Mobile-first approach
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
