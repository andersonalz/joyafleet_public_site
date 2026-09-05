import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, MotionConfig } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import { 
  ArrowRight, Users, Calendar, 
  Settings, BarChart3, Radio, Layers, FileText, 
  Check 
} from 'lucide-react';
import { HeroBackground } from '../components/HeroBackground';

export default function Home() {
  // Configurable Product Screenshots Placeholders
  const PRODUCT_SCREENSHOTS = {
    workflowInterface: {
      title: "JOYAFLEET SCHEDULE & OPERATIONS INTERFACE",
      description: "Configurable schedule & operations interface showing active Gantt timelines and schedule planning."
    }
  };

  // SEO Metadata Update & document title
  useSEO({
    title: "JoyaFleet | Cloud-Based Flight Management Software",
    description: "JoyaFleet is a cloud-based Flight Management Software platform connecting flight scheduling, operations, crew management, dispatch workflows, fleet visibility and configurable reporting for aviation operators.",
    canonicalPath: "/",
    ogTitle: "JoyaFleet | Cloud-Based Flight Management Software",
    ogDescription: "JoyaFleet is a cloud-based Flight Management Software platform connecting flight scheduling, operations, crew management, dispatch workflows, fleet visibility and configurable reporting for aviation operators."
  });

  // SECTION 3: Connected Operational Workflow Selection State
  const [activeWorkflowStage, setActiveWorkflowStage] = useState<'plan' | 'coordinate' | 'dispatch' | 'execute' | 'report'>('report');

  // SECTION 5: Product Experience Tab State
  const [activeExperienceTab, setActiveExperienceTab] = useState<'management' | 'dispatch' | 'crew'>('management');

  // SECTION 10: Integrations Categories State
  const [activeIntegrationCategory, setActiveIntegrationCategory] = useState<'aviation' | 'comms' | 'custom'>('aviation');

  const tabsRef = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const handleTabKeyDown = (e: React.KeyboardEvent, currentTab: 'management' | 'dispatch' | 'crew') => {
    const tabs: ('management' | 'dispatch' | 'crew')[] = ['management', 'dispatch', 'crew'];
    const currentIndex = tabs.indexOf(currentTab);
    let nextIndex: number;

    if (e.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const nextTab = tabs[nextIndex];
    setActiveExperienceTab(nextTab);
    tabsRef.current[nextTab]?.focus();
  };

  const workflowStages = [
    { id: 'plan', label: 'Plan', desc: 'Flight Scheduling' },
    { id: 'coordinate', label: 'Coordinate', desc: 'Aircraft, Crew & FTL' },
    { id: 'dispatch', label: 'Dispatch', desc: 'Dispatch Release & Operational Checks' },
    { id: 'execute', label: 'Execute', desc: 'Flight Execution Records' },
    { id: 'report', label: 'Reports', desc: 'Operational Analytics' }
  ] as const;

  const integrationCategories = {
    aviation: {
      title: "Aviation Integrations",
      items: [
        {
          name: "Skyputer",
          status: "CONFIGURABLE ADD-ON",
          desc: "Available as a configurable add-on subject to supported requirements and an agreed implementation scope."
        },
        {
          name: "CAO IRI",
          status: "CONFIGURABLE ADD-ON",
          desc: "Available as a configurable add-on subject to configured requirements and an agreed implementation scope."
        }
      ]
    },
    comms: {
      title: "Communication Channels",
      items: [
        {
          name: "SMS",
          status: "CONFIGURABLE CHANNEL",
          desc: "Available as a configurable communication channel through an approved and configured provider."
        },
        {
          name: "Email",
          status: "CONFIGURABLE CHANNEL",
          desc: "Available as a configurable communication channel through an approved and configured service."
        }
      ]
    },
    custom: {
      title: "Scoped Custom Integrations",
      items: [
        {
          name: "Weather Systems",
          status: "CUSTOM INTEGRATION",
          desc: "Weather-service connections require provider selection, API assessment and an agreed integration scope."
        },
        {
          name: "Accounting Systems",
          status: "CUSTOM INTEGRATION",
          desc: "Accounting-system connections require source-system assessment, available APIs and an agreed integration scope."
        }
      ]
    }
  } as const;

  return (
    <MotionConfig reducedMotion="user">
      {/* SECTION 1: HERO SECTION */}
      <section id="hero" className="w-full min-h-screen relative isolate pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden flex flex-col items-center justify-center text-center bg-[#071E3D] bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] text-white m-0">
        {/* Aviation Atmospheric Background Glows & Grid */}
        <HeroBackground />

        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10 flex flex-col items-center">
          <div 
            data-aos="fade-down"
            data-aos-duration="400"
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1267E5]/20 text-[#38BDF8] border border-[#38BDF8]/30 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md"
          >
            <Radio size={12} className="text-[#38BDF8]" aria-hidden="true" /> 
            Cloud-Based Flight Operations Platform
          </div>
          
          <div 
            className="bg-white/95 backdrop-blur-2xl border border-white/80 p-8 sm:p-12 lg:p-16 rounded-3xl shadow-2xl shadow-[#071E3D]/40 w-full max-w-7xl mx-auto flex flex-col items-center text-gray-900"
          >
            <h1 
              data-aos="fade-up"
              data-aos-duration="400"
              className="text-4xl sm:text-6xl font-bold text-gray-950 leading-[1.1] mb-6 tracking-tight"
            >
              Flight Management Software<br />
              <span className="text-[#1267E5]">Built Around Real Flight Operations</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mb-4 leading-relaxed font-normal">
              JoyaFleet connects scheduling, operational coordination, crew management, dispatch workflows, flight records and reporting in one connected aviation platform.
            </p>

            <p className="text-base text-gray-600 max-w-2xl mb-8 font-normal leading-relaxed">
              Designed for airlines and flight operations teams that need better visibility, structured workflows and connected operational data throughout the flight lifecycle.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full mb-8">
              <Link 
                to="/contact?intent=demo" 
                className="w-full sm:w-auto bg-[#EE1C25] hover:bg-[#D4151D] text-white font-bold px-8 py-3.5 rounded-lg text-base transition-all shadow-lg shadow-[#EE1C25]/25 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE1C25] focus-visible:ring-offset-2"
              >
                Request a Demo
              </Link>
              <Link 
                to="/platform" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-900 text-base font-semibold px-8 py-3.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 shadow-xs"
              >
                Explore the Platform <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-mono">
              Cloud Platform • Flight Operations • Crew & Dispatch • Reporting
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: EXECUTIVE VALUE PROPOSITION */}
      <section id="executive-value" className="py-20 sm:py-28 relative isolate overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div data-aos="fade-up" data-aos-duration="450" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#1267E5] uppercase mb-4 block font-mono">CONNECTED FLIGHT OPERATIONS</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#10233F] mb-6 tracking-tight">
              Connect every part of your flight operation in one platform.
            </h2>
            <p className="text-lg text-[#52667F] leading-relaxed">
              JoyaFleet connects planning, operations, dispatch, crew coordination and reporting workflows to help aviation teams manage each flight from preparation to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div 
              data-aos="fade-up" 
              data-aos-duration="400"
              data-aos-delay="50"
              className="bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-[#EEF7FF] rounded-xl flex items-center justify-center text-[#1267E5] mb-6 border border-[#DCE8F5]">
                  <Layers size={22} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#10233F] mb-3">Connected Flight Operations</h3>
                <p className="text-[#52667F] text-sm sm:text-base leading-relaxed">
                  Connect schedules, aircraft information, crew assignments, dispatch activities and operational records through a shared operational workflow.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              data-aos="fade-up" 
              data-aos-duration="400"
              data-aos-delay="100"
              className="bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-[#EEF7FF] rounded-xl flex items-center justify-center text-[#1267E5] mb-6 border border-[#DCE8F5]">
                  <Settings size={22} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#10233F] mb-3">Configured For Your Operation</h3>
                <p className="text-[#52667F] text-sm sm:text-base leading-relaxed">
                  Adapt workflows, roles, checklists and reporting structures around your operational requirements.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div 
              data-aos="fade-up" 
              data-aos-duration="400"
              data-aos-delay="150"
              className="bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-[#EEF7FF] rounded-xl flex items-center justify-center text-[#1267E5] mb-6 border border-[#DCE8F5]">
                  <BarChart3 size={22} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#10233F] mb-3">Operational Visibility</h3>
                <p className="text-[#52667F] text-sm sm:text-base leading-relaxed">
                  Give management teams clearer access to flight activity, operational records, performance information and configurable reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CONNECTED OPERATIONAL WORKFLOW */}
      <section id="workflow" className="py-20 sm:py-28 relative isolate overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div data-aos="fade-up" data-aos-duration="450" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#1267E5] uppercase mb-4 block font-mono">FROM PLAN TO FLIGHT</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#10233F] mb-6 tracking-tight">Manage the complete flight lifecycle.</h2>
            <p className="text-lg text-[#52667F] leading-relaxed mb-6">
              From schedule creation to operational execution and reporting, JoyaFleet keeps critical flight information connected throughout the lifecycle.
            </p>
            <div className="inline-flex flex-wrap items-center justify-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#52667F] bg-white/80 backdrop-blur-md border border-[#DCE8F5] px-4 py-2 rounded-lg shadow-xs">
              <span>Schedule</span>
              <span className="text-[#A8CCF5]">→</span>
              <span>Operational Trip</span>
              <span className="text-[#A8CCF5]">→</span>
              <span>Aircraft</span>
              <span className="text-[#A8CCF5]">→</span>
              <span>Crew & FTL</span>
              <span className="text-[#A8CCF5]">→</span>
              <span>Dispatch Release</span>
              <span className="text-[#A8CCF5]">→</span>
              <span>Flight Execution</span>
              <span className="text-[#A8CCF5]">→</span>
              <span>Journey Log</span>
              <span className="text-[#A8CCF5]">→</span>
              <span>Reports</span>
            </div>
          </div>

          {/* Interactive Steps Selection */}
          <div data-aos="fade-up" data-aos-duration="400" className="flex flex-wrap justify-center gap-2 mb-12">
            {workflowStages.map((stage, idx) => (
              <button
                key={stage.id}
                type="button"
                aria-pressed={activeWorkflowStage === stage.id}
                aria-controls="workflow-stage-content"
                onClick={() => setActiveWorkflowStage(stage.id)}
                className={`px-6 py-3 rounded-lg border text-center transition-all flex items-center gap-2 font-semibold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 ${
                  activeWorkflowStage === stage.id
                    ? 'aviation-cta-bg text-white border-[#1267E5]/40 shadow-md'
                    : 'bg-white/80 backdrop-blur-md text-[#52667F] border-[#DCE8F5] hover:text-[#10233F] hover:bg-white'
                }`}
              >
                <span className="w-5 h-5 rounded-md flex items-center justify-center border text-[10px] font-bold border-current" aria-hidden="true">
                  {idx + 1}
                </span>
                {stage.label}
              </button>
            ))}
          </div>

          {/* Visual & Details Container */}
          <div id="workflow-stage-content" className="bg-white/80 backdrop-blur-md rounded-2xl border border-[#1267E5]/20 overflow-hidden shadow-xl lg:grid lg:grid-cols-12 min-h-[480px]">
            {/* Visual Panel / Mock Interface */}
            <div className="lg:col-span-8 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-[#002D70] bg-[#071B33]/90 text-gray-200 flex flex-col justify-between relative font-mono text-xs">
              
              <div className="absolute top-4 right-4 bg-[#002D70]/80 border border-[#1267E5]/30 text-[10px] px-3 py-1 rounded-full text-[#39BFF8] tracking-wider font-mono">
                JOYAFLEET PRODUCT WORKSPACE
              </div>

              <div>
                <div className="flex items-center justify-between border-b border-[#002D70] pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#39BFF8]" aria-hidden="true" />
                    <span className="font-bold tracking-wide text-white">JOYA CONSOLE • ACTIVE STATE: {activeWorkflowStage.toUpperCase()}</span>
                  </div>
                  <span className="text-[#AFC0D2] hidden sm:inline">TIME-ZONE-AWARE PLANNING</span>
                </div>

                <AnimatePresence mode="wait">
                  {activeWorkflowStage === 'plan' && (
                    <motion.div 
                      key="plan" 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Calendar size={14} className="text-[#39BFF8]" aria-hidden="true" /> Flight Scheduling
                      </h4>
                      <p className="text-[#AFC0D2] text-[11px] leading-relaxed mb-3">
                        Schedule planner interface displaying aircraft schedules, turnaround windows and ground stops.
                      </p>
                      <div className="relative rounded-2xl overflow-hidden border border-[#002D70] bg-[#002D70]/40 shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80" 
                          alt="Flight Scheduling Graphic" 
                          className="w-full h-auto object-cover max-h-[350px]"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </motion.div>
                  )}

                  {activeWorkflowStage === 'coordinate' && (
                    <motion.div 
                      key="coordinate" 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Users size={14} className="text-[#39BFF8]" aria-hidden="true" /> Aircraft, Crew & FTL
                      </h4>
                      <p className="text-[#AFC0D2] text-[11px] leading-relaxed mb-3">
                        Allocate crew to operational trips and review FTL duty limit guidelines and rest requirements.
                      </p>
                      <div className="relative rounded-2xl overflow-hidden border border-[#002D70] bg-[#002D70]/40 shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1519074069444-1ba4eae16748?auto=format&fit=crop&w=1200&q=80" 
                          alt="Aircraft & Crew Management Graphic" 
                          className="w-full h-auto object-cover max-h-[350px]"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </motion.div>
                  )}

                  {activeWorkflowStage === 'dispatch' && (
                    <motion.div 
                      key="dispatch" 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                        <FileText size={14} className="text-[#39BFF8]" aria-hidden="true" /> Dispatch Release & Operational Checks
                      </h4>
                      <p className="text-[#AFC0D2] text-[11px] leading-relaxed mb-3">
                        Review flight dispatcher checklists and record dispatch release details.
                      </p>
                      <div className="relative rounded-2xl overflow-hidden border border-[#002D70] bg-[#002D70]/40 shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80" 
                          alt="Dispatch & Operations Graphic" 
                          className="w-full h-auto object-cover max-h-[350px]"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </motion.div>
                  )}

                  {activeWorkflowStage === 'execute' && (
                    <motion.div 
                      key="execute" 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Radio size={14} className="text-[#EE1C25]" aria-hidden="true" /> Flight Execution Records
                      </h4>
                      <p className="text-[#AFC0D2] text-[11px] leading-relaxed mb-3">
                        Record actual out-off-on-in (OOOI) times, actual departure/arrival records and delays.
                      </p>
                      <div className="relative rounded-2xl overflow-hidden border border-[#002D70] bg-[#002D70]/40 shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80" 
                          alt="Flight Execution & OOOI Graphic" 
                          className="w-full h-auto object-cover max-h-[350px]"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </motion.div>
                  )}

                  {activeWorkflowStage === 'report' && (
                    <motion.div 
                      key="report" 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                        <BarChart3 size={14} className="text-[#39BFF8]" aria-hidden="true" /> Operational Analytics
                      </h4>
                      <p className="text-[#AFC0D2] text-[11px] leading-relaxed mb-3">
                        Generate comprehensive operational flight reports, journey logs, fuel audit logs, delay analytics, and performance reports.
                      </p>
                      <div className="relative rounded-2xl overflow-hidden border border-[#002D70] bg-[#002D70]/40 shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
                          alt="Reports & Performance Analytics Graphic" 
                          className="w-full h-auto object-cover max-h-[350px]"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-8 pt-4 border-t border-[#002D70] text-[#AFC0D2] flex justify-between items-center text-[10px]">
                <span>{PRODUCT_SCREENSHOTS.workflowInterface.title}</span>
                <span>{PRODUCT_SCREENSHOTS.workflowInterface.description}</span>
              </div>
            </div>

            {/* Content Details Panel */}
            <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between bg-white/90 backdrop-blur-md">
              <div>
                <span className="text-xs font-bold text-[#1267E5] uppercase tracking-widest block mb-2 font-mono">Stage Details</span>
                <AnimatePresence mode="wait">
                  {activeWorkflowStage === 'plan' && (
                    <motion.div
                      key="plan-details"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-[#10233F] mb-4">1. Flight Scheduling</h3>
                      <p className="text-[#52667F] text-sm leading-relaxed mb-6">
                        Plan recurring and ad-hoc flight schedules. JoyaFleet supports draft and published schedules and bulk changes, reviewing basic turnaround buffers.
                      </p>
                      <ul className="space-y-2.5 text-xs text-[#10233F]">
                        <li className="flex items-center gap-2"><Check size={14} className="text-[#1267E5]" aria-hidden="true" /> Multi-Leg Flight Scheduling</li>
                        <li className="flex items-center gap-2"><Check size={14} className="text-[#1267E5]" aria-hidden="true" /> Draft & Published Status</li>
                        <li className="flex items-center gap-2"><Check size={14} className="text-[#1267E5]" aria-hidden="true" /> Bulk Flight Changes</li>
                      </ul>
                    </motion.div>
                  )}

                  {activeWorkflowStage === 'coordinate' && (
                    <motion.div
                      key="coordinate-details"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-[#10233F] mb-4">2. Aircraft, Crew & FTL</h3>
                      <p className="text-[#52667F] text-sm leading-relaxed mb-6">
                        Assign aircraft and crew to operational trips. Check crew qualifications, duty schedules, and potential FTL conflicts.
                      </p>
                      <ul className="space-y-2.5 text-xs text-[#10233F]">
                        <li className="flex items-center gap-2"><Check size={14} className="text-[#1267E5]" aria-hidden="true" /> Crew Assignment & Duty Schedules</li>
                        <li className="flex items-center gap-2"><Check size={14} className="text-[#1267E5]" aria-hidden="true" /> FTL Conflict Identification</li>
                        <li className="flex items-center gap-2"><Check size={14} className="text-[#1267E5]" aria-hidden="true" /> Qualifications & Endorsements</li>
                      </ul>
                    </motion.div>
                  )}

                  {activeWorkflowStage === 'dispatch' && (
                    <motion.div
                      key="dispatch-details"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-[#10233F] mb-4">3. Dispatch Release & Operational Checks</h3>
                      <p className="text-[#52667F] text-sm leading-relaxed mb-6">
                        Generate dispatch release briefs using standardized flight checklists. Record dispatcher authorizations and flight requirements.
                      </p>
                      <ul className="space-y-2.5 text-xs text-[#10233F]">
                        <li className="flex items-center gap-2"><Check size={14} className="text-[#1267E5]" aria-hidden="true" /> Dispatch Release Workflows</li>
                        <li className="flex items-center gap-2"><Check size={14} className="text-[#1267E5]" aria-hidden="true" /> Standardized Checklists</li>
                        <li className="flex items-center gap-2"><Check size={14} className="text-[#1267E5]" aria-hidden="true" /> Dispatcher Sign-off</li>
                      </ul>
                    </motion.div>
                  )}

                  {activeWorkflowStage === 'execute' && (
                    <motion.div
                      key="execute-details"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-[#10233F] mb-4">4. Flight Execution Records</h3>
                      <p className="text-[#52667F] text-sm leading-relaxed mb-6">
                        Capture flight execution data including actual block times, delay records and recorded flight-status information.
                      </p>
                      <ul className="space-y-2.5 text-xs text-[#10233F]">
                        <li className="flex items-center gap-2"><Check size={14} className="text-[#1267E5]" aria-hidden="true" /> Actual Flight Times (OOOI)</li>
                        <li className="flex items-center gap-2"><Check size={14} className="text-[#1267E5]" aria-hidden="true" /> Delay Code Records</li>
                        <li className="flex items-center gap-2"><Check size={14} className="text-[#1267E5]" aria-hidden="true" /> Flight and Trip History</li>
                      </ul>
                    </motion.div>
                  )}

                  {activeWorkflowStage === 'report' && (
                    <motion.div
                      key="report-details"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-[#10233F] mb-4">5. Operational Analytics</h3>
                      <p className="text-[#52667F] text-sm leading-relaxed mb-6">
                        Generate, filter, and export comprehensive operational flight reports, journey logs, fuel audit logs, and delay analytics.
                      </p>
                      <ul className="space-y-2.5 text-xs text-[#10233F]">
                        <li className="flex items-center gap-2"><Check size={14} className="text-[#1267E5]" aria-hidden="true" /> Operational & Fleet Reports</li>
                        <li className="flex items-center gap-2"><Check size={14} className="text-[#1267E5]" aria-hidden="true" /> Configurable Reporting Templates</li>
                        <li className="flex items-center gap-2"><Check size={14} className="text-[#1267E5]" aria-hidden="true" /> PDF, Excel & CSV Exports</li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="border-t border-[#DCE8F5] pt-6 mt-6">
                <Link to="/platform" className="text-sm font-bold text-[#1267E5] hover:text-[#1F8BFF] inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5]">
                  Explore full platform features <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PLATFORM OVERVIEW */}
      <section id="platform-overview" className="py-20 sm:py-28 relative isolate overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div data-aos="fade-up" data-aos-duration="450" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#1267E5] uppercase mb-4 block font-mono">THE JOYAFLEET PLATFORM</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#10233F] mb-6 tracking-tight">
              One platform connecting essential flight operations workflows.
            </h2>
            <p className="text-lg text-[#52667F] leading-relaxed">
              A modular platform for planning flights, coordinating crews, managing dispatch activities, maintaining fleet-planning visibility and turning daily operations into usable information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Module 1 */}
            <Link 
              to="/platform/flight-scheduling"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="40"
              className="group bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5] shadow-xs text-left block outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] transition-all"
            >
              <div className="w-10 h-10 bg-[#EEF7FF] text-[#1267E5] rounded-xl flex items-center justify-center mb-6 border border-[#DCE8F5] group-hover:bg-[#1267E5] group-hover:text-white transition-colors">
                <Calendar size={18} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-[#10233F] mb-3 group-hover:text-[#1267E5] transition-colors">Flight Scheduling</h3>
              <p className="text-[#52667F] text-xs sm:text-sm leading-relaxed">
                Plan recurring and ad-hoc flights with aircraft context, multi-leg scheduling, draft and published schedules and operational planning visibility.
              </p>
            </Link>

            {/* Module 2 */}
            <Link 
              to="/platform/operations-dispatch"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="80"
              className="group bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5] shadow-xs text-left block outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] transition-all"
            >
              <div className="w-10 h-10 bg-[#EEF7FF] text-[#1267E5] rounded-xl flex items-center justify-center mb-6 border border-[#DCE8F5] group-hover:bg-[#1267E5] group-hover:text-white transition-colors">
                <FileText size={18} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-[#10233F] mb-3 group-hover:text-[#1267E5] transition-colors">Operations & Dispatch</h3>
              <p className="text-[#52667F] text-xs sm:text-sm leading-relaxed">
                Coordinate operational trips, dispatch workflows, checklists, release activities and connected flight records.
              </p>
            </Link>

            {/* Module 3 */}
            <Link 
              to="/platform/crew-management-ftl"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="120"
              className="group bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5] shadow-xs text-left block outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] transition-all"
            >
              <div className="w-10 h-10 bg-[#EEF7FF] text-[#1267E5] rounded-xl flex items-center justify-center mb-6 border border-[#DCE8F5] group-hover:bg-[#1267E5] group-hover:text-white transition-colors">
                <Users size={18} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-[#10233F] mb-3 group-hover:text-[#1267E5] transition-colors">Crew Management & FTL</h3>
              <p className="text-[#52667F] text-xs sm:text-sm leading-relaxed">
                Manage crew assignments, qualifications, endorsements, duty visibility and FTL-related operational awareness.
              </p>
            </Link>

            {/* Module 4 */}
            <Link 
              to="/platform/fleet-maintenance"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="160"
              className="group bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5] shadow-xs text-left block outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] transition-all"
            >
              <div className="w-10 h-10 bg-[#EEF7FF] text-[#1267E5] rounded-xl flex items-center justify-center mb-6 border border-[#DCE8F5] group-hover:bg-[#1267E5] group-hover:text-white transition-colors">
                <Settings size={18} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-[#10233F] mb-3 group-hover:text-[#1267E5] transition-colors">Fleet & Maintenance Planning</h3>
              <p className="text-[#52667F] text-xs sm:text-sm leading-relaxed">
                Maintain aircraft operational visibility through fleet information, maintenance planning visibility and availability context.
              </p>
            </Link>

            {/* Module 5 */}
            <Link 
              to="/platform/reporting-analytics"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="200"
              className="group bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5] shadow-xs text-left block outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] transition-all"
            >
              <div className="w-10 h-10 bg-[#EEF7FF] text-[#1267E5] rounded-xl flex items-center justify-center mb-6 border border-[#DCE8F5] group-hover:bg-[#1267E5] group-hover:text-white transition-colors">
                <BarChart3 size={18} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-[#10233F] mb-3 group-hover:text-[#1267E5] transition-colors">Reporting & Analytics</h3>
              <p className="text-[#52667F] text-xs sm:text-sm leading-relaxed">
                Create configurable operational reports using flight records, journey logs, delays, fuel information and exportable outputs.
              </p>
            </Link>

            {/* Module 6 */}
            <Link 
              to="/platform/integrations"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="240"
              className="group bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5] shadow-xs text-left block outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] transition-all"
            >
              <div className="w-10 h-10 bg-[#EEF7FF] text-[#1267E5] rounded-xl flex items-center justify-center mb-6 border border-[#DCE8F5] group-hover:bg-[#1267E5] group-hover:text-white transition-colors">
                <Layers size={18} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-[#10233F] mb-3 group-hover:text-[#1267E5] transition-colors">Integrations</h3>
              <p className="text-[#52667F] text-xs sm:text-sm leading-relaxed">
                Configurable add-ons for Skyputer and CAO IRI, configurable SMS and email channels, and separately assessed custom connections.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: PRODUCT EXPERIENCE */}
      <section id="product-experience" className="py-20 sm:py-28 relative isolate overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div data-aos="fade-up" data-aos-duration="450" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#1267E5] uppercase mb-4 block font-mono">DESIGNED FOR DAILY OPERATIONS</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#10233F] tracking-tight">Designed for aviation teams across daily operations.</h2>
          </div>

          {/* Experience Tabs */}
          <div data-aos="fade-up" data-aos-duration="400" className="flex justify-center border-b border-[#DCE8F5] mb-12 max-w-md mx-auto" role="tablist" aria-label="Product experiences">
            <button
              type="button"
              role="tab"
              id="tab-management"
              aria-selected={activeExperienceTab === 'management'}
              aria-controls="panel-management"
              tabIndex={activeExperienceTab === 'management' ? 0 : -1}
              ref={(el) => { tabsRef.current['management'] = el; }}
              onClick={() => setActiveExperienceTab('management')}
              onKeyDown={(e) => handleTabKeyDown(e, 'management')}
              className={`flex-1 pb-4 text-center font-semibold text-sm transition-all border-b-2 outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] rounded-t ${
                activeExperienceTab === 'management'
                  ? 'border-[#1267E5] text-[#1267E5] font-bold'
                  : 'border-transparent text-[#52667F] hover:text-[#10233F]'
              }`}
            >
              Management
            </button>
            <button
              type="button"
              role="tab"
              id="tab-dispatch"
              aria-selected={activeExperienceTab === 'dispatch'}
              aria-controls="panel-dispatch"
              tabIndex={activeExperienceTab === 'dispatch' ? 0 : -1}
              ref={(el) => { tabsRef.current['dispatch'] = el; }}
              onClick={() => setActiveExperienceTab('dispatch')}
              onKeyDown={(e) => handleTabKeyDown(e, 'dispatch')}
              className={`flex-1 pb-4 text-center font-semibold text-sm transition-all border-b-2 outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] rounded-t ${
                activeExperienceTab === 'dispatch'
                  ? 'border-[#1267E5] text-[#1267E5] font-bold'
                  : 'border-transparent text-[#52667F] hover:text-[#10233F]'
              }`}
            >
              Operations & Dispatch
            </button>
            <button
              type="button"
              role="tab"
              id="tab-crew"
              aria-selected={activeExperienceTab === 'crew'}
              aria-controls="panel-crew"
              tabIndex={activeExperienceTab === 'crew' ? 0 : -1}
              ref={(el) => { tabsRef.current['crew'] = el; }}
              onClick={() => setActiveExperienceTab('crew')}
              onKeyDown={(e) => handleTabKeyDown(e, 'crew')}
              className={`flex-1 pb-4 text-center font-semibold text-sm transition-all border-b-2 outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] rounded-t ${
                activeExperienceTab === 'crew'
                  ? 'border-[#1267E5] text-[#1267E5] font-bold'
                  : 'border-transparent text-[#52667F] hover:text-[#10233F]'
              }`}
            >
              Crew
            </button>
          </div>

          {/* Visual Showcase Panel */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-[#1267E5]/20 shadow-xl overflow-hidden aspect-[16/10] max-w-5xl mx-auto flex flex-col justify-between p-8 sm:p-12 relative">
            <div className="absolute top-4 right-4 bg-[#EEF7FF] border border-[#DCE8F5] text-[10px] px-3 py-1 rounded-md text-[#1267E5] tracking-wider font-mono">
              JOYAFLEET PRODUCT WORKSPACE
            </div>

            <div 
              id="panel-management"
              role="tabpanel"
              aria-labelledby="tab-management"
              hidden={activeExperienceTab !== 'management'}
              className="h-full flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#1267E5] block mb-2 uppercase">MANAGEMENT & REPORTING VIEW</span>
                <h3 className="text-3xl font-bold text-[#10233F] mb-4 tracking-tight">Operations Management Workspace</h3>
                <p className="text-[#52667F] text-sm max-w-xl leading-relaxed">
                  Monitor operational activity, completed flights, actual times, delays, fuel records, journey logs and reports through role-based access.
                </p>
              </div>

              <div className="bg-[#F5F9FE]/80 backdrop-blur-xs rounded-2xl border border-[#DCE8F5] p-6 grid grid-cols-1 sm:grid-cols-4 gap-4 text-center mt-8">
                <div className="p-4 bg-white/90 rounded-xl border border-[#DCE8F5]">
                  <span className="text-xs font-bold text-[#10233F] block mb-1">Operational Records</span>
                  <span className="text-[10px] text-[#52667F] block">Flight and trip history</span>
                </div>
                <div className="p-4 bg-white/90 rounded-xl border border-[#DCE8F5]">
                  <span className="text-xs font-bold text-[#10233F] block mb-1">Actual Flight Data</span>
                  <span className="text-[10px] text-[#52667F] block">Captured block times & delays</span>
                </div>
                <div className="p-4 bg-white/90 rounded-xl border border-[#DCE8F5]">
                  <span className="text-xs font-bold text-[#10233F] block mb-1">Configurable Reports</span>
                  <span className="text-[10px] text-[#52667F] block">Customizable template queries</span>
                </div>
                <div className="p-4 bg-white/90 rounded-xl border border-[#DCE8F5]">
                  <span className="text-xs font-bold text-[#10233F] block mb-1">Export-Ready Outputs</span>
                  <span className="text-[10px] text-[#52667F] block">PDF, Excel & CSV formats</span>
                </div>
              </div>
            </div>

            <div 
              id="panel-dispatch"
              role="tabpanel"
              aria-labelledby="tab-dispatch"
              hidden={activeExperienceTab !== 'dispatch'}
              className="h-full flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#1267E5] block mb-2 uppercase">OPERATIONS & DISPATCH VIEW</span>
                <h3 className="text-3xl font-bold text-[#10233F] mb-4 tracking-tight">Flight Operations & Dispatch Workspace</h3>
                <p className="text-[#52667F] text-sm max-w-xl leading-relaxed">
                  Coordinate trips, aircraft assignments, crew allocation, dispatch checks, operational records and flight execution information.
                </p>
              </div>

              <div className="bg-[#F5F9FE]/80 backdrop-blur-xs rounded-2xl border border-[#DCE8F5] p-6 grid grid-cols-1 sm:grid-cols-5 gap-4 text-center mt-8">
                <div className="p-4 bg-white/90 rounded-xl border border-[#DCE8F5]">
                  <span className="text-xs font-bold text-[#10233F] block mb-1">Trip Status</span>
                  <span className="text-[10px] text-[#52667F] block">Recorded schedule state</span>
                </div>
                <div className="p-4 bg-white/90 rounded-xl border border-[#DCE8F5]">
                  <span className="text-xs font-bold text-[#10233F] block mb-1">Aircraft Assignment</span>
                  <span className="text-[10px] text-[#52667F] block">Fleet allocation context</span>
                </div>
                <div className="p-4 bg-white/90 rounded-xl border border-[#DCE8F5]">
                  <span className="text-xs font-bold text-[#10233F] block mb-1">Crew Assignment</span>
                  <span className="text-[10px] text-[#52667F] block">Roster coordination limits</span>
                </div>
                <div className="p-4 bg-white/90 rounded-xl border border-[#DCE8F5]">
                  <span className="text-xs font-bold text-[#10233F] block mb-1">Dispatch Release</span>
                  <span className="text-[10px] text-[#52667F] block">Release checklist checks</span>
                </div>
                <div className="p-4 bg-white/90 rounded-xl border border-[#DCE8F5]">
                  <span className="text-xs font-bold text-[#10233F] block mb-1">Operational Records</span>
                  <span className="text-[10px] text-[#52667F] block">Completed post-flight data</span>
                </div>
              </div>
            </div>

            <div 
              id="panel-crew"
              role="tabpanel"
              aria-labelledby="tab-crew"
              hidden={activeExperienceTab !== 'crew'}
              className="h-full flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#1267E5] block mb-2 uppercase">CREW SCHEDULE & FLIGHT VIEW</span>
                <h3 className="text-3xl font-bold text-[#10233F] mb-4 tracking-tight">Crew Management & Flight Operations View</h3>
                <p className="text-[#52667F] text-sm max-w-xl leading-relaxed">
                  Support crew planning, duty visibility, qualifications, FTL awareness and access to operational flight information.
                </p>
              </div>

              <div className="bg-[#F5F9FE]/80 backdrop-blur-xs rounded-2xl border border-[#DCE8F5] p-6 grid grid-cols-1 sm:grid-cols-5 gap-4 text-center mt-8">
                <div className="p-4 bg-white/90 rounded-xl border border-[#DCE8F5]">
                  <span className="text-xs font-bold text-[#10233F] block mb-1">Crew Schedule</span>
                  <span className="text-[10px] text-[#52667F] block">Roster distribution</span>
                </div>
                <div className="p-4 bg-white/90 rounded-xl border border-[#DCE8F5]">
                  <span className="text-xs font-bold text-[#10233F] block mb-1">Duty & Standby</span>
                  <span className="text-[10px] text-[#52667F] block">Duty times & standby rosters</span>
                </div>
                <div className="p-4 bg-white/90 rounded-xl border border-[#DCE8F5]">
                  <span className="text-xs font-bold text-[#10233F] block mb-1">FTL Visibility</span>
                  <span className="text-[10px] text-[#52667F] block">Duty and rest visibility</span>
                </div>
                <div className="p-4 bg-white/90 rounded-xl border border-[#DCE8F5]">
                  <span className="text-xs font-bold text-[#10233F] block mb-1">Qualifications</span>
                  <span className="text-[10px] text-[#52667F] block">Licenses & endorsements</span>
                </div>
                <div className="p-4 bg-white/90 rounded-xl border border-[#DCE8F5]">
                  <span className="text-xs font-bold text-[#10233F] block mb-1">Flight Information</span>
                  <span className="text-[10px] text-[#52667F] block">Operational trip details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PAPERLESS OPERATIONAL TRANSFORMATION */}
      <section id="paperless" className="py-20 sm:py-28 relative isolate overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="bg-gradient-to-b from-[#071B33]/90 to-[#0D2E55]/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-[#1267E5]/30 shadow-2xl text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div data-aos="fade-right" data-aos-duration="450" className="lg:col-span-5">
                <span className="text-xs font-bold tracking-widest text-[#39BFF8] uppercase mb-4 block font-mono">CONNECTED DIGITAL WORKFLOWS</span>
                <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight leading-[1.1] text-white">
                  Move operational work into connected digital workflows.
                </h2>
                <p className="text-[#D7E5F3] text-base sm:text-lg leading-relaxed mb-8">
                  Reduce reliance on fragmented spreadsheets, repeated manual entry and disconnected paper records by bringing operational information, approvals and reports into one shared platform.
                </p>
                <div className="bg-[#002D70]/60 border border-[#1267E5]/40 p-6 rounded-xl mb-4 backdrop-blur-md">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#39BFF8] block mb-2 uppercase">DIGITAL TRANSFORMATION PATH</span>
                  <span className="text-sm font-semibold text-white">"Move toward paperless operations"</span>
                  <p className="text-xs text-[#AFC0D2] mt-2 leading-relaxed">
                    Transition physical flight logs, manual dispatch briefs, and paper checklists into unified digital records stored in the cloud.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Benefit 1 */}
                <div data-aos="fade-left" data-aos-duration="400" data-aos-delay="50" className="bg-[#002D70]/40 border border-[#1267E5]/30 p-6 sm:p-8 rounded-2xl backdrop-blur-md">
                  <span className="text-[#39BFF8] font-bold font-mono text-sm block mb-2">01</span>
                  <h3 className="text-lg font-bold text-white mb-2">Connected Operational Records</h3>
                  <p className="text-[#AFC0D2] text-xs sm:text-sm leading-relaxed">
                    Keep relevant flight information and operational activity available in one shared environment.
                  </p>
                </div>

                {/* Benefit 2 */}
                <div data-aos="fade-left" data-aos-duration="400" data-aos-delay="100" className="bg-[#002D70]/40 border border-[#1267E5]/30 p-6 sm:p-8 rounded-2xl backdrop-blur-md">
                  <span className="text-[#39BFF8] font-bold font-mono text-sm block mb-2">02</span>
                  <h3 className="text-lg font-bold text-white mb-2">Structured Dispatch Workflows</h3>
                  <p className="text-[#AFC0D2] text-xs sm:text-sm leading-relaxed">
                    Support accountable dispatch and release activities through configurable checks, approvals and operational records.
                  </p>
                </div>

                {/* Benefit 3 */}
                <div data-aos="fade-left" data-aos-duration="400" data-aos-delay="150" className="bg-[#002D70]/40 border border-[#1267E5]/30 p-6 sm:p-8 rounded-2xl backdrop-blur-md">
                  <span className="text-[#39BFF8] font-bold font-mono text-sm block mb-2">03</span>
                  <h3 className="text-lg font-bold text-white mb-2">Digital Flight Records</h3>
                  <p className="text-[#AFC0D2] text-xs sm:text-sm leading-relaxed">
                    Capture actual times, delays, fuel information, journey logs and supporting documentation in connected workflows.
                  </p>
                </div>

                {/* Benefit 4 */}
                <div data-aos="fade-left" data-aos-duration="400" data-aos-delay="200" className="bg-[#002D70]/40 border border-[#1267E5]/30 p-6 sm:p-8 rounded-2xl backdrop-blur-md">
                  <span className="text-[#39BFF8] font-bold font-mono text-sm block mb-2">04</span>
                  <h3 className="text-lg font-bold text-white mb-2">Accessible Reports</h3>
                  <p className="text-[#AFC0D2] text-xs sm:text-sm leading-relaxed">
                    Generate and distribute operational outputs without rebuilding information across disconnected spreadsheets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CUSTOMIZATION */}
      <section id="customization" className="py-20 sm:py-28 relative isolate overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="450" className="lg:col-span-5">
              <span className="text-xs font-bold tracking-widest text-[#1267E5] uppercase mb-4 block font-mono">CONFIGURED AROUND YOUR AIRLINE</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#10233F] mb-6 tracking-tight">
                Adapt the platform to your operation—not your operation to the software.
              </h2>
              <p className="text-[#52667F] text-sm sm:text-base leading-relaxed mb-8">
                JoyaFleet can be configured and extended around approved operational, reporting and integration requirements.
              </p>
              <Link 
                to="/contact?intent=customization" 
                className="inline-flex items-center gap-2 bg-[#1267E5] text-white font-bold px-6 py-3.5 rounded-lg text-sm hover:bg-[#1F8BFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 shadow-xs"
              >
                Discuss Your Requirements <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div data-aos="fade-left" data-aos-duration="400" data-aos-delay="50" className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs space-y-2">
                <span className="text-xs font-bold font-mono text-[#1267E5] uppercase">01</span>
                <h3 className="text-lg font-bold text-[#10233F]">Configurable Workflows</h3>
                <p className="text-[#52667F] text-xs sm:text-sm leading-relaxed">
                  Configure roles, validations, operational checklists and workflow settings around approved airline procedures.
                </p>
              </div>

              <div data-aos="fade-left" data-aos-duration="400" data-aos-delay="100" className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs space-y-2">
                <span className="text-xs font-bold font-mono text-[#1267E5] uppercase">02</span>
                <h3 className="text-lg font-bold text-[#10233F]">Role-Based Experiences</h3>
                <p className="text-[#52667F] text-xs sm:text-sm leading-relaxed">
                  Give management, operations, planning, dispatch, crew and administrators access appropriate to their responsibilities.
                </p>
              </div>

              <div data-aos="fade-left" data-aos-duration="400" data-aos-delay="150" className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs space-y-2">
                <span className="text-xs font-bold font-mono text-[#1267E5] uppercase">03</span>
                <h3 className="text-lg font-bold text-[#10233F]">Configurable Reporting</h3>
                <p className="text-[#52667F] text-xs sm:text-sm leading-relaxed">
                  Build reports with flexible columns, filters, reusable templates and PDF, Excel or CSV outputs.
                </p>
              </div>

              <div data-aos="fade-left" data-aos-duration="400" data-aos-delay="200" className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs space-y-2">
                <span className="text-xs font-bold font-mono text-[#1267E5] uppercase">04</span>
                <h3 className="text-lg font-bold text-[#10233F]">Scoped Custom Integrations</h3>
                <p className="text-[#52667F] text-xs sm:text-sm leading-relaxed">
                  Plan additional connections around documented systems, available APIs and an agreed implementation scope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: IMPLEMENTATION, MIGRATION, TRAINING, AND SUPPORT */}
      <section id="implementation" className="py-20 sm:py-28 relative isolate overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div data-aos="fade-up" data-aos-duration="450" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#1267E5] uppercase mb-4 block font-mono">A DIRECT IMPLEMENTATION PARTNER</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#10233F] tracking-tight mb-6">
              From evaluation to daily operation, implementation is planned around your airline.
            </h2>
            <p className="text-lg text-[#52667F] leading-relaxed">
              Implementation scope and timing are defined around fleet size, operational workflows, data readiness, integrations and approved customization requirements.
            </p>
          </div>

          {/* 5-Step Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16 relative">
            {/* Step 1 */}
            <div 
              data-aos="fade-up" 
              data-aos-duration="400"
              data-aos-delay="40"
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between relative z-10"
            >
              <div>
                <span className="w-8 h-8 rounded-lg bg-[#002D70] text-[#39BFF8] flex items-center justify-center font-bold text-sm mb-4" aria-hidden="true">1</span>
                <h3 className="font-bold text-[#10233F] text-sm mb-2">Discover</h3>
                <p className="text-[#52667F] text-xs leading-relaxed">
                  review workflows, priorities, data and integrations.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div 
              data-aos="fade-up" 
              data-aos-duration="400"
              data-aos-delay="80"
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between relative z-10"
            >
              <div>
                <span className="w-8 h-8 rounded-lg bg-[#002D70] text-[#39BFF8] flex items-center justify-center font-bold text-sm mb-4" aria-hidden="true">2</span>
                <h3 className="font-bold text-[#10233F] text-sm mb-2">Configure</h3>
                <p className="text-[#52667F] text-xs leading-relaxed">
                  set up roles, permissions, workflows, checklists and reports.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div 
              data-aos="fade-up" 
              data-aos-duration="400"
              data-aos-delay="120"
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between relative z-10"
            >
              <div>
                <span className="w-8 h-8 rounded-lg bg-[#002D70] text-[#39BFF8] flex items-center justify-center font-bold text-sm mb-4" aria-hidden="true">3</span>
                <h3 className="font-bold text-[#10233F] text-sm mb-2">Migrate</h3>
                <p className="text-[#52667F] text-xs leading-relaxed">
                  Assess and validate compatible fleet, crew and operational data before any agreed migration.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div 
              data-aos="fade-up" 
              data-aos-duration="400"
              data-aos-delay="160"
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between relative z-10"
            >
              <div>
                <span className="w-8 h-8 rounded-lg bg-[#002D70] text-[#39BFF8] flex items-center justify-center font-bold text-sm mb-4" aria-hidden="true">4</span>
                <h3 className="font-bold text-[#10233F] text-sm mb-2">Train</h3>
                <p className="text-[#52667F] text-xs leading-relaxed">
                  Define and provide role-based training within the agreed implementation scope.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div 
              data-aos="fade-up" 
              data-aos-duration="400"
              data-aos-delay="200"
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between relative z-10"
            >
              <div>
                <span className="w-8 h-8 rounded-lg bg-[#002D70] text-[#39BFF8] flex items-center justify-center font-bold text-sm mb-4" aria-hidden="true">5</span>
                <h3 className="font-bold text-[#10233F] text-sm mb-2">Go Live</h3>
                <p className="text-[#52667F] text-xs leading-relaxed">
                  Coordinate cutover and support responsibilities under the agreed plan.
                </p>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="400" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact?intent=demo" 
              className="w-full sm:w-auto bg-[#EE1C25] text-white font-bold px-8 py-3.5 rounded-lg text-sm hover:bg-[#D4151D] transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE1C25] focus-visible:ring-offset-2 shadow-md shadow-[#EE1C25]/25"
            >
              Request a Demo
            </Link>
            <Link 
              to="/contact?intent=trial" 
              className="w-full sm:w-auto bg-white/90 border border-[#1267E5] text-[#1267E5] font-semibold px-8 py-3.5 rounded-lg text-sm hover:bg-[#EEF7FF] transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 shadow-xs backdrop-blur-xs"
            >
              Request Trial Consideration
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: REGIONAL EXPERTISE */}
      <section id="regional-expertise" className="py-20 sm:py-28 relative isolate overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div data-aos="fade-up" data-aos-duration="450" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#1267E5] uppercase mb-4 block font-mono">DEVELOPED IN SHIRAZ</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#10233F] mb-6 tracking-tight">
              Built in Shiraz. Designed around practical airline operations.
            </h2>
            <p className="text-lg text-[#52667F] leading-relaxed">
              JoyaFleet is developed in Shiraz, Iran. Iran is the primary market, while the product direction includes the Middle East and Europe and broader international markets over the longer term.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div 
              data-aos="fade-up" 
              data-aos-duration="400"
              data-aos-delay="50"
              className="bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs"
            >
              <h3 className="text-xl font-bold text-[#10233F] mb-3">Development location</h3>
              <p className="text-[#52667F] text-xs sm:text-sm leading-relaxed">
                JoyaFleet is developed in Shiraz, Iran.
              </p>
            </div>

            {/* Card 2 */}
            <div 
              data-aos="fade-up" 
              data-aos-duration="400"
              data-aos-delay="100"
              className="bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs"
            >
              <h3 className="text-xl font-bold text-[#10233F] mb-3">Primary market</h3>
              <p className="text-[#52667F] text-xs sm:text-sm leading-relaxed">
                The initial market focus is airline operations in Iran.
              </p>
            </div>

            {/* Card 3 */}
            <div 
              data-aos="fade-up" 
              data-aos-duration="400"
              data-aos-delay="150"
              className="bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs"
            >
              <h3 className="text-xl font-bold text-[#10233F] mb-3">Product direction</h3>
              <p className="text-[#52667F] text-xs sm:text-sm leading-relaxed">
                The regional direction includes the Middle East and Europe, with broader international markets as a long-term direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: INTEGRATIONS */}
      <section id="integrations" className="py-20 sm:py-28 relative isolate overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div data-aos="fade-up" data-aos-duration="450" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#1267E5] uppercase mb-4 block font-mono">CONNECTED TO YOUR OPERATIONAL ECOSYSTEM</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#10233F] tracking-tight mb-6">Configured integrations. Scoped connections.</h2>
            <p className="text-lg text-[#52667F] leading-relaxed">
              Review configurable add-ons, configurable communication channels and separately assessed custom integrations.
            </p>
          </div>

          {/* Integration categories navigation */}
          <div data-aos="fade-up" data-aos-duration="400" className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              type="button"
              aria-pressed={activeIntegrationCategory === 'aviation'}
              aria-controls="integration-options-panel"
              onClick={() => setActiveIntegrationCategory('aviation')}
              className={`px-5 py-2.5 rounded-lg border text-xs font-bold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 ${
                activeIntegrationCategory === 'aviation'
                  ? 'aviation-cta-bg text-white border-[#1267E5]/40 shadow-sm'
                  : 'bg-white/80 backdrop-blur-md text-[#52667F] border-[#DCE8F5] hover:text-[#10233F] hover:border-[#1267E5]/30'
              }`}
            >
              Aviation Integrations
            </button>
            <button
              type="button"
              aria-pressed={activeIntegrationCategory === 'comms'}
              aria-controls="integration-options-panel"
              onClick={() => setActiveIntegrationCategory('comms')}
              className={`px-5 py-2.5 rounded-lg border text-xs font-bold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 ${
                activeIntegrationCategory === 'comms'
                  ? 'aviation-cta-bg text-white border-[#1267E5]/40 shadow-sm'
                  : 'bg-white/80 backdrop-blur-md text-[#52667F] border-[#DCE8F5] hover:text-[#10233F] hover:border-[#1267E5]/30'
              }`}
            >
              Communication Channels
            </button>
            <button
              type="button"
              aria-pressed={activeIntegrationCategory === 'custom'}
              aria-controls="integration-options-panel"
              onClick={() => setActiveIntegrationCategory('custom')}
              className={`px-5 py-2.5 rounded-lg border text-xs font-bold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 ${
                activeIntegrationCategory === 'custom'
                  ? 'aviation-cta-bg text-white border-[#1267E5]/40 shadow-sm'
                  : 'bg-white/80 backdrop-blur-md text-[#52667F] border-[#DCE8F5] hover:text-[#10233F] hover:border-[#1267E5]/30'
              }`}
            >
              Scoped Custom Integrations
            </button>
          </div>

          {/* Selected integrations card */}
          <div id="integration-options-panel" className="bg-white/80 backdrop-blur-md rounded-2xl border border-[#1267E5]/20 p-8 sm:p-12 max-w-4xl mx-auto shadow-xl flex flex-col sm:flex-row justify-between items-start gap-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#1267E5] uppercase tracking-widest block font-mono">Operational Sync</span>
              <h3 className="text-2xl font-bold text-[#10233F] tracking-tight">{integrationCategories[activeIntegrationCategory].title}</h3>
              <p className="text-[#52667F] text-xs sm:text-sm max-w-md leading-relaxed">
                Review available add-ons, configurable communication channels and connections that require separate technical assessment.
              </p>
              <div className="pt-4">
                <Link to="/platform/integrations" className="text-xs font-bold text-[#1267E5] hover:underline flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5]">
                  Explore Integrations <ArrowRight size={12} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="w-full sm:w-1/2 bg-[#F5F9FE]/80 backdrop-blur-xs rounded-xl border border-[#DCE8F5] p-6">
              <span className="text-[10px] font-bold text-[#52667F] uppercase tracking-widest block mb-4 font-mono">Integration Options</span>
              <div className="space-y-4">
                {integrationCategories[activeIntegrationCategory].items.map((item) => (
                  <div key={item.name} className="border-b border-[#DCE8F5] last:border-0 pb-3 last:pb-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-[#10233F]">{item.name}</span>
                      <span className="text-[9px] font-bold px-2 py-0.5 bg-[#EEF7FF] text-[#1267E5] border border-[#DCE8F5] rounded font-mono uppercase">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#52667F] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12 text-xs text-[#52667F] max-w-md mx-auto leading-relaxed">
            Additional integrations require documented requirements, available APIs and an agreed implementation scope.
          </div>
        </div>
      </section>

      {/* SECTION 12: FINAL CTA SECTION */}
      <section id="cta" className="py-20 sm:py-28 px-5 sm:px-8 max-w-7xl mx-auto w-full relative isolate overflow-hidden">
        <div className="aviation-cta-bg rounded-3xl p-8 sm:p-16 text-white text-center relative overflow-hidden flex flex-col items-center shadow-2xl border border-[#1267E5]/30">
          <div className="relative z-10 max-w-3xl flex flex-col items-center">
            <span className="text-xs font-bold text-[#39BFF8] uppercase tracking-widest mb-4 font-mono">TAILORED PRODUCT EVALUATION</span>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight leading-tight text-white">Explore how JoyaFleet can support your flight operations.</h2>
            <p className="text-[#D7E5F3] mb-10 leading-relaxed text-sm sm:text-lg max-w-2xl">
              Discuss your operational workflows, current systems and requirements with the JoyaFleet team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full mb-8">
              <Link 
                to="/contact?intent=demo" 
                className="w-full sm:w-auto bg-[#EE1C25] text-white font-bold px-8 py-3.5 rounded-lg text-base hover:bg-[#D4151D] transition-colors shadow-lg shadow-[#EE1C25]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071B33]"
              >
                Request a Demo
              </Link>
            </div>
            <p className="text-xs font-mono text-[#AFC0D2] uppercase tracking-widest">
              Cloud Platform • Flight Operations • Crew & Dispatch • Reporting
            </p>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
