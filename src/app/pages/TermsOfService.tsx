import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-[80vh] pt-32 px-6 md:px-12 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-['Playfair_Display',serif] text-white mb-12">Terms of Service</h1>
        <div className="prose prose-invert prose-lg text-white/70 font-light">
          <p>By using our website and services, you agree to these terms of service.</p>
          {/* Full terms of service text goes here */}
        </div>
      </div>
    </div>
  );
}
