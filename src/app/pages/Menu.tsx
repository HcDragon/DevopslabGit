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
    { name: "Kezia Glazed Wings & Hibiscus Elixir", desc: "House-spiced glazed wings with microgreens paired with our signature hibiscus-berry cocktail", price: "₹1,250", img: IMGS.cocktailWings, badge: "Signature" },
    { name: "Edible Flower Gourmet Sushi Roll", desc: "Artisan sushi roll topped with spicy mayo drizzle, edible orchid bloom & house soy reduction", price: "₹1,150", img: IMGS.sushiGourmet, badge: "Chef's Pick" },
    { name: "Charred Satay Skewers & Citrus Cooler", desc: "Flame-grilled chicken skewers with banana leaf presentation, lotus sauce art & fresh orange juice", price: "₹950", img: IMGS.skewersJuice, badge: "Bestseller" },
  ],
  Starters: [
    { name: "Signature Glazed Wings", desc: "Crispy wings tossed in sweet chili glaze, garnished with fresh micro herbs", price: "₹650", img: IMGS.cocktailWings, badge: "Bestseller" },
    { name: "Tuna & Salmon Gourmet Roll", desc: "Handcrafted sushi roll with spicy kewpie aioli and edible flower petals", price: "₹880", img: IMGS.sushiGourmet, badge: "Fresh" },
    { name: "Charred Satay Skewers", desc: "Tender skewered chicken with house peanut glaze & decorative sauce art", price: "₹580", img: IMGS.skewersJuice },
  ],
  Pizza: [
    { name: "Black Truffle Pizza", desc: "Crème fraîche base, black truffle, fontina & wild arugula", price: "₹1,200", img: IMGS.cocktailWings },
    { name: "Prawn Aglio", desc: "Garlic-butter tiger prawns, Calabrian chili on stone-baked crust", price: "₹1,100", img: IMGS.sushiGourmet },
    { name: "Quattro Formaggi", desc: "Four-cheese blend, truffle honey drizzle & fresh rosemary crust", price: "₹950", img: IMGS.skewersJuice },
  ],
  Pasta: [
    { name: "Lobster Linguine", desc: "Fresh linguine, lobster bisque, cherry tomatoes & tarragon butter", price: "₹1,450", img: IMGS.sushiGourmet, badge: "Chef's Pick" },
    { name: "Truffle Tagliatelle", desc: "Hand-rolled tagliatelle, black truffle cream & aged Parmigiano-Reggiano", price: "₹1,200", img: IMGS.cocktailWings },
    { name: "Burro e Salvia", desc: "Sage butter tortellini stuffed with whipped ricotta & Meyer lemon zest", price: "₹850", img: IMGS.skewersJuice },
  ],
  Chinese: [
    { name: "Artisan Gourmet Sushi", desc: "Hand-rolled specialty rolls with edible blooms and dark soy reduction", price: "₹880", img: IMGS.sushiGourmet, badge: "Recommended" },
    { name: "Peking Duck Roll", desc: "Crispy duck in house-made pancakes, hoisin, cucumber & scallions", price: "₹1,100", img: IMGS.cocktailWings },
    { name: "Dim Sum Platter", desc: "Chef's selection of 6 premium dim sum with trio of artisan dipping sauces", price: "₹950", img: IMGS.skewersJuice },
  ],
  "North Indian": [
    { name: "Flame-Grilled Satay", desc: "Tandoori-spiced chicken skewers with lotus sauce painting", price: "₹580", img: IMGS.skewersJuice, badge: "House Special" },
    { name: "Dal Makhani", desc: "Slow-cooked black lentils in rich tomato-cream gravy, charred butter", price: "₹450", img: IMGS.cocktailWings, badge: "Classic" },
    { name: "Butter Chicken", desc: "Tandoor-grilled free-range chicken in velvety makhani sauce", price: "₹650", img: IMGS.sushiGourmet },
  ],
  Biryani: [
    { name: "Dum Gosht Biryani", desc: "Slow-cooked mutton dum biryani, saffron rice & saffron raita", price: "₹750", img: IMGS.cocktailWings, badge: "Bestseller" },
    { name: "Royal Chicken Dum", desc: "Aromatic chicken biryani, caramelized onions & kewra water", price: "₹650", img: IMGS.skewersJuice },
    { name: "Kezia Special Veg", desc: "Seasonal vegetables, aged basmati, caramelized onion & pure ghee", price: "₹550", img: IMGS.sushiGourmet },
  ],
  Desserts: [
    { name: "Dark Chocolate Soufflé", desc: "Warm 72% Valrhona soufflé with vanilla bean ice cream & gold leaf", price: "₹650", img: IMGS.cocktailWings, badge: "Signature" },
    { name: "Crème Brûlée", desc: "Classic vanilla custard, torched sugar crust & seasonal berry compote", price: "₹480", img: IMGS.sushiGourmet },
    { name: "Gulab Jamun Fondant", desc: "Fusion fondant, rose syrup coulis & saffron gelato", price: "₹520", img: IMGS.skewersJuice },
  ],
  Mocktails: [
    { name: "Fresh Squeezed Citrus Cooler", desc: "Chilled fresh orange juice with citrus wedge & sugarcane undertones", price: "₹320", img: IMGS.skewersJuice, badge: "Fresh" },
    { name: "Hibiscus & Berry Spritzer", desc: "Rooftop hibiscus infusion, berry reduction & crushed ice", price: "₹350", img: IMGS.cocktailWings, badge: "Bestseller" },
    { name: "Spiced Mango Fizz", desc: "Alphonso mango, tajín rim, ginger beer & fresh lime", price: "₹340", img: IMGS.skewersJuice },
  ],
  Cocktails: [
    { name: "Kezia Red Hibiscus Cocktail", desc: "Rooftop hibiscus gin, elderflower, red berry reduction & edible bloom", price: "₹850", img: IMGS.cocktailWings, badge: "Signature" },
    { name: "Nights Glow Bourbon", desc: "Aged bourbon, orange bitters, smoked ice sphere & citrus peel", price: "₹920", img: IMGS.skewersJuice },
    { name: "Skyline Spritz", desc: "Aperol, Prosecco di Valdobbiadene, blood orange & charred rosemary", price: "₹780", img: IMGS.cocktailWings },
  ],
};

export default function Menu() {
  const [cat, setCat] = useState("Chef Specials");

  return (
    <>
      <PageHero tag="Culinary Journey" title="Signature Menu" subtitle="Every dish is a composed dialogue between globally sourced ingredients and the culinary traditions of India." image={IMGS.sushiGourmet} imageAlt="Fine dining plated dish" />

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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch mb-14">
          {DATA[cat]?.map(item => (
            <div key={item.name} className="group flex flex-col h-full bg-[#181818] border border-white/8 hover:border-[#D4AF37]/30 transition-all duration-300 overflow-hidden rounded-sm shadow-lg">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0D0D0D]">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#181818] to-transparent" />
                {item.badge && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 text-[8px] tracking-[0.25em] uppercase border backdrop-blur-md rounded-xs" style={{ color: gold, borderColor: `${gold}40`, backgroundColor: "rgba(0,0,0,0.65)" }}>
                    {item.badge}
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-['Playfair_Display',serif] text-[1.05rem] font-semibold leading-tight text-white/90">{item.name}</h3>
                  <span className="text-sm font-semibold flex-shrink-0" style={{ color: gold }}>{item.price}</span>
                </div>
                <p className="text-white/40 text-[12.5px] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Dietary & Allergen note */}
        <div className="border border-white/6 p-6 flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <p className="text-white/35 text-[12px] leading-relaxed max-w-[540px]">
            All dishes can be adapted for dietary requirements including vegan, gluten-free, and Jain. Please inform your server of any allergies or preferences when visiting.
          </p>
          <Link to="/contact"
            className="flex-shrink-0 px-8 py-3.5 text-black text-[9px] tracking-[0.28em] uppercase font-semibold transition-colors"
            style={{ backgroundColor: gold }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = goldHover)}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = gold)}>
            Contact Us
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
                <img src={IMGS.cocktailWings} alt="Kezia signature cocktail" className="w-full h-72 object-cover bg-[#181818] col-span-2 rounded-sm border border-white/10" />
                <img src={IMGS.skewersJuice} alt="Craft cocktails" className="w-full h-44 object-cover bg-[#181818] rounded-sm border border-white/10" />
                <img src={IMGS.sushiGourmet} alt="Gourmet sushi" className="w-full h-44 object-cover bg-[#181818] rounded-sm border border-white/10" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
