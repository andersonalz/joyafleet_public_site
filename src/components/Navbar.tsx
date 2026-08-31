import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Wind, 
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
  const location = useLocation();

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
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

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
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

  const isProductActive = 
    location.pathname === '/product' || 
    location.pathname === '/platform' ||
    location.pathname.startsWith('/product/') || 
    location.pathname.startsWith('/platform/');

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 bg-white/90 backdrop-blur-md border-b border-[#DCE8F5] shadow-xs pointer-events-auto">
        <Link 
          to="/" 
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 rounded-lg p-1"
        >
          <div className="bg-[#002D70] text-white p-1.5 rounded-lg shadow-xs">
            <Wind size={18} aria-hidden="true" />
          </div>
          <span className="font-bold text-[#10233F] tracking-tight text-lg">Joya Fleet</span>
        </Link>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-[#F5F9FE] border border-[#DCE8F5] rounded-xl px-2 py-1.5 items-center gap-1 shadow-xs">
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
                  ? 'bg-[#071B33] text-white' 
                  : 'text-[#52667F] hover:text-[#10233F] hover:bg-[#EEF7FF]'
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
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[380px] sm:w-[420px] bg-white/98 backdrop-blur-2xl border border-[#DCE8F5] rounded-xl shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150"
              >
                <div className="px-3 py-2 text-[11px] font-bold tracking-wider text-[#52667F] uppercase border-b border-[#DCE8F5] mb-1 flex items-center justify-between">
                  <span>Product Modules</span>
                  <span className="text-[10px] font-mono font-normal text-[#52667F]">7 Sections</span>
                </div>

                <div className="flex flex-col gap-0.5">
                  {productModules.map((item) => {
                    const Icon = item.icon;
                    const isActive = 
                      location.pathname === item.path || 
                      (item.path === '/product' && (location.pathname === '/platform' || location.pathname === '/product'));

                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setProductDropdownOpen(false)}
                        className={`group flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                          isActive 
                            ? 'bg-[#071B33] text-white shadow-xs' 
                            : 'text-[#10233F] hover:bg-[#EEF7FF] hover:text-[#1267E5]'
                        }`}
                      >
                        <div className={`p-2 rounded-md shrink-0 mt-0.5 transition-colors ${
                          isActive 
                            ? 'bg-[#1267E5] text-white' 
                            : 'bg-[#EEF7FF] text-[#1267E5] group-hover:bg-[#1267E5] group-hover:text-white'
                        }`}>
                          <Icon size={16} aria-hidden="true" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-xs font-bold tracking-tight leading-snug flex items-center gap-1.5">
                            {item.name}
                            {item.path === '/product' && (
                              <span className={`text-[9px] font-mono uppercase px-1.5 py-0.2 rounded ${
                                isActive ? 'bg-white/20 text-white' : 'bg-[#EEF7FF] text-[#1267E5]'
                              }`}>
                                Overview
                              </span>
                            )}
                          </span>
                          <span className={`text-[11px] leading-tight mt-0.5 ${
                            isActive ? 'text-[#AFC0D2]' : 'text-[#52667F] group-hover:text-[#52667F]'
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
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                aria-current={isActive ? 'page' : undefined}
                className={`text-sm font-semibold px-3.5 py-1.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 ${
                  isActive 
                    ? 'bg-[#071B33] text-white' 
                    : 'text-[#52667F] hover:text-[#10233F] hover:bg-[#EEF7FF]'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-2.5">
          <Link
            to="/updates"
            className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 ${
              location.pathname.startsWith('/updates')
                ? 'bg-[#071B33] text-white shadow-xs'
                : 'bg-[#EEF7FF] border border-[#DCE8F5] text-[#10233F] hover:text-[#1267E5] hover:bg-[#E7F2FF]'
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
          className="md:hidden text-[#10233F] p-1.5 hover:bg-[#EEF7FF] rounded-lg transition-colors pointer-events-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {menuOpen && (
        <div 
          ref={mobileMenuRef}
          id="mobile-navigation-menu" 
          className="fixed top-0 left-0 right-0 max-h-screen overflow-y-auto z-40 bg-white/98 backdrop-blur-xl pt-24 pb-8 px-5 shadow-lg flex flex-col gap-2 md:hidden pointer-events-auto border-b border-[#DCE8F5]"
        >
          {/* Mobile Product Accordion */}
          <div className="border-b border-[#DCE8F5] pb-2">
            <button
              type="button"
              onClick={() => setMobileProductExpanded(!mobileProductExpanded)}
              className="w-full flex items-center justify-between py-2.5 text-base font-bold text-[#10233F] focus-visible:outline-none"
            >
              <span className="flex items-center gap-2">
                <span>Product</span>
                <span className="text-[10px] font-mono bg-[#EEF7FF] text-[#1267E5] px-2 py-0.5 rounded-md font-bold">
                  7 Modules
                </span>
              </span>
              <ChevronDown 
                size={18} 
                className={`transition-transform duration-200 text-[#52667F] ${mobileProductExpanded ? 'rotate-180' : ''}`}
              />
            </button>

            {mobileProductExpanded && (
              <div className="mt-1 ml-1 pl-3 border-l-2 border-[#DCE8F5] flex flex-col gap-1 my-1">
                {productModules.map((item) => {
                  const Icon = item.icon;
                  const isActive = 
                    location.pathname === item.path || 
                    (item.path === '/product' && (location.pathname === '/platform' || location.pathname === '/product'));
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-2.5 py-2 px-2.5 rounded-xl text-xs font-semibold transition-colors ${
                        isActive
                          ? 'bg-[#071B33] text-white font-bold'
                          : 'text-[#52667F] hover:text-[#10233F] hover:bg-[#EEF7FF]'
                      }`}
                    >
                      <Icon size={14} className="shrink-0 text-[#1267E5]" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Other Nav Items */}
          {otherNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive ? 'page' : undefined}
                className={`text-base font-semibold py-3 border-b border-[#DCE8F5] text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 ${
                  isActive 
                    ? 'text-[#10233F] font-bold pl-2 border-l-2 border-[#1267E5]' 
                    : 'text-[#52667F] hover:text-[#10233F]'
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <Link
            to="/updates"
            onClick={() => setMenuOpen(false)}
            aria-current={location.pathname.startsWith('/updates') ? 'page' : undefined}
            className={`text-base font-semibold py-3 border-b border-[#DCE8F5] text-left transition-colors flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] focus-visible:ring-offset-2 ${
              location.pathname.startsWith('/updates')
                ? 'text-[#10233F] font-bold pl-2 border-l-2 border-[#1267E5]'
                : 'text-[#52667F] hover:text-[#10233F]'
            }`}
          >
            <span className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#39BFF8]" />
              <span>Updates</span>
            </span>
            <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md bg-[#EEF7FF] text-[#1267E5]">
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
      )}
    </>
  );
}

