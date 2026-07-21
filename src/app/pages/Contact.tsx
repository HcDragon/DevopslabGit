import { useState } from "react";
import { Phone, MapPin, Clock, Mail, Instagram, Facebook, MessageCircle, CheckCircle, Send } from "lucide-react";
import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";
import { IMGS, gold, goldHover } from "../design";

const inputBase = "w-full bg-transparent border border-white/10 text-white/80 px-4 py-4 text-sm focus:border-[#D4AF37]/55 outline-none transition-colors placeholder:text-white/22";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const f = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero tag="Reach Out" title="Contact Us" subtitle="Our team is available every day from 2:00 PM to respond to your enquiries." image={IMGS.city} imageAlt="City skyline at night from rooftop" />

      <section className="py-24 max-w-[1440px] mx-auto px-6 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* ── CONTACT INFO ────────────────────────── */}
          <div>
            <FadeUp>
              <p className="text-[9.5px] tracking-[0.52em] uppercase mb-5" style={{ color: gold }}>Get in Touch</p>
              <h2 className="font-['Playfair_Display',serif] text-[2.5rem] md:text-[3rem] font-bold leading-[1.05] mb-7">We'd Love to<br />Hear From You</h2>
              <p className="text-white/42 text-[14px] leading-[1.8] mb-12">
                Whether you have a general enquiry, a special request, a media opportunity, or simply wish to learn more about Kezia — our team responds to every message with the same care we bring to the dining room.
              </p>
            </FadeUp>

            <FadeUp delay={0.1} className="space-y-4 mb-12">
              {[
                [Phone,   "Phone",   "+91 98765 43210"],
                [Mail,    "Email",   "hello@keziarooftop.in"],
                [MapPin,  "Address", "Kezia Tower, 7th Floor, Kalyan West, Maharashtra 421301"],
                [Clock,   "Dining Hours",              "Monday – Sunday · 7:00 PM – 1:00 AM"],
                [Clock,   "Office Hours",              "Monday – Saturday · 2:00 PM – 10:00 PM"],
              ].map(([Icon, label, value]) => (
                <div key={label as string} className="flex gap-4 bg-[#181818]/50 border border-white/5 p-5 hover:border-[#D4AF37]/14 transition-colors duration-300">
                  <div className="w-9 h-9 border flex items-center justify-center flex-shrink-0" style={{ borderColor: `${gold}26` }}>
                    <Icon size={14} style={{ color: gold }} />
                  </div>
                  <div>
                    <p className="text-[8px] tracking-[0.3em] uppercase mb-1" style={{ color: gold }}>{label as string}</p>
                    <p className="text-white/52 text-[13px]">{value as string}</p>
                  </div>
                </div>
              ))}
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-[9.5px] tracking-[0.45em] uppercase mb-4" style={{ color: gold }}>Follow Us</p>
              <div className="flex gap-3">
                {[
                  [Instagram, "Instagram", "https://instagram.com"],
                  [Facebook, "Facebook", "https://facebook.com"],
                  [MessageCircle, "WhatsApp", "https://wa.me/919876543210"],
                ].map(([Icon, label, href]) => (
                  <a key={label as string} href={href as string} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-5 py-3 border border-white/10 text-white/45 text-[11px] tracking-[0.18em] uppercase hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all duration-300">
                    <Icon size={14} />
                    {label as string}
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* ── CONTACT FORM ────────────────────────── */}
          <FadeUp delay={0.1}>
            {sent ? (
              <div className="bg-[#181818] border border-white/5 p-12 flex flex-col items-center justify-center text-center min-h-[500px]">
                <div className="w-16 h-16 border flex items-center justify-center mb-8" style={{ borderColor: `${gold}45` }}>
                  <CheckCircle size={28} style={{ color: gold }} />
                </div>
                <p className="text-[9.5px] tracking-[0.52em] uppercase mb-4" style={{ color: gold }}>Message Sent</p>
                <h2 className="font-['Playfair_Display',serif] text-3xl font-bold mb-4">Thank You</h2>
                <p className="text-white/42 text-[14px] leading-relaxed max-w-[360px] mb-8">
                  We have received your message and will respond within 4 hours during office hours.
                </p>
                <button onClick={() => setSent(false)}
                  className="px-8 py-3.5 border text-[9.5px] tracking-[0.28em] uppercase transition-all duration-300"
                  style={{ borderColor: `${gold}42`, color: gold }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = gold; e.currentTarget.style.color = "#000"; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = gold; }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#181818] border border-white/5 p-8 md:p-10 h-full">
                <p className="text-[9.5px] tracking-[0.52em] uppercase mb-8" style={{ color: gold }}>Send a Message</p>
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="text-[8.5px] tracking-[0.28em] uppercase text-white/36 block mb-2">Full Name *</label>
                      <input required type="text" placeholder="Your name" value={form.name} onChange={f("name")} className={inputBase} />
                    </div>
                    <div>
                      <label className="text-[8.5px] tracking-[0.28em] uppercase text-white/36 block mb-2">Phone</label>
                      <input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={f("phone")} className={inputBase} />
                    </div>
                  </div>
                  <div>
                    <label className="text-[8.5px] tracking-[0.28em] uppercase text-white/36 block mb-2">Email *</label>
                    <input required type="email" placeholder="your@email.com" value={form.email} onChange={f("email")} className={inputBase} />
                  </div>
                  <div>
                    <label className="text-[8.5px] tracking-[0.28em] uppercase text-white/36 block mb-2">Subject</label>
                    <select value={form.subject} onChange={f("subject")}
                      className={inputBase + " bg-[#181818] appearance-none"}>
                      <option value="" className="bg-[#181818]">Select a topic</option>
                      {["General Enquiry","Private Event","Press & Media","Feedback","Corporate Partnership","Career Opportunities","Other"].map(s => (
                        <option key={s} className="bg-[#181818]">{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[8.5px] tracking-[0.28em] uppercase text-white/36 block mb-2">Message *</label>
                    <textarea required value={form.message} onChange={f("message")} rows={6}
                      placeholder="Tell us how we can help..."
                      className={inputBase + " resize-none"} />
                  </div>
                  <button type="submit"
                    className="w-full py-4 text-black text-[9.5px] tracking-[0.35em] uppercase font-semibold transition-colors flex items-center justify-center gap-2.5"
                    style={{ backgroundColor: gold }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = goldHover)}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = gold)}>
                    <Send size={13} />
                    Send Message
                  </button>
                </div>
                <p className="text-white/22 text-[11px] mt-5 text-center">We respond to all messages within 4 hours during office hours.</p>
              </form>
            )}
          </FadeUp>
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ───────────────────────── */}
      <section className="pb-24 max-w-[1440px] mx-auto px-6 xl:px-16">
        <FadeUp>
          <div className="relative bg-[#181818] h-[400px] border border-white/5 overflow-hidden">
            <img src={IMGS.city} alt="Kalyan city aerial view at night" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <div className="w-14 h-14 border flex items-center justify-center mb-5" style={{ borderColor: `${gold}48` }}>
                <MapPin size={22} style={{ color: gold }} />
              </div>
              <p className="font-['Playfair_Display',serif] text-2xl font-bold mb-3">Kezia Rooftop Fine Dine</p>
              <p className="text-white/46 text-[14px] mb-6">Kezia Tower, 7th Floor · Kalyan West, Maharashtra 421301</p>
              <a href="https://maps.app.goo.gl/5yxLFquvqkaPYmhL7" target="_blank" rel="noopener noreferrer"
                className="px-8 py-3.5 border text-[9.5px] tracking-[0.3em] uppercase transition-all duration-300"
                style={{ borderColor: `${gold}40`, color: gold }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = gold; e.currentTarget.style.color = "#000"; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = gold; }}>
                Open in Google Maps
              </a>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── FAQ ───────────────────────────────────── */}
      <section className="py-24 bg-[#181818]/22">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-16">
          <FadeUp className="text-center mb-14">
            <p className="text-[9.5px] tracking-[0.52em] uppercase mb-4" style={{ color: gold }}>Answers</p>
            <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-6 max-w-[960px] mx-auto">
            {[
              { q: "Do you have a dress code?", a: "Smart casual minimum. No athletic wear, flip-flops, or shorts for gentlemen. We recommend cocktail attire for the Chef's Table." },
              { q: "Is the rooftop open during the monsoon?", a: "Yes. Our enclosed glass terrace section remains open year-round. The open terrace section is weather-dependent." },
              { q: "Do you cater to vegan and Jain diets?", a: "Absolutely. Our kitchen accommodates vegan, Jain, gluten-free, and most allergen-specific requirements with advance notice." },
              { q: "Can I bring my own cake?", a: "Yes, with a plating fee of ₹500. Alternatively, our pastry team can create a fully bespoke cake for your occasion." },
              { q: "What is your minimum spend?", a: "There is no minimum spend for standard tables. Private events and the Chef's Table have package pricing." },
              { q: "Is parking available?", a: "Yes. Complimentary valet parking at the ground floor entrance. Multi-level covered parking is also adjacent to Kezia Tower." },
            ].map(({ q, a }) => (
              <FadeUp key={q}>
                <div className="bg-[#0D0D0D] border border-white/5 p-7">
                  <h3 className="font-['Playfair_Display',serif] text-[1.02rem] font-semibold mb-3">{q}</h3>
                  <p className="text-white/40 text-[12.5px] leading-relaxed">{a}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
