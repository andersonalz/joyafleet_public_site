import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VideoBackgroundProps {
  src: string;
}

export function VideoBackground({ src }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [canPlay, setCanPlay] = useState(false);
  const [hasError, setHasError] = useState(false);

  // 1. Native Smooth Video Playback & Lifecycle
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setCanPlay(true);
      video.play().catch(() => {
        // Fallback if browser policy delays autoplay
      });
    };

    const handleError = () => {
      setHasError(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleCanPlay);
    video.addEventListener('error', handleError);

    if (video.readyState >= 2) {
      setCanPlay(true);
      video.play().catch(() => {});
    }

    // Pause video when tab is hidden to save GPU/CPU cycles
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleCanPlay);
      video.removeEventListener('error', handleError);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [src]);

  // 2. Hardware-Accelerated Smooth Parallax Scroll (GPU transform, NO currentTime seeking)
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Smooth subtle vertical parallax on the wrapper via CSS transform (runs on GPU compositor thread)
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5,
      onUpdate: (self) => {
        if (!wrapper) return;
        // Subtle GPU-based vertical translation for depth without video decode lag
        const yOffset = self.progress * 60;
        gsap.set(wrapper, {
          y: yOffset,
          force3D: true,
        });
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  // 3. Optional Smooth Mouse Movement (GPU quickTo)
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || !canPlay || hasError) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

    if (prefersReducedMotion || !hasFinePointer) return;

    const videoEl = videoRef.current;
    if (!videoEl || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const xTo = gsap.quickTo(videoEl, 'x', { duration: 1.2, ease: 'power2.out' });
    const yTo = gsap.quickTo(videoEl, 'y', { duration: 1.2, ease: 'power2.out' });

    const handleMouseMove = (e: MouseEvent) => {
      const moveX = (e.clientX / window.innerWidth) * 2 - 1;
      const moveY = (e.clientY / window.innerHeight) * 2 - 1;
      xTo(moveX * -12);
      yTo(moveY * -8);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (videoEl) {
        gsap.killTweensOf(videoEl);
      }
    };
  }, [canPlay, hasError]);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      tabIndex={-1}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden origin-center will-change-transform transform-gpu"
      style={{
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
      }}
    >
      <video
        ref={videoRef}
        src={src}
        aria-hidden="true"
        tabIndex={-1}
        className={`w-full h-full object-cover pointer-events-none transition-opacity duration-1000 scale-[1.08] transform-gpu ${
          canPlay && !hasError ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
        }}
        autoPlay
        loop
        muted
        playsInline
        crossOrigin="anonymous"
        preload="auto"
      />
    </div>
  );
}

