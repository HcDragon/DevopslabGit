import { motion } from "motion/react";
import FadeUp from "../components/FadeUp";
import { gold, glass, glassBorder, IMGS } from "../design";

export default function Locations() {
  return (
    <div className="min-h-screen pt-32 px-6 md:px-12 bg-[#0D0D0D] text-white pb-32">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center mb-16">
          <p className="text-[9.5px] tracking-[0.52em] uppercase mb-4" style={{ color: gold }}>Find Us</p>
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display',serif] text-white mb-6">Our Flagship Outlet</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Experience fine dining above the city. Located in the heart of Kalyan, Maharashtra.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* AI Image Section */}
          <FadeUp delay={0.2}>
            <div className="relative group overflow-hidden border border-white/10 p-2" style={{ backgroundColor: glass }}>
              <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img 
                  src="/kezia-exterior.png" 
                  alt="Kezia Rooftop Exterior" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-['Playfair_Display',serif] text-2xl md:text-3xl font-semibold mb-2">Kezia Rooftop</h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/70" style={{ color: gold }}>Kalyan, Maharashtra</p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Map and Info Section */}
          <FadeUp delay={0.4}>
            <div className="flex flex-col gap-8 h-full justify-center">
              <div className="backdrop-blur-md border p-8" style={{ backgroundColor: glass, borderColor: glassBorder }}>
                <h4 className="font-['Playfair_Display',serif] text-xl mb-4" style={{ color: gold }}>Visit Us</h4>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Perched high above the bustling streets, offering panoramic views and a serene ambiance perfect for unforgettable evenings.
                </p>
                <div className="w-full h-[250px] md:h-[300px] bg-[#181818] border border-white/5 overflow-hidden relative group">
                  <img 
                    src={IMGS.city} 
                    alt="City view from rooftop" 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a 
                      href="https://maps.app.goo.gl/cjiidc41MVMPwwD4A" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-8 py-4 text-black text-[9.5px] tracking-[0.28em] uppercase font-semibold transition-colors shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                      style={{ backgroundColor: gold }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c9a42f')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = gold)}
                    >
                      Locate Us
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-white/10 p-5 text-center transition-colors hover:border-[#D4AF37]/50 group">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-white/40 mb-2 group-hover:text-[#D4AF37] transition-colors">Opening Hours</p>
                  <p className="font-serif text-lg text-white/90">7 PM - 1 AM</p>
                </div>
                <div className="border border-white/10 p-5 text-center transition-colors hover:border-[#D4AF37]/50 group">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-white/40 mb-2 group-hover:text-[#D4AF37] transition-colors">Reservations</p>
                  <p className="font-serif text-lg text-white/90">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
