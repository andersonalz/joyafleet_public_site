import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollRevealManager
 * Automatically discovers all <section> elements and elements with .scroll-reveal class
 * across all pages and animates them with smooth slide-up and fade-in animations on scroll.
 */
export function ScrollRevealManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      if (observer) {
        observer.disconnect();
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              // Unobserve once revealed so animation runs once per scroll-in
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -8% 0px',
          threshold: 0.08,
        }
      );

      // Target all section elements and explicitly marked reveal elements
      const targetElements = document.querySelectorAll<HTMLElement>(
        'main section, .scroll-reveal, .scroll-slide-up, .scroll-slide-left, .scroll-slide-right, .scroll-slide-scale'
      );

      targetElements.forEach((el, index) => {
        // If element is already at the top of the initial viewport on page load, reveal immediately
        const rect = el.getBoundingClientRect();
        const isInInitialView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

        if (!el.classList.contains('scroll-reveal') && 
            !el.classList.contains('scroll-slide-up') && 
            !el.classList.contains('scroll-slide-left') && 
            !el.classList.contains('scroll-slide-right') && 
            !el.classList.contains('scroll-slide-scale')) {
          el.classList.add('scroll-reveal');
        }

        if (isInInitialView && index === 0) {
          // Hero section or top visible section gets fast initial entrance
          el.classList.add('is-visible');
        } else {
          observer?.observe(el);
        }
      });
    };

    // Small delay to allow DOM render after route transition or suspense resolution
    const timeoutId = setTimeout(setupObserver, 80);

    // Also observe DOM mutations in case lazy content loads in
    const mutationObserver = new MutationObserver(() => {
      setupObserver();
    });

    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mutationObserver.observe(mainContent, { childList: true, subtree: true });
    }

    return () => {
      clearTimeout(timeoutId);
      observer?.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
