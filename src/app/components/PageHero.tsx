import { gold } from "../design";

interface PageHeroProps {
  tag: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  height?: string;
}

export default function PageHero({ tag, title, subtitle, image, imageAlt, height = "h-[52vh] min-h-[380px]" }: PageHeroProps) {
  return (
    <section className={`relative ${height} flex items-end pb-16 overflow-hidden bg-[#0D0D0D]`}>
      <div className="absolute inset-0">
        <img src={image} alt={imageAlt} className="w-full h-full object-cover opacity-38" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/60 to-transparent" />
      </div>
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 xl:px-16 w-full">
        <p className="text-[9.5px] tracking-[0.55em] uppercase mb-4" style={{ color: gold }}>{tag}</p>
        <h1 className="font-['Playfair_Display',serif] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.0] text-white mb-4">
          {title}
        </h1>
        {subtitle && <p className="text-white/45 text-[15px] max-w-[480px] leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
