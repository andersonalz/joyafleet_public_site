"use client";

import React, { useState } from 'react';
import Link from '../components/RouterLink';
import { motion, AnimatePresence, MotionConfig } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import { HeroBackground } from '../components/HeroBackground';
import {
  Users,
  Calendar,
  ShieldCheck,
  Clock,
  BookOpen,
  Layers,
  Sliders,
  ChevronRight,
  Check,
  ArrowRight,
  Award,
  Radio,
  Sparkles
} from 'lucide-react';

// Operational workflow visual placeholder structure
interface ProductVisual {
  id: string;
  title: string;
  description: string;
  aspectRatio: "16:9" | "16:10";
  alt: string;
  imageUrl?: string;
}

const CREW_MANAGEMENT_VISUALS: Record<string, ProductVisual> = {
  profiles: {
    id: "crew-profiles-view",
    title: "Crew Profile & Operational Information View",
    description: "Crew profiles with relevant employment, home-base and operational information.",
    aspectRatio: "16:10",
    alt: "Operational workflow visual reserved for the Joya Fleet crew profiles and operational information workspace representation",
    imageUrl: "https://images.unsplash.com/photo-1519074069444-1ba4eae16748?auto=format&fit=crop&w=1200&q=80"
  },
  roles: {
    id: "crew-roles-view",
    title: "Crew Roles & Position Structure View",
    description: "Configurable operational positions and crew responsibilities associated with relevant aircraft types.",
    aspectRatio: "16:10",
    alt: "Operational workflow visual reserved for the Joya Fleet crew positions and operational roles representation",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80"
  },
  ratings: {
    id: "crew-ratings-view",
    title: "Aircraft Qualification Context View",
    description: "Aircraft-type ratings, operational positions and qualification relationships used during crew planning.",
    aspectRatio: "16:10",
    alt: "Operational workflow visual reserved for the Joya Fleet crew aircraft qualifications and position relationships representation",
    imageUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80"
  },
  documents: {
    id: "crew-documents-view",
    title: "Crew Documents & Records View",
    description: "Crew documents, passport information and supporting attachments organized alongside crew profiles.",
    aspectRatio: "16:10",
    alt: "Operational workflow visual reserved for the Joya Fleet crew documents and passport records representation",
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
  },
  calendar: {
    id: "crew-calendar-view",
    title: "Joya Fleet Crew Calendar",
    description: "Crew schedules containing flights, duties, standby, training, simulator events, leave and positioning activity.",
    aspectRatio: "16:9",
    alt: "Operational workflow visual reserved for the Joya Fleet crew calendar and activity schedule representation",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=1200&q=80"
  },
  qualifications: {
    id: "crew-qualifications-view",
    title: "Joya Fleet Qualifications & Endorsements Workspace",
    description: "Endorsements, issue and expiry information, aircraft-type relationships and configurable reminder rules.",
    aspectRatio: "16:10",
    alt: "Operational workflow visual reserved for the Joya Fleet crew qualifications and endorsements representation",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
  },
  workspace: {
    id: "crew-workspace-view",
    title: "Joya Fleet Crew Management & FTL Workspace",
    description: "Crew schedules, duties, assignments, qualification information and FTL context within one connected workspace.",
    aspectRatio: "16:9",
    alt: "Operational workflow visual reserved for the Joya Fleet crew management and FTL workspace representation",
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
  icon: React.ReactNode;
}

interface ActivityType {
  title: string;
  text: string;
  icon: React.ReactNode;
}

interface WorkflowStage {
  step: string;
  title: string;
  text: string;
  status: string;
}

interface FTLGroup {
  title: string;
  description: string;
  points: string[];
}

interface PatternCard {
  title: string;
  text: string;
}

interface ReviewCard {
  title: string;
  text: string;
}

interface CommunicationCard {
  title: string;
  text: string;
}

interface ConnectedModule {
  title: string;
  text: string;
  destination: string;
}

interface CustomizationCard {
  title: string;
  text: string;
}

export default function CrewManagementFtl() {
  // Page SEO Metadata Setup
  useSEO({
    title: "Crew Management & FTL Software for Airlines | Joya Fleet",
    description: "Coordinate crew schedules, duties, assignments, qualifications, endorsements and flight-time limitations through connected airline workflows with Joya Fleet.",
    canonicalPath: "/platform/crew-management-ftl",
    ogTitle: "Connected Crew Management & FTL Planning",
    ogDescription: "Explore Joya Fleet for crew scheduling, duty planning, qualification visibility, endorsements, FTL information and connected operational assignments."
  });

  // Section 2 Data
  const challengeCards: ValueCard[] = [
    {
      title: "Connected Crew Activity",
      text: "Keep flights, duties, standby, training, positioning and time away from operations visible within one planning environment.",
      icon: <Calendar size={20} className="text-gray-950" />
    },
    {
      title: "Qualification Context",
      text: "Maintain visibility into relevant positions, aircraft-type ratings, endorsements and supporting crew records.",
      icon: <BookOpen size={20} className="text-gray-950" />
    },
    {
      title: "Duty and Rest Visibility",
      text: "Review relevant FTL, cumulative activity and required-rest information during planning and assignment workflows.",
      icon: <Clock size={20} className="text-gray-950" />
    }
  ];

  // Section 3 Data
  const capabilities: CapabilityBlock[] = [
    {
      title: "Operational Crew Profiles",
      description: "Maintain relevant crew, employment, base and operational information within structured profiles.",
      points: [
        "Crew profiles",
        "Employment information",
        "Primary home base",
        "Secondary home base"
      ],
      visual: CREW_MANAGEMENT_VISUALS.profiles
    },
    {
      title: "Roles and Position Structure",
      description: "Organize cockpit, cabin and other approved operational responsibilities through configurable positions.",
      points: [
        "Cockpit positions",
        "Cabin positions",
        "Configurable operational positions",
        "Aircraft-type relationships",
        "Positioning roles"
      ],
      visual: CREW_MANAGEMENT_VISUALS.roles
    },
    {
      title: "Aircraft-Type Context",
      description: "Keep aircraft-type ratings and crew-position relationships visible during relevant planning workflows.",
      points: [
        "Aircraft-type ratings",
        "Position relationships",
        "Position requirements",
        "Crew operational roles"
      ],
      visual: CREW_MANAGEMENT_VISUALS.ratings
    },
    {
      title: "Crew Documents",
      description: "Maintain relevant passport records, supporting documents and attachments alongside the crew profile.",
      points: [
        "Passport information",
        "Crew documents",
        "Supporting attachments",
        "Document records"
      ],
      visual: CREW_MANAGEMENT_VISUALS.documents
    }
  ];

  // Section 4 Data
  const activityTypes: ActivityType[] = [
    {
      title: "Flight Assignments",
      text: "Keep operational flight assignments connected to individual and team schedules.",
      icon: <Layers size={18} className="text-gray-900" />
    },
    {
      title: "Duties",
      text: "Plan and review relevant duty activity within the wider crew schedule.",
      icon: <Clock size={18} className="text-gray-900" />
    },
    {
      title: "Standby",
      text: "Maintain airport and other configured standby activity within crew-planning records.",
      icon: <Sliders size={18} className="text-gray-900" />
    },
    {
      title: "Training & Simulator",
      text: "Coordinate relevant training and simulator activity alongside operational schedules.",
      icon: <Award size={18} className="text-gray-900" />
    },
    {
      title: "Leave & Off Days",
      text: "Keep vacation and planned time away visible during crew coordination.",
      icon: <Calendar size={18} className="text-gray-900" />
    },
    {
      title: "Positioning",
      text: "Record positioning activity as part of the connected crew schedule.",
      icon: <ArrowRight size={18} className="text-gray-900" />
    }
  ];

  // Section 5 Data
  const workflowStages: WorkflowStage[] = [
    {
      step: "01",
      title: "Prepare",
      text: "Create and update planned crew duties and relevant schedule activity.",
      status: "DRAFT"
    },
    {
      step: "02",
      title: "Review",
      text: "Review relevant assignment, activity, qualification and FTL information before publication.",
      status: "REVIEW"
    },
    {
      step: "03",
      title: "Publish",
      text: "Make approved duty activity available within relevant crew schedules and operational workflows.",
      status: "PUBLISHED"
    }
  ];

  // Section 6 Data
  const ftlGroups: FTLGroup[] = [
    {
      title: "Flight Duty Period",
      description: "Review relevant FDP information in the context of planned crew activity.",
      points: [
        "Flight Duty Period",
        "Maximum FDP information",
        "Sector count",
        "FDP extensions"
      ]
    },
    {
      title: "Flight and Duty Activity",
      description: "Maintain visibility into relevant flight time, duty time and cumulative activity.",
      points: [
        "Flight time",
        "Duty time",
        "Cumulative duty",
        "Activity context"
      ]
    },
    {
      title: "Required Rest",
      description: "Review relevant rest requirements before and after duty activity.",
      points: [
        "Rest before duty",
        "Rest after duty",
        "Home-base rest",
        "Out-of-base rest"
      ]
    },
    {
      title: "Recovery and Weekly Rest",
      description: "Keep configured weekly and recovery-rest information visible within relevant planning workflows.",
      points: [
        "Weekly rest",
        "Recovery rest",
        "Rest-period context",
        "Crew FTL status"
      ]
    }
  ];

  // Section 7 Data
  const patternCards: PatternCard[] = [
    {
      title: "Standby",
      text: "Maintain relevant standby information within crew duty and FTL planning."
    },
    {
      title: "Airport Standby",
      text: "Review configured airport-standby activity in the wider duty context."
    },
    {
      title: "Early Starts",
      text: "Keep early-start activity visible when reviewing relevant duty patterns."
    },
    {
      title: "Late Finishes",
      text: "Maintain visibility into late-finish activity within planned crew duties."
    },
    {
      title: "Night Duties",
      text: "Review relevant night-duty information as part of crew-planning context."
    },
    {
      title: "Acclimatisation & Disruptive Schedules",
      text: "Maintain relevant acclimatisation and disruptive-schedule information during applicable planning workflows."
    }
  ];

  // Section 8 Data
  const qualifications: CapabilityBlock[] = [
    {
      title: "Endorsement Management",
      description: "Maintain endorsement types, issue information, validity periods and supporting crew records.",
      points: [
        "Endorsement types",
        "Issue dates",
        "Expiry dates",
        "Country of issue"
      ],
      visual: CREW_MANAGEMENT_VISUALS.qualifications
    },
    {
      title: "Position and Aircraft-Type Relationships",
      description: "Connect relevant endorsements to operational positions and aircraft types.",
      points: [
        "Crew positions",
        "Aircraft types",
        "Qualification context",
        "Operational relationships"
      ],
      visual: CREW_MANAGEMENT_VISUALS.roles
    },
    {
      title: "Configurable Validity Rules",
      description: "Support relevant revalidation windows, non-expiring records and configured end-of-month validity rules.",
      points: [
        "Revalidation windows",
        "Non-expiring configuration",
        "End-of-month rules",
        "Validity context"
      ],
      visual: CREW_MANAGEMENT_VISUALS.profiles
    },
    {
      title: "Expiry Notifications",
      description: "Use configurable reminder intervals and notification rules to keep relevant validity information visible before expiry.",
      points: [
        "Reminder intervals",
        "Crew notifications",
        "Configured recipients",
        "Supporting files"
      ],
      visual: CREW_MANAGEMENT_VISUALS.documents
    }
  ];

  // Section 9 Data
  const reviewCards: ReviewCard[] = [
    {
      title: "Assignment Review",
      text: "Review relevant crew, qualification, activity and FTL information during assignment workflows."
    },
    {
      title: "Potential FTL Issues",
      text: "Surface relevant duty or rest concerns for operational review before assignments are finalized."
    },
    {
      title: "FTL Sheets",
      text: "Prepare structured FTL information for operational review and configurable reporting."
    },
    {
      title: "FTL Exception Review",
      text: "Review recorded FTL exceptions and relevant duty or rest concerns through configurable outputs."
    }
  ];

  // Section 10 Data
  const communicationCards: CommunicationCard[] = [
    {
      title: "Personal Schedules",
      text: "Provide relevant individual schedule and assigned-activity information through crew-facing workflows."
    },
    {
      title: "Work Schedules",
      text: "Maintain structured work-schedule information for relevant crew activity."
    },
    {
      title: "Email Notifications",
      text: "Support selected crew and schedule notifications through a configured and approved email service."
    },
    {
      title: "SMS Notifications",
      text: "Support selected crew-planning and operational notifications through a configured and approved SMS provider."
    }
  ];

  // Section 11 Data
  const connectedModules: ConnectedModule[] = [
    {
      title: "Flight Scheduling",
      text: "Coordinate crew requirements around planned and published flying activity.",
      destination: "/platform/flight-scheduling"
    },
    {
      title: "Operations & Dispatch",
      text: "Keep assigned crew and relevant operational flight information connected through execution.",
      destination: "/platform/operations-dispatch"
    },
    {
      title: "Fleet & Maintenance Planning",
      text: "Coordinate crew requirements with relevant aircraft availability and operational planning.",
      destination: "/platform/fleet-maintenance"
    },
    {
      title: "Reporting & Analytics",
      text: "Use crew, duty and FTL information in configurable reports and exports.",
      destination: "/platform/reporting-analytics"
    },
    {
      title: "Integrations",
      text: "Extend selected workflows through configurable communication channels and separately assessed connections.",
      destination: "/platform/integrations"
    }
  ];

  // Section 12 Data
  const customizationCards: CustomizationCard[] = [
    {
      title: "Position & Role Configuration",
      text: "Organize operational positions and crew responsibilities around the airline structure."
    },
    {
      title: "Granular Access",
      text: "Configure access through users, teams, groups and operational permissions."
    },
    {
      title: "Reporting Requirements",
      text: "Build reusable crew and FTL outputs around relevant operational information."
    },
    {
      title: "Notification & Integration Needs",
      text: "Configure communication channels and evaluate additional connections against documented requirements."
    }
  ];

  // Interactive UI State for Hero visualization
  const [activeHeroTab, setActiveHeroTab] = useState(0);
  const heroTabs = [
    { id: "schedule", label: "Crew Schedule", desc: "Crew schedules and planned activity across relevant operational periods." },
    { id: "duty", label: "Duty Activity", desc: "Duty, standby, training, simulator and positioning activity in one planning context." },
    { id: "qualification", label: "Qualification Context", desc: "Aircraft-type ratings, positions, endorsements and relevant validity information." },
    { id: "ftl", label: "FTL Review", desc: "FDP, duty, flight-time and required-rest information for operational review." },
    { id: "assignment", label: "Operational Assignment", desc: "Crew assignments connected to relevant schedules and operational trips." }
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
              <Link to="/platform" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:outline-none rounded">Platform</Link>
              <ChevronRight size={10} className="text-blue-300 shrink-0" aria-hidden="true" />
              <span className="text-[#38BDF8] font-bold" aria-current="page">Crew Management & FTL</span>
            </nav>
          </div>

          <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full relative isolate z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              <div 
                data-aos="fade-right"
                data-aos-duration="800"
                className="lg:col-span-7 flex flex-col items-start text-left bg-white/95 backdrop-blur-2xl border border-white/80 p-8 sm:p-10 lg:p-12 rounded-3xl shadow-2xl shadow-[#071E3D]/40 text-gray-900"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-6 font-mono">
                  <Users size={12} aria-hidden="true" className="text-[#1267E5]" /> CREW MANAGEMENT & FTL
                </span>
                
                <h1 className="text-4xl sm:text-6xl font-bold text-gray-950 tracking-tight leading-[1.1] mb-2">
                  Plan the crew.
                  <span className="block text-[#1267E5] font-bold text-2xl sm:text-4xl mt-3">
                    Keep duty, rest and qualification context visible.
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg text-gray-800 font-normal leading-relaxed mb-4 max-w-xl">
                  Coordinate crew schedules, assignments, duties, qualifications, endorsements and flight-time limitations through one connected operational platform.
                </p>
                
                <p className="text-sm text-gray-600 font-normal leading-relaxed mb-8 max-w-lg">
                  Joya Fleet helps crew planning teams make more informed assignments while keeping relevant availability, activity, qualification and FTL information connected to daily operations.
                </p>
                
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
                  <Link
                    to="/platform"
                    className="bg-[#1267E5] hover:bg-[#0E54BD] text-white text-center font-bold px-7 py-3.5 rounded-lg text-sm transition-all shadow-lg shadow-[#1267E5]/25 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    Explore the Platform
                  </Link>
                </div>
                
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-mono">
                  Crew scheduling • Duty planning • FTL visibility • Qualifications & endorsements
                </p>
              </div>

              {/* Premium Aviation Crew Planning Workflow Concept */}
              <div 
                data-aos="fade-left"
                data-aos-duration="850"
                data-aos-delay="150"
                className="lg:col-span-5 relative w-full min-h-[440px] bg-[#071E3D] bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] rounded-3xl border border-[#38BDF8]/30 shadow-2xl overflow-hidden p-8 flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-radial-gradient from-[#1267E5]/20 to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#39BFF8]/10 rounded-full blur-[70px] pointer-events-none" />
                
                <div className="flex justify-between items-start border-b border-white/10 pb-4 relative z-10">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#39BFF8] block uppercase font-semibold">CREW PLANNING CONTEXT</span>
                    <span className="text-xs font-bold text-white font-mono tracking-tight uppercase">Connected Crew Pipeline</span>
                  </div>
                  <ShieldCheck size={16} aria-hidden="true" className="text-[#39BFF8]" />
                </div>

                {/* Abstract visualization showing flow of steps */}
                <div className="my-6 flex-1 flex flex-col justify-center space-y-3 relative z-10">
                  {heroTabs.map((tab, idx) => {
                    const isActive = idx === activeHeroTab;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveHeroTab(idx)}
                        className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex items-center justify-between group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071E3D] ${
                          isActive 
                            ? 'bg-[#1267E5] text-white border-[#39BFF8] shadow-lg shadow-[#1267E5]/40 ring-1 ring-[#39BFF8]/50 scale-[1.02]' 
                            : 'bg-[#0A2E5C]/60 text-gray-300 border-[#38BDF8]/20 hover:border-[#38BDF8]/50 hover:text-white'
                        }`}
                        aria-pressed={isActive}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono border ${
                            isActive ? 'bg-white/20 text-white border-white/40 font-bold' : 'bg-[#1267E5]/20 text-[#39BFF8] border-[#1267E5]/30'
                          }`}>
                            0{idx + 1}
                          </span>
                          <span className="font-semibold">{tab.label}</span>
                        </div>
                        <span className={`text-[10px] font-mono transition-transform duration-200 ${
                          isActive ? 'text-[#39BFF8] font-bold translate-x-0' : 'text-gray-400 group-hover:translate-x-0.5'
                        }`}>
                          {isActive ? 'SELECTED' : 'VIEW'}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Info Block */}
                <div className="bg-[#0A2E5C]/80 text-white p-4 rounded-xl border border-[#38BDF8]/30 text-left relative z-10 shadow-lg">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeHeroTab}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-[9px] font-mono tracking-widest text-[#39BFF8] block uppercase mb-1 font-semibold">
                        STAGE 0{activeHeroTab + 1} • {heroTabs[activeHeroTab].label.toUpperCase()}
                      </span>
                      <p className="text-[11px] text-gray-200 leading-relaxed font-medium">
                        {heroTabs[activeHeroTab].desc}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2 — THE CREW-PLANNING CHALLENGE */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Radio size={12} className="text-[#1267E5]" aria-hidden="true" /> ONE CONNECTED CREW PICTURE
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                An assignment depends on more than availability.
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                Crew planning brings together schedules, operational roles, aircraft qualifications, duty activity, required rest, endorsements and changing flight requirements.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Joya Fleet keeps relevant crew-planning information connected so teams can review assignments with a clearer operational context.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challengeCards.map((card, idx) => (
                <div key={idx} className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-gray-200/80 hover:border-[#1267E5]/40 transition-all shadow-md flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#1267E5]/10 flex items-center justify-center text-[#1267E5] mb-6 font-bold font-mono text-xs border border-[#1267E5]/20">
                      {card.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-200/80 text-[10px] font-semibold text-[#1267E5] uppercase tracking-wider font-mono">
                    Crew Foundation
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 3 — CREW PROFILES AND OPERATIONAL ROLES */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-20 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Users size={12} className="text-[#1267E5]" aria-hidden="true" /> CREW OPERATIONAL STRUCTURE
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Keep relevant crew information connected to operational responsibilities.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Maintain crew profiles, operational positions, aircraft qualifications, home-base information and supporting records within the planning environment.
              </p>
            </div>

            <div className="space-y-24">
              {capabilities.map((cap, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} flex flex-col items-start text-left`}>
                      <span className="text-xs font-bold text-[#1267E5] font-mono mb-3 block">CAPABILITY 0{idx + 1}</span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                        {cap.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                        {cap.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 w-full mb-8">
                        {cap.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex gap-2.5 items-center text-sm font-semibold text-gray-800">
                            <div className="w-5 h-5 rounded-md bg-[#1267E5]/10 flex items-center justify-center shrink-0 border border-[#1267E5]/20">
                              <Check size={13} aria-hidden="true" className="text-[#1267E5]" />
                            </div>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                      <div className="px-4 py-2.5 bg-gray-50/90 border-l-2 border-[#1267E5] text-xs text-gray-700 font-medium rounded-r shadow-2xs">
                        Crew planning with qualification, duty and rest context
                      </div>
                    </div>

                    {/* Configurable Visual Container */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} w-full`}>
                      <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden">
                        <div className="flex justify-between items-center border-b border-gray-200/80 pb-3.5 mb-6">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                          </div>
                          <span className="text-[10px] font-mono tracking-widest text-[#1267E5] uppercase font-bold">
                            JOYA FLEET • CREW WORKSPACE
                          </span>
                        </div>

                        {cap.visual.imageUrl ? (
                          <img 
                            id={cap.visual.id}
                            src={cap.visual.imageUrl} 
                            alt={cap.visual.alt} 
                            className="w-full h-auto object-cover rounded-2xl aspect-[16/10] border border-gray-200 shadow-xs" 
                            referrerPolicy="no-referrer" 
                          />
                        ) : (
                          <div className="bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] text-white rounded-2xl aspect-[16/10] p-6 flex flex-col justify-between relative overflow-hidden border border-[#38BDF8]/30 shadow-inner">
                            <div className="absolute inset-0 bg-radial-gradient from-[#1267E5]/20 to-transparent pointer-events-none" />
                            
                            <div className="z-10">
                              <span className="text-[9px] font-mono tracking-widest text-[#39BFF8] block uppercase mb-0.5 font-semibold">CREW PLANNING CONTEXT</span>
                              <h4 className="text-xs font-bold text-white tracking-wide uppercase font-mono">
                                {cap.visual.title}
                              </h4>
                            </div>

                            <div className="my-4 flex-1 flex flex-col justify-center space-y-3 z-10">
                              <p className="text-[11px] text-gray-200 font-medium leading-relaxed max-w-sm">
                                {cap.visual.description}
                              </p>
                              <div className="space-y-1.5 pt-2">
                                <div className="h-1.5 w-11/12 bg-[#1267E5]/60 rounded" />
                                <div className="h-1.5 w-8/12 bg-[#39BFF8]/40 rounded" />
                              </div>
                            </div>

                            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-[9px] text-[#39BFF8] font-mono z-10">
                              <span>JOYA FLEET WORKFLOW CONTEXT</span>
                              <span>CONNECTED CREW CONTEXT</span>
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

        {/* SECTION 4 — ONE CALENDAR FOR CREW ACTIVITY */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Calendar size={12} className="text-[#1267E5]" aria-hidden="true" /> CONNECTED CREW SCHEDULING
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Coordinate operational and non-flight activity in one planning view.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Organize flights, duties, standby, training, leave, simulator events and positioning activity within connected crew schedules.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {activityTypes.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/80 hover:border-[#1267E5]/40 transition-all shadow-xs">
                    <div className="w-9 h-9 rounded-xl bg-[#1267E5]/10 flex items-center justify-center text-[#1267E5] shrink-0 border border-[#1267E5]/20">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Joya Fleet Crew Calendar Large Representation */}
              <div className="lg:col-span-7">
                <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden">
                  <div className="flex justify-between items-center border-b border-gray-200/80 pb-3.5 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#1267E5] uppercase font-bold">
                      INTEGRATED CALENDAR • JOYA FLEET
                    </span>
                  </div>

                  {CREW_MANAGEMENT_VISUALS.calendar.imageUrl ? (
                    <img 
                      src={CREW_MANAGEMENT_VISUALS.calendar.imageUrl} 
                      alt={CREW_MANAGEMENT_VISUALS.calendar.alt} 
                      className="w-full h-auto object-cover rounded-2xl aspect-[16/9] border border-gray-200 shadow-xs" 
                      referrerPolicy="no-referrer" 
                    />
                  ) : (
                    <div className="bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] text-white rounded-2xl aspect-[16/9] p-6 flex flex-col justify-between relative overflow-hidden border border-[#38BDF8]/30 shadow-inner">
                      <div className="absolute inset-0 bg-radial-gradient from-[#1267E5]/20 to-transparent pointer-events-none" />
                      
                      <div className="z-10 flex justify-between items-start">
                        <div>
                          <span className="text-[9px] font-mono tracking-widest text-[#39BFF8] block uppercase mb-0.5 font-semibold">CREW ROTATIONS</span>
                          <h4 className="text-xs font-bold text-white tracking-wide uppercase font-mono">
                            {CREW_MANAGEMENT_VISUALS.calendar.title}
                          </h4>
                        </div>
                        <span className="text-[9px] font-mono bg-[#1267E5]/20 border border-[#1267E5]/40 text-[#39BFF8] px-2 py-0.5 rounded font-bold">
                          CONNECTED VIEW
                        </span>
                      </div>

                      <div className="my-4 flex-1 flex flex-col justify-center space-y-3 z-10">
                        <p className="text-xs text-gray-200 font-medium leading-relaxed max-w-md">
                          {CREW_MANAGEMENT_VISUALS.calendar.description}
                        </p>
                        
                        {/* Abstract Calendar Matrix Visual */}
                        <div className="grid grid-cols-7 gap-1.5 pt-2">
                          {Array.from({ length: 7 }).map((_, colIdx) => (
                            <div key={colIdx} className="space-y-1">
                              <div className="h-4 bg-[#0A2E5C] rounded flex items-center justify-center text-[8px] font-mono text-gray-300 border border-white/5">
                                Day {colIdx + 1}
                              </div>
                              <div className={`h-8 rounded flex items-center justify-center p-1 ${
                                colIdx === 0 ? 'bg-[#1267E5]/40 border border-[#38BDF8]/60 text-[#38BDF8]' :
                                colIdx === 2 ? 'bg-amber-950/50 border border-amber-500/50 text-amber-300' :
                                colIdx === 4 ? 'bg-emerald-950/50 border border-emerald-500/50 text-emerald-300' :
                                'bg-[#0A2E5C]/60 border border-white/10 text-gray-300'
                              }`}>
                                <span className="text-[8px] font-bold uppercase tracking-widest font-mono text-center">
                                  {colIdx === 0 ? 'FLT' :
                                   colIdx === 2 ? 'STB' :
                                   colIdx === 4 ? 'OFF' : 'DUT'}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-white/10 pt-3 flex justify-between items-center text-[9px] text-[#39BFF8] font-mono z-10">
                        <span>PLANNING MATRIX VIEW</span>
                        <span>JOYA FLEET OPERATIONS</span>
                      </div>
                    </div>
                  )}

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 5 — DRAFT, REVIEW, AND PUBLISH CREW DUTIES */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Layers size={12} className="text-[#1267E5]" aria-hidden="true" /> CONTROLLED CREW-PLANNING WORKFLOWS
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Prepare crew duties before they become part of the published schedule.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Joya Fleet supports structured draft and published duty workflows, helping planning teams separate preparation from active crew schedules.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {workflowStages.map((stage, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.05 }}
                  className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-gray-200/80 hover:border-[#1267E5]/40 transition-all shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xs font-bold text-[#1267E5] font-mono">STAGE {stage.step}</span>
                      <span className="text-[9px] font-mono font-bold tracking-wider px-2.5 py-1 bg-[#1267E5]/10 border border-[#1267E5]/20 text-[#1267E5] rounded uppercase">
                        {stage.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl mb-3">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {stage.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="max-w-3xl">
              <div className="px-4 py-2.5 bg-gray-50/90 border-l-2 border-[#1267E5] text-xs text-gray-700 font-medium rounded-r shadow-2xs">
                Relevant crew activity remains connected to operational schedules, reducing fragmented handovers between planning teams.
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 6 — FTL VISIBILITY DURING PLANNING */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Clock size={12} className="text-[#1267E5]" aria-hidden="true" /> FLIGHT TIME LIMITATION VISIBILITY
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Review duty and rest context before assignments move forward.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Joya Fleet keeps relevant flight-time, duty-time, cumulative activity and required-rest information available during crew-planning workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {ftlGroups.map((group, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.05 }}
                  className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-gray-200/80 hover:border-[#1267E5]/40 transition-all shadow-md"
                >
                  <span className="text-xs font-bold text-[#1267E5] font-mono mb-2 block">LIMIT CATEGORY 0{idx + 1}</span>
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-3">
                    {group.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {group.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {group.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex gap-2.5 items-center text-xs text-gray-800 font-semibold">
                        <div className="w-4 h-4 rounded bg-[#1267E5]/10 flex items-center justify-center shrink-0 border border-[#1267E5]/20">
                          <Check size={11} aria-hidden="true" className="text-[#1267E5]" />
                        </div>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="max-w-3xl">
              <div className="px-4 py-3 bg-gray-50/90 border-l-2 border-[#1267E5] text-xs text-gray-700 font-medium rounded-r leading-relaxed shadow-2xs">
                <span className="font-bold text-gray-900 block mb-1 text-sm">Operational Notice</span>
                FTL information supports more informed planning decisions but does not replace regulatory oversight, operator procedures or accountable operational review.
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 7 — STANDBY AND DISRUPTIVE SCHEDULE CONTEXT */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Sliders size={12} className="text-[#1267E5]" aria-hidden="true" /> DUTY-PATTERN CONTEXT
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Keep relevant standby and disruptive-schedule information visible.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Review configured duty-pattern information including standby activity, early starts, late finishes, night duties and acclimatisation context.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {patternCards.map((card, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.05 }}
                  className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-gray-200/80 hover:border-[#1267E5]/40 transition-all shadow-md"
                >
                  <span className="text-[10px] font-mono text-[#1267E5] uppercase font-bold tracking-wider mb-2 block">PATTERN 0{idx + 1}</span>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.text}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 8 — QUALIFICATIONS, ENDORSEMENTS, AND VALIDITY */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-20 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Award size={12} className="text-[#1267E5]" aria-hidden="true" /> QUALIFICATION VISIBILITY
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Keep relevant qualifications and validity information close to the assignment.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Maintain endorsements, aircraft-type relationships, validity periods, supporting files and configurable reminder rules within connected crew records.
              </p>
            </div>

            <div className="space-y-24">
              {qualifications.map((cap, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} flex flex-col items-start text-left`}>
                      <span className="text-xs font-bold text-[#1267E5] font-mono mb-3 block">QUALIFICATION CAPABILITY 0{idx + 1}</span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                        {cap.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                        {cap.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 w-full mb-8">
                        {cap.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex gap-2.5 items-center text-sm font-semibold text-gray-800">
                            <div className="w-5 h-5 rounded-md bg-[#1267E5]/10 flex items-center justify-center shrink-0 border border-[#1267E5]/20">
                              <Check size={13} aria-hidden="true" className="text-[#1267E5]" />
                            </div>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                      <div className="px-4 py-2.5 bg-gray-50/90 border-l-2 border-[#1267E5] text-xs text-gray-700 font-medium rounded-r shadow-2xs">
                        Support more informed crew assignments
                      </div>
                    </div>

                    {/* Configurable Visual Container */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} w-full`}>
                      <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden">
                        <div className="flex justify-between items-center border-b border-gray-200/80 pb-3.5 mb-6">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                          </div>
                          <span className="text-[10px] font-mono tracking-widest text-[#1267E5] uppercase font-bold">
                            QUALIFICATIONS • JOYA FLEET
                          </span>
                        </div>

                        {cap.visual.imageUrl ? (
                          <img 
                            src={cap.visual.imageUrl} 
                            alt={cap.visual.alt} 
                            className="w-full h-auto object-cover rounded-2xl aspect-[16/10] border border-gray-200 shadow-xs" 
                            referrerPolicy="no-referrer" 
                          />
                        ) : (
                          <div className="bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] text-white rounded-2xl aspect-[16/10] p-6 flex flex-col justify-between relative overflow-hidden border border-[#38BDF8]/30 shadow-inner">
                            <div className="absolute inset-0 bg-radial-gradient from-[#1267E5]/20 to-transparent pointer-events-none" />
                            
                            <div className="z-10">
                              <span className="text-[9px] font-mono tracking-widest text-[#39BFF8] block uppercase mb-0.5 font-semibold">JOYA FLEET WORKFLOW CONTEXT</span>
                              <h4 className="text-xs font-bold text-white tracking-wide uppercase font-mono">
                                {cap.visual.title}
                              </h4>
                            </div>

                            <div className="my-4 flex-1 flex flex-col justify-center space-y-3 z-10">
                              <p className="text-[11px] text-gray-200 font-medium leading-relaxed max-w-sm">
                                {cap.visual.description}
                              </p>
                              <div className="space-y-1.5 pt-2">
                                <div className="h-1.5 w-10/12 bg-[#1267E5]/60 rounded" />
                                <div className="h-1.5 w-7/12 bg-[#39BFF8]/40 rounded" />
                              </div>
                            </div>

                            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-[9px] text-[#39BFF8] font-mono z-10">
                              <span>JOYA FLEET WORKFLOW CONTEXT</span>
                              <span>JOYA FLEET OPERATIONS</span>
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

        {/* SECTION 9 — ASSIGNMENT REVIEW AND FTL REPORTING */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <ShieldCheck size={12} className="text-[#1267E5]" aria-hidden="true" /> REVIEW BEFORE ASSIGNMENT
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Bring relevant crew and FTL information into the planning decision.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Joya Fleet supports assignment and duty review with connected FTL information, operational context and configurable report outputs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {reviewCards.map((card, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.05 }}
                  className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-gray-200/80 hover:border-[#1267E5]/40 transition-all shadow-md"
                >
                  <span className="text-[10px] font-mono text-[#1267E5] uppercase font-bold tracking-wider mb-2 block">AUDIT STEP 0{idx + 1}</span>
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-3 items-center flex-wrap pt-4">
              <span className="text-xs font-semibold text-[#1267E5] font-mono uppercase tracking-wider">AVAILABLE OUTPUT FORMATS:</span>
              <span className="text-xs font-bold bg-[#1267E5]/10 text-[#1267E5] px-3 py-1 rounded-lg border border-[#1267E5]/20 font-mono">Excel</span>
              <span className="text-xs font-bold bg-[#1267E5]/10 text-[#1267E5] px-3 py-1 rounded-lg border border-[#1267E5]/20 font-mono">CSV</span>
              <span className="text-xs font-bold bg-[#1267E5]/10 text-[#1267E5] px-3 py-1 rounded-lg border border-[#1267E5]/20 font-mono">Configurable report data</span>
            </div>

          </div>
        </section>

        {/* SECTION 10 — CREW COMMUNICATION AND SCHEDULE ACCESS */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Radio size={12} className="text-[#1267E5]" aria-hidden="true" /> KEEP CREWS INFORMED
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Make relevant schedule and duty information easier to access.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Support crew access through personal schedules, work schedules and separately configured email or SMS channels.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {communicationCards.map((card, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.05 }}
                  className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-gray-200/80 hover:border-[#1267E5]/40 transition-all shadow-md"
                >
                  <span className="text-[10px] font-mono text-[#1267E5] uppercase font-bold tracking-wider mb-2 block">CHANNEL 0{idx + 1}</span>
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.text}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 11 — CONNECTED ACROSS THE PLATFORM */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Layers size={12} className="text-[#1267E5]" aria-hidden="true" /> CONNECTED TO DAILY OPERATIONS
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Crew planning stays connected to schedules, trips and completed operational records.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Flight schedules create operational demand, crew assignments support trip preparation, FTL context informs planning and completed activity supports configurable reporting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {connectedModules.map((mod, idx) => (
                <Link 
                  key={idx} 
                  to={mod.destination}
                  className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-gray-200/80 hover:border-[#1267E5] hover:shadow-lg transition-all group flex flex-col justify-between h-56 text-left focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:outline-none"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#1267E5] uppercase tracking-widest mb-3 block font-bold">MODULE 0{idx + 1}</span>
                    <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-3">
                      {mod.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {mod.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1267E5] pt-4 border-t border-gray-100 mt-2">
                    <span>View Module</span>
                    <ArrowRight size={12} aria-hidden="true" className="group-hover:translate-x-1 transition-transform motion-reduce:transition-none text-[#1267E5]" />
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 12 — CONFIGURED AROUND YOUR CREW OPERATION */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Sliders size={12} className="text-[#1267E5]" aria-hidden="true" /> CONFIGURED FOR YOUR AIRLINE
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Support the crew-planning structure your operation requires.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Configure relevant positions, access responsibilities, planning settings, reports and notification rules, while assessing integrations against documented requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              {customizationCards.map((card, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.05 }}
                  className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-gray-200/80 hover:border-[#1267E5]/40 transition-all shadow-md"
                >
                  <span className="text-[10px] font-mono text-[#1267E5] uppercase font-bold tracking-wider mb-2 block">CONFIGURATION 0{idx + 1}</span>
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
              <Link
                to="/contact?intent=customization&module=crew-management-ftl"
                className="bg-[#1267E5] hover:bg-[#0E54BD] text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-all shadow-lg shadow-[#1267E5]/25 text-center w-full sm:w-auto motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Discuss Your Crew Management Requirements
              </Link>
            </div>

          </div>
        </section>

        {/* SECTION 13 — CREW WORKFLOW VISUAL */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Sparkles size={12} className="text-[#1267E5]" aria-hidden="true" /> SEE THE CREW WORKFLOW IN CONTEXT
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                One connected workflow for schedules, duties, qualifications and FTL information.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Review crew activity, assignments, duty context, qualification information and relevant planning records within one connected workspace.
              </p>
            </div>

            {/* Configurable Workflow Visual Placeholder */}
            <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden max-w-5xl mx-auto">
              <div className="flex justify-between items-center border-b border-gray-200/80 pb-3.5 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-[#1267E5] uppercase font-bold">
                  CREW MANAGEMENT & FTL • WORKSPACE
                </span>
              </div>

              {CREW_MANAGEMENT_VISUALS.workspace.imageUrl ? (
                <img 
                  id={CREW_MANAGEMENT_VISUALS.workspace.id}
                  src={CREW_MANAGEMENT_VISUALS.workspace.imageUrl} 
                  alt={CREW_MANAGEMENT_VISUALS.workspace.alt} 
                  className="w-full h-auto object-cover rounded-2xl aspect-[16/9] border border-gray-200 shadow-xs" 
                  referrerPolicy="no-referrer" 
                />
              ) : (
                <div className="bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] text-white rounded-2xl aspect-[16/9] p-8 flex flex-col justify-between relative overflow-hidden border border-[#38BDF8]/30 shadow-inner">
                  <div className="absolute inset-0 bg-radial-gradient from-[#1267E5]/20 to-transparent pointer-events-none" />
                  
                  <div className="z-10">
                    <span className="text-[9px] font-mono tracking-widest text-[#39BFF8] block uppercase mb-1 font-semibold">JOYA FLEET CREW WORKFLOW CONTEXT</span>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-wide uppercase font-mono">
                      {CREW_MANAGEMENT_VISUALS.workspace.title}
                    </h3>
                  </div>

                  <div className="my-6 flex-1 flex flex-col justify-center space-y-4 max-w-lg z-10">
                    <p className="text-xs sm:text-sm text-gray-200 font-medium leading-relaxed">
                      {CREW_MANAGEMENT_VISUALS.workspace.description}
                    </p>
                    
                    {/* Subtle decorative operational graphics without fictional elements */}
                    <div className="space-y-2 pt-2">
                      <div className="h-2 w-11/12 bg-[#1267E5]/60 rounded" />
                      <div className="h-2 w-10/12 bg-[#39BFF8]/40 rounded" />
                      <div className="h-2 w-7/12 bg-[#1267E5]/40 rounded" />
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4 flex justify-between items-center text-[9px] text-[#39BFF8] font-mono z-10">
                    <span>JOYA FLEET CREW WORKFLOW CONTEXT</span>
                    <span>CONNECTED CREW PLANNING CONTEXT</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* SECTION 14 — FINAL CTA */}
        <section id="crew-management-ftl-cta-section" className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            <div className="relative overflow-hidden rounded-3xl bg-[#071E3D] bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] p-8 sm:p-14 text-white border border-[#38BDF8]/30 shadow-2xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div className="absolute top-0 right-0 w-96 h-96 bg-radial-gradient from-[#1267E5]/25 to-transparent pointer-events-none rounded-full blur-3xl" />

              <div className="max-w-2xl relative z-10">
                <span className="text-[10px] font-mono tracking-widest text-[#38BDF8] uppercase font-bold block mb-2">
                  DIRECT AVIATION CREW CONSULTATION
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                  Connect crew planning with the wider airline operation.
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
                  See how Joya Fleet can support crew schedules, assignments, qualifications, FTL visibility and role-based operational workflows.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto shrink-0">
                <Link
                  to="/contact?intent=demo&module=crew-management-ftl"
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
