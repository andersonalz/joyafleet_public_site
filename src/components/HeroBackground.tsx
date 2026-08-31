import React from 'react';

interface HeroBackgroundProps {
  className?: string;
}

export function HeroBackground({ className = '' }: HeroBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* 1. Main Aviation Royal Navy/Blue Atmospheric Gradient */}
      <div className="absolute inset-0 bg-[#071E3D] bg-gradient-to-b from-[#071E3D] via-[#0A2E5C] to-[#0D3B73]" />

      {/* 2. Top High-Altitude Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_80%_60%_at_50%_10%,rgba(56,189,248,0.25),rgba(18,103,229,0.1),transparent_70%)]" />

      {/* 3. Subtle Aviation Coordinate / Radar Matrix Grid */}
      <div 
        className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_65%,transparent_100%)]" 
      />
    </div>
  );
}
