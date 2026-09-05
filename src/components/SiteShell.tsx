"use client";

import { useEffect, type ReactNode } from 'react';
import { VideoBackground } from './VideoBackground';
import { Navbar } from './Navbar';
import { AOSManager } from './AOSManager';
import { ScrollRevealManager } from './ScrollRevealManager';

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function DynamicBackground() {
  const platformVideoUrl = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4';

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 w-full h-full">
      <VideoBackground src={platformVideoUrl} />
      <div
        aria-hidden="true"
        className="fixed inset-0 z-[1] pointer-events-none bg-gradient-to-b from-white/70 via-white/55 via-40% to-[#b6d6f8]/60 backdrop-blur-[2px]"
      />
    </div>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-transparent text-gray-900 font-sans m-0 p-0">
      <ScrollToTop />
      <AOSManager />
      <ScrollRevealManager />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gray-900 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-semibold text-sm"
      >
        Skip to main content
      </a>
      <DynamicBackground />
      <Navbar />
      <main id="main-content" className="relative z-10 w-full max-w-full overflow-x-hidden m-0 p-0">
        {children}
      </main>
    </div>
  );
}
