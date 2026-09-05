"use client";

import React, { useState } from 'react';
import Link from '../components/RouterLink';
import { motion, AnimatePresence, MotionConfig } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import { HeroBackground } from '../components/HeroBackground';
import {
  Plane,
  ChevronRight,
  Check,
  ArrowRight,
  Layers,
  Wrench,
  Activity,
  Calendar,
  AlertTriangle,
  Clock,
  Users,
  Sliders,
  Sparkles,
  Radio
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
        className={`w-full h-auto object-cover rounded-xl border border-gray-200/80 shadow-md ${aspectClass}`}
      />
    );
  }

  return (
    <div
      id={id}
      role="img"
      aria-label={alt}
      className={`relative w-full overflow-hidden rounded-xl border border-[#1267E5]/30 bg-gradient-to-b from-[#071B33] to-[#0A2240] p-6 flex flex-col justify-between text-white shadow-inner ${aspectClass}`}
    >
      <div className="absolute inset-0 bg-radial-gradient from-[#1267E5]/20 to-transparent pointer-events-none" />
      
      <div className="z-10">
        <span className="text-[11px] font-mono tracking-widest text-[#39BFF8] block uppercase mb-1 font-semibold">
          JOYA FLEET PRODUCT WORKSPACE
        </span>
        <h4 className="text-xs font-bold text-white tracking-wide uppercase font-mono">
          {title}
        </h4>
      </div>

      <div className="my-4 flex-1 flex flex-col justify-center space-y-3 z-10">
        <p className="text-[11px] text-gray-200 font-medium leading-relaxed max-w-sm">
          {description}
        </p>
        {children ? (
          children
        ) : (
          <div className="space-y-1.5 pt-2">
            <div className="h-1.5 w-11/12 bg-[#1267E5]/60 rounded" />
            <div className="h-1.5 w-8/12 bg-[#39BFF8]/40 rounded" />
          </div>
        )}
      </div>

      <div className="border-t border-white/10 pt-3 flex justify-between items-center text-[10px] text-[#39BFF8] font-mono z-10">
        <span>JOYA FLEET PRODUCT WORKSPACE</span>
        <span>CONNECTED FLEET PLANNING CONTEXT</span>
      </div>
    </div>
  );
}

const FLEET_MAINTENANCE_VISUALS: Record<string, ProductVisual> = {
  identity: {
    id: "fleet-identity-view",
    title: "Aircraft Identity & Structure",
    description: "Aircraft identity, type, registration and home-base information within a structured operational profile.",
    aspectRatio: "16:10",
    alt: "Product visual reserved for the Joya Fleet aircraft profiles and fleet structure interface",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80"
  },
  capacity: {
    id: "fleet-capacity-view",
    title: "Operational Aircraft Information",
    description: "Selected aircraft characteristics and supporting reference information for fleet planning.",
    aspectRatio: "16:10",
    alt: "Product visual reserved for the Joya Fleet operational aircraft information interface",
    imageUrl: "https://images.unsplash.com/photo-1519074069444-1ba4eae16748?auto=format&fit=crop&w=1200&q=80"
  },
  performance: {
    id: "fleet-performance-view",
    title: "Aircraft Planning Context",
    description: "Aircraft status, planned activity and supporting records available during operational coordination.",
    aspectRatio: "16:10",
    alt: "Product visual reserved for the Joya Fleet aircraft planning context interface",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=1200&q=80"
  },
  defaults: {
    id: "fleet-defaults-view",
    title: "Aircraft Operational Defaults",
    description: "Selected planning defaults and operational settings configured around documented airline procedures.",
    aspectRatio: "16:10",
    alt: "Product visual reserved for the Joya Fleet aircraft operational defaults interface",
    imageUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80"
  },
  workspace: {
    id: "fleet-workspace-view",
    title: "Fleet & Maintenance Planning Workspace",
    description: "Aircraft profiles, status, planned flights, scheduled maintenance, AOG periods and work-order information in one connected workspace.",
    aspectRatio: "16:9",
    alt: "Product visual reserved for the Joya Fleet fleet and maintenance planning workspace interface",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
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
  icon: React.ReactNode;
}

interface ActivityCard {
  title: string;
  text: string;
}

interface WorkflowStage {
  step: string;
  title: string;
  text: string;
}

interface RoleCard {
  title: string;
  description: string;
  areas: string[];
}

interface ConnectedModule {
  title: string;
  text: string;
  destination: string;
}

export default function FleetMaintenance() {
  // SEO implementation with restoration on unmount
  useSEO({
    title: "Fleet & Maintenance Planning Software for Airlines | Joya Fleet",
    description: "Keep aircraft information, availability, scheduled maintenance, AOG periods and operational fleet records connected with Joya Fleet.",
    canonicalPath: "/platform/fleet-maintenance",
    ogTitle: "Connected Fleet & Maintenance Planning",
    ogDescription: "Explore Joya Fleet for aircraft operational profiles, availability context, maintenance planning, AOG visibility and connected airline operations."
  });

  // Section 2 Data
  const challengeCards: ValueCard[] = [
    {
      title: "Connected Aircraft Information",
      text: "Keep operational aircraft data, home-base information, status and relevant planning settings within one structured fleet record.",
      icon: <Plane size={20} className="text-gray-950" />
    },
    {
      title: "Availability in Context",
      text: "Review relevant planned flights, aircraft status, scheduled maintenance and AOG periods when coordinating fleet use.",
      icon: <Layers size={20} className="text-gray-950" />
    },
    {
      title: "Maintenance Visible to Operations",
      text: "Keep scheduled maintenance and AOG periods visible alongside operational planning.",
      icon: <Wrench size={20} className="text-gray-950" />
    }
  ];

  // Section 3 Data
  const capabilities: CapabilityBlock[] = [
    {
      title: "Aircraft Identity & Structure",
      description: "Maintain relevant aircraft identity, type, home-base and fleet information within one operational profile.",
      points: [
        "Registration information",
        "Aircraft type",
        "Serial number",
        "Primary home base"
      ],
      visual: FLEET_MAINTENANCE_VISUALS.identity
    },
    {
      title: "Operational Aircraft Information",
      description: "Maintain selected aircraft characteristics and operational reference information within the aircraft profile.",
      points: [
        "Operational characteristics",
        "Configured aircraft information",
        "Supporting reference data",
        "Fleet classification"
      ],
      visual: FLEET_MAINTENANCE_VISUALS.capacity
    },
    {
      title: "Aircraft Planning Context",
      description: "Keep relevant aircraft information available for scheduling and operational coordination.",
      points: [
        "Aircraft availability context",
        "Operational status",
        "Schedule relationships",
        "Supporting aircraft records"
      ],
      visual: FLEET_MAINTENANCE_VISUALS.performance
    },
    {
      title: "Operational Defaults",
      description: "Configure selected aircraft planning defaults around documented airline procedures.",
      points: [
        "Default crew context",
        "Flight-rule settings",
        "Ground-time settings",
        "Operational configuration"
      ],
      visual: FLEET_MAINTENANCE_VISUALS.defaults
    }
  ];

  // Section 4 Data
  const availabilityCards: ActivityCard[] = [
    {
      title: "Aircraft Status",
      text: "Keep relevant operational aircraft status visible during planning."
    },
    {
      title: "Planned Flight Activity",
      text: "Review planned flights connected to the selected aircraft."
    },
    {
      title: "Maintenance Context",
      text: "Review scheduled maintenance and AOG periods alongside the flying program."
    },
    {
      title: "Home-Base Context",
      text: "Keep relevant home-base information available during fleet coordination."
    }
  ];

  // Section 5 Data - Maintenance Planning Capabilities
  const maintenanceCapabilities = [
    {
      title: "Scheduled Maintenance Activity",
      description: "Record and review planned maintenance periods connected to the affected aircraft.",
      labels: ["Planned start", "Planned end", "Aircraft", "Planning status"]
    },
    {
      title: "Work Orders",
      description: "Maintain work-order status, notes and supporting records within the maintenance-planning workflow.",
      labels: ["Work-order information", "Open status", "Completed status", "Supporting notes"]
    },
    {
      title: "Maintenance Context",
      description: "Keep relevant maintenance location and planning information connected to the activity when configured.",
      labels: ["Maintenance location", "Planning information", "Aircraft context", "Supporting records"]
    },
    {
      title: "Notes and Attachments",
      description: "Maintain relevant notes, tags and attachments alongside the maintenance record.",
      labels: ["Notes", "Tags", "Attachments", "Supporting documents"]
    }
  ];

  // Section 6 Data - AOG
  const aogItems = [
    {
      title: "Aircraft Impact",
      text: "Connect the AOG period to the relevant aircraft and operational planning context."
    },
    {
      title: "Time Visibility",
      text: "Maintain relevant start and end information for the aircraft-on-ground period."
    },
    {
      title: "Operational Awareness",
      text: "Keep relevant AOG information available to planning and operations teams."
    }
  ];

  // Section 7 Data - Maintenance status and limits
  const limitCards = [
    {
      title: "Planning Status",
      text: "Review relevant planned, open and completed maintenance activity."
    },
    {
      title: "Aircraft Relationship",
      text: "Keep maintenance activity connected to the affected aircraft."
    },
    {
      title: "Schedule Context",
      text: "Review how scheduled maintenance periods relate to planned flying activity."
    },
    {
      title: "Supporting Records",
      text: "Keep relevant work orders, notes and attachments available within the planning record."
    }
  ];

  // Section 8 Data - Stages
  const workflowStages: WorkflowStage[] = [
    {
      step: "01",
      title: "Aircraft Profile",
      text: "Maintain relevant operational aircraft information and configured defaults."
    },
    {
      step: "02",
      title: "Availability Context",
      text: "Review relevant flight, status and scheduled maintenance information."
    },
    {
      step: "03",
      title: "Flight Scheduling",
      text: "Coordinate planned flying activity around available operational context."
    },
    {
      step: "04",
      title: "Maintenance Activity",
      text: "Keep scheduled maintenance and AOG periods visible alongside planning."
    },
    {
      step: "05",
      title: "Operations & Reporting",
      text: "Use connected aircraft and operational information in daily workflows and configurable reports."
    }
  ];

  // Section 9 Data - Role-based
  const roleCards: RoleCard[] = [
    {
      title: "Executive Management",
      description: "Maintain clearer oversight of fleet structure, operational status and relevant reporting information.",
      areas: ["Fleet visibility", "Aircraft status", "Reports"]
    },
    {
      title: "Flight Planning",
      description: "Review aircraft information, operational defaults and availability context during schedule planning.",
      areas: ["Aircraft assignment", "Availability context", "Flight scheduling"]
    },
    {
      title: "Operations & Dispatch",
      description: "Keep relevant aircraft status, operational information and maintenance activity connected to daily flight operations.",
      areas: ["Aircraft status", "Operational records", "Maintenance visibility"]
    },
    {
      title: "Maintenance Planning",
      description: "Maintain scheduled maintenance activity, AOG periods, work-order information and supporting records.",
      areas: ["Maintenance activity", "AOG periods", "Work orders"]
    }
  ];

  // Section 10 Data
  const connectedModules: ConnectedModule[] = [
    {
      title: "Flight Scheduling",
      text: "Use relevant aircraft availability and operational information during schedule planning.",
      destination: "/platform/flight-scheduling"
    },
    {
      title: "Operations & Dispatch",
      text: "Keep aircraft information connected to trip preparation and flight execution records.",
      destination: "/platform/operations-dispatch"
    },
    {
      title: "Crew Management & FTL",
      text: "Coordinate relevant aircraft-type and crew-requirement context during planning.",
      destination: "/platform/crew-management-ftl"
    },
    {
      title: "Reporting & Analytics",
      text: "Use relevant aircraft, flight and maintenance information in configurable reports.",
      destination: "/platform/reporting-analytics"
    },
    {
      title: "Integrations",
      text: "Extend selected workflows through configured add-ons and separately assessed connections.",
      destination: "/platform/integrations"
    }
  ];

  // Section 11 Data
  const customizationCards = [
    {
      title: "Aircraft Configuration",
      text: "Maintain relevant aircraft operational settings and default requirements around airline needs."
    },
    {
      title: "Fleet Structure",
      text: "Organize aircraft information around fleet, type and operational relationships."
    },
    {
      title: "Role-Based Access",
      text: "Configure relevant fleet and maintenance access through users, groups and permissions."
    },
    {
      title: "Reporting & Integration Needs",
      text: "Build relevant outputs and evaluate additional connections around specific fleet requirements."
    }
  ];

  // Interactive UI State for Hero visualization
  const [activeHeroTab, setActiveHeroTab] = useState(0);
  const heroTabs = [
    { id: "profile", label: "Aircraft Profile", desc: "Aircraft identity, type, registration, home-base and operational information in one structured profile." },
    { id: "availability", label: "Availability Context", desc: "Aircraft status, planned flights and scheduled maintenance context for operational planning." },
    { id: "schedule", label: "Flight Schedule", desc: "Planned flying activity connected to relevant aircraft information and availability context." },
    { id: "maintenance", label: "Maintenance Activity", desc: "Scheduled maintenance, AOG periods, work orders and supporting records connected to the aircraft." },
    { id: "ops", label: "Operational Planning", desc: "Aircraft and maintenance context available during scheduling and operational coordination." }
  ];

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
              <span className="text-[#38BDF8] font-bold" aria-current="page">Fleet & Maintenance Planning</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 flex flex-col items-start text-left bg-white/95 backdrop-blur-2xl p-6 sm:p-10 lg:p-12 rounded-3xl border border-white/80 shadow-2xl shadow-[#071E3D]/40 text-gray-900">
                <span 
                  data-aos="fade-up"
                  data-aos-duration="400"
                  className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-5 font-mono"
                >
                  <Plane size={12} aria-hidden="true" className="text-[#1267E5]" /> FLEET & MAINTENANCE PLANNING
                </span>
                
                <h1 
                  data-aos="fade-up"
                  data-aos-duration="400"
                  className="text-4xl sm:text-6xl font-bold text-gray-950 tracking-tight leading-[1.1] mb-2"
                >
                  Keep the fleet visible.
                </h1>
                <h2 
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay="40"
                  className="text-3xl sm:text-5xl font-bold text-[#1267E5] tracking-tight leading-tight mb-6"
                >
                  Keep maintenance connected to operations.
                </h2>
                
                <p className="text-lg sm:text-xl text-gray-800 font-normal leading-relaxed mb-4 max-w-xl">
                  Maintain operational aircraft information, availability, scheduled maintenance, AOG periods and supporting records within one connected airline platform.
                </p>
                
                <p className="text-base text-gray-600 font-normal leading-relaxed mb-8 max-w-lg">
                  Joya Fleet helps planning, operations and fleet teams understand how aircraft status and maintenance activity affect the flying program.
                </p>
                
                <div className="w-full">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
                    <Link
                      to="/contact?intent=demo&module=fleet-maintenance"
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
                    {["Aircraft profiles", "Fleet availability", "Maintenance planning", "AOG visibility"].map((tag) => (
                      <span key={tag} className="text-xs text-[#1267E5] font-semibold tracking-wide font-mono uppercase bg-[#1267E5]/5 px-2.5 py-0.5 rounded-md border border-[#1267E5]/15">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Premium Connected Operational Visual Concept */}
              <div
                className="lg:col-span-5 relative w-full h-[420px] sm:h-[460px] bg-gradient-to-b from-[#071B33] to-[#0A2240] text-white rounded-2xl border border-[#1267E5]/30 shadow-xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-radial-gradient from-[#1267E5]/20 to-transparent pointer-events-none" />
                
                <div className="flex justify-between items-start border-b border-white/10 pb-3.5 relative z-10">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#39BFF8] block uppercase font-semibold">FLEET PIPELINE</span>
                    <span className="text-xs font-bold text-white font-mono tracking-tight uppercase">Connected Fleet Planning</span>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-[#1267E5]/20 flex items-center justify-center border border-[#1267E5]/30">
                    <Plane size={14} aria-hidden="true" className="text-[#39BFF8]" />
                  </div>
                </div>

                {/* Abstract visualization showing flow of steps */}
                <div className="my-4 flex-1 flex flex-col justify-center space-y-2 relative z-10">
                  {heroTabs.map((tab, idx) => {
                    const isActive = idx === activeHeroTab;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveHeroTab(idx)}
                        aria-pressed={isActive}
                        aria-controls="hero-content-panel"
                        className={`w-full text-left p-2.5 rounded-xl border text-xs flex items-center justify-between group cursor-pointer transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071B33] focus-visible:outline-none ${
                          isActive 
                            ? 'bg-[#1267E5] text-white border-[#39BFF8]/40 shadow-lg shadow-[#1267E5]/30 scale-[1.01]' 
                            : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono border ${
                            isActive ? 'bg-white/20 text-white border-white/30 font-bold' : 'bg-white/5 text-[#39BFF8] border-white/10'
                          }`}>
                            0{idx + 1}
                          </span>
                          <span className="font-semibold">{tab.label}</span>
                        </div>
                        <span className={`text-[10px] font-mono transition-transform duration-200 ${
                          isActive ? 'text-[#39BFF8] font-bold translate-x-0' : 'text-gray-400 group-hover:translate-x-0.5 motion-reduce:transition-none'
                        }`}>
                          {isActive ? 'SELECTED' : 'VIEW'}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Info Block */}
                <div id="hero-content-panel" aria-live="polite" className="bg-[#040E1A]/80 backdrop-blur-md p-3.5 rounded-xl border border-[#1267E5]/30 text-left relative z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeHeroTab}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-[10px] font-mono tracking-widest text-[#39BFF8] block uppercase mb-1 font-semibold">
                        STAGE 0{activeHeroTab + 1} • {heroTabs[activeHeroTab].label.toUpperCase()}
                      </span>
                      <p className="text-[11px] sm:text-xs text-gray-200 leading-relaxed font-medium">
                        {heroTabs[activeHeroTab].desc}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2 — THE FLEET-PLANNING CHALLENGE */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-12 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Plane size={12} className="text-[#1267E5]" aria-hidden="true" /> ONE CONNECTED FLEET PICTURE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Aircraft availability depends on more than the flight schedule.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3">
                Operational status, planned flying, scheduled maintenance and AOG periods all contribute to fleet-planning context.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Joya Fleet keeps relevant aircraft and maintenance information connected so planning teams can work with clearer operational context.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {challengeCards.map((card, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/35 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#1267E5]/10 flex items-center justify-center text-[#1267E5] mb-5 border border-[#1267E5]/20">
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

        {/* SECTION 3 — OPERATIONAL AIRCRAFT PROFILES */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Plane size={12} className="text-[#1267E5]" aria-hidden="true" /> AIRCRAFT OPERATIONAL PROFILES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Maintain the information that supports daily fleet planning.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Keep aircraft identity, type, home-base information, operational settings and supporting reference data connected within structured aircraft profiles.
              </p>
            </div>

            <div className="space-y-20">
              {capabilities.map((cap, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} flex flex-col items-start text-left`}>
                      <span className="text-xs font-bold text-[#1267E5] font-mono mb-2.5 uppercase tracking-wider">CAPABILITY 0{idx + 1}</span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-3">
                        {cap.title}
                      </h3>
                      <p className="text-base text-gray-700 leading-relaxed mb-6">
                        {cap.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-6">
                        {cap.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex gap-2.5 items-center text-sm font-semibold text-gray-800">
                            <div className="w-5 h-5 rounded-md bg-[#1267E5]/10 flex items-center justify-center shrink-0 border border-[#1267E5]/20 text-[#1267E5]">
                              <Check size={12} aria-hidden="true" />
                            </div>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                      <div className="px-4 py-2.5 bg-white/80 backdrop-blur-md border-l-2 border-[#1267E5] text-xs text-gray-700 font-medium rounded-r-lg shadow-2xs">
                        Support structured aircraft record parameters
                      </div>
                    </div>

                    {/* Visual Container */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} w-full`}>
                      <div className="bg-white/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[#1267E5]/20 shadow-xl overflow-hidden">
                        <div className="flex justify-between items-center border-b border-gray-200/80 pb-3 mb-5">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                          </div>
                          <span className="text-[10px] font-mono tracking-widest text-[#1267E5] uppercase font-bold">
                            AIRCRAFT PROFILE CONTEXT
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

        {/* SECTION 4 — AIRCRAFT AVAILABILITY IN CONTEXT */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-12 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Activity size={12} className="text-[#1267E5]" aria-hidden="true" /> OPERATIONAL AVAILABILITY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Plan with a clearer view of where each aircraft fits.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Review relevant aircraft status, planned flights, scheduled maintenance and home-base context during fleet planning.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {availabilityCards.map((card, idx) => (
                <div 
                  key={idx}
                  className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/35 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#1267E5] uppercase font-bold tracking-wider mb-2 block">PARAMETER 0{idx + 1}</span>
                    <h3 className="font-bold text-gray-900 text-lg mb-2.5">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-3xl">
              <div className="px-5 py-4 bg-white/80 backdrop-blur-md border-l-4 border-[#1267E5] text-xs text-gray-700 font-medium rounded-r-xl shadow-xs leading-relaxed">
                <span className="font-bold text-gray-900 block mb-1">Operational Disclaimer</span>
                Connected availability context supports more informed planning but does not guarantee aircraft availability or operational approval.
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 5 — MAINTENANCE PLANNING ALONGSIDE OPERATIONS */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-12 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Wrench size={12} className="text-[#1267E5]" aria-hidden="true" /> CONNECTED MAINTENANCE PLANNING
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Keep planned maintenance visible beside the flying program.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Record scheduled maintenance activity, maintenance periods, work-order information and relevant operational context within the connected fleet environment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
              
              <div className="lg:col-span-5 grid grid-cols-1 gap-4 sm:gap-5">
                {maintenanceCapabilities.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start p-5 bg-white/80 backdrop-blur-md rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/35 hover:shadow-lg transition-all shadow-xs">
                    <div className="p-2.5 bg-[#1267E5]/10 rounded-xl text-[#1267E5] shrink-0 border border-[#1267E5]/20">
                      <Wrench size={18} aria-hidden="true" className="text-[#1267E5]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1.5">{item.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed mb-2.5">{item.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.labels.map((lbl, lIdx) => (
                          <span key={lIdx} className="text-[10px] font-mono bg-[#1267E5]/10 border border-[#1267E5]/20 text-[#1267E5] px-2 py-0.5 rounded font-semibold">
                            {lbl}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Maintenance Planning Workspace Visual */}
              <div className="lg:col-span-7">
                <div className="bg-white/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[#1267E5]/20 shadow-xl overflow-hidden">
                  <div className="flex justify-between items-center border-b border-gray-200/80 pb-3 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#1267E5] uppercase font-bold">
                      MAINTENANCE PLANNING CONTEXT
                    </span>
                  </div>

                  <ProductVisualFrame
                    id={FLEET_MAINTENANCE_VISUALS.workspace.id}
                    title={FLEET_MAINTENANCE_VISUALS.workspace.title}
                    description={FLEET_MAINTENANCE_VISUALS.workspace.description}
                    aspectRatio={FLEET_MAINTENANCE_VISUALS.workspace.aspectRatio}
                    alt={FLEET_MAINTENANCE_VISUALS.workspace.alt}
                    imageUrl={FLEET_MAINTENANCE_VISUALS.workspace.imageUrl}
                  >
                    <div className="grid grid-cols-4 gap-2 pt-2">
                      {Array.from({ length: 4 }).map((_, colIdx) => (
                        <div key={colIdx} className="space-y-1.5">
                          <div className="h-3 bg-white/10 rounded flex items-center justify-center text-[8px] font-mono text-[#39BFF8]">
                            Phase {colIdx + 1}
                          </div>
                          <div className={`h-6 rounded flex items-center justify-center p-1 ${
                            colIdx === 1 ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300' :
                            colIdx === 2 ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300' :
                            'bg-[#1267E5]/20 border border-[#1267E5]/40 text-[#39BFF8]'
                          }`}>
                            <span className="text-[8px] font-semibold uppercase tracking-widest font-mono text-center">
                              {colIdx === 0 ? 'PLANNED' :
                               colIdx === 1 ? 'OPEN' :
                               colIdx === 2 ? 'COMPLETED' : 'RECORD'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ProductVisualFrame>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 6 — AOG VISIBILITY */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-12 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <AlertTriangle size={12} className="text-[#1267E5]" aria-hidden="true" /> AIRCRAFT-ON-GROUND CONTEXT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Keep AOG periods visible where operational decisions are made.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Record relevant aircraft-on-ground periods and make them visible within connected fleet and operational planning workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {aogItems.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/35 hover:shadow-lg transition-all shadow-xs"
                >
                  <span className="text-[10px] font-mono text-[#1267E5] uppercase font-bold tracking-wider mb-2.5 block">AOG IMPACT 0{idx + 1}</span>
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="max-w-3xl">
              <div className="px-5 py-4 bg-white/80 backdrop-blur-md border-l-4 border-[#1267E5] text-xs text-gray-700 font-medium rounded-r-xl shadow-xs leading-relaxed">
                <span className="font-bold text-gray-900 block mb-1">Operational Notice</span>
                AOG visibility supports operational coordination but does not guarantee prevention, recovery time or maintenance completion.
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 7 — MAINTENANCE STATUS AND LIMIT CONTEXT */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-12 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Clock size={12} className="text-[#1267E5]" aria-hidden="true" /> MAINTENANCE PLANNING STATUS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Keep maintenance-planning status and relationships visible.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Maintain maintenance-planning status, aircraft relationships and supporting records within connected operational workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {limitCards.map((card, idx) => (
                <div 
                  key={idx}
                  className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/35 hover:shadow-lg transition-all shadow-xs"
                >
                  <span className="text-[10px] font-mono text-[#1267E5] uppercase font-bold tracking-wider mb-2 block">TRACKING 0{idx + 1}</span>
                  <h3 className="font-bold text-gray-900 text-lg mb-2.5">
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

        {/* SECTION 8 — CONNECTED TO FLIGHT PLANNING */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-12 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Calendar size={12} className="text-[#1267E5]" aria-hidden="true" /> CONNECTED TO THE FLYING PROGRAM
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Aircraft information stays connected as plans become operations.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Relevant aircraft status, availability, operational defaults and maintenance activity remain connected to flight scheduling and daily operational workflows.
              </p>
            </div>

            {/* Stage Workflow: Horizontal on Desktop, Vertical on Mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-10">
              {workflowStages.map((stage, idx) => (
                <div 
                  key={idx}
                  className="relative bg-white/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/35 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-mono text-[#1267E5] uppercase font-bold tracking-wider">STAGE {stage.step}</span>
                      {idx < 4 && (
                        <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-white p-1 rounded-full border border-[#1267E5]/30 shadow-xs text-[#1267E5] items-center justify-center">
                          <ArrowRight size={12} aria-hidden="true" />
                        </div>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {stage.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/platform/flight-scheduling"
                className="bg-[#1267E5] hover:bg-[#0E54BD] text-white font-bold px-6 py-3 rounded-lg text-sm transition-all shadow-md shadow-[#1267E5]/20 flex items-center gap-2 motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <span>Explore Flight Scheduling</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

          </div>
        </section>

        {/* SECTION 9 — FLEET VISIBILITY FOR DIFFERENT ROLES */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-12 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Users size={12} className="text-[#1267E5]" aria-hidden="true" /> ONE FLEET. DIFFERENT RESPONSIBILITIES.
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Give each team access to the aircraft information relevant to its work.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Joya Fleet supports configurable fleet visibility across executive, planning, operations and maintenance responsibilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roleCards.map((role, idx) => (
                <div 
                  key={idx}
                  className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/35 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#1267E5] uppercase font-bold tracking-wider mb-2 block">ROLE FOCUS</span>
                    <h3 className="font-bold text-gray-900 text-xl mb-2.5">
                      {role.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">
                      {role.description}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider uppercase block mb-2.5 text-[#1267E5] font-bold">KEY OPERATIONAL AREAS</span>
                    <div className="flex flex-wrap gap-1.5">
                      {role.areas.map((area, aIdx) => (
                        <span key={aIdx} className="text-xs bg-[#1267E5]/10 text-[#1267E5] font-semibold px-3 py-1 rounded-full border border-[#1267E5]/20">
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

        {/* SECTION 10 — CONNECTED ACROSS THE PLATFORM */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-12 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Sparkles size={12} className="text-[#1267E5]" aria-hidden="true" /> CONNECTED TO DAILY OPERATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Fleet information supports planning, crew coordination, operations and reporting.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Aircraft profiles and maintenance activity remain connected to the wider operational lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
              {connectedModules.map((module, idx) => (
                <Link
                  key={idx}
                  to={module.destination}
                  className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between group focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:outline-none"
                >
                  <div>
                    <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-[#1267E5] transition-colors">
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

        {/* SECTION 11 — CONFIGURED AROUND YOUR FLEET */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-12 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Sliders size={12} className="text-[#1267E5]" aria-hidden="true" /> CONFIGURED FOR YOUR AIRLINE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Support the fleet structure and operational settings your airline requires.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Configure relevant aircraft information, planning settings, access responsibilities and reporting needs, while assessing integrations against documented requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {customizationCards.map((card, idx) => (
                <div 
                  key={idx}
                  className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/35 hover:shadow-lg transition-all shadow-xs"
                >
                  <span className="text-[10px] font-mono text-[#1267E5] uppercase font-bold tracking-wider mb-2 block">MODULE 0{idx + 1}</span>
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
              <Link
                to="/contact?intent=customization&module=fleet-maintenance"
                className="bg-[#1267E5] hover:bg-[#0E54BD] text-white font-bold px-7 py-3.5 rounded-lg text-sm transition-all shadow-lg shadow-[#1267E5]/25 text-center w-full sm:w-auto motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Discuss Your Fleet Requirements
              </Link>
            </div>

          </div>
        </section>

        {/* SECTION 12 — PRODUCT VISUAL */}
        <section className="relative isolate py-16 sm:py-24 overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-12 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Plane size={12} className="text-[#1267E5]" aria-hidden="true" /> SEE THE FLEET IN CONTEXT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                One connected workspace for aircraft information, availability and maintenance planning.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Review aircraft profiles, operational status, planned activity, maintenance periods and supporting records within one connected fleet-planning workspace.
              </p>
            </div>

            {/* Configurable Product Workspace Visual */}
            <div className="bg-white/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[#1267E5]/20 shadow-xl overflow-hidden max-w-5xl mx-auto">
              <div className="flex justify-between items-center border-b border-gray-200/80 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-[#1267E5] uppercase font-bold">
                  FLEET & MAINTENANCE PLANNING
                </span>
              </div>

              <ProductVisualFrame
                id="fleet-workspace-summary-view"
                title={FLEET_MAINTENANCE_VISUALS.workspace.title}
                description={FLEET_MAINTENANCE_VISUALS.workspace.description}
                aspectRatio={FLEET_MAINTENANCE_VISUALS.workspace.aspectRatio}
                alt={FLEET_MAINTENANCE_VISUALS.workspace.alt}
                imageUrl={FLEET_MAINTENANCE_VISUALS.workspace.imageUrl}
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

        {/* SECTION 13 — FINAL CTA */}
        <section id="fleet-maintenance-cta-section" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#071B33] to-[#040E1A] text-white border-t border-[#1267E5]/30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#1267E5]/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="px-5 sm:px-8 max-w-5xl mx-auto w-full text-center relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/20 text-[#39BFF8] border border-[#1267E5]/40 rounded-lg text-xs font-bold uppercase tracking-widest mb-6 font-mono">
              <Radio size={12} className="text-[#39BFF8]" aria-hidden="true" /> CONNECTED AIRLINE FLEET OPERATIONS
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
              Keep fleet information connected to the operational plan.
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
              See how Joya Fleet can support aircraft visibility, operational planning, scheduled maintenance activity and connected fleet records.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8">
              <Link
                to="/contact?intent=demo&module=fleet-maintenance"
                className="bg-[#EE1C25] hover:bg-[#D4151D] text-white font-bold px-8 py-3.5 rounded-lg text-sm shadow-xl shadow-[#EE1C25]/25 text-center w-full sm:w-auto whitespace-nowrap focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071B33] focus-visible:outline-none"
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
