/*
 * Copyright 2026 Joya Fleet
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HeroBackground } from '../components/HeroBackground';
import { 
  Sparkles, 
  Calendar, 
  Search, 
  ExternalLink, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Settings as SettingsIcon, 
  UserCheck, 
  CalendarRange, 
  Layers, 
  Terminal, 
  ChevronRight,
  Share2,
  Check
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export interface UpdateRelease {
  id: string;
  slug: string;
  version: string;
  title: string;
  summary: string;
  date: string;
  wikiUrl: string;
  badge?: string;
  sections: {
    title: string;
    key: 'SETTINGS' | 'ADMIN' | 'SCHEDULE' | string;
    iconName: string;
    explanation: string;
    bulletPoints: string[];
  }[];
}

const RELEASE_UPDATES: UpdateRelease[] = [
  {
    id: "JOYA-222-released",
    slug: "JOYA-222-released",
    version: "JOYA-222",
    title: "JOYA-222 Major Release: Advanced Gantt Timeline Auto-Resolve & Enhanced FTL Compliance",
    summary: "Introducing interactive drag-and-drop timeline schedule drafting, instant airport slot collision alerts, automated CAO/EASA FTL compliance engines, and upgraded admin role permissions.",
    date: "August 04, 2026",
    badge: "Latest Release",
    wikiUrl: "https://joyawiki.com/release/JOYA-222",
    sections: [
      {
        title: "SETTINGS",
        key: "SETTINGS",
        iconName: "Settings",
        explanation: "Comprehensive system setting enhancements allowing custom operational thresholds, station time zone overrides, and multi-currency fuel expense tracking.",
        bulletPoints: [
          "Configurable multi-currency fuel expense conversion tables for international sector dispatch.",
          "Custom station time zone overrides for localized OCC control dashboards.",
          "Automated cloud backup and 10-year encrypted audit log retention configuration.",
          "Customizable flight status threshold alerts for ground turnaround countdowns."
        ]
      },
      {
        title: "ADMIN",
        key: "ADMIN",
        iconName: "Admin",
        explanation: "Upgraded user administration, role-based access control (RBAC), security policy management, and compliance auditing tools.",
        bulletPoints: [
          "Fine-grained RBAC permissions for Flight Dispatchers, Ground Handling Agents, and CAMO Inspectors.",
          "SSO SAML 2.0 and Azure AD multi-factor authentication enforcement for pilot mobile EFBs.",
          "Tamper-proof system audit log tracking every timetable edit and manual FTL restriction override.",
          "Automated license and endorsement expiration warning notifications for crew supervisors."
        ]
      },
      {
        title: "SCHEDULE",
        key: "SCHEDULE",
        iconName: "Schedule",
        explanation: "New interactive Gantt timeline schedule builder with real-time airport slot constraint validation and rotation conflict detection.",
        bulletPoints: [
          "Real-time drag-and-drop Gantt timeline with instant aircraft tail conflict detection.",
          "Automated SSIM (Standard Schedules Information Manual) flight schedule file generator.",
          "Airport slot coordination status indicator badges with automated IATA delay code tracking.",
          "Integrated CAMO maintenance window warning flags preventing commercial slot overlaps."
        ]
      }
    ]
  },
  {
    id: "leon-221-released",
    slug: "leon-221-released",
    version: "leon-221",
    title: "leon-221 Release: Interoperability Bridge, MEL Expiry Timers & Automated Dispatch Sync",
    summary: "Seamless data exchange with legacy Leon software databases, real-time Minimum Equipment List (MEL) expiration timers inside OCC dispatch, and automated email/telegram ops alerts.",
    date: "July 18, 2026",
    badge: "Stable Release",
    wikiUrl: "https://joyawiki.com/release/leon-221",
    sections: [
      {
        title: "SETTINGS",
        key: "SETTINGS",
        iconName: "Settings",
        explanation: "Enhanced API key management and two-way synchronization preferences between Joya Fleet and external aviation software systems.",
        bulletPoints: [
          "Two-way REST/GraphQL API synchronization toggle for legacy Leon database structures.",
          "Customizable webhook notification channels for Slack, Telegram, and Ops email groups.",
          "Global station weather radar layer overlay customization settings."
        ]
      },
      {
        title: "ADMIN",
        key: "ADMIN",
        iconName: "Admin",
        explanation: "Centralized user seat licensing dashboard and audit compliance reporting for civil aviation authorities.",
        bulletPoints: [
          "Centralized user seat allocation management with automated inactivity lockouts.",
          "One-click audit trail report generator for CAO IRI and EASA safety inspections.",
          "Departmental access group delegation for multi-base charter carriers."
        ]
      },
      {
        title: "SCHEDULE",
        key: "SCHEDULE",
        iconName: "Schedule",
        explanation: "Smart turnaround time estimation algorithms and multi-fleet rotational swap recommendations.",
        bulletPoints: [
          "Dynamic turnaround time calculation based on historical airport congestion data.",
          "Multi-fleet rotational swap suggestions during severe weather disruptions.",
          "Commercial charter quote generation directly integrated with live aircraft availability."
        ]
      }
    ]
  },
  {
    id: "leon-220-released",
    slug: "leon-220-released",
    version: "leon-220",
    title: "leon-220 Release: Crew Fatigue Risk Analytics & VIP Passenger Manifest Masking",
    summary: "Introduces advanced crew fatigue risk score analytics, confidential VIP passenger manifest data masking for charter operations, and visual ground turnaround timers.",
    date: "June 22, 2026",
    badge: "Maintenance Release",
    wikiUrl: "https://joyawiki.com/release/leon-220",
    sections: [
      {
        title: "SETTINGS",
        key: "SETTINGS",
        iconName: "Settings",
        explanation: "Expanded aircraft registration parameters and customizable fuel unit measurements.",
        bulletPoints: [
          "Support for all international ICAO airframe registration formats and custom tail aliases.",
          "Configurable fuel volume and weight unit preferences (KG / LBS / Liters / US Gallons).",
          "Automated crew duty rest time zone acclimatization state presets."
        ]
      },
      {
        title: "ADMIN",
        key: "ADMIN",
        iconName: "Admin",
        explanation: "Privacy protection controls and operational emergency system broadcast tools.",
        bulletPoints: [
          "Role-based data masking for sensitive VIP passenger manifests and charter client records.",
          "System-wide broadcast pop-up notifications for dispatch operational emergencies.",
          "Encrypted cloud backup storage management with automated failover regions."
        ]
      },
      {
        title: "SCHEDULE",
        key: "SCHEDULE",
        iconName: "Schedule",
        explanation: "Visual ground turnaround countdowns and airport curfew constraint management.",
        bulletPoints: [
          "Visual turnaround timers displaying real-time refueling, catering, and de-icing countdowns.",
          "Airport night-flight curfew detection engine warning planners of potential fine risks.",
          "Sector profitability matrix estimation integrated directly into timetable views."
        ]
      }
    ]
  },
  {
    id: "leon-219-released",
    slug: "leon-219-released",
    version: "leon-219",
    title: "leon-219 Release: EFB Sync Improvements & Digital Aircraft Tech Log Integration",
    summary: "Direct pilot Electronic Flight Bag (EFB) synchronization, live aircraft technical log deficit tracking, and enhanced schedule scenario forecasting.",
    date: "May 12, 2026",
    badge: "Feature Update",
    wikiUrl: "https://joyawiki.com/release/leon-219",
    sections: [
      {
        title: "SETTINGS",
        key: "SETTINGS",
        iconName: "Settings",
        explanation: "Live weather radar settings and customizable endorsement alert thresholds.",
        bulletPoints: [
          "High-resolution satellite weather radar layer controls for OCC dispatch maps.",
          "Customizable threshold days for pilot license and medical certificate expiry notifications."
        ]
      },
      {
        title: "ADMIN",
        key: "ADMIN",
        iconName: "Admin",
        explanation: "Organizational hierarchy setup and historical operational archive tools.",
        bulletPoints: [
          "Multi-level departmental user group hierarchy configuration.",
          "Long-term flight movement archive search and retrieval indexing."
        ]
      },
      {
        title: "SCHEDULE",
        key: "SCHEDULE",
        iconName: "Schedule",
        explanation: "Multi-station slot coordination indicators and commercial revenue forecasting.",
        bulletPoints: [
          "Multi-station slot coordination status indicators in timetable views.",
          "Flight leg duration estimation powered by seasonal wind average datasets."
        ]
      }
    ]
  },
  {
    id: "leon-218-released",
    slug: "leon-218-released",
    version: "leon-218",
    title: "leon-218 Release: CAMO Work Order Sync & Crew Duty Trade Portal",
    summary: "Initial roll-out of Continuing Airworthiness Management (CAMO) work order synchronization, pilot standby roster substitution portal, and global callsign rules.",
    date: "April 02, 2026",
    badge: "Core Update",
    wikiUrl: "https://joyawiki.com/release/leon-218",
    sections: [
      {
        title: "SETTINGS",
        key: "SETTINGS",
        iconName: "Settings",
        explanation: "Global airline callsign standards and automated flight leg numbering generator.",
        bulletPoints: [
          "Global airline ICAO/IATA callsign configuration and flight number sequence generator.",
          "Default fuel density calculation formulas for A320, B737, and regional jet types."
        ]
      },
      {
        title: "ADMIN",
        key: "ADMIN",
        iconName: "Admin",
        explanation: "Security audit trails and remote session security controls.",
        bulletPoints: [
          "Initial implementation of tamper-resistant audit trails for civil aviation authority inspections.",
          "Remote session kill switches for mobile devices lost in outstations."
        ]
      },
      {
        title: "SCHEDULE",
        key: "SCHEDULE",
        iconName: "Schedule",
        explanation: "Baseline timetable creation and template duplication engine.",
        bulletPoints: [
          "Baseline schedule creation tool with rapid seasonal timetable duplication.",
          "Quick fleet availability inspector for charter sales quote requests."
        ]
      }
    ]
  }
];

export default function Updates() {
  const { slug } = useParams<{ slug?: string }>();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Locate specific release if slug is provided
  const updateDetail = slug ? RELEASE_UPDATES.find(u => u.slug === slug || u.id === slug) : null;

  useSEO({
    title: updateDetail 
      ? `${updateDetail.title} | Joya Fleet System Updates` 
      : "System Release Updates & Patch Notes | Joya Fleet",
    description: updateDetail 
      ? updateDetail.summary 
      : "Explore the latest Joya Fleet software release updates, version patch notes (JOYA-222-released, leon-221-released, leon-220-released), system settings, admin permissions, and schedule features.",
    canonicalPath: updateDetail ? `/updates/${updateDetail.slug}` : "/updates",
    ogTitle: updateDetail ? updateDetail.title : "Joya Fleet Software Release Updates & Version History",
    ogDescription: updateDetail ? updateDetail.summary : "Official release notes for Joya Fleet commercial aviation operations software."
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const filteredUpdates = RELEASE_UPDATES.filter(item => {
    const query = searchQuery.toLowerCase();
    return searchQuery === '' ||
      item.title.toLowerCase().includes(query) ||
      item.version.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.sections.some(s => 
        s.title.toLowerCase().includes(query) || 
        s.explanation.toLowerCase().includes(query) ||
        s.bulletPoints.some(bp => bp.toLowerCase().includes(query))
      );
  });

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Render Section Icon
  const getSectionIcon = (key: string) => {
    switch (key.toUpperCase()) {
      case 'SETTINGS':
        return <SettingsIcon className="text-blue-500" size={20} />;
      case 'ADMIN':
        return <UserCheck className="text-amber-500" size={20} />;
      case 'SCHEDULE':
        return <CalendarRange className="text-emerald-500" size={20} />;
      default:
        return <Layers className="text-purple-500" size={20} />;
    }
  };

  // --------------------------------------------------------------------------
  // SPECIFIC UPDATE DETAIL VIEW
  // --------------------------------------------------------------------------
  if (slug) {
    if (!updateDetail) {
      return (
        <div className="w-full min-h-[70vh] flex flex-col items-center justify-center px-5 pt-32 pb-24 text-center pointer-events-auto">
          <div className="p-4 rounded-full bg-amber-500/10 text-amber-600 mb-4">
            <Terminal size={32} />
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-950 mb-3">
            Release Update Not Found
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-md">
            The requested version release notes could not be found.
          </p>
          <Link
            to="/updates"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-950 text-white font-bold text-sm hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Return to All System Updates</span>
          </Link>
        </div>
      );
    }

    const otherReleases = RELEASE_UPDATES.filter(u => u.id !== updateDetail.id);

    return (
      <div className="w-full pointer-events-auto bg-transparent min-h-screen pt-28 sm:pt-36 pb-24 relative isolate">
        <HeroBackground />
        <div className="px-5 sm:px-8 max-w-5xl mx-auto w-full">
          
          {/* BACK BUTTON NAVIGATION */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/updates"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 text-gray-800 hover:text-gray-950 hover:bg-white text-xs sm:text-sm font-bold transition-all shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
            >
              <ArrowLeft size={16} />
              <span>Back to All System Updates</span>
            </Link>

            {/* EXTERNAL LINK TO JOYA WIKI */}
            <a
              href={updateDetail.wikiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/90 text-gray-950 font-extrabold text-xs sm:text-sm hover:bg-amber-300 transition-all shadow-xs"
            >
              <span>View on JoyaWiki</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* MAIN UPDATE CARD */}
          <article className="bg-white/90 backdrop-blur-2xl rounded-[32px] border border-gray-200/90 shadow-xl overflow-hidden mb-16">
            
            {/* HERO BANNER */}
            <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-850 text-white p-6 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-20 -top-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-300 mb-6">
                  <span className="bg-amber-400 text-gray-950 font-mono font-extrabold px-3 py-1 rounded-full text-xs">
                    {updateDetail.id}
                  </span>
                  {updateDetail.badge && (
                    <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full uppercase tracking-wider text-[10px] font-bold">
                      {updateDetail.badge}
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-gray-300 font-mono">
                    <Calendar size={14} />
                    {updateDetail.date}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                  {updateDetail.title}
                </h1>

                <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-8">
                  {updateDetail.summary}
                </p>

                {/* ACTION BAR & EXTERNAL LINK */}
                <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                    <span>Official Release Documentation</span>
                    <span>•</span>
                    <a 
                      href="https://joyawiki.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-amber-300 underline underline-offset-4 hover:text-white flex items-center gap-1"
                    >
                      joyawiki.com <ExternalLink size={12} />
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleShare}
                      className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition-colors flex items-center gap-1.5"
                    >
                      {copied ? (
                        <>
                          <Check size={14} className="text-emerald-400" />
                          <span>Link Copied!</span>
                        </>
                      ) : (
                        <>
                          <Share2 size={14} />
                          <span>Share Release Notes</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* MAIN SECTIONS BREAKDOWN (SETTINGS, ADMIN, SCHEDULE, ETC.) */}
            <div className="p-6 sm:p-12 lg:p-16 space-y-12">
              <div className="border-b border-gray-200 pb-4 mb-8">
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight flex items-center gap-2">
                  <Terminal className="text-amber-500" size={24} />
                  <span>Module Functional Release Notes</span>
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Comprehensive technical overview of changes introduced in version {updateDetail.version}.
                </p>
              </div>

              {updateDetail.sections.map((section, idx) => (
                <div key={idx} className="bg-gray-50/90 rounded-3xl p-6 sm:p-10 border border-gray-200/90 shadow-2xs">
                  
                  {/* HEADER (SETTINGS / ADMIN / SCHEDULE) */}
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                    <div className="p-2.5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                      {getSectionIcon(section.key)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-extrabold tracking-widest text-amber-600 uppercase block">
                        Module Release Section
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight">
                        {section.title}
                      </h3>
                    </div>
                  </div>

                  {/* EXPLANATION PARAGRAPH */}
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-sans font-medium mb-6">
                    {section.explanation}
                  </p>

                  {/* BULLET POINTS */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                      Key Highlights & Enhancements:
                    </span>
                    <ul className="grid grid-cols-1 gap-2.5">
                      {section.bulletPoints.map((bp, bpIdx) => (
                        <li key={bpIdx} className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-gray-200/80 text-xs sm:text-sm text-gray-900 font-semibold shadow-2xs">
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{bp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}

              {/* EXTERNAL WIKI BANNER */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gray-950 text-white border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                    <ExternalLink size={14} />
                    <span>JoyaWiki Documentation Integration</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    Need technical API specs or step-by-step admin guides?
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Access complete API endpoints, integration schemas, and user guide manuals on JoyaWiki.
                  </p>
                </div>

                <a
                  href={updateDetail.wikiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-amber-400 text-gray-950 font-extrabold text-xs sm:text-sm hover:bg-amber-300 transition-colors whitespace-nowrap shadow-md flex items-center gap-2"
                >
                  <span>Open JoyaWiki</span>
                  <ExternalLink size={14} />
                </a>
              </div>

            </div>
          </article>

          {/* OTHER RELEASES GRID */}
          {otherReleases.length > 0 && (
            <div>
              <h3 className="text-2xl font-extrabold text-gray-950 tracking-tight mb-8">
                Explore Other Version Updates
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherReleases.map((item) => (
                  <Link
                    key={item.id}
                    to={`/updates/${item.slug}`}
                    className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-gray-200 hover:border-gray-950 hover:bg-white transition-all shadow-2xs flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-gray-900 text-amber-400">
                          {item.id}
                        </span>
                        <span className="text-xs text-gray-500 font-mono">
                          {item.date}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-gray-950 group-hover:text-amber-600 transition-colors line-clamp-2 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-4">
                        {item.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-900">
                      <span>View Version Notes</span>
                      <ChevronRight size={16} className="text-amber-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // UPDATES OVERVIEW LIST VIEW
  // --------------------------------------------------------------------------
  return (
    <div className="w-full pointer-events-auto bg-transparent min-h-screen pt-32 sm:pt-40 pb-24 relative isolate">
      <HeroBackground />
      <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
        
        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-12 sm:mb-16 bg-white/88 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#002D70] text-white text-xs font-bold tracking-wider uppercase mb-6 shadow-sm border border-[#1267E5]/30">
            <Terminal size={14} className="text-amber-400" />
            <span>Software Releases & System Changelog</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight mb-6 leading-tight">
            Joya Fleet System Release Updates
          </h1>
          <p className="text-base sm:text-xl text-gray-700 leading-relaxed">
            Track official release versions (<span className="font-mono font-bold text-gray-950">JOYA-222-released</span>, <span className="font-mono font-bold text-gray-950">leon-221-released</span>, <span className="font-mono font-bold text-gray-950">leon-220-released</span>) featuring complete SETTINGS, ADMIN, and SCHEDULE module documentation and external JoyaWiki references.
          </p>
        </div>

        {/* SEARCH & FILTER BAR */}
        <div className="bg-white/80 backdrop-blur-xl p-4 sm:p-6 rounded-[28px] border border-gray-200/90 shadow-sm mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
            <Sparkles size={16} className="text-amber-500" />
            <span>Showing Official Software Releases</span>
          </div>

          <div className="relative w-full sm:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search release version (e.g., JOYA-222, leon-221)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-full text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
            />
          </div>
        </div>

        {/* RELEASES LIST / CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredUpdates.map((release) => (
            <Link
              key={release.id}
              to={`/updates/${release.slug}`}
              className="group bg-white/80 backdrop-blur-md rounded-[28px] p-6 sm:p-8 border border-gray-200/90 hover:border-gray-950 hover:bg-white transition-all shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Release Tag & Date */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-gray-950 text-amber-400 shadow-2xs">
                    {release.id}
                  </span>
                  <span className="text-xs font-medium text-gray-500 flex items-center gap-1 font-mono">
                    <Calendar size={12} />
                    {release.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-950 group-hover:text-amber-600 transition-colors tracking-tight mb-3 line-clamp-2">
                  {release.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed mb-6">
                  {release.summary}
                </p>

                {/* Section Headers Preview Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {release.sections.map((sec, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-200/60"
                    >
                      {sec.key}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                {/* Card Footer */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(release.wikiUrl, '_blank', 'noopener,noreferrer');
                    }}
                    className="text-[11px] font-mono text-gray-500 hover:text-amber-600 flex items-center gap-1 cursor-pointer focus:outline-none"
                  >
                    <span>joyawiki</span>
                    <ExternalLink size={10} />
                  </button>

                  <span className="inline-flex items-center gap-1 text-xs font-extrabold text-gray-950 group-hover:text-amber-600 transition-colors">
                    <span>Full Release Notes</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* WIKI HELP FOOTER */}
        <div className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white rounded-[36px] p-8 sm:p-14 border border-gray-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-mono font-bold uppercase mb-4 border border-amber-400/30">
              <ExternalLink size={14} />
              <span>Official Knowledge Base</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Access the Complete JoyaWiki Portal
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Detailed software architecture documents, API integration guides, database schema definitions, and regulatory compliance whitepapers are maintained on our official wiki.
            </p>
          </div>

          <a
            href="https://joyawiki.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-amber-400 text-gray-950 font-extrabold text-sm hover:bg-amber-300 transition-colors whitespace-nowrap shadow-md flex items-center gap-2 shrink-0"
          >
            <span>Visit joyawiki.com</span>
            <ExternalLink size={16} />
          </a>
        </div>

      </div>
    </div>
  );
}
