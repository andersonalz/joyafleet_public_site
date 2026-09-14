"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Radio } from 'lucide-react';
import Link from './RouterLink';

const regionalLinks = [
  // One central continent node connects directly to every regional country node.
  // North America
  'M878 258L855 226', 'M878 258L821 236', 'M878 258L810 267',
  'M878 258L912 267', 'M878 258L937 298', 'M878 258L907 323',
  // South America
  'M972 438L942 407', 'M972 438L929 438', 'M972 438L998 423',
  'M972 438L1006 460', 'M972 438L948 474', 'M972 438L985 489', 'M972 438L965 510',
  // Europe
  'M1163 246L1168 213', 'M1163 246L1140 248', 'M1163 246L1178 268',
  'M1163 246L1156 287', 'M1163 246L1203 279',
  // Africa
  'M1181 382L1164 333', 'M1181 382L1134 369', 'M1181 382L1218 372',
  'M1181 382L1201 421', 'M1181 382L1184 470',
  // Asia
  'M1376 270L1416 236', 'M1376 270L1472 247', 'M1376 270L1520 275',
  'M1376 270L1342 312', 'M1376 270L1388 302', 'M1376 270L1434 334', 'M1376 270L1450 375',
  // Australia
  'M1492 490L1458 483', 'M1492 490L1516 500', 'M1492 490L1505 522',
];

const regionalNodes = [
  // North America
  { x: 855, y: 226, r: 2.4, depth: 'near' }, { x: 821, y: 236, r: 1.7, depth: 'far' },
  { x: 810, y: 267, r: 1.5, depth: 'far' }, { x: 912, y: 267, r: 2.3, depth: 'near' },
  { x: 937, y: 298, r: 1.8, depth: 'far' }, { x: 907, y: 323, r: 1.4, depth: 'far' },
  // South America
  { x: 942, y: 407, r: 2.1, depth: 'near' }, { x: 929, y: 438, r: 1.6, depth: 'far' },
  { x: 998, y: 423, r: 2.1, depth: 'near' }, { x: 1006, y: 460, r: 1.7, depth: 'far' },
  { x: 948, y: 474, r: 1.6, depth: 'far' }, { x: 985, y: 489, r: 1.5, depth: 'far' },
  { x: 965, y: 510, r: 1.2, depth: 'far' },
  // Europe
  { x: 1168, y: 213, r: 1.7, depth: 'far' }, { x: 1140, y: 248, r: 2.2, depth: 'near' },
  { x: 1178, y: 268, r: 2.2, depth: 'near' }, { x: 1156, y: 287, r: 1.6, depth: 'far' },
  { x: 1203, y: 279, r: 1.6, depth: 'far' },
  // Africa
  { x: 1164, y: 333, r: 2.2, depth: 'near' }, { x: 1134, y: 369, r: 1.6, depth: 'far' },
  { x: 1218, y: 372, r: 2.1, depth: 'near' }, { x: 1201, y: 421, r: 1.6, depth: 'far' },
  { x: 1184, y: 470, r: 1.2, depth: 'far' },
  // Asia
  { x: 1416, y: 236, r: 1.8, depth: 'far' }, { x: 1472, y: 247, r: 1.7, depth: 'far' },
  { x: 1520, y: 275, r: 1.3, depth: 'far' }, { x: 1342, y: 312, r: 2.1, depth: 'near' },
  { x: 1388, y: 302, r: 2.2, depth: 'near' }, { x: 1434, y: 334, r: 1.8, depth: 'far' },
  { x: 1450, y: 375, r: 1.4, depth: 'far' },
  // Australia
  { x: 1458, y: 483, r: 1.7, depth: 'far' }, { x: 1516, y: 500, r: 1.8, depth: 'far' },
  { x: 1505, y: 522, r: 1.3, depth: 'far' },
];

export function AviationHero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-[#061b3a] pb-14 pt-28 text-white sm:pb-16 sm:pt-32 lg:min-h-[780px] lg:pb-20 lg:pt-36">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/hero-aviation-operations-ultrawide.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,20,48,0.98)_0%,rgba(3,20,48,0.91)_32%,rgba(3,20,48,0.48)_59%,rgba(3,20,48,0.1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,15,37,0.52)_0%,transparent_45%)]" />
        <svg
          viewBox="0 0 1916 821"
          preserveAspectRatio="xMidYMid slice"
          className="pointer-events-none absolute inset-0 size-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="hero-route-glow" x="-40%" y="-80%" width="180%" height="260%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="hero-node-fill">
              <stop stopColor="#FFFFFF" />
              <stop offset=".38" stopColor="#BCEFFF" />
              <stop offset="1" stopColor="#27B8FF" />
            </radialGradient>
          </defs>
          <g transform="translate(205 0) scale(1 0.88)">
            <g className="hero-regional-network">
              {regionalLinks.map((d) => <path key={d} className="hero-regional-link" d={d} />)}
              {regionalNodes.map((node) => (
                <circle
                  key={`${node.x}-${node.y}`}
                  className={`hero-regional-node hero-regional-node--${node.depth}`}
                  cx={node.x}
                  cy={node.y}
                  r={node.r}
                />
              ))}
            </g>
            <g className="hero-routes" filter="url(#hero-route-glow)">
            {/* Requested continent-to-continent operational connections. */}
            {/* North America → Europe */}
            <path className="hero-route hero-route--slow" d="M878 258C958 184 1085 214 1163 246" />
            {/* North America → Africa */}
            <path className="hero-route hero-route--fast" d="M878 258C982 330 1076 414 1181 382" />
            {/* Asia → South America */}
            <path className="hero-route" d="M1376 270C1310 154 1175 160 1080 270C1029 330 991 390 972 438" />
            {/* Europe → Australia */}
            <path className="hero-route hero-route--slow" d="M1163 246C1257 294 1394 360 1492 490" />
            </g>
            <g filter="url(#hero-route-glow)">
            {/* One central node per visible continent. */}
            <circle className="hero-map-node" cx="878" cy="258" r="7" fill="url(#hero-node-fill)" />
            <circle className="hero-map-node hero-map-node--late" cx="972" cy="438" r="7" fill="url(#hero-node-fill)" />
            <circle className="hero-map-node hero-map-node--delayed" cx="1163" cy="246" r="7" fill="url(#hero-node-fill)" />
            <circle className="hero-map-node hero-map-node--late" cx="1181" cy="382" r="7" fill="url(#hero-node-fill)" />
            <circle className="hero-map-node" cx="1376" cy="270" r="7" fill="url(#hero-node-fill)" />
            <circle className="hero-map-node hero-map-node--delayed" cx="1492" cy="490" r="7" fill="url(#hero-node-fill)" />
            </g>
          </g>
        </svg>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1600px] px-5 sm:px-8 lg:min-h-[564px] lg:px-14 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative z-10 my-auto max-w-[610px] lg:pb-7"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-lg border border-sky-300/35 bg-sky-500/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-sky-300 shadow-[0_0_24px_rgba(34,174,255,0.12)] sm:text-xs">
            <Radio size={14} aria-hidden="true" /> Cloud-based flight operations platform
          </div>
          <h1 className="max-w-[650px] text-[clamp(2.65rem,5.05vw,4.4rem)] font-bold leading-[1.05] tracking-[-0.045em] text-white">
            Fleet &amp; Crew Management Software
            <span className="mt-2 block bg-gradient-to-r from-[#169df5] via-[#43bcff] to-[#8cdfff] bg-clip-text text-transparent">
              Built for Modern Flight Operations
            </span>
          </h1>
          <p className="mt-7 max-w-[580px] text-lg leading-8 text-slate-100 sm:text-xl sm:leading-9">
            JoyaFleet connects dispatch, crew coordination, scheduling, compliance, flight operations and reporting in one connected aviation platform.
          </p>
          <p className="mt-4 max-w-[550px] text-sm leading-6 text-sky-100/75 sm:text-base">
            Give your operations team greater visibility, smarter workflows and dependable control across the complete fleet lifecycle.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/contact?intent=demo" className="inline-flex min-h-14 items-center justify-center rounded-lg bg-[#f21f2b] px-7 text-base font-bold text-white shadow-[0_12px_26px_rgba(222,20,32,0.32)] transition hover:-translate-y-0.5 hover:bg-[#d91622] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#061b3a]">
              Request a Demo
            </Link>
            <Link to="/platform" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-7 text-base font-bold text-[#10233f] shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#061b3a]">
              Explore the Platform <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-sky-100/20 pt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-sky-100/75 sm:gap-x-4 sm:text-[11px]">
            {['Fleet Operations', 'Crew Management', 'Dispatch', 'Compliance', 'Reporting'].map((item, index) => (
              <span key={item} className="flex items-center gap-3">
                {index > 0 && <span className="size-1 rounded-full bg-sky-300" />}
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
