export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  featured?: boolean;
  tags: string[];
  content: {
    intro: string;
    executiveSummary: string;
    sections: {
      heading: string;
      body: string[];
      quote?: string;
      bulletPoints?: string[];
    }[];
    takeaways: string[];
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "joya-role-in-airlines",
    slug: "role-of-joya-fleet-in-commercial-airlines",
    title: "The Strategic Role of Joya Fleet Software in Modern Commercial Airlines",
    excerpt: "Discover how integrated flight scheduling, live OCC dispatch, automated FTL compliance, and fleet maintenance synchronization transform airline operational efficiency, flight safety, and overall profitability.",
    category: "Airline Management",
    author: {
      name: "Captain Reza Alavi",
      role: "VP of Flight Operations & Aviation Tech",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    date: "August 2026",
    readTime: "9 min read",
    featured: true,
    tags: ["Airline Tech", "OCC Dispatch", "FTL Compliance", "Fleet Management", "Aviation Digital Transformation"],
    content: {
      intro: "In today's highly competitive global aviation ecosystem, commercial airlines operate within an environment defined by tight profit margins, demanding regulatory safety mandates (CAO IRI, EASA, FAA), and unpredictable operational disruptions. Managing an airline is no longer merely about flying aircraft—it is a high-stakes synchronization challenge involving flight crews, maintenance schedules, passenger bookings, fuel management, and real-time dispatch releases. Joya Fleet software stands at the absolute center of this digital evolution, acting as the intelligent nervous system for modern air carriers.",
      executiveSummary: "The commercial aviation industry demands seamless integration across complex operational silos. Joya Fleet connects the Operations Control Center (OCC), commercial schedule planners, crew management, continuing airworthiness (CAMO), and finance into a unified real-time ecosystem. By automating routine compliance checks and surfacing immediate predictive insights, Joya Fleet significantly lowers operating costs while ensuring uncompromising flight safety.",
      sections: [
        {
          heading: "1. Centralized Operational Control (OCC) & Live Dispatch",
          body: [
            "Traditional airline operations frequently suffer from fragmented communication between the Flight Operations Center, airport ground handling agents, and flight dispatchers. When delays occur due to adverse weather or airspace congestion, manual tracking creates costly ripple effects across downstream flight legs.",
            "Joya Fleet replaces disconnected spreadsheets and legacy terminal screens with a single, synchronized OCC control dashboard. Dispatchers and duty managers obtain instant visual feedback on flight movement logs, ATC slot allocations, and automated electronic dispatch releases, ensuring every flight departs with maximum situational awareness and minimal turnaround delay."
          ],
          quote: "By unifying scheduling and live movement tracking into a single source of truth, Joya Fleet helps airlines reduce ground delay costs by up to 30%.",
          bulletPoints: [
            "Real-time flight tracking and automated movement logs (OUT, OFF, ON, IN)",
            "Instant electronic dispatch release distribution with synchronized fuel calculations",
            "Live slot coordination and automated IATA delay code tracking"
          ]
        },
        {
          heading: "2. Automated FTL Compliance & Intelligent Crew Rostering",
          body: [
            "Flight Crew Flight Time Limitations (FTL) and duty rest requirements represent one of the most strictly enforced regulatory mandates in civil aviation. A single unintentional duty period overshoot can ground an entire crew or trigger severe regulatory sanctions from aviation authorities such as CAO IRI or EASA.",
            "Joya Fleet's built-in algorithmic FTL Engine automatically calculates flight duty periods, rest windows, cumulative flight time limits, and time zone acclimatization states in real time. Planners can draft rosters with total confidence, knowing the system surfaces potential fatigue conflicts long before duties are published to crew mobile applications."
          ],
          quote: "Automated FTL checks prevent duty period overshoots, protecting pilot alertness while dramatically easing the operational burden on crew schedulers.",
          bulletPoints: [
            "Instant validation against national and international FTL regulatory standards",
            "Real-time duty trade management and standby roster substitution",
            "Automated crew endorsement, medical certificate, and license expiry alerts"
          ]
        },
        {
          heading: "3. Seamless Fleet Availability & Maintenance Synchronization",
          body: [
            "A major source of airline operational friction occurs when commercial schedulers assign an aircraft that is due for an imperative maintenance check (A-Check, C-Check) or has pending Minimum Equipment List (MEL) restrictions.",
            "Joya Fleet bridges the gap between CAMO (Continuing Airworthiness Management Organization) and OCC operations. Commercial schedulers immediately view real-time airframe flight hours, remaining engine cycle limits, open tech log items, and planned maintenance down-times. This prevents unexpected Aircraft On Ground (AOG) emergencies and maximizes fleet availability."
          ],
          bulletPoints: [
            "Direct visibility into airframe and engine flight hours/cycles",
            "Real-time tracking of MEL deferrals and operational limitations",
            "Automated maintenance slot booking integrated with commercial schedules"
          ]
        },
        {
          heading: "4. Data-Driven Executive Analytics & Turnaround Optimization",
          body: [
            "Data is the primary currency of modern airline management. Joya Fleet captures thousands of operational data points daily—from block fuel consumption and load factors to sector punctuality and crew utilization rates.",
            "Through configurable reporting modules, airline executives gain transparent visibility into key performance indicators (KPIs). Custom reporting templates enable operators to identify ground handling bottlenecks, evaluate route profitability, and drive continuous operational excellence."
          ]
        }
      ],
      takeaways: [
        "Joya Fleet integrates flight scheduling, OCC dispatch, crew FTL compliance, and fleet maintenance into one unified ecosystem.",
        "Automated compliance engines eliminate regulatory risks and guarantee strict adherence to civil aviation mandates.",
        "Real-time fleet status synchronization prevents communication breakdowns between engineering teams and flight operations.",
        "Airlines achieve higher On-Time Performance (OTP), reduced fuel wastage, and optimal fleet asset utilization."
      ]
    }
  },
  {
    id: "ftl-automation-guide",
    slug: "automating-ftl-easa-cao-compliance",
    title: "Navigating EASA & CAO FTL Regulations with Automated Compliance Engines",
    excerpt: "How modern commercial airlines eliminate human calculation errors in pilot duty rosters using automated fatigue risk management rules and real-time FTL validation.",
    category: "Crew & Compliance",
    author: {
      name: "Sina Rezaei",
      role: "Lead Aviation Systems Architect",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    date: "July 2026",
    readTime: "6 min read",
    tags: ["FTL Engine", "Crew Safety", "Fatigue Risk", "Aviation Rules"],
    content: {
      intro: "Managing flight and duty time limitations (FTL) is one of the most critical responsibilities of any airline crew planning department. This article explores how algorithmic validation engines eliminate fatigue risks and guarantee total regulatory compliance.",
      executiveSummary: "Modern aviation safety standards demand zero errors in crew duty scheduling. Algorithmic FTL enforcement prevents pilot fatigue while giving airline crew managers complete clarity during unexpected disruptions.",
      sections: [
        {
          heading: "1. The Complexity of Multi-Leg & Night Duty FTL Calculations",
          body: [
            "Calculating duty period extensions, acclimatization states, and minimum rest periods across multiple time zones is highly error-prone when performed manually.",
            "Joya Fleet's automated engine cross-references pilot duty logs against civil aviation regulations instantly, highlighting potential violations prior to roster publication."
          ]
        },
        {
          heading: "2. Real-Time Disruption Management & Standby Swapping",
          body: [
            "When a delay occurs, duty time limits can easily be exceeded. Joya Fleet automatically suggests qualified standby crew members who comply with rest rules.",
            "This automated logic prevents grounded aircraft caused by crew duty timeout violations."
          ]
        }
      ],
      takeaways: [
        "Instant warning alerts for duty time overshoots.",
        "Seamless integration with crew mobile schedule apps.",
        "Complete audit trail for civil aviation authority inspections."
      ]
    }
  },
  {
    id: "aog-reduction-strategies",
    slug: "reducing-aog-with-connected-maintenance",
    title: "Bridging the Gap Between Engineering and OCC to Minimize AOG Situations",
    excerpt: "Explore practical workflows for sharing aircraft tech log statuses directly with flight dispatchers to prevent operational cancellations and unscheduled grounded aircraft.",
    category: "Fleet Maintenance",
    author: {
      name: "Eng. Maryam Hassani",
      role: "CAMO & Maintenance Systems Specialist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    date: "June 2026",
    readTime: "7 min read",
    tags: ["CAMO", "AOG Prevention", "Tech Log", "Maintenance Sync"],
    content: {
      intro: "Aircraft On Ground (AOG) events represent the most expensive unscheduled operational disruption for commercial airlines. Connecting CAMO data directly with dispatch reduces turnaround friction dramatically.",
      executiveSummary: "Preventing costly AOG cancellations requires live synchronization between maintenance engineering and dispatch. Live MEL status sharing empowers dispatchers to make informed fleet assignment decisions.",
      sections: [
        {
          heading: "1. Real-Time MEL Expiration & Deferred Defect Visibility",
          body: [
            "By embedding Minimum Equipment List (MEL) expiration timers inside the OCC flight dispatch dashboard, dispatchers never assign restricted airframes to incompatible routes.",
            "This proactive synchronization ensures engineering teams have sufficient ground windows for scheduled maintenance without disrupting commercial revenue flights."
          ]
        },
        {
          heading: "2. Predictive Part Replacements & Work Order Tracking",
          body: [
            "Tracking component flight cycles allows maintenance managers to order replacement parts prior to failure, eliminating long AOG waits at remote outstations."
          ]
        }
      ],
      takeaways: [
        "Live visibility into airframe flying hours and remaining engine cycles.",
        "Proactive scheduling of maintenance slots during low-demand periods.",
        "Significant reduction in emergency charter and cancellation costs."
      ]
    }
  },
  {
    id: "slot-coordination-gantt",
    slug: "mastering-airport-slot-coordination-gantt",
    title: "Mastering Airport Slot Allocation and Interactive Gantt Schedule Drafting",
    excerpt: "How schedule planners handle seasonal timetable creation, airport slot constraint checks, and fleet assignment using high-performance interactive Gantt timelines.",
    category: "Airline Management",
    author: {
      name: "Kaveh Shahrouzi",
      role: "Senior Flight Scheduling Director",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    date: "May 2026",
    readTime: "8 min read",
    tags: ["Flight Scheduling", "Airport Slots", "Gantt Timeline", "Commercial Planning"],
    content: {
      intro: "Creating a profitable airline timetable requires balancing airport slot availability, aircraft rotation constraints, maintenance buffers, and passenger demand forecast curves.",
      executiveSummary: "Visualizing complex airline schedules on drag-and-drop Gantt timelines reduces drafting time from weeks to hours, with instant collision detection for airport slot limits and aircraft ground times.",
      sections: [
        {
          heading: "1. Conflict-Free Timetable Drafting",
          body: [
            "With Joya Fleet's Gantt scheduling environment, planners can drag flight legs across aircraft tails while receiving real-time warnings for buffer violations or slot mismatches."
          ]
        }
      ],
      takeaways: [
        "Rapid scenario drafting for summer and winter schedules.",
        "Automated collision detection for airport slot constraints.",
        "Direct export to SSIM (Standard Schedules Information Manual) formats."
      ]
    }
  }
];

