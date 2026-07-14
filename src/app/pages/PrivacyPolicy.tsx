import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-[80vh] pt-32 px-6 md:px-12 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-['Playfair_Display',serif] text-white mb-12">Privacy Policy</h1>
        <div className="prose prose-invert prose-lg text-white/70 font-light">
          <p>Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information.</p>
          {/* Full privacy policy text goes here */}
        </div>
      </div>
    </div>
  );
}
