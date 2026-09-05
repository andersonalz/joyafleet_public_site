"use client";

/*
 * Copyright 2026 Joya Fleet
 * SPDX-License-Identifier: Apache-2.0
 */

import Link from '../components/RouterLink';
import { motion, MotionConfig } from 'motion/react';
import { Shield, Lock, Users, ClipboardList, History, Sliders, CheckCircle2, ChevronRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { HeroBackground } from '../components/HeroBackground';

interface SecurityPillar {
  icon: typeof Lock;
  title: string;
  desc: string;
}

interface AccessControlItem {
  name: string;
  desc: string;
}

const SECURITY_PILLARS: SecurityPillar[] = [
  {
    icon: Lock,
    title: "Authentication",
    desc: "Use password hashing, JWT-based sessions, OTP where configured and reCAPTCHA protections for applicable public forms."
  },
  {
    icon: Users,
    title: "Groups & Permissions",
    desc: "Configure users, groups and operational permissions around authorized roles and responsibilities."
  },
  {
    icon: ClipboardList,
    title: "Activity & Authentication Records",
    desc: "Maintain relevant authentication, status and activity context for authorized review."
  },
  {
    icon: History,
    title: "Operational History",
    desc: "Keep relevant history and record changes available within supported operational workflows."
  },
  {
    icon: Sliders,
    title: "Configuration Control",
    desc: "Restrict sensitive administrative and integration settings to authorized users."
  },
  {
    icon: Shield,
    title: "Implementation Scope",
    desc: "Security configuration, deployment requirements and support responsibilities are agreed during implementation."
  }
];

const ACCESS_CONTROLS: AccessControlItem[] = [
  {
    name: "Authentication and activity records",
    desc: "Maintain relevant authentication and activity context for authorized operational review."
  },
  {
    name: "IP and status context",
    desc: "Review IP and status information where it is available within the configured implementation."
  },
  {
    name: "Configured groups and permissions",
    desc: "Review how authorized roles and operational responsibilities are assigned through configured access controls."
  },
  {
    name: "Record-history context",
    desc: "Use Trip Snapshot or other record-history context where implemented in the supported workflow."
  }
];

export default function Security() {
  useSEO({
    title: "Security and Access Controls | Joya Fleet",
    description: "Learn how Joya Fleet supports structured authentication, configurable permissions, activity records and implementation-defined access controls for connected airline operations.",
    canonicalPath: "/security",
    ogTitle: "Security and Access Controls | Joya Fleet",
    ogDescription: "Review Joya Fleet authentication, permission, activity-record and configuration controls for connected airline operations."
  });

  return (
    <MotionConfig reducedMotion="user">
      <div className="w-full pointer-events-auto bg-transparent min-h-screen font-sans text-gray-900">
        {/* HERO SECTION */}
        <section id="hero" className="w-full min-h-screen relative isolate pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden flex flex-col items-center justify-center bg-[#071E3D] bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] text-white m-0 mb-12">
          <HeroBackground />
          
          {/* BREADCRUMB */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            data-aos="fade-down"
            data-aos-duration="600"
            className="mb-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full relative z-20"
          >
            <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs font-semibold text-blue-200 tracking-wider uppercase font-mono bg-[#1267E5]/20 backdrop-blur-md px-4 py-1.5 rounded-lg border border-[#38BDF8]/30 shadow-2xs">
              <Link to="/" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:outline-none rounded">Home</Link>
              <ChevronRight size={10} aria-hidden="true" className="text-blue-300" />
              <span className="text-[#38BDF8] font-bold" aria-current="page">Security & Access</span>
            </nav>
          </motion.div>

          <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full relative isolate z-10">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              data-aos="fade-right"
              data-aos-duration="800"
              className="bg-white/95 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/80 shadow-2xl shadow-[#071E3D]/40 max-w-4xl text-gray-900"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-6 font-mono shadow-xs"
              >
                <Shield size={12} className="text-[#1267E5]" aria-hidden="true" />
                APPLICATION SECURITY & ACCESS CONTROL
              </motion.span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-950 tracking-tight leading-tight mb-6">
                Controlled access for connected airline operations.
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed mb-4 max-w-2xl">
                Protect access to operational workflows through structured authentication, configurable permissions and reviewable activity records.
              </p>
              <p className="text-sm font-semibold text-gray-600">
                Security capabilities depend on the configured deployment and agreed implementation scope.
              </p>
            </motion.div>
          </div>
        </section>

      <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full pb-20">
        {/* SECURITY CAPABILITY CARDS */}
        <section aria-labelledby="security-capabilities-heading" className="mb-20">
          <h2 id="security-capabilities-heading" className="sr-only">
            Security capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SECURITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white/60 backdrop-blur-md p-6 sm:p-8 rounded-[28px] border border-gray-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3.5 bg-gray-900 text-white rounded-2xl w-fit mb-6 shadow-sm">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ACCESS VERIFICATION SECTION */}
        <div className="bg-white/60 backdrop-blur-lg rounded-[32px] border border-gray-200 p-8 sm:p-12 mb-20 shadow-sm">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Access Verification
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Use authentication records, activity history and configured access controls to review how authorized users access the platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ACCESS_CONTROLS.map((control) => (
              <div key={control.name} className="border-t border-gray-200/80 pt-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">
                    {control.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {control.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs text-gray-600 font-semibold uppercase tracking-wider font-mono">
                  <CheckCircle2 size={14} className="text-gray-900 shrink-0" aria-hidden="true" />
                  <span>Application Control</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CLOSING SECTION */}
        <div className="bg-gray-900 text-white rounded-[32px] p-8 sm:p-14 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border border-gray-800 shadow-xl">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight text-white">
              Discuss Security and Configuration Requirements
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Review application-level controls, configuration requirements and implementation responsibilities with the Joya Fleet team.
            </p>
          </div>
          <Link
            to="/contact?intent=customization"
            className="bg-white text-gray-950 font-bold px-7 py-3.5 rounded-full text-sm hover:bg-gray-100 transition-colors shrink-0 whitespace-nowrap shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          >
            Discuss Security and Configuration Requirements
          </Link>
        </div>
      </div>
      </div>
    </MotionConfig>
  );
}
