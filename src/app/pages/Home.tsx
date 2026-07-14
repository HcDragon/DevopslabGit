import { Link } from "react-router";
import { motion } from "motion/react";
import { ChevronDown, Star, Eye, Utensils, Music, Users, Sparkles, Wine, Heart, Award } from "lucide-react";
import FadeUp from "../components/FadeUp";
import { IMGS, gold, goldHover, surface, glass, glassBorder } from "../design";

const STATS = [["12+","Years of Excellence"],["50,000+","Happy Guests"],["200+","Menu Items"],["4.9★","Google Rating"]];
const FEATURES = [
  [Eye,"Skyline View","360° panoramic views of the city at its most luminous"],
  [Utensils,"Fine Dining","Michelin-inspired cuisine with globally sourced ingredients"],
  [Music,"Live Music","Nightly curated performances — jazz to ambient electronica"],
  [Users,"Private Events","Bespoke hosting with dedicated coordination"],
  [Sparkles,"Luxury Ambience","Raw concrete, gold, and velvet design language"],
  [Wine,"Cocktail Bar","Award-winning bar program, signature cocktails"],
  [Heart,"Open Terrace","Alfresco dining under stars with city panorama"],
  [Award,"Chef's Table","Intimate tasting journeys led by Executive Chef Aarav"],
];
const TESTIMONIALS = [
  { name: "Priya Sharma", city: "Mumbai", text: "An experience beyond words. The skyline view combined with the exquisite menu made our anniversary unforgettable.", init: "PS" },
  { name: "Arjun Mehta", city: "Pune", text: "Kezia sets the gold standard for fine dining in Maharashtra. The Wagyu and the cocktail program are genuinely world-class.", init: "AM" },
  { name: "Ritu Kapoor", city: "Thane", text: "Our corporate dinner exceeded every expectation. Impeccable service and cuisine that left our guests speechless.", init: "RK" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────── */}
      <section className="relative h-screen min-h-[700px] flex items-end pb-24 overflow-hidden bg-[#0D0D0D]">
        <div className="absolute inset-0">
          <img src={IMGS.hero} alt="Luxury rooftop restaurant above city skyline at dusk" className="w-full h-full object-cover opacity-44" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/28 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/70 via-[#0D0D0D]/15 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 xl:px-16 w-full grid lg:grid-cols-5 gap-10 items-end">
          <div className="lg:col-span-3">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.2, ease: [0.25,0.46,0.45,0.94] }}>
              <p className="text-[9.5px] tracking-[0.58em] uppercase mb-7" style={{ color: gold }}>Kalyan's Premium Hangout</p>
              <h1 className="font-['Playfair_Display',serif] text-[clamp(3rem,8.5vw,7rem)] font-bold leading-[0.88] mb-8 text-white">
                Good Times,<br />High Up.<br /><span style={{ color: gold }}>Since 2012</span>
              </h1>
              <p className="text-white/60 text-[16px] tracking-wide leading-[1.75] max-w-[420px] mb-10">
                Kalyan's favorite spot for a cold drink, great music, and food you'll actually text your friends about.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/locations"
                  className="px-9 py-4 text-black text-[9.5px] tracking-[0.28em] uppercase font-semibold transition-colors duration-300"
                  style={{ backgroundColor: gold }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = goldHover)}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = gold)}>
                  Find An Outlet
                </Link>
                <Link to="/menu"
                  className="px-9 py-4 border border-white/26 text-white/72 text-[9.5px] tracking-[0.28em] uppercase hover:border-[#D4AF37]/48 hover:text-[#D4AF37] transition-all duration-300">
                  What's Cooking?
                </Link>
              </div>
            </motion.div>
          </div>


        </div>

        <motion.div animate={{ y: [0,10,0] }} transition={{ repeat: Infinity, duration: 2.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[7.5px] tracking-[0.45em] uppercase text-white/26">Scroll</span>
          <ChevronDown size={13} style={{ color: `${gold}88` }} />
        </motion.div>
      </section>

      {/* ── STATS ─────────────────────────────────── */}
      <div className="relative z-10 border-y border-white/5" style={{ backgroundColor: `${surface}55` }}>
        <div className="max-w-[1440px] mx-auto px-6 xl:px-16 py-9 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(([n, l]) => (
            <FadeUp key={l} className="text-center">
              <div className="font-['Playfair_Display',serif] text-[2rem] mb-1" style={{ color: gold }}>{n}</div>
              <div className="text-[8.5px] tracking-[0.28em] uppercase text-white/36">{l}</div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* ── ABOUT TEASER ──────────────────────────── */}
      <section className="relative z-10 py-32 max-w-[1440px] mx-auto px-6 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <FadeUp>
            <div className="relative">
              <img src={IMGS.about} alt="Kezia Rooftop luxury interior" className="w-full h-[560px] object-cover bg-[#181818]" />
              <div className="absolute -bottom-5 -right-5 px-7 py-5 hidden md:block" style={{ backgroundColor: gold }}>
                <p className="font-['Playfair_Display',serif] text-black text-[2rem] font-bold leading-none">12+</p>
                <p className="text-black/62 text-[8px] tracking-[0.28em] uppercase mt-1">Years of Craft</p>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[9.5px] tracking-[0.52em] uppercase mb-5" style={{ color: gold }}>The Vibe</p>
            <h2 className="font-['Playfair_Display',serif] text-[2.6rem] md:text-[3rem] font-bold leading-[1.05] mb-7">
              Not Your Average<br />Rooftop Joint
            </h2>
            <p className="text-white/50 leading-[1.82] mb-5 text-[15px]">
              We built this place because we wanted a spot that didn't take itself too seriously, but still served damn good food. No stuffy dress codes, just good energy.
            </p>
            <p className="text-white/40 leading-[1.82] mb-10 text-[14px]">
              Whether you're clocking out of work or gearing up for a weekend bender, this is where you want to be when the sun goes down.
            </p>
            <Link to="/about"
              className="inline-flex items-center gap-3 px-8 py-4 border text-[9.5px] tracking-[0.28em] uppercase transition-all duration-300 hover:text-black"
              style={{ borderColor: `${gold}45`, color: gold }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = gold; e.currentTarget.style.color = "#000"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = gold; }}>
              Read the Story
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── EXPERIENCE GRID ───────────────────────── */}
      <section className="relative z-10 py-32 bg-[#181818]/22 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-16">
          <FadeUp className="text-center mb-20">
            <p className="text-[9.5px] tracking-[0.52em] uppercase mb-4" style={{ color: gold }}>What We Offer</p>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold">The Kezia Experience</h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5">
            {FEATURES.map(([Icon, title, desc], i) => (
              <FadeUp key={title as string} delay={i * 0.05}>
                <div className="bg-[#0D0D0D] p-8 h-full group hover:bg-[#181818] transition-colors duration-300 min-h-[190px]">
                  <Icon size={18} className="mb-5" style={{ color: gold }} />
                  <h3 className="font-['Playfair_Display',serif] text-[1rem] font-semibold mb-2.5 group-hover:text-[#D4AF37] transition-colors">{title as string}</h3>
                  <p className="text-white/36 text-[11.5px] leading-relaxed">{desc as string}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/workspace"
              className="inline-flex px-9 py-4 border text-[9.5px] tracking-[0.28em] uppercase transition-all duration-300"
              style={{ borderColor: `${gold}30`, color: gold }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = gold; e.currentTarget.style.color = "#000"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = gold; }}>
              Discover Workspace
            </Link>
          </div>
        </div>
      </section>

      {/* ── MENU TEASER ───────────────────────────── */}
      <section className="relative z-10 py-32 max-w-[1440px] mx-auto px-6 xl:px-16">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <FadeUp className="lg:col-span-1">
            <p className="text-[9.5px] tracking-[0.52em] uppercase mb-4" style={{ color: gold }}>Food & Drinks</p>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-[2.8rem] font-bold leading-[1.05] mb-6">
              What We're<br />Pouring
            </h2>
            <p className="text-white/50 text-[14.5px] leading-[1.8] mb-8">
              From stiff cocktails to bar bites that hit the spot, our menu is built for sharing, pairing, and keeping the night going.
            </p>
            <Link to="/menu"
              className="inline-flex px-8 py-4 text-black text-[9.5px] tracking-[0.28em] uppercase font-semibold transition-colors"
              style={{ backgroundColor: gold }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = goldHover)}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = gold)}>
              View Full Menu
            </Link>
          </FadeUp>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { img: IMGS.food1, name: "A5 Wagyu Tenderloin", tag: "Chef Special", price: "₹4,500" },
              { img: IMGS.food2, name: "Seared Scallops", tag: "Starter", price: "₹980" },
              { img: IMGS.cocktail1, name: "Gold Rush", tag: "Cocktail", price: "₹850" },
            ].map((item, i) => (
              <FadeUp key={item.name} delay={0.1 + i * 0.1}>
                <div className="group bg-[#181818] border border-white/5 hover:border-[#D4AF37]/16 transition-all duration-300 overflow-hidden">
                  <div className="relative h-52 overflow-hidden bg-[#0D0D0D]">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover opacity-80 group-hover:scale-106 group-hover:opacity-100 transition-all duration-600" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#181818] to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 text-[8px] tracking-[0.28em] uppercase border border-[#D4AF37]/30 backdrop-blur-sm" style={{ color: gold, backgroundColor: "rgba(0,0,0,0.5)" }}>
                      {item.tag}
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <p className="font-['Playfair_Display',serif] text-[0.95rem] font-semibold">{item.name}</p>
                    <span className="text-sm ml-3 flex-shrink-0" style={{ color: gold }}>{item.price}</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY SECTION ──────────────────────────── */}
      <section className="relative z-10 py-32 bg-[#181818]/22 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-16">
          <FadeUp className="text-center mb-16">
            <p className="text-[9.5px] tracking-[0.52em] uppercase mb-4" style={{ color: gold }}>The Spaces</p>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold">Look Around</h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[IMGS.hero, IMGS.about, IMGS.food1, IMGS.cocktail1].map((img, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="relative h-64 overflow-hidden group border border-white/5">
                  <img src={img} alt="Gallery image" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────── */}
      <section className="relative py-32 overflow-hidden bg-[#0D0D0D]">
        <div className="absolute inset-0">
          <img src={IMGS.terrace} alt="Rooftop terrace at night" className="w-full h-full object-cover opacity-28" />
          <div className="absolute inset-0 bg-[#0D0D0D]/60" />
        </div>
        <FadeUp className="relative z-10 max-w-[1440px] mx-auto px-6 xl:px-16 text-center">
          <p className="text-[9.5px] tracking-[0.55em] uppercase mb-5" style={{ color: gold }}>See You Up Here</p>
          <h2 className="font-['Playfair_Display',serif] text-[clamp(2rem,5vw,4rem)] font-bold mb-6 text-white">
            Grab A Seat<br />Before They're Gone
          </h2>
          <p className="text-white/50 text-[16px] max-w-[420px] mx-auto mb-10 leading-relaxed">
            Whether it's a date night or a squad meetup, we've got a spot with your name on it. Let's make it a night to remember.
          </p>
          <Link to="/locations"
            className="inline-flex px-12 py-5 text-black text-[9.5px] tracking-[0.32em] uppercase font-semibold transition-colors"
            style={{ backgroundColor: gold }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = goldHover)}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = gold)}>
            Find A Location
          </Link>
        </FadeUp>
      </section>
    </>
  );
}
