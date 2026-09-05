"use client";

import { useState } from 'react';
import Link from '../components/RouterLink';
import { motion, AnimatePresence, MotionConfig } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import { HeroBackground } from '../components/HeroBackground';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Workflow,
  Sparkles,
  Radio
} from 'lucide-react';

// Workflow visual placeholder definition
interface ProductVisual {
  id: string;
  title: string;
  description: string;
  aspectRatio: '16:9' | '16:10';
  alt: string;
  imageUrl?: string;
}


const OPERATIONS_VISUALS: Record<string, ProductVisual> = {
  tripmgmt1: {
    id: "tripmgmt-operations",
    title: "Trip & Multi-Leg Operations View",
    description: "Workflow representation of trip management workflows including individual flights, connected multi-leg trips and operational information.",
    aspectRatio: "16:10",
    alt: "Workflow representation of trip management workflows including individual flights, connected multi-leg trips and operational information",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80"
  },
  tripmgmt2: {
    id: "coordination-operations",
    title: "Aircraft & Crew Coordination View",
    description: "Workflow representation of aircraft and crew information connected to operational flight records.",
    aspectRatio: "16:10",
    alt: "Workflow representation of aircraft and crew information connected to operational flight records",
    imageUrl: "https://images.unsplash.com/photo-1519074069444-1ba4eae16748?auto=format&fit=crop&w=1200&q=80"
  },
  tripmgmt3: {
    id: "route-operations",
    title: "Operational Route Information View",
    description: "Workflow representation of route information, airport details and operational trip context.",
    aspectRatio: "16:10",
    alt: "Workflow representation of route information, airport details and operational trip context",
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
  },
  tripmgmt4: {
    id: "context-operations",
    title: "Trip Information & Supporting Records View",
    description: "Workflow representation of supporting trip records, notes, attachments and operational context.",
    aspectRatio: "16:10",
    alt: "Workflow representation of supporting trip records, notes, attachments and operational context",
    imageUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80"
  },
  dispatchWorkspace: {
    id: "dispatch-workspace",
    title: "Dispatch Release Workflow Overview",
    description: "Workflow representation of dispatch preparation, configurable checks, approval steps and operational release records.",
    aspectRatio: "16:9",
    alt: "Workflow representation of dispatch release activities, operational checks, approvals and release records.",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=1200&q=80"
  },
  journeyRecords: {
    id: "journey-records",
    title: "Journey Records Workflow Overview",
    description: "Workflow representation of completed flight records, journey history, actual times, fuel information and operational data.",
    aspectRatio: "16:10",
    alt: "Workflow representation of journey records, completed flights and operational history.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
  },
  operationsWorkspace: {
    id: "operations-workspace",
    title: "Operations & Dispatch Workflow Overview",
    description: "Workflow representation of trip management, dispatch activities, operational records and completed flight information.",
    aspectRatio: "16:9",
    alt: "Workflow representation of operations coordination, dispatch activities and operational records",
    imageUrl: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1200&q=80"
  }
};

interface CapabilityBlock {
  title: string;
  description: string;
  points: string[];
  visual: ProductVisual;
}

interface ValueCard {
  title: string;
  text: string;
}

interface OperationalGroup {
  title: string;
  description: string;
  points: string[];
}

interface DispatchStage {
  number: string;
  title: string;
  text: string;
  statusLabel: string;
  statusBg: string;
  statusText: string;
}

interface DispatchCapability {
  title: string;
  text: string;
}

interface ExecutionStage {
  number: string;
  title: string;
  text: string;
}

interface LargeRecordCard {
  title: string;
  description: string;
  points: string[];
}

interface TraceabilityCard {
  title: string;
  text: string;
}

interface RoleCard {
  title: string;
  description: string;
  points: string[];
}

interface ConnectedModule {
  title: string;
  text: string;
  path: string;
}

interface ConfigCard {
  title: string;
  text: string;
}

export default function OperationsDispatch() {
  // Page SEO Metadata Setup
  useSEO({
    title: "Flight Operations & Dispatch Software | JoyaFleet Flight Management Platform",
    description: "JoyaFleet Flight Operations & Dispatch Software connects operational trips, dispatch workflows, flight records, journey history and reporting within a cloud-based Flight Management Software platform.",
    canonicalPath: "/platform/operations-dispatch",
    ogTitle: "JoyaFleet Flight Operations & Dispatch Software",
    ogDescription: "Manage operational trips, dispatch workflows, flight records and journey information through one connected aviation operations platform."
  });

  const [activeExecutionIndex, setActiveExecutionIndex] = useState(0);

  // Challenge Cards (Section 2)
  const valueCards: ValueCard[] = [
    {
      title: "Connected Trip Information",
      text: "Keep route, aircraft, crew and operational flight information available within the same trip workflow."
    },
    {
      title: "Structured Operational Coordination",
      text: "Support clearer handovers between planning, operations, dispatch and flight crew."
    },
    {
      title: "Connected Operational Records",
      text: "Maintain flight activity, actual times, delays, fuel information and journey records in connected operational history."
    }
  ];

  // Trip Management Capability Blocks (Section 3)
  const tripCapabilities: CapabilityBlock[] = [
    {
      title: "Single-Leg and Multi-Leg Trips",
      description: "Organize operational flying activity across individual flights or connected multi-leg trip structures.",
      points: [
        "Single-leg operations",
        "Multi-leg trips",
        "Connected flight records",
        "Operational status"
      ],
      visual: OPERATIONS_VISUALS.tripmgmt1
    },
    {
      title: "Aircraft and Crew Coordination",
      description: "Keep assigned aircraft and crew information connected to the relevant operational flight record.",
      points: [
        "Aircraft assignment",
        "Crew assignment",
        "Aircraft information",
        "Operational crew records"
      ],
      visual: OPERATIONS_VISUALS.tripmgmt2
    },
    {
      title: "Route and Operational Information",
      description: "Maintain departure, destination, alternate-airport, flight-rule and operational information within the connected trip workflow.",
      points: [
        "Departure airport",
        "Destination airport",
        "Alternate airports",
        "Flight rules"
      ],
      visual: OPERATIONS_VISUALS.tripmgmt3
    },
    {
      title: "Notes, Tags and Supporting Records",
      description: "Organize relevant operational context through trip tags, notes, attachments and supporting flight information.",
      points: [
        "Operational notes",
        "Trip tags",
        "Attachments",
        "Supporting records"
      ],
      visual: OPERATIONS_VISUALS.tripmgmt4
    }
  ];

  // Operational Context Groups (Section 4)
  const operationalGroups: OperationalGroup[] = [
    {
      title: "Flight Information",
      description: "Maintain relevant operational flight status, route information and execution records within the trip.",
      points: [
        "Flight status",
        "Flight rules",
        "Operational timeline",
        "Flight records"
      ]
    },
    {
      title: "Aircraft and Crew Information",
      description: "Keep relevant aircraft, crew and qualification information connected to the operational flight record.",
      points: [
        "Aircraft assignments",
        "Crew assignments",
        "Qualifications and endorsements"
      ]
    },
    {
      title: "Delay Information",
      description: "Capture relevant delay classifications and duration as part of the completed operational record.",
      points: [
        "Delay codes",
        "Delay duration",
        "Operational notes"
      ]
    },
    {
      title: "Documents and Attachments",
      description: "Keep supporting operational documents and attachments connected with the relevant trip and flight activity.",
      points: [
        "Attachments",
        "Operational records",
        "Supporting documents"
      ]
    }
  ];

  // Dispatch Release Stages (Section 5)
  const dispatchStages: DispatchStage[] = [
    {
      number: "01",
      title: "Prepare",
      text: "Create and review the operational release record with relevant flight information and configured checks.",
      statusLabel: "DRAFT",
      statusBg: "bg-gray-100 border-gray-300 text-gray-700",
      statusText: "Drafting Release"
    },
    {
      number: "02",
      title: "Dispatch",
      text: "Complete dispatcher responsibilities and record relevant operational information.",
      statusLabel: "DISPATCHED",
      statusBg: "bg-amber-50 border-amber-300 text-amber-700",
      statusText: "Ready for Crew"
    },
    {
      number: "03",
      title: "Review & Release",
      text: "Support accountable review and approval by authorized operational roles and flight crew.",
      statusLabel: "RELEASED",
      statusBg: "bg-emerald-50 border-emerald-300 text-emerald-700",
      statusText: "Approved Release"
    },
    {
      number: "04",
      title: "Return for Review",
      text: "Record a rejection reason when information requires additional operational review.",
      statusLabel: "REJECTED",
      statusBg: "bg-rose-50 border-rose-300 text-rose-700",
      statusText: "Needs Attention"
    }
  ];

  // Dispatch Capabilities (Section 5)
  const dispatchCapabilities: DispatchCapability[] = [
    {
      title: "Configurable Checks",
      text: "Configure dispatch checklist requirements around operator procedures."
    },
    {
      title: "Accountable Approvals",
      text: "Maintain dispatcher and captain approval information with relevant timestamps."
    },
    {
      title: "Operational Sign-Off",
      text: "Support dispatcher and captain signatures within the release workflow."
    },
    {
      title: "Release Documentation",
      text: "Generate a structured Dispatch Release record for operational access and documentation."
    }
  ];

  // Execution Stages (Section 6)
  const executionStages: ExecutionStage[] = [
    {
      number: "01",
      title: "Operational Status",
      text: "Maintain the relevant flight status throughout the operational lifecycle."
    },
    {
      number: "02",
      title: "Ground Movement",
      text: "Capture block-off, door and other relevant operational ground-event times."
    },
    {
      number: "03",
      title: "Flight Activity",
      text: "Record take-off, landing and relevant execution information."
    },
    {
      number: "04",
      title: "Fuel & Delay Records",
      text: "Maintain relevant fuel information, delay classifications and supporting operational context."
    },
    {
      number: "05",
      title: "Journey Completion",
      text: "Complete the journey record and retain operational information for history and reporting."
    }
  ];

  // Actual Times, Fuel, and Journey Cards (Section 7)
  const largeRecordCards: LargeRecordCard[] = [
    {
      title: "Actual Flight Times",
      description: "Record relevant operational events including block-off, take-off, landing, block-on and door activity.",
      points: [
        "Block off",
        "Take off",
        "Landing",
        "Block on",
        "Door events"
      ]
    },
    {
      title: "Fuel Records",
      description: "Maintain relevant fuel uplift, ramp fuel, fuel-used and remaining-fuel information within the operational record.",
      points: [
        "Fuel uplift",
        "Ramp fuel",
        "Fuel used",
        "Remaining fuel"
      ]
    },
    {
      title: "Delays and Diversions",
      description: "Document relevant delay information, operational reasons and diversion activity as part of the completed flight record.",
      points: [
        "Delay codes",
        "Delay duration",
        "Diversion records",
        "Operational notes"
      ]
    },
    {
      title: "Journey Logs",
      description: "Complete and retain journey information as part of the connected operational history.",
      points: [
        "Journey records",
        "Operational history",
        "Supporting information",
        "Report-ready data"
      ]
    }
  ];

  // Operational Traceability Cards (Section 8)
  const traceabilityCards: TraceabilityCard[] = [
    {
      title: "Timeline View",
      text: "Review operational activity within a connected time-based presentation."
    },
    {
      title: "Table View",
      text: "Work with structured operational records and relevant flight information."
    },
    {
      title: "Calendar View",
      text: "Review operational activity across relevant dates and planning periods."
    },
    {
      title: "Trip & Flight History",
      text: "Maintain visibility into relevant operational changes and historical records."
    }
  ];

  // Role Cards (Section 9)
  const roleCards: RoleCard[] = [
    {
      title: "Executive Management",
      description: "Maintain clearer oversight through connected operational activity, fleet information and configurable reporting.",
      points: [
        "Operational visibility",
        "Fleet activity",
        "Reports"
      ]
    },
    {
      title: "Operations Teams",
      description: "Coordinate trips, aircraft, crews, operational records and daily flight activity.",
      points: [
        "Trip management",
        "Flight status",
        "Operational records"
      ]
    },
    {
      title: "Dispatch",
      description: "Work with flight information, configurable checks, dispatch release activities and accountable operational records.",
      points: [
        "Dispatch checklists",
        "Release workflow",
        "Operational documentation"
      ]
    },
    {
      title: "Flight Crew",
      description: "Access relevant schedules, flight information, dispatch releases and required operational records.",
      points: [
        "Flight information",
        "Dispatch Release",
        "Journey records"
      ]
    }
  ];

  // Connected Module Links (Section 10)
  const connectedModules: ConnectedModule[] = [
    {
      title: "Flight Scheduling",
      text: "Move approved schedules into connected operational trips.",
      path: "/platform/flight-scheduling"
    },
    {
      title: "Crew Management & FTL",
      text: "Coordinate crew assignments, duties, qualifications and flight-time limitations.",
      path: "/platform/crew-management-ftl"
    },
    {
      title: "Fleet & Maintenance Planning",
      text: "Keep aircraft availability and maintenance activity visible alongside operations.",
      path: "/platform/fleet-maintenance"
    },
    {
      title: "Reporting & Analytics",
      text: "Use completed operational records in configurable reports and exports.",
      path: "/platform/reporting-analytics"
    },
    {
      title: "Integrations",
      text: "Extend selected operational workflows through configured add-ons and separately assessed connections.",
      path: "/platform/integrations"
    }
  ];

  // Customization Cards (Section 11)
  const configCards: ConfigCard[] = [
    {
      title: "Configurable Operational Workflows",
      text: "Adapt selected operational processes and settings around department requirements."
    },
    {
      title: "Dispatch Configuration",
      text: "Configure relevant checklist, release and operational requirements around operator procedures."
    },
    {
      title: "Granular Access",
      text: "Organize operational responsibilities through users, groups and permissions."
    },
    {
      title: "Tailored Connections",
      text: "Evaluate additional integrations around specific operational requirements."
    }
  ];

  return (
  <MotionConfig reducedMotion="user">
    <div className="w-full pointer-events-auto bg-transparent min-h-screen text-gray-900 font-sans">
      
      {/* SECTION 1 — HERO & BREADCRUMB */}
      <section id="hero" className="w-full min-h-screen relative isolate pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden flex flex-col items-center justify-center bg-[#071E3D] bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] text-white m-0">
        <HeroBackground />
        
        {/* BREADCRUMB */}
        <div 
          data-aos="fade-down"
          data-aos-duration="600"
          className="mb-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full relative z-20"
        >
          <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs font-semibold text-blue-200 tracking-wider uppercase font-mono bg-[#1267E5]/20 backdrop-blur-md px-4 py-1.5 rounded-lg border border-[#38BDF8]/30 shadow-2xs">
            <Link to="/platform" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:outline-none rounded">
              Platform
            </Link>
            <ChevronRight size={10} className="text-blue-300 shrink-0" aria-hidden="true" />
            <span className="text-[#38BDF8] font-bold" aria-current="page">
              Operations & Dispatch
            </span>
          </nav>
        </div>

        <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full relative isolate z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Hero text */}
            <div 
              data-aos="fade-right"
              data-aos-duration="800"
              className="lg:col-span-6 text-left space-y-6 bg-white/95 backdrop-blur-2xl border border-white/80 p-8 sm:p-10 lg:p-12 rounded-3xl shadow-2xl shadow-[#071E3D]/40 text-gray-900"
            >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest">
              <Radio size={12} className="text-[#1267E5]" aria-hidden="true" /> OPERATIONS & DISPATCH MODULE
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-950 tracking-tight leading-[1.1]">
              Flight Operations & Dispatch Software
              <span className="block text-[#1267E5] font-bold text-2xl sm:text-4xl mt-3">
                From Trip Preparation to Completed Flight Records
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-800 font-normal leading-relaxed max-w-xl">
              Connect trip management, operational coordination, dispatch activities, flight execution data and journey records within one aviation operations workflow.
            </p>
            
            <p className="text-sm text-gray-600 font-normal leading-relaxed max-w-xl">
              JoyaFleet helps operations and dispatch teams maintain a structured operational view by keeping relevant flight information connected from preparation through completion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact?intent=demo&module=operations-dispatch"
                className="bg-[#EE1C25] hover:bg-[#D4151D] text-white text-center font-bold px-7 py-3.5 rounded-lg transition-all shadow-lg shadow-[#EE1C25]/25 text-sm focus-visible:ring-2 focus-visible:ring-[#EE1C25] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Request an Operations Demo
              </Link>
              <Link
                to="/platform"
                className="bg-white hover:bg-gray-50 border border-gray-300 text-center text-gray-900 font-semibold px-7 py-3.5 rounded-lg transition-all shadow-xs text-sm focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Explore the Platform
              </Link>
            </div>

            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-mono pt-2">
              Trip Management • Dispatch Release • Flight Records • Journey History
            </p>
          </div>

          {/* Hero Premium Operational Flow Visual */}
          <div 
            data-aos="fade-left"
            data-aos-duration="850"
            data-aos-delay="150"
            className="lg:col-span-6 w-full"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#1267E5]/30 bg-[#071B33] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80" 
                alt="Workflow representation of JoyaFleet flight operations and dispatch activities" 
                className="w-full h-auto object-cover max-h-[420px] opacity-90"
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B33]/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
        </div>
      </section>

      {/* SECTION 2 — THE OPERATIONAL CHALLENGE */}
      <section className="py-20 sm:py-28 relative isolate">
        <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
          
          <div 
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-3xl mb-16 text-left"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4">
              ONE OPERATIONAL PICTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Connect critical flight information across operational teams.
            </h2>
            <p className="text-lg text-gray-800 font-medium leading-relaxed mb-4">
              Trip details, aircraft information, crew activity, dispatch workflows, actual flight times, fuel records and journey information contribute to the complete operational picture.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              JoyaFleet connects relevant operational information through structured workflows that support coordination from preparation through completed flight records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {valueCards.map((card, idx) => (
              <div 
                key={idx} 
                data-aos="fade-up"
                data-aos-duration="650"
                data-aos-delay={idx * 100}
                className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#1267E5]/10 flex items-center justify-center text-[#1267E5] mb-6 font-bold font-mono text-xs border border-[#1267E5]/20">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{card.text}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#1267E5]/10 text-[10px] font-semibold text-[#1267E5] uppercase tracking-wider font-mono">
                  Operational Core
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3 — TRIP MANAGEMENT */}
      <section className="py-20 sm:py-28 relative isolate">
        <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
          
          <div 
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-3xl mb-20 text-left"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4">
              CONNECTED TRIP OPERATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Manage operational trips with connected flight context.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Manage single-leg and multi-leg trips with connected route, aircraft, crew and operational flight information.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-24">
            {tripCapabilities.map((cap, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  {/* Text Details Container */}
                  <div 
                    data-aos={isEven ? "fade-right" : "fade-left"}
                    data-aos-duration="750"
                    className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} text-left space-y-6 bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#1267E5]/20 shadow-xs`}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {cap.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 w-full mb-8">
                      {cap.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex gap-2.5 items-center text-xs font-semibold text-gray-800">
                          <div className="w-5 h-5 rounded-md bg-[#1267E5]/10 flex items-center justify-center shrink-0">
                            <Check size={13} className="text-[#1267E5]" aria-hidden="true" />
                          </div>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="px-4 py-2.5 bg-white/80 border-l-2 border-[#1267E5] text-xs text-gray-700 font-medium rounded-r shadow-2xs">
                      Keep operational information connected
                    </div>
                  </div>

                  {/* Configurable Visual Container */}
                  <div 
                    data-aos={isEven ? "fade-left" : "fade-right"}
                    data-aos-duration="750"
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

                      {cap.visual.imageUrl ? (
                        <img 
                          id={cap.visual.id}
                          src={cap.visual.imageUrl} 
                          alt={cap.visual.alt} 
                          className="w-full h-auto object-cover rounded-xl aspect-[16/10] border border-gray-200 shadow-xs" 
                          referrerPolicy="no-referrer" 
                        />
                      ) : (
                        <div className="bg-gradient-to-b from-[#071B33] to-[#0A2240] text-white rounded-xl aspect-[16/10] p-6 flex flex-col justify-between relative overflow-hidden border border-[#1267E5]/30">
                          <div className="absolute inset-0 bg-radial-gradient from-[#1267E5]/20 to-transparent pointer-events-none" />
                          
                          <div className="z-10 flex justify-between items-start">
                            <div>
                              <span className="text-[9px] font-mono tracking-widest text-[#39BFF8] block uppercase mb-0.5 font-semibold">TRIP LIFECYCLE</span>
                              <h4 className="text-xs font-bold text-white tracking-wide uppercase font-mono">
                                {cap.visual.title}
                              </h4>
                            </div>
                            <span className="text-[8px] font-mono border border-[#1267E5]/40 px-1.5 py-0.5 rounded text-[#39BFF8] bg-[#1267E5]/20 uppercase">
                              JoyaFleet
                            </span>
                          </div>

                          <div className="my-4 flex-1 flex flex-col justify-center space-y-3 z-10">
                            <p className="text-[11px] text-gray-300 font-medium leading-relaxed max-w-sm">
                              {cap.visual.description}
                            </p>
                            <div className="space-y-1.5 pt-2">
                              <div className="h-2 w-11/12 bg-[#1267E5]/30 rounded" />
                              <div className="h-2 w-8/12 bg-[#1267E5]/20 rounded" />
                            </div>
                          </div>

                          <div className="border-t border-white/10 pt-3 flex justify-between items-center text-[9px] text-gray-400 font-mono z-10">
                            <span className="text-[#39BFF8]">JOYAFLEET OPERATIONAL WORKFLOW</span>
                            <span>JOYAFLEET CONTROLS</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4 — OPERATIONAL INFORMATION IN ONE WORKFLOW */}
      <section className="py-20 sm:py-28 relative isolate">
        <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
          
          <div 
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-3xl mb-16 text-left"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4">
              OPERATIONAL CONTEXT
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Maintain connected operational information throughout the flight lifecycle.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              JoyaFleet supports connected operational records including flight activity, aircraft and crew assignments, qualifications, delays, fuel information and supporting documentation.
            </p>
          </div>

          {/* Connected Info Architecture Visual Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-12">
            
            {/* Left Column: List of 4 Groups */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              {operationalGroups.map((group, idx) => (
                <div 
                  key={idx} 
                  data-aos="fade-right"
                  data-aos-duration="650"
                  data-aos-delay={idx * 100}
                  className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs text-left"
                >
                  <h3 className="font-bold text-gray-900 text-base mb-2">
                    {group.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {group.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.points.map((pt, pIdx) => (
                      <span key={pIdx} className="bg-white text-gray-800 text-[10px] font-semibold px-2.5 py-1 rounded border border-[#1267E5]/20 shadow-2xs">
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Information Flow Architecture Visualization */}
            <div 
              data-aos="fade-left"
              data-aos-duration="800"
              className="lg:col-span-6 bg-gradient-to-b from-[#071B33] to-[#0D2E55] text-white rounded-3xl p-8 sm:p-10 border border-[#1267E5]/30 shadow-2xl flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#39BFF8]/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1267E5]/20 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-8">
                  <span className="text-[10px] font-mono tracking-widest text-[#39BFF8] uppercase">
                    INFORMATION ARCHITECTURE
                  </span>
                  <span className="text-[9px] font-mono text-[#39BFF8] bg-[#1267E5]/30 px-2.5 py-0.5 rounded border border-[#39BFF8]/30 uppercase font-semibold">
                    Connected Record Map
                  </span>
                </div>

                <div className="space-y-6">
                  <div className="p-4 bg-[#1267E5]/15 border border-[#39BFF8]/30 rounded-xl space-y-2 backdrop-blur-xs">
                    <span className="text-[9px] font-mono text-[#39BFF8] block uppercase font-semibold">Unified Trip Root</span>
                    <p className="text-xs font-semibold text-white">Trip Operational Record File</p>
                    <div className="h-[1px] bg-white/10 my-2" />
                    <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-300 font-mono">
                      <div>• Single-leg status</div>
                      <div>• Multi-leg programs</div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Workflow size={16} className="text-[#39BFF8]" aria-hidden="true" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3.5 bg-[#1267E5]/10 border border-[#1267E5]/30 rounded-lg text-left">
                      <span className="text-[8px] font-mono text-[#39BFF8] block uppercase">Execution Data</span>
                      <p className="text-[11px] font-bold text-white mt-1">Flight Status & Actual Times</p>
                    </div>
                    <div className="p-3.5 bg-[#1267E5]/10 border border-[#1267E5]/30 rounded-lg text-left">
                      <span className="text-[8px] font-mono text-[#39BFF8] block uppercase">Release Records</span>
                      <p className="text-[11px] font-bold text-white mt-1">Checklists & Approvals</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 mt-8 flex justify-between items-end text-[10px] text-gray-300 font-mono relative z-10">
                <span className="text-[#39BFF8]">Connected operational handovers</span>
                <span className="text-gray-400">JoyaFleet Architecture</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5 — STRUCTURED DISPATCH RELEASE */}
      <section className="py-20 sm:py-28 relative isolate">
        <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
          
          <div 
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-3xl mb-16 text-left"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4">
              STRUCTURED DISPATCH WORKFLOWS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Manage structured dispatch release workflows.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Coordinate dispatch preparation, configured checks, operational review and release activities through a structured workflow.
            </p>
          </div>

          {/* 4-Stage Release Workflow Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {dispatchStages.map((stage, idx) => (
              <div 
                key={stage.number} 
                data-aos="fade-up"
                data-aos-duration="650"
                data-aos-delay={idx * 100}
                className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-2xl font-extrabold text-[#1267E5] font-mono">
                      {stage.number}
                    </span>
                    <span className={`text-[9px] font-mono border px-2 py-0.5 rounded uppercase ${stage.statusBg}`}>
                      {stage.statusLabel}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {stage.text}
                  </p>
                </div>
                
                <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500 font-mono uppercase">
                  <span>State:</span>
                  <span className="font-semibold text-gray-700">{stage.statusText}</span>
                </div>
              </div>
            ))}
          </div>

          <div 
            data-aos="fade-up"
            data-aos-duration="600"
            className="bg-white/80 border border-[#1267E5]/20 p-6 rounded-2xl max-w-4xl mx-auto text-center mb-20 shadow-xs backdrop-blur-sm"
          >
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic font-medium">
              Dispatch workflows can include configurable checklists, accountable approvals, timestamps, signatures, fuel information and a structured release record.
            </p>
          </div>

          {/* 4 Supporting Capability Cards & Image Placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div 
              data-aos="fade-right"
              data-aos-duration="750"
              className="lg:col-span-6 space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-6 text-left">
                Support accountable release workflows
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dispatchCapabilities.map((cap, idx) => (
                  <div key={idx} className="bg-white/80 backdrop-blur-md p-5 rounded-xl border border-[#1267E5]/15 text-left space-y-2 shadow-xs">
                    <h4 className="font-bold text-sm text-gray-900">{cap.title}</h4>
                    <p className="text-xs text-gray-600 leading-normal">{cap.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dispatch Workflow Visual Placeholder */}
            <div 
              data-aos="fade-left"
              data-aos-duration="750"
              className="lg:col-span-6 w-full"
            >
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#1267E5]/20 shadow-xl overflow-hidden">
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

                {OPERATIONS_VISUALS.dispatchWorkspace.imageUrl ? (
                  <img 
                    src={OPERATIONS_VISUALS.dispatchWorkspace.imageUrl} 
                    alt={OPERATIONS_VISUALS.dispatchWorkspace.alt} 
                    className="w-full h-auto object-cover rounded-xl aspect-[16/9] border border-gray-200 shadow-xs" 
                    referrerPolicy="no-referrer" 
                  />
                ) : (
                  <div className="bg-gradient-to-b from-[#071B33] to-[#0A2240] text-white rounded-xl aspect-[16/9] p-6 flex flex-col justify-between relative overflow-hidden border border-[#1267E5]/30">
                    <div className="absolute inset-0 bg-radial-gradient from-[#1267E5]/20 to-transparent pointer-events-none" />
                    
                    <div className="z-10 flex justify-between items-start">
                      <div>
                        <span className="text-[9px] font-mono tracking-widest text-[#39BFF8] block uppercase mb-0.5 font-semibold">RELEASE CONTROL</span>
                        <h4 className="text-xs font-bold text-white tracking-wide uppercase font-mono">
                          {OPERATIONS_VISUALS.dispatchWorkspace.title}
                        </h4>
                      </div>
                      <span className="text-[8px] font-mono border border-[#1267E5]/40 px-1.5 py-0.5 rounded text-[#39BFF8] bg-[#1267E5]/20 uppercase">
                        JoyaFleet
                      </span>
                    </div>

                    <div className="my-4 flex-1 flex flex-col justify-center space-y-3 z-10">
                      <p className="text-[11px] text-gray-300 font-medium leading-relaxed max-w-sm">
                        {OPERATIONS_VISUALS.dispatchWorkspace.description}
                      </p>
                      <div className="space-y-1.5 pt-2">
                        <div className="h-1.5 w-10/12 bg-[#1267E5]/30 rounded" />
                        <div className="h-1.5 w-7/12 bg-[#1267E5]/20 rounded" />
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-3 flex justify-between items-center text-[9px] text-gray-400 font-mono z-10">
                      <span className="text-[#39BFF8]">JOYAFLEET OPERATIONAL WORKFLOW</span>
                      <span>JOYAFLEET RELEASE SYSTEM</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6 — FROM DISPATCH TO FLIGHT EXECUTION */}
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
              FLIGHT EXECUTION RECORDS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Capture flight execution records through the operational lifecycle.
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Record relevant operational events including actual timings, fuel information, delays and journey details.
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
              {executionStages.map((stage, idx) => {
                const isActive = idx === activeExecutionIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveExecutionIndex(idx)}
                    className="flex flex-col items-center text-center group cursor-pointer rounded-xl focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071B33] focus-visible:outline-none p-1"
                    aria-label={`View stage: ${stage.title}`}
                    aria-pressed={isActive}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border transition-all mb-4 ${
                      isActive 
                        ? 'bg-[#1267E5] text-white border-[#39BFF8] shadow-lg shadow-[#1267E5]/40 ring-2 ring-[#39BFF8]/40' 
                        : 'bg-[#071B33] text-gray-400 border-[#1267E5]/30 group-hover:border-[#39BFF8]/60'
                    }`}>
                      0{idx + 1}
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
          <div className="hidden md:block bg-[#0A2240] border border-[#1267E5]/40 rounded-xl p-8 max-w-2xl mx-auto mb-12 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExecutionIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {executionStages[activeExecutionIndex].title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {executionStages[activeExecutionIndex].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile vertical representation */}
          <div className="block md:hidden space-y-6 relative mb-12 text-left">
            {executionStages.map((stage, idx) => (
              <div 
                key={idx} 
                className="bg-[#0A2240] border border-[#1267E5]/30 p-5 rounded-2xl relative"
              >
                <div className="flex gap-3.5 items-center mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#1267E5] text-white flex items-center justify-center font-bold text-xs border border-[#39BFF8]/40">
                    0{idx + 1}
                  </span>
                  <h3 className="text-sm font-bold text-white">{stage.title}</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed pl-9">
                  {stage.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7 — ACTUAL TIMES, FUEL, AND JOURNEY RECORDS */}
      <section className="py-20 sm:py-28 relative isolate">
        <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
          
          <div 
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-3xl mb-16 text-left"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
              CONNECTED FLIGHT RECORDS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Capture the operational details that complete the journey.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Maintain actual flight-event times, fuel information, delays, diversions and journey records within connected operational history.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
            
            {/* 4 Large Capability Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {largeRecordCards.map((card, idx) => (
                <div 
                  key={idx} 
                  data-aos="fade-up"
                  data-aos-duration="650"
                  data-aos-delay={idx * 100}
                  className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs text-left flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-gray-900 text-base mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      {card.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {card.points.map((pt, pIdx) => (
                      <span key={pIdx} className="bg-white text-gray-800 text-[9px] font-semibold px-2 py-0.5 rounded border border-[#1267E5]/20 shadow-2xs">
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Journey Logs & Flight Records Placeholder */}
            <div 
              data-aos="fade-left"
              data-aos-duration="750"
              className="lg:col-span-6 w-full"
            >
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#1267E5]/20 shadow-xl overflow-hidden">
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

                {OPERATIONS_VISUALS.journeyRecords.imageUrl ? (
                  <img 
                    src={OPERATIONS_VISUALS.journeyRecords.imageUrl} 
                    alt={OPERATIONS_VISUALS.journeyRecords.alt} 
                    className="w-full h-auto object-cover rounded-xl aspect-[16/10] border border-gray-200 shadow-xs" 
                    referrerPolicy="no-referrer" 
                  />
                ) : (
                  <div className="bg-gradient-to-b from-[#071B33] to-[#0A2240] text-white rounded-xl aspect-[16/10] p-6 flex flex-col justify-between relative overflow-hidden border border-[#1267E5]/30">
                    <div className="absolute inset-0 bg-radial-gradient from-[#1267E5]/20 to-transparent pointer-events-none" />
                    
                    <div className="z-10 flex justify-between items-start">
                      <div>
                        <span className="text-[9px] font-mono tracking-widest text-[#39BFF8] block uppercase mb-0.5 font-semibold">COMPLETED RECORD</span>
                        <h4 className="text-xs font-bold text-white tracking-wide uppercase font-mono">
                          {OPERATIONS_VISUALS.journeyRecords.title}
                        </h4>
                      </div>
                      <span className="text-[8px] font-mono border border-[#1267E5]/40 px-1.5 py-0.5 rounded text-[#39BFF8] bg-[#1267E5]/20 uppercase">
                        JoyaFleet
                      </span>
                    </div>

                    <div className="my-4 flex-1 flex flex-col justify-center space-y-3 z-10">
                      <p className="text-[11px] text-gray-300 font-medium leading-relaxed max-w-sm">
                        {OPERATIONS_VISUALS.journeyRecords.description}
                      </p>
                      <div className="space-y-1.5 pt-2">
                        <div className="h-1.5 w-11/12 bg-[#1267E5]/30 rounded" />
                        <div className="h-1.5 w-8/12 bg-[#1267E5]/20 rounded" />
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-3 flex justify-between items-center text-[9px] text-gray-400 font-mono z-10">
                      <span className="text-[#39BFF8]">JOYAFLEET OPERATIONAL WORKFLOW</span>
                      <span>JOYAFLEET HISTORY</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 8 — OPERATIONAL HISTORY AND VISIBILITY */}
      <section className="py-20 sm:py-28 relative isolate">
        <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
          
          <div 
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-3xl mb-16 text-left"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
              OPERATIONAL TRACEABILITY
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Review the operation from current activity to completed records.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Review operational activity through timeline, table, calendar, and history views.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {traceabilityCards.map((card, idx) => (
              <div 
                key={idx}
                data-aos="fade-up"
                data-aos-duration="650"
                data-aos-delay={idx * 100}
                className="bg-white/80 backdrop-blur-md p-6 rounded-xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#1267E5] text-white flex items-center justify-center text-xs font-mono font-bold mb-4 shadow-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{card.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{card.text}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 text-[10px] text-[#1267E5] font-mono font-semibold">
                  Connected visibility
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 9 — ROLE-BASED OPERATIONS */}
      <section className="py-20 sm:py-28 relative isolate">
        <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
          
          <div 
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-3xl mb-16 text-left"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
              ONE OPERATION. CLEAR RESPONSIBILITIES.
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Provide operational teams with role-based access to relevant flight information.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              JoyaFleet supports configurable access and connected operational workflows across management, operations, dispatch and flight crew.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roleCards.map((role, idx) => (
              <div 
                key={idx} 
                data-aos="fade-up"
                data-aos-duration="650"
                data-aos-delay={idx * 100}
                className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs text-left flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">
                    {role.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    {role.description}
                  </p>
                </div>
                <div>
                  <span className="text-[9px] font-mono tracking-wider text-[#1267E5] block uppercase mb-2 font-semibold">RELEVANT AREAS</span>
                  <div className="space-y-1.5">
                    {role.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex gap-2 items-center text-[11px] text-gray-800 font-medium">
                        <Check size={12} className="text-[#1267E5] shrink-0" aria-hidden="true" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 10 — CONNECTED TO THE PLATFORM */}
      <section className="py-20 sm:py-28 relative isolate">
        <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
          
          <div 
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-3xl mb-16 text-left"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
              CONNECTED ACROSS THE PLATFORM
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Connect operations with the wider JoyaFleet platform.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Approved schedules transition into operational trips while aircraft, crew and completed flight records remain connected across the platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {connectedModules.map((mod, idx) => (
              <Link 
                key={idx} 
                to={mod.path}
                data-aos="fade-up"
                data-aos-duration="650"
                data-aos-delay={idx * 80}
                className="bg-white/80 backdrop-blur-md p-6 rounded-xl border border-[#1267E5]/15 hover:border-[#1267E5] shadow-xs text-left flex flex-col justify-between group transition-all focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:outline-none"
              >
                <div>
                  <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#1267E5] transition-colors mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-[11px] text-gray-600 leading-relaxed mb-4">
                    {mod.text}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#1267E5] mt-2">
                  <span>View Module</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 11 — CONFIGURED AROUND YOUR OPERATION */}
      <section className="py-20 sm:py-28 relative isolate">
        <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
          
          <div 
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-3xl mb-16 text-left"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
              CONFIGURED FOR YOUR AIRLINE
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Support the operational workflows your teams require.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Configure selected operational settings, dispatch requirements, access responsibilities and report outputs, while assessing integrations against documented requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {configCards.map((card, idx) => (
              <div 
                key={idx} 
                data-aos="fade-up"
                data-aos-duration="650"
                data-aos-delay={idx * 100}
                className="bg-white/80 backdrop-blur-md p-6 rounded-xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs text-left"
              >
                <h3 className="font-bold text-gray-900 text-base mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          <div 
            data-aos="zoom-in"
            data-aos-duration="600"
            className="text-center pt-4"
          >
            <Link
              to="/contact?intent=customization&module=operations-dispatch"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1267E5] hover:bg-[#0E54BD] text-white font-bold rounded-lg transition-colors text-sm sm:text-base shadow-lg shadow-[#1267E5]/25 focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Discuss Your Operations Requirements
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 12 — OPERATIONS WORKFLOW VISUAL */}
      <section className="py-20 sm:py-28 relative isolate">
        <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
          
          <div 
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-3xl mb-16 text-left mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
              SEE THE OPERATION IN CONTEXT
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Operations & Dispatch Workflow Overview
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Workflow representation of trip management, dispatch activities, operational records and completed flight information.
            </p>
          </div>

          {/* Large Workflow Visual Area */}
          <div 
            data-aos="zoom-in-up"
            data-aos-duration="850"
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#1267E5]/20 shadow-xl overflow-hidden">
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

              {OPERATIONS_VISUALS.operationsWorkspace.imageUrl ? (
                <img 
                  id={OPERATIONS_VISUALS.operationsWorkspace.id}
                  src={OPERATIONS_VISUALS.operationsWorkspace.imageUrl} 
                  alt={OPERATIONS_VISUALS.operationsWorkspace.alt} 
                  className="w-full h-auto object-cover rounded-xl aspect-[16/9] border border-gray-200 shadow-xs" 
                  referrerPolicy="no-referrer" 
                />
              ) : (
                <div className="bg-gradient-to-b from-[#071B33] to-[#0A2240] text-white rounded-xl aspect-[16/9] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden border border-[#1267E5]/30">
                  <div className="absolute inset-0 bg-radial-gradient from-[#1267E5]/20 to-transparent pointer-events-none" />
                  
                  <div className="z-10 flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#39BFF8] bg-[#1267E5]/20 px-2.5 py-0.5 rounded border border-[#39BFF8]/30 uppercase block w-fit mb-2 font-semibold">
                        CONNECTED OPERATIONS WORKFLOW
                      </span>
                      <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight uppercase font-mono">
                        {OPERATIONS_VISUALS.operationsWorkspace.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono border border-[#1267E5]/40 px-2 py-1 rounded text-[#39BFF8] bg-[#1267E5]/20 uppercase">
                      JoyaFleet
                    </span>
                  </div>

                  <div className="my-6 flex-1 flex flex-col justify-center space-y-4 z-10 text-left">
                    <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed max-w-xl">
                      {OPERATIONS_VISUALS.operationsWorkspace.description}
                    </p>
                    <div className="space-y-2 pt-2 max-w-md">
                      <div className="h-2 w-full bg-[#1267E5]/30 rounded" />
                      <div className="h-2 w-11/12 bg-[#1267E5]/20 rounded" />
                      <div className="h-2 w-9/12 bg-[#1267E5]/15 rounded" />
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4 flex justify-between items-center text-[10px] text-gray-400 font-mono z-10">
                    <span className="text-[#39BFF8]">JOYAFLEET WORKFLOW VISUAL</span>
                    <span>JOYAFLEET OPERATIONS OVERVIEW</span>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 13 — FINAL CTA WITH AVIATION THEME */}
      <section id="operations-dispatch-cta-section" className="py-20 sm:py-28 relative isolate overflow-hidden">
        <div className="px-5 sm:px-8 max-w-5xl mx-auto w-full">
          <div className="aviation-cta-bg relative overflow-hidden rounded-3xl p-8 sm:p-14 text-white border border-[#1267E5]/30 shadow-2xl text-center">
            {/* Background glowing decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#39BFF8]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1267E5]/25 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/30 text-[#39BFF8] border border-[#1267E5]/40 rounded-lg text-xs font-bold uppercase tracking-widest mb-6 font-mono">
                <Sparkles size={12} className="text-[#39BFF8]" aria-hidden="true" /> CONNECTED FLIGHT OPERATIONS
              </span>

              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                Connect flight planning, dispatch and operational execution.
              </h2>
              <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed mb-10">
                See how JoyaFleet can support trip management, dispatch workflows, flight records and operational coordination.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 w-full sm:max-w-md mx-auto mb-8">
                <Link
                  to="/contact?intent=demo&module=operations-dispatch"
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
