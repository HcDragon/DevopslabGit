import { Link } from "react-router";
import { Eye, Utensils, Music, Users, Sparkles, Wine, Heart, Award, Clock, Star } from "lucide-react";
import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";
import { IMGS, gold, goldHover, glass, glassBorder } from "../design";

const EXPERIENCES = [
  {
    icon: Eye,
    title: "360° Skyline View",
    desc: "Our terrace commands an unobstructed panoramic view of Kalyan and the Greater Mumbai Metropolitan Region. By day, you see the city's ambition stretching to the horizon. By night, a constellation of lights mirrors the sky above.",
    details: ["Open terrace seating for 80 guests","Glass-walled enclosed section for 40","Heated infrared terrace for winter evenings","Sunrise & sunset private bookings available"],
    img: IMGS.city,
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    desc: "Every dish served at Kezia is the result of days, sometimes weeks, of refinement. Chef Aarav Krishnan's kitchen operates with the precision of a fine watchmaker — obsessing over provenance, technique, and the micro-details that separate good from unforgettable.",
    details: ["7-course tasting menu available nightly","Seasonal menu updated every 8 weeks","Farm-to-table sourcing from Maharashtra","Allergen-aware kitchen with bespoke menus"],
    img: IMGS.food1,
  },
  {
    icon: Music,
    title: "Live Music",
    desc: "Music at Kezia is never background noise — it is a curated complement to the dining experience. Our resident artists perform every Thursday through Sunday, from atmospheric jazz quartets to contemporary acoustic sets.",
    details: ["Live performances Thu–Sun from 8PM","Resident jazz quartet twice monthly","Occasional visiting international artists","Custom playlist programming for private events"],
    img: IMGS.interior,
  },
  {
    icon: Award,
    title: "Chef's Table",
    desc: "The most intimate experience at Kezia — a table for up to 8 guests positioned within view of the open kitchen. Chef Aarav presents each course personally, explaining the provenance of every ingredient and the thinking behind every technique.",
    details: ["Maximum 8 guests per seating","Minimum 3-day advance booking required","Fully customizable tasting experience","Wine pairing consultation included"],
    img: IMGS.chef,
  },
];

const AMENITIES = [
  [Clock, "Hours", "Monday – Sunday\n7:00 PM – 1:00 AM"],
  [Users, "Capacity", "160 total\n80 terrace / 80 indoor"],
  [Wine, "Bar", "Full cocktail bar\n400+ wine labels"],
  [Star, "Dresscode", "Smart casual\nto formal attire"],
  [Heart, "Valet", "Complimentary\nvalet parking"],
  [Sparkles, "Music", "Live Thu–Sun\nFrom 8:00 PM"],
];

export default function Experience() {
  return (
    <>
      <PageHero tag="What Awaits You" title="The Kezia Experience" subtitle="Six floors above the city. A world apart from the ordinary." image={IMGS.terrace} imageAlt="Rooftop terrace illuminated at night" height="h-[60vh] min-h-[440px]" />

      {/* ── EXPERIENCE DETAILS ────────────────────── */}
      <section className="py-20 max-w-[1440px] mx-auto px-6 xl:px-16">
        <div className="space-y-32">
          {EXPERIENCES.map((exp, i) => (
            <FadeUp key={exp.title} delay={0.05}>
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-12 h-12 border flex items-center justify-center mb-6" style={{ borderColor: `${gold}35` }}>
                    <exp.icon size={20} style={{ color: gold }} />
                  </div>
                  <p className="text-[9.5px] tracking-[0.52em] uppercase mb-3" style={{ color: gold }}>Signature Experience</p>
                  <h2 className="font-['Playfair_Display',serif] text-3xl md:text-[2.5rem] font-bold leading-[1.05] mb-6">{exp.title}</h2>
                  <p className="text-white/45 text-[14.5px] leading-[1.82] mb-8">{exp.desc}</p>
                  <ul className="space-y-3 mb-10">
                    {exp.details.map(d => (
                      <li key={d} className="flex items-start gap-3 text-[13px] text-white/52">
                        <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: gold }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link to="/reservations"
                    className="inline-flex px-8 py-4 border text-[9.5px] tracking-[0.28em] uppercase transition-all duration-300"
                    style={{ borderColor: `${gold}42`, color: gold }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = gold; e.currentTarget.style.color = "#000"; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = gold; }}>
                    Book This Experience
                  </Link>
                </div>
                <div className={`relative ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <img src={exp.img} alt={exp.title} className="w-full h-[480px] object-cover bg-[#181818]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/20 to-transparent" />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── AMENITIES ─────────────────────────────── */}
      <section className="py-28 bg-[#181818]/22">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-16">
          <FadeUp className="text-center mb-16">
            <p className="text-[9.5px] tracking-[0.52em] uppercase mb-4" style={{ color: gold }}>At a Glance</p>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold">Venue Details</h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5">
            {AMENITIES.map(([Icon, label, value]) => (
              <FadeUp key={label as string}>
                <div className="bg-[#0D0D0D] px-6 py-10 text-center group hover:bg-[#181818] transition-colors duration-300">
                  <Icon size={20} className="mx-auto mb-5" style={{ color: gold }} />
                  <p className="text-[8.5px] tracking-[0.3em] uppercase mb-3 text-white/38">{label as string}</p>
                  <p className="text-[12.5px] text-white/65 whitespace-pre-line leading-relaxed">{value as string}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── DRESS CODE & ETIQUETTE ────────────────── */}
      <section className="py-28 max-w-[1440px] mx-auto px-6 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <img src={IMGS.wine} alt="Elegant table setting with wine" className="w-full h-[500px] object-cover bg-[#181818]" />
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[9.5px] tracking-[0.52em] uppercase mb-5" style={{ color: gold }}>Our Standards</p>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-[2.8rem] font-bold leading-[1.05] mb-8">
              Dress Code &<br />Etiquette
            </h2>
            {[
              { title: "Smart Casual Minimum", desc: "We ask that gentlemen avoid athletic wear, flip-flops, and shorts. Ladies may wear cocktail attire or smart separates." },
              { title: "Formal Occasions", desc: "For Chef's Table and private dining experiences, we recommend formal or semi-formal attire. We can provide a curated styling brief on request." },
              { title: "Children & Guests", desc: "Kezia is an exclusively adult dining environment during evening service. We welcome guests 16 years and above for dinner." },
              { title: "Photography", desc: "Discreet personal photography is welcome. Professional photography sessions require advance coordination with our team." },
            ].map(({ title, desc }) => (
              <div key={title} className="mb-6 pb-6 border-b border-white/5 last:border-0 last:mb-0 last:pb-0">
                <h3 className="font-['Playfair_Display',serif] text-[1.05rem] font-semibold mb-2">{title}</h3>
                <p className="text-white/42 text-[13px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* ── TESTIMONIAL PULL QUOTE ────────────────── */}
      <section className="py-24 border-y border-white/5">
        <FadeUp className="max-w-[800px] mx-auto px-6 xl:px-16 text-center">
          <p className="font-['Playfair_Display',serif] text-[1.55rem] md:text-[2rem] italic text-white/72 leading-[1.55] mb-8">
            "It is not a restaurant — it is an entire atmosphere. The moment the elevator opens onto the terrace, the city falls away and something else takes over entirely."
          </p>
          <p className="text-[9.5px] tracking-[0.38em] uppercase text-white/35">— Condé Nast Traveller India, 2024</p>
        </FadeUp>
      </section>
    </>
  );
}
