"use client";

import React, { useEffect, useState } from 'react';
import Link from '../components/RouterLink';
import { motion, AnimatePresence, MotionConfig } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import {
  Calendar,
  Radio,
  Users,
  BarChart3,
  Cloud,
  ArrowRight,
  Check,
  Sparkles,
  Activity,
  Compass,
  Sliders,
  ChevronRight,
  Maximize2,
  X
} from 'lucide-react';
import { HeroBackground } from '../components/HeroBackground';

// Product screenshot placeholder definition
interface ProductVisual {
  id: string;
  title: string;
  description: string;
  aspectRatio: "16:9" | "16:10";
  alt: string;
  imageUrl?: string;
}


const PRODUCT_PLACEHOLDERS: Record<string, ProductVisual> = {
  scheduling: {
    id: "scheduling",
    title: "JoyaFleet Flight Scheduling Interface",
    description: "Visual schedule planning with recurring and ad-hoc flights, aircraft context, time zones and draft or published states.",
    aspectRatio: "16:10",
    alt: "Product visual reserved for the JoyaFleet flight scheduling interface",
    imageUrl: "/images/flight-scheduling-interface.png"
  },
  operations: {
    id: "operations",
    title: "JoyaFleet Operations & Dispatch Interface",
    description: "Operational trips, assignments, dispatch release workflows, actual times and journey records.",
    aspectRatio: "16:10",
    alt: "Product visual reserved for the JoyaFleet operations and dispatch interface",
    imageUrl: "/images/flight-watch-interface.png"
  },
  crew: {
    id: "crew",
    title: "JoyaFleet Crew Planning & FTL Interface",
    description: "Crew schedules, duties, qualifications, endorsements and FTL visibility.",
    aspectRatio: "16:10",
    alt: "Product visual reserved for the JoyaFleet crew management and FTL interface",
    imageUrl: "/images/crew-planning-interface.png"
  },
  fleet: {
    id: "fleet",
    title: "JoyaFleet Fleet & Maintenance Planning Interface",
    description: "Aircraft operational profiles, availability, scheduled maintenance, AOG periods and work orders.",
    aspectRatio: "16:10",
    alt: "Product visual reserved for the JoyaFleet fleet and maintenance planning interface",
    imageUrl: "/images/fleet-maintenance-interface.png"
  },
  reporting: {
    id: "reporting",
    title: "JoyaFleet Reporting & Analytics Interface",
    description: "Configurable report filters, reusable templates and PDF, Excel or CSV outputs.",
    aspectRatio: "16:10",
    alt: "Product visual reserved for the JoyaFleet reporting and analytics interface",
    imageUrl: "/images/reports-interface.png"
  },
  integrations: {
    id: "integrations",
    title: "JoyaFleet Integration Architecture",
    description: "A visual connection map for Skyputer, CAO IRI, SMS and email channels, with space for separately assessed custom integrations.",
    aspectRatio: "16:10",
    alt: "Product visual reserved for the JoyaFleet integration architecture",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
  }
};

// Types for configuration data
interface ModuleConfig {
  id: string;
  category: string;
  title: string;
  description: string;
  points: string[];
  outcome: string;
  visual: ProductVisual;
  ctaLink: string;
  ctaText: string;
  constraintsWarning?: string;
}

interface StageConfig {
  number: number;
  title: string;
  text: string;
}

interface RoleConfig {
  title: string;
  description: string;
  modules: string[];
}

interface CardConfig {
  title: string;
  text: string;
}

interface SupportConfig {
  title: string;
  text: string;
}

export default function Platform() {
  const [activeVisual, setActiveVisual] = useState<ProductVisual | null>(null);

  useEffect(() => {
    if (!activeVisual) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveVisual(null);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [activeVisual]);

  // Page SEO Metadata setup
  useSEO({
    title: "JoyaFleet Platform | Flight Management Software for Aviation Operations",
    description: "Explore JoyaFleet, a cloud-based Flight Management Software platform connecting flight scheduling, flight operations, dispatch workflows, crew management, fleet visibility, reporting and aviation integrations.",
    canonicalPath: "/platform",
    ogTitle: "JoyaFleet Platform | Flight Management Software",
    ogDescription: "Connect scheduling, operations, crew, dispatch, fleet visibility and reporting through one configurable aviation operations platform."
  });

  // Platform Modules Content
  const platformModules: ModuleConfig[] = [
    {
      id: "flight-scheduling",
      category: "PLANNING",
      title: "Flight Scheduling",
      description: "Plan recurring and ad-hoc flights with aircraft context, routes, time zones and draft-to-published scheduling workflows.",
      points: [
        "Recurring and ad-hoc flight schedules",
        "Aircraft and route assignment",
        "Bulk schedule updates",
        "Draft and published planning workflows"
      ],
      outcome: "Move approved schedules into operational trips without rebuilding information across disconnected systems.",
      visual: PRODUCT_PLACEHOLDERS.scheduling,
      ctaLink: "/platform/flight-scheduling",
      ctaText: "Explore Flight Scheduling"
    },
    {
      id: "operations-dispatch",
      category: "OPERATIONS",
      title: "Operations & Dispatch",
      description: "Support OCC and dispatch teams with connected trip management, operational checks, dispatch workflows and flight execution records.",
      points: [
        "Multi-leg trip management",
        "Operational checklists and records",
        "Dispatch release workflows",
        "Actual times, delays, fuel and journey records"
      ],
      outcome: "Maintain a consistent operational record from trip preparation through completed flight records.",
      visual: PRODUCT_PLACEHOLDERS.operations,
      ctaLink: "/platform/operations-dispatch",
      ctaText: "Explore Operations & Dispatch",
      constraintsWarning: "Operational checks and dispatch release workflows"
    },
    {
      id: "crew-management-ftl",
      category: "CREW",
      title: "Crew Management & FTL",
      description: "Coordinate crew planning, assignments, qualifications, endorsements and FTL-related operational visibility.",
      points: [
        "Crew schedules and duty planning",
        "Flight assignments",
        "Qualifications and endorsements",
        "FTL, duty and rest visibility"
      ],
      outcome: "Support informed crew planning by keeping availability, qualifications and duty information visible.",
      visual: PRODUCT_PLACEHOLDERS.crew,
      ctaLink: "/platform/crew-management-ftl",
      ctaText: "Explore Crew Management & FTL",
      constraintsWarning: "FTL, duty and rest visibility for crew planning"
    },
    {
      id: "fleet-maintenance",
      category: "FLEET",
      title: "Fleet & Maintenance Planning",
      description: "Maintain aircraft operational visibility through aircraft profiles, availability information, scheduled maintenance events and supporting records.",
      points: [
        "Operational aircraft profiles",
        "Aircraft availability and status",
        "Scheduled maintenance events",
        "AOG periods, work orders and supporting records"
      ],
      outcome: "Help planning teams understand how aircraft status and maintenance activity affect the operational schedule.",
      visual: PRODUCT_PLACEHOLDERS.fleet,
      ctaLink: "/platform/fleet-maintenance",
      ctaText: "Explore Fleet & Maintenance"
    },
    {
      id: "reporting-analytics",
      category: "INSIGHT",
      title: "Reporting & Analytics",
      description: "Transform connected operational data into configurable reports for management and operational teams.",
      points: [
        "Flexible report filters",
        "Reusable report templates",
        "Configurable layouts",
        "PDF, Excel and CSV exports"
      ],
      outcome: "Create repeatable operational reports without rebuilding information across disconnected spreadsheets.",
      visual: PRODUCT_PLACEHOLDERS.reporting,
      ctaLink: "/platform/reporting-analytics",
      ctaText: "Explore Reporting & Analytics"
    },
    {
      id: "integrations",
      category: "CONNECTIONS",
      title: "Integrations",
      description: "Extend JoyaFleet workflows through supported aviation integrations, communication channels and scoped custom integration projects.",
      points: [
        "Skyputer and CAO IRI configurable add-ons",
        "Configurable SMS and email channels",
        "Weather systems through scoped custom integration",
        "Accounting systems through scoped custom integration"
      ],
      outcome: "Extend operational workflows through configured add-ons and separately assessed integration projects.",
      visual: PRODUCT_PLACEHOLDERS.integrations,
      ctaLink: "/platform/integrations",
      ctaText: "Explore Integrations",
      constraintsWarning: "Additional integrations require documented requirements, available APIs and an agreed implementation scope."
    }
  ];

  // Connected Operational Flow Stages
  const workflowStages: StageConfig[] = [
    { number: 1, title: "Schedule", text: "Create recurring and ad-hoc flight schedules." },
    { number: 2, title: "Build the Trip", text: "Prepare operational trip and route information." },
    { number: 3, title: "Coordinate Aircraft & Crew", text: "Align aircraft availability, crew assignments and operational requirements." },
    { number: 4, title: "Dispatch", text: "Complete structured dispatch checks and release workflows." },
    { number: 5, title: "Record the Flight", text: "Capture actual times, delays, fuel information and journey records." },
    { number: 6, title: "Report", text: "Generate configurable operational reports and exports." }
  ];

  // Role-Based Experience Roles
  const roleGroups: RoleConfig[] = [
    {
      title: "Executive Management",
      description: "Review operational visibility, fleet information and configurable reporting.",
      modules: ["Reporting & Analytics", "Flight Operations", "Fleet Planning"]
    },
    {
      title: "OCC Management",
      description: "Monitor flight activity, operational records, dispatch workflows and daily coordination.",
      modules: ["Operations & Dispatch", "Flight Tracking", "Incident Logs"]
    },
    {
      title: "Operations & Flight Planning",
      description: "Manage schedules, trips, operational details and daily flight activities.",
      modules: ["Flight Scheduling", "Operations", "Fleet Planning"]
    },
    {
      title: "Dispatch",
      description: "Work with trip information, dispatch checks, release workflows and flight records.",
      modules: ["Operations", "Dispatch", "Flight Records"]
    },
    {
      title: "Crew Planning & Flight Crew",
      description: "Coordinate crew schedules, assignments, qualifications, endorsements and FTL visibility.",
      modules: ["Crew Management", "FTL", "Crew Access"]
    }
  ];

  // Configuration and Control Capability Cards
  const capabilityCards: CardConfig[] = [
    {
      title: "Configurable Workflows",
      text: "Adapt selected operational workflows and platform settings around operational requirements."
    },
    {
      title: "Granular Access Control",
      text: "Manage users, groups and permissions according to operational responsibilities."
    },
    {
      title: "Flexible Reporting",
      text: "Create reusable reports, filters and output templates."
    },
    {
      title: "Tailored Integrations",
      text: "Support scoped integration projects based on requirements and available APIs."
    }
  ];

  // Implementation Support Points
  const supportPoints: SupportConfig[] = [
    {
      title: "Operational Discovery",
      text: "Understand operational structure, workflows, departments and implementation priorities."
    },
    {
      title: "Configuration & Migration",
      text: "Configure the platform and prepare relevant operational data for structured migration."
    },
    {
      title: "Role-Based Training",
      text: "Train management, operations, flight planning, dispatch, crew and system administrators."
    },
    {
      title: "Ongoing Support",
      text: "Support implementation, user adoption and operational requirements according to the agreed customer support plan."
    }
  ];

  // Interactive states for sections
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState<number>(0);

  return (
    <MotionConfig reducedMotion="user">
      <div className="w-full pointer-events-auto min-h-screen font-sans text-gray-900">
        
        {/* SECTION 1 — PLATFORM HERO */}
        <section id="hero" className="w-full min-h-screen relative isolate pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden flex flex-col items-center justify-center bg-[#071E3D] bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] text-white m-0">
          <HeroBackground />

          {/* BREADCRUMB */}
          <div 
            data-aos="fade-down"
            data-aos-duration="600"
            className="mb-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full relative z-20"
          >
            <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs font-semibold text-blue-200 tracking-wider uppercase font-mono bg-[#1267E5]/20 backdrop-blur-md px-4 py-1.5 rounded-lg border border-[#38BDF8]/30 shadow-2xs">
              <Link to="/" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:outline-none rounded">Home</Link>
              <ChevronRight size={10} aria-hidden="true" className="text-blue-300" />
              <span className="text-[#38BDF8] font-bold" aria-current="page">Platform Overview</span>
            </nav>
          </div>

          <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full relative isolate z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              <div 
                data-aos="fade-right"
                data-aos-duration="800"
                className="lg:col-span-7 flex flex-col items-start text-left bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/80 shadow-2xl shadow-[#071E3D]/40 text-gray-900"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/25 rounded-lg text-xs font-bold uppercase tracking-widest mb-6 shadow-xs">
                  <Sparkles size={12} className="text-[#1267E5]" aria-hidden="true" /> FLIGHT MANAGEMENT SOFTWARE PLATFORM
                </span>
                
                <h1 className="text-4xl sm:text-6xl font-bold text-gray-950 tracking-tight leading-[1.1] mb-2">
                  Flight Management Software
                </h1>
                <h2 className="text-3xl sm:text-5xl font-bold text-[#1267E5] tracking-tight leading-tight mb-6">
                  for Connected Flight Operations
                </h2>
                
                <p className="text-lg sm:text-xl text-gray-800 font-normal leading-relaxed mb-4 max-w-xl">
                  JoyaFleet connects the complete flight lifecycle through one cloud-based platform — from scheduling and operational coordination to crew management, dispatch workflows, flight records and reporting.
                </p>
                
                <p className="text-base text-gray-600 font-normal leading-relaxed mb-8 max-w-lg">
                  Give aviation teams a shared operational view as flights move from planning to execution and reporting.
                </p>
                
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
                  <Link
                    to="/contact?intent=demo"
                    className="bg-[#EE1C25] hover:bg-[#D4151D] border border-[#EE1C25] text-white text-center font-bold px-8 py-3.5 rounded-lg text-base transition-all shadow-lg shadow-[#EE1C25]/25 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#EE1C25] focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    Request a Platform Demo
                  </Link>
                  <a
                    href="#platform-modules"
                    className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 text-center font-semibold px-8 py-3.5 rounded-lg text-base transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 focus-visible:outline-none shadow-xs"
                  >
                    Explore the Modules
                  </a>
                </div>
                
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-mono">
                  Cloud Platform • Flight Operations • Crew & Dispatch • Operational Reporting
                </p>
              </div>

              {/* Connected Visual Card with JOYA at Center and All 6 Modules Orbiting */}
              <div 
                data-aos="fade-left"
                data-aos-duration="850"
                data-aos-delay="150"
                className="lg:col-span-5 relative w-full h-[450px] sm:h-[500px] bg-gradient-to-b from-[#071B33] to-[#0D2E55] text-white backdrop-blur-xl rounded-2xl border border-[#1267E5]/30 shadow-2xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between"
              >
                <div className="flex justify-between items-start border-b border-white/10 pb-3 z-20">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#39BFF8] block uppercase">ARCHITECTURE LAYER</span>
                    <span className="text-xs font-bold text-white font-mono tracking-tight uppercase">JoyaFleet Connected Network</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-[#39BFF8] uppercase">LIVE HUB</span>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#39BFF8] animate-pulse" />
                  </div>
                </div>

                {/* Central Diagram Arena */}
                <div className="flex-1 relative w-full h-full my-2 flex items-center justify-center">
                  
                  {/* SVG Connectivity Grid & Radar Waves */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 360" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <radialGradient id="hubCenterGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#1267E5" stopOpacity="0.6" />
                        <stop offset="70%" stopColor="#39BFF8" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#071B33" stopOpacity="0" />
                      </radialGradient>
                      <linearGradient id="beamLine" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#39BFF8" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#1267E5" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>

                    {/* Central Area Glow */}
                    <circle cx="200" cy="180" r="85" fill="url(#hubCenterGlow)" />

                    {/* Concentric Radar / Orbit Rings */}
                    <circle cx="200" cy="180" r="140" fill="none" stroke="#1267E5" strokeWidth="1" strokeDasharray="4 4" opacity="0.35" />
                    <circle cx="200" cy="180" r="95" fill="none" stroke="#39BFF8" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                    <circle cx="200" cy="180" r="55" fill="none" stroke="#1267E5" strokeWidth="1" opacity="0.4" />

                    {/* Connectivity Beams to all 6 Modules */}
                    {/* 1. Top (Flight Scheduling) */}
                    <line x1="200" y1="180" x2="200" y2="45" stroke="url(#beamLine)" strokeWidth="1.5" strokeDasharray="3 3" />
                    {/* 2. Top-Right (Operations) */}
                    <line x1="200" y1="180" x2="315" y2="90" stroke="url(#beamLine)" strokeWidth="1.5" strokeDasharray="3 3" />
                    {/* 3. Bottom-Right (Dispatch) */}
                    <line x1="200" y1="180" x2="315" y2="270" stroke="url(#beamLine)" strokeWidth="1.5" strokeDasharray="3 3" />
                    {/* 4. Bottom (Reporting & Analytics) */}
                    <line x1="200" y1="180" x2="200" y2="315" stroke="url(#beamLine)" strokeWidth="1.5" strokeDasharray="3 3" />
                    {/* 5. Bottom-Left (Fleet Planning) */}
                    <line x1="200" y1="180" x2="85" y2="270" stroke="url(#beamLine)" strokeWidth="1.5" strokeDasharray="3 3" />
                    {/* 6. Top-Left (Crew Management) */}
                    <line x1="200" y1="180" x2="85" y2="90" stroke="url(#beamLine)" strokeWidth="1.5" strokeDasharray="3 3" />

                    {/* Small Node Intersection Dots */}
                    <circle cx="200" cy="45" r="3.5" fill="#39BFF8" />
                    <circle cx="315" cy="90" r="3.5" fill="#39BFF8" />
                    <circle cx="315" cy="270" r="3.5" fill="#39BFF8" />
                    <circle cx="200" cy="315" r="3.5" fill="#39BFF8" />
                    <circle cx="85" cy="270" r="3.5" fill="#39BFF8" />
                    <circle cx="85" cy="90" r="3.5" fill="#39BFF8" />
                  </svg>

                  {/* 1. TOP: Flight Scheduling */}
                  <div className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-[#071B33]/92 border border-[#1267E5]/60 hover:border-[#39BFF8] backdrop-blur-md rounded-xl py-1 px-2.5 sm:px-3 shadow-lg flex items-center gap-1.5 transition-all hover:scale-105">
                      <Calendar size={13} className="text-[#39BFF8] shrink-0" aria-hidden="true" />
                      <span className="text-[10px] sm:text-xs font-bold text-white tracking-tight whitespace-nowrap">Flight Scheduling</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#39BFF8] animate-pulse shrink-0" />
                    </div>
                  </div>

                  {/* 2. TOP-RIGHT: Operations */}
                  <div className="absolute top-14 sm:top-16 right-0 sm:right-1 z-20">
                    <div className="bg-[#071B33]/92 border border-[#1267E5]/60 hover:border-[#39BFF8] backdrop-blur-md rounded-xl py-1 px-2.5 sm:px-3 shadow-lg flex items-center gap-1.5 transition-all hover:scale-105">
                      <Activity size={13} className="text-[#39BFF8] shrink-0" aria-hidden="true" />
                      <span className="text-[10px] sm:text-xs font-bold text-white tracking-tight whitespace-nowrap">Operations</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#39BFF8] animate-pulse shrink-0" />
                    </div>
                  </div>

                  {/* 3. BOTTOM-RIGHT: Dispatch */}
                  <div className="absolute bottom-14 sm:bottom-16 right-0 sm:right-1 z-20">
                    <div className="bg-[#071B33]/92 border border-[#1267E5]/60 hover:border-[#39BFF8] backdrop-blur-md rounded-xl py-1 px-2.5 sm:px-3 shadow-lg flex items-center gap-1.5 transition-all hover:scale-105">
                      <Radio size={13} className="text-[#39BFF8] shrink-0" aria-hidden="true" />
                      <span className="text-[10px] sm:text-xs font-bold text-white tracking-tight whitespace-nowrap">Dispatch</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#39BFF8] animate-pulse shrink-0" />
                    </div>
                  </div>

                  {/* 4. BOTTOM: Reporting & Analytics */}
                  <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-[#071B33]/92 border border-[#1267E5]/60 hover:border-[#39BFF8] backdrop-blur-md rounded-xl py-1 px-2.5 sm:px-3 shadow-lg flex items-center gap-1.5 transition-all hover:scale-105">
                      <BarChart3 size={13} className="text-[#39BFF8] shrink-0" aria-hidden="true" />
                      <span className="text-[10px] sm:text-xs font-bold text-white tracking-tight whitespace-nowrap">Reporting & Analytics</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#39BFF8] animate-pulse shrink-0" />
                    </div>
                  </div>

                  {/* 5. BOTTOM-LEFT: Fleet Planning */}
                  <div className="absolute bottom-14 sm:bottom-16 left-0 sm:left-1 z-20">
                    <div className="bg-[#071B33]/92 border border-[#1267E5]/60 hover:border-[#39BFF8] backdrop-blur-md rounded-xl py-1 px-2.5 sm:px-3 shadow-lg flex items-center gap-1.5 transition-all hover:scale-105">
                      <Sliders size={13} className="text-[#39BFF8] shrink-0" aria-hidden="true" />
                      <span className="text-[10px] sm:text-xs font-bold text-white tracking-tight whitespace-nowrap">Fleet Planning</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#39BFF8] animate-pulse shrink-0" />
                    </div>
                  </div>

                  {/* 6. TOP-LEFT: Crew Management */}
                  <div className="absolute top-14 sm:top-16 left-0 sm:left-1 z-20">
                    <div className="bg-[#071B33]/92 border border-[#1267E5]/60 hover:border-[#39BFF8] backdrop-blur-md rounded-xl py-1 px-2.5 sm:px-3 shadow-lg flex items-center gap-1.5 transition-all hover:scale-105">
                      <Users size={13} className="text-[#39BFF8] shrink-0" aria-hidden="true" />
                      <span className="text-[10px] sm:text-xs font-bold text-white tracking-tight whitespace-nowrap">Crew Management</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#39BFF8] animate-pulse shrink-0" />
                    </div>
                  </div>

                  {/* CENTER CORE: JOYA FLEET */}
                  <div className="relative z-30 flex flex-col items-center justify-center">
                    {/* Pulsing Outer Rings */}
                    <div className="absolute w-28 h-28 rounded-full border border-[#39BFF8]/40 animate-ping opacity-25 pointer-events-none" />
                    <div className="absolute w-24 h-24 rounded-full border border-[#1267E5]/50 animate-pulse pointer-events-none" />
                    
                    {/* Central Emblem Badge */}
                    <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-gradient-to-br from-[#1267E5] via-[#0E54BD] to-[#071B33] border-2 border-[#39BFF8] shadow-2xl shadow-[#1267E5]/60 flex flex-col items-center justify-center text-center p-2 transform hover:scale-105 transition-transform">
                      <span className="text-sm sm:text-base font-black tracking-wider text-white font-sans drop-shadow-sm">
                        JOYA
                      </span>
                      <span className="text-[8px] font-mono tracking-widest text-[#39BFF8] font-bold uppercase mt-0.5">
                        FLEET
                      </span>
                      <div className="w-4 h-0.5 bg-[#39BFF8]/60 rounded-full mt-1" />
                    </div>
                  </div>

                </div>

                <div className="text-center border-t border-white/10 pt-3 z-20">
                  <span className="text-[10px] text-[#AFC0D2] font-mono tracking-tight uppercase">
                    CONNECTED OPERATIONAL WORKFLOW • ALL MODULES SYNCHRONIZED
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2 — PLATFORM ARCHITECTURE */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4">
                CONNECTED FLIGHT LIFECYCLE
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Connect every stage of the flight lifecycle.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                JoyaFleet connects schedules, trips, aircraft information, crew activity, dispatch workflows, flight records and reporting into a shared operational environment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              
              {/* Left side values */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:border-[#1267E5]/40 transition-all">
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1267E5]" aria-hidden="true" />
                    Connected Operational Context
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Keep schedule, trip, aircraft, crew and operational information connected across daily flight workflows.
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:border-[#1267E5]/40 transition-all">
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1267E5]" aria-hidden="true" />
                    Fewer Disconnected Processes
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Reduce fragmented operational processes by connecting information across planning, dispatch and reporting activities.
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:border-[#1267E5]/40 transition-all">
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1267E5]" aria-hidden="true" />
                    More Consistent Visibility
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Provide management and operational teams with clearer visibility into current activities and completed flight records.
                  </p>
                </div>

              </div>

              {/* Connected architecture grid visual */}
              <div className="lg:col-span-7 bg-gradient-to-b from-[#071B33] to-[#0D2E55] text-white rounded-2xl p-8 sm:p-12 border border-[#1267E5]/30 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                
                <div className="mb-6 flex justify-between items-center">
                  <span className="text-[10px] font-mono tracking-widest text-[#39BFF8] uppercase font-bold">AIRCRAFT WORKFLOW HUB</span>
                  <span className="text-[10px] font-mono text-white bg-[#1267E5]/40 px-2.5 py-1 rounded border border-[#1267E5]/50 uppercase">
                    Connected Operational Map
                  </span>
                </div>

                <div className="relative grid grid-cols-3 gap-3 my-4">
                  
                  {/* Node Grid representing shared database */}
                  <div className="bg-white/10 hover:bg-white/15 transition-colors rounded-xl p-4 border border-white/15 flex flex-col items-center justify-center text-center">
                    <Calendar size={18} className="text-[#39BFF8] mb-2" aria-hidden="true" />
                    <span className="text-xs font-semibold text-white">Schedule</span>
                  </div>
                  <div className="bg-white/10 hover:bg-white/15 transition-colors rounded-xl p-4 border border-white/15 flex flex-col items-center justify-center text-center">
                    <Compass size={18} className="text-[#39BFF8] mb-2" aria-hidden="true" />
                    <span className="text-xs font-semibold text-white">Trips</span>
                  </div>
                  <div className="bg-white/10 hover:bg-white/15 transition-colors rounded-xl p-4 border border-white/15 flex flex-col items-center justify-center text-center">
                    <Activity size={18} className="text-[#39BFF8] mb-2" aria-hidden="true" />
                    <span className="text-xs font-semibold text-white">Aircraft</span>
                  </div>

                  <div className="bg-white/10 hover:bg-white/15 transition-colors rounded-xl p-4 border border-white/15 flex flex-col items-center justify-center text-center">
                    <Users size={18} className="text-[#39BFF8] mb-2" aria-hidden="true" />
                    <span className="text-xs font-semibold text-white">Crew & FTL</span>
                  </div>
                  {/* Main hub node in the middle */}
                  <div className="bg-white text-[#071B33] rounded-xl p-4 border border-white shadow-lg shadow-[#1267E5]/30 flex flex-col items-center justify-center text-center">
                    <span className="text-[9px] font-bold tracking-widest uppercase block mb-0.5 text-[#1267E5]">CENTER</span>
                    <span className="text-xs font-black uppercase tracking-tight text-[#071B33]">JoyaFleet</span>
                  </div>
                  <div className="bg-white/10 hover:bg-white/15 transition-colors rounded-xl p-4 border border-white/15 flex flex-col items-center justify-center text-center">
                    <Radio size={18} className="text-[#39BFF8] mb-2" aria-hidden="true" />
                    <span className="text-xs font-semibold text-white">Dispatch</span>
                  </div>

                  <div className="bg-white/10 hover:bg-white/15 transition-colors rounded-xl p-4 border border-white/15 flex flex-col items-center justify-center text-center">
                    <Sliders size={18} className="text-[#39BFF8] mb-2" aria-hidden="true" />
                    <span className="text-xs font-semibold text-white">Flight Records</span>
                  </div>
                  <div className="bg-white/10 hover:bg-white/15 transition-colors rounded-xl p-4 border border-white/15 flex flex-col items-center justify-center text-center">
                    <BarChart3 size={18} className="text-[#39BFF8] mb-2" aria-hidden="true" />
                    <span className="text-xs font-semibold text-white">Reports</span>
                  </div>
                  <div className="bg-white/10 hover:bg-white/15 transition-colors rounded-xl p-4 border border-white/15 flex flex-col items-center justify-center text-center">
                    <Cloud size={18} className="text-[#39BFF8] mb-2" aria-hidden="true" />
                    <span className="text-xs font-semibold text-white">Integrations</span>
                  </div>

                </div>

                <p className="text-[11px] text-[#39BFF8]/80 font-mono text-center border-t border-white/10 pt-4 mt-4">
                  SHARED CORE SERVICES • ELIMINATING ISOLATED DATA SILOS
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3 — CORE PLATFORM MODULES */}
        <section id="platform-modules" className="py-20 sm:py-32 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-20 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4">
                CORE PLATFORM MODULES
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Built around the operational lifecycle.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Each module supports a specific part of flight operations while remaining connected to the wider platform.
              </p>
            </div>

            <div className="space-y-24">
              {platformModules.map((module, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div 
                    key={module.id} 
                    id={module.id}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                  >
                    
                    {/* Text Content */}
                    <div className={`lg:col-span-6 flex flex-col items-start bg-white/90 backdrop-blur-md p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:border-[#1267E5]/30 transition-all ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <span className="text-xs font-bold tracking-widest text-[#1267E5] uppercase mb-2 block font-mono">
                        {module.category}
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                        {module.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                        {module.description}
                      </p>

                      <ul className="space-y-3.5 mb-8 w-full">
                        {module.points.map((point, ptIdx) => (
                          <li key={ptIdx} className="flex gap-3 items-start text-sm text-gray-900 font-medium">
                            <Check size={16} className="text-[#1267E5] shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {module.constraintsWarning && (
                        <div className="mb-8 px-4 py-3 bg-[#1267E5]/5 border-l-2 border-[#1267E5] text-xs text-gray-700 font-medium rounded-r-lg max-w-md">
                          {module.constraintsWarning}
                        </div>
                      )}

                      <div className="border-t border-gray-200 pt-6 w-full mb-8">
                        <span className="text-[10px] font-mono tracking-widest text-[#1267E5] block uppercase mb-1 font-bold">OPERATIONAL VALUE</span>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic">
                          {module.outcome}
                        </p>
                      </div>

                      <Link
                        to={module.ctaLink}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#1267E5] hover:text-[#0E54BD] group transition-colors focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 focus-visible:outline-none rounded-md px-1 py-0.5"
                      >
                        {module.ctaText}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </Link>
                    </div>

                    {/* Mockup Placeholder Card */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} w-full`}>
                      <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
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

                        {/* Mockup Body Container */}
                        {module.visual.imageUrl ? (
                          <button
                            type="button"
                            onClick={() => setActiveVisual(module.visual)}
                            className="group relative block w-full overflow-hidden rounded-xl border border-gray-200 shadow-xs cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2"
                            aria-label={`Enlarge ${module.visual.title}`}
                          >
                            <img
                              id={module.visual.id}
                              src={module.visual.imageUrl}
                              alt={module.visual.alt}
                              className="w-full h-auto object-cover aspect-[16/10] transition-transform duration-300 group-hover:scale-[1.02]"
                              referrerPolicy="no-referrer"
                            />
                            <span className="absolute inset-0 flex items-center justify-center bg-[#071E3D]/0 transition-colors duration-300 group-hover:bg-[#071E3D]/30">
                              <span className="flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 text-xs font-bold text-[#10233F] opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                                <Maximize2 size={15} aria-hidden="true" /> Enlarge image
                              </span>
                            </span>
                          </button>
                        ) : (
                          <div className="bg-gradient-to-b from-[#071B33] to-[#0D2E55] text-white rounded-xl aspect-[16/10] p-6 flex flex-col justify-between relative overflow-hidden border border-[#1267E5]/30">
                            <div className="absolute inset-0 bg-radial-gradient from-[#1267E5]/20 to-transparent pointer-events-none" />
                            
                            <div className="flex justify-between items-start z-10">
                              <div>
                                <span className="text-[9px] font-mono tracking-widest text-[#39BFF8] block uppercase mb-0.5 font-bold">JOYAFLEET PRODUCT WORKSPACE</span>
                                <h4 className="text-xs font-bold text-white tracking-wide uppercase font-mono">
                                  {module.visual.title}
                                </h4>
                              </div>
                            </div>

                            <div className="my-4 flex-1 flex flex-col justify-center space-y-3 z-10">
                              <p className="text-[11px] text-blue-100 font-medium leading-relaxed max-w-sm">
                                {module.visual.description}
                              </p>
                              
                              <div className="space-y-2 pt-2">
                                <div className="h-2 w-11/12 bg-white/20 rounded" />
                                <div className="h-2 w-10/12 bg-white/20 rounded" />
                                <div className="h-2 w-8/12 bg-white/20 rounded" />
                              </div>
                            </div>

                            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-[9px] text-[#39BFF8] font-mono z-10">
                              <span>JOYAFLEET PRODUCT WORKSPACE</span>
                              <span>CONNECTED OPERATIONAL CONTEXT</span>
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

        {/* SECTION 4 — CONNECTED OPERATIONAL FLOW */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            <div className="bg-[#071E3D] bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] rounded-3xl p-8 sm:p-14 lg:p-16 border border-[#1267E5]/30 shadow-2xl text-white relative overflow-hidden">
              <div className="max-w-3xl mb-14 text-left relative z-10">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/20 text-[#38BDF8] border border-[#38BDF8]/30 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                  CONNECTED FROM PLAN TO RECORD
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                  Manage the complete flight lifecycle from planning to reporting.
                </h2>
                <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed">
                  Operational information created during scheduling continues through aircraft coordination, crew planning, dispatch activities, flight execution and reporting.
                </p>
              </div>

              {/* Desktop horizontal track */}
              <div className="hidden md:block relative mb-12 z-10">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 -translate-y-1/2 z-0" />
                
                <div className="grid grid-cols-6 gap-4 relative z-10">
                  {workflowStages.map((stage, sIdx) => {
                    const isActive = sIdx === activeWorkflowIndex;
                    return (
                      <button
                        key={stage.number}
                        type="button"
                        onClick={() => setActiveWorkflowIndex(sIdx)}
                        aria-pressed={isActive}
                        aria-label={`Select stage ${stage.number}: ${stage.title}`}
                        className="flex flex-col items-center text-center group cursor-pointer focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071B33] focus-visible:outline-none rounded-xl p-1"
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border transition-all mb-4 ${
                          isActive 
                            ? 'bg-[#39BFF8] text-[#071B33] border-[#39BFF8] shadow-lg shadow-[#39BFF8]/40 scale-110' 
                            : 'bg-white/10 text-gray-300 border-white/20 group-hover:border-white/50'
                        }`}>
                          {stage.number}
                        </div>
                        <h3 className={`text-sm font-bold tracking-tight mb-2 transition-colors ${
                          isActive ? 'text-[#39BFF8]' : 'text-gray-300 group-hover:text-white'
                        }`}>
                          {stage.title}
                        </h3>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Desktop active display frame */}
              <div className="hidden md:block bg-[#071B33]/90 border border-[#1267E5]/40 backdrop-blur-xl rounded-2xl p-8 max-w-3xl mx-auto shadow-2xl relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeWorkflowIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <span className="text-[10px] font-mono tracking-widest text-[#39BFF8] uppercase block mb-2 font-bold">
                      WORKFLOW STAGE 0{workflowStages[activeWorkflowIndex].number} OF 06
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {workflowStages[activeWorkflowIndex].title}
                    </h3>
                    <p className="text-base text-blue-100 leading-relaxed max-w-lg mx-auto">
                      {workflowStages[activeWorkflowIndex].text}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Mobile vertical flow timeline */}
              <div className="block md:hidden space-y-6 relative z-10">
                <div className="absolute top-0 left-5 w-[1px] h-full bg-white/20 z-0" />
                
                {workflowStages.map((stage) => (
                  <div key={stage.number} className="flex gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-[#1267E5] text-white border border-[#39BFF8]/40 shrink-0">
                      {stage.number}
                    </div>
                    <div className="flex-1 bg-[#071B33]/90 border border-[#1267E5]/40 rounded-2xl p-5 text-left">
                      <h3 className="text-base font-bold text-white mb-1">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-blue-100 leading-relaxed">
                        {stage.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — ROLE-BASED PLATFORM EXPERIENCE */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4">
                ONE PLATFORM. DIFFERENT OPERATIONAL ROLES.
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Give every team the information relevant to its responsibilities.
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                JoyaFleet supports configurable access and role-based operational workflows across management and airline departments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roleGroups.map((role) => (
                <div 
                  key={role.title}
                  className="bg-white/90 backdrop-blur-md p-8 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col justify-between hover:border-[#1267E5]/40 hover:shadow-md transition-all"
                >
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#1267E5] uppercase block mb-2 font-bold">
                      OPERATIONAL ROLE
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                      {role.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-8">
                      {role.description}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <span className="text-[9px] font-mono tracking-widest text-gray-500 block uppercase mb-3 font-bold">
                      PRIMARY INTERFACE CONNECTIONS
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {role.modules.map((modName) => (
                        <span 
                          key={modName}
                          className="text-xs bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 px-3 py-1 rounded-lg font-medium"
                        >
                          {modName}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 6 — CONFIGURATION AND CONTROL */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4">
                CONFIGURED AROUND YOUR OPERATION
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Configured Around Your Operation
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Configure workflows, user access, operational settings, reports and supported integrations around your operational structure and requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {capabilityCards.map((card) => (
                <div 
                  key={card.title}
                  className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col justify-between hover:border-[#1267E5]/40 transition-all"
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

            <div className="text-center pt-4">
              <Link
                to="/contact?intent=customization"
                className="inline-flex items-center gap-2 px-8 py-3.5 aviation-cta-bg hover:brightness-110 border border-[#1267E5]/30 text-white font-bold rounded-lg text-sm sm:text-base transition-all group shadow-lg shadow-[#1267E5]/25 focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Discuss Your Requirements
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>

          </div>
        </section>

        {/* SECTION 7 — PLATFORM IMPLEMENTATION SUPPORT */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4">
                STRUCTURED PLATFORM ADOPTION
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Support your team through configuration, migration preparation, training and deployment.
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our implementation process is structured around operational discovery, platform configuration, data migration, role-based training and supported go-live.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {supportPoints.map((point, pIdx) => (
                <div key={point.title} className="flex flex-col text-left bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                  <span className="w-9 h-9 rounded-full bg-[#1267E5] text-white flex items-center justify-center font-bold text-sm mb-4 shadow-md shadow-[#1267E5]/30">
                    {pIdx + 1}
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

            <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <p className="text-xs text-gray-600 max-w-md font-medium">
                Implementation timelines are tailored to the scale of the airline, migration requirements and level of customization.
              </p>
              <Link
                to="/contact?intent=demo"
                className="bg-[#EE1C25] hover:bg-[#D4151D] text-white font-bold px-6 py-3 rounded-lg text-xs sm:text-sm transition-colors whitespace-nowrap inline-flex items-center gap-2 group shadow-md shadow-[#EE1C25]/25 focus-visible:ring-2 focus-visible:ring-[#EE1C25] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Request a Platform Demo
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>

          </div>
        </section>

        {/* SECTION 8 — FINAL PLATFORM CTA */}
        <section id="product-cta-section" className="py-20 sm:py-32 px-5 sm:px-8 max-w-7xl mx-auto w-full pointer-events-auto overflow-hidden relative isolate">
          <div className="bg-[#071E3D] bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] rounded-3xl p-8 sm:p-16 text-white text-center relative overflow-hidden flex flex-col items-center shadow-2xl border border-[#1267E5]/30">
            <div className="relative z-10 max-w-3xl flex flex-col items-center">
              <span className="text-xs font-bold text-[#39BFF8] uppercase tracking-widest mb-4 font-mono">
                TAILORED PRODUCT EVALUATION
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight leading-tight text-white">
                See how JoyaFleet can support your flight operations.
              </h2>
              <p className="text-base sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-10">
                Discuss your operational workflows, current processes and requirements with the JoyaFleet team.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
                <Link
                  to="/contact?intent=demo"
                  className="bg-[#EE1C25] hover:bg-[#D4151D] text-white text-center font-bold px-8 py-3.5 rounded-lg text-sm sm:text-base shadow-lg shadow-[#EE1C25]/25 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Request a Demo
                </Link>
              </div>

              <p className="text-xs text-blue-200/80 font-medium tracking-wide">
                Cloud deployment • Migration assessment • Role-based training • Support under an agreed plan
              </p>
            </div>
          </div>
        </section>

      </div>
      <AnimatePresence>
        {activeVisual?.imageUrl && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#071B33]/85 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`Enlarged ${activeVisual.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVisual(null)}
          >
            <motion.div
              className="relative flex max-h-full w-full max-w-6xl flex-col rounded-2xl bg-white p-3 shadow-2xl"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveVisual(null)}
                className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#071B33]/90 text-white shadow-lg transition-colors hover:bg-[#1267E5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2"
                aria-label="Close enlarged image"
                autoFocus
              >
                <X size={20} aria-hidden="true" />
              </button>
              <img
                src={activeVisual.imageUrl}
                alt={activeVisual.alt}
                className="max-h-[82vh] w-full rounded-xl object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
