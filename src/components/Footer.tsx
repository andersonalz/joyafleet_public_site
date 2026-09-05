import Link from './RouterLink';
import { Wind } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[#06172B] border-t border-[#002D70] pt-16 pb-12 text-[#AFC0D2] pointer-events-auto">
      <h2 className="sr-only">Footer navigation</h2>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <div className="p-1.5 rounded-lg bg-[#002D70] text-[#39BFF8]">
                <Wind size={18} aria-hidden="true" />
              </div>
              <span>Joya Fleet</span>
            </div>
            <p className="text-xs text-[#AFC0D2] leading-relaxed max-w-xs">
              Joya Fleet connects flight scheduling, operations, crew management, dispatch, fleet planning and reporting through one configurable cloud platform.
            </p>
            <p className="text-xs text-[#52667F] mt-2 font-mono">
              Developed in Shiraz, Iran.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/70 mb-4">Product</h3>
            <nav aria-label="Product navigation">
              <ul className="flex flex-col gap-2.5">
                <li><Link to="/product" className="text-xs text-[#D7E5F3] hover:text-[#39BFF8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06172B] rounded">Product Overview</Link></li>
                <li><Link to="/our-apps" className="text-xs font-bold text-[#39BFF8] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06172B] rounded inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#39BFF8] animate-pulse" />Mobile App (Our Apps)</Link></li>
                <li><Link to="/product/flight-scheduling" className="text-xs text-[#D7E5F3] hover:text-[#39BFF8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06172B] rounded">Flight Scheduling</Link></li>
                <li><Link to="/product/operations-dispatch" className="text-xs text-[#D7E5F3] hover:text-[#39BFF8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06172B] rounded">Operations & Dispatch</Link></li>
                <li><Link to="/product/crew-management-ftl" className="text-xs text-[#D7E5F3] hover:text-[#39BFF8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06172B] rounded">Crew Management & FTL</Link></li>
                <li><Link to="/product/fleet-maintenance" className="text-xs text-[#D7E5F3] hover:text-[#39BFF8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06172B] rounded">Fleet & Maintenance</Link></li>
                <li><Link to="/product/reporting-analytics" className="text-xs text-[#D7E5F3] hover:text-[#39BFF8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06172B] rounded">Reporting & Analytics</Link></li>
                <li><Link to="/product/integrations" className="text-xs text-[#D7E5F3] hover:text-[#39BFF8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06172B] rounded">Integrations</Link></li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/70 mb-4">Solutions</h3>
            <nav aria-label="Solutions navigation">
              <ul className="flex flex-col gap-2.5">
                <li><Link to="/solutions" className="text-xs text-[#D7E5F3] hover:text-[#39BFF8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06172B] rounded">Business Aviation</Link></li>
                <li><Link to="/solutions" className="text-xs text-[#D7E5F3] hover:text-[#39BFF8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06172B] rounded">Charter Operators</Link></li>
                <li><Link to="/solutions" className="text-xs text-[#D7E5F3] hover:text-[#39BFF8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06172B] rounded">Scheduled Operators</Link></li>
                <li><Link to="/solutions" className="text-xs text-[#D7E5F3] hover:text-[#39BFF8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06172B] rounded">Cargo Operators</Link></li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/70 mb-4">Resources & Security</h3>
            <nav aria-label="Security and Blog navigation">
              <ul className="flex flex-col gap-2.5">
                <li><Link to="/security" className="text-xs text-[#D7E5F3] hover:text-[#39BFF8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06172B] rounded">Security Overview</Link></li>
                <li><Link to="/blog" className="text-xs text-[#D7E5F3] hover:text-[#39BFF8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06172B] rounded">Blog & Aviation Journal</Link></li>
                <li><Link to="/updates" className="text-xs text-[#D7E5F3] hover:text-[#39BFF8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39BFF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06172B] rounded">System Release Updates</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#002D70] pt-8 gap-4">
          <p className="text-xs text-[#AFC0D2]">© 2026 Joya Fleet. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact?intent=demo" className="text-xs font-semibold text-[#EE1C25] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE1C25] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06172B] rounded">Request Pricing / Contact Sales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
