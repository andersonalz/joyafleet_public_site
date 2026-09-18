"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from './RouterLink';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Calendar, 
  Radio, 
  Users, 
  Wrench, 
  BarChart3, 
  Plug, 
  Layers,
  Sparkles,
  Smartphone
} from 'lucide-react';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [mobileProductExpanded, setMobileProductExpanded] = useState(true);
  const [isLogoFlightActive, setIsLogoFlightActive] = useState(false);
  const pathname = usePathname() ?? '/';

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const logoFlightTimeout = useRef<NodeJS.Timeout | null>(null);
  const prevMenuOpen = useRef(menuOpen);

  const productModules = [
    {
      name: 'Product Overview',
      path: '/product',
      desc: 'Complete high-level view of Joya Fleet capabilities',
      icon: Layers,
    },
    {
      name: 'Flight Scheduling',
      path: '/product/flight-scheduling',
      desc: 'Interactive gantt timeline, slots, and schedule drafting',
      icon: Calendar,
    },
    {
      name: 'Operations & Dispatch',
      path: '/product/operations-dispatch',
      desc: 'Live movement logs, dispatch releases, and flight tracking',
      icon: Radio,
    },
    {
      name: 'Crew Management & FTL',
      path: '/product/crew-management-ftl',
      desc: 'Duty rosters, FTL compliance, and qualification tracking',
      icon: Users,
    },
    {
      name: 'Fleet & Maintenance',
      path: '/product/fleet-maintenance',
      desc: 'Aircraft status, AOG visibility, and work order planning',
      icon: Wrench,
    },
    {
      name: 'Reporting & Analytics',
      path: '/product/reporting-analytics',
      desc: 'Operational metrics, custom reports, and performance insights',
      icon: BarChart3,
    },
    {
      name: 'Integrations',
      path: '/product/integrations',
      desc: 'Connected Skyputer, CAO IRI, weather, and accounting interfaces',
      icon: Plug,
    },
    {
      name: 'Mobile Crew App',
      path: '/our-apps',
      desc: 'Pilot & crew portal: roster, duties, manuals, and messaging',
      icon: Smartphone,
    },
  ];

  const otherNavItems = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'Security', path: '/security' },
    { name: 'Mobile App', path: '/our-apps' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMenuOpen(false);
    setProductDropdownOpen(false);
  }

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => () => {
    if (logoFlightTimeout.current) clearTimeout(logoFlightTimeout.current);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle Escape key to close the menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (productDropdownOpen) setProductDropdownOpen(false);
        if (menuOpen) setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [productDropdownOpen, menuOpen]);

  // Trap keyboard focus inside mobile menu when open
  useEffect(() => {
    if (!menuOpen) return;
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (!mobileMenuRef.current) return;
      
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'a[href], button:not([disabled])'
      );
      const elementsList = Array.from(focusableElements) as HTMLElement[];
      const allFocusable = [menuButtonRef.current, ...elementsList].filter(Boolean) as HTMLElement[];
      
      if (allFocusable.length === 0) return;
      
      const first = allFocusable[0];
      const last = allFocusable[allFocusable.length - 1];
      
      if (e.shiftKey) { // Shift + Tab
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else { // Tab
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };
    window.addEventListener('keydown', handleTabKey);
    return () => {
      window.removeEventListener('keydown', handleTabKey);
    };
  }, [menuOpen]);

  // Restore focus to the menu button after closing
  useEffect(() => {
    if (prevMenuOpen.current && !menuOpen) {
      menuButtonRef.current?.focus();
    }
    prevMenuOpen.current = menuOpen;
  }, [menuOpen]);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setProductDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setProductDropdownOpen(false);
    }, 150);
  };

  const playLogoAssembly = () => {
    if (isLogoFlightActive) return;

    setIsLogoFlightActive(true);
    logoFlightTimeout.current = setTimeout(() => {
      setIsLogoFlightActive(false);
      logoFlightTimeout.current = null;
    }, 3200);
  };

  const isProductActive = 
    pathname === '/product' ||
    pathname === '/platform' ||
    pathname.startsWith('/product/') ||
    pathname.startsWith('/platform/');

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 bg-[#061b3a]/94 backdrop-blur-xl border-b border-sky-300/20 shadow-[0_8px_28px_rgba(1,14,36,0.34)] pointer-events-auto">
        <Link 
          to="/" 
          aria-label="Animate the Joya Fleet logo"
          className="flex items-center rounded-lg p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061b3a]"
          onClick={(event) => {
            event.preventDefault();
            playLogoAssembly();
          }}
        >
          <span className={`relative block h-8 w-[91px] transition-opacity duration-300 sm:h-9 sm:w-[103px] ${isLogoFlightActive ? 'opacity-0' : 'opacity-100'}`}>
            <Image
              src="/logo/logo.png"
              alt="Joya Fleet"
              width={774}
              height={271}
              preload
              className="absolute inset-0 h-full w-auto"
            />
            <Image
              src="/logo/logo.png"
              alt=""
              aria-hidden="true"
              width={774}
              height={271}
              preload
              className="absolute inset-0 h-full w-auto brightness-0 invert [-webkit-clip-path:inset(0_23%_0_0)] [clip-path:inset(0_23%_0_0)]"
            />
          </span>
        </Link>

        {isLogoFlightActive && (
          <div className="joya-launch-sequence" aria-hidden="true">
            <svg className="joya-logo-fragments" viewBox="0 0 126 48" fill="none">
              <path className="joya-fragment joya-fragment-j" d="M7 12h24v21c0 7-5 10-11 10S9 40 9 34" stroke="#C9E7FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path className="joya-fragment joya-fragment-o" d="M42 24a12 12 0 1 1 24 0 12 12 0 0 1-24 0Z" stroke="#C9E7FF" strokeWidth="4" strokeLinecap="round" />
              <path className="joya-fragment joya-fragment-y" d="m74 11 9 14 9-14m-9 14v14" stroke="#C9E7FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path className="joya-fragment joya-fragment-a" d="m100 38 12-27 12 27-12-8-12 8Z" fill="#EE1C25" />
            </svg>
          </div>
        )}

        <div className="hidden xl:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 rounded-xl border border-sky-200/20 bg-white/10 px-2 py-1.5 shadow-[0_8px_20px_rgba(0,10,33,0.2)] backdrop-blur-md">
          {/* Product Dropdown */}
          <div 
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setProductDropdownOpen(!productDropdownOpen)}
              aria-expanded={productDropdownOpen}
              aria-haspopup="true"
              aria-controls="product-dropdown-menu"
              className={`text-sm font-semibold px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 ${
                isProductActive 
                  ? 'bg-white/20 text-white'
                  : 'text-sky-100/85 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>Product</span>
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-200 ${productDropdownOpen ? 'rotate-180' : ''}`} 
              />
            </button>

            {productDropdownOpen && (
              <div
                id="product-dropdown-menu"
                className="absolute top-full left-1/2 z-50 mt-3 w-[380px] -translate-x-1/2 rounded-xl border border-sky-200/20 bg-[#071f45]/98 p-2.5 shadow-2xl backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150 sm:w-[420px]"
              >
                <div className="mb-1 flex items-center justify-between border-b border-sky-100/15 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-sky-100/70">
                  <span>Product Modules</span>
                  <span className="font-mono text-[10px] font-normal text-sky-100/55">7 Sections</span>
                </div>

                <div className="flex flex-col gap-0.5">
                  {productModules.map((item) => {
                    const Icon = item.icon;
                    const isActive = 
                      pathname === item.path ||
                      (item.path === '/product' && (pathname === '/platform' || pathname === '/product'));

                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setProductDropdownOpen(false)}
                        className={`group flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                          isActive 
                            ? 'bg-white/15 text-white shadow-xs'
                            : 'text-sky-50 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <div className={`p-2 rounded-md shrink-0 mt-0.5 transition-colors ${
                          isActive 
                            ? 'bg-sky-400 text-[#061b3a]'
                            : 'bg-sky-300/15 text-sky-200 group-hover:bg-sky-300 group-hover:text-[#061b3a]'
                        }`}>
                          <Icon size={16} aria-hidden="true" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-xs font-bold tracking-tight leading-snug flex items-center gap-1.5">
                            {item.name}
                            {item.path === '/product' && (
                              <span className={`text-[9px] font-mono uppercase px-1.5 py-0.2 rounded ${
                                isActive ? 'bg-white/20 text-white' : 'bg-sky-300/15 text-sky-200'
                              }`}>
                                Overview
                              </span>
                            )}
                          </span>
                          <span className={`text-[11px] leading-tight mt-0.5 ${
                            isActive ? 'text-sky-100/70' : 'text-sky-100/65 group-hover:text-sky-50'
                          }`}>
                            {item.desc}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Other Nav Items */}
          {otherNavItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                aria-current={isActive ? 'page' : undefined}
                className={`text-sm font-semibold px-3.5 py-1.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 ${
                  isActive 
                    ? 'bg-white/20 text-white'
                    : 'text-sky-100/85 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden xl:flex items-center gap-2.5">
          <Link
            to="/updates"
            className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 ${
              pathname.startsWith('/updates')
                ? 'bg-white/20 text-white shadow-xs'
                : 'border border-sky-200/20 bg-white/10 text-sky-50 hover:bg-white/15 hover:text-white'
            }`}
          >
            <Sparkles size={14} className="text-[#39BFF8]" />
            <span>Updates</span>
          </Link>

          <Link 
            to="/contact?intent=demo" 
            className="bg-[#EE1C25] hover:bg-[#D4151D] text-white text-sm font-semibold px-5 py-2 rounded-lg flex items-center gap-2 border border-[#EE1C25] transition-all pointer-events-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE1C25] focus-visible:ring-offset-2 shadow-sm shadow-[#EE1C25]/20"
          >
            Request a Demo
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation-menu"
          aria-label="Toggle navigation menu"
          className="xl:hidden rounded-lg p-1.5 text-sky-50 transition-colors hover:bg-white/10 pointer-events-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061b3a]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            className="fixed inset-0 z-40 bg-[#020e22]/65 backdrop-blur-[2px] xl:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <div
            ref={mobileMenuRef}
            id="mobile-navigation-menu"
            className="fixed inset-y-0 right-0 z-[60] flex w-[min(23rem,calc(100vw-2rem))] flex-col gap-2 overflow-y-auto border-l border-sky-200/20 bg-[#061b3a]/98 px-5 py-6 shadow-[-16px_0_36px_rgba(0,10,33,0.4)] backdrop-blur-xl animate-in slide-in-from-right duration-200 pointer-events-auto xl:hidden"
          >
          <div className="mb-2 flex items-center justify-between border-b border-sky-100/15 pb-4">
            <span className="text-sm font-bold uppercase tracking-[0.16em] text-sky-100">Navigation</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
              className="rounded-lg p-1.5 text-sky-50 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          {/* Mobile Product Accordion */}
          <div className="border-b border-sky-100/15 pb-2">
            <button
              type="button"
              onClick={() => setMobileProductExpanded(!mobileProductExpanded)}
              className="flex w-full items-center justify-between py-2.5 text-base font-bold text-white focus-visible:outline-none"
            >
              <span className="flex items-center gap-2">
                <span>Product</span>
                <span className="rounded-md bg-sky-300/15 px-2 py-0.5 font-mono text-[10px] font-bold text-sky-200">
                  7 Modules
                </span>
              </span>
              <ChevronDown 
                size={18} 
                className={`text-sky-100/70 transition-transform duration-200 ${mobileProductExpanded ? 'rotate-180' : ''}`}
              />
            </button>

            {mobileProductExpanded && (
              <div className="my-1 ml-1 mt-1 flex flex-col gap-1 border-l-2 border-sky-200/20 pl-3">
                {productModules.map((item) => {
                  const Icon = item.icon;
                  const isActive = 
                    pathname === item.path ||
                    (item.path === '/product' && (pathname === '/platform' || pathname === '/product'));
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-2.5 py-2 px-2.5 rounded-xl text-xs font-semibold transition-colors ${
                        isActive
                          ? 'bg-white/15 text-white font-bold'
                          : 'text-sky-100/75 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon size={14} className="shrink-0 text-sky-300" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Other Nav Items */}
          {otherNavItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive ? 'page' : undefined}
                className={`border-b border-sky-100/15 py-3 text-left text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061b3a] ${
                  isActive 
                    ? 'border-l-2 border-sky-300 pl-2 font-bold text-white'
                    : 'text-sky-100/75 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <Link
            to="/updates"
            onClick={() => setMenuOpen(false)}
            aria-current={pathname.startsWith('/updates') ? 'page' : undefined}
            className={`flex items-center justify-between border-b border-sky-100/15 py-3 text-left text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061b3a] ${
              pathname.startsWith('/updates')
                ? 'border-l-2 border-sky-300 pl-2 font-bold text-white'
                : 'text-sky-100/75 hover:text-white'
            }`}
          >
            <span className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#39BFF8]" />
              <span>Updates</span>
            </span>
            <span className="rounded-md bg-sky-300/15 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-sky-200">
              New Releases
            </span>
          </Link>

          <Link 
            to="/contact?intent=demo" 
            onClick={() => setMenuOpen(false)} 
            className="mt-4 bg-[#EE1C25] hover:bg-[#D4151D] text-white text-sm font-semibold py-3 rounded-lg flex items-center justify-center border border-[#EE1C25] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE1C25] focus-visible:ring-offset-2 shadow-sm shadow-[#EE1C25]/20"
          >
            Request a Demo
          </Link>
          </div>
        </>
      )}
    </>
  );
}
