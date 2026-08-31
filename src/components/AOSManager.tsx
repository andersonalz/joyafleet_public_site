import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

/**
 * AOSManager
 * Initializes and manages AOS (Animate On Scroll library) across React Router page transitions.
 * Automatically ensures elements, cards, titles, and slides animate smoothly.
 */
export function AOSManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Initialize AOS with smooth, fast and snappy aviation timing parameters
    AOS.init({
      duration: 450,
      easing: 'ease-out-cubic',
      once: true,
      offset: 40,
      delay: 0,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });

    // Refresh AOS on route changes & dynamic DOM rendering
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 100);

    const timer2 = setTimeout(() => {
      AOS.refresh();
    }, 400);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [pathname]);

  return null;
}
