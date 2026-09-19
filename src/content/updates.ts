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

export const RELEASE_UPDATES: UpdateRelease[] = [
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

