/*
 * Copyright 2026 Joya Fleet
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, MotionConfig } from 'motion/react';
import { HeroBackground } from '../components/HeroBackground';
import {
  User,
  ArrowRight,
  ChevronRight,
  Sparkles,
  MapPin,
  Compass,
  Target,
  Globe,
  ShieldCheck,
  Cpu,
  Workflow,
  ChevronDown
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  discipline: string;
  location: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Mohammad Hossein Rezazadeh",
    role: "Project Manager",
    initials: "MR",
    discipline: "Operations & Product Strategy",
    location: "Shiraz, Iran"
  },
  {
    name: "Ehsan Alizadegan",
    role: "Backend Developer",
    initials: "EA",
    discipline: "Aviation API & Data Architecture",
    location: "Shiraz, Iran"
  },
  {
    name: "Mehdi Mohammadi",
    role: "Backend Developer",
    initials: "MM",
    discipline: "Core Engine & System Integrations",
    location: "Shiraz, Iran"
  },
  {
    name: "Omid Heydarzadeh",
    role: "Frontend Developer",
    initials: "OH",
    discipline: "UI Architecture & Operational Workspaces",
    location: "Shiraz, Iran"
  }
];

const FAQS: FAQItem[] = [
  {
    question: "Where is Joya Fleet developed?",
    answer: "Joya Fleet is proudly designed and engineered in Shiraz, Fars Province, Iran, with direct access to local aviation operators, dispatchers, and regulatory specialists."
  },
  {
    question: "Who is Joya Fleet designed for?",
    answer: "The platform is purpose-built for airline executives, operations control center (OCC) directors, chief pilots, crew schedulers, maintenance planners, and accountable managers coordinating connected flight-operations workflows."
  },
  {
    question: "Can Joya Fleet be configured around an airline's unique fleet & route network?",
    answer: "Yes. Configuration is assessed against documented operational rules, FTL duty limitations, fleet configurations, custom operational reporting, and third-party integrations."
  },
  {
    question: "Can existing historical data and flight schedules be migrated?",
    answer: "Compatible data—including aircraft registries, crew records, recurring flight schedule rotations, and historical logbooks—may be migrated following structured technical assessment and validation."
  },
  {
    question: "Is an operational trial or sandbox environment available?",
    answer: "Trial access may be requested and is subject to qualification, operational scope validation, and available implementation slots."
  },
  {
    question: "What technical support and SLA are available?",
    answer: "Dedicated technical support is provided under agreed implementation plans with direct access to our core development and aviation engineering team."
  }
];

export default function AboutUs() {
  useSEO({
    title: "About Joya Fleet | Airline Operations Platform",
    description: "Learn why Joya Fleet was developed in Shiraz, Iran, how the platform supports connected flight-operations workflows and who is building it.",
    canonicalPath: "/about",
    ogTitle: "About Joya Fleet | Airline Operations Platform",
    ogDescription: "Learn about the Joya Fleet project, its product direction, development team and focus on connected airline operations."
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
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
                <span className="text-[#38BDF8] font-bold" aria-current="page">About Joya Fleet</span>
              </nav>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                data-aos="fade-right"
                className="lg:col-span-8 flex flex-col items-start text-left bg-white/95 backdrop-blur-2xl p-8 sm:p-12 rounded-3xl border border-white/80 shadow-2xl shadow-[#071E3D]/40 text-gray-900"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/25 rounded-lg text-xs font-bold uppercase tracking-widest mb-6 font-mono shadow-xs">
                  <Sparkles size={12} aria-hidden="true" className="text-[#1267E5]" /> ENGINEERING AVIATION CLARITY
                </span>
                
                <h1 className="text-4xl sm:text-6xl font-bold text-[#10233f] tracking-tight leading-tight mb-4">
                  Built around the realities of airline operations.
                </h1>
                
                <p className="text-xl sm:text-2xl font-bold text-[#1267E5] mb-6">
                  Developed in Shiraz, Iran, for connected flight-operations workflows.
                </p>
                
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl">
                  Joya Fleet brings flight scheduling, operations dispatch, crew duty limits, maintenance tracking, and regulatory reporting into one unified, configurable ecosystem.
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                  <Link
                    to="/contact?intent=demo"
                    className="bg-[#1267E5] hover:bg-[#0E54BD] text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-all shadow-lg shadow-[#1267E5]/25"
                  >
                    Meet Our Engineering Team
                  </Link>
                  <Link
                    to="/platform"
                    className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-gray-800 font-bold px-8 py-3.5 rounded-lg text-sm transition-all"
                  >
                    Explore Platform Capabilities
                  </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200/80 flex flex-wrap items-center gap-6 text-xs text-gray-600 font-mono">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#1267E5]" /> Shiraz R&D Center
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Workflow size={14} className="text-[#1267E5]" /> Inception: 1400 SH
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-[#1267E5]" /> Dedicated Aviation Focus
                  </span>
                </div>
              </motion.div>

              {/* Quick Aviation Facts Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                data-aos="fade-left"
                className="lg:col-span-4 relative overflow-hidden rounded-3xl bg-[#071E3D] bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] p-8 text-white border border-[#38BDF8]/30 shadow-2xl flex flex-col justify-between h-full min-h-[380px]"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.25),transparent_70%)] pointer-events-none rounded-full" />
                
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#38BDF8] block uppercase font-bold mb-2">
                    PLATFORM IDENTITY
                  </span>
                  <h3 className="text-xl font-bold font-mono tracking-tight text-white mb-4">
                    JOYA FLEET ARCHITECTURE
                  </h3>
                  <p className="text-xs text-blue-100/90 leading-relaxed mb-6 font-medium">
                    Designed from the ground up to solve fragmentation across flight operations, dispatch coordination, and compliance tracking in complex aviation environments.
                  </p>
                </div>

                <div className="space-y-3 font-mono text-xs border-t border-white/10 pt-4 text-blue-200">
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-blue-300">Headquarters</span>
                    <span className="text-white font-bold">Shiraz, Iran</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-blue-300">Core Engine</span>
                    <span className="text-[#38BDF8] font-bold">Real-time Dispatch</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-blue-300">Target Segment</span>
                    <span className="text-white font-bold">Regional & Charter</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SECTION 2 — ORIGINS & WHY JOYA FLEET WAS STARTED */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            <div className="bg-white/90 backdrop-blur-md p-8 sm:p-14 rounded-3xl border border-gray-200/80 shadow-xl">
              
              <div className="max-w-3xl mb-12 text-left">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                  <Workflow size={12} className="text-[#1267E5]" /> THE GENESIS
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-6">
                  Why Joya Fleet was started
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <p>
                    The Joya Fleet project began in <strong className="text-gray-950">1400 SH</strong> in Shiraz with a deliberate focus: eliminating the friction and risks created by fragmented operational tools across airline departments.
                  </p>
                  <p>
                    In everyday airline operations, schedules live in spreadsheets, crew duty limits in separate offline software, maintenance logs in physical books or isolated databases, and civil aviation authority reporting in yet another portal.
                  </p>
                  <p>
                    Joya Fleet bridges these silos into a cohesive, synchronized platform built specifically for the operational, regulatory, and technical realities of airlines in Iran and the broader region.
                  </p>
                </div>
              </div>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200/80">
                <div className="border-l-4 border-[#1267E5] bg-gray-50/80 backdrop-blur-sm p-6 rounded-r-2xl border-y border-r border-gray-200/80 shadow-xs">
                  <span className="text-[10px] font-mono font-bold text-[#1267E5] tracking-wider uppercase block mb-2">01 • CLARITY</span>
                  <h4 className="font-bold text-gray-950 text-base mb-2">Operational Synchronization</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Single operational truth across OCC dispatch, crew scheduling, and fleet engineering.</p>
                </div>

                <div className="border-l-4 border-[#1267E5] bg-gray-50/80 backdrop-blur-sm p-6 rounded-r-2xl border-y border-r border-gray-200/80 shadow-xs">
                  <span className="text-[10px] font-mono font-bold text-[#1267E5] tracking-wider uppercase block mb-2">02 • INTEGRITY</span>
                  <h4 className="font-bold text-gray-950 text-base mb-2">Regional Compliance</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Configured around CAO IRI standards, strict FTL limits, and regional airline requirements.</p>
                </div>

                <div className="border-l-4 border-[#1267E5] bg-gray-50/80 backdrop-blur-sm p-6 rounded-r-2xl border-y border-r border-gray-200/80 shadow-xs">
                  <span className="text-[10px] font-mono font-bold text-[#1267E5] tracking-wider uppercase block mb-2">03 • FLEXIBILITY</span>
                  <h4 className="font-bold text-gray-950 text-base mb-2">Practical Customization</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Configurable modules that adapt to airline scale, from 2-aircraft charters to multi-fleet carriers.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3 — MISSION & PRODUCT DIRECTION */}
        <section className="py-20 sm:py-32 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Target size={12} className="text-[#1267E5]" /> GUIDING PRINCIPLES
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Mission and product direction
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We design software that airline personnel can trust during high-stress dispatch windows and complex schedule shifts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-lg hover:border-[#1267E5]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="p-3.5 bg-[#1267E5]/10 border border-[#1267E5]/20 rounded-2xl w-fit mb-6 text-[#1267E5]">
                    <Compass size={24} aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#1267E5] tracking-wider uppercase block mb-2">OUR MISSION</span>
                  <h3 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight">
                    Unify Operational Coordination
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Help airline teams maintain crystal-clear operational coordination by keeping relevant flight planning, execution watch, crew tracking, and reporting information intimately connected.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-200/80 font-mono text-xs text-gray-500">
                  Principle: Continuous operational context without manual re-entry.
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-lg hover:border-[#1267E5]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="p-3.5 bg-[#1267E5]/10 border border-[#1267E5]/20 rounded-2xl w-fit mb-6 text-[#1267E5]">
                    <Cpu size={24} aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#1267E5] tracking-wider uppercase block mb-2">OUR PRODUCT DIRECTION</span>
                  <h3 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight">
                    Pragmatic Aviation Engineering
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Build a configurable flight-operations platform that genuinely supports documented airline workflows without overstating automation, unrealistic compliance claims, or universal connectivity.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-200/80 font-mono text-xs text-gray-500">
                  Principle: Robust, auditable execution built for real-world operations.
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4 — MARKET DIRECTION */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Globe size={12} className="text-[#1267E5]" /> GEOGRAPHIC HORIZONS
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Market and development direction
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our engineering roadmap expands from specialized regional airline support toward international interoperability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-gray-200/80 shadow-md hover:border-[#1267E5]/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#1267E5] uppercase bg-[#1267E5]/10 border border-[#1267E5]/20 px-2.5 py-1 rounded">
                      PRIMARY BASE
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-950 mb-2 tracking-tight">
                    Iran Aviation Sector
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    Comprehensive support for scheduled, charter, cargo, and business aviation operators with full CAO IRI regulatory alignment.
                  </p>
                </div>
                <div className="border-t border-gray-200/80 pt-4 text-xs font-mono text-gray-500">
                  Direct on-site and remote engineering support in Shiraz & Tehran.
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-gray-200/80 shadow-md hover:border-[#1267E5]/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#1267E5] uppercase bg-[#1267E5]/10 border border-[#1267E5]/20 px-2.5 py-1 rounded">
                      REGIONAL EXPANSION
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#1267E5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-950 mb-2 tracking-tight">
                    Middle East & Europe
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    Extending standard ICAO/EASA compliant flight scheduling, FTL schemas, and cross-border operational interfaces.
                  </p>
                </div>
                <div className="border-t border-gray-200/80 pt-4 text-xs font-mono text-gray-500">
                  Cross-border charter & wet-lease operations compatibility.
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-gray-200/80 shadow-md hover:border-[#1267E5]/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#1267E5] uppercase bg-[#1267E5]/10 border border-[#1267E5]/20 px-2.5 py-1 rounded">
                      LONG-TERM ROADMAP
                    </span>
                    <span className="w-2 h-2 rounded-full bg-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-950 mb-2 tracking-tight">
                    Global Fleet Interoperability
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    Open REST/WebSocket API endpoints, automated weather gateways, and international ACARS/MVT synchronization.
                  </p>
                </div>
                <div className="border-t border-gray-200/80 pt-4 text-xs font-mono text-gray-500">
                  Universal aviation data interchange standards.
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 5 — THE ENGINEERING & PRODUCT TEAM */}
        <section className="py-20 sm:py-32 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <User size={12} className="text-[#1267E5]" /> ENGINEERING TALENT
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                The Joya Fleet core team
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Software engineers and aviation product designers based in Shiraz, dedicated to crafting resilient operations software.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.name}
                  className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-md hover:border-[#1267E5]/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 bg-gradient-to-b from-[#071B33] to-[#040E1A] text-[#39BFF8] border border-[#1267E5]/40 rounded-2xl flex items-center justify-center font-mono font-bold text-lg shadow-lg group-hover:scale-105 transition-transform">
                        {member.initials}
                      </div>
                      <span className="text-[9px] font-mono font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        SHIRAZ, IR
                      </span>
                    </div>

                    <h3 className="font-bold text-gray-950 text-lg mb-1 tracking-tight">
                      {member.name}
                    </h3>
                    
                    <p className="text-xs font-bold text-[#1267E5] uppercase tracking-wider font-mono mb-3">
                      {member.role}
                    </p>

                    <p className="text-xs text-gray-600 leading-relaxed">
                      {member.discipline}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-gray-200/80 flex items-center gap-1.5 text-[10px] font-mono text-gray-500">
                    <MapPin size={10} className="text-[#1267E5]" />
                    <span>{member.location}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 6 — FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-4xl mx-auto w-full">
            
            <div className="mb-14 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Sparkles size={12} className="text-[#1267E5]" /> QUESTIONS & ANSWERS
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                Clear answers about Joya Fleet origin, capabilities, deployment models and support.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.question}
                    className={`bg-white/90 backdrop-blur-md border transition-all rounded-2xl overflow-hidden ${
                      isOpen ? 'border-[#1267E5] shadow-lg shadow-[#1267E5]/10' : 'border-gray-200/80 hover:border-[#1267E5]/40 shadow-xs'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                      className="w-full text-left p-6 flex justify-between items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5]"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-gray-950 pr-4">
                        {faq.question}
                      </h3>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                        isOpen ? 'bg-[#1267E5] text-white rotate-180' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <ChevronDown size={16} />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-gray-700 leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* SECTION 7 — CLOSING AVIATION CTA */}
        <section id="about-cta-section" className="py-20 sm:py-28 relative isolate overflow-hidden">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            <div className="relative overflow-hidden rounded-3xl bg-[#071E3D] bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] p-8 sm:p-14 text-white border border-[#1267E5]/30 shadow-2xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div className="absolute top-0 right-0 w-96 h-96 bg-radial-gradient from-[#1267E5]/25 to-transparent pointer-events-none rounded-full blur-3xl" />

              <div className="max-w-2xl relative z-10">
                <span className="text-[10px] font-mono tracking-widest text-[#39BFF8] uppercase font-bold block mb-2">
                  DIRECT AVIATION OPERATIONS CONSULTATION
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                  Discuss your airline operations requirements.
                </h2>
                <p className="text-blue-100 text-base sm:text-lg leading-relaxed font-normal">
                  Explore how Joya Fleet can be configured around your aircraft fleet, scheduling rotations, dispatch watch and regional integration requirements.
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
                  to="/platform"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-center font-bold px-6 py-4 rounded-xl text-sm flex items-center justify-center"
                >
                  <span>Explore Platform</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </MotionConfig>
  );
}
