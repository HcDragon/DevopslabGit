import { Link } from "react-router";
import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";
import { IMGS, gold, goldHover } from "../design";

const TIMELINE = [
  { year: "2012", title: "The Vision", desc: "Founder Meera Krishnan envisioned a rooftop fine dining destination that would redefine hospitality in Kalyan, Maharashtra." },
  { year: "2014", title: "First Star", desc: "Within two years, Kezia earned recognition as Maharashtra's most exceptional rooftop dining experience and won the Times Food Award." },
  { year: "2017", title: "Chef Aarav", desc: "Executive Chef Aarav Krishnan joined from London's acclaimed Sketch restaurant, elevating the menu to international standards." },
  { year: "2020", title: "Reimagined", desc: "A complete interior redesign by OBMI Architecture introduced the cinematic black-and-gold aesthetic the venue is celebrated for today." },
  { year: "2023", title: "Private Wing", desc: "Launch of the exclusive Kezia Private Wing — 6 intimate dining rooms for up to 40 guests, each with a unique panoramic view." },
  { year: "2025", title: "Global Recognition", desc: "Featured in Condé Nast Traveller's Asia Top 50 Restaurants and awarded India's Most Luxurious Rooftop Dining Experience." },
];

const TEAM = [
  { name: "Meera Krishnan", role: "Founder & CEO", img: IMGS.interior, quote: "True luxury is the feeling that every detail was placed there just for you." },
  { name: "Chef Aarav Krishnan", role: "Executive Chef", img: IMGS.chef, quote: "I cook not to impress, but to connect — with the land, the ingredient, and the soul across the table." },
  { name: "Rohan Malhotra", role: "Head of Experiences", img: IMGS.bar, quote: "Every evening at Kezia should feel like the most memorable night of a guest's year." },
];

const VALUES = [
  { n: "01", title: "Elevation", desc: "We believe great dining should lift the soul as surely as it delights the palate. Every choice is made in service of that principle." },
  { n: "02", title: "Provenance", desc: "We trace every ingredient to its source. Hyper-local Maharashtra produce meets globally sourced specialities with complete transparency." },
  { n: "03", title: "Craft", desc: "From the bread baked each morning to the cocktail stirred tableside — we pursue mastery without exception." },
  { n: "04", title: "Warmth", desc: "Luxury without genuine hospitality is just décor. We train our team to make every guest feel recognized, not just served." },
];

export default function About() {
  return (
    <>
      <PageHero tag="Our Story" title={"More Than\nA Restaurant"} subtitle="A sanctuary of gastronomy and elevation, twelve years in the making." image={IMGS.about} imageAlt="Kezia Rooftop luxury interior" height="h-[58vh] min-h-[420px]" />

      {/* ── STORY ─────────────────────────────────── */}
      <section className="py-32 max-w-[1440px] mx-auto px-6 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <FadeUp>
            <p className="text-[9.5px] tracking-[0.52em] uppercase mb-5" style={{ color: gold }}>The Beginning</p>
            <h2 className="font-['Playfair_Display',serif] text-[2.5rem] md:text-[3rem] font-bold leading-[1.05] mb-7">
              Born From a Singular<br />Vision
            </h2>
            <p className="text-white/48 leading-[1.82] mb-5 text-[14.5px]">
              Perched at the pinnacle of Kalyan, Kezia Rooftop Fine Dine was born from a singular vision: to craft an experience where gastronomy and elevation converge into something genuinely unforgettable.
            </p>
            <p className="text-white/38 leading-[1.82] mb-6 text-[13.5px]">
              Our 360° panoramic terrace commands the most breathtaking view in Maharashtra — a living canvas that changes with the light, the season, and the hour. Below you, the city pulses. Above, the sky opens.
            </p>
            <p className="text-white/38 leading-[1.82] text-[13.5px]">
              Every dish served here is a dialogue between classical French technique and bold innovation — driven by Executive Chef Aarav Krishnan's philosophy that fine dining should feel like both a privilege and a homecoming simultaneously.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <img src={IMGS.interior} alt="Kezia dining room" className="w-full h-72 object-cover bg-[#181818] col-span-2" />
              <img src={IMGS.food1} alt="Signature dish" className="w-full h-48 object-cover bg-[#181818]" />
              <img src={IMGS.chef} alt="Chef Aarav in kitchen" className="w-full h-48 object-cover bg-[#181818]" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────── */}
      <section className="py-28 bg-[#181818]/22">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-16">
          <FadeUp className="text-center mb-20">
            <p className="text-[9.5px] tracking-[0.52em] uppercase mb-4" style={{ color: gold }}>What We Stand For</p>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold">Our Values</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {VALUES.map((v, i) => (
              <FadeUp key={v.n} delay={i * 0.1}>
                <div className="bg-[#0D0D0D] p-10 group hover:bg-[#181818] transition-colors duration-300 min-h-[280px]">
                  <p className="font-['Playfair_Display',serif] text-[2.8rem] font-bold mb-5 opacity-15" style={{ color: gold }}>{v.n}</p>
                  <h3 className="font-['Playfair_Display',serif] text-xl font-semibold mb-3 group-hover:text-[#D4AF37] transition-colors">{v.title}</h3>
                  <p className="text-white/38 text-[12.5px] leading-relaxed">{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────── */}
      <section className="py-32 max-w-[1440px] mx-auto px-6 xl:px-16">
        <FadeUp className="text-center mb-20">
          <p className="text-[9.5px] tracking-[0.52em] uppercase mb-4" style={{ color: gold }}>Our Journey</p>
          <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold">Twelve Years of Craft</h2>
        </FadeUp>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/8" />
          <div className="space-y-0">
            {TIMELINE.map((item, i) => (
              <FadeUp key={item.year} delay={i * 0.08}>
                <div className={`grid md:grid-cols-2 gap-12 items-center py-12 border-b border-white/5 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <p className="font-['Playfair_Display',serif] text-[2.2rem] font-bold mb-2" style={{ color: gold }}>{item.year}</p>
                    <h3 className="font-['Playfair_Display',serif] text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-white/42 text-[13.5px] leading-relaxed">{item.desc}</p>
                  </div>
                  <div className={`hidden md:flex items-center ${i % 2 === 1 ? "justify-start md:order-1" : "justify-end"}`}>
                    <div className="w-3 h-3 rounded-full border-2 border-[#D4AF37]" style={{ backgroundColor: gold }} />
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────── */}
      <section className="py-32 bg-[#181818]/22">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-16">
          <FadeUp className="text-center mb-20">
            <p className="text-[9.5px] tracking-[0.52em] uppercase mb-4" style={{ color: gold }}>The People</p>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold">Meet Our Team</h2>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <FadeUp key={member.name} delay={i * 0.12}>
                <div className="group">
                  <div className="relative overflow-hidden h-80 bg-[#181818] mb-6">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-600" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent" />
                  </div>
                  <p className="text-[8.5px] tracking-[0.38em] uppercase mb-2" style={{ color: gold }}>{member.role}</p>
                  <h3 className="font-['Playfair_Display',serif] text-xl font-semibold mb-3">{member.name}</h3>
                  <blockquote className="border-l-2 pl-4 text-white/42 text-[13px] italic leading-relaxed" style={{ borderColor: `${gold}50` }}>
                    "{member.quote}"
                  </blockquote>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 xl:px-16 text-center">
        <FadeUp>
          <p className="text-[9.5px] tracking-[0.52em] uppercase mb-5" style={{ color: gold }}>Come Experience It</p>
          <h2 className="font-['Playfair_Display',serif] text-[2.5rem] md:text-5xl font-bold mb-6">The Story Continues<br />at Your Table</h2>
          <p className="text-white/42 text-[15px] mb-10 max-w-[400px] mx-auto leading-relaxed">
            Every evening at Kezia is a new chapter. Come write yours above the city.
          </p>
          <Link to="/reservations"
            className="inline-flex px-12 py-5 text-black text-[9.5px] tracking-[0.32em] uppercase font-semibold transition-colors"
            style={{ backgroundColor: gold }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = goldHover)}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = gold)}>
            Reserve Your Table
          </Link>
        </FadeUp>
      </section>
    </>
  );
}
