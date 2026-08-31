import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, MotionConfig } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import { HeroBackground } from '../components/HeroBackground';
import {
  Calendar,
  CalendarDays,
  ClipboardList,
  Layers,
  FileText,
  MessageSquare,
  Bell,
  Plane,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Smartphone,
  WifiOff,
  ShieldCheck,
  CheckCircle2,
  Menu,
  Clock,
  Download,
  RotateCw,
  Filter,
  Users,
  GripHorizontal,
  Maximize2,
  Minimize2
} from 'lucide-react';

interface AppFeature {
  id: string;
  name: string;
  badge: string;
  color: string;
  borderAccent: string;
  iconBg: string;
  iconColor: string;
  icon: React.ElementType;
  shortDesc: string;
  fullDesc: string;
  capabilities: string[];
  operationalValue: string;
}

interface CalendarDayItem {
  display: string;
  key: string;
  isCurrentMonth: boolean;
  hasAlert?: boolean;
  flightsCount: number;
}

interface FlightItem {
  flightNo: string;
  depTime: string;
  depAirport: string;
  arrAirport: string;
  arrTime: string;
  aircraft: string;
  crew: string;
  status: string;
  accentColor: string;
}

export default function OurApps() {
  useSEO({
    title: "Joya Fleet Mobile Apps | 1-Month Interactive Master Schedule",
    description: "Explore the Joya Fleet Mobile Application for airline flight crew, pilots, and operations teams. Manage 30-day master schedules, personal rosters, duties, flight manuals, duty requests, and instant messaging.",
    canonicalPath: "/our-apps",
    ogTitle: "Joya Fleet Mobile Application — 1-Month Fleet Schedule & Crew Portal",
    ogDescription: "Dedicated mobile platform for airline operations: Interactive 30-Day Master Schedule, Personal Rosters, Duties, Manuals, Requests, and Real-Time Notifications."
  });

  const [activeFeatureId, setActiveFeatureId] = useState<string>('schedule');
  const [phoneScreen, setPhoneScreen] = useState<'home' | 'schedule'>('schedule');
  const [selectedDay, setSelectedDay] = useState<string>('19');
  const [selectedFlight, setSelectedFlight] = useState<FlightItem | null>(null);
  const [filterActive, setFilterActive] = useState<boolean>(false);
  const [filterAircraft, setFilterAircraft] = useState<string>('all');

  // Interactive Bottom Sheet drag & snap state
  const [sheetHeight, setSheetHeight] = useState<number>(330);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartY, setDragStartY] = useState<number>(0);
  const [dragStartHeight, setDragStartHeight] = useState<number>(330);

  // Handle pointer down (mouse or touch on the drag handle bar)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStartY(e.clientY);
    setDragStartHeight(sheetHeight);
    try {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  // Handle pointer move (dragging up/down with mouse)
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const deltaY = e.clientY - dragStartY;
    // Dragging UP decreases clientY (deltaY < 0), so height increases
    const nextHeight = Math.max(160, Math.min(540, dragStartHeight - deltaY));
    setSheetHeight(nextHeight);
  };

  // Handle pointer release (snap to closest position)
  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    // Snap to 3 defined thresholds
    if (sheetHeight > 420) {
      setSheetHeight(520); // Expanded (covers calendar for deep inspection)
    } else if (sheetHeight < 230) {
      setSheetHeight(175); // Docked / Peek
    } else {
      setSheetHeight(330); // Half view
    }
  };

  // Select day with smooth slide-up animation
  const handleSelectDay = (day: string) => {
    setSelectedDay(day);
    // If sheet was collapsed to peek, smoothly slide it up
    if (sheetHeight < 280) {
      setSheetHeight(340);
    }
  };

  // Quick toggle between snap levels
  const toggleSheetExpand = () => {
    if (sheetHeight > 400) {
      setSheetHeight(330);
    } else {
      setSheetHeight(520);
    }
  };

  const appFeatures: AppFeature[] = [
    {
      id: 'schedule',
      name: 'Schedule (1-Month Fleet View)',
      badge: '30-DAY MASTER SCHEDULE',
      color: '#86BF02',
      borderAccent: 'border-l-[#86BF02]',
      iconBg: 'bg-lime-50 text-[#86BF02]',
      iconColor: 'text-[#86BF02]',
      icon: CalendarDays,
      shortDesc: 'Complete 30-day month view of all airline flights',
      fullDesc: 'High-visibility interactive monthly calendar giving flight crew and operations controllers full transparency over every scheduled commercial, charter, and ferry flight across the entire airline fleet for any selected month.',
      capabilities: [
        'Interactive 30-day / 1-month matrix calendar grid with visual flight volume status',
        'Single-tap date selection: instantaneously updates the bottom sheet list of all daily flights',
        'Standard UTC Zulu departure and arrival times (e.g. 21:00 UTC IST ✈ IKA 23:55 UTC) for accurate international operations',
        'Complete operating crew assignment strings per leg (e.g. AHAD-ASAM-ALJA-CKAV-MOBA-ANIL-MSAF)',
        'Aircraft tail number tracking (EP-SIM, EP-SIJ) with real-time operational status indicators',
        'Quick navigation to Today, previous month, and next month with one tap'
      ],
      operationalValue: 'Gives pilots, cabin crew, and dispatchers complete 360° visibility over fleet schedules, helping teams anticipate connections and pairings weeks in advance.'
    },
    {
      id: 'my-schedule',
      name: 'My Schedule',
      badge: 'PERSONAL ROSTER & PAIRINGS',
      color: '#1267E5',
      borderAccent: 'border-l-[#1267E5]',
      iconBg: 'bg-blue-50 text-[#1267E5]',
      iconColor: 'text-[#1267E5]',
      icon: Calendar,
      shortDesc: 'Personal flight schedule and assignments',
      fullDesc: 'Comprehensive personal flight calendar giving pilots and cabin crew real-time visibility into upcoming flight pairings, report times, check-in deadlines, rest intervals, and FTL margins.',
      capabilities: [
        'Interactive personal flight schedule with daily, weekly, and monthly roster views',
        'Automatic pairing breakdown with flight sectors, departure/arrival UTC and local times',
        'Crew composition lookup: see captains, first officers, and purser assignments per leg',
        'Built-in Flight Time Limitations (FTL) rest period and duty ceiling tracker',
        'One-touch calendar export to Apple Calendar, Google Calendar, and Outlook'
      ],
      operationalValue: 'Prevents roster confusion and reduces dispatch call volume by giving crew continuous access to their latest verified flight duties.'
    },
    {
      id: 'duties',
      name: 'Duties',
      badge: 'DUTY & STANDBY MANAGEMENT',
      color: '#F97316',
      borderAccent: 'border-l-[#F97316]',
      iconBg: 'bg-orange-50 text-[#F97316]',
      iconColor: 'text-[#F97316]',
      icon: ClipboardList,
      shortDesc: 'View and manage duty requests & assignments',
      fullDesc: 'Dedicated module for tracking non-flying and ground duties including airport reserve standbys, home standbys, simulator recurrent sessions, recurrent ground training, and medical checks.',
      capabilities: [
        'Airport Standby (SBY) & Home Standby duty countdowns with activation alerts',
        'Simulator training scheduling and check-ride appointment confirmations',
        'Ground school, annual recurrent training, and CRM class tracking',
        'Duty acknowledgment workflow with digital time-stamped confirmations',
        'Real-time duty hours accumulation counter against monthly CAO IRI regulatory limits'
      ],
      operationalValue: 'Guarantees compliance with civil aviation duty limits while automating standby activation records.'
    },
    {
      id: 'requests',
      name: 'Requests & Endorsements',
      badge: 'CREW WORKFLOW & QUALIFICATIONS',
      color: '#10B981',
      borderAccent: 'border-l-[#10B981]',
      iconBg: 'bg-emerald-50 text-[#10B981]',
      iconColor: 'text-[#10B981]',
      icon: Layers,
      shortDesc: 'Flight swaps, leave requests & certifications',
      fullDesc: 'Streamlined self-service portal for submitting duty swaps, annual leave bids, preferred off-days, and viewing license ratings, type endorsements, and medical renewals.',
      capabilities: [
        'Peer-to-peer flight and duty swap marketplace with automatic FTL pre-validation',
        'Annual leave and requested days-off submission with status tracking (Pending/Approved)',
        'Digital endorsement locker: Type ratings, Instrument Rating, Dangerous Goods, SEP',
        'Expiration warning alerts (60-day, 30-day, 7-day) for Medical Class 1 and ICAO ELP',
        'Direct document upload for license renewals and training completion certificates'
      ],
      operationalValue: 'Replaces paper leave forms and chaotic email chains with an automated, rule-checked workflow.'
    },
    {
      id: 'manuals',
      name: 'Manuals & Documents',
      badge: 'OFFLINE EFB REPOSITORY',
      color: '#4F46E5',
      borderAccent: 'border-l-[#4F46E5]',
      iconBg: 'bg-indigo-50 text-[#4F46E5]',
      iconColor: 'text-[#4F46E5]',
      icon: FileText,
      shortDesc: 'Aircraft and safety documentation',
      fullDesc: 'Electronic Flight Bag (EFB) certified document repository providing fast, offline-accessible flight manuals, standard operating procedures, minimum equipment lists, and emergency checklists.',
      capabilities: [
        'Encrypted offline library for OM-A, OM-B, OM-C, OM-D, FCOM, MEL, and QRH',
        'Instant full-text search with hyperlinked indices across hundreds of manual pages',
        'Revision management: highlighted changes and mandatory read-and-sign receipts',
        'Aircraft-specific Quick Reference Handbooks (QRH) formatted for instant cockpit access',
        'Automatic background synchronization over Wi-Fi when new revisions are published by OCC'
      ],
      operationalValue: 'Ensures cockpit and cabin crew are always operating with current, regulator-approved flight documentation even when airborne without cellular service.'
    },
    {
      id: 'messaging',
      name: 'Messaging & Crew Comms',
      badge: 'DIRECT OPERATIONAL CHAT',
      color: '#EC4899',
      borderAccent: 'border-l-[#EC4899]',
      iconBg: 'bg-pink-50 text-[#EC4899]',
      iconColor: 'text-[#EC4899]',
      icon: MessageSquare,
      shortDesc: 'Crew communications and flight updates',
      fullDesc: 'Secure, aviation-dedicated instant messaging network connecting operating flight crews directly with OCC controllers, dispatchers, maintenance engineers, and crew schedulers.',
      capabilities: [
        'Auto-generated flight trip chat groups created dynamically for every operating sector',
        'Direct 1-on-1 private messaging with Crew Planning, Dispatch, and Chief Pilot office',
        'Broadcast channels for airline-wide operational bulletins and safety notices',
        'Attachment sharing for loadsheets, weather METAR/TAF graphics, and technical logs',
        'End-to-end encrypted protocol with read receipts and audit logging'
      ],
      operationalValue: 'Eliminates reliance on unsecured third-party consumer messaging apps and creates an accountable operational communication trail.'
    },
    {
      id: 'notifications',
      name: 'Notifications & Alerts',
      badge: 'REAL-TIME OCC BROADCASTS',
      color: '#002D70',
      borderAccent: 'border-l-[#002D70]',
      iconBg: 'bg-[#002D70]/10 text-[#002D70]',
      iconColor: 'text-[#002D70]',
      icon: Bell,
      shortDesc: 'Instant schedule changes, gate alerts & dispatch updates',
      fullDesc: 'High-priority push notification engine delivering time-critical operational alerts to crew mobile devices, with guaranteed delivery receipts and mandatory acknowledgment workflows.',
      capabilities: [
        'Urgent roster change notifications with visual side-by-side diff comparisons',
        'Departure delay, slot adjustment (CTOT), and gate change push broadcasts',
        'Weather alerts (SIGMET/AIRMET) affecting destination and alternate aerodromes',
        'Mandatory acknowledgment button requiring crew confirmation for major revisions',
        'Customizable alert channels with Do-Not-Disturb exemptions for critical flight calls'
      ],
      operationalValue: 'Guarantees that schedule revisions and flight-critical updates reach crew members immediately, wherever they are.'
    }
  ];

  // Calendar cells matching 2026 August screenshot exactly
  const augustDays: CalendarDayItem[] = [
    { display: '26', key: 'prev-26', isCurrentMonth: false, flightsCount: 2 },
    { display: '27', key: 'prev-27', isCurrentMonth: false, flightsCount: 2 },
    { display: '28', key: 'prev-28', isCurrentMonth: false, flightsCount: 3 },
    { display: '29', key: 'prev-29', isCurrentMonth: false, flightsCount: 2 },
    { display: '30', key: 'prev-30', isCurrentMonth: false, flightsCount: 4 },
    { display: '31', key: 'prev-31', isCurrentMonth: false, flightsCount: 3 },
    { display: '01', key: '01', isCurrentMonth: true, flightsCount: 4 },
    { display: '02', key: '02', isCurrentMonth: true, flightsCount: 3 },
    { display: '03', key: '03', isCurrentMonth: true, flightsCount: 4 },
    { display: '04', key: '04', isCurrentMonth: true, flightsCount: 3 },
    { display: '05', key: '05', isCurrentMonth: true, flightsCount: 5 },
    { display: '06', key: '06', isCurrentMonth: true, flightsCount: 4 },
    { display: '07', key: '07', isCurrentMonth: true, flightsCount: 4 },
    { display: '08', key: '08', isCurrentMonth: true, flightsCount: 3 },
    { display: '09', key: '09', isCurrentMonth: true, flightsCount: 4 },
    { display: '10', key: '10', isCurrentMonth: true, flightsCount: 4 },
    { display: '11', key: '11', isCurrentMonth: true, flightsCount: 3 },
    { display: '12', key: '12', isCurrentMonth: true, flightsCount: 5 },
    { display: '13', key: '13', isCurrentMonth: true, flightsCount: 4 },
    { display: '14', key: '14', isCurrentMonth: true, flightsCount: 4 },
    { display: '15', key: '15', isCurrentMonth: true, flightsCount: 3 },
    { display: '16', key: '16', isCurrentMonth: true, flightsCount: 4 },
    { display: '17', key: '17', isCurrentMonth: true, hasAlert: true, flightsCount: 3 },
    { display: '18', key: '18', isCurrentMonth: true, flightsCount: 4 },
    { display: '19', key: '19', isCurrentMonth: true, flightsCount: 3 },
    { display: '20', key: '20', isCurrentMonth: true, flightsCount: 4 },
    { display: '21', key: '21', isCurrentMonth: true, flightsCount: 4 },
    { display: '22', key: '22', isCurrentMonth: true, flightsCount: 3 },
    { display: '23', key: '23', isCurrentMonth: true, flightsCount: 4 },
    { display: '24', key: '24', isCurrentMonth: true, flightsCount: 4 },
    { display: '25', key: '25', isCurrentMonth: true, flightsCount: 3 },
    { display: '26', key: '26', isCurrentMonth: true, flightsCount: 5 },
    { display: '27', key: '27', isCurrentMonth: true, flightsCount: 4 },
    { display: '28', key: '28', isCurrentMonth: true, flightsCount: 4 },
    { display: '29', key: '29', isCurrentMonth: true, flightsCount: 3 },
    { display: '30', key: '30', isCurrentMonth: true, flightsCount: 4 },
    { display: '31', key: '31', isCurrentMonth: true, flightsCount: 4 },
    { display: '01', key: 'next-01', isCurrentMonth: false, flightsCount: 3 },
    { display: '02', key: 'next-02', isCurrentMonth: false, flightsCount: 3 },
    { display: '03', key: 'next-03', isCurrentMonth: false, flightsCount: 4 },
    { display: '04', key: 'next-04', isCurrentMonth: false, flightsCount: 2 },
    { display: '05', key: 'next-05', isCurrentMonth: false, flightsCount: 3 }
  ];

  // Flights data mapped to selected days
  const getFlightsForDay = (dayStr: string): FlightItem[] => {
    if (dayStr === '19') {
      return [
        {
          flightNo: '8257',
          depTime: '21:00 UTC',
          depAirport: 'IST',
          arrAirport: 'IKA',
          arrTime: '23:55 UTC',
          aircraft: 'EP-SIM',
          crew: 'AHAD-ASAM-ALJA-CKAV-MOBA-ANIL-MSAF',
          status: 'On Time',
          accentColor: '#10B981'
        },
        {
          flightNo: '152',
          depTime: '03:30 UTC',
          depAirport: 'THR',
          arrAirport: 'ZBR',
          arrTime: '05:45 UTC',
          aircraft: 'EP-SIJ',
          crew: 'CMJA-ASHA-AMHG-AEAK-HASO-MAMI',
          status: 'Scheduled',
          accentColor: '#1267E5'
        },
        {
          flightNo: '8244',
          depTime: '04:20 UTC',
          depAirport: 'IKA',
          arrAirport: 'NJF',
          arrTime: '05:50 UTC',
          aircraft: 'EP-SIM',
          crew: 'ALJA-CKAV-MOBA-ANIL-MSAF-REZA',
          status: 'Scheduled',
          accentColor: '#8B5CF6'
        }
      ];
    } else if (dayStr === '17') {
      return [
        {
          flightNo: '184',
          depTime: '07:05 UTC',
          depAirport: 'THR',
          arrAirport: 'PGU',
          arrTime: '08:35 UTC',
          aircraft: 'EP-SIJ',
          crew: 'AHAD-ASAM-CKAV-MOBA-MAMI',
          status: 'Roster Revised',
          accentColor: '#EE1C25'
        },
        {
          flightNo: '185',
          depTime: '09:20 UTC',
          depAirport: 'PGU',
          arrAirport: 'THR',
          arrTime: '10:50 UTC',
          aircraft: 'EP-SIJ',
          crew: 'AHAD-ASAM-CKAV-MOBA-MAMI',
          status: 'Scheduled',
          accentColor: '#10B981'
        },
        {
          flightNo: '8250',
          depTime: '14:15 UTC',
          depAirport: 'IKA',
          arrAirport: 'DXB',
          arrTime: '16:30 UTC',
          aircraft: 'EP-SIM',
          crew: 'CMJA-ASHA-ALJA-MSAF-HASO',
          status: 'Scheduled',
          accentColor: '#1267E5'
        }
      ];
    } else {
      return [
        {
          flightNo: `82${parseInt(dayStr, 10) % 90 + 10}`,
          depTime: '06:10 UTC',
          depAirport: 'THR',
          arrAirport: 'MHD',
          arrTime: '07:35 UTC',
          aircraft: parseInt(dayStr, 10) % 2 === 0 ? 'EP-SIM' : 'EP-SIJ',
          crew: 'AHAD-ASAM-ALJA-CKAV-MSAF',
          status: 'Scheduled',
          accentColor: '#10B981'
        },
        {
          flightNo: `15${parseInt(dayStr, 10) % 80 + 15}`,
          depTime: '11:45 UTC',
          depAirport: 'MHD',
          arrAirport: 'THR',
          arrTime: '13:10 UTC',
          aircraft: parseInt(dayStr, 10) % 2 === 0 ? 'EP-SIM' : 'EP-SIJ',
          crew: 'CMJA-ASHA-AMHG-AEAK-MAMI',
          status: 'Scheduled',
          accentColor: '#1267E5'
        },
        {
          flightNo: `82${parseInt(dayStr, 10) % 70 + 20}`,
          depTime: '18:30 UTC',
          depAirport: 'IKA',
          arrAirport: 'IST',
          arrTime: '21:15 UTC',
          aircraft: 'EP-SIM',
          crew: 'ALJA-CKAV-MOBA-ANIL-HASO-REZA',
          status: 'Scheduled',
          accentColor: '#8B5CF6'
        }
      ];
    }
  };

  const rawFlights = getFlightsForDay(selectedDay);
  const displayedFlights = filterAircraft === 'all' 
    ? rawFlights 
    : rawFlights.filter(f => f.aircraft === filterAircraft);

  return (
    <MotionConfig reducedMotion="user">
      <div id="our-apps-page" className="our-apps-page w-full min-h-screen font-sans text-gray-900 pointer-events-auto">
        
        {/* 1. HERO SECTION */}
        <section id="hero" className="w-full min-h-screen relative isolate pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden flex flex-col items-center justify-center bg-[#071E3D] bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73] text-white m-0">
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
              <span className="text-[#38BDF8] font-bold" aria-current="page">Mobile Applications</span>
            </nav>
          </motion.div>

          <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full relative isolate z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Hero Content - Dynamically switches explanations based on active phone screen */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                data-aos="fade-right"
                data-aos-duration="800"
                className="lg:col-span-6 w-full lg:w-[609px] max-w-full flex flex-col items-start text-left bg-white/95 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/80 shadow-2xl shadow-[#071E3D]/40 transition-all duration-300 text-gray-900"
              >
                
                {/* Contextual Badge */}
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-6 shadow-xs font-mono"
                >
                  <Smartphone size={13} className="text-[#1267E5]" aria-hidden="true" />
                  {phoneScreen === 'schedule' ? '30-DAY MASTER FLEET CALENDAR' : 'JOYA CREW MOBILE APP • ALL-IN-ONE PORTAL'}
                </motion.span>

              {/* Dynamic Headlines & Descriptions with AnimatePresence */}
              <AnimatePresence mode="wait">
                {phoneScreen === 'schedule' ? (
                  <motion.div
                    key="schedule"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full flex flex-col items-start"
                  >
                    <h1 className="text-4xl sm:text-6xl font-bold text-gray-950 tracking-tight leading-none mb-3">
                      1-Month Fleet Schedule.
                    </h1>
                    <h2 className="text-2xl sm:text-4xl font-bold text-[#1267E5] tracking-tight leading-tight mb-4">
                      Interactive Airline Operations.
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed mb-6 max-w-xl">
                      The Joya Fleet Mobile App provides an interactive 30-day calendar matrix of all airline flights. Inspect commercial schedules, operating crew assignments, and aircraft registrations with instant date selection and Zulu timing.
                    </p>
                    
                    {/* Metric pills for 1-Month Schedule */}
                    <div className="grid grid-cols-2 gap-3 w-full mb-6 pt-4 border-t border-gray-200">
                      <div className="bg-gray-50 p-3 rounded-xl border border-gray-200/80 text-left">
                        <div className="flex items-center gap-1 text-[#1267E5] mb-1 font-bold text-xs">
                          <CalendarDays size={14} /> 30-Day Grid
                        </div>
                        <p className="text-[11px] text-gray-600">Real-time crew & tail lookup</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-xl border border-gray-200/80 text-left">
                        <div className="flex items-center gap-1 text-[#1267E5] mb-1 font-bold text-xs">
                          <Clock size={14} /> UTC Zulu Times
                        </div>
                        <p className="text-[11px] text-gray-600">Standard aviation departure/arrival</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="home"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full flex flex-col items-start"
                  >
                    <h1 className="text-4xl sm:text-6xl font-bold text-gray-950 tracking-tight leading-none mb-3">
                      Digital Aircrew Portal.
                    </h1>
                    <h2 className="text-2xl sm:text-4xl font-bold text-[#1267E5] tracking-tight leading-tight mb-4">
                      All-in-One Mobile Suite.
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed mb-6 max-w-xl">
                      The Joya Fleet Mobile App connects pilots, cabin crew, and dispatchers in one unified mobile platform. Access personal flight rosters, standby duties, offline flight manuals, leave & duty swap requests, and encrypted crew messaging.
                    </p>

                    {/* Metric pills for Overall App Suite */}
                    <div className="grid grid-cols-2 gap-3 w-full mb-6 pt-4 border-t border-gray-200">
                      <div className="bg-gray-50 p-3 rounded-xl border border-gray-200/80 text-left">
                        <div className="flex items-center gap-1 text-[#1267E5] mb-1 font-bold text-xs">
                          <WifiOff size={14} /> Offline First EFB
                        </div>
                        <p className="text-[11px] text-gray-600">Full roster & manual access in flight</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-xl border border-gray-200/80 text-left">
                        <div className="flex items-center gap-1 text-[#10B981] mb-1 font-bold text-xs">
                          <Layers size={14} /> 7 Core Modules
                        </div>
                        <p className="text-[11px] text-gray-600">Rosters, duties, docs & comms</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Screen Mode Switcher Pills */}
              <div className="w-full bg-[#071B33] p-1.5 rounded-xl flex items-center gap-2 mb-8 border border-[#1267E5]/30">
                <button
                  type="button"
                  onClick={() => {
                    setPhoneScreen('schedule');
                    setActiveFeatureId('schedule');
                  }}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold tracking-wide transition-all flex items-center justify-center gap-1.5 ${
                    phoneScreen === 'schedule'
                      ? 'bg-[#86BF02] text-gray-950 shadow-md font-extrabold'
                      : 'text-blue-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <CalendarDays size={14} />
                  <span>📅 Month Schedule View</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPhoneScreen('home');
                    setActiveFeatureId('my-schedule');
                  }}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold tracking-wide transition-all flex items-center justify-center gap-1.5 ${
                    phoneScreen === 'home'
                      ? 'bg-[#1267E5] text-white shadow-md font-extrabold'
                      : 'text-blue-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Smartphone size={14} />
                  <span>📱 Menu / Roster View</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  to="/contact?intent=demo"
                  className="bg-[#EE1C25] hover:bg-[#D4151D] text-white text-center font-bold px-8 py-3.5 rounded-lg text-sm sm:text-base transition-colors shadow-lg shadow-[#EE1C25]/25 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Request Demo
                </Link>
                <a
                  href="#schedule-deep-dive"
                  className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 text-center font-bold px-6 py-3.5 rounded-lg text-sm sm:text-base transition-all whitespace-nowrap shadow-xs"
                >
                  Explore 1-Month Features
                </a>
              </div>
            </motion.div>

            {/* Right Interactive Phone Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              data-aos="fade-left"
              data-aos-duration="850"
              data-aos-delay="150"
              className="lg:col-span-6 flex flex-col items-center justify-center"
            >
              
              {/* Interactive Phone Screen Title Bar Indicator */}
              <div className="mb-3 px-4 py-1.5 bg-gray-900/90 backdrop-blur-md text-white rounded-full text-xs font-mono flex items-center gap-2 border border-white/20 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#86BF02] animate-pulse" />
                <span>Live Interactive Screen:</span>
                <span className="font-bold text-[#39BFF8] uppercase">
                  {phoneScreen === 'schedule' ? 'Schedule (August 2026)' : 'Home Panel'}
                </span>
              </div>

              {/* Ultra-realistic Smartphone Device Frame */}
              <div className="relative w-full max-w-[340px] sm:max-w-[390px] bg-[#071324] p-3 sm:p-4 rounded-[44px] shadow-2xl border-4 border-[#1E293B] ring-1 ring-white/20">
                
                {/* Phone Speaker & Camera Dynamic Island Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-50 flex items-center justify-center pointer-events-none">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111827] mr-2" />
                  <div className="w-2 h-2 rounded-full bg-[#0369A1]/60" />
                </div>

                {/* Inner Screen Canvas */}
                <div className="relative w-full bg-[#F4F7FB] rounded-[34px] overflow-hidden flex flex-col h-[670px] sm:h-[720px] border border-gray-300/40 text-gray-900 shadow-inner select-none">
                  
                  {/* Top Status Bar (Time, Wifi, Battery) */}
                  <div className="bg-[#002D70] text-white px-6 pt-3 pb-1 flex justify-between items-center text-[10px] font-mono z-40">
                    <span className="font-bold">09:41</span>
                    <div className="flex items-center gap-2">
                      <span>5G</span>
                      <span>100%</span>
                    </div>
                  </div>

                  {/* ========================================================================= */}
                  {/* VIEW A: SCHEDULE MONTH VIEW (EXACT REPLICA OF 2ND SCREENSHOT) */}
                  {/* ========================================================================= */}
                  {phoneScreen === 'schedule' && (
                    <div className="flex-1 flex flex-col overflow-hidden bg-white text-gray-900">
                      
                      {/* Top Header Bar */}
                      <div className="bg-[#002D70] text-white px-4 py-3 flex items-center justify-between shadow-md relative z-30">
                        <button 
                          type="button" 
                          onClick={() => setPhoneScreen('home')}
                          aria-label="Back to home" 
                          className="p-1.5 text-white hover:text-[#39BFF8] transition-colors rounded-lg active:bg-white/10"
                        >
                          <ChevronLeft size={22} />
                        </button>

                        <h3 className="font-bold text-base tracking-wide font-sans text-center">
                          Schedule
                        </h3>

                        <div className="flex items-center gap-1">
                          <button 
                            type="button" 
                            onClick={() => setSelectedDay('19')}
                            aria-label="Refresh Schedule" 
                            title="Reset to 19 Aug"
                            className="p-1.5 text-white hover:text-[#39BFF8] transition-colors rounded-lg active:bg-white/10"
                          >
                            <RotateCw size={18} />
                          </button>
                          <button 
                            type="button" 
                            onClick={() => setFilterActive(!filterActive)}
                            aria-label="Filter" 
                            className={`p-1.5 rounded-lg transition-colors ${
                              filterActive ? 'bg-[#39BFF8] text-[#002D70]' : 'text-white hover:text-[#39BFF8]'
                            }`}
                          >
                            <Filter size={18} />
                          </button>
                        </div>
                      </div>

                      {/* Filter Overlay Bar (when filter is toggled) */}
                      {filterActive && (
                        <div className="bg-[#071B33] text-white px-4 py-2 flex items-center justify-between text-xs border-b border-[#1267E5]/30">
                          <span className="font-mono text-blue-200">Filter Aircraft:</span>
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => setFilterAircraft('all')}
                              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                filterAircraft === 'all' ? 'bg-[#86BF02] text-gray-950' : 'bg-white/10 text-white'
                              }`}
                            >
                              ALL
                            </button>
                            <button
                              type="button"
                              onClick={() => setFilterAircraft('EP-SIM')}
                              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                filterAircraft === 'EP-SIM' ? 'bg-[#86BF02] text-gray-950' : 'bg-white/10 text-white'
                              }`}
                            >
                              EP-SIM
                            </button>
                            <button
                              type="button"
                              onClick={() => setFilterAircraft('EP-SIJ')}
                              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                filterAircraft === 'EP-SIJ' ? 'bg-[#86BF02] text-gray-950' : 'bg-white/10 text-white'
                              }`}
                            >
                              EP-SIJ
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Month Title & Navigation Strip */}
                      <div className="px-4 py-2.5 flex items-center justify-between bg-white border-b border-gray-200">
                        <span className="font-bold text-sm text-gray-900 font-sans">
                          2026 August
                        </span>

                        <div className="flex items-center gap-1.5">
                          <button 
                            type="button"
                            onClick={() => setSelectedDay('19')}
                            className="bg-white border border-gray-300 text-gray-700 text-xs px-2.5 py-1 rounded font-medium hover:bg-gray-50 active:scale-95 transition-all shadow-2xs"
                          >
                            Today
                          </button>
                          <button 
                            type="button"
                            aria-label="Previous month"
                            className="bg-white border border-gray-300 text-gray-700 p-1 rounded hover:bg-gray-50 active:scale-95 transition-all shadow-2xs"
                          >
                            <ChevronLeft size={14} />
                          </button>
                          <button 
                            type="button"
                            aria-label="Next month"
                            className="bg-white border border-gray-300 text-gray-700 p-1 rounded hover:bg-gray-50 active:scale-95 transition-all shadow-2xs"
                          >
                            <ChevronRight size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Day Name Columns (Sun Mon Tue Wed Thu Fri Sat) */}
                      <div className="grid grid-cols-7 text-center bg-white text-[11px] font-medium text-gray-700 py-1 border-b border-gray-200">
                        <span>Sun</span>
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                      </div>

                      {/* Lime Green Calendar Grid (Exact reproduction of screenshot 2) */}
                      <div className="grid grid-cols-7 gap-[1px] bg-white border-b border-gray-300 relative z-10">
                        {augustDays.map((cell) => {
                          const isSelected = selectedDay === cell.display && cell.isCurrentMonth;
                          const isAug17 = cell.display === '17' && cell.isCurrentMonth;
                          const isAug19Default = cell.display === '19' && cell.isCurrentMonth;

                          return (
                            <button
                              key={cell.key}
                              type="button"
                              onClick={() => {
                                if (cell.isCurrentMonth) {
                                  handleSelectDay(cell.display);
                                }
                              }}
                              className={`h-9 sm:h-10 relative p-1 text-right flex flex-col justify-between transition-all select-none group ${
                                cell.isCurrentMonth
                                  ? 'bg-[#8CBD00] hover:brightness-105 active:scale-95'
                                  : 'bg-[#9ECE1A]/80 opacity-80'
                              } ${isSelected ? 'ring-2 ring-[#002D70] ring-inset z-10' : ''}`}
                            >
                              <div className="flex justify-end items-center w-full">
                                {isAug19Default || isSelected ? (
                                  <span className="w-5 h-5 rounded-full bg-[#002D70] text-white flex items-center justify-center text-[10px] font-bold shadow-xs transition-transform group-hover:scale-110">
                                    {cell.display}
                                  </span>
                                ) : (
                                  <span className={`text-[10px] font-bold pr-0.5 leading-none ${
                                    isAug17 ? 'text-[#EE1C25]' : 'text-gray-900'
                                  }`}>
                                    {cell.display}
                                  </span>
                                )}
                              </div>

                              {/* Red indicator line on day 17 */}
                              {isAug17 && (
                                <div className="w-full h-0.5 bg-[#EE1C25] mt-auto rounded-full" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Interactive Drag & Slide Animated Bottom Sheet */}
                      <div 
                        style={{ height: `${sheetHeight}px` }}
                        className={`absolute inset-x-0 bottom-0 bg-white rounded-t-2xl sm:rounded-t-3xl shadow-[0_-8px_30px_rgba(0,45,112,0.22)] border-t-2 border-[#002D70]/20 z-30 flex flex-col overflow-hidden ${
                          isDragging ? 'transition-none cursor-grabbing' : 'transition-[height] duration-300 ease-out'
                        }`}
                      >
                        {/* Draggable Handle Header Bar - Works with Mouse Drag and Touch */}
                        <div 
                          onPointerDown={handlePointerDown}
                          onPointerMove={handlePointerMove}
                          onPointerUp={handlePointerUp}
                          onPointerCancel={handlePointerUp}
                          className="w-full pt-2 pb-1.5 px-3.5 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200 cursor-grab active:cursor-grabbing select-none flex flex-col items-center shrink-0 group relative hover:bg-gray-100/80 transition-colors"
                          title="Click & Drag up/down with mouse to adjust flight view"
                        >
                          {/* Visual Drag Handle Pill */}
                          <div className="w-12 h-1.5 bg-gray-300 rounded-full group-hover:bg-[#002D70] transition-colors mb-1.5" />
                          
                          <div className="w-full flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                              <span className="font-bold text-xs text-gray-900 font-sans">
                                Aug {selectedDay}, 2026
                              </span>
                              <span className="text-[10px] text-gray-500 font-mono hidden sm:inline">
                                • {displayedFlights.length} Flights
                              </span>
                            </div>

                            {/* Center Drag Hint Pill */}
                            <div className="flex items-center gap-1 text-[10px] text-gray-400 font-mono bg-white px-2 py-0.5 rounded-md border border-gray-200 shadow-2xs group-hover:text-[#002D70]">
                              <GripHorizontal size={12} className="text-gray-400 group-hover:text-[#002D70]" />
                              <span className="font-medium">↕ Drag with mouse</span>
                            </div>

                            {/* Snap Toggle Buttons */}
                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleSheetExpand();
                                }}
                                className="p-1 text-gray-500 hover:text-[#002D70] hover:bg-gray-200 rounded transition-colors"
                                title={sheetHeight > 400 ? 'Collapse sheet' : 'Expand full screen'}
                              >
                                {sheetHeight > 400 ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Selected Date Summary & Filter Strip */}
                        <div className="px-3.5 py-1.5 flex items-center justify-between text-xs text-gray-600 font-mono bg-blue-50/60 border-b border-blue-100 shrink-0">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-700 font-bold">Scheduled Flights</span>
                            <span className="text-[11px] px-1.5 py-0.2 bg-[#002D70] text-white rounded font-bold">
                              UTC Zulu
                            </span>
                          </div>
                          <span className="text-[#10B981] font-bold text-[11px]">
                            {displayedFlights.length} Active Legs
                          </span>
                        </div>

                        {/* Animated Flights List Container */}
                        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1.5 scrollbar-thin">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={`${selectedDay}-${filterAircraft}`}
                              initial={{ y: 35, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -20, opacity: 0 }}
                              transition={{ duration: 0.22, ease: "easeOut" }}
                              className="space-y-1.5"
                            >
                              {displayedFlights.map((fl) => (
                                <button
                                  key={fl.flightNo}
                                  type="button"
                                  onClick={() => setSelectedFlight(fl)}
                                  className="w-full text-left bg-white hover:bg-gray-50 active:bg-blue-50/50 p-2.5 rounded-xl border border-gray-200/90 shadow-2xs transition-all relative overflow-hidden group flex flex-col gap-1.5 select-none"
                                >
                                  {/* Left Colored Accent Bar */}
                                  <div 
                                    className="absolute top-0 left-0 bottom-0 w-1" 
                                    style={{ backgroundColor: fl.accentColor }} 
                                  />

                                  {/* Line 1: Flight No, Dep/Arr UTC times, Tail Registration */}
                                  <div className="flex items-center justify-between text-xs pl-2">
                                    <div className="flex items-center gap-2">
                                      <span className="font-bold text-[#002D70] font-mono text-sm">
                                        {fl.flightNo}
                                      </span>
                                      <span className="text-gray-500 font-mono text-[11px]">
                                        {fl.depTime} <strong className="text-gray-900">{fl.depAirport}</strong>
                                      </span>
                                      <Plane size={10} className="text-gray-400 rotate-90" />
                                      <span className="text-gray-500 font-mono text-[11px]">
                                        <strong className="text-gray-900">{fl.arrAirport}</strong> {fl.arrTime}
                                      </span>
                                    </div>

                                    <div className="flex items-center gap-1.5 text-gray-500 text-[11px] font-mono">
                                      <span className="font-bold text-gray-800 bg-gray-100 px-1.5 py-0.5 rounded">
                                        {fl.aircraft}
                                      </span>
                                      <ChevronRight size={13} className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                  </div>

                                  {/* Line 2: Crew Assignments */}
                                  <div className="flex items-center gap-1 text-[10px] text-gray-600 font-mono pl-2 truncate">
                                    <Plane size={10} className="text-gray-400 shrink-0" />
                                    <span className="text-gray-400 font-bold">Crew :</span>
                                    <span className="text-gray-700 tracking-tighter truncate font-semibold">
                                      {fl.crew}
                                    </span>
                                  </div>
                                </button>
                              ))}
                            </motion.div>
                          </AnimatePresence>
                        </div>

                      </div>

                      {/* Flight Details Modal inside phone */}
                      {selectedFlight && (
                        <div className="absolute inset-x-0 bottom-0 bg-[#071B33] text-white p-4 rounded-t-3xl shadow-2xl border-t border-[#1267E5]/40 z-40 animate-in slide-in-from-bottom duration-200">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <span className="text-[10px] font-mono text-[#39BFF8] uppercase">FLIGHT DETAILS</span>
                              <h4 className="text-lg font-bold text-white font-mono">
                                Flight #{selectedFlight.flightNo} • {selectedFlight.aircraft}
                              </h4>
                            </div>
                            <button
                              type="button"
                              onClick={() => setSelectedFlight(null)}
                              className="text-xs bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded-full font-mono"
                            >
                              Close ✕
                            </button>
                          </div>

                          <div className="bg-[#002D70]/80 p-2.5 rounded-xl border border-white/10 text-xs font-mono space-y-1 mb-2">
                            <div className="flex justify-between">
                              <span className="text-gray-300">Routing:</span>
                              <span className="font-bold text-white">{selectedFlight.depAirport} ➔ {selectedFlight.arrAirport}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-300">Zulu Time:</span>
                              <span className="text-white">{selectedFlight.depTime} to {selectedFlight.arrTime}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-300">Status:</span>
                              <span className="text-[#10B981] font-bold">{selectedFlight.status}</span>
                            </div>
                          </div>

                          <div className="text-[10px] font-mono text-gray-300">
                            <span className="text-[#39BFF8] block font-bold mb-0.5">Assigned Operating Crew:</span>
                            <p className="bg-black/30 p-1.5 rounded border border-white/5 break-all text-blue-100">
                              {selectedFlight.crew}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Floating Action Button (Bell) */}
                      <button
                        type="button"
                        onClick={() => setActiveFeatureId('notifications')}
                        aria-label="Open notifications"
                        className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-[#002D70] hover:bg-[#1267E5] text-white shadow-xl flex items-center justify-center z-30 transition-transform active:scale-95 border-2 border-white"
                      >
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#EE1C25] border-2 border-[#002D70]" />
                      </button>

                    </div>
                  )}

                  {/* ========================================================================= */}
                  {/* VIEW B: HOME & CREW PANEL VIEW (EXACT REPLICA OF 1ST SCREENSHOT) */}
                  {/* ========================================================================= */}
                  {phoneScreen === 'home' && (
                    <div className="flex-1 flex flex-col overflow-hidden bg-[#F4F7FB]">
                      
                      {/* Header Bar - Exactly as in the 1st user screenshot */}
                      <div className="bg-[#002D70] text-white px-5 pt-3 pb-6 flex items-center justify-between shadow-md relative z-20">
                        <button type="button" aria-label="Menu" className="p-1 text-white hover:text-[#39BFF8] transition-colors">
                          <Menu size={20} />
                        </button>

                        <div className="flex flex-col items-center">
                          <span className="font-extrabold text-lg tracking-wider font-sans leading-none">JOYA</span>
                          <span className="text-[9px] font-mono text-blue-200 tracking-widest mt-0.5">ADM</span>
                        </div>

                        <button 
                          type="button" 
                          onClick={() => setActiveFeatureId('notifications')}
                          aria-label="Notifications" 
                          className="p-1 text-white hover:text-[#39BFF8] relative"
                        >
                          <Bell size={20} />
                          <span className="absolute top-0 right-0 w-2 h-2 bg-[#EE1C25] rounded-full ring-2 ring-[#002D70]" />
                        </button>
                      </div>

                      {/* Profile Strip - Below Header */}
                      <div className="bg-[#002D70] px-5 pb-5 pt-1 text-white flex items-center justify-between relative z-10 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-[#071B33] border border-white/20 flex items-center justify-center font-bold text-sm text-white">
                              A
                            </div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#10B981] border-2 border-[#002D70] rounded-full" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-semibold">Admin</span>
                              <span className="w-1 h-1 rounded-full bg-white/40" />
                              <span className="text-[10px] text-[#10B981] bg-[#10B981]/20 px-1.5 py-0.2 rounded-full font-medium">Online</span>
                            </div>
                          </div>
                        </div>
                        <span className="bg-[#071B33]/80 border border-white/10 text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-md text-blue-200">
                          ADMIN
                        </span>
                      </div>

                      {/* Scrollable Screen Content */}
                      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 relative z-10 scrollbar-none">
                        
                        {/* Active Flight Preview Card */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/90 relative overflow-hidden">
                          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#10B981]" />
                          
                          <div className="flex justify-between items-center mb-2 pl-2">
                            <div className="flex items-center gap-1.5">
                              <span className="w-1 h-3.5 bg-[#10B981] rounded-full inline-block" />
                              <span className="text-base font-bold text-[#10B981]">184</span>
                            </div>
                            <span className="bg-emerald-50 text-[#10B981] text-[10px] font-bold px-2 py-0.5 rounded-md border border-emerald-200">
                              #1
                            </span>
                          </div>

                          <div className="flex items-center justify-between pl-2 my-2">
                            <div className="text-left">
                              <span className="text-sm font-bold text-gray-900 block">07:05</span>
                              <span className="text-[10px] text-gray-500 font-mono uppercase">THR</span>
                            </div>

                            <div className="flex-1 flex flex-col items-center px-3">
                              <Plane size={14} className="text-[#10B981] rotate-90 my-0.5" />
                              <div className="w-full border-t border-dashed border-gray-300" />
                            </div>

                            <div className="text-right">
                              <span className="text-sm font-bold text-gray-900 block">08:35</span>
                              <span className="text-[10px] text-gray-500 font-mono uppercase">PGU</span>
                            </div>
                          </div>

                          <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono pt-2 border-t border-gray-100 pl-2">
                            <div className="flex items-center gap-1">
                              <Plane size={11} className="text-gray-400" />
                              <span>EP-SIJ</span>
                            </div>
                            <span>Oct 11</span>
                          </div>
                        </div>

                        {/* App Feature Blocks List */}
                        <div className="space-y-2.5">
                          {appFeatures.slice(0, 6).map((feat) => {
                            const IconComp = feat.icon;
                            const isSelected = feat.id === activeFeatureId;

                            return (
                              <button
                                key={feat.id}
                                type="button"
                                onClick={() => {
                                  setActiveFeatureId(feat.id);
                                  if (feat.id === 'schedule') {
                                    setPhoneScreen('schedule');
                                  }
                                }}
                                className={`w-full bg-white rounded-2xl p-3 sm:p-3.5 shadow-sm border transition-all text-left flex items-center justify-between relative overflow-hidden group ${
                                  isSelected 
                                    ? 'border-[#1267E5] ring-2 ring-[#1267E5]/30 shadow-md' 
                                    : 'border-gray-200/80 hover:border-gray-300 hover:shadow-xs'
                                }`}
                              >
                                {/* Left colored border strip */}
                                <div className={`absolute top-0 left-0 bottom-0 w-1.5 ${feat.borderAccent.replace('border-l-', 'bg-')}`} />

                                <div className="flex items-center gap-3 pl-2">
                                  {/* Soft rounded icon box */}
                                  <div className={`w-10 h-10 rounded-xl ${feat.iconBg} flex items-center justify-center shrink-0`}>
                                    <IconComp size={18} />
                                  </div>

                                  <div className="pr-2">
                                    <div className="flex items-center gap-1.5">
                                      <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                                        {feat.name}
                                      </h3>
                                      {feat.id === 'schedule' && (
                                        <span className="bg-[#86BF02]/20 text-[#86BF02] text-[9px] font-bold px-1.5 rounded">
                                          1-Month
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-[10px] text-gray-500 leading-tight mt-0.5 line-clamp-1">
                                      {feat.shortDesc}
                                    </p>
                                  </div>
                                </div>

                                <ChevronRight size={14} className="text-gray-400 group-hover:text-gray-700 group-hover:translate-x-0.5 transition-all shrink-0" />
                              </button>
                            );
                          })}
                        </div>

                      </div>

                      {/* Floating Action Button */}
                      <button
                        type="button"
                        onClick={() => setActiveFeatureId('notifications')}
                        aria-label="Open notifications"
                        className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-[#002D70] hover:bg-[#1267E5] text-white shadow-xl flex items-center justify-center z-30 transition-transform active:scale-95 border-2 border-white"
                      >
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#EE1C25] border-2 border-[#002D70]" />
                      </button>

                    </div>
                  )}

                  {/* Phone Bottom Gesture Bar Indicator */}
                  <div className="bg-transparent py-2 flex justify-center z-20">
                    <div className="w-28 h-1 bg-gray-400/60 rounded-full" />
                  </div>

                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. DEDICATED DEEP DIVE: 1-MONTH FLEET SCHEDULE SECTION */}
      <section id="schedule-deep-dive" className="relative isolate py-20 sm:py-28 overflow-hidden">
        <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
          
          <div 
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-3xl mb-16 text-left"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#86BF02]/15 text-[#5e8700] border border-[#86BF02]/30 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
              <CalendarDays size={13} className="text-[#5e8700]" /> MASTER FLEET CALENDAR
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-950 mb-6">
              Schedule Module: 30-Day Master Fleet Flight Visibility
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              The Schedule module gives pilots, cabin crew, dispatchers, and operations controllers a unified 30-day calendar matrix of all scheduled commercial, charter, and ferry flights—complete with UTC Zulu timing, crew pairings, and aircraft tail allocations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div 
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="0"
              className="bg-white/85 backdrop-blur-md border border-[#1267E5]/15 hover:border-[#86BF02]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#86BF02]/15 text-[#5e8700] flex items-center justify-center mb-4 border border-[#86BF02]/25">
                  <Calendar size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Unified 30-Day Calendar Grid</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  High-visibility monthly matrix styled in aviation green with one-tap date switching and fast jumps to Today, past, or future rosters.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#5e8700] mt-4 uppercase font-bold tracking-wider">One-Tap Day Selection</span>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="100"
              className="bg-white/85 backdrop-blur-md border border-[#1267E5]/15 hover:border-[#1267E5]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1267E5]/10 text-[#1267E5] flex items-center justify-center mb-4 border border-[#1267E5]/20">
                  <Clock size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Standard UTC Zulu Timing</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Accurate Zulu departure and arrival times (e.g. 21:00 UTC IST ➔ IKA 23:55 UTC) ensuring zero time-zone confusion across international flight sectors.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#1267E5] mt-4 uppercase font-bold tracking-wider">Standard Aviation Zulu</span>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
              className="bg-white/85 backdrop-blur-md border border-[#1267E5]/15 hover:border-[#8B5CF6]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center mb-4 border border-[#8B5CF6]/20">
                  <Users size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Operating Crew Composition</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Direct visibility of complete operating crew rosters (Captain, First Officer, Lead Purser, and Flight Attendants) per flight sector.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#8B5CF6] mt-4 uppercase font-bold tracking-wider">Full Operating Crew String</span>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="300"
              className="bg-white/85 backdrop-blur-md border border-[#1267E5]/15 hover:border-[#10B981]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-4 border border-[#10B981]/20">
                  <Plane size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Aircraft Tail & Fleet Filters</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Real-time tail tracking (EP-SIM, EP-SIJ) with instant interactive filtering by aircraft type and live flight operational status.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#10B981] mt-4 uppercase font-bold tracking-wider">Aircraft Tail Tracking</span>
            </div>

          </div>

        </div>
      </section>

      {/* 3. DETAILED BREAKDOWN OF ALL 7 CORE MOBILE MODULES */}
      <section id="mobile-features" className="relative isolate py-20 sm:py-28 overflow-hidden">
        <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
          
          <div 
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-3xl mb-16 text-left"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
              <Sparkles size={12} className="text-[#1267E5]" /> 7 CORE MOBILE PILLARS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-6">
              Complete functionality for pilots and cabin crew.
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Every section of the Joya Fleet Mobile Application is engineered to support fast operational decisions, strict FTL compliance, and smooth communications between aircrew and OCC.
            </p>
          </div>

          {/* Feature Details Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appFeatures.map((feature, idx) => {
              const IconComponent = feature.icon;
              const isCurrent = feature.id === activeFeatureId;

              return (
                <div
                  key={feature.id}
                  id={`feature-${feature.id}`}
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay={(idx % 3) * 100}
                  className={`bg-white/85 backdrop-blur-md rounded-2xl sm:rounded-3xl p-7 border transition-all flex flex-col justify-between shadow-xs relative overflow-hidden group hover:shadow-lg ${
                    isCurrent 
                      ? 'border-[#86BF02] shadow-lg ring-2 ring-[#86BF02]/30' 
                      : 'border-gray-200/80 hover:border-gray-300'
                  }`}
                >
                  {/* Left colored decorative strip */}
                  <div className={`absolute top-0 left-0 bottom-0 w-1.5 ${feature.borderAccent.replace('border-l-', 'bg-')}`} />

                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-5 pl-2">
                      <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center shadow-xs`}>
                        <IconComponent size={22} />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-gray-400 font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="pl-2 mb-4">
                      <span className="text-[10px] font-mono tracking-wider font-bold uppercase text-[#1267E5] block mb-1">
                        {feature.badge}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                        {feature.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 pl-2">
                      {feature.fullDesc}
                    </p>

                    {/* Capabilities list */}
                    <div className="border-t border-gray-200/80 pt-5 mb-6 pl-2">
                      <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase block mb-3 font-bold">
                        KEY CAPABILITIES
                      </span>
                      <ul className="space-y-2">
                        {feature.capabilities.map((cap, cIdx) => (
                          <li key={cIdx} className="text-xs text-gray-700 flex items-start gap-2">
                            <CheckCircle2 size={13} className="text-[#10B981] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Operational Value Box */}
                  <div className="bg-white/90 rounded-xl p-3.5 border border-gray-200/80 text-left pl-3.5 shadow-2xs">
                    <span className="text-[9px] font-mono tracking-widest text-[#1267E5] font-bold block uppercase mb-1">
                      OPERATIONAL VALUE
                    </span>
                    <p className="text-xs text-gray-600 italic leading-relaxed">
                      {feature.operationalValue}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. MOBILE ARCHITECTURE & AIRLINE INTEGRATION */}
      <section className="relative isolate py-20 sm:py-28 overflow-hidden">
        <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
          
          <div 
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-3xl mb-16 text-left"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 font-mono">
              <ShieldCheck size={12} className="text-[#1267E5]" /> ENGINEERED FOR FLIGHT OPERATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-950 mb-6">
              Built for high reliability in aviation environments.
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Aircrews operate across varying network conditions, multiple time zones, and strict safety guidelines. Joya Mobile is designed to maintain data integrity at all times.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div 
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="0"
              className="bg-white/85 backdrop-blur-md border border-[#1267E5]/15 hover:border-[#1267E5]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1267E5]/10 text-[#1267E5] flex items-center justify-center mb-4 border border-[#1267E5]/20">
                  <WifiOff size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Offline-First Architecture</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Local encrypted SQLite storage keeps full rosters, manuals, and briefing packages available in flight without cellular reception.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#1267E5] mt-4 uppercase font-bold tracking-wider">Auto-Sync On Reconnect</span>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="100"
              className="bg-white/85 backdrop-blur-md border border-[#1267E5]/15 hover:border-[#1267E5]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1267E5]/10 text-[#1267E5] flex items-center justify-center mb-4 border border-[#1267E5]/20">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Role-Based Access Control</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Strict permission tiers separating Captain, First Officer, Purser, Cabin Crew, and Dispatcher views.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#1267E5] mt-4 uppercase font-bold tracking-wider">Crew Level Security</span>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
              className="bg-white/85 backdrop-blur-md border border-[#1267E5]/15 hover:border-[#1267E5]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1267E5]/10 text-[#1267E5] flex items-center justify-center mb-4 border border-[#1267E5]/20">
                  <Clock size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Multi Time-Zone Engine</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Seamless conversion between UTC Zulu, Base Time, and Station Local Times to prevent briefing confusion during international routes.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#1267E5] mt-4 uppercase font-bold tracking-wider">UTC & Local Clocks</span>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="300"
              className="bg-white/85 backdrop-blur-md border border-[#1267E5]/15 hover:border-[#1267E5]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1267E5]/10 text-[#1267E5] flex items-center justify-center mb-4 border border-[#1267E5]/20">
                  <Download size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">EFB Class 1 & 2 Ready</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Optimized for both personal smartphones (iOS & Android) and airline-issued iPad EFB tablets mounted in the flight deck.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#1267E5] mt-4 uppercase font-bold tracking-wider">Phone & Tablet Layouts</span>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION */}
      <section className="relative isolate py-20 sm:py-32 px-5 sm:px-8 max-w-7xl mx-auto w-full pointer-events-auto">
        <div 
          data-aos="zoom-in"
          data-aos-duration="700"
          className="aviation-cta-bg rounded-3xl p-8 sm:p-16 text-white text-center relative overflow-hidden flex flex-col items-center shadow-2xl border border-[#1267E5]/30"
        >
          <div className="relative z-10 max-w-3xl flex flex-col items-center">
            <span className="text-xs font-bold text-[#39BFF8] uppercase tracking-widest mb-4 font-mono">
              CONNECT YOUR AIRCREW TODAY
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight leading-tight text-white">
              Ready to modernize your airline crew experience?
            </h2>
            <p className="text-base sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-10">
              Schedule a live demonstration of the Joya Fleet Mobile Application with our aviation solutions team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full mb-8">
              <Link 
                to="/contact?intent=demo" 
                className="w-full sm:w-auto bg-[#EE1C25] text-white font-bold px-8 py-3.5 rounded-lg text-base hover:bg-[#D4151D] transition-colors shadow-lg shadow-[#EE1C25]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Request Demo
              </Link>
              <Link 
                to="/platform" 
                className="w-full sm:w-auto text-white font-semibold text-sm sm:text-base hover:underline border border-white/30 hover:bg-white/10 px-8 py-3.5 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore Web Platform
              </Link>
            </div>
            <p className="text-xs font-mono text-[#AFC0D2] uppercase tracking-widest">
              iOS & Android • Offline EFB • Role-Based Security • Real-Time Synchronization
            </p>
          </div>
        </div>
      </section>

      </div>
    </MotionConfig>
  );
}
