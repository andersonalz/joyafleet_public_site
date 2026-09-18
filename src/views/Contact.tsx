"use client";

/*
 * Copyright 2026 Joya Fleet
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  useState,
  type ChangeEvent,
  type FormEvent
} from 'react';
import { useSearchParams } from 'next/navigation';
import Link from '../components/RouterLink';
import {
  ArrowRight,
  CheckCircle2,
  Send,
  MapPin,
  Clock,
  ShieldCheck,
  Headphones,
  Check,
  Radio,
  FileText,
  Mail
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

type AllowedIntent =
  | 'demo'
  | 'trial'
  | 'customization'
  | 'general';

const ALLOWED_INTENTS: readonly AllowedIntent[] = ['demo', 'trial', 'customization', 'general'];

function isAllowedIntent(value: string | null): value is AllowedIntent {
  return value !== null && ALLOWED_INTENTS.includes(value as AllowedIntent);
}

type AllowedModule =
  | 'flight-scheduling'
  | 'operations-dispatch'
  | 'crew-management-ftl'
  | 'fleet-maintenance'
  | 'reporting-analytics'
  | 'integrations';

const ALLOWED_MODULES: readonly AllowedModule[] = [
  'flight-scheduling',
  'operations-dispatch',
  'crew-management-ftl',
  'fleet-maintenance',
  'reporting-analytics',
  'integrations'
];

function isAllowedModule(value: string | null): value is AllowedModule {
  return value !== null && ALLOWED_MODULES.includes(value as AllowedModule);
}

interface IntentDetails {
  heading: string;
  subheading: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

const INTENT_CONTENT: Record<AllowedIntent, IntentDetails> = {
  demo: {
    heading: 'Request an Operations Demo',
    subheading: 'Tailored Demonstration for Flight Operations Teams',
    description: 'Request a guided platform demonstration around your airline’s operational and regulatory requirements.',
    seoTitle: 'Request a Demo | Joya Fleet',
    seoDescription: 'Request a guided Joya Fleet platform demonstration around your airline operations requirements.'
  },
  trial: {
    heading: 'Request Trial Consideration',
    subheading: 'Operational Sandbox & Evaluation Environment',
    description: 'Request trial consideration. Availability depends on qualification, operational scope and technical readiness.',
    seoTitle: 'Request Trial Consideration | Joya Fleet',
    seoDescription: 'Request consideration for qualified Joya Fleet trial access based on operational requirements, scope and availability.'
  },
  customization: {
    heading: 'Discuss Configuration Requirements',
    subheading: 'Workflow, Reporting & System Integration Scoping',
    description: 'Discuss custom airline workflow configuration, reporting parameters, or technical integrations with our engineering leads.',
    seoTitle: 'Configuration and Integration Requirements | Joya Fleet',
    seoDescription: 'Discuss airline workflow configuration, reporting and integration requirements with the Joya Fleet team.'
  },
  general: {
    heading: 'Contact Joya Fleet',
    subheading: 'Direct Connection with Aviation Operations Specialists',
    description: 'Connect with our team to discuss flight scheduling, dispatch, crew tracking, maintenance or integrations.',
    seoTitle: 'Contact Joya Fleet | Airline Operations Requirements',
    seoDescription: 'Contact Joya Fleet about airline scheduling, operations, crew, fleet-planning, reporting or integration requirements.'
  }
};

const OPERATOR_TYPES = [
  { value: '', label: 'Select operator type' },
  { value: 'Business Aviation', label: 'Business Aviation' },
  { value: 'Charter', label: 'Charter' },
  { value: 'Scheduled', label: 'Scheduled Airline' },
  { value: 'Cargo', label: 'Cargo Carrier' },
  { value: 'Other', label: 'Specialized Aviation / Other' }
];

const PRODUCT_INTERESTS = [
  { value: '', label: 'General platform inquiry' },
  { value: 'flight-scheduling', label: 'Flight Scheduling & Rotations' },
  { value: 'operations-dispatch', label: 'Operations & Dispatch Watch' },
  { value: 'crew-management-ftl', label: 'Crew Management & FTL' },
  { value: 'fleet-maintenance', label: 'Fleet & Maintenance Planning' },
  { value: 'reporting-analytics', label: 'Reporting & Analytics' },
  { value: 'integrations', label: 'Integrations & System Connectors' }
];

const REQUEST_TYPES = [
  { value: 'demo', label: 'Request a Live Demo' },
  { value: 'trial', label: 'Request Trial Consideration' },
  { value: 'customization', label: 'Discuss Configuration & Custom Work' },
  { value: 'general', label: 'General Aviation Inquiry' }
];

const SCOPE_ITEMS = [
  {
    title: 'Trial Access Qualification',
    description: 'Trial access is subject to operational review, scope specification and environment readiness.'
  },
  {
    title: 'Data Migration & Legacy Imports',
    description: 'Historical schedule, crew and fleet records migration is validated during onboarding assessment.'
  },
  {
    title: 'Dedicated Support & SLA',
    description: 'Direct support from our engineering and aviation operations dispatch leads.'
  },
  {
    title: 'Regulatory & Authority Scoping',
    description: 'Assessment of CAO IRI workflows, FTL compliance sets, and regional operational requirements.'
  }
];

export default function Contact() {
  const searchParams = useSearchParams();

  const rawIntent = searchParams?.get('intent') ?? null;
  const initialIntent: AllowedIntent = isAllowedIntent(rawIntent) ? rawIntent : 'general';

  const rawModule = searchParams?.get('module') ?? null;
  const initialModule: AllowedModule | '' = isAllowedModule(rawModule) ? rawModule : '';

  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    role: '',
    operatorType: '',
    productInterest: initialModule,
    requestType: initialIntent,
    requirements: ''
  });

  const [prevQueryParams, setPrevQueryParams] = useState({ initialIntent, initialModule });
  if (prevQueryParams.initialIntent !== initialIntent || prevQueryParams.initialModule !== initialModule) {
    setPrevQueryParams({ initialIntent, initialModule });
    setFormData((prev) => ({
      ...prev,
      requestType: initialIntent,
      productInterest: initialModule
    }));
  }

  const currentIntentDetails = INTENT_CONTENT[formData.requestType as AllowedIntent] || INTENT_CONTENT.general;

  useSEO({
    title: currentIntentDetails.seoTitle,
    description: currentIntentDetails.seoDescription,
    canonicalPath: '/contact',
    ogTitle: currentIntentDetails.seoTitle,
    ogDescription: currentIntentDetails.seoDescription
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTicketId(`JY-${Math.floor(100000 + Math.random() * 900000)}`);
    setIsSubmitted(true);
  };

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsNewsletterSubmitted(true);
  };

  return (
    <div id="contact-page" className="contact-page w-full pointer-events-auto bg-transparent min-h-screen text-gray-900 font-sans relative isolate">
      {/* MAIN CONTENT — 2 COLUMN WORKSPACE */}
      <section className="pt-24 sm:pt-28 pb-24 sm:pb-32 relative isolate overflow-hidden w-full">
        <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
          <div className="mb-8 sm:mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#10233F] tracking-tight">Contact</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* COLUMN 1: INTERACTIVE FORM (7 COLS) */}
            <div className="lg:col-span-7 bg-white/90 backdrop-blur-xl p-6 sm:p-10 lg:p-12 rounded-[32px] border border-[#1267E5]/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-radial-gradient from-[#1267E5]/10 to-transparent pointer-events-none rounded-full blur-2xl" />

              {isSubmitted ? (
                <div className="py-12 sm:py-16 text-center space-y-6">
                  <div className="w-20 h-20 rounded-2xl bg-[#1267E5]/10 border border-[#1267E5]/30 text-[#1267E5] flex items-center justify-center mx-auto shadow-lg shadow-[#1267E5]/10">
                    <CheckCircle2 size={42} className="text-[#1267E5]" />
                  </div>
                  
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#1267E5] uppercase block mb-1">
                      DISPATCH TICKET CONFIRMED • ID: {ticketId || 'JY-849201'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-950 tracking-tight">
                      Inquiry Successfully Received
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-gray-950">{formData.fullName}</span> from <span className="font-bold text-gray-950">{formData.company || 'your airline'}</span>. Our flight operations specialist will review your requirements and follow up promptly.
                  </p>

                  <div className="bg-[#1267E5]/5 border border-[#1267E5]/15 rounded-2xl p-4 max-w-md mx-auto text-left font-mono text-xs text-gray-700 space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Contact Email:</span>
                      <span className="font-bold text-gray-900">{formData.workEmail}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Interest:</span>
                      <span className="text-[#1267E5] font-semibold">{formData.productInterest || 'General Platform'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Request Type:</span>
                      <span className="text-gray-900">{formData.requestType}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-white border border-[#1267E5]/30 text-gray-900 font-bold text-xs hover:bg-[#1267E5]/5 transition-all shadow-xs cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                    <Link
                      to="/platform"
                      className="px-6 py-3 rounded-xl bg-[#1267E5] text-white font-bold text-xs hover:bg-[#0E54BD] transition-all shadow-lg shadow-[#1267E5]/25"
                    >
                      Explore Joya Fleet Platform
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#1267E5]/15">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#1267E5] block uppercase font-bold">
                        OPERATIONAL INQUIRY FORM
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-950 tracking-tight">
                        Tell us about your flight operations
                      </h2>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>DISPATCH TEAM ONLINE</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="full-name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 font-mono">
                          Full Name <span className="text-[#1267E5]">*</span>
                        </label>
                        <input
                          id="full-name"
                          type="text"
                          name="fullName"
                          required
                          autoComplete="name"
                          placeholder="e.g. Captain Reza Karimi"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full bg-white/90 border border-[#1267E5]/20 focus:border-[#1267E5] focus:ring-2 focus:ring-[#1267E5]/20 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none transition-all placeholder:text-gray-400"
                        />
                      </div>

                      <div>
                        <label htmlFor="work-email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 font-mono">
                          Work Email <span className="text-[#1267E5]">*</span>
                        </label>
                        <input
                          id="work-email"
                          type="email"
                          name="workEmail"
                          required
                          autoComplete="email"
                          placeholder="name@airline.com"
                          value={formData.workEmail}
                          onChange={handleChange}
                          className="w-full bg-white/90 border border-[#1267E5]/20 focus:border-[#1267E5] focus:ring-2 focus:ring-[#1267E5]/20 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none transition-all placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 font-mono">
                          Airline / Operator Name <span className="text-[#1267E5]">*</span>
                        </label>
                        <input
                          id="company"
                          type="text"
                          name="company"
                          required
                          autoComplete="organization"
                          placeholder="e.g. Caspian Air / Charter Ops"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-white/90 border border-[#1267E5]/20 focus:border-[#1267E5] focus:ring-2 focus:ring-[#1267E5]/20 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none transition-all placeholder:text-gray-400"
                        />
                      </div>

                      <div>
                        <label htmlFor="role" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 font-mono">
                          Role / Operational Department
                        </label>
                        <input
                          id="role"
                          type="text"
                          name="role"
                          autoComplete="organization-title"
                          placeholder="e.g. OCC Director / Dispatch Manager"
                          value={formData.role}
                          onChange={handleChange}
                          className="w-full bg-white/90 border border-[#1267E5]/20 focus:border-[#1267E5] focus:ring-2 focus:ring-[#1267E5]/20 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none transition-all placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="operator-type" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 font-mono">
                          Operator Type <span className="text-[#1267E5]">*</span>
                        </label>
                        <select
                          id="operator-type"
                          name="operatorType"
                          required
                          value={formData.operatorType}
                          onChange={handleChange}
                          className="w-full bg-white/90 border border-[#1267E5]/20 focus:border-[#1267E5] focus:ring-2 focus:ring-[#1267E5]/20 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none transition-all cursor-pointer"
                        >
                          {OPERATOR_TYPES.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="product-interest" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 font-mono">
                          Primary Product Interest
                        </label>
                        <select
                          id="product-interest"
                          name="productInterest"
                          value={formData.productInterest}
                          onChange={handleChange}
                          className="w-full bg-white/90 border border-[#1267E5]/20 focus:border-[#1267E5] focus:ring-2 focus:ring-[#1267E5]/20 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none transition-all cursor-pointer"
                        >
                          {PRODUCT_INTERESTS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="request-type" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 font-mono">
                        Inquiry Scope
                      </label>
                      <select
                        id="request-type"
                        name="requestType"
                        value={formData.requestType}
                        onChange={handleChange}
                        className="w-full bg-white/90 border border-[#1267E5]/20 focus:border-[#1267E5] focus:ring-2 focus:ring-[#1267E5]/20 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none transition-all cursor-pointer"
                      >
                        {REQUEST_TYPES.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="requirements" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 font-mono">
                        Operational Context or Specific Requirements <span className="text-[#1267E5]">*</span>
                      </label>
                      <textarea
                        id="requirements"
                        name="requirements"
                        required
                        rows={4}
                        value={formData.requirements}
                        onChange={handleChange}
                        placeholder="Please describe your fleet size, aircraft types (e.g. A320, B737, ATR), current systems (e.g. Skyputer, CAO portal) or specific challenges."
                        className="w-full bg-white/90 border border-[#1267E5]/20 focus:border-[#1267E5] focus:ring-2 focus:ring-[#1267E5]/20 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>

                    {formData.requestType === 'trial' && (
                      <div className="p-4 rounded-xl bg-[#1267E5]/10 border border-[#1267E5]/25 text-gray-800 text-xs font-medium flex items-start gap-2.5">
                        <ShieldCheck size={16} className="text-[#1267E5] shrink-0 mt-0.5" />
                        <span>Trial access is subject to operational qualification, scope validation, and available testing slots.</span>
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-[#EE1C25] hover:bg-[#D4151D] text-white font-bold py-4 rounded-xl text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#EE1C25]/25 cursor-pointer hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[#EE1C25] focus-visible:ring-offset-2"
                      >
                        <Send size={18} />
                        <span>Submit Inquiry to Operations Desk</span>
                      </button>
                      <p id="submission-status" role="status" className="text-[11px] text-gray-500 mt-3 text-center font-mono">
                        Direct dispatch routing • Aviation Systems Engineering Hub
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>

            {/* COLUMN 2: OPERATIONS SCOPE & CONTEXT (5 COLS) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Scope Card */}
              <div className="bg-white/90 backdrop-blur-xl p-6 sm:p-8 rounded-[32px] border border-[#1267E5]/20 shadow-xl">
                <span className="text-[10px] font-mono tracking-widest text-[#1267E5] block uppercase font-bold mb-1">
                  ONBOARDING & EVALUATION
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-950 tracking-tight mb-3">
                  Scope & Readiness
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  Every Joya Fleet implementation is structured around documented operational requirements, airline size, and regulatory standards.
                </p>

                <div className="space-y-4">
                  {SCOPE_ITEMS.map((item, idx) => (
                    <div key={idx} className="border-l-4 border-[#1267E5] bg-white/80 backdrop-blur-md p-4 rounded-r-xl border-y border-r border-[#1267E5]/15 shadow-xs">
                      <h4 className="font-bold text-gray-950 text-xs sm:text-sm mb-1 flex items-center gap-2">
                        <Check size={14} className="text-[#1267E5]" />
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Engineering Desk Card (Aviation dark theme) */}
              <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-[#071B33] to-[#040E1A] p-6 sm:p-8 text-white border border-[#1267E5]/30 shadow-2xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-radial-gradient from-[#1267E5]/20 to-transparent pointer-events-none rounded-full" />
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#1267E5]/20 border border-[#1267E5]/40 flex items-center justify-center text-[#39BFF8]">
                    <Radio size={16} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#39BFF8] block uppercase font-bold">
                      HEADQUARTERS & DISPATCH
                    </span>
                    <h4 className="text-sm font-bold text-white font-mono">
                      Aviation Operations Desk
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed mb-6 font-medium">
                  Direct engagement with aviation software engineers and operational product leads.
                </p>

                <div className="space-y-3 text-xs font-mono border-t border-white/10 pt-4 text-gray-300">
                  <div className="flex items-center gap-2.5">
                    <MapPin size={14} className="text-[#39BFF8]" />
                    <span>Aviation operations support</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock size={14} className="text-[#39BFF8]" />
                    <span>Response Time: &lt; 24h Operational Dispatch</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Headphones size={14} className="text-[#39BFF8]" />
                    <span>Direct Technical Briefing & Virtual Demo</span>
                  </div>
                </div>
              </div>

              {/* Connected Platform link */}
              <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-[#1267E5]/20 shadow-sm flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-[#1267E5]" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-950">Looking for documentation?</h4>
                    <p className="text-[11px] text-gray-500">Explore modules & architecture specs</p>
                  </div>
                </div>
                <Link
                  to="/platform"
                  className="text-xs font-bold text-[#1267E5] hover:text-[#0E54BD] flex items-center gap-1 font-mono uppercase tracking-wider"
                >
                  <span>Explore</span>
                  <ArrowRight size={12} />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section aria-labelledby="newsletter-heading" className="pb-24 sm:pb-32 relative isolate w-full">
        <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
          <div className="bg-gradient-to-br from-[#071B33] via-[#002D70] to-[#0A2540] text-white rounded-[36px] p-8 sm:p-14 border border-[#1267E5]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#1267E5]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#EE1C25]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#39BFF8] block mb-3 font-mono">
                Stay Informed
              </span>
              <h2 id="newsletter-heading" className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Join our newsletter
              </h2>
              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
                Get the JoyaFleet monthly newsletter and stay up to date with the latest product news and operational insights.
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="w-full lg:w-auto relative z-10">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative w-full sm:w-80">
                  <Mail size={17} aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-200/70" />
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={newsletterEmail}
                    onChange={(event) => {
                      setNewsletterEmail(event.target.value);
                      setIsNewsletterSubmitted(false);
                    }}
                    placeholder="Enter your email address"
                    className="w-full px-5 py-3.5 pl-11 bg-[#071B33]/80 border border-[#1267E5]/30 rounded-xl text-sm text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-[#39BFF8]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl bg-[#EE1C25] hover:bg-[#D4151D] text-white font-bold text-sm transition-all whitespace-nowrap shadow-lg shadow-[#EE1C25]/25 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071B33]"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-3 max-w-md text-[11px] leading-relaxed text-blue-100/70">
                By subscribing, you agree to receive the JoyaFleet newsletter. Please review our Privacy Policy to understand how we process personal data.
              </p>
              {isNewsletterSubmitted && (
                <p role="status" className="mt-3 text-xs font-semibold text-emerald-300">
                  Thank you — your newsletter subscription request has been received.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
