import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { HeroBackground } from '../components/HeroBackground';

export default function PlatformDetailPlaceholder() {
  const { module } = useParams<{ module: string }>();

  useEffect(() => {
    document.title = "Module Not Found | Joya Fleet";
  }, []);

  return (
    <div className="w-full pointer-events-auto bg-transparent min-h-screen pt-32 sm:pt-40 pb-20 flex items-center justify-center relative isolate">
      <HeroBackground />
      <div className="px-5 sm:px-8 max-w-xl mx-auto w-full text-center bg-white/88 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-gray-200/80 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/10 text-red-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
          Error 404
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-4 animate-fade-in">
          Platform Module Not Found
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
          The module slug <code className="px-1.5 py-0.5 bg-gray-100 rounded text-xs text-red-600 font-mono">/platform/{module}</code> is not a recognized or active module of the Joya Fleet workspace.
        </p>

        <div>
          <Link
            to="/platform"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-full transition-colors text-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Platform Overview
          </Link>
        </div>
      </div>
    </div>
  );
}
