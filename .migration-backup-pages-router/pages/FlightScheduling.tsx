import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, MotionConfig } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import { HeroBackground } from '../components/HeroBackground';
import {
  Calendar,
  Compass,
  Sliders,
  ArrowRight,
  Check,
  ChevronRight,
  RefreshCw,
  Sparkles
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

  if (imageUrl) {
    return (
      <img
        id={id}
        src={imageUrl}
        alt={alt}
        referrerPolicy="no-referrer"
        className={`w-full h-auto object-cover rounded-xl border border-[#1267E5]/20 shadow-xs ${aspectClass}`}
      />
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
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80"
  },
  adhoc: {
    id: "adhoc-schedule",
    title: "Ad-Hoc Flight Planning View",
    description: "Individual non-recurring flights with route, airport, aircraft, tag and schedule information.",
    aspectRatio: "16:10",
    alt: "Product visual reserved for the JoyaFleet ad-hoc flight planner interface",
    imageUrl: "https://images.unsplash.com/photo-1519074069444-1ba4eae16748?auto=format&fit=crop&w=1200&q=80"
  },
  timezone: {
    id: "timezone-planning",
    title: "Route & Time-Zone Planning View",
    description: "Departure, destination and alternate-airport information with time-zone-aware planning.",
    aspectRatio: "16:10",
    alt: "Product visual reserved for the JoyaFleet route and time-zone planner interface",
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
  },
  classification: {
    id: "schedule-classification",
    title: "Schedule Organization & Visibility View",
    description: "Schedule status, configurable tags and aircraft or airport filters for reviewing planned activity.",
    aspectRatio: "16:10",
    alt: "Product visual reserved for the JoyaFleet schedule classification and filters interface",
    imageUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80"
  },
  workspace: {
    id: "scheduling-workspace",
    title: "JoyaFleet Flight Scheduling Workspace",
    description: "A scheduling workspace for recurring and ad-hoc flights, aircraft context, route information and draft or published schedules.",
    aspectRatio: "16:9",
    alt: "Product visual reserved for the JoyaFleet flight scheduling workspace interface",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=1200&q=80"
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
      title: "Recurring Flight Programs",
      description: "Build schedules across selected date ranges and operating days while keeping repeated flight information organized within a consistent planning structure.",
      points: [
        "Date ranges",
        "Operating days",
        "Schedule rotations",
        "Aircraft assignment"
      ],
      visual: FLIGHT_SCHEDULING_VISUALS.recurring
    },
    {
      title: "Ad-Hoc Flight Planning",
      description: "Add non-recurring flights and operational schedule changes without separating them from the wider planning environment.",
      points: [
        "Ad-hoc flights",
        "Route information",
        "Airport selection",
        "Aircraft assignment"
      ],
      visual: FLIGHT_SCHEDULING_VISUALS.adhoc
    },
    {
      title: "Route and Time-Zone Context",
      description: "Plan with connected departure, destination, alternate-airport and time-zone information across the flying program.",
      points: [
        "Departure airport",
        "Destination airport",
        "Alternate airports",
        "Time-zone-aware planning"
      ],
      visual: FLIGHT_SCHEDULING_VISUALS.timezone
    },
    {
      title: "Schedule Organization & Visibility",
      description: "Use schedule status, operational information and configurable tags to organize and review planned flying activity.",
      points: [
        "Flight status",
        "Schedule tags",
        "Aircraft filters",
        "Airport filters"
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

  return (
    <MotionConfig reducedMotion="user">
      <div className="w-full pointer-events-auto min-h-screen font-sans text-gray-900">
        
        {/* SECTION 1 — HERO */}
        <section id="hero" className="w-full min-h-screen relative isolate pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden flex flex-col items-center justify-center bg-[#071E3D] bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] text-white m-0">
          <HeroBackground />
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
            
            {/* Elegant Breadcrumb */}
            <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 mb-8 text-xs font-semibold text-blue-200 tracking-wider uppercase font-mono bg-[#1267E5]/20 backdrop-blur-md px-4 py-1.5 rounded-lg border border-[#38BDF8]/30 shadow-2xs">
              <Link to="/platform" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:outline-none rounded">Platform</Link>
              <ChevronRight size={10} aria-hidden="true" className="text-blue-300" />
              <span className="text-[#38BDF8] font-bold">Flight Scheduling</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              <div 
                data-aos="fade-right"
                data-aos-duration="800"
                className="lg:col-span-7 flex flex-col items-start text-left bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/80 shadow-2xl shadow-[#071E3D]/40 text-gray-900"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-6">
                  <Calendar size={12} className="text-[#1267E5]" aria-hidden="true" /> FLIGHT SCHEDULING MODULE
                </span>
                
                <h1 className="text-4xl sm:text-6xl font-bold text-gray-950 tracking-tight leading-[1.1] mb-2">
                  Flight Scheduling Software
                </h1>
                <h2 className="text-3xl sm:text-5xl font-bold text-[#1267E5] tracking-tight leading-tight mb-6">
                  From Planning to Operations
                </h2>
                
                <p className="text-lg sm:text-xl text-gray-800 font-normal leading-relaxed mb-4 max-w-xl">
                  Create and manage recurring and ad-hoc flight schedules with aircraft context, route information, airport details and operational visibility.
                </p>
                
                <p className="text-base text-gray-600 font-normal leading-relaxed mb-8 max-w-lg">
                  JoyaFleet provides flight planning teams with a structured scheduling environment to create, review, update and transition approved schedules into daily flight operations.
                </p>
                
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
                  <Link
                    to="/contact?intent=demo&module=flight-scheduling"
                    className="bg-[#EE1C25] hover:bg-[#D4151D] text-white text-center font-bold px-8 py-3.5 rounded-lg text-base transition-colors shadow-lg shadow-[#EE1C25]/25 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#EE1C25] focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    Request a Scheduling Demo
                  </Link>
                  <Link
                    to="/platform"
                    className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 text-center font-semibold px-8 py-3.5 rounded-lg text-base transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 focus-visible:outline-none shadow-xs"
                  >
                    Explore the Platform
                  </Link>
                </div>
                
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-mono">
                  Recurring Schedules • Ad-Hoc Flights • Schedule Updates • Draft & Publish Workflow
                </p>
              </div>

              {/* Premium Aviation Scheduling visual concept */}
              <div 
                data-aos="fade-left"
                data-aos-duration="850"
                data-aos-delay="150"
                className="lg:col-span-5 w-full"
              >
                <div className="relative rounded-2xl overflow-hidden border border-[#1267E5]/30 bg-[#071B33] shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80" 
                    alt="Flight Schedule Graphic (Joya Schedule Sequence)" 
                    className="w-full h-auto object-cover max-h-[420px] opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B33]/80 via-transparent to-transparent pointer-events-none" />
                </div>
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

            <div className="space-y-32">
              {capabilities.map((cap, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div 
                    key={index} 
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                  >
                    
                    {/* Content block */}
                    <div 
                      data-aos={isEven ? "fade-right" : "fade-left"}
                      data-aos-duration="750"
                      className={`lg:col-span-6 flex flex-col items-start ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                    >
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                        {cap.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                        {cap.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 w-full mb-8">
                        {cap.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex gap-2.5 items-center text-sm font-semibold text-gray-800">
                            <div className="w-5 h-5 rounded-md bg-[#1267E5]/10 flex items-center justify-center shrink-0">
                              <Check size={13} className="text-[#1267E5]" aria-hidden="true" />
                            </div>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                      <div className="px-4 py-2 bg-white/80 border-l-2 border-[#1267E5] text-xs text-gray-700 font-medium rounded-r shadow-2xs">
                        Structured flight planning context
                      </div>
                    </div>

                    {/* Configurable Visual Container */}
                    <div 
                      data-aos={isEven ? "fade-left" : "fade-right"}
                      data-aos-duration="800"
                      data-aos-delay="100"
                      className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} w-full`}
                    >
                      <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#1267E5]/20 shadow-sm overflow-hidden">
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
                          id={cap.visual.id}
                          title={cap.visual.title}
                          description={cap.visual.description}
                          aspectRatio={cap.visual.aspectRatio}
                          alt={cap.visual.alt}
                          imageUrl={cap.visual.imageUrl}
                        />
                      </div>
                    </div>

                  </div>
                );
              })}
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
        <section className="py-20 sm:py-28 bg-[#071B33] text-white border-t border-b border-[#1267E5]/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#1267E5]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#39BFF8]/15 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full relative z-10">
            
            <div 
              data-aos="fade-up"
              data-aos-duration="700"
              className="max-w-3xl mb-16 text-left"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/20 text-[#39BFF8] border border-[#1267E5]/30 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                FROM SCHEDULE TO OPERATION
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                The schedule is the beginning of the operational workflow—not the end of it.
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Published schedules provide the foundation for trip preparation, aircraft coordination, crew planning, dispatch activities and operational flight records.
              </p>
            </div>

            {/* Desktop horizontal flow sequence */}
            <div 
              data-aos="fade-up"
              data-aos-duration="750"
              className="hidden md:block relative mb-12"
            >
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#1267E5]/30 -translate-y-1/2 z-0" />
              
              <div className="grid grid-cols-5 gap-4 relative z-10">
                {connectedStages.map((stage, cIdx) => {
                  const isActive = cIdx === activeConnectedIndex;
                  return (
                    <button
                      key={cIdx}
                      type="button"
                      onClick={() => setActiveConnectedIndex(cIdx)}
                      aria-pressed={isActive}
                      className="flex flex-col items-center text-center group cursor-pointer rounded-xl focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071B33] focus-visible:outline-none"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border transition-all mb-4 ${
                        isActive 
                          ? 'bg-[#1267E5] text-white border-[#39BFF8] shadow-lg shadow-[#1267E5]/40 ring-2 ring-[#39BFF8]/40' 
                          : 'bg-[#071B33] text-gray-400 border-[#1267E5]/30 group-hover:border-[#39BFF8]/60'
                      }`}>
                        0{cIdx + 1}
                      </div>
                      <h3 className={`text-xs font-bold tracking-tight mb-2 transition-colors ${
                        isActive ? 'text-[#39BFF8]' : 'text-gray-400 group-hover:text-gray-200'
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

            {/* Mobile vertical representation */}
            <div className="block md:hidden space-y-6 relative mb-12">
              <div className="absolute top-0 left-5 w-[1px] h-full bg-[#1267E5]/30 z-0" />
              
              {connectedStages.map((stage, idx) => (
                <div 
                  key={idx} 
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={idx * 80}
                  className="flex gap-4 relative z-10"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs bg-[#1267E5] text-white border border-[#39BFF8]/40 shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1 bg-[#0A2240] border border-[#1267E5]/30 rounded-xl p-5 text-left">
                    <h3 className="text-sm font-bold text-white mb-1">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {stage.text}
                    </p>
                  </div>
                </div>
              ))}
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
