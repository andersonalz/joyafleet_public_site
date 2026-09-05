/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import { HeroBackground } from '../components/HeroBackground';
import {
  BarChart3,
  ChevronRight,
  ArrowRight,
  FileText,
  SlidersHorizontal,
  Layers,
  FileSpreadsheet,
  Globe,
  Users,
  Settings,
  Activity,
  Calendar,
  Lock,
  Sparkles,
  Radio,
  Download,
  Filter
} from 'lucide-react';

interface ProductVisual {
  id: string;
  title: string;
  description: string;
  aspectRatio: "16:9" | "16:10";
  alt: string;
  imageUrl?: string;
}

interface ProductVisualFrameProps {
  id: string;
  title: string;
  description: string;
  aspectRatio: "16:9" | "16:10";
  alt: string;
  imageUrl?: string;
  children?: React.ReactNode;
}

export function ProductVisualFrame({
  id,
  title,
  description,
  aspectRatio,
  alt,
  imageUrl,
  children
}: ProductVisualFrameProps) {
  const aspectClass = aspectRatio === "16:9" ? "aspect-[16/9]" : "aspect-[16/10]";

  if (imageUrl) {
    return (
      <img
        id={id}
        src={imageUrl}
        alt={alt}
        referrerPolicy="no-referrer"
        className={`w-full h-auto object-cover rounded-xl border border-[#1267E5]/20 shadow-md ${aspectClass}`}
      />
    );
  }

  return (
    <div
      id={id}
      role="img"
      aria-label={alt}
      className={`relative w-full overflow-hidden rounded-xl border border-[#1267E5]/30 bg-gradient-to-br from-[#071B33] to-[#0A2240] p-6 flex flex-col justify-between text-white ${aspectClass}`}
    >
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#1267E5]/15 rounded-full blur-3xl pointer-events-none" />
      
      <div className="z-10">
        <span className="text-[10px] font-mono tracking-widest text-[#39BFF8] block uppercase mb-1 font-semibold">
          JOYA FLEET PRODUCT WORKSPACE
        </span>
        <h4 className="text-xs font-bold text-white tracking-wide uppercase font-mono flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#39BFF8]" />
          {title}
        </h4>
      </div>

      <div className="my-4 flex-1 flex flex-col justify-center space-y-3 z-10">
        <p className="text-[11px] text-gray-300 font-medium leading-relaxed max-w-sm">
          {description}
        </p>
        {children ? (
          children
        ) : (
          <div className="space-y-1.5 pt-2">
            <div className="h-1.5 w-11/12 bg-[#1267E5]/50 rounded" />
            <div className="h-1.5 w-8/12 bg-[#39BFF8]/40 rounded" />
          </div>
        )}
      </div>

      <div className="border-t border-white/10 pt-3 flex justify-between items-center text-[10px] text-gray-400 font-mono z-10">
        <span className="flex items-center gap-1.5 text-[#39BFF8]">
          <span className="w-1 h-1 rounded-full bg-[#39BFF8] animate-pulse" />
          REPORTING WORKSPACE
        </span>
        <span className="text-gray-400">CONFIGURABLE REPORTING CONTEXT</span>
      </div>
    </div>
  );
}

interface ValueCard {
  title: string;
  text: string;
  icon: React.ReactNode;
}

interface CapabilityItem {
  title: string;
  description: string;
  labels: string[];
  businessValue: string;
  visual: ProductVisual;
}

interface WorkflowStage {
  step: string;
  title: string;
  text: string;
}

interface TemplateBlock {
  title: string;
  description: string;
  labels: string[];
}

interface OutputCard {
  title: string;
  description: string;
  labels: string[];
}

interface ConnectedModule {
  title: string;
  text: string;
  destination: string;
}

interface RoleCard {
  title: string;
  description: string;
  areas: string[];
}

const REPORTING_VISUALS: Record<string, ProductVisual> = {
  quickReports: {
    id: "quick-report-view",
    title: "Joya Fleet Quick Report View",
    description: "Access prepared report structures for recurring operational information and common reporting requirements.",
    aspectRatio: "16:10",
    alt: "Product visual reserved for the Joya Fleet quick reporting interface",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  customReports: {
    id: "custom-report-builder",
    title: "Joya Fleet Custom Report Builder",
    description: "Build reports around selected information, configurable columns, relevant filters and reusable output requirements.",
    aspectRatio: "16:10",
    alt: "Product visual reserved for the Joya Fleet custom report builder interface",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  },
  reportTemplate: {
    id: "report-template-workspace",
    title: "Joya Fleet Report Template Workspace",
    description: "Maintain report structures, presentation settings and reusable layouts for operational reports that need consistent output.",
    aspectRatio: "16:10",
    alt: "Product visual reserved for the Joya Fleet report template interface",
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80"
  },
  reportingWorkspace: {
    id: "reporting-analytics-workspace",
    title: "Joya Fleet Reporting & Analytics Workspace",
    description: "One configurable workspace for report structure, filters, templates and outputs.",
    aspectRatio: "16:9",
    alt: "Product visual reserved for the Joya Fleet reporting and analytics workspace interface",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
  }
};

const CHALLENGE_CARDS: ValueCard[] = [
  {
    title: "Connected Operational Information",
    text: "Use relevant flight, crew, aircraft and operational information within structured reporting workflows.",
    icon: <Activity size={20} className="text-[#1267E5]" />
  },
  {
    title: "Reusable Report Structures",
    text: "Save report configurations, filters and templates for repeated operational requirements.",
    icon: <Layers size={20} className="text-[#1267E5]" />
  },
  {
    title: "Flexible Output Formats",
    text: "Prepare report information for PDF, Excel and CSV output according to the reporting requirement.",
    icon: <FileSpreadsheet size={20} className="text-[#1267E5]" />
  }
];

const CAPABILITIES: CapabilityItem[] = [
  {
    title: "Quick Reports",
    description: "Access prepared report structures for recurring operational information and common reporting requirements.",
    labels: ["Prepared report structures", "Reusable filters", "Repeatable outputs", "Operational exports"],
    businessValue: "Use consistent report structures for recurring operational review.",
    visual: REPORTING_VISUALS.quickReports
  },
  {
    title: "Custom Reports",
    description: "Build reports around selected information, configurable columns, relevant filters and reusable output requirements.",
    labels: ["Custom report workflow", "Configurable columns", "Configurable filters", "Saved configurations"],
    businessValue: "Adapt report structure around the information required by a specific team or operational process.",
    visual: REPORTING_VISUALS.customReports
  }
];

const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: "01",
    title: "Choose Report Context",
    text: "Start with the relevant operational information and reporting requirement."
  },
  {
    step: "02",
    title: "Select Fields",
    text: "Choose the information required for the report output."
  },
  {
    step: "03",
    title: "Configure Columns",
    text: "Organize selected information into the required report structure."
  },
  {
    step: "04",
    title: "Apply Filters",
    text: "Use relevant conditions to focus the report on the required operational records."
  },
  {
    step: "05",
    title: "Preview & Export",
    text: "Review the configured output before generating the required report format."
  }
];

const DYNAMIC_CARDS: ValueCard[] = [
  {
    title: "Configurable Column Selection",
    text: "Choose and organize relevant information for the required report structure.",
    icon: <Layers size={20} className="text-[#1267E5]" />
  },
  {
    title: "Configurable Filters",
    text: "Focus reports around selected operational conditions and relevant record criteria.",
    icon: <SlidersHorizontal size={20} className="text-[#1267E5]" />
  },
  {
    title: "Multiple Filter Conditions",
    text: "Combine applicable conditions to create more specific operational report views.",
    icon: <Layers size={20} className="text-[#1267E5]" />
  },
  {
    title: "Reusable Configurations",
    text: "Save relevant report structures for repeated operational requirements.",
    icon: <FileText size={20} className="text-[#1267E5]" />
  }
];

const TEMPLATE_CAPABILITIES: ValueCard[] = [
  {
    title: "Reusable Layouts",
    text: "Maintain repeatable report structures for recurring operational requirements.",
    icon: <Layers size={20} className="text-[#1267E5]" />
  },
  {
    title: "Saved Presets",
    text: "Reuse configured report settings and selected output requirements.",
    icon: <SlidersHorizontal size={20} className="text-[#1267E5]" />
  },
  {
    title: "Branded Presentation",
    text: "Configure relevant report headers, presentation elements and approved airline branding.",
    icon: <Settings size={20} className="text-[#1267E5]" />
  },
  {
    title: "Specialized Outputs",
    text: "Support report layouts designed around specific operational information and review processes.",
    icon: <FileText size={20} className="text-[#1267E5]" />
  }
];

const EDITING_BLOCKS: TemplateBlock[] = [
  {
    title: "Template Configuration",
    description: "Configure supported report layout, content and presentation settings.",
    labels: [
      "Template content",
      "Layout settings",
      "Presentation structure",
      "Output formatting"
    ]
  },
  {
    title: "Preview Before Use",
    description: "Review the report structure before applying the configured template to an output.",
    labels: [
      "Template preview",
      "Output review",
      "Presentation check",
      "Report structure"
    ]
  },
  {
    title: "Saved Layouts",
    description: "Maintain reusable report layouts for recurring operational requirements.",
    labels: [
      "Reusable layouts",
      "Saved configuration",
      "Recurring reports",
      "Output structure"
    ]
  },
  {
    title: "Controlled Updates",
    description: "Update reusable template settings when reporting requirements change.",
    labels: [
      "Template updates",
      "Layout changes",
      "Configuration review",
      "Reusable structure"
    ]
  }
];

const OUTPUT_CARDS: OutputCard[] = [
  {
    title: "PDF Reports",
    description: "Create structured report documents for review, distribution and operational record requirements.",
    labels: ["Report presentation", "Branded layouts", "Structured documents", "Reusable templates"]
  },
  {
    title: "Excel Reports",
    description: "Generate spreadsheet outputs, including configured structures for selected reporting requirements.",
    labels: ["Excel export", "Custom Excel layouts", "Structured data", "Reusable output formats"]
  },
  {
    title: "CSV Exports",
    description: "Export structured report data for compatible operational and administrative workflows.",
    labels: ["CSV output", "Structured records", "Data review", "External workflows"]
  }
];

const PROGRESS_ITEMS: ValueCard[] = [
  {
    title: "Review Configuration",
    text: "Confirm the selected fields, filters, structure and output format before preparing the report.",
    icon: <Layers size={20} className="text-[#1267E5]" />
  },
  {
    title: "Prepare the Output",
    text: "Generate the required report from the configured operational information.",
    icon: <FileText size={20} className="text-[#1267E5]" />
  },
  {
    title: "Reuse the Report Setup",
    text: "Return to a saved configuration when the same reporting structure is required again.",
    icon: <Settings size={20} className="text-[#1267E5]" />
  }
];

const SPECIALIZED_CARDS: ValueCard[] = [
  {
    title: "Operational Reports",
    text: "Prepare structured reports around relevant flight and operational information.",
    icon: <FileText size={20} className="text-[#1267E5]" />
  },
  {
    title: "Crew & FTL Reports",
    text: "Use relevant crew, duty and FTL information in structured report outputs.",
    icon: <Users size={20} className="text-[#1267E5]" />
  },
  {
    title: "Fleet & Maintenance Reports",
    text: "Present relevant aircraft and maintenance information through configured report structures.",
    icon: <Layers size={20} className="text-[#1267E5]" />
  },
  {
    title: "Weekly Operational Layouts",
    text: "Use configurable weekly layouts where operational review requires a time-based report presentation.",
    icon: <Calendar size={20} className="text-[#1267E5]" />
  }
];

const PRESENTATION_CARDS: ValueCard[] = [
  {
    title: "English-First Product Interface",
    text: "Maintain a consistent English-language application experience across operational teams.",
    icon: <Globe size={20} className="text-[#1267E5]" />
  },
  {
    title: "Configurable Report Layouts",
    text: "Configure selected report structures, headers and presentation settings around documented requirements.",
    icon: <SlidersHorizontal size={20} className="text-[#1267E5]" />
  },
  {
    title: "Approved Branding Elements",
    text: "Apply approved airline branding elements to selected report layouts where configured.",
    icon: <Settings size={20} className="text-[#1267E5]" />
  }
];

const ROLE_CARDS: RoleCard[] = [
  {
    title: "Executive Management",
    description: "Review relevant operational information through consistent, configurable management reports.",
    areas: ["Operational overview", "Fleet information", "Reusable reports"]
  },
  {
    title: "Operations & Dispatch",
    description: "Prepare reports around trips, flight activity, operational records, delays, fuel and journey information.",
    areas: ["Flight operations", "Journey records", "Operational exports"]
  },
  {
    title: "Crew Planning",
    description: "Use relevant crew schedules, duties, qualifications and FTL information in report outputs.",
    areas: ["Crew activity", "Duty information", "FTL reports"]
  },
  {
    title: "Fleet & Maintenance Planning",
    description: "Review relevant aircraft, maintenance, AOG and fleet information through configured reporting workflows.",
    areas: ["Aircraft information", "Maintenance activity", "Fleet records"]
  },
  {
    title: "System Administration",
    description: "Configure report structures, templates, access and reusable output requirements.",
    areas: ["Report configuration", "Template management", "Output settings"]
  }
];

const CONNECTED_MODULES: ConnectedModule[] = [
  {
    title: "Flight Scheduling",
    text: "Use relevant planned and published schedule information in operational reports.",
    destination: "/platform/flight-scheduling"
  },
  {
    title: "Operations & Dispatch",
    text: "Report on relevant trip, dispatch, flight-execution and journey information.",
    destination: "/platform/operations-dispatch"
  },
  {
    title: "Crew Management & FTL",
    text: "Use relevant crew, duty, qualification and FTL information in report outputs.",
    destination: "/platform/crew-management-ftl"
  },
  {
    title: "Fleet & Maintenance Planning",
    text: "Prepare reports around relevant aircraft, fleet and maintenance information.",
    destination: "/platform/fleet-maintenance"
  },
  {
    title: "Integrations",
    text: "Extend selected reporting workflows through configured add-ons and separately assessed connections.",
    destination: "/platform/integrations"
  }
];

const CUSTOMIZATION_CARDS: ValueCard[] = [
  {
    title: "Custom Report Structures",
    text: "Configure relevant fields, columns and filters around specific operational reporting requirements.",
    icon: <Layers size={20} className="text-[#1267E5]" />
  },
  {
    title: "Reusable Templates",
    text: "Maintain repeatable report layouts and presentation structures for recurring workflows.",
    icon: <FileText size={20} className="text-[#1267E5]" />
  },
  {
    title: "Role-Based Reporting Access",
    text: "Configure relevant report access through users, groups and operational permissions.",
    icon: <Lock size={20} className="text-[#1267E5]" />
  },
  {
    title: "Tailored Output Requirements",
    text: "Evaluate specialized layouts, Excel structures and report presentation needs around the airline environment.",
    icon: <Settings size={20} className="text-[#1267E5]" />
  }
];

export default function ReportingAnalytics() {
  // SEO implementation with restoration on unmount
  useSEO({
    title: "Airline Reporting & Analytics Software | Joya Fleet",
    description: "Build configurable airline reports with configurable columns, filters, reusable templates and PDF, Excel and CSV outputs using Joya Fleet.",
    canonicalPath: "/platform/reporting-analytics",
    ogTitle: "Configurable Reporting for Connected Airline Operations",
    ogDescription: "Explore Joya Fleet reporting for custom report structures, reusable templates, operational filters and flexible export formats."
  });

  return (
    <MotionConfig reducedMotion="user">
      <div className="w-full pointer-events-auto bg-transparent min-h-screen text-gray-900 font-sans">
        
        {/* SECTION 1 — HERO */}
        <section id="hero" className="w-full min-h-screen relative isolate pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden flex flex-col items-center justify-center bg-[#071E3D] bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] text-white m-0">
          <HeroBackground />
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
            
            {/* Elegant Breadcrumb */}
            <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 mb-8 text-xs font-semibold text-blue-200 tracking-wider uppercase font-mono bg-[#1267E5]/20 backdrop-blur-md px-4 py-1.5 rounded-lg border border-[#38BDF8]/30 shadow-2xs">
              <Link to="/platform" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:outline-none rounded">Platform</Link>
              <ChevronRight size={10} aria-hidden="true" className="text-blue-300" />
              <span className="text-[#38BDF8] font-bold" aria-current="page">Reporting & Analytics</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 flex flex-col items-start text-left bg-white/95 backdrop-blur-2xl p-6 sm:p-10 lg:p-12 rounded-3xl border border-white/80 shadow-2xl shadow-[#071E3D]/40 text-gray-900">
                <span 
                  data-aos="fade-up"
                  data-aos-duration="400"
                  className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-5 font-mono"
                >
                  <BarChart3 size={12} aria-hidden="true" className="text-[#1267E5]" /> REPORTING & ANALYTICS
                </span>
                
                <h1 
                  data-aos="fade-up"
                  data-aos-duration="400"
                  className="text-4xl sm:text-6xl font-bold text-gray-950 tracking-tight leading-[1.1] mb-2"
                >
                  Build the report.
                </h1>
                <h2 
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay="40"
                  className="text-3xl sm:text-5xl font-bold text-[#1267E5] tracking-tight leading-tight mb-6"
                >
                  Keep the operational context.
                </h2>
                
                <p className="text-lg sm:text-xl text-gray-800 font-normal leading-relaxed mb-4 max-w-xl">
                  Turn connected flight, crew, fleet and operational information into configurable reports, reusable templates and structured exports.
                </p>
                
                <p className="text-base text-gray-600 font-normal leading-relaxed mb-8 max-w-lg">
                  Joya Fleet helps airline teams create reporting workflows around the information they need—without rebuilding the same report structure every time.
                </p>
                
                <div className="w-full">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
                    <Link
                      to="/contact?intent=demo&module=reporting-analytics"
                      className="bg-[#EE1C25] hover:bg-[#D4151D] text-white text-center font-bold px-8 py-3.5 rounded-lg text-base transition-all shadow-lg shadow-[#EE1C25]/25 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#EE1C25] focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      Request a Demo
                    </Link>
                    <Link
                      to="/platform"
                      className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 text-center font-semibold px-8 py-3.5 rounded-lg text-base transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 focus-visible:outline-none shadow-xs"
                    >
                      Explore the Platform
                    </Link>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-200/80 w-full">
                    {["Custom reports", "Configurable filters", "Reusable templates", "PDF, Excel & CSV"].map((tag) => (
                      <span key={tag} className="text-xs text-[#1267E5] font-semibold tracking-wide font-mono uppercase bg-[#1267E5]/5 px-2.5 py-0.5 rounded-md border border-[#1267E5]/15">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Premium Neutral Operational Visual Concept */}
              <div className="lg:col-span-5 w-full">
                <div className="bg-white/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[#1267E5]/20 shadow-xl overflow-hidden">
                  <div className="flex justify-between items-center border-b border-gray-200/80 pb-3 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#1267E5] uppercase font-bold">
                      REPORTING WORKSPACE
                    </span>
                  </div>
                  <ProductVisualFrame
                    id={REPORTING_VISUALS.reportingWorkspace.id}
                    title={REPORTING_VISUALS.reportingWorkspace.title}
                    description={REPORTING_VISUALS.reportingWorkspace.description}
                    aspectRatio={REPORTING_VISUALS.reportingWorkspace.aspectRatio}
                    alt={REPORTING_VISUALS.reportingWorkspace.alt}
                    imageUrl={REPORTING_VISUALS.reportingWorkspace.imageUrl}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2 — THE REPORTING CHALLENGE */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-12 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Activity size={12} className="text-[#1267E5]" aria-hidden="true" /> REPORTING AROUND THE OPERATION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Different teams need different views of the same operational information.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3">
                Leadership, operations, crew planning, dispatch and fleet teams often review different parts of the airline operation—but the underlying information should remain connected.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Joya Fleet supports reusable report structures so teams can organize relevant information without recreating the same reporting workflow from the beginning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CHALLENGE_CARDS.map((card, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/35 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="p-3 bg-[#1267E5]/10 border border-[#1267E5]/20 rounded-xl w-fit mb-5 text-[#1267E5]">
                      {card.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2.5">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 3 — QUICK REPORTS AND CUSTOM REPORTS */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <SlidersHorizontal size={12} className="text-[#1267E5]" aria-hidden="true" /> FROM STANDARD OUTPUTS TO CUSTOM REQUIREMENTS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Use a prepared report—or build around a specific operational question.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Joya Fleet supports both quick report workflows and configurable custom reports for more specific operational requirements.
              </p>
            </div>

            <div className="space-y-20">
              {CAPABILITIES.map((cap, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Visual Container */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} w-full`}>
                      <div className="bg-white/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[#1267E5]/20 shadow-xl overflow-hidden">
                        <div className="flex justify-between items-center border-b border-gray-200/80 pb-3 mb-5">
                          <span className="text-[10px] font-mono text-[#1267E5] uppercase font-bold">
                            {cap.title.toUpperCase()} VIEW
                          </span>
                          <span className="text-[10px] font-mono tracking-widest text-[#1267E5] uppercase font-bold">
                            REPORTING WORKSPACE CONTEXT
                          </span>
                        </div>
                        
                        <ProductVisualFrame
                          id={cap.visual.id}
                          title={cap.visual.title}
                          description={cap.visual.description}
                          aspectRatio={cap.visual.aspectRatio}
                          alt={cap.visual.alt}
                          imageUrl={cap.visual.imageUrl}
                        />
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} flex flex-col items-start`}>
                      <span className="text-xs font-bold text-[#1267E5] font-mono mb-2.5 uppercase tracking-wider">
                        REPORTING TYPE 0{idx + 1}
                      </span>
                      <h3 className="font-bold text-gray-900 text-2xl sm:text-3xl mb-3">
                        {cap.title}
                      </h3>
                      <p className="text-base text-gray-700 leading-relaxed mb-6">
                        {cap.description}
                      </p>

                      <div className="px-4 py-3 bg-white/80 backdrop-blur-md border-l-4 border-[#1267E5] text-xs text-gray-700 font-medium rounded-r-lg shadow-xs leading-relaxed mb-6">
                        {cap.businessValue}
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {cap.labels.map((lbl, lIdx) => (
                          <span key={lIdx} className="text-[10px] font-mono bg-[#1267E5]/10 border border-[#1267E5]/20 text-[#1267E5] font-semibold px-2.5 py-0.5 rounded">
                            {lbl}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* SECTION 4 — BUILD REPORTS AROUND RELEVANT INFORMATION */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-12 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Filter size={12} className="text-[#1267E5]" aria-hidden="true" /> CONFIGURABLE REPORT BUILDING
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Choose the information, structure and filters relevant to the report.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Create report configurations through a structured workflow for selecting fields, organizing columns and applying relevant operational filters.
              </p>
            </div>

            {/* Workflow Stages Sequence */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-10">
              {WORKFLOW_STAGES.map((stage, idx) => (
                <div key={idx} className="relative bg-white/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/35 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-mono text-[#1267E5] uppercase font-bold tracking-wider">STAGE {stage.step}</span>
                      {idx < 4 && (
                        <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-white p-1 rounded-full border border-[#1267E5]/30 shadow-xs text-[#1267E5] items-center justify-center">
                          <ArrowRight size={12} aria-hidden="true" />
                        </div>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {stage.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 5 — CONFIGURABLE COLUMNS AND FILTERS */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-12 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Layers size={12} className="text-[#1267E5]" aria-hidden="true" /> REPORT THE INFORMATION THAT MATTERS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Configure report structure without being limited to one fixed view.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Select relevant report columns and combine configurable filters around operational reporting requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {DYNAMIC_CARDS.map((card, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/35 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#1267E5] uppercase font-bold tracking-wider block mb-2.5">PARAMETER 0{idx + 1}</span>
                    <h3 className="font-bold text-gray-900 text-lg mb-2.5">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-5 py-4 bg-white/80 backdrop-blur-md border-l-4 border-[#1267E5] text-xs text-gray-700 font-medium rounded-r-xl shadow-xs leading-relaxed max-w-3xl">
              <strong className="text-gray-900">Operational Alignment:</strong> Flexible report configuration supports role-relevant operational review without changing the underlying connected information.
            </div>

          </div>
        </section>

        {/* SECTION 6 — REUSABLE REPORT TEMPLATES */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
              <div className="lg:col-span-5 grid grid-cols-1 gap-5">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                    <FileText size={12} className="text-[#1267E5]" aria-hidden="true" /> CONSISTENT REPORT PRESENTATION
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                    Create reusable templates around recurring reporting requirements.
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed mb-6">
                    Maintain report structures, presentation settings and reusable layouts for operational reports that need consistent output.
                  </p>
                </div>

                <div className="space-y-3.5">
                  {TEMPLATE_CAPABILITIES.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start p-4 sm:p-5 bg-white/80 backdrop-blur-md rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/35 hover:shadow-lg transition-all shadow-xs">
                      <div className="p-2.5 bg-[#1267E5]/10 border border-[#1267E5]/20 rounded-xl text-[#1267E5] shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base mb-1">{item.title}</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-white/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[#1267E5]/20 shadow-xl overflow-hidden">
                  <div className="flex justify-between items-center border-b border-gray-200/80 pb-3 mb-5">
                    <span className="text-[10px] font-mono text-[#1267E5] uppercase font-bold">
                      REPORT TEMPLATE WORKSPACE
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-[#1267E5] uppercase font-bold">
                      JOYA FLEET PRODUCT WORKSPACE
                    </span>
                  </div>

                  <ProductVisualFrame
                    id={REPORTING_VISUALS.reportTemplate.id}
                    title={REPORTING_VISUALS.reportTemplate.title}
                    description={REPORTING_VISUALS.reportTemplate.description}
                    aspectRatio={REPORTING_VISUALS.reportTemplate.aspectRatio}
                    alt={REPORTING_VISUALS.reportTemplate.alt}
                    imageUrl={REPORTING_VISUALS.reportTemplate.imageUrl}
                  >
                    {/* Subtle decorative operational template hierarchy graphic without fictional elements */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {Array.from({ length: 3 }).map((_, colIdx) => (
                        <div key={colIdx} className="space-y-1.5 bg-[#071B33]/60 p-2 rounded border border-[#1267E5]/30">
                          <div className="h-2 bg-[#1267E5]/50 rounded w-10/12" />
                          <div className="h-4 bg-[#39BFF8]/30 rounded w-full" />
                          <div className="h-1.5 bg-[#1267E5]/40 rounded w-6/12" />
                        </div>
                      ))}
                    </div>
                  </ProductVisualFrame>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 7 — TEMPLATE EDITING AND REUSABLE LAYOUTS */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-12 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Settings size={12} className="text-[#1267E5]" aria-hidden="true" /> CONTROLLED TEMPLATE MANAGEMENT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Configure and reuse report presentation across recurring requirements.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Joya Fleet supports configurable report-template settings, preview workflows and reusable layouts for structured report preparation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {EDITING_BLOCKS.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/35 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#1267E5] uppercase font-bold tracking-wider mb-2.5 block">CONTROL BLOCK 0{idx + 1}</span>
                    <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.labels.map((lbl, lIdx) => (
                        <span key={lIdx} className="text-[10px] font-mono bg-[#1267E5]/10 border border-[#1267E5]/20 text-[#1267E5] font-semibold px-2 py-0.5 rounded">
                          {lbl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 font-medium tracking-wide">
              * Template configuration is available according to assigned access permissions.
            </p>

          </div>
        </section>

        {/* SECTION 8 — OUTPUTS FOR DIFFERENT REPORTING REQUIREMENTS */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-12 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Download size={12} className="text-[#1267E5]" aria-hidden="true" /> MULTIPLE OUTPUT FORMATS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Prepare operational information in the format the workflow requires.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Generate report outputs for digital review, structured data workflows and repeatable operational documentation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {OUTPUT_CARDS.map((card, idx) => (
                <div 
                  key={idx}
                  className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/35 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#1267E5] uppercase font-bold tracking-wider block mb-2.5">FORMAT 0{idx + 1}</span>
                    <h3 className="font-bold text-gray-900 text-xl sm:text-2xl mb-2.5">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">
                      {card.description}
                    </p>
                  </div>
                  <div>
                    <div className="border-t border-gray-200/80 pt-3.5 flex flex-wrap gap-1.5">
                      {card.labels.map((lbl, lIdx) => (
                        <span key={lIdx} className="text-[10px] font-mono bg-[#1267E5]/10 border border-[#1267E5]/20 text-[#1267E5] font-semibold px-2.5 py-0.5 rounded">
                          {lbl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 9 — REPORT PREPARATION AND SAVED CONFIGURATIONS */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-12 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <SlidersHorizontal size={12} className="text-[#1267E5]" aria-hidden="true" /> STRUCTURED REPORT PREPARATION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Prepare report outputs through a controlled configuration workflow.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Review the report configuration, prepare the required output and reuse saved structures for recurring reporting requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROGRESS_ITEMS.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/35 hover:shadow-lg transition-all shadow-xs"
                >
                  <div className="p-3 bg-[#1267E5]/10 rounded-xl w-fit mb-5 text-[#1267E5] border border-[#1267E5]/20">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 10 — SPECIALIZED OPERATIONAL REPORTS */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-12 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <BarChart3 size={12} className="text-[#1267E5]" aria-hidden="true" /> REPORTS DESIGNED AROUND OPERATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Support recurring and specialized airline reporting requirements.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Use configurable templates and dedicated report structures for operational information that requires a specific presentation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SPECIALIZED_CARDS.map((card, idx) => (
                <div 
                  key={idx}
                  className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/35 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 bg-[#1267E5]/10 border border-[#1267E5]/20 rounded-xl w-fit mb-5 text-[#1267E5]">
                      {card.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2.5">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 11 — CONFIGURABLE REPORT PRESENTATION */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-12 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <FileText size={12} className="text-[#1267E5]" aria-hidden="true" /> CONFIGURABLE REPORT PRESENTATION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Keep report presentation aligned with operational requirements.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Joya Fleet provides an English-first interface with configurable report layouts, headers and approved presentation elements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PRESENTATION_CARDS.map((card, idx) => (
                <div 
                  key={idx}
                  className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/35 hover:shadow-lg transition-all shadow-xs"
                >
                  <div className="p-3 bg-[#1267E5]/10 rounded-xl w-fit mb-5 text-[#1267E5] border border-[#1267E5]/20">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 12 — REPORTING FOR DIFFERENT AIRLINE ROLES */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-12 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Users size={12} className="text-[#1267E5]" aria-hidden="true" /> ONE DATA FOUNDATION. DIFFERENT REPORTING NEEDS.
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Give each team the report structure relevant to its responsibilities.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Joya Fleet supports configurable reporting across leadership, operations, crew, fleet and administrative requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
              {ROLE_CARDS.map((role, idx) => (
                <div 
                  key={idx}
                  className="bg-white/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/35 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#1267E5] uppercase font-bold tracking-wider mb-2 block">ROLE FOCUS</span>
                    <h3 className="font-bold text-gray-900 text-lg mb-2.5">
                      {role.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-5">
                      {role.description}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#1267E5] tracking-wider uppercase block mb-2 font-mono">KEY OPERATIONAL AREAS</span>
                    <div className="flex flex-wrap gap-1.5">
                      {role.areas.map((area, aIdx) => (
                        <span key={aIdx} className="text-xs bg-[#1267E5]/10 text-[#1267E5] font-semibold px-2.5 py-0.5 rounded-md border border-[#1267E5]/20">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 13 — CONNECTED ACROSS THE PLATFORM */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-12 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Layers size={12} className="text-[#1267E5]" aria-hidden="true" /> CONNECTED OPERATIONAL REPORTING
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Reports remain connected to the workflows that create the information.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Flight schedules, operational records, crew activity and fleet information contribute to configurable reporting workflows, with integrations assessed separately.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
              {CONNECTED_MODULES.map((module, idx) => (
                <Link
                  key={idx}
                  to={module.destination}
                  className="bg-white/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between group focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:outline-none"
                >
                  <div>
                    <h3 className="font-bold text-gray-900 text-base group-hover:text-[#1267E5] transition-colors mb-2">
                      {module.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {module.text}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-[#1267E5] group-hover:translate-x-1 transition-transform motion-reduce:transition-none">
                    <span>View module</span>
                    <ArrowRight size={12} aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 14 — CONFIGURED AROUND YOUR REPORTING REQUIREMENTS */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                  <Sparkles size={12} className="text-[#1267E5]" aria-hidden="true" /> CONFIGURED FOR YOUR AIRLINE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                  Build report structures around the information your teams require.
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  Configure relevant columns, filters, templates, layouts, output formats and access responsibilities around airline reporting workflows.
                </p>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  {CUSTOMIZATION_CARDS.map((card, idx) => (
                    <div 
                      key={idx}
                      className="flex gap-3 items-start p-3.5 bg-white/80 backdrop-blur-md rounded-xl border border-[#1267E5]/15 hover:border-[#1267E5]/35 hover:shadow-md transition-all"
                    >
                      <div className="p-2 bg-[#1267E5]/10 border border-[#1267E5]/20 rounded-lg text-[#1267E5] shrink-0 mt-0.5">
                        {card.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1">{card.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{card.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact?intent=customization&module=reporting-analytics"
                  className="bg-[#1267E5] hover:bg-[#0E54BD] text-white font-bold px-7 py-3 rounded-lg text-sm transition-all shadow-lg shadow-[#1267E5]/25 text-center w-full sm:w-auto motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Discuss Your Reporting Requirements
                </Link>
              </div>

              <div className="lg:col-span-5 relative w-full h-[320px] bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#1267E5]/20 shadow-xl flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1267E5]/5 to-transparent pointer-events-none rounded-2xl" />
                
                <div className="flex justify-between items-start border-b border-gray-200/80 pb-3.5">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#1267E5] block uppercase font-bold">CONFIGURABLE LAYOUTS</span>
                    <span className="text-xs font-bold text-gray-900 font-mono tracking-tight uppercase">Configurable Report Requirements</span>
                  </div>
                  <Settings size={16} aria-hidden="true" className="text-[#1267E5]" />
                </div>

                <div className="my-4 flex-1 flex flex-col justify-center space-y-3">
                  <div className="h-2 w-11/12 bg-[#1267E5]/40 rounded" />
                  <div className="h-2 w-9/12 bg-[#39BFF8]/30 rounded" />
                  <div className="h-2 w-10/12 bg-[#1267E5]/30 rounded" />
                  <div className="h-2 w-7/12 bg-[#39BFF8]/20 rounded" />
                </div>

                <div className="border-t border-gray-200/80 pt-3 text-[10px] text-[#1267E5] font-mono font-semibold">
                  <span>CONFIGURABLE REPORTING CONTEXT</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 15 — PRODUCT VISUAL */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full text-center">
            
            <div className="max-w-3xl mx-auto mb-10 text-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <BarChart3 size={12} className="text-[#1267E5]" aria-hidden="true" /> SEE REPORTING IN CONTEXT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                One configurable workspace for report structure, filters, templates and outputs.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Review selected operational information through reusable reporting workflows configured around documented airline requirements.
              </p>
            </div>

            {/* Configurable future approved product visual */}
            <div className="bg-white/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[#1267E5]/20 shadow-xl overflow-hidden max-w-5xl mx-auto">
              <div className="flex justify-between items-center border-b border-gray-200/80 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-[#1267E5] uppercase font-bold">
                  REPORTING & ANALYTICS WORKSPACE
                </span>
              </div>

              <ProductVisualFrame
                id={REPORTING_VISUALS.reportingWorkspace.id}
                title={REPORTING_VISUALS.reportingWorkspace.title}
                description={REPORTING_VISUALS.reportingWorkspace.description}
                aspectRatio={REPORTING_VISUALS.reportingWorkspace.aspectRatio}
                alt={REPORTING_VISUALS.reportingWorkspace.alt}
                imageUrl={REPORTING_VISUALS.reportingWorkspace.imageUrl}
              >
                {/* Subtle decorative operational graphics without fictional elements */}
                <div className="space-y-2 pt-2">
                  <div className="h-2 w-11/12 bg-[#1267E5]/60 rounded" />
                  <div className="h-2 w-10/12 bg-[#39BFF8]/40 rounded" />
                  <div className="h-2 w-7/12 bg-[#1267E5]/40 rounded" />
                </div>
              </ProductVisualFrame>
            </div>

          </div>
        </section>

        {/* SECTION 16 — FINAL CTA */}
        <section id="reporting-analytics-cta-section" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#071B33] to-[#040E1A] text-white border-t border-[#1267E5]/30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#1267E5]/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="px-5 sm:px-8 max-w-5xl mx-auto w-full text-center relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/20 text-[#39BFF8] border border-[#1267E5]/40 rounded-lg text-xs font-bold uppercase tracking-widest mb-5 font-mono">
              <Radio size={12} className="text-[#39BFF8]" aria-hidden="true" /> CONNECTED AIRLINE REPORTING & ANALYTICS
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Build reports around the way your airline operates.
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              See how Joya Fleet can support configurable reports, reusable templates, operational filters and structured PDF, Excel and CSV outputs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-6">
              <Link
                to="/contact?intent=demo&module=reporting-analytics"
                className="bg-[#EE1C25] hover:bg-[#D4151D] text-white font-bold px-7 py-3 rounded-lg text-sm shadow-xl shadow-[#EE1C25]/25 text-center w-full sm:w-auto whitespace-nowrap focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071B33] focus-visible:outline-none"
              >
                Request a Demo
              </Link>
            </div>

            <p className="text-xs text-gray-400 font-medium tracking-wide">
              Cloud deployment • Migration assessment • Role-based training • Support under an agreed plan
            </p>
          </div>
        </section>

      </div>
    </MotionConfig>
  );
}
