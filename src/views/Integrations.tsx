/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { useState, ReactNode } from 'react';
import Link from '../components/RouterLink';
import { MotionConfig } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import { HeroBackground } from '../components/HeroBackground';
import {
  ChevronRight,
  Check,
  ArrowRight,
  Cloud,
  Settings,
  Layers,
  Users,
  Activity,
  Lock,
  Database,
  Radio,
  Sparkles,
  Cpu,
  Globe,
  Workflow,
  ShieldCheck,
  Cable,
  Server
} from 'lucide-react';

interface ProductVisualFrameProps {
  id: string;
  title: string;
  description: string;
  aspectRatio: "16:9" | "16:10";
  alt: string;
  imageUrl?: string;
  children?: ReactNode;
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
        className={`w-full h-auto object-cover rounded-2xl border border-[#1267E5]/20 shadow-md ${aspectClass}`}
      />
    );
  }

  return (
    <div
      id={id}
      role="img"
      aria-label={alt}
      className={`relative w-full overflow-hidden rounded-[24px] border border-[#1267E5]/25 bg-gradient-to-b from-[#071B33] to-[#040E1A] p-6 flex flex-col justify-between text-white shadow-xl ${aspectClass}`}
    >
      <div className="absolute inset-0 bg-radial-gradient from-[#1267E5]/15 to-transparent pointer-events-none" />
      
      {/* Top Bar */}
      <div className="z-10 flex justify-between items-start border-b border-white/10 pb-3">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#39BFF8] block uppercase mb-0.5 font-bold">
            JOYA INTEGRATION ENGINE • LIVE BRIDGE
          </span>
          <h4 className="text-xs font-bold text-white tracking-wide uppercase font-mono">
            {title}
          </h4>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#1267E5]/20 border border-[#1267E5]/40 text-[#39BFF8] font-mono text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#39BFF8] animate-pulse" />
          <span>BRIDGE ACTIVE</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-4 flex-1 flex flex-col justify-center space-y-3 z-10">
        <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed max-w-sm">
          {description}
        </p>
        {children ? (
          children
        ) : (
          <div className="space-y-2 pt-2">
            <div className="h-1.5 w-11/12 bg-white/10 rounded-full" />
            <div className="h-1.5 w-8/12 bg-[#1267E5]/40 rounded-full" />
          </div>
        )}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-3 flex justify-between items-center text-[10px] text-gray-400 font-mono z-10">
        <span className="flex items-center gap-1.5">
          <Cable size={12} className="text-[#39BFF8]" />
          <span>PROTOCOL: SECURE REST / WEBSOCKET</span>
        </span>
        <span>CONFIGURED CONNECTION CONTEXT</span>
      </div>
    </div>
  );
}

// Data models
interface ChallengeCard {
  title: string;
  text: string;
  icon: ReactNode;
}

interface ApproachStage {
  step: string;
  title: string;
  text: string;
}

interface EcosystemCard {
  category: string;
  title: string;
  description: string;
  supportingText: string;
  statusLabel: string;
  icon: ReactNode;
}

interface CapabilityItem {
  title: string;
  text: string;
}

interface SkyputerValueItem {
  title: string;
  text: string;
}

interface ChannelData {
  title: string;
  description: string;
  labels: string[];
  note: string;
}

interface WeatherContextCard {
  title: string;
  text: string;
}

interface AccountingArea {
  title: string;
  text: string;
}

interface ControlCard {
  title: string;
  text: string;
}

interface AccessCard {
  title: string;
  text: string;
}

interface CustomDevCard {
  title: string;
  text: string;
}

interface RegionalCard {
  title: string;
  text: string;
}

interface ConnectedModule {
  title: string;
  text: string;
  destination: string;
}

export default function Integrations() {
  // Page SEO and metadata lifecycle pattern
  useSEO({
    title: "Airline Operations Integrations | Joya Fleet",
    description: "Configure Joya Fleet add-ons, communication channels and tailored integrations for selected aviation, operational and business workflows.",
    canonicalPath: "/platform/integrations",
    ogTitle: "Configurable Integrations for Connected Airline Operations",
    ogDescription: "Explore configurable Skyputer and CAO IRI add-ons, SMS and Email channels, and separately assessed Weather and Accounting integrations."
  });

  const [activeHeroNode, setActiveHeroNode] = useState<number>(0);

  // Section 2: Challenge Cards
  const challengeCards: ChallengeCard[] = [
    {
      title: "Reduce Repeated Transfer",
      text: "Reduce repeated manual information transfer where an approved connection is configured.",
      icon: <Activity size={20} aria-hidden="true" className="text-[#1267E5]" />
    },
    {
      title: "Keep Operational Context",
      text: "Maintain relevant connected information within applicable planning, operations and reporting workflows.",
      icon: <Layers size={20} aria-hidden="true" className="text-[#1267E5]" />
    },
    {
      title: "Support Regional Requirements",
      text: "Configure selected connections around approved airline and regional operational requirements.",
      icon: <Settings size={20} aria-hidden="true" className="text-[#1267E5]" />
    }
  ];

  // Section 3: Approach Stages
  const approachStages: ApproachStage[] = [
    {
      step: "01",
      title: "Understand the Workflow",
      text: "Identify the operational process, relevant information and connected teams."
    },
    {
      step: "02",
      title: "Define the Integration Scope",
      text: "Confirm supported information flows, responsibilities and implementation boundaries."
    },
    {
      step: "03",
      title: "Configure and Validate",
      text: "Implement the approved connection and validate applicable operational workflows."
    },
    {
      step: "04",
      title: "Support and Evolve",
      text: "Provide support under the agreed implementation plan and assess future integration requirements."
    }
  ];

  // Section 4: Configurable Integration Options
  const ecosystemCards: EcosystemCard[] = [
    {
      category: "AVIATION ADD-ON",
      title: "Skyputer",
      description: "Connect selected Skyputer-supported information with relevant Joya Fleet workflows through a configured add-on.",
      supportingText: "Scope depends on available technical interfaces and the approved operational requirement.",
      statusLabel: "CONFIGURABLE ADD-ON",
      icon: <Settings size={18} aria-hidden="true" className="text-[#1267E5]" />
    },
    {
      category: "REGIONAL AVIATION ADD-ON",
      title: "CAO IRI",
      description: "Support selected authority-related operational workflows through a separately configured CAO IRI add-on.",
      supportingText: "Available workflows and information exchange are defined during operational and technical assessment.",
      statusLabel: "CONFIGURABLE ADD-ON",
      icon: <Database size={18} aria-hidden="true" className="text-[#1267E5]" />
    },
    {
      category: "COMMUNICATION CHANNEL",
      title: "SMS",
      description: "Support selected notifications through a configured SMS provider.",
      supportingText: "Provider, recipients, message scope and delivery behavior depend on the approved implementation.",
      statusLabel: "CONFIGURABLE CHANNEL",
      icon: <Radio size={18} aria-hidden="true" className="text-[#1267E5]" />
    },
    {
      category: "COMMUNICATION CHANNEL",
      title: "Email",
      description: "Support selected notifications through a configured email service.",
      supportingText: "Templates, recipients and delivery behavior depend on the approved implementation.",
      statusLabel: "CONFIGURABLE CHANNEL",
      icon: <Users size={18} aria-hidden="true" className="text-[#1267E5]" />
    },
    {
      category: "CUSTOM OPERATIONAL INTEGRATION",
      title: "Weather Systems",
      description: "Assess connections with selected weather systems for documented planning or operational requirements.",
      supportingText: "Availability depends on the selected provider, interface access and agreed implementation scope.",
      statusLabel: "CUSTOM INTEGRATION",
      icon: <Cloud size={18} aria-hidden="true" className="text-[#1267E5]" />
    },
    {
      category: "CUSTOM BUSINESS INTEGRATION",
      title: "Accounting Systems",
      description: "Assess selected information exchange with an approved accounting system or workflow.",
      supportingText: "Data scope, direction and responsibilities are defined during integration discovery.",
      statusLabel: "CUSTOM INTEGRATION",
      icon: <Layers size={18} aria-hidden="true" className="text-[#1267E5]" />
    }
  ];

  // Section 5: CAO IRI Capability Items
  const caoCapabilities: CapabilityItem[] = [
    {
      title: "Defined Workflow Scope",
      text: "Identify the authority-related process and information required by the airline."
    },
    {
      title: "Structured Information Exchange",
      text: "Configure selected information exchange where supported by the available interface."
    },
    {
      title: "Implementation Records",
      text: "Maintain relevant configuration and activity context where provided by the implemented connection."
    },
    {
      title: "Operational Review",
      text: "Keep applicable connected information available to authorized users within the agreed workflow."
    }
  ];

  // Section 6: Skyputer Value Items
  const skyputerItems: SkyputerValueItem[] = [
    {
      title: "Defined Information Scope",
      text: "Identify the specific connected information required by the airline workflow."
    },
    {
      title: "Operational Integration",
      text: "Keep applicable connected information available within relevant Joya Fleet processes."
    },
    {
      title: "Configured Implementation",
      text: "Configure the connection around supported technical interfaces and approved operational requirements."
    }
  ];

  // Section 7: Channels
  const channelSMS: ChannelData = {
    title: "SMS Gateway",
    description: "Support selected crew, schedule and operational notification workflows through a configured SMS service.",
    labels: [
      "Selected notifications & alerts",
      "Configured recipients & crew lists",
      "Approved regional SMS providers",
      "Implementation-specific message templates"
    ],
    note: "Provider, delivery behavior and message scope depend on the configured service."
  };

  const channelEmail: ChannelData = {
    title: "Email Dispatch",
    description: "Support selected user, crew, operational and system-notification workflows through a configured email service.",
    labels: [
      "Selected briefing & schedule notifications",
      "Configured operational recipients",
      "Approved SMTP / API email service",
      "Standardized airline email templates"
    ],
    note: "Email configuration and delivery behavior depend on the approved implementation environment."
  };

  // Section 8: Weather Context Cards
  const weatherContextCards: WeatherContextCard[] = [
    {
      title: "Planning Requirement",
      text: "Identify the weather information required by the documented planning workflow."
    },
    {
      title: "Provider Assessment",
      text: "Review the selected provider, available interface and access requirements."
    },
    {
      title: "Information Scope",
      text: "Define the weather information and operational records involved in the connection."
    },
    {
      title: "Tailored Implementation",
      text: "Configure the approved integration within an agreed technical and operational scope."
    }
  ];

  // Section 9: Accounting Areas
  const accountingAreas: AccountingArea[] = [
    {
      title: "Defined Data Scope",
      text: "Confirm the relevant information required by the approved accounting workflow."
    },
    {
      title: "Data Direction",
      text: "Define applicable information movement between Joya Fleet and the connected accounting environment."
    },
    {
      title: "Operational Ownership",
      text: "Clarify system responsibilities, review points and accountable business processes."
    },
    {
      title: "Tailored Implementation",
      text: "Configure the approved connection around the accounting system and airline requirement."
    }
  ];

  // Section 10: Controls
  const controlCards: ControlCard[] = [
    {
      title: "Configuration Context",
      text: "Review relevant integration configuration information where provided by the implementation."
    },
    {
      title: "Activity Records",
      text: "Maintain applicable integration activity records where supported by the configured connection."
    },
    {
      title: "Authorized Review",
      text: "Make relevant implementation information available to authorized operational or technical users."
    },
    {
      title: "Implementation-Specific Handling",
      text: "Define status, error and handling behavior according to the connected service and agreed scope."
    }
  ];

  // Section 11: Access
  const accessCards: AccessCard[] = [
    {
      title: "Authorized Configuration",
      text: "Limit relevant integration settings and administrative responsibilities to authorized users."
    },
    {
      title: "Role-Based Access",
      text: "Organize access through configured user groups and operational permissions."
    },
    {
      title: "Operational Accountability",
      text: "Maintain relevant activity and configuration context for authorized review."
    }
  ];

  // Section 12: Custom Dev
  const customDevCards: CustomDevCard[] = [
    {
      title: "Operational Discovery",
      text: "Understand the workflow, connected teams and information requirements."
    },
    {
      title: "Technical Assessment",
      text: "Review available interfaces, documentation, responsibilities and implementation constraints."
    },
    {
      title: "Scoped Development",
      text: "Define and implement the approved integration requirement within an agreed scope."
    },
    {
      title: "Validation & Support",
      text: "Validate applicable workflows and support the integration after implementation."
    }
  ];

  // Section 13: Regional
  const regionalCards: RegionalCard[] = [
    {
      title: "Direct Support in Iran",
      text: "Work directly with a product and technical team familiar with the local operating environment."
    },
    {
      title: "CAO IRI Workflow Experience",
      text: "Evaluate and configure selected CAO IRI-related workflows within an agreed implementation scope."
    },
    {
      title: "International Extensibility",
      text: "Evaluate future integration requirements around supported technical interfaces and approved airline needs."
    }
  ];

  // Section 14: Connected modules
  const connectedModules: ConnectedModule[] = [
    {
      title: "Flight Scheduling",
      text: "Use relevant connected information within applicable planning workflows.",
      destination: "/platform/flight-scheduling"
    },
    {
      title: "Operations & Dispatch",
      text: "Support selected operational information exchange, communication and connected records.",
      destination: "/platform/operations-dispatch"
    },
    {
      title: "Crew Management & FTL",
      text: "Extend selected crew communication through configured SMS and Email channels.",
      destination: "/platform/crew-management-ftl"
    },
    {
      title: "Fleet & Maintenance Planning",
      text: "Keep applicable connected operational information available within fleet workflows.",
      destination: "/platform/fleet-maintenance"
    },
    {
      title: "Reporting & Analytics",
      text: "Use relevant connected platform information within configurable reporting workflows.",
      destination: "/platform/reporting-analytics"
    }
  ];

  // Hero system interactive categories
  const heroCategories = [
    { 
      name: "Aviation Systems", 
      desc: "Skyputer, CAO IRI Data Bridge", 
      protocol: "XML/JSON Sync", 
      latency: "Real-time / Batch",
      icon: <Database size={14} className="text-[#1267E5]" />
    },
    { 
      name: "Operational Weather", 
      desc: "METAR, TAF, SIGMET feeds", 
      protocol: "WMO Standard API", 
      latency: "15 min cycle",
      icon: <Cloud size={14} className="text-[#1267E5]" />
    },
    { 
      name: "Crew Communications", 
      desc: "SMS Gateways, Operational Email", 
      protocol: "SMPP / REST / SMTP", 
      latency: "< 3 sec delivery",
      icon: <Radio size={14} className="text-[#1267E5]" />
    },
    { 
      name: "Business & Finance", 
      desc: "ERP & Accounting Interfaces", 
      protocol: "Secure REST / Webhook", 
      latency: "Scheduled Sync",
      icon: <Layers size={14} className="text-[#1267E5]" />
    }
  ];

  return (
    <MotionConfig reducedMotion="user">
      <div className="w-full pointer-events-auto bg-transparent min-h-screen text-gray-900 font-sans">
        
        {/* SECTION 1 — HERO */}
        <section id="hero" className="w-full min-h-screen relative isolate pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden flex flex-col items-center justify-center bg-[#071E3D] bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] text-white m-0">
          <HeroBackground />

          {/* BREADCRUMB */}
          <div 
            data-aos="fade-down"
            data-aos-duration="600"
            className="mb-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full relative z-20"
          >
            <nav 
              aria-label="Breadcrumb" 
              className="inline-flex items-center gap-2 text-xs font-semibold text-blue-200 tracking-wider uppercase font-mono bg-[#1267E5]/20 backdrop-blur-md px-4 py-1.5 rounded-lg border border-[#38BDF8]/30 shadow-2xs"
            >
              <Link to="/platform" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:outline-none rounded">Platform</Link>
              <ChevronRight size={10} aria-hidden="true" className="text-blue-300" />
              <span className="text-[#38BDF8] font-bold" aria-current="page">Integrations</span>
            </nav>
          </div>

          <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full relative isolate z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Hero Text Card */}
              <div 
                data-aos="fade-right"
                data-aos-duration="800"
                className="lg:col-span-7 flex flex-col items-start text-left bg-white/95 backdrop-blur-2xl p-6 sm:p-10 lg:p-12 rounded-3xl border border-white/80 shadow-2xl shadow-[#071E3D]/40 text-gray-900"
              >
                <div>
                  <span 
                    className="inline-flex items-center gap-2 px-3 py-1 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-5 font-mono"
                  >
                    <Sparkles size={12} aria-hidden="true" className="text-[#1267E5]" /> INTEGRATIONS & SYSTEM CONNECTORS
                  </span>
                  
                  <h1 
                    className="text-4xl sm:text-6xl font-bold text-gray-950 tracking-tight leading-[1.1] mb-2"
                  >
                    Connect the systems.
                  </h1>
                  <h2 
                    className="text-3xl sm:text-5xl font-bold text-[#1267E5] tracking-tight leading-tight mb-6"
                  >
                    Keep the operation moving.
                  </h2>
                  
                  <p className="text-lg sm:text-xl text-gray-800 font-normal leading-relaxed mb-4 max-w-xl">
                    Connect Joya Fleet with configurable aviation add-ons, communication channels and separately assessed operational or business-system integrations.
                  </p>
                  
                  <p className="text-base text-gray-600 font-normal leading-relaxed mb-8 max-w-lg">
                    Our integration approach is configured around approved airline requirements, helping relevant information move between selected systems based on implementation scope.
                  </p>
                </div>
                
                <div className="w-full">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
                    <Link
                      to="/contact?intent=customization&module=integrations"
                      className="bg-[#1267E5] hover:bg-[#0E54BD] text-white text-center font-bold px-8 py-3.5 rounded-lg text-base transition-all shadow-lg shadow-[#1267E5]/25 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      Discuss Your Integration Requirements
                    </Link>
                    <Link
                      to="/platform"
                      className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 text-center font-semibold px-8 py-3.5 rounded-lg text-base transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 focus-visible:outline-none shadow-xs"
                    >
                      Explore the Platform
                    </Link>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-200/80 w-full">
                    {["Skyputer Add-on", "CAO IRI Add-on", "SMS Gateway", "Operational Email", "Weather Services", "Accounting Bridge"].map((tag) => (
                      <span key={tag} className="text-xs text-[#1267E5] font-semibold tracking-wide font-mono uppercase bg-[#1267E5]/5 px-2.5 py-0.5 rounded-md border border-[#1267E5]/15">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Premium Connected System Architecture Visual */}
              <div 
                data-aos="fade-left"
                data-aos-duration="850"
                data-aos-delay="150"
                className="lg:col-span-5 relative w-full h-[420px] sm:h-[460px] bg-white/80 backdrop-blur-md rounded-2xl border border-[#1267E5]/20 shadow-xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-radial-gradient from-[#1267E5]/5 to-transparent pointer-events-none" />
                
                <div className="flex justify-between items-start border-b border-[#1267E5]/15 pb-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#1267E5] block uppercase font-bold">SYSTEM ARCHITECTURE</span>
                    <span className="text-xs font-bold text-gray-950 font-mono tracking-tight uppercase">Joya Connected Workspace</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>BRIDGES READY</span>
                  </div>
                </div>

                {/* Architecture Visual Grid */}
                <div className="flex-1 relative flex items-center justify-center py-6">
                  {/* Central Node */}
                  <div className="absolute z-20 w-24 h-24 bg-[#071B33] rounded-2xl border-2 border-[#1267E5] shadow-2xl flex flex-col items-center justify-center text-white text-center">
                    <div className="w-2 h-2 rounded-full bg-[#39BFF8] animate-ping absolute -top-1 -right-1" />
                    <span className="text-[9px] uppercase font-mono tracking-wider text-[#39BFF8]">CORE</span>
                    <span className="text-xs font-black tracking-tight font-mono text-white">JOYA</span>
                    <span className="text-[8px] uppercase font-mono tracking-widest text-gray-400">FLEET</span>
                  </div>

                  {/* Radiating lines & Outer Nodes */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                    {/* Top Left: Aviation */}
                    <line x1="50%" y1="50%" x2="22%" y2="22%" stroke={activeHeroNode === 0 ? "#1267E5" : "#cbd5e1"} strokeWidth={activeHeroNode === 0 ? "3" : "1.5"} strokeDasharray={activeHeroNode === 0 ? "0" : "4"} />
                    {/* Top Right: Operational Data */}
                    <line x1="50%" y1="50%" x2="78%" y2="22%" stroke={activeHeroNode === 1 ? "#1267E5" : "#cbd5e1"} strokeWidth={activeHeroNode === 1 ? "3" : "1.5"} strokeDasharray={activeHeroNode === 1 ? "0" : "4"} />
                    {/* Bottom Left: Communications */}
                    <line x1="50%" y1="50%" x2="22%" y2="78%" stroke={activeHeroNode === 2 ? "#1267E5" : "#cbd5e1"} strokeWidth={activeHeroNode === 2 ? "3" : "1.5"} strokeDasharray={activeHeroNode === 2 ? "0" : "4"} />
                    {/* Bottom Right: Business Systems */}
                    <line x1="50%" y1="50%" x2="78%" y2="78%" stroke={activeHeroNode === 3 ? "#1267E5" : "#cbd5e1"} strokeWidth={activeHeroNode === 3 ? "3" : "1.5"} strokeDasharray={activeHeroNode === 3 ? "0" : "4"} />
                  </svg>

                  {/* Category Nodes */}
                  <div className="absolute top-2 left-2 z-10">
                    <button
                      type="button"
                      aria-pressed={activeHeroNode === 0}
                      onClick={() => setActiveHeroNode(0)}
                      className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:outline-none cursor-pointer ${activeHeroNode === 0 ? 'bg-white border-[#1267E5] shadow-lg shadow-[#1267E5]/15 scale-105 ring-1 ring-[#1267E5]' : 'bg-white/80 border-gray-200 hover:bg-white'} max-w-[130px]`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <Database size={12} className={activeHeroNode === 0 ? "text-[#1267E5]" : "text-gray-400"} />
                        <span className="text-[9px] font-mono tracking-widest uppercase text-gray-500 font-bold">AVIATION</span>
                      </div>
                      <span className="text-[10px] font-bold text-gray-950 block truncate">Skyputer & CAO</span>
                    </button>
                  </div>

                  <div className="absolute top-2 right-2 z-10">
                    <button
                      type="button"
                      aria-pressed={activeHeroNode === 1}
                      onClick={() => setActiveHeroNode(1)}
                      className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:outline-none cursor-pointer ${activeHeroNode === 1 ? 'bg-white border-[#1267E5] shadow-lg shadow-[#1267E5]/15 scale-105 ring-1 ring-[#1267E5]' : 'bg-white/80 border-gray-200 hover:bg-white'} max-w-[130px]`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <Cloud size={12} className={activeHeroNode === 1 ? "text-[#1267E5]" : "text-gray-400"} />
                        <span className="text-[9px] font-mono tracking-widest uppercase text-gray-500 font-bold">WEATHER</span>
                      </div>
                      <span className="text-[10px] font-bold text-gray-950 block truncate">Meteorology</span>
                    </button>
                  </div>

                  <div className="absolute bottom-2 left-2 z-10">
                    <button
                      type="button"
                      aria-pressed={activeHeroNode === 2}
                      onClick={() => setActiveHeroNode(2)}
                      className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:outline-none cursor-pointer ${activeHeroNode === 2 ? 'bg-white border-[#1267E5] shadow-lg shadow-[#1267E5]/15 scale-105 ring-1 ring-[#1267E5]' : 'bg-white/80 border-gray-200 hover:bg-white'} max-w-[130px]`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <Radio size={12} className={activeHeroNode === 2 ? "text-[#1267E5]" : "text-gray-400"} />
                        <span className="text-[9px] font-mono tracking-widest uppercase text-gray-500 font-bold">COMMS</span>
                      </div>
                      <span className="text-[10px] font-bold text-gray-950 block truncate">SMS & Email</span>
                    </button>
                  </div>

                  <div className="absolute bottom-2 right-2 z-10">
                    <button
                      type="button"
                      aria-pressed={activeHeroNode === 3}
                      onClick={() => setActiveHeroNode(3)}
                      className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:outline-none cursor-pointer ${activeHeroNode === 3 ? 'bg-white border-[#1267E5] shadow-lg shadow-[#1267E5]/15 scale-105 ring-1 ring-[#1267E5]' : 'bg-white/80 border-gray-200 hover:bg-white'} max-w-[130px]`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <Layers size={12} className={activeHeroNode === 3 ? "text-[#1267E5]" : "text-gray-400"} />
                        <span className="text-[9px] font-mono tracking-widest uppercase text-gray-500 font-bold">FINANCE</span>
                      </div>
                      <span className="text-[10px] font-bold text-gray-950 block truncate">Accounting</span>
                    </button>
                  </div>
                </div>

                {/* Info summary of the selected category */}
                <div className="border-t border-[#1267E5]/15 bg-[#1267E5]/5 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] text-[#1267E5] font-bold uppercase tracking-wider flex items-center gap-1">
                      {heroCategories[activeHeroNode].icon}
                      {heroCategories[activeHeroNode].name}
                    </span>
                    <span className="text-[9px] font-mono text-gray-600 bg-white/80 px-2 py-0.5 rounded border border-[#1267E5]/20">
                      {heroCategories[activeHeroNode].protocol}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-gray-600 font-medium">
                    <span>{heroCategories[activeHeroNode].desc}</span>
                    <span className="font-mono text-[#1267E5] text-[9px]">Cycle: {heroCategories[activeHeroNode].latency}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2 — THE INTEGRATION CHALLENGE */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div data-aos="fade-up" data-aos-duration="450" className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Workflow size={12} className="text-[#1267E5]" /> CONNECTED INFORMATION FLOW
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-6">
                Operational information should not require repeated manual transfer between disconnected systems.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Airline workflows may depend on aviation services, authority-related operational information, communication channels, weather information and business systems.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Joya Fleet supports selected connections so relevant information can remain closer to the operational workflows where it is used.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challengeCards.map((card, idx) => (
                <div 
                  key={idx}
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay={idx * 50}
                  className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 bg-[#1267E5]/10 border border-[#1267E5]/20 rounded-xl w-fit mb-6 text-[#1267E5]">
                      {card.icon}
                    </div>
                    <h3 className="font-bold text-gray-950 text-lg sm:text-xl mb-3">
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

        {/* SECTION 3 — INTEGRATION APPROACH */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div data-aos="fade-up" data-aos-duration="450" className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Cpu size={12} className="text-[#1267E5]" /> STRUCTURED METHODOLOGY
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-6">
                Every integration starts with the operational workflow it needs to support.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Integration scope depends on the connected system, available technical interface, airline requirements, data responsibilities and implementation environment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {approachStages.map((stage, idx) => (
                <div 
                  key={idx}
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay={idx * 40}
                  className="relative flex flex-col justify-between bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#1267E5] uppercase tracking-wider block mb-6">
                      PHASE {stage.step}
                    </span>
                    <h3 className="font-bold text-gray-950 text-lg mb-3">{stage.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{stage.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div 
              data-aos="fade-up"
              data-aos-duration="400"
              className="mt-12 p-6 bg-white/80 backdrop-blur-md rounded-2xl border-l-4 border-[#1267E5] border border-[#1267E5]/20 shadow-xs max-w-4xl mx-auto"
            >
              <p className="text-sm font-semibold text-gray-800">
                {approachStages[3].text} — <span className="text-gray-600 font-normal">Integration timelines are tailored to technical scope, connected-system requirements and operational validation needs.</span>
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — CONFIGURABLE INTEGRATION OPTIONS */}
        <section id="supported-integrations" className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div data-aos="fade-up" data-aos-duration="450" className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Layers size={12} className="text-[#1267E5]" /> CONFIGURABLE INTEGRATION OPTIONS
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-6">
                Configured add-ons, channels and custom integration options.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Joya Fleet supports configurable integration work based on the connected system, available interface, documented airline requirement and agreed implementation scope.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ecosystemCards.map((card, idx) => (
                <div 
                  key={idx}
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay={idx * 40}
                  className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-[#1267E5] uppercase bg-[#1267E5]/10 border border-[#1267E5]/20 px-2.5 py-1 rounded">
                        {card.category}
                      </span>
                      <div className="p-2.5 bg-[#1267E5]/10 border border-[#1267E5]/20 rounded-xl text-[#1267E5]">
                        {card.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-950 mb-3">{card.title}</h3>
                    <p className="text-sm text-gray-800 mb-4 font-medium leading-relaxed">{card.description}</p>
                    <p className="text-xs text-gray-500 leading-relaxed mb-6">{card.supportingText}</p>
                  </div>
                  
                  <div className="border-t border-[#1267E5]/15 pt-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1267E5]" />
                    <span className="text-[10px] font-mono font-bold text-[#1267E5] tracking-wider uppercase">
                      {card.statusLabel}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — CAO IRI OPERATIONAL INTEGRATION */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <span 
                  data-aos="fade-up"
                  data-aos-duration="400"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-6 font-mono"
                >
                  <Database size={12} aria-hidden="true" className="text-[#1267E5]" /> REGIONAL AVIATION CONNECTIVITY
                </span>
                
                <h2 
                  data-aos="fade-up"
                  data-aos-duration="450"
                  className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight leading-tight mb-6"
                >
                  Configure selected CAO IRI-related workflows around approved requirements.
                </h2>
                
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                  Joya Fleet can support selected authority-related information exchange through a separately configured add-on, subject to technical assessment and approved operational scope.
                </p>

                {/* Capabilities grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
                  {caoCapabilities.map((cap, idx) => (
                    <div 
                      key={idx}
                      data-aos="fade-up"
                      data-aos-duration="400"
                      data-aos-delay={idx * 40}
                      className="border-l-4 border-[#1267E5] bg-white/80 backdrop-blur-md p-4 rounded-r-xl border-y border-r border-[#1267E5]/15 shadow-xs"
                    >
                      <h4 className="font-bold text-gray-950 text-sm mb-1">{cap.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{cap.text}</p>
                    </div>
                  ))}
                </div>

                {/* Notice Box */}
                <div 
                  data-aos="fade-up"
                  data-aos-duration="400"
                  className="p-6 bg-white/80 backdrop-blur-md rounded-2xl border-l-4 border-[#1267E5] border border-[#1267E5]/20 shadow-xs w-full"
                >
                  <h4 className="font-bold text-sm text-gray-950 mb-1 flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[#1267E5]" />
                    Implementation Scope & Compliance
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Available CAO IRI workflows, message types and records must be confirmed during technical and operational assessment.
                  </p>
                </div>
              </div>

              {/* Product Visual */}
              <div className="lg:col-span-6">
                <ProductVisualFrame
                  id="cao-iri-workspace"
                  title="CAO IRI Civil Aviation Authority Bridge"
                  description="Configurable workspace for selected civil aviation authority reporting, flight plan submissions and audit logs."
                  aspectRatio="16:9"
                  alt="Product visual reserved for the Joya Fleet CAO IRI integration interface"
                >
                  <div className="space-y-2.5 pt-2 font-mono text-[10px]">
                    <div className="bg-white/5 p-3 rounded-lg border border-white/10 flex justify-between items-center">
                      <span className="font-bold tracking-wide text-gray-200">AUTHORITY DISPATCH STATUS</span>
                      <span className="text-[#39BFF8] font-bold">SYNCHRONIZED (ACK-200)</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg border border-white/10 flex justify-between items-center">
                      <span className="font-bold tracking-wide text-gray-200">OPERATIONAL AUDIT TRAIL</span>
                      <span className="text-emerald-400 font-bold">VERIFIED HASH</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg border border-white/10 flex justify-between items-center">
                      <span className="font-bold tracking-wide text-gray-200">AUTHORIZED ACCESS PROFILE</span>
                      <span className="text-gray-400">DISPATCH_CHIEF_01</span>
                    </div>
                  </div>
                </ProductVisualFrame>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 6 — SKYPUTER CONNECTION */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 lg:order-2 flex flex-col items-start text-left">
                <span 
                  data-aos="fade-up"
                  data-aos-duration="400"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-6 font-mono"
                >
                  <Settings size={12} aria-hidden="true" className="text-[#1267E5]" /> CONFIGURABLE AVIATION ADD-ON
                </span>
                
                <h2 
                  data-aos="fade-up"
                  data-aos-duration="450"
                  className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight leading-tight mb-6"
                >
                  Configure selected Skyputer-supported workflows with Joya Fleet.
                </h2>
                
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                  A Skyputer connection can be configured around selected information, available interfaces and an approved operational requirement.
                </p>

                <div className="space-y-6 w-full mb-8">
                  {skyputerItems.map((item, idx) => (
                    <div 
                      key={idx}
                      data-aos="fade-up"
                      data-aos-duration="400"
                      data-aos-delay={idx * 50}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg bg-[#1267E5] text-white font-mono text-xs font-bold shadow-md shadow-[#1267E5]/30">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-950 text-base mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p 
                  data-aos="fade-up"
                  data-aos-duration="400"
                  className="text-xs text-[#1267E5] font-mono font-bold tracking-wide uppercase bg-[#1267E5]/10 px-3 py-1.5 rounded-md border border-[#1267E5]/20"
                >
                  Exact Skyputer integration scope is confirmed during technical and operational discovery.
                </p>
              </div>

              {/* Product Visual */}
              <div className="lg:col-span-6 lg:order-1">
                <ProductVisualFrame
                  id="skyputer-view"
                  title="Skyputer Aviation Sync Engine"
                  description="Bi-directional data exchange for flight movement messages, scheduled legs, aircraft rotations, and passenger loads."
                  aspectRatio="16:10"
                  alt="Product visual reserved for the Joya Fleet Skyputer integration interface"
                >
                  <div className="space-y-2 pt-2 font-mono text-[9px] text-gray-300">
                    <div className="flex justify-between border-b border-white/10 pb-1.5 font-bold text-white">
                      <span>INTEGRATED COMPONENT</span>
                      <span>SYNC STATUS</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span>MVT / LDM MESSAGES</span>
                      <span className="text-[#39BFF8]">AUTO-PARSED</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span>SCHEDULE SYNC BRIDGE</span>
                      <span className="text-emerald-400">ACTIVE (15s)</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>AIRCRAFT ROTATION MAPPING</span>
                      <span className="text-gray-300">MATCHED</span>
                    </div>
                  </div>
                </ProductVisualFrame>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 7 — COMMUNICATIONS */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div data-aos="fade-up" data-aos-duration="450" className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Radio size={12} className="text-[#1267E5]" /> CONNECTED COMMUNICATION WORKFLOWS
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-6">
                Support selected operational and crew communication through configured channels.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Configure SMS or Email channels for selected notifications where an approved provider and implementation are available.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* SMS Channel */}
              <div 
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="40"
                className="bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#1267E5]/20 flex flex-col justify-between shadow-xl hover:border-[#1267E5]/50 transition-all"
              >
                <div>
                  <div className="p-3.5 bg-[#1267E5]/10 border border-[#1267E5]/20 rounded-2xl w-fit mb-6 text-[#1267E5]">
                    <Radio size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-950 mb-4">{channelSMS.title}</h3>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">{channelSMS.description}</p>
                  
                  <div className="space-y-2.5 mb-8">
                    {channelSMS.labels.map((lbl) => (
                      <div key={lbl} className="flex items-center gap-2.5 text-sm font-semibold text-gray-800">
                        <Check size={14} aria-hidden="true" className="text-[#1267E5]" />
                        <span>{lbl}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-[#1267E5]/15 pt-4 text-xs text-gray-500 italic font-medium">
                  {channelSMS.note}
                </div>
              </div>

              {/* Email Channel */}
              <div 
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="80"
                className="bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#1267E5]/20 flex flex-col justify-between shadow-xl hover:border-[#1267E5]/50 transition-all"
              >
                <div>
                  <div className="p-3.5 bg-[#1267E5]/10 border border-[#1267E5]/20 rounded-2xl w-fit mb-6 text-[#1267E5]">
                    <Users size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-950 mb-4">{channelEmail.title}</h3>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">{channelEmail.description}</p>
                  
                  <div className="space-y-2.5 mb-8">
                    {channelEmail.labels.map((lbl) => (
                      <div key={lbl} className="flex items-center gap-2.5 text-sm font-semibold text-gray-800">
                        <Check size={14} aria-hidden="true" className="text-[#1267E5]" />
                        <span>{lbl}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-[#1267E5]/15 pt-4 text-xs text-gray-500 italic font-medium">
                  {channelEmail.note}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 — WEATHER SERVICES */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div data-aos="fade-up" data-aos-duration="450" className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Cloud size={12} className="text-[#1267E5]" /> CUSTOM WEATHER INTEGRATION
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-6">
                Assess selected weather-system connections around operational requirements.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Weather-system integration is evaluated separately based on the selected provider, interface access, required information and agreed implementation scope.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {weatherContextCards.map((card, idx) => (
                <div 
                  key={card.title}
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay={idx * 40}
                  className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="p-2.5 bg-[#1267E5]/10 border border-[#1267E5]/20 rounded-xl w-fit mb-4 text-[#1267E5]">
                      <Cloud size={18} aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-gray-950 text-base mb-2">{card.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9 — ACCOUNTING INTEGRATION */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div data-aos="fade-up" data-aos-duration="450" className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Layers size={12} className="text-[#1267E5]" /> CUSTOM BUSINESS INTEGRATION
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-6">
                Support selected information exchange with approved accounting workflows.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Joya Fleet can assess tailored accounting integration requirements based on the selected system, available interface, approved data scope and airline process.
              </p>
              <p className="text-xs font-mono font-semibold text-[#1267E5] bg-[#1267E5]/10 p-3 rounded-lg border border-[#1267E5]/20 inline-block">
                Note: Accounting integration does not imply complete ERP replacement or automatic financial reconciliation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {accountingAreas.map((area, idx) => (
                <div 
                  key={idx}
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay={idx * 40}
                  className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs"
                >
                  <div className="p-2.5 bg-[#1267E5]/10 border border-[#1267E5]/20 rounded-xl w-fit mb-4 text-[#1267E5]">
                    <Layers size={18} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-gray-950 text-base mb-2">{area.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{area.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10 — INTEGRATION VISIBILITY AND OPERATIONAL CONTROL */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div data-aos="fade-up" data-aos-duration="450" className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Activity size={12} className="text-[#1267E5]" /> CONNECTED WITH OPERATIONAL CONTROL
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-6">
                Keep relevant integration activity visible to authorized teams.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Configured integrations may expose relevant activity and implementation records depending on the connected service and agreed technical scope.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {controlCards.map((card, idx) => (
                <div 
                  key={idx}
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay={idx * 40}
                  className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="p-2.5 bg-[#1267E5]/10 border border-[#1267E5]/20 rounded-xl w-fit mb-4 text-[#1267E5]">
                      <Activity size={18} aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-gray-950 text-base mb-2">{card.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center text-xs text-gray-500 italic max-w-2xl mx-auto font-mono">
              Available visibility and handling behavior depend on the individual connector and approved implementation scope.
            </div>
          </div>
        </section>

        {/* SECTION 11 — CONTROLLED ACCESS AND CONFIGURATION */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div data-aos="fade-up" data-aos-duration="450" className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Lock size={12} className="text-[#1267E5]" /> SECURITY & ACCESS GOVERNANCE
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-6">
                Keep integration access aligned with operational and administrative roles.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Joya Fleet supports configurable users, groups and permissions for relevant platform and integration responsibilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {accessCards.map((card, idx) => (
                <div 
                  key={idx}
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay={idx * 50}
                  className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 bg-[#1267E5]/10 border border-[#1267E5]/20 rounded-xl w-fit mb-4 text-[#1267E5]">
                      <Lock size={18} aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-gray-950 text-lg mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 12 — TAILORED INTEGRATION DEVELOPMENT */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div data-aos="fade-up" data-aos-duration="450" className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Settings size={12} className="text-[#1267E5]" /> TAILORED SYSTEM ENGINEERING
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-6">
                Evaluate additional connections around specific airline requirements.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                When an airline requires a connection beyond the currently defined integration options, the Joya Fleet team can evaluate the operational need, technical interface and implementation scope.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {customDevCards.map((card, idx) => (
                <div 
                  key={idx}
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay={idx * 40}
                  className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#1267E5] uppercase tracking-wider block mb-4">
                      STAGE {idx + 1}
                    </span>
                    <h3 className="font-bold text-gray-950 text-base mb-2">{card.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div 
              data-aos="zoom-in"
              data-aos-duration="400"
              className="flex flex-col items-center justify-center gap-4 text-center"
            >
              <Link
                to="/contact?intent=customization&module=integrations"
                className="inline-flex items-center gap-2 bg-[#1267E5] hover:bg-[#0E54BD] text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-all shadow-lg shadow-[#1267E5]/25 focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Discuss a Custom Integration
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <p className="text-xs text-gray-500 font-mono">
                Additional integration availability depends on technical feasibility, third-party access and approved project scope.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 13 — REGIONAL EXPERTISE, INTERNATIONAL DIRECTION */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div data-aos="fade-up" data-aos-duration="450" className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Globe size={12} className="text-[#1267E5]" /> DIRECT REGIONAL EXPERTISE
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-6">
                Developed with direct experience in the Iranian aviation environment.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Joya Fleet is developed in Shiraz, Iran, with direct regional support and experience evaluating and configuring selected Iranian aviation workflows.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Additional regional and international integration requirements can be evaluated against available interfaces and documented airline needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {regionalCards.map((card, idx) => (
                <div 
                  key={idx}
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay={idx * 50}
                  className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#1267E5]/15 hover:border-[#1267E5]/40 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-gray-950 text-lg mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 14 — CONNECTED ACROSS THE PLATFORM */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
            
            <div data-aos="fade-up" data-aos-duration="450" className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Workflow size={12} className="text-[#1267E5]" /> INTEGRATIONS ACROSS OPERATIONS
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-6">
                Connect selected external workflows with the platform modules that use the information.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Relevant connected information can support applicable platform workflows. Configured integration options can contribute relevant information to planning, operations, crew communication, fleet workflows and reporting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {connectedModules.map((mod, idx) => (
                <Link
                  to={mod.destination}
                  key={idx}
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay={idx * 40}
                  className="group bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-[#1267E5]/15 hover:border-[#1267E5]/50 transition-all shadow-xs flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#1267E5] uppercase tracking-wider block mb-4">
                      MODULE 0{idx + 1}
                    </span>
                    <h3 className="font-bold text-gray-950 text-lg group-hover:text-[#1267E5] transition-colors mb-2">{mod.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">{mod.text}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1267E5] mt-4 font-mono">
                    <span>EXPLORE MODULE</span>
                    <ArrowRight size={14} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 15 — PRODUCT VISUAL */}
        <section className="py-20 sm:py-28 relative isolate">
          <div className="px-5 sm:px-8 max-w-5xl mx-auto w-full text-center">
            
            <div data-aos="fade-up" data-aos-duration="450">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                <Server size={12} className="text-[#1267E5]" /> SEE CONNECTED WORKFLOWS IN CONTEXT
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-6">
                One integration workspace configured around documented airline requirements.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
                Review configured add-ons, communication channels and custom integration context within a controlled workspace.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-6 rounded-[32px] border border-[#1267E5]/20 shadow-xl overflow-hidden max-w-5xl mx-auto">
              <div className="flex justify-between items-center border-b border-gray-200/80 pb-3.5 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-gray-900 uppercase font-bold">
                  Joya Fleet Operational Connector Engine
                </span>
                <span className="text-[10px] font-mono text-[#1267E5] bg-[#1267E5]/10 px-2 py-0.5 rounded border border-[#1267E5]/20">
                  SECURE HTTPS / TLS 1.3
                </span>
              </div>

              <ProductVisualFrame
                id="integrations-workspace"
                title="Joya Fleet Integrations Workspace"
                description="A configurable workspace concept for approved add-ons, communication channels and separately assessed integrations."
                aspectRatio="16:9"
                alt="Product visual reserved for the Joya Fleet integrations workspace interface"
                imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
              />
            </div>
          </div>
        </section>

        {/* SECTION 16 — FINAL CTA */}
        <section id="integrations-cta-section" className="py-20 sm:py-28 px-5 sm:px-8 max-w-7xl mx-auto w-full relative isolate overflow-hidden">
          <div className="aviation-cta-bg rounded-3xl p-8 sm:p-16 text-white text-center relative overflow-hidden flex flex-col items-center shadow-2xl border border-[#1267E5]/30">
            <div className="relative z-10 max-w-3xl flex flex-col items-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/20 text-[#39BFF8] border border-[#1267E5]/40 rounded-lg text-xs font-bold uppercase tracking-widest mb-6 font-mono">
                <Sparkles size={12} /> ENTERPRISE INTEGRATION ARCHITECTURE
              </span>

              <h2 
                className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight mb-6 max-w-4xl text-white"
              >
                Connect Joya Fleet with the workflows your airline depends on.
              </h2>
              
              <p className="text-base sm:text-lg text-[#D7E5F3] leading-relaxed mb-10 max-w-2xl">
                Discuss configurable integrations, regional aviation requirements and tailored connections around your operational environment.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto mb-10">
                <Link
                  to="/contact?intent=demo&module=integrations"
                  className="bg-[#EE1C25] hover:bg-[#D4151D] border border-[#EE1C25] text-white font-bold px-8 py-3.5 rounded-lg text-sm shadow-xl shadow-[#EE1C25]/25 text-center focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071B33] focus-visible:outline-none"
                >
                  Request a Demo
                </Link>
              </div>
              
              <p className="text-xs text-blue-200/80 font-medium tracking-wide">
                Configurable add-ons • Tailored implementation • Technical support under an agreed plan
              </p>
            </div>
          </div>
        </section>

      </div>
    </MotionConfig>
  );
}
