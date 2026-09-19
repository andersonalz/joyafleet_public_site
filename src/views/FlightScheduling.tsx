"use client";

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from '../components/RouterLink';
import { motion, AnimatePresence, MotionConfig } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import { HeroBackground } from '../components/HeroBackground';
import {
  Calendar,
  Compass,
  Sliders,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Sparkles,
  Plane,
  Clock3,
  Upload,
  Maximize2,
  X
} from 'lucide-react';

// Product screenshot placeholder definition
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
  aspectRatio?: "16:9" | "16:10";
  alt: string;
  imageUrl?: string;
}

export function ProductVisualFrame({
  id,
  title,
  description,
  aspectRatio = "16:10",
  alt,
  imageUrl
}: ProductVisualFrameProps) {
  const aspectClass = aspectRatio === "16:9" ? "aspect-[16/9]" : "aspect-[16/10]";
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!isExpanded) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsExpanded(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isExpanded]);

  if (imageUrl) {
    return (
      <>
        <button type="button" onClick={() => setIsExpanded(true)} className="group relative block w-full overflow-hidden rounded-lg border border-[#1267E5]/35 bg-white p-[2px] text-left shadow-[0_5px_18px_rgba(18,103,229,.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2" aria-label={`Enlarge ${title}`}>
          <img id={id} src={imageUrl} alt={alt} referrerPolicy="no-referrer" className={`block w-full h-auto object-cover rounded-[5px] ${aspectClass}`} />
          <span className="absolute inset-[2px] grid place-items-center rounded-[5px] bg-[#071E3D]/0 opacity-0 transition-all duration-200 group-hover:bg-[#071E3D]/35 group-hover:opacity-100 group-focus-visible:bg-[#071E3D]/35 group-focus-visible:opacity-100"><span className="inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 text-xs font-bold text-[#071E3D] shadow-lg"><Maximize2 size={15} aria-hidden="true" /> Enlarge image</span></span>
        </button>
        {typeof document !== 'undefined' && createPortal(
          <AnimatePresence>
            {isExpanded && <motion.div role="dialog" aria-modal="true" aria-label={`Enlarged ${title}`} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071B33]/88 p-5 sm:p-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsExpanded(false)}>
              <motion.div className="relative w-full max-w-[min(92vw,1600px)]" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} onClick={(event) => event.stopPropagation()}>
                <button type="button" onClick={() => setIsExpanded(false)} aria-label="Close enlarged image" autoFocus className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-[#071B33]/90 text-white shadow-lg transition-colors hover:bg-[#1267E5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2"><X size={20} aria-hidden="true" /></button>
                <img src={imageUrl} alt={alt} referrerPolicy="no-referrer" className="max-h-[84vh] w-full rounded-lg border border-white/55 bg-white p-[2px] object-contain shadow-2xl" />
              </motion.div>
            </motion.div>}
          </AnimatePresence>,
          document.body
        )}
      </>
    );
  }

  return (
    <div
      id={id}
      role="img"
      aria-label={alt}
      className={`bg-[#071B33] text-white rounded-xl ${aspectClass} p-6 flex flex-col justify-between relative overflow-hidden border border-[#1267E5]/30`}
    >
      <div className="absolute inset-0 bg-radial-gradient from-[#1267E5]/15 to-transparent pointer-events-none" />

      <div className="z-10 flex justify-between items-start">
        <div>
          <span className="text-[9px] font-mono tracking-widest text-[#39BFF8] block uppercase mb-0.5">
            SCHEDULE WORKSPACE
          </span>
          <h4 className="text-xs font-bold text-white tracking-wide uppercase font-mono">
            {title}
          </h4>
        </div>
        <span className="text-[8px] font-mono border border-[#1267E5]/40 px-1.5 py-0.5 rounded bg-[#1267E5]/20 text-[#39BFF8] uppercase">
          JoyaFleet
        </span>
      </div>

      <div className="my-4 flex-1 flex flex-col justify-center space-y-3 z-10">
        <p className="text-[11px] text-gray-200 font-medium leading-relaxed max-w-sm">
          {description}
        </p>
        <div className="space-y-1.5 pt-2">
          <div className="h-1.5 w-11/12 bg-[#0D2E55] rounded" />
          <div className="h-1.5 w-8/12 bg-[#0D2E55] rounded" />
        </div>
      </div>

      <div className="border-t border-[#1267E5]/20 pt-3 flex justify-between items-center text-[9px] text-[#39BFF8] font-mono z-10">
        <span>JOYAFLEET PRODUCT WORKSPACE</span>
        <span>CONNECTED FLIGHT CONTEXT</span>
      </div>
    </div>
  );
}

const FLIGHT_SCHEDULING_VISUALS: Record<string, ProductVisual> = {
  recurring: {
    id: "recurring-schedule",
    title: "Recurring Schedule Planning View",
    description: "Recurring schedules across selected dates, operating days, rotations, aircraft assignments and route information.",
    aspectRatio: "16:10",
    alt: "Product visual reserved for the JoyaFleet recurring flight schedule planner interface",
    imageUrl: "/images/recurring-schedule-interface.png"
  },
  adhoc: {
    id: "adhoc-schedule",
    title: "Schedule Selection Controls View",
    description: "Select flights through date, day, state, aircraft, route and tag filters.",
    aspectRatio: "16:10",
    alt: "Joya Fleet select flights dialog",
    imageUrl: "/images/schedule-selection-interface.png"
  },
  timezone: {
    id: "timezone-planning",
    title: "Schedule Import & Export View",
    description: "Export schedule options with source selection, date-range filtering and XLSX download controls.",
    aspectRatio: "16:10",
    alt: "Joya Fleet schedule export dialog",
    imageUrl: "/images/schedule-import-export-interface.png"
  },
  classification: {
    id: "schedule-classification",
    title: "Publish Schedule Flights View",
    description: "Select draft flights, set trip type and publish approved flights into the operational schedule.",
    aspectRatio: "16:10",
    alt: "Joya Fleet publish schedule flights dialog",
    imageUrl: "/images/schedule-publishing-interface.png"
  },
  workspace: {
    id: "scheduling-workspace",
    title: "JoyaFleet Flight Scheduling Workspace",
    description: "A scheduling workspace for recurring and ad-hoc flights, aircraft context, route information and draft or published schedules.",
    aspectRatio: "16:9",
    alt: "Joya Fleet flight scheduling workspace",
    imageUrl: "/images/scheduling-workspace-interface.png"
  }
};

interface CapabilityBlock {
  title: string;
  description: string;
  points: string[];
  visual: ProductVisual;
}

interface ProcessItem {
  title: string;
  text: string;
}

interface WorkflowStage {
  step: string;
  title: string;
  text: string;
}

interface ConnectedStage {
  title: string;
  text: string;
}

interface VisibilityCard {
  title: string;
  text: string;
}

interface ConfigurationPoint {
  title: string;
  text: string;
}

export default function FlightScheduling() {
  // Page SEO Metadata Setup
  useSEO({
    title: "Flight Scheduling Software | JoyaFleet Flight Operations Platform",
    description: "JoyaFleet Flight Scheduling Software helps aviation teams manage recurring schedules, ad-hoc flights, aircraft assignments, schedule changes and connected operational workflows.",
    canonicalPath: "/platform/flight-scheduling",
    ogTitle: "JoyaFleet Flight Scheduling Software",
    ogDescription: "Manage recurring and ad-hoc flight schedules with aircraft context, operational visibility and connected workflows."
  });

  // Capabilities Data
  const capabilities: CapabilityBlock[] = [
    {
      title: "The integrated solution for large scale scheduling",
      description: "We have designed the SCHED module with airlines in mind. SCHED helps to streamline the complex process of planning and managing airline schedules.",
      points: [
        "Airline-focused scheduling",
        "Connected planning workspace",
        "Large-scale schedule management",
        "Operational consistency"
      ],
      visual: FLIGHT_SCHEDULING_VISUALS.recurring
    },
    {
      title: "Simple Schedule Controls",
      description: "Manage schedules with simple controls for selecting, deleting, adding, updating and multi-selecting schedule items in one clear workspace.",
      points: [
        "Simple schedule selection",
        "Add schedule items",
        "Update schedule details",
        "Delete and multi-select"
      ],
      visual: FLIGHT_SCHEDULING_VISUALS.adhoc
    },
    {
      title: "Import Export",
      description: "Import and export schedules from and to SSIM and XLS files. When changes are made to a previously uploaded schedule, the new upload replaces the existing schedule information.",
      points: [
        "SSIM imports",
        "XLS imports",
        "Schedule exports",
        "Replacement updates"
      ],
      visual: FLIGHT_SCHEDULING_VISUALS.timezone
    },
    {
      title: "Publishing flights",
      description: "Publish approved schedule versions into operational flights when the planning review is complete, keeping schedule changes controlled and visible to operations teams.",
      points: [
        "Approved schedule versions",
        "Controlled publishing",
        "Operational flight creation",
        "Visible schedule changes"
      ],
      visual: FLIGHT_SCHEDULING_VISUALS.classification
    }
  ];

  // Bulk workflow items
  const bulkProcessItems: ProcessItem[] = [
    {
      title: "Create in Bulk",
      text: "Build multiple scheduled flights across selected periods and operating patterns."
    },
    {
      title: "Update in Bulk",
      text: "Apply relevant schedule changes across multiple selected flights through controlled planning workflows."
    },
    {
      title: "Review and Remove",
      text: "Filter, review and remove selected schedule records when operational plans change."
    }
  ];

  // Draft, Review, and Publish stages
  const workflowStages: WorkflowStage[] = [
    {
      step: "01",
      title: "Draft",
      text: "Prepare and update scheduled flying activity before it becomes part of the active operational plan."
    },
    {
      step: "02",
      title: "Review",
      text: "Validate required schedule information and review planned flights before publication."
    },
    {
      step: "03",
      title: "Publish",
      text: "Turn approved scheduled flights into connected operational trips for the next stage of airline activity."
    }
  ];

  // Connected to Operations stages
  const connectedStages: ConnectedStage[] = [
    {
      title: "Schedule",
      text: "Create and publish the planned flying program."
    },
    {
      title: "Trip",
      text: "Continue with connected operational flight information."
    },
    {
      title: "Aircraft & Crew",
      text: "Coordinate fleet availability and crew requirements."
    },
    {
      title: "Dispatch & Execution",
      text: "Support operational checks, flight activity and journey records."
    },
    {
      title: "Reporting",
      text: "Use completed operational information in configurable reports."
    }
  ];

  // Visibility Cards
  const visibilityCards: VisibilityCard[] = [
    {
      title: "Date-Based Planning",
      text: "Review scheduled activity across relevant operational periods."
    },
    {
      title: "Aircraft Visibility",
      text: "Filter schedules around selected aircraft and planned assignments."
    },
    {
      title: "Airport Visibility",
      text: "Review flying activity connected to selected departure and destination airports."
    },
    {
      title: "Schedule History",
      text: "Maintain a record of relevant schedule changes for clearer operational traceability."
    }
  ];

  // Customization Configuration Points
  const configurationPoints: ConfigurationPoint[] = [
    {
      title: "Operational Configuration",
      text: "Configure relevant schedule settings around the requirements of the airline operation."
    },
    {
      title: "Role-Based Access",
      text: "Organize planning access and responsibilities around users, teams and permission groups."
    },
    {
      title: "Connected Reporting",
      text: "Use scheduled and operational information in configurable reports and export workflows."
    },
    {
      title: "Tailored Integration Requirements",
      text: "Evaluate additional data connections around specific airline planning requirements."
    }
  ];

  // Interactive timeline state for Section 6
  const [activeConnectedIndex, setActiveConnectedIndex] = useState<number>(0);
  const [activeCapabilityIndex, setActiveCapabilityIndex] = useState<number>(0);
  const timelineStart = 100;
  const timelineWidth = 800;
  const timelineProgressX = timelineStart + (
    activeConnectedIndex / Math.max(connectedStages.length - 1, 1)
  ) * timelineWidth;
  const mobileTimelineProgressY = 20 + (
    activeConnectedIndex / Math.max(connectedStages.length - 1, 1)
  ) * 960;
  return (
    <MotionConfig reducedMotion="user">
      <div className="w-full pointer-events-auto min-h-screen font-sans text-gray-900">
        
        {/* SECTION 1 — HERO */}
        <section id="hero" className="w-full min-h-screen relative isolate pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden flex flex-col items-center justify-center bg-[#071E3D] bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] text-white m-0">
          <HeroBackground />
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
            
            <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
              <div data-aos="fade-right" data-aos-duration="800" className="lg:col-span-5 xl:col-span-5">
                <nav aria-label="Breadcrumb" className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#38BDF8]/30 bg-[#1267E5]/20 px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-blue-200 shadow-2xs backdrop-blur-md">
                  <Link to="/platform" className="rounded transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]">Platform</Link>
                  <ChevronRight size={10} aria-hidden="true" className="text-blue-300" />
                  <span className="font-bold text-[#38BDF8]">Flight Scheduling</span>
                </nav>
                <h1 className="max-w-xl text-5xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl xl:text-7xl">
                  Flight Scheduling Software
                </h1>
                <p className="mt-3 max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-[#38B2F6] sm:text-5xl xl:text-6xl">
                  From Planning to Operations
                </p>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-sky-50 sm:text-lg">
                  Create and manage recurring and ad-hoc flight schedules with aircraft context, route information, airport details and operational visibility.
                </p>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-sky-100/75 sm:text-base">
                  Give your planning teams a structured workflow to create, review, update and publish schedules into daily flight operations.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link to="/contact?intent=demo&module=flight-scheduling" className="rounded-lg bg-[#EE1C25] px-7 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-[#EE1C25]/30 transition-colors hover:bg-[#D4151D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                    Request a Scheduling Demo
                  </Link>
                  <Link to="/platform" className="inline-flex items-center justify-center gap-2 rounded-lg border border-sky-100/80 bg-white px-7 py-3.5 text-sm font-bold text-[#071E3D] shadow-lg transition-colors hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                    Explore the Platform <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div data-aos="fade-left" data-aos-duration="900" className="relative mx-auto w-full max-w-4xl lg:col-span-7 xl:col-span-7">
                <svg className="pointer-events-none absolute -inset-8 hidden h-[calc(100%+4rem)] w-[calc(100%+4rem)] lg:block" viewBox="0 0 1000 620" fill="none" aria-hidden="true">
                  <defs>
                    <filter id="scheduleGlow"><feGaussianBlur stdDeviation="4" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                  </defs>
                  <path d="M48 172C116 90 212 94 267 148" stroke="#39BFF8" strokeWidth="2" strokeDasharray="5 8" opacity=".85">
                    <animate attributeName="stroke-dashoffset" values="0;-52" dur="3s" repeatCount="indefinite" />
                  </path>
                  <path d="M610 75C748 1 865 38 930 122" stroke="#C7F1FF" strokeWidth="2" strokeDasharray="5 8" opacity=".9">
                    <animate attributeName="stroke-dashoffset" values="0;-52" dur="3s" repeatCount="indefinite" />
                  </path>
                  <path d="M776 503C866 494 915 449 937 377" stroke="#39BFF8" strokeWidth="2" strokeDasharray="5 8" opacity=".75">
                    <animate attributeName="stroke-dashoffset" values="0;-52" dur="3.4s" repeatCount="indefinite" />
                  </path>
                  <circle cx="267" cy="148" r="5" fill="#39BFF8" filter="url(#scheduleGlow)"><animate attributeName="r" values="4;8;4" dur="1.5s" repeatCount="indefinite" /></circle>
                  <circle cx="610" cy="75" r="5" fill="#39BFF8" filter="url(#scheduleGlow)"><animate attributeName="r" values="4;8;4" dur="1.8s" repeatCount="indefinite" /></circle>
                  <path d="M744 49l19 15-19 15 5-15-5-15Z" fill="white"><animateTransform attributeName="transform" type="translate" values="0 0;18 8;0 0" dur="2.4s" repeatCount="indefinite" /></path>
                </svg>
                <div className="relative overflow-hidden rounded-2xl border border-[#57C5FF]/85 bg-[#071E3D] p-1 shadow-[0_0_0_2px_rgba(57,191,248,.18),0_0_42px_rgba(18,103,229,.7)]">
                  <div className="absolute inset-0 animate-pulse bg-[#39BFF8]/10 blur-xl" aria-hidden="true" />
                  <div className="relative overflow-hidden rounded-xl bg-white">
                    <div className="flex h-11 items-center justify-between bg-[#062A61] px-4 text-[10px] font-bold text-white sm:h-13 sm:px-6 sm:text-xs">
                      <span className="text-lg tracking-tight sm:text-2xl">JOYA</span>
                      <span className="hidden items-center gap-4 text-sky-100 md:flex"><Calendar size={13} /> SCHED <span>OPS</span><span>CREW</span><span>REPORTS</span></span>
                      <span className="rounded-md bg-white/15 px-2 py-1">DD</span>
                    </div>
                    <div className="relative">
                      <img src="/images/flight-scheduling-interface.png" alt="Joya Fleet flight scheduling dashboard" className="block w-full" />
                      <div className="absolute inset-y-0 left-[56%] w-[2px] bg-[#159AF5] shadow-[0_0_14px_4px_rgba(21,154,245,.55)]">
                        <span className="absolute -left-4 top-[18%] rounded-md bg-[#1267E5] px-2 py-1 text-[8px] font-bold text-white shadow-lg sm:text-[10px]">NOW 10:24</span>
                        <span className="absolute -left-1 top-[17%] h-3 w-3 rounded-full bg-[#39BFF8] ring-4 ring-[#39BFF8]/25"><span className="absolute inset-0 animate-ping rounded-full bg-[#39BFF8]" /></span>
                      </div>
                      <motion.div animate={{ scale: [1, 1.06, 1], opacity: [.84, 1, .84] }} transition={{ duration: 2.2, repeat: Infinity }} className="absolute left-[36%] top-[34%] rounded-md border border-[#39BFF8] bg-[#1267E5] px-3 py-1 text-[9px] font-bold text-white shadow-[0_0_20px_rgba(18,103,229,.9)]">SIH → DXB</motion.div>
                      <div className="absolute left-[45%] top-[46%] hidden rounded-lg bg-white p-3 text-[10px] text-[#10233F] shadow-xl md:block">
                        <strong className="block">EP-SIH</strong><strong>THR → DXB</strong><span className="mt-1 block text-slate-500">13 Aug 2025<br />06:30 – 10:15</span><span className="mt-2 inline-block rounded bg-emerald-100 px-1.5 py-0.5 text-[8px] text-emerald-700">Scheduled</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-slate-200 px-3 py-2 text-[8px] text-slate-500 sm:px-5 sm:text-[10px]">
                      <span className="font-semibold">52 flights</span><span className="hidden items-center gap-3 sm:flex"><i className="h-2 w-2 rounded-full bg-[#159AF5]" /> Scheduled <i className="h-2 w-2 rounded-full bg-slate-300" /> Draft <i className="h-2 w-2 rounded-full bg-rose-400" /> Conflict</span><button type="button" className="rounded border border-[#1267E5] px-2 py-1 font-bold text-[#1267E5]">New Schedule</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 border-t border-sky-200/20 pt-7 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-4">
                {[
                  [Calendar, 'Recurring & Ad-hoc', 'Flexible scheduling'],
                  [Plane, 'Aircraft Roster', 'Full fleet visibility'],
                  [Clock3, 'Conflict Detection', 'Reduce operational risks'],
                  [Upload, 'Draft & Publish', 'Controlled workflow']
                ].map(([Icon, title, description]) => {
                  const FeatureIcon = Icon as typeof Calendar;
                  return <div key={title as string} className="flex items-center gap-3 rounded-xl bg-white/5 p-3 text-left"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-sky-300/25 bg-[#1267E5]/15 text-[#39BFF8]"><FeatureIcon size={19} /></span><span><strong className="block text-sm text-white">{title as string}</strong><small className="text-xs text-sky-100/65">{description as string}</small></span></div>;
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — THE PLANNING CHALLENGE / DEEP DIVE */}
        <section id="schedule-deep-dive" className="py-20 sm:py-28">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div 
              data-aos="fade-up"
              data-aos-duration="700"
              className="max-w-3xl mb-16 text-left"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4">
                A CLEARER PLANNING ENVIRONMENT
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-black tracking-tight mb-6">
                Manage complex flight schedules with connected operational context.
              </h2>
              <p className="text-lg text-black font-medium leading-relaxed">
                Flight schedules change frequently due to aircraft availability, operational requirements, airport constraints and timing considerations. JoyaFleet keeps planning information structured and connected.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="0"
                className="bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#1267E5]/10 flex items-center justify-center text-[#1267E5] mb-6">
                    <Calendar size={20} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-3">
                    One Shared Schedule
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Manage recurring and ad-hoc flight activity through one structured scheduling environment.
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="120"
                className="bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#1267E5]/10 flex items-center justify-center text-[#1267E5] mb-6">
                    <Sliders size={20} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-3">
                    Controlled Schedule Changes
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Update planned flights through controlled workflows while keeping schedule information visible.
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="240"
                className="bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#1267E5]/10 flex items-center justify-center text-[#1267E5] mb-6">
                    <Compass size={20} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-3">
                    Connected Handover
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Move approved schedules into operational workflows without losing important planning context.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 3 — SCHEDULE THE WAY YOUR AIRLINE OPERATES */}
        <section className="py-20 sm:py-32">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div 
              data-aos="fade-up"
              data-aos-duration="700"
              className="max-w-3xl mb-20 text-left"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4">
                FLEXIBLE FLIGHT PLANNING
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Create and manage flight schedules from one connected workspace.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                JoyaFleet supports structured flight scheduling across operating days, date ranges, rotations, aircraft assignments, routes and airport information.
              </p>
            </div>

            <div className="rounded-3xl border border-[#1267E5]/20 bg-white/65 p-4 shadow-[0_18px_45px_rgba(7,30,61,.08)] backdrop-blur-md sm:p-6 lg:p-8">
              <div role="tablist" aria-label="Flight scheduling capabilities" className="mb-7 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {capabilities.map((cap, index) => {
                  const isActive = index === activeCapabilityIndex;
                  return (
                    <button key={cap.title} type="button" role="tab" aria-selected={isActive} onClick={() => setActiveCapabilityIndex(index)} className={`min-w-max rounded-lg border px-4 py-2.5 text-left text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] ${isActive ? 'border-[#1267E5] bg-[#1267E5] text-white shadow-lg shadow-[#1267E5]/20' : 'border-[#1267E5]/15 bg-white/70 text-gray-600 hover:border-[#1267E5]/45 hover:text-[#1267E5]'}`}>
                      <span className="mr-2 font-mono text-[10px] opacity-70">0{index + 1}</span>{cap.title}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                {(() => {
                  const cap = capabilities[activeCapabilityIndex];
                  return (
                    <motion.div key={cap.title} role="tabpanel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.28 }} className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                      <div className="lg:col-span-5">
                        <p className="font-mono text-[11px] font-bold uppercase tracking-[.16em] text-[#1267E5]">Scheduling capability · 0{activeCapabilityIndex + 1}</p>
                        <h3 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{cap.title}</h3>
                        <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">{cap.description}</p>
                        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {cap.points.map((point) => <div key={point} className="flex items-center gap-2.5 text-sm font-semibold text-gray-800"><span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-[#1267E5]/10"><Check size={13} className="text-[#1267E5]" aria-hidden="true" /></span>{point}</div>)}
                        </div>
                        <div className="mt-7 inline-flex rounded-r bg-white/80 px-4 py-2 text-xs font-medium text-gray-700 shadow-2xs border-l-2 border-[#1267E5]">Structured flight planning context</div>
                      </div>
                      <div className="lg:col-span-7">
                        <ProductVisualFrame id={cap.visual.id} title={cap.visual.title} description={cap.visual.description} aspectRatio={cap.visual.aspectRatio} alt={cap.visual.alt} imageUrl={cap.visual.imageUrl} />
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>

              <div className="mt-7 flex items-center justify-between border-t border-[#1267E5]/15 pt-5">
                <button type="button" onClick={() => setActiveCapabilityIndex((activeCapabilityIndex - 1 + capabilities.length) % capabilities.length)} className="inline-flex items-center gap-2 rounded-lg border border-[#1267E5]/20 bg-white px-3 py-2 text-xs font-bold text-[#1267E5] transition-colors hover:bg-[#1267E5] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5]"><ChevronLeft size={16} /> Previous</button>
                <span className="font-mono text-xs font-bold text-gray-500">{activeCapabilityIndex + 1} / {capabilities.length}</span>
                <button type="button" onClick={() => setActiveCapabilityIndex((activeCapabilityIndex + 1) % capabilities.length)} className="inline-flex items-center gap-2 rounded-lg border border-[#1267E5] bg-[#1267E5] px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-[#0E55C5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5]">Next <ChevronRight size={16} /></button>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4 — MANAGE CHANGE AT SCALE */}
        <section className="py-20 sm:py-28">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div 
              data-aos="fade-up"
              data-aos-duration="700"
              className="max-w-3xl mb-16 text-left"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4">
                BUILT FOR OPERATIONAL CHANGE
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Manage schedule updates efficiently as operations change.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Planning teams can review and update selected scheduled flights through structured workflows designed to reduce repetitive schedule administration.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
              
              <div className="lg:col-span-5 space-y-6">
                {bulkProcessItems.map((item, index) => (
                  <div 
                    key={index} 
                    data-aos="fade-up"
                    data-aos-duration="650"
                    data-aos-delay={index * 100}
                    className="flex gap-4 items-start bg-white/70 backdrop-blur-md p-6 rounded-xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs"
                  >
                    <span className="w-8 h-8 rounded-lg bg-[#1267E5] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Before-and-After operational track visual representation */}
              <div 
                data-aos="fade-left"
                data-aos-duration="800"
                className="lg:col-span-7 bg-gradient-to-b from-[#071B33] to-[#0D2E55] text-white rounded-2xl p-8 sm:p-12 border border-[#1267E5]/30 shadow-2xl relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#39BFF8]/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1267E5]/20 rounded-full blur-[80px] pointer-events-none" />
                
                <div className="mb-8 flex justify-between items-center border-b border-white/10 pb-4 relative z-10">
                  <span className="text-[10px] font-mono tracking-widest text-[#39BFF8] uppercase">BULK SCHEDULE WORKFLOW</span>
                  <span className="text-[10px] font-mono text-[#39BFF8] bg-[#1267E5]/30 px-2.5 py-0.5 rounded border border-[#39BFF8]/30 uppercase font-semibold">
                    Selected Schedule Records
                  </span>
                </div>

                <div className="space-y-6 my-4 relative z-10">
                  {/* Traditional fragmented updates */}
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono text-gray-400 block uppercase">Manual Fragmented Updates</span>
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-red-300">
                      <div className="p-2.5 border border-red-500/30 bg-red-950/40 rounded-lg">Update Flight 1</div>
                      <div className="p-2.5 border border-red-500/30 bg-red-950/40 rounded-lg">Update Flight 2</div>
                      <div className="p-2.5 border border-red-500/30 bg-red-950/40 rounded-lg">Update Flight 3</div>
                    </div>
                  </div>

                  <div className="flex justify-center py-1">
                    <RefreshCw size={14} className="text-[#39BFF8]" aria-hidden="true" />
                  </div>

                  {/* Structured change framework */}
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono text-[#39BFF8] block uppercase font-semibold">JoyaFleet Bulk Change Workflow</span>
                    <div className="p-4 bg-[#1267E5]/20 border border-[#39BFF8]/40 text-[#39BFF8] rounded-xl text-center text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                      Selected Schedule Records Updated Through One Controlled Workflow
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 mt-6 flex justify-between items-start text-[11px] text-gray-300 leading-relaxed font-mono relative z-10">
                  <span className="text-[#39BFF8]">Structured bulk schedule updates</span>
                  <span className="text-gray-400">Bulk tools are designed to reduce repetitive schedule administration while keeping changes visible and controlled.</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 5 — DRAFT, REVIEW, AND PUBLISH */}
        <section className="py-20 sm:py-28">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div 
              data-aos="fade-up"
              data-aos-duration="700"
              className="max-w-3xl mb-16 text-left"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4">
                CONTROLLED SCHEDULE WORKFLOWS
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Plan first. Review clearly. Publish with operational context.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                JoyaFleet separates schedule preparation from published operational activity, helping teams review planned flights before they become part of the operational workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {workflowStages.map((stage, sIdx) => (
                <div 
                  key={stage.step} 
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay={sIdx * 120}
                  className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between text-left"
                >
                  <div>
                    <span className="text-3xl font-extrabold text-[#1267E5] font-mono block mb-6">{stage.step}</span>
                    <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-3">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {stage.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div 
              data-aos="zoom-in-up"
              data-aos-duration="650"
              className="bg-white/80 border border-[#1267E5]/20 p-6 rounded-2xl max-w-3xl mx-auto text-center backdrop-blur-sm shadow-xs"
            >
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic font-medium">
                Relevant planning information continues into the operational workflow so approved flight context remains connected across planning and operations.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 6 — CONNECTED TO OPERATIONS */}
        <section className="relative overflow-hidden py-20 sm:py-28">
          
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full relative z-10">
            
            <div 
              data-aos="fade-up"
              data-aos-duration="700"
              className="max-w-3xl mb-16 text-left"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/20 text-[#39BFF8] border border-[#1267E5]/30 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                FROM SCHEDULE TO OPERATION
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black mb-6">
                The schedule is the beginning of the operational workflow—not the end of it.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Published schedules provide the foundation for trip preparation, aircraft coordination, crew planning, dispatch activities and operational flight records.
              </p>
            </div>

            {/* Desktop horizontal flow sequence */}
            <div 
              data-aos="fade-up"
              data-aos-duration="750"
              className="hidden md:block relative mb-12"
            >
              <svg
                className="pointer-events-none absolute inset-x-0 top-0 h-10 w-full"
                viewBox="0 0 1000 40"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line x1="100" y1="20" x2="900" y2="20" stroke="#1267E5" strokeOpacity="0.28" strokeWidth="2" />
                <motion.line
                  x1={timelineStart}
                  y1="20"
                  initial={{ x2: timelineStart }}
                  animate={{ x2: timelineProgressX }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  y2="20"
                  stroke="#39BFF8"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              <div className="grid grid-cols-5 relative z-10">
                {connectedStages.map((stage, cIdx) => {
                  const isActive = cIdx === activeConnectedIndex;
                  const isComplete = cIdx <= activeConnectedIndex;
                  return (
                    <button
                      key={cIdx}
                      type="button"
                      onClick={() => setActiveConnectedIndex(cIdx)}
                      aria-pressed={isActive}
                      className="flex flex-col items-center text-center group cursor-pointer rounded-xl focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071B33] focus-visible:outline-none"
                    >
                      <svg className="mb-4 h-10 w-10 overflow-visible" viewBox="0 0 40 40" aria-hidden="true">
                        <motion.circle
                          cx="20"
                          cy="20"
                          r="17"
                          animate={{
                            fill: isComplete ? '#1267E5' : '#071B33',
                            stroke: isActive ? '#39BFF8' : '#1267E5',
                            strokeOpacity: isActive ? 1 : 0.42,
                          }}
                          transition={{ duration: 0.35 }}
                          strokeWidth={isActive ? 2.5 : 1.5}
                        />
                        {isActive && <circle cx="20" cy="20" r="19" fill="none" stroke="#39BFF8" strokeOpacity="0.28" strokeWidth="2" />}
                        <text x="20" y="24" textAnchor="middle" fill={isComplete ? 'white' : '#94A3B8'} fontSize="10" fontWeight="700">
                          {`0${cIdx + 1}`}
                        </text>
                      </svg>
                      <h3 className={`text-xs font-bold tracking-tight mb-2 transition-colors ${
                        isActive ? 'text-[#1267E5]' : isComplete ? 'text-[#1267E5]/75' : 'text-gray-500 group-hover:text-[#1267E5]'
                      }`}>
                        {stage.title}
                      </h3>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Desktop active item description box */}
            <div 
              data-aos="zoom-in"
              data-aos-duration="600"
              className="hidden md:block bg-[#0A2240] border border-[#1267E5]/40 rounded-xl p-8 max-w-2xl mx-auto mb-12 shadow-xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeConnectedIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <h3 className="text-xl font-bold text-white mb-3">
                    {connectedStages[activeConnectedIndex].title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {connectedStages[activeConnectedIndex].text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile vertical SVG timeline */}
            <div className="block md:hidden relative mb-12">
              <svg
                className="pointer-events-none absolute left-0 top-0 h-full w-10"
                viewBox="0 0 40 1000"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line x1="20" y1="20" x2="20" y2="980" stroke="#1267E5" strokeOpacity="0.28" strokeWidth="2" />
                <motion.line
                  x1="20"
                  y1="20"
                  x2="20"
                  initial={{ y2: 20 }}
                  animate={{ y2: mobileTimelineProgressY }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  stroke="#39BFF8"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              <div className="space-y-5">
              {connectedStages.map((stage, idx) => {
                const isActive = idx === activeConnectedIndex;
                const isComplete = idx <= activeConnectedIndex;
                return (
                <button
                  key={idx} 
                  type="button"
                  onClick={() => setActiveConnectedIndex(idx)}
                  aria-pressed={isActive}
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={idx * 80}
                  className="flex w-full gap-4 relative z-10 text-left rounded-xl focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071B33] focus-visible:outline-none"
                >
                  <svg className="relative z-10 h-10 w-10 shrink-0 overflow-visible" viewBox="0 0 40 40" aria-hidden="true">
                    <motion.circle
                      cx="20"
                      cy="20"
                      r="17"
                      animate={{
                        fill: isComplete ? '#1267E5' : '#071B33',
                        stroke: isActive ? '#39BFF8' : '#1267E5',
                        strokeOpacity: isActive ? 1 : 0.42,
                      }}
                      transition={{ duration: 0.35 }}
                      strokeWidth={isActive ? 2.5 : 1.5}
                    />
                    <text x="20" y="24" textAnchor="middle" fill={isComplete ? 'white' : '#94A3B8'} fontSize="10" fontWeight="700">
                      {`0${idx + 1}`}
                    </text>
                  </svg>
                  <div className={`flex-1 rounded-xl border p-5 transition-colors ${
                    isActive ? 'border-[#39BFF8]/70 bg-[#0A2240]' : 'border-[#1267E5]/30 bg-[#0A2240]/85'
                  }`}>
                    <h3 className="text-sm font-bold text-white mb-1">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {stage.text}
                    </p>
                  </div>
                </button>
              )})}
              </div>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-center"
            >
              <Link
                to="/platform/operations-dispatch"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#39BFF8] hover:text-white group transition-colors focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071B33] focus-visible:outline-none rounded"
              >
                Explore Operations & Dispatch
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>

          </div>
        </section>

        {/* SECTION 7 — PLANNING VISIBILITY */}
        <section className="py-20 sm:py-28">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div 
              data-aos="fade-up"
              data-aos-duration="700"
              className="max-w-3xl mb-16 text-left"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                CLEARER SCHEDULE VISIBILITY
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Maintain visibility across planned flight activity.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Review schedules through operational filters and maintain visibility into planned activities and schedule changes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {visibilityCards.map((card, cIdx) => (
                <div 
                  key={cIdx}
                  data-aos="fade-up"
                  data-aos-duration="650"
                  data-aos-delay={cIdx * 90}
                  className="bg-white/70 backdrop-blur-md p-6 rounded-xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between text-left"
                >
                  <div>
                    <h3 className="font-bold text-gray-900 text-base mb-3">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 8 — BUILT AROUND YOUR PLANNING PROCESS */}
        <section className="py-20 sm:py-28">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div 
              data-aos="fade-up"
              data-aos-duration="700"
              className="max-w-3xl mb-16 text-left"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                CONFIGURED FOR YOUR OPERATION
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Configure scheduling workflows around your operational requirements.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                JoyaFleet can be configured around operational structures, user responsibilities, reporting requirements and documented integration needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {configurationPoints.map((point, index) => (
                <div 
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="650"
                  data-aos-delay={index * 90}
                  className="flex flex-col text-left bg-white/80 backdrop-blur-md p-6 rounded-xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs"
                >
                  <span className="w-8 h-8 rounded-lg bg-[#1267E5] text-white flex items-center justify-center font-bold text-xs mb-4">
                    0{index + 1}
                  </span>
                  <h3 className="font-bold text-gray-900 text-base mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            <div 
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-center pt-4"
            >
              <Link
                to="/contact?intent=customization&module=flight-scheduling"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1267E5] hover:bg-[#0E54BD] text-white font-bold rounded-lg text-sm sm:text-base transition-colors group shadow-lg shadow-[#1267E5]/25 focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Discuss Your Scheduling Requirements
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>

          </div>
        </section>

        {/* SECTION 9 — PRODUCT VISUAL */}
        <section className="py-20 sm:py-28">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div 
              data-aos="fade-up"
              data-aos-duration="700"
              className="max-w-3xl mb-16 text-left mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                SEE THE SCHEDULE IN CONTEXT
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                A clearer view of planned flying activity.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Review recurring flights, ad-hoc activity, aircraft assignments and operational schedule information in one connected planning environment.
              </p>
            </div>

            <div 
              data-aos="zoom-in"
              data-aos-duration="850"
              className="max-w-5xl mx-auto"
            >
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-[#1267E5]/20 shadow-xl overflow-hidden p-6">
                <div className="flex justify-between items-center border-b border-gray-200 pb-3.5 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#1267E5] uppercase font-bold">
                    JoyaFleet
                  </span>
                </div>

                <ProductVisualFrame
                  id={FLIGHT_SCHEDULING_VISUALS.workspace.id}
                  title={FLIGHT_SCHEDULING_VISUALS.workspace.title}
                  description={FLIGHT_SCHEDULING_VISUALS.workspace.description}
                  aspectRatio={FLIGHT_SCHEDULING_VISUALS.workspace.aspectRatio}
                  alt={FLIGHT_SCHEDULING_VISUALS.workspace.alt}
                  imageUrl={FLIGHT_SCHEDULING_VISUALS.workspace.imageUrl}
                />
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 10 — FINAL CTA WITH AVIATION THEME */}
        <section id="flight-scheduling-cta-section" className="py-20 sm:py-28 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-5xl mx-auto w-full">
            <div 
              className="aviation-cta-bg relative overflow-hidden rounded-3xl p-8 sm:p-14 text-white border border-[#1267E5]/30 shadow-2xl text-center"
            >
              {/* Background glowing decorations */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#39BFF8]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1267E5]/25 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/30 text-[#39BFF8] border border-[#1267E5]/40 rounded-lg text-xs font-bold uppercase tracking-widest mb-6 font-mono">
                  <Sparkles size={12} className="text-[#39BFF8]" aria-hidden="true" /> CONNECTED FLIGHT SCHEDULING
                </span>

                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                  Improve your flight scheduling workflow.
                </h2>
                <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed mb-10">
                  See how JoyaFleet can support recurring schedules, ad-hoc planning, schedule updates and connected flight operations.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 w-full sm:max-w-md mx-auto mb-8">
                  <Link
                    to="/contact?intent=demo&module=flight-scheduling"
                    className="bg-[#EE1C25] hover:bg-[#D4151D] text-white text-center font-bold px-8 py-3.5 rounded-lg text-sm sm:text-base shadow-lg shadow-[#EE1C25]/25 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071B33] focus-visible:outline-none"
                  >
                    Request a Demo
                  </Link>
                </div>

                <p className="text-xs text-gray-300 font-medium tracking-wide">
                  Cloud deployment • Migration assessment • Role-based training • Support under an agreed plan
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </MotionConfig>
  );
}
