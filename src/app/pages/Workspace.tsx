import React from 'react';

export default function Workspace() {
  return (
    <div className="min-h-[80vh] pt-32 px-6 md:px-12 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-[9.5px] tracking-[0.52em] uppercase mb-4 text-[#D4AF37]">Co-Working</p>
        <h1 className="text-4xl md:text-5xl font-['Playfair_Display',serif] text-white mb-8">The Workspace</h1>
        <p className="text-white/70 max-w-2xl text-lg font-light leading-relaxed">
          Cafe by day, bar by night. Grab a coffee, connect to the high-speed WiFi, and collaborate with the community.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Workspace info & Day Pass CTA will go here */}
        </div>
      </div>
    </div>
  );
}
