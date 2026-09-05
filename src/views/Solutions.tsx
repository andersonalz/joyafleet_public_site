/*
 * Copyright 2026 Joya Fleet
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState, useRef } from 'react';
import Link from '../components/RouterLink';
import { motion, MotionConfig, AnimatePresence } from 'motion/react';
import { HeroBackground } from '../components/HeroBackground';
import {
  Plane,
  Compass,
  RotateCcw,
  Truck,
  ArrowRight,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Check,
  Radio,
  Sliders,
  FileCheck
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

interface WorkflowLink {
  name: string;
  path: string;
  tag: string;
}

interface SolutionDetails {
  id: 'business' | 'charter' | 'scheduled' | 'cargo';
  title: string;
  badge: string;
  summary: string;
  operationalNeeds: string[];
  workflows: WorkflowLink[];
  boundary: string;
  ctaLabel: string;
  ctaPath: string;
  telemetryMetrics: { label: string; value: string }[];
}

const SOLUTIONS_DATA: Record<'business' | 'charter' | 'scheduled' | 'cargo', SolutionDetails> = {
  business: {
    id: 'business',
    title: 'Business Aviation & VIP Transport',
    badge: 'AD-HOC & VIP FLIGHT OPS',
    summary: 'Coordinate rapidly changing flight itineraries, VIP passenger manifests, ad-hoc slot clearances, and dedicated crew duty limits in one unified operational cockpit.',
    operationalNeeds: [
      'Rapid itinerary adjustments & ad-hoc flight creation',
      'VIP passenger & tailored payload weight distributions',
      'Multi-leg international & domestic routing context',
      'Instant dispatch release & digital journey logs',
      'Owner & management executive cost reporting'
    ],
    workflows: [
      { name: 'Flight Scheduling & Rotations', path: '/platform/flight-scheduling', tag: 'Ad-Hoc Matrix' },
      { name: 'Operations & Dispatch Watch', path: '/platform/operations-dispatch', tag: 'Live Radar' },
      { name: 'Crew Management & FTL Limits', path: '/platform/crew-management-ftl', tag: 'Duty Watch' },
      { name: 'Fleet Maintenance Tracking', path: '/platform/fleet-maintenance', tag: 'Aircraft Status' },
      { name: 'Reporting & Analytics Suite', path: '/platform/reporting-analytics', tag: 'Executive BI' }
    ],
    boundary: 'Tailored around business aviation SOPs, bespoke permit approvals, and private operator access control requirements.',
    ctaLabel: 'Discuss Business Aviation Workflow',
    ctaPath: '/contact?intent=customization',
    telemetryMetrics: [
      { label: 'Schedule Volatility', value: 'High / Dynamic' },
      { label: 'Turnaround Target', value: '45 mins' },
      { label: 'Permit Lead-Time', value: 'Live Validation' }
    ]
  },
  charter: {
    id: 'charter',
    title: 'Charter & Wet-Lease Operators',
    badge: 'COMMERCIAL CHARTER & ACMI',
    summary: 'Keep unpredictable flying schedules, wet-lease contracts, ad-hoc crew rosters, and live dispatch releases synchronized across mission control from quote to post-flight archiving.',
    operationalNeeds: [
      'Variable flying programs with contracted block hours',
      'Single-leg, out-and-back and multi-day charter rotations',
      'Dynamic aircraft & crew availability validation',
      'Automated operational flight plan (OFP) dispatch releases',
      'Precise fuel burn, delay coding, and journey log records'
    ],
    workflows: [
      { name: 'Flight Scheduling & Rotations', path: '/platform/flight-scheduling', tag: 'Charter Timetable' },
      { name: 'Operations & Dispatch Watch', path: '/platform/operations-dispatch', tag: 'OCC Control' },
      { name: 'Crew Management & FTL Limits', path: '/platform/crew-management-ftl', tag: 'Roster Engine' },
      { name: 'Fleet Maintenance Tracking', path: '/platform/fleet-maintenance', tag: 'MEL / TechLog' },
      { name: 'Reporting & Analytics Suite', path: '/platform/reporting-analytics', tag: 'Block Hours' }
    ],
    boundary: 'External broker interfaces and contract invoicing are connected via modular REST APIs or agreed customer configurations.',
    ctaLabel: 'Request a Charter Operations Demo',
    ctaPath: '/contact?intent=demo',
    telemetryMetrics: [
      { label: 'Block Hour Tracking', value: 'Real-Time' },
      { label: 'Crew Swap Latency', value: '< 60 sec' },
      { label: 'CAO IRI Sync', value: 'Automated' }
    ]
  },
  scheduled: {
    id: 'scheduled',
    title: 'Scheduled Regional & Domestic Airlines',
    badge: 'COMMERCIAL AIRLINE NETWORK',
    summary: 'Construct seasonal flying programs, coordinate day-of-ops disruptions, and keep cockpit crews, cabin attendants, and aircraft tails synchronized across the complete schedule lifecycle.',
    operationalNeeds: [
      'Recurring seasonal timetable master matrices (SSIM format)',
      'High-volume bulk schedule publishing and revision watch',
      'Rigorous multi-stage draft, review, and approval gates',
      'Complex FTL cumulative duty & rest tracking under CAO IRI',
      'Live operations watch with automated MVT and delay tracking'
    ],
    workflows: [
      { name: 'Flight Scheduling & Rotations', path: '/platform/flight-scheduling', tag: 'Master Schedule' },
      { name: 'Operations & Dispatch Watch', path: '/platform/operations-dispatch', tag: 'OCC Watch' },
      { name: 'Crew Management & FTL Limits', path: '/platform/crew-management-ftl', tag: 'FTL Compliant' },
      { name: 'Fleet Maintenance Tracking', path: '/platform/fleet-maintenance', tag: 'C-Check / Phase' },
      { name: 'Reporting & Analytics Suite', path: '/platform/reporting-analytics', tag: 'OTP & Punctuality' }
    ],
    boundary: 'GDS / PSS passenger reservation feeds and CAO portal submissions are governed through standard connectors and verified integrations.',
    ctaLabel: 'Explore Scheduled Airline Solutions',
    ctaPath: '/contact?intent=demo',
    telemetryMetrics: [
      { label: 'Schedule Scale', value: '100+ Flights/Day' },
      { label: 'OTP Monitoring', value: 'A14 / D15 Live' },
      { label: 'FTL Enforcement', value: '100% Ruleset' }
    ]
  },
  cargo: {
    id: 'cargo',
    title: 'Air Cargo & Freight Carriers',
    badge: 'CARGO LOGISTICS & SPECIAL FREIGHT',
    summary: 'Coordinate dedicated freighter schedules, night-time hub rotations, specialized dangerous goods payloads, and strict turnaround times with end-to-end operational visibility.',
    operationalNeeds: [
      'Recurring and ad-hoc cargo flight network schedules',
      'Freighter payload, volumetric weight, and pallet distribution context',
      'Specialized crew qualification and night-duty limitation rosters',
      'Streamlined digital dispatch releases and weight & balance checks',
      'Comprehensive fuel efficiency and heavy-maintenance cycle audits'
    ],
    workflows: [
      { name: 'Flight Scheduling & Rotations', path: '/platform/flight-scheduling', tag: 'Freighter Timetable' },
      { name: 'Operations & Dispatch Watch', path: '/platform/operations-dispatch', tag: 'Night OCC Desk' },
      { name: 'Crew Management & FTL Limits', path: '/platform/crew-management-ftl', tag: 'Night FTL Rules' },
      { name: 'Fleet Maintenance Tracking', path: '/platform/fleet-maintenance', tag: 'Heavy Check Logs' },
      { name: 'Reporting & Analytics Suite', path: '/platform/reporting-analytics', tag: 'Payload Utilization' }
    ],
    boundary: 'Custom warehouse management and customs clearance integrations are structured through dedicated API gateways.',
    ctaLabel: 'Discuss Cargo Fleet Operations',
    ctaPath: '/contact?intent=customization',
    telemetryMetrics: [
      { label: 'Turnaround Window', value: '60-90 mins' },
      { label: 'Night FTL Auditing', value: 'Active Engine' },
      { label: 'Payload Tracking', value: 'Tons / Volume' }
    ]
  }
};

const SOLUTIONS_LIST = [
  { id: 'business', label: 'Business Aviation', icon: Plane, desc: 'VIP & Ad-hoc Operations' },
  { id: 'charter', label: 'Charter Operators', icon: Compass, desc: 'ACMI & On-Demand' },
  { id: 'scheduled', label: 'Scheduled Airlines', icon: RotateCcw, desc: 'Commercial Timetable' },
  { id: 'cargo', label: 'Cargo Carriers', icon: Truck, desc: 'Freighter & Freight Ops' }
] as const;

const OPERATIONAL_CAPABILITIES_MATRIX = [
  {
    capability: 'Schedule Flexibility & Ad-Hoc Edits',
    business: 'Instantaneous / Real-time',
    charter: 'High Agility / Multi-leg',
    scheduled: 'Draft / Approval Cycle',
    cargo: 'Dynamic Night Rotations'
  },
  {
    capability: 'Crew Duty Limit (FTL) Ruleset',
    business: 'Dedicated Private / Part-135',
    charter: 'CAO IRI & Commercial FTL',
    scheduled: 'Full Commercial CAO IRI Matrix',
    cargo: 'Night-Shift / Extended Duty'
  },
  {
    capability: 'Dispatch & Flight Release',
    business: 'Direct Pilot / OCC Briefing',
    charter: 'Automated OFP Release',
    scheduled: 'Multi-Desk Centralized OCC',
    cargo: 'Integrated Weight & Balance'
  },
  {
    capability: 'Maintenance & AOG Recovery',
    business: 'Fast-Track Line Support',
    charter: 'MEL Restriction Watch',
    scheduled: 'Structural Phase / C-Check',
    cargo: 'Base Maintenance Scheduling'
  },
  {
    capability: 'Civil Aviation & Authority Audit',
    business: 'Private Flight Archives',
    charter: 'Charter Passenger Logs',
    scheduled: 'Automated CAO IRI Portal Sync',
    cargo: 'Hazardous Goods & Manifests'
  }
];

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState<'business' | 'charter' | 'scheduled' | 'cargo'>('business');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useSEO({
    title: 'Solutions for Airline Operating Models | Joya Fleet',
    description: 'Explore how Joya Fleet supports business aviation, charter, scheduled and cargo operators through connected, configurable flight-operations workflows.',
    canonicalPath: '/solutions',
    ogTitle: 'Solutions for Airline Operating Models | Joya Fleet',
    ogDescription: 'Explore connected flight-operations workflows for business aviation, charter, scheduled and cargo operators.'
  });

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = -1;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (index + 1) % SOLUTIONS_LIST.length;
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (index - 1 + SOLUTIONS_LIST.length) % SOLUTIONS_LIST.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = 0;
    }

    if (nextIndex !== -1) {
      const nextSol = SOLUTIONS_LIST[nextIndex];
      setActiveSolution(nextSol.id);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="w-full pointer-events-auto bg-transparent min-h-screen text-gray-900 font-sans">
        
        {/* HERO SECTION */}
        <section id="hero" className="w-full min-h-screen relative isolate pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden flex flex-col items-center justify-center bg-[#071E3D] bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] text-white m-0">
          <HeroBackground />
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
            
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              data-aos="fade-down"
            >
              <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 mb-8 text-xs font-semibold text-blue-200 tracking-wider uppercase font-mono bg-[#1267E5]/20 backdrop-blur-md px-4 py-1.5 rounded-lg border border-[#38BDF8]/30 shadow-2xs">
                <Link to="/" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:outline-none rounded">Home</Link>
                <ChevronRight size={10} aria-hidden="true" className="text-blue-300" />
                <span className="text-[#38BDF8] font-bold" aria-current="page">Airline Operating Models</span>
              </nav>
            </motion.div>

            {/* Hero Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              data-aos="fade-right"
              className="bg-white/95 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/80 shadow-2xl shadow-[#071E3D]/40 mb-8 text-gray-900"
            >
              <div className="max-w-3xl text-left">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                  <Sparkles size={12} aria-hidden="true" className="text-[#1267E5]" /> OPERATIONAL ARCHETYPE SOLUTIONS
                </span>
                
                <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                  Solutions engineered for every airline operating model.
                </h1>
                
                <p className="text-xl sm:text-2xl font-bold text-[#1267E5] mb-4">
                  Configured around how your OCC, flight dispatch, and crew rosters operate.
                </p>
                
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mb-8">
                  Whether managing ad-hoc VIP jets, seasonal scheduled networks, high-frequency charters, or dedicated cargo freight, Joya Fleet provides synchronized operational clarity.
                </p>
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-gray-200/80">
                <div className="bg-gray-50/90 backdrop-blur-sm p-4 rounded-2xl border border-gray-200/80 shadow-xs">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block font-bold">Supported Archetypes</span>
                  <span className="text-lg sm:text-xl font-bold text-gray-900 font-mono">4 Core Models</span>
                </div>
                <div className="bg-gray-50/90 backdrop-blur-sm p-4 rounded-2xl border border-gray-200/80 shadow-xs">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block font-bold">Regulatory Target</span>
                  <span className="text-lg sm:text-xl font-bold text-[#1267E5] font-mono">CAO IRI & ICAO</span>
                </div>
                <div className="bg-gray-50/90 backdrop-blur-sm p-4 rounded-2xl border border-gray-200/80 shadow-xs">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block font-bold">Dispatch Watch</span>
                  <span className="text-lg sm:text-xl font-bold text-gray-900 font-mono">Real-Time Sync</span>
                </div>
                <div className="bg-gray-50/90 backdrop-blur-sm p-4 rounded-2xl border border-gray-200/80 shadow-xs">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block font-bold">Deployment Hub</span>
                  <span className="text-lg sm:text-xl font-bold text-[#1267E5] font-mono">Shiraz, IR</span>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* INTERACTIVE SOLUTION SELECTOR & WORKSPACES */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            {/* TABS CONTAINER */}
            <div
              role="tablist"
              aria-label="Operating Model Solutions"
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 p-2 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-md"
            >
              {SOLUTIONS_LIST.map((sol, index) => {
                const Icon = sol.icon;
                const isActive = activeSolution === sol.id;
                return (
                  <button
                    key={sol.id}
                    id={`tab-${sol.id}`}
                    ref={(el) => { tabRefs.current[index] = el; }}
                    type="button"
                    role="tab"
                    tabIndex={isActive ? 0 : -1}
                    aria-selected={isActive}
                    aria-controls={`panel-${sol.id}`}
                    onClick={() => setActiveSolution(sol.id)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 rounded-xl font-bold text-left transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] ${
                      isActive
                        ? 'bg-gradient-to-b from-[#071B33] to-[#040E1A] text-white shadow-md border border-[#1267E5]/40'
                        : 'bg-white/60 text-gray-700 hover:text-gray-950 hover:bg-white/90 border border-gray-200/50'
                    }`}
                  >
                    <div className={`p-2 rounded-lg shrink-0 ${
                      isActive ? 'bg-[#1267E5] text-white shadow-sm' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <span className="block text-xs sm:text-sm font-bold tracking-tight">
                        {sol.label}
                      </span>
                      <span className={`text-[10px] font-mono block ${isActive ? 'text-[#39BFF8]' : 'text-gray-500'}`}>
                        {sol.desc}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ACTIVE TABPANELS */}
            <AnimatePresence mode="wait">
              {SOLUTIONS_LIST.map((sol) => {
                if (sol.id !== activeSolution) return null;

                const content = SOLUTIONS_DATA[sol.id];
                const Icon = sol.icon;

                return (
                  <motion.div
                    key={sol.id}
                    id={`panel-${sol.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${sol.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-16"
                  >
                    {/* Left Column: Solution Detail & Needs (7 COLS) */}
                    <div className="lg:col-span-7 bg-white/90 backdrop-blur-md p-6 sm:p-10 lg:p-12 rounded-3xl border border-gray-200/80 shadow-xl flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-radial-gradient from-[#1267E5]/10 to-transparent pointer-events-none rounded-full blur-3xl" />
                      
                      <div>
                        <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-200/80">
                          <div className="flex items-center gap-3">
                            <div className="p-3 bg-[#1267E5]/10 border border-[#1267E5]/20 rounded-xl text-[#1267E5]">
                              <Icon size={24} aria-hidden="true" />
                            </div>
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1267E5] font-mono block">
                                {content.badge}
                              </span>
                              <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 tracking-tight">
                                {content.title}
                              </h2>
                            </div>
                          </div>
                          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[10px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span>QUALIFIED WORKFLOW</span>
                          </span>
                        </div>

                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 font-normal">
                          {content.summary}
                        </p>

                        {/* Operational telemetry badges */}
                        <div className="grid grid-cols-3 gap-3 mb-8 bg-gray-50/90 p-4 rounded-2xl border border-gray-200/80 font-mono text-xs">
                          {content.telemetryMetrics.map((met, idx) => (
                            <div key={idx} className="text-left">
                              <span className="text-[10px] text-gray-500 uppercase block">{met.label}</span>
                              <span className="font-bold text-gray-900 sm:text-sm">{met.value}</span>
                            </div>
                          ))}
                        </div>

                        {/* Key Needs checklist */}
                        <div className="mb-8">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 font-mono mb-4 flex items-center gap-2">
                            <Check size={14} className="text-[#1267E5]" />
                            KEY OPERATIONAL COORDINATION NEEDS
                          </h3>
                          <div className="space-y-3">
                            {content.operationalNeeds.map((need, idx) => (
                              <div key={idx} className="border-l-4 border-[#1267E5] bg-white/80 backdrop-blur-md p-3.5 rounded-r-xl border-y border-r border-gray-200/80 shadow-xs flex items-center gap-3 text-sm text-gray-800">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1267E5] shrink-0" />
                                <span className="font-semibold text-gray-900">{need}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <Link
                          to={content.ctaPath}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EE1C25] hover:bg-[#D4151D] text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-[#EE1C25]/25 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EE1C25]"
                        >
                          <span>{content.ctaLabel}</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </Link>
                        <Link
                          to="/contact?intent=demo"
                          className="text-xs font-bold text-gray-600 hover:text-[#EE1C25] font-mono uppercase tracking-wider flex items-center gap-1"
                        >
                          <span>Schedule OCC Walkthrough</span>
                          <ChevronRight size={12} />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Workflows Terminal & Boundaries (5 COLS) */}
                    <div className="lg:col-span-5 bg-gradient-to-b from-[#071B33] to-[#040E1A] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[#1267E5]/30 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-radial-gradient from-[#1267E5]/20 to-transparent pointer-events-none rounded-full" />
                      
                      <div>
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <Radio size={16} className="text-[#39BFF8]" />
                            <h3 className="text-xs font-bold uppercase tracking-wider text-[#39BFF8] font-mono">
                              CONNECTED JOYA WORKFLOWS
                            </h3>
                          </div>
                          <span className="text-[10px] font-mono text-gray-400">5 Modules</span>
                        </div>

                        <div className="space-y-3 mb-8">
                          {content.workflows.map((wf) => (
                            <Link
                              key={wf.path}
                              to={wf.path}
                              className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#1267E5]/50 text-gray-200 hover:text-white transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39BFF8]"
                            >
                              <div className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#39BFF8]" />
                                <span className="text-xs sm:text-sm font-semibold">{wf.name}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-mono text-gray-400 px-2 py-0.5 rounded bg-white/5 border border-white/10 hidden sm:inline-block">
                                  {wf.tag}
                                </span>
                                <ArrowRight size={14} className="text-[#39BFF8] group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                          <ShieldCheck size={14} className="text-[#39BFF8]" />
                          <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-300 font-mono">
                            IMPLEMENTATION & COMPLIANCE BOUNDARY
                          </h4>
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed font-normal bg-white/5 p-3.5 rounded-xl border border-white/10">
                          {content.boundary}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

          </div>
        </section>

        {/* MATRIX COMPARISON SECTION */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-14 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Sliders size={12} className="text-[#1267E5]" /> CROSS-OPERATING MATRIX
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Operational comparison across airline archetypes
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                How Joya Fleet dynamically configures scheduling workflows, FTL compliance sets, and dispatch gates for each distinct operating environment.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#071B33] to-[#040E1A] text-white text-xs font-mono uppercase tracking-wider">
                      <th className="p-5 font-bold border-b border-white/10">Operational Capability</th>
                      <th className="p-5 font-bold border-b border-white/10">Business Aviation</th>
                      <th className="p-5 font-bold border-b border-white/10">Charter Operators</th>
                      <th className="p-5 font-bold border-b border-white/10">Scheduled Airlines</th>
                      <th className="p-5 font-bold border-b border-white/10">Cargo Freight</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200/80 text-xs sm:text-sm">
                    {OPERATIONAL_CAPABILITIES_MATRIX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#1267E5]/5 transition-colors">
                        <td className="p-5 font-bold text-gray-950 font-mono text-xs flex items-center gap-2">
                          <FileCheck size={14} className="text-[#1267E5] shrink-0" />
                          <span>{row.capability}</span>
                        </td>
                        <td className="p-5 text-gray-700 font-medium">{row.business}</td>
                        <td className="p-5 text-gray-700 font-medium">{row.charter}</td>
                        <td className="p-5 text-[#1267E5] font-bold">{row.scheduled}</td>
                        <td className="p-5 text-gray-700 font-medium">{row.cargo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* CLOSING AVIATION CTA SECTION */}
        <section id="solutions-cta-section" className="py-20 sm:py-28 relative isolate overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            <div className="relative overflow-hidden rounded-3xl bg-[#071E3D] bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] p-8 sm:p-14 text-white border border-[#1267E5]/30 shadow-2xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div className="absolute top-0 right-0 w-96 h-96 bg-radial-gradient from-[#1267E5]/25 to-transparent pointer-events-none rounded-full blur-3xl" />

              <div className="max-w-2xl relative z-10">
                <span className="text-[10px] font-mono tracking-widest text-[#39BFF8] uppercase font-bold block mb-2">
                  OPERATIONAL ONBOARDING & CONSULTATION
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                  Discuss your airline’s operating model and requirements.
                </h2>
                <p className="text-blue-100 text-base sm:text-lg leading-relaxed font-normal">
                  Review how Joya Fleet can be configured around your scheduling rotations, dispatch watch, flight crew FTL parameters, and legacy integrations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto shrink-0">
                <Link
                  to="/contact?intent=demo"
                  className="bg-[#EE1C25] hover:bg-[#D4151D] text-white text-center font-bold px-8 py-4 rounded-xl text-sm shadow-lg shadow-[#EE1C25]/25 flex items-center justify-center gap-2"
                >
                  <span>Request a Demo</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  to="/contact?intent=customization"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-center font-bold px-6 py-4 rounded-xl text-sm flex items-center justify-center"
                >
                  <span>Discuss Configuration</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </MotionConfig>
  );
}
