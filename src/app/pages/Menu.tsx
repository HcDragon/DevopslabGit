import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";
import { IMGS, gold, goldHover } from "../design";

const CATS = ["Chef Specials","Starters","Pizza","Pasta","Chinese","North Indian","Biryani","Desserts","Mocktails","Cocktails"];

type Item = { name: string; desc: string; price: string; img: string; badge?: string };
const DATA: Record<string, Item[]> = {
  "Chef Specials": [
    { name: "A5 Wagyu Tenderloin", desc: "Japanese A5 Wagyu, bone marrow butter, truffle jus, potato mousseline & microgreens", price: "₹4,500", img: IMGS.food1, badge: "Signature" },
    { name: "Tasting Menu · 7 Courses", desc: "Chef Aarav's culinary narrative — locally foraged, globally inspired, with optional wine pairing per course", price: "₹8,500", img: IMGS.food2, badge: "Exclusive" },
    { name: "Whole Lobster Thermidor", desc: "Gratin lobster tail with brandy cream, gruyère crust & tarragon oil", price: "₹3,800", img: IMGS.food3 },
  ],
  Starters: [
    { name: "Rooftop Bruschetta", desc: "Sourdough toast, heirloom tomatoes, basil oil & black truffle shavings", price: "₹450", img: IMGS.food1 },
    { name: "Seared Scallops", desc: "Pan-seared scallops with cauliflower purée & Ossetra caviar", price: "₹980", img: IMGS.food2, badge: "Bestseller" },
    { name: "Burrata Salad", desc: "Imported burrata, roasted heirloom beets & 12-year aged balsamic", price: "₹750", img: IMGS.food3 },
  ],
  Pizza: [
    { name: "Black Truffle Pizza", desc: "Crème fraîche base, black truffle, fontina & wild arugula", price: "₹1,200", img: IMGS.food1 },
    { name: "Prawn Aglio", desc: "Garlic-butter tiger prawns, Calabrian chili on stone-baked crust", price: "₹1,100", img: IMGS.food2 },
    { name: "Quattro Formaggi", desc: "Four-cheese blend, truffle honey drizzle & fresh rosemary crust", price: "₹950", img: IMGS.food3 },
  ],
  Pasta: [
    { name: "Lobster Linguine", desc: "Fresh linguine, lobster bisque, cherry tomatoes & tarragon butter", price: "₹1,450", img: IMGS.food2, badge: "Chef's Pick" },
    { name: "Truffle Tagliatelle", desc: "Hand-rolled tagliatelle, black truffle cream & aged Parmigiano-Reggiano", price: "₹1,200", img: IMGS.food1 },
    { name: "Burro e Salvia", desc: "Sage butter tortellini stuffed with whipped ricotta & Meyer lemon zest", price: "₹850", img: IMGS.food3 },
  ],
  Chinese: [
    { name: "Peking Duck Roll", desc: "Crispy duck in house-made pancakes, hoisin, cucumber & scallions", price: "₹1,100", img: IMGS.food1 },
    { name: "Dim Sum Platter", desc: "Chef's selection of 6 premium dim sum with trio of artisan dipping sauces", price: "₹950", img: IMGS.food2 },
    { name: "Kung Pao Tiger Prawns", desc: "Tiger prawns in Sichuan sauce, roasted cashews & tri-color peppers", price: "₹1,050", img: IMGS.food3 },
  ],
  "North Indian": [
    { name: "Dal Makhani", desc: "Slow-cooked black lentils in rich tomato-cream gravy, charred butter", price: "₹450", img: IMGS.food1, badge: "Classic" },
    { name: "Butter Chicken", desc: "Tandoor-grilled free-range chicken in velvety makhani sauce", price: "₹650", img: IMGS.food2 },
    { name: "Paneer Tikka", desc: "Charred cottage cheese with mint chutney & saffron aioli", price: "₹550", img: IMGS.food3 },
  ],
  Biryani: [
    { name: "Dum Gosht Biryani", desc: "Slow-cooked mutton dum biryani, saffron rice & saffron raita", price: "₹750", img: IMGS.food1, badge: "Bestseller" },
    { name: "Royal Chicken Dum", desc: "Aromatic chicken biryani, caramelized onions & kewra water", price: "₹650", img: IMGS.food2 },
    { name: "Kezia Special Veg", desc: "Seasonal vegetables, aged basmati, caramelized onion & pure ghee", price: "₹550", img: IMGS.food3 },
  ],
  Desserts: [
    { name: "Dark Chocolate Soufflé", desc: "Warm 72% Valrhona soufflé with vanilla bean ice cream & gold leaf", price: "₹650", img: IMGS.food1, badge: "Signature" },
    { name: "Crème Brûlée", desc: "Classic vanilla custard, torched sugar crust & seasonal berry compote", price: "₹480", img: IMGS.food2 },
    { name: "Gulab Jamun Fondant", desc: "Fusion fondant, rose syrup coulis & saffron gelato", price: "₹520", img: IMGS.food3 },
  ],
  Mocktails: [
    { name: "Mumbai Sunrise", desc: "Fresh orange, grenadine, lime juice & chilled sparkling water", price: "₹320", img: IMGS.cocktail1 },
    { name: "Rooftop Garden", desc: "Cucumber, mint, elderflower cordial & premium Fever-Tree tonic", price: "₹350", img: IMGS.cocktail2 },
    { name: "Spiced Mango Fizz", desc: "Alphonso mango, tajín rim, ginger beer & fresh lime", price: "₹340", img: IMGS.cocktail1 },
  ],
  Cocktails: [
    { name: "Gold Rush", desc: "Honey-washed bourbon, Meyer lemon & 24K edible gold leaf garnish", price: "₹850", img: IMGS.cocktail1, badge: "Signature" },
    { name: "Kezia Signature", desc: "Aged rum, black cardamom, Valrhona chocolate & smoked ice sphere", price: "₹920", img: IMGS.cocktail2 },
    { name: "Skyline Spritz", desc: "Aperol, Prosecco di Valdobbiadene, blood orange & charred rosemary", price: "₹780", img: IMGS.cocktail1 },
  ],
};

export default function Menu() {
  const [cat, setCat] = useState("Chef Specials");

  return (
    <>
      <PageHero tag="Culinary Journey" title="Signature Menu" subtitle="Every dish is a composed dialogue between globally sourced ingredients and the culinary traditions of India." image={IMGS.food1} imageAlt="Fine dining plated dish" />

      {/* ── CATEGORY TABS ─────────────────────────── */}
      <div className="sticky top-[68px] z-40 bg-[#0D0D0D]/94 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-16">
          <div className="flex overflow-x-auto gap-0 scrollbar-none">
            {CATS.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className={`px-6 py-5 text-[9px] tracking-[0.22em] uppercase whitespace-nowrap flex-shrink-0 border-b-2 transition-all duration-300 ${cat === c ? "border-[#D4AF37] text-[#D4AF37]" : "border-transparent text-white/45 hover:text-[#D4AF37]"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MENU ITEMS ────────────────────────────── */}
      <section className="py-20 max-w-[1440px] mx-auto px-6 xl:px-16">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[9.5px] tracking-[0.52em] uppercase mb-2" style={{ color: gold }}>{cat}</p>
            <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold">{cat === "Chef Specials" ? "The Pinnacle of Our Kitchen" : `Our ${cat} Collection`}</h2>
          </div>
          <p className="text-white/30 text-sm hidden md:block">{DATA[cat]?.length} Items</p>
        </div>

        <motion.div key={cat} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-14">
          {DATA[cat]?.map(item => (
            <div key={item.name} className="group bg-[#181818] border border-white/5 hover:border-[#D4AF37]/16 transition-all duration-300 overflow-hidden">
              <div className="relative h-60 overflow-hidden bg-[#0D0D0D]">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover opacity-78 group-hover:opacity-100 group-hover:scale-106 transition-all duration-600" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#181818] to-transparent" />
                {item.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 text-[8px] tracking-[0.28em] uppercase border backdrop-blur-sm" style={{ color: gold, borderColor: `${gold}38`, backgroundColor: "rgba(0,0,0,0.55)" }}>
                    {item.badge}
                  </div>
                )}
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-['Playfair_Display',serif] text-[1.05rem] font-semibold leading-tight">{item.name}</h3>
                  <span className="text-sm font-medium ml-4 flex-shrink-0" style={{ color: gold }}>{item.price}</span>
                </div>
                <p className="text-white/38 text-[12px] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Dietary & Allergen note */}
        <div className="border border-white/6 p-6 flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <p className="text-white/35 text-[12px] leading-relaxed max-w-[540px]">
            All dishes can be adapted for dietary requirements including vegan, gluten-free, and Jain. Please inform your server of any allergies or preferences when making your reservation.
          </p>
          <Link to="/reservations"
            className="flex-shrink-0 px-8 py-3.5 text-black text-[9px] tracking-[0.28em] uppercase font-semibold transition-colors"
            style={{ backgroundColor: gold }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = goldHover)}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = gold)}>
            Book & Order
          </Link>
        </div>
      </section>

      {/* ── WINE & BAR ────────────────────────────── */}
      <section className="py-24 bg-[#181818]/22">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <p className="text-[9.5px] tracking-[0.52em] uppercase mb-4" style={{ color: gold }}>The Bar</p>
              <h2 className="font-['Playfair_Display',serif] text-4xl md:text-[2.8rem] font-bold leading-[1.05] mb-6">
                Award-Winning<br />Cocktail Program
              </h2>
              <p className="text-white/42 text-[14px] leading-[1.8] mb-8">
                Our bar is led by Head Mixologist Siddharth Rao, formerly of Jigger & Pony Singapore. The cocktail program draws on a 400-label wine cellar, rare spirits sourced globally, and botanicals grown on our rooftop herb garden.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[["400+","Wine Labels"],["120+","Premium Spirits"],["30+","Signature Cocktails"]].map(([n,l]) => (
                  <div key={l} className="text-center border border-white/6 py-5">
                    <p className="font-['Playfair_Display',serif] text-[1.7rem] font-bold mb-1" style={{ color: gold }}>{n}</p>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-white/32">{l}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <img src={IMGS.cocktail1} alt="Kezia signature cocktail" className="w-full h-72 object-cover bg-[#181818] col-span-2" />
                <img src={IMGS.cocktail2} alt="Craft cocktails" className="w-full h-44 object-cover bg-[#181818]" />
                <img src={IMGS.bar} alt="The bar counter" className="w-full h-44 object-cover bg-[#181818]" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
