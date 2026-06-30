import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { MapPin, Phone, Mail, Send, CheckCircle2, Factory } from "lucide-react";
import SEO from '../components/SEO';

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    capacity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...form, source: 'Contact Page' }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", phone: "", email: "", capacity: "", message: "" });
      } else {
        setErrorMsg(data.error || 'Failed to send message.');
      }
    } catch (error) {
      setErrorMsg('Failed to connect to the server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-slate-50 border border-slate-300 px-5 py-4 text-sm font-medium text-slate-900 rounded-md outline-none focus:border-emerald-600 focus:bg-white transition shadow-sm placeholder:text-slate-400";

  const cards = [
    {
      icon: <MapPin size={28} className="text-[#FBAE17]" />,
      title: "Manufacturing Plant & HQ",
      lines: ["D 211, SURAJPUR SITE 5, KASNA", "GREATER NOIDA UP 201312"],
    },
    {
      icon: <Phone size={28} className="text-[#FBAE17]" />,
      title: "Engineering Telematics Dispatch",
      lines: ["+91 8700144765"],
    },
    {
      icon: <Mail size={28} className="text-[#FBAE17]" />,
      title: "Corporate Tender Desk",
      lines: ["seva.synergy@gmail.com"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-outfit bg-white selection:bg-emerald-500 selection:text-white text-slate-800">
      <SEO 
        title="Contact Us | Synergy Systems" 
        description="Connect with our senior electrical audit desk for comprehensive substation commissioning and solar EPC inquiries."
        url="https://www.denver.com/contact"
      />
      {/* HERO SECTION - Full Screen Height */}
      <div 
        className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden pt-6 pb-16 bg-cover bg-center border-b border-emerald-900/40"
        style={{ backgroundImage: `url('/photos/DSC_9528.JPG')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60"></div>
        
        <Navbar />

        <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto my-auto pt-24 pb-12 text-center md:text-left w-full">
          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-300 text-xs md:text-sm mb-4 font-medium">
            <Link to="/" className="hover:text-emerald-400 transition-colors no-underline text-slate-300">Home</Link>
            <span className="text-emerald-500">/</span>
            <span className="text-emerald-300 font-semibold">Tenders & Support</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#FBAE17] tracking-tight mb-4 drop-shadow-md uppercase m-0">
            Contact Synergy Systems
          </h1>
          <p className="text-emerald-200 text-base md:text-xl max-w-2xl mt-2 mb-8 leading-relaxed font-normal m-0 mx-auto md:mx-0">
            Connect directly with our senior electrical audit desk for comprehensive substation commissioning, float/boost charger manufacturing, or commercial solar EPC inquiries.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <div className="flex items-center gap-2 text-emerald-300 text-xs uppercase tracking-widest font-bold px-4 py-3 bg-white/5 rounded-md border border-white/10">
              <Factory size={16} className="text-[#FBAE17]" />
              <span>Corporate Engineering Desk</span>
            </div>
          </div>
        </div>

        {/* Bottom Hero Indicator Strip */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 w-full pb-4 hidden md:flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-400 border-t border-slate-800/80 pt-4">
          <span>Greater Noida HQ & Plant</span>
          <span>•</span>
          <span>Rapid Engineering Support</span>
          <span>•</span>
          <span>National Dispatch Network</span>
        </div>
      </div>

      {/* CONTACT INFO CARDS */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto -mt-16 relative z-30 w-full">
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-md shadow-xl border border-slate-200 hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="w-14 h-14 bg-[#072d1a] rounded-md flex items-center justify-center mb-6 shadow-md border border-emerald-500/20">
                {card.icon}
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-xl m-0 mb-3 tracking-tight block">
                  {card.title}
                </h3>
                <div className="space-y-1.5">
                  {card.lines.map((line, idx) => (
                    <p key={idx} className="text-slate-600 font-normal text-sm m-0 leading-relaxed block">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM & MAP LAYOUT */}
      <section className="py-12 px-6 md:px-16 max-w-7xl mx-auto pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
        
        {/* LEFT FORM */}
        <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-md border border-slate-200 shadow-xl space-y-8">
          <div>
            <span className="text-xs font-black text-emerald-700 uppercase tracking-widest block mb-1">Corporate Audit Request</span>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 m-0 tracking-tight">
              Request Site Engineering Consultation
            </h2>
            <p className="text-slate-600 text-sm mt-2 font-normal m-0">
              Fill out the technical requirements below. Our dispatch department will respond within 4 business hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-emerald-50 rounded-md border border-emerald-300 text-center space-y-3 my-8">
              <CheckCircle2 size={48} className="text-emerald-600 mx-auto" />
              <h3 className="text-xl font-black text-slate-900 m-0">Inquiry Transmitted Successfully</h3>
              <p className="text-sm text-slate-600 m-0">Our chief engineering team has received your plant specifications and will connect shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Representative Name *</label>
                  <input required name="name" placeholder="e.g. Chief Plant Officer" value={form.name} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Corporate Email *</label>
                  <input required type="email" name="email" placeholder="official@company.com" value={form.email} onChange={handleChange} className={inputClass} />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Direct Phone *</label>
                  <input required type="tel" name="phone" placeholder="+91 XXXX XXX XXX" value={form.phone} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Target Load / Capacity</label>
                  <input name="capacity" placeholder="e.g. 500kVA Substation / 100kW Solar" value={form.capacity} onChange={handleChange} className={inputClass} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Technical Scope & Project Details *</label>
                <textarea required name="message" rows={5} placeholder="Specify switchboard ratings, battery backup hours, or site erection requirements..." value={form.message} onChange={handleChange} className={inputClass} />
              </div>
              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-md text-sm font-semibold">
                  {errorMsg}
                </div>
              )}
              
              <button disabled={loading} type="submit" className="w-full py-4 bg-[#FBAE17] hover:bg-amber-400 disabled:opacity-70 disabled:cursor-not-allowed text-slate-950 font-black text-sm uppercase tracking-wider rounded-md shadow-lg transition-all flex items-center justify-center gap-2 border-none cursor-pointer">
                <span>{loading ? 'Transmitting...' : 'Transmit Technical Inquiry'}</span>
                {!loading && <Send size={16} />}
              </button>
            </form>
          )}
        </div>

        {/* RIGHT MAP */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
          <div className="rounded-md overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-[4/4]">
            <iframe
              src="https://maps.google.com/maps?q=D%20211,%20SURAJPUR%20SITE%205,%20KASNA,%20GREATER%20NOIDA%20UP%20201312&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              title="Synergy Systems Plant Location Map"
            ></iframe>
          </div>
          <div className="p-6 bg-[#072d1a] text-white rounded-md shadow-md border border-emerald-800">
            <h4 className="text-[#FBAE17] font-black text-sm uppercase tracking-wider m-0 mb-1">Factory Erection Notice</h4>
            <p className="text-xs text-slate-300 font-normal m-0 leading-relaxed">
              Site visits for inspection of CPRI-tested boards and continuous high-voltage FAT test benches are available by corporate appointment.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}