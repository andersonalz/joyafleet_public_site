"use client";

import { useEffect, useRef, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
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
  const backgroundRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return;

    let animationFrame: number | null = null;
    let observedHero: HTMLElement | null = null;
    const resizeObserver = new ResizeObserver(() => scheduleUpdate());

    const updateRevealBoundary = () => {
      animationFrame = null;
      const hero = document.getElementById('hero');

      if (hero !== observedHero) {
        if (observedHero) resizeObserver.unobserve(observedHero);
        observedHero = hero;
        if (observedHero) resizeObserver.observe(observedHero);
      }

      // A missing hero means the video is visible from the top of that page.
      const revealTop = hero ? Math.max(0, hero.getBoundingClientRect().bottom) : 0;
      background.style.setProperty('--video-reveal-top', `${revealTop}px`);
    };

    const scheduleUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateRevealBoundary);
      }
    };

    const contentObserver = new MutationObserver(scheduleUpdate);
    const main = document.getElementById('main-content');
    contentObserver.observe(main ?? document.body, { childList: true, subtree: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    scheduleUpdate();

    return () => {
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
      if (observedHero) resizeObserver.unobserve(observedHero);
      resizeObserver.disconnect();
      contentObserver.disconnect();
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('scroll', scheduleUpdate);
    };
  }, [pathname]);

  return (
    <div
      ref={backgroundRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 h-full w-full overflow-hidden pointer-events-none [clip-path:inset(var(--video-reveal-top,0px)_0_0)]"
    >
      <VideoBackground src={platformVideoUrl} />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-white/70 via-white/55 via-40% to-[#b6d6f8]/60 backdrop-blur-[2px]"
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
