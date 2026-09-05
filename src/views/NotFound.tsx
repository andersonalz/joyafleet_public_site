import React from 'react';
import Link from '../components/RouterLink';
import { ArrowLeft, Wind } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="w-full pointer-events-auto bg-transparent min-h-screen flex items-center justify-center pt-32 pb-20 px-5 sm:px-8">
      <div className="max-w-md mx-auto w-full text-center bg-white/60 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/10 text-red-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
          Error 404
        </div>
        
        <div className="flex justify-center mb-6">
          <div className="bg-gray-900 text-white p-3 rounded-full">
            <Wind size={32} />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
          The requested page does not exist or has been moved to another address.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-full transition-colors text-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Homepage
          </Link>
          <Link
            to="/platform"
            className="inline-flex items-center justify-center text-xs text-gray-500 hover:text-gray-900 font-semibold py-2 transition-colors focus-visible:outline-none focus-visible:underline"
          >
            Explore the Platform Overview
          </Link>
        </div>
      </div>
    </div>
  );
}
