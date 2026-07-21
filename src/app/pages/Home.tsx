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
            <div className="relative aspect-[4/5] max-h-[560px] w-full overflow-hidden rounded-sm border border-white/10 shadow-2xl bg-[#181818]">
              <img src={IMGS.about} alt="Kezia Ambient Bliss Entrance" className="w-full h-full object-cover object-center" />
              <div className="absolute bottom-5 right-5 px-7 py-5 hidden md:block backdrop-blur-md shadow-2xl border border-black/20" style={{ backgroundColor: gold }}>
                <p className="font-['Playfair_Display',serif] text-black text-[2rem] font-bold leading-none">12+</p>
                <p className="text-black/75 text-[8px] tracking-[0.28em] uppercase font-semibold mt-1">Years of Craft</p>
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
            <Link to="/gallery"
              className="inline-flex px-9 py-4 border text-[9.5px] tracking-[0.28em] uppercase transition-all duration-300"
              style={{ borderColor: `${gold}30`, color: gold }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = gold; e.currentTarget.style.color = "#000"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = gold; }}>
              Explore Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ── OFFICIAL KEZIA SPOTLIGHT GALLERY ───────────── */}
      <section className="relative z-10 py-32 bg-[#141414]">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-16">
          <FadeUp className="text-center mb-16 max-w-[700px] mx-auto">
            <p className="text-[9.5px] tracking-[0.55em] uppercase mb-4" style={{ color: gold }}>Official Gallery</p>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold mb-4 text-white">Experience Kezia</h2>
            <p className="text-white/45 text-[14.5px] leading-relaxed">
              Step inside our rooftop venue in Kalyan. From ambient glowing foyers to artisan cocktail pairings and handcrafted sushi rolls.
            </p>
          </FadeUp>

          {/* 5-Card Uncropped Portrait Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-start">
            {[
              {
                img: IMGS.rooftopGlow,
                title: "Nights Glow at Kezia",
                subtitle: "Rooftop Night Ambiance",
                desc: "Open-air rooftop seating with warm glowing lotus light sculptures & plush armchairs."
              },
              {
                img: IMGS.ambientEntrance,
                title: "Ambient Bliss",
                subtitle: "Entrance Foyer",
                desc: "Brick archway entrance featuring illuminated KEZIA sun emblem & textured walls."
              },
              {
                img: IMGS.cocktailWings,
                title: "Hibiscus Spritz & Wings",
                subtitle: "Signature Pairing",
                desc: "Rooftop hibiscus red cocktail served alongside chef-spiced glazed wings & microgreens."
              },
              {
                img: IMGS.sushiGourmet,
                title: "Artisan Gourmet Sushi",
                subtitle: "Chef's Special",
                desc: "Hand-rolled sushi with spicy mayo drizzle, edible orchid bloom & soy reduction."
              },
              {
                img: IMGS.skewersJuice,
                title: "Satay & Citrus Cooler",
                subtitle: "Bar Bites & Juice",
                desc: "Flame-grilled chicken satay on banana leaf with sauce art & fresh orange juice."
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.08} className="h-full">
                <Link to="/gallery">
                  <div className="group relative aspect-[4/5] w-full overflow-hidden bg-black border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 rounded-md shadow-2xl">
                    {/* Uncropped Photo */}
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-104 transition-transform duration-700"
                    />

                    {/* Hover Overlay with Photo Information */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-400 p-5 flex flex-col justify-end text-left">
                      <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                        <p className="text-[8px] tracking-[0.3em] uppercase mb-1 font-semibold" style={{ color: gold }}>{item.subtitle}</p>
                        <h3 className="font-['Playfair_Display',serif] text-base font-bold text-white mb-1.5 leading-snug">{item.title}</h3>
                        <p className="text-white/75 text-[11.5px] leading-relaxed line-clamp-3 mb-2">{item.desc}</p>
                        <span className="text-[8.5px] tracking-[0.25em] uppercase font-semibold text-[#D4AF37]">View in Gallery →</span>
                      </div>
                    </div>
                  </div>
                </Link>
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
