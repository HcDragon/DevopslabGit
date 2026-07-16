import { useState } from "react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";
import { IMGS, gold, goldHover, glass, glassBorder } from "../design";

const EVENTS = [
  {
    id: "birthday",
    icon: "🎂",
    title: "Birthday Celebrations",
    tagline: "Make it legendary",
    desc: "Your birthday deserves more than a restaurant — it deserves a production. Our events team works with you weeks in advance to design a completely bespoke celebration above the city: personalized décor, a dedicated butler, a custom-designed birthday cake, and a hand-curated menu.",
    price: "From ₹15,000",
    img: IMGS.events,
    includes: ["Personalized table décor & floral arrangement","Dedicated event butler throughout the evening","Custom birthday cake designed to your brief","Curated 3-course dinner menu","Welcome champagne & celebratory bottle service","Complimentary dessert platter for the table"],
  },
  {
    id: "anniversary",
    icon: "💕",
    title: "Anniversary Dinner",
    tagline: "Celebrate love above the city",
    desc: "An intimate table for two with a private corner of the skyline, rose petal arrangement, a champagne arrival, and a personalized menu that tells the story of your relationship through food.",
    price: "From ₹12,000",
    img: IMGS.wine,
    includes: ["Private corner table with panoramic view","Rose petal arrangement & candlelight setup","Arrival champagne & amuse-bouche","3-course anniversary dinner menu","Personalized menu card as a keepsake","Complimentary dessert with message"],
  },
  {
    id: "corporate",
    icon: "🏢",
    title: "Corporate Events",
    tagline: "Impress at altitude",
    desc: "Premium corporate dining experiences for 10 to 200 guests. Full AV support, tailored menus for dietary requirements, dedicated event coordinators, and flexible room configurations that transform our venue into a world-class business setting.",
    price: "From ₹50,000",
    img: IMGS.interior,
    includes: ["Flexible seating for 10–200 guests","Full AV setup: screen, projector, mic system","Custom corporate menu & dietary accommodation","Dedicated event manager & service team","Branded menu cards & stationery","Pre-event site visit & walkthrough"],
  },
  {
    id: "engagement",
    icon: "💍",
    title: "Engagement Party",
    tagline: "The perfect beginning",
    desc: "Propose under the stars with our exclusive engagement package. Complete setup, photographer coordination, curated champagne, and a surprise arrival moment crafted entirely around your partner's preferences.",
    price: "From ₹20,000",
    img: IMGS.events,
    includes: ["Custom rooftop setup with floral arch","Coordination with your photographer","Champagne arrival & surprise reveal moment","Engagement dinner for two or group celebration","Customized menu card & keepsake box","Professional event coordination throughout"],
  },
  {
    id: "kitty",
    icon: "👑",
    title: "Kitty Party",
    tagline: "Elevated afternoons",
    desc: "An elevated afternoon or evening with your closest circle. Themed décor that matches your group's vibe, a customized menu with lady-friendly portions, and a curated cocktail or mocktail hour to open the evening.",
    price: "From ₹8,000",
    img: IMGS.cocktail2,
    includes: ["Themed table décor of your choosing","Customized 2-course lunch or 3-course dinner","Welcome cocktail / mocktail hour","Complimentary photo wall with props","Group discount on cocktail package","Personalized menu cards for each guest"],
  },
  {
    id: "bespoke",
    icon: "✨",
    title: "Bespoke Celebrations",
    tagline: "Every milestone matters",
    desc: "From farewell dinners to baby showers, graduation dinners to family reunions — our events team designs fully customized celebrations for every moment worth marking.",
    price: "From ₹10,000",
    img: IMGS.terrace,
    includes: ["Completely customizable setup & theme","Flexible menu design & dietary accommodation","Choice of indoor, terrace, or private room","Event manager from planning to execution","Custom invitation design (digital)","Photography coordination available"],
  },
];

export default function Events() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <PageHero tag="Private Events" title={"Every Celebration\nDeserves the Sky"} subtitle="From intimate dinners to grand affairs — our events team orchestrates every detail with precision." image={IMGS.events} imageAlt="Private celebration event with candles and flowers" />

      {/* ── EVENTS GRID ───────────────────────────── */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 xl:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((ev, i) => (
            <FadeUp key={ev.id} delay={i * 0.08}>
              <div
                className="group bg-[#181818] border border-white/5 hover:border-[#D4AF37]/18 transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={() => setActive(active === ev.id ? null : ev.id)}>
                <div className="relative h-52 overflow-hidden bg-[#0D0D0D]">
                  <img src={ev.img} alt={ev.title} className="w-full h-full object-cover opacity-65 group-hover:opacity-85 group-hover:scale-105 transition-all duration-600" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/20 to-transparent" />
                  <div className="absolute top-5 left-5 text-3xl">{ev.icon}</div>
                </div>
                <div className="p-7">
                  <p className="text-[9px] tracking-[0.32em] uppercase mb-2" style={{ color: gold }}>{ev.tagline}</p>
                  <h3 className="font-['Playfair_Display',serif] text-xl font-semibold mb-3 group-hover:text-[#D4AF37] transition-colors">{ev.title}</h3>
                  <p className="text-white/40 text-[12.5px] leading-relaxed mb-6 line-clamp-3">{ev.desc}</p>

                  {/* Expanded details */}
                  {active === ev.id && (
                    <div className="border-t border-white/6 pt-6 mb-6">
                      <p className="text-[9px] tracking-[0.32em] uppercase mb-4" style={{ color: gold }}>What's Included</p>
                      <ul className="space-y-2">
                        {ev.includes.map(inc => (
                          <li key={inc} className="flex items-start gap-2.5 text-[12px] text-white/50">
                            <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: gold }} />
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-5 border-t border-white/5">
                    <span className="text-sm" style={{ color: gold }}>{ev.price}</span>
                    <div className="flex items-center gap-1.5 text-[9px] tracking-[0.22em] uppercase text-white/38 hover:text-[#D4AF37] transition-colors">
                      {active === ev.id ? "Less" : "Details"} <ChevronRight size={11} style={{ transform: active === ev.id ? "rotate(90deg)" : "none", transition: "transform 0.3s" }} />
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────── */}
      <section className="py-28 bg-[#181818]/22">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-16">
          <FadeUp className="text-center mb-16">
            <p className="text-[9.5px] tracking-[0.52em] uppercase mb-4" style={{ color: gold }}>How It Works</p>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold">Planning Your Event</h2>
          </FadeUp>
          <div className="grid md:grid-cols-4 gap-px bg-white/5">
            {[
              { n: "01", title: "Enquire", desc: "Fill in our event enquiry form with your date, occasion, and guest count. We respond within 4 hours." },
              { n: "02", title: "Consultation", desc: "Our dedicated events manager schedules a call to understand your vision and begin crafting the experience." },
              { n: "03", title: "Proposal", desc: "We send a detailed proposal with menu options, décor concepts, and transparent pricing within 24 hours." },
              { n: "04", title: "Celebrate", desc: "Arrive on your evening to find every detail perfectly placed. Our team handles everything so you simply enjoy." },
            ].map(step => (
              <FadeUp key={step.n}>
                <div className="bg-[#0D0D0D] p-10 group hover:bg-[#181818] transition-colors duration-300">
                  <p className="font-['Playfair_Display',serif] text-[3rem] font-bold opacity-12 mb-4" style={{ color: gold }}>{step.n}</p>
                  <h3 className="font-['Playfair_Display',serif] text-lg font-semibold mb-3 group-hover:text-[#D4AF37] transition-colors">{step.title}</h3>
                  <p className="text-white/36 text-[12.5px] leading-relaxed">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENQUIRY BANNER ────────────────────────── */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 xl:px-16">
        <FadeUp>
          <div className="relative overflow-hidden">
            <img src={IMGS.events} alt="Event setup with candles and florals" className="w-full h-72 md:h-80 object-cover opacity-40 bg-[#181818]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/55 to-transparent flex items-center">
              <div className="px-10 md:px-16 max-w-[480px]">
                <p className="text-[9.5px] tracking-[0.52em] uppercase mb-4" style={{ color: gold }}>Ready to Plan?</p>
                <p className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold mb-5 text-white">Let's Create<br />Something Unforgettable</p>
                <p className="text-white/45 text-[13.5px] mb-8 leading-relaxed">Tell us your vision and we'll handle everything from there.</p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact"
                    className="px-8 py-4 text-black text-[9.5px] tracking-[0.28em] uppercase font-semibold transition-colors"
                    style={{ backgroundColor: gold }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = goldHover)}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = gold)}>
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
