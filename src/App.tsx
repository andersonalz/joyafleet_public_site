/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { VideoBackground } from './components/VideoBackground';
import { Navbar } from './components/Navbar';
import { AOSManager } from './components/AOSManager';
import { ScrollRevealManager } from './components/ScrollRevealManager';

const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Platform = lazy(() => import('./pages/Platform'));
const FlightScheduling = lazy(() => import('./pages/FlightScheduling'));
const OperationsDispatch = lazy(() => import('./pages/OperationsDispatch'));
const CrewManagementFtl = lazy(() => import('./pages/CrewManagementFtl'));
const FleetMaintenance = lazy(() => import('./pages/FleetMaintenance'));
const ReportingAnalytics = lazy(() => import('./pages/ReportingAnalytics'));
const Integrations = lazy(() => import('./pages/Integrations'));
const PlatformDetailPlaceholder = lazy(() => import('./pages/PlatformDetailPlaceholder'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Security = lazy(() => import('./pages/Security'));
const Blog = lazy(() => import('./pages/Blog'));
const Updates = lazy(() => import('./pages/Updates'));
const Contact = lazy(() => import('./pages/Contact'));
const OurApps = lazy(() => import('./pages/OurApps'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-[60vh] flex items-center justify-center p-8 bg-[#f4f5f7] text-gray-700"
    >
      <div className="flex items-center gap-3 font-mono text-sm tracking-wide uppercase">
        <div className="w-2 h-2 rounded-full bg-gray-900 animate-ping" />
        <span>Loading page…</span>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function DynamicBackground() {
  const platformVideoUrl = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4";

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 w-full h-full">
      <VideoBackground src={platformVideoUrl} />
      {/* Semi-transparent vertical gradient overlay from top to bottom ensuring high video visibility and clear contrast */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-[1] pointer-events-none bg-gradient-to-b from-white/70 via-white/55 via-40% to-[#b6d6f8]/60 backdrop-blur-[2px]"
      />
    </div>
  );
}

function AppContent() {
  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-transparent text-gray-900 font-sans m-0 p-0">
      <DynamicBackground />
      
      <Navbar />

      <main id="main-content" className="relative z-10 w-full max-w-full overflow-x-hidden m-0 p-0">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/platform/flight-scheduling" element={<FlightScheduling />} />
            <Route path="/platform/operations-dispatch" element={<OperationsDispatch />} />
            <Route path="/platform/crew-management-ftl" element={<CrewManagementFtl />} />
            <Route path="/platform/fleet-maintenance" element={<FleetMaintenance />} />
            <Route path="/platform/reporting-analytics" element={<ReportingAnalytics />} />
            <Route path="/platform/integrations" element={<Integrations />} />
            <Route path="/platform/:module" element={<PlatformDetailPlaceholder />} />

            <Route path="/product" element={<Platform />} />
            <Route path="/product/flight-scheduling" element={<FlightScheduling />} />
            <Route path="/product/operations-dispatch" element={<OperationsDispatch />} />
            <Route path="/product/crew-management-ftl" element={<CrewManagementFtl />} />
            <Route path="/product/fleet-maintenance" element={<FleetMaintenance />} />
            <Route path="/product/reporting-analytics" element={<ReportingAnalytics />} />
            <Route path="/product/integrations" element={<Integrations />} />
            <Route path="/product/:module" element={<PlatformDetailPlaceholder />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/security" element={<Security />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/updates/:slug" element={<Updates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/our-apps" element={<OurApps />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AOSManager />
      <ScrollRevealManager />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gray-900 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-semibold text-sm"
      >
        Skip to main content
      </a>
      <AppContent />
    </BrowserRouter>
  );
}
