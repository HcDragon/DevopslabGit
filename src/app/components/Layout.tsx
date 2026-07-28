import { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation, Link } from "react-router";
import { Menu, X, Instagram, Facebook, MessageCircle, ChevronRight } from "lucide-react";
import { gold, goldHover } from "../design";

const NAV = [
  { to: "/",            label: "Home" },
  { to: "/locations",   label: "Locations" },
  { to: "/menu",        label: "Menu" },
  { to: "/gallery",     label: "Gallery" },
  { to: "/events",      label: "Events" },
  { to: "/about",       label: "About" },
  { to: "/contact",     label: "Contact" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  const navBg = isHome
    ? scrolled ? "bg-[#0D0D0D]/92 backdrop-blur-2xl border-b border-white/5" : "bg-transparent"
    : "bg-[#0D0D0D]/96 backdrop-blur-2xl border-b border-white/5";

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F8F8F8] font-['Inter',sans-serif]">
      {/* ── NAV ─────────────────────────────── */}
      <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-[1440px] mx-auto px-6 xl:px-16 flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <img src="/kezia-logo.png" alt="Kezia Logo" className="h-[60px] md:h-[80px] lg:h-[100px] w-auto object-contain mix-blend-screen drop-shadow-xl" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === "/"}
                className={({ isActive }) =>
                  `text-[9.5px] tracking-[0.22em] uppercase transition-colors duration-300 ${isActive ? "text-[#D4AF37]" : "text-white/52 hover:text-[#D4AF37]"}`
                }>
                {label}
              </NavLink>
            ))}
          </div>

          <a href="https://maps.app.goo.gl/5yxLFquvqkaPYmhL7" target="_blank" rel="noopener noreferrer"
            className="hidden lg:inline-flex px-6 py-2.5 border border-[#D4AF37]/42 text-[9.5px] tracking-[0.22em] uppercase transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
            style={{ color: gold }}>
            Find Us
          </a>

          <button className="lg:hidden text-white/60 hover:text-white transition-colors" onClick={() => setOpen(o => !o)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="lg:hidden bg-[#0D0D0D]/97 backdrop-blur-2xl border-t border-white/5 px-6 py-8 flex flex-col gap-5">
            {NAV.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === "/"}
                className={({ isActive }) =>
                  `text-sm tracking-[0.25em] uppercase transition-colors ${isActive ? "text-[#D4AF37]" : "text-white/55 hover:text-[#D4AF37]"}`
                }>
                {label}
              </NavLink>
            ))}
            <a href="https://maps.app.goo.gl/5yxLFquvqkaPYmhL7" target="_blank" rel="noopener noreferrer" className="mt-2 px-6 py-3.5 border border-[#D4AF37]/40 text-[10px] tracking-[0.25em] uppercase text-center" style={{ color: gold }}>
              Find Us
            </a>
          </div>
        )}
      </nav>

      {/* ── PAGE CONTENT ────────────────────── */}
      <main>
        <Outlet />
      </main>

      {/* ── FOOTER ──────────────────────────── */}
      <footer className="bg-[#181818] border-t border-white/5 pt-20 pb-10">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <img src="/kezia-logo.png" alt="Kezia Logo" className="h-[80px] md:h-[100px] lg:h-[120px] w-auto object-contain mix-blend-screen mb-4 drop-shadow-xl" />
              <p className="text-white/38 text-[13px] leading-[1.8] mb-6 max-w-[340px]">
                Good food, better drinks, best people. The only place you need to be when the sun goes down.
              </p>
              <div className="mb-6 space-y-1">
                <p className="text-white/38 text-[13px]">+91 98765 43210</p>
                <p className="text-white/38 text-[13px]">Kezia Tower, 7th Floor, Kalyan West, Maharashtra 421301</p>
              </div>
              <div className="flex gap-3">
                {[
                  [Instagram, "Instagram", "https://instagram.com"],
                  [Facebook, "Facebook", "https://facebook.com"],
                  [MessageCircle, "WhatsApp", "https://wa.me/919876543210"],
                ].map(([Icon, label, href]) => (
                  <a key={label as string} href={href as string} target="_blank" rel="noopener noreferrer"
                    aria-label={label as string}
                    className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/38 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all duration-300">
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[8.5px] tracking-[0.4em] uppercase mb-6" style={{ color: gold }}>Navigate</p>
              <ul className="space-y-3">
                {NAV.map(({ to, label }) => (
                  <li key={to}>
                    <NavLink to={to} end={to === "/"}
                      className="text-white/38 text-[13px] hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 group">
                      <ChevronRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: gold }} />
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[8.5px] tracking-[0.4em] uppercase mb-6" style={{ color: gold }}>Newsletter</p>
              <p className="text-white/38 text-[13px] leading-[1.75] mb-6">
                Exclusive offers, seasonal menus &amp; member-only events.
              </p>
              <div className="flex flex-col gap-3">
                <input type="email" placeholder="Your email address"
                  className="w-full bg-transparent border border-white/10 text-white/70 px-4 py-3 text-sm focus:border-[#D4AF37]/50 outline-none transition-colors placeholder:text-white/20" />
                <button className="w-full py-3 text-black text-[9px] tracking-[0.32em] uppercase font-semibold transition-colors"
                  style={{ backgroundColor: gold }} onMouseEnter={e => (e.currentTarget.style.backgroundColor = goldHover)} onMouseLeave={e => (e.currentTarget.style.backgroundColor = gold)}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-[11px] tracking-wider">© 2025 Kezia Rooftop.</p>
            <p className="text-white/16 text-[11px]">Made with good vibes in Kalyan, Maharashtra</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
