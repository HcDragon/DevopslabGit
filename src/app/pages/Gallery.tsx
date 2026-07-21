import { useState } from "react";
import { Link } from "react-router";
import { X, ZoomIn } from "lucide-react";
import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";
import { IMGS, gold, goldHover } from "../design";

type GalleryItem = {
  id: string;
  img: string;
  title: string;
  category: "Ambiance" | "Dishes" | "Cocktails";
  subtitle: string;
  desc: string;
};

const PHOTOS: GalleryItem[] = [
  {
    id: "rooftop-glow",
    img: IMGS.rooftopGlow,
    title: "Nights Glow at Kezia",
    category: "Ambiance",
    subtitle: "Rooftop Terrace at Night",
    desc: "Open-air rooftop seating in Kalyan with warm glowing lotus light sculptures, round wooden dining tables, and plush leather armchairs.",
  },
  {
    id: "ambient-entrance",
    img: IMGS.ambientEntrance,
    title: "Ambient Bliss",
    category: "Ambiance",
    subtitle: "Entrance Foyer & Lounge",
    desc: "Warmly lit brick archway entry featuring illuminated KEZIA sun emblem on textured walls and rustic wooden console craftsmanship.",
  },
  {
    id: "cocktail-wings",
    img: IMGS.cocktailWings,
    title: "Hibiscus Cocktail & Glazed Wings",
    category: "Cocktails",
    subtitle: "Signature Pairing",
    desc: "Rooftop hibiscus red cocktail served in tall glassware alongside chef-spiced glazed chicken wings with microgreen garnish & sauce swirl art.",
  },
  {
    id: "sushi-gourmet",
    img: IMGS.sushiGourmet,
    title: "Edible Flower Gourmet Sushi",
    category: "Dishes",
    subtitle: "Chef's Fine Dining Roll",
    desc: "Artisan sushi roll topped with spicy mayo drizzle, edible orchid bloom, chopsticks presentation, and dark soy reduction dipping dish.",
  },
  {
    id: "skewers-juice",
    img: IMGS.skewersJuice,
    title: "Charred Satay & Citrus Cooler",
    category: "Dishes",
    subtitle: "Bar Bites & Fresh Juice",
    desc: "Flame-grilled chicken satay on banana leaf with pink flower sauce art on a round white plate, accompanied by fresh orange juice.",
  },
];

const CATS = ["All", "Ambiance", "Dishes", "Cocktails"] as const;

export default function Gallery() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filtered = cat === "All" ? PHOTOS : PHOTOS.filter(p => p.category === cat);

  return (
    <>
      <PageHero
        tag="Visual Journey"
        title={"Official Kezia\nPhoto Gallery"}
        subtitle="Step inside Kalyan's premier rooftop venue. Explore our glowing night ambiance, artisan sushi rolls, and handcrafted cocktails."
        image={IMGS.terrace}
        imageAlt="Kezia Rooftop Kalyan Night Terrace"
      />

      {/* ── CATEGORY TABS ─────────────────────────── */}
      <section className="py-12 bg-[#0D0D0D] border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-16 flex flex-wrap justify-center gap-3">
          {CATS.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-8 py-3 text-[9.5px] tracking-[0.28em] uppercase transition-all duration-300 rounded-xs border ${
                cat === c
                  ? "border-[#D4AF37] text-black font-semibold"
                  : "border-white/10 text-white/50 hover:border-[#D4AF37]/50 hover:text-white"
              }`}
              style={{ backgroundColor: cat === c ? gold : "transparent" }}
            >
              {c} {c === "All" ? `(${PHOTOS.length})` : `(${PHOTOS.filter(p => p.category === c).length})`}
            </button>
          ))}
        </div>
      </section>

      {/* ── PHOTO GRID ────────────────────────────── */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
          {filtered.map((photo, i) => (
            <FadeUp key={photo.id} delay={i * 0.08} className="h-full">
              <div
                className="group relative aspect-[4/5] w-full overflow-hidden bg-black border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 rounded-md shadow-2xl cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                {/* Uncropped Photo */}
                <img
                  src={photo.img}
                  alt={photo.title}
                  className="w-full h-full object-contain group-hover:scale-104 transition-transform duration-700"
                />

                {/* Hover Overlay with Photo Information */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-400 p-6 flex flex-col justify-end text-left">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                    <p className="text-[8px] tracking-[0.3em] uppercase mb-1.5 font-semibold" style={{ color: gold }}>
                      {photo.subtitle}
                    </p>
                    <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-white mb-2 leading-snug">
                      {photo.title}
                    </h3>
                    <p className="text-white/75 text-[12px] leading-relaxed mb-4 line-clamp-3">
                      {photo.desc}
                    </p>
                    <div className="inline-flex items-center gap-2 text-[9px] tracking-[0.25em] uppercase font-semibold text-[#D4AF37]">
                      <ZoomIn size={14} /> Click to Expand
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX MODAL ────────────────────────── */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <div className="relative max-w-[900px] w-full bg-[#141414] border border-white/10 rounded-lg overflow-hidden shadow-2xl grid md:grid-cols-2">
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/70 border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-colors"
            >
              <X size={20} />
            </button>

            {/* Photo viewport */}
            <div className="bg-black flex items-center justify-center p-4 min-h-[400px]">
              <img
                src={selectedPhoto.img}
                alt={selectedPhoto.title}
                className="max-h-[80vh] w-full object-contain"
              />
            </div>

            {/* Photo metadata */}
            <div className="p-8 flex flex-col justify-between bg-[#141414]">
              <div>
                <span className="px-3 py-1 text-[8px] tracking-[0.28em] uppercase border border-[#D4AF37]/40 rounded-xs mb-4 inline-block" style={{ color: gold }}>
                  {selectedPhoto.category}
                </span>
                <h2 className="font-['Playfair_Display',serif] text-2xl font-bold text-white mb-3">
                  {selectedPhoto.title}
                </h2>
                <p className="text-white/40 text-[9px] tracking-[0.3em] uppercase mb-4">
                  {selectedPhoto.subtitle}
                </p>
                <p className="text-white/60 text-[14px] leading-relaxed mb-6">
                  {selectedPhoto.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4">
                <Link
                  to="/menu"
                  className="px-6 py-3 bg-[#D4AF37] text-black text-[9px] tracking-[0.28em] uppercase font-semibold hover:bg-[#c9a42f] transition-colors"
                >
                  View Full Menu
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 border border-white/20 text-white text-[9px] tracking-[0.28em] uppercase hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
