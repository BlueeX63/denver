import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { CheckCircle2, ChevronDown, ChevronUp, Star, Factory, ShieldCheck, Zap, Award, Users, Wrench, ArrowRight, Layers, Cpu } from 'lucide-react';

import SEO from '../components/SEO';

export default function About() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Synergyelectra's manufacturing and quality testing protocol?",
      answer: "Every LT panel, PCC board, battery charger, and solar structure undergoes rigorous Factory Acceptance Testing (FAT). This includes CPRI certified high-voltage dielectric tests, continuous thermal run checks under load, and strict ISO 9001:2015 quality adherence."
    },
    {
      question: "Do you provide turnkey installation and site electrical commissioning?",
      answer: "Yes. We operate as end-to-end turnkey power contractors. Our engineering department executes site load auditing, CAD blueprinting, structural fabrication, cabling, site erection, and statutory safety licensing."
    },
    {
      question: "What industrial sectors and critical infrastructures do you serve?",
      answer: "We support heavy manufacturing plants, EHV transmission substations, telecom BTS networks, railway traction yards, healthcare institutions, hyperscale data centers, and commercial solar utility installations."
    },
    {
      question: "How does your parallel active UPS redundancy (1+1 / 3-3 PH) work?",
      answer: "Our active parallel redundant architecture ensures zero millisecond power transfer. If any master inverter module experiences a grid anomaly or undergoes scheduled maintenance, synchronized secondary units instantaneously sustain 100% of critical plant loads."
    },
    {
      question: "Are your solar mounting structures tested for coastal wind storms?",
      answer: "Yes. Manufactured with 80+ micron hot-dip galvanized steel (AZ150 grade), our mounting structures are aerodynamically engineered and tested to withstand extreme cyclone wind speeds up to 180 km/h."
    },
    {
      question: "What long-term field maintenance warranties do you offer?",
      answer: "We back every installation with 24/7 dedicated engineering telematics support, preventive Annual Maintenance Contracts (AMC), and guaranteed availability of genuine electrical spare parts."
    }
  ];



  const whyChoosePillars = [
    { title: "Engineering Excellence", desc: "Highly seasoned technical engineering teams backed by modern automated manufacturing plant infrastructure." },
    { title: "Premium Quality Assurance", desc: "Strict utilization of certified switchgear components with zero-compromise CPRI testing standards." },
    { title: "Sustainable Innovation", desc: "Energy-efficient topologies engineered to reduce carbon footprints while lowering plant operating overheads." },
    { title: "End-to-End Execution", desc: "Complete design, custom CAD drafting, fabrication, site erection, and AMC telematics under one roof." },
    { title: "On-Time Commissioning", desc: "Structured project management methodologies ensuring strict adherence to industrial delivery schedules." },
    { title: "Long-Term Partnerships", desc: "Decades-long repeat corporate clientele established through transparency, trust, and unyielding field reliability." }
  ];

  return (
    <div className="bg-white min-h-screen font-outfit selection:bg-emerald-500 selection:text-white relative overflow-x-hidden text-slate-800">
      <SEO 
        title="About Us | Synergyelectra" 
        description="Learn about Synergyelectra, a premier national power contractor with a ₹50+ Crore turnover, offering turnkey electrical manufacturing and renewable infrastructure."
        url="https://www.denver.com/about"
      />
      {/* Hero Header Section */}
      <div 
        className="relative w-full overflow-hidden pt-6 pb-24 md:pb-32 bg-cover bg-center"
        style={{ backgroundImage: `url('/photos/founder.JPG')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/40"></div>
        
        <Navbar />

        <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto pt-24 md:pt-32 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-300 text-xs md:text-sm mb-4 font-medium">
            <Link to="/" className="hover:text-emerald-400 transition-colors no-underline text-slate-300">Home</Link>
            <span className="text-emerald-500">/</span>
            <span className="text-emerald-300 font-semibold">Company Profile</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#FBAE17] tracking-tight mb-4 drop-shadow-md uppercase m-0">
            About Synergyelectra
          </h1>
          <p className="text-emerald-200 text-base md:text-xl max-w-2xl mt-2 mb-8 leading-relaxed font-normal m-0 mx-auto md:mx-0">
            Powering Industries. Enabling Sustainability. Engineering the Future. Turnkey electrical manufacturing and renewable infrastructure backed by a ₹50+ Crore industrial legacy.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link to="/contact" className="px-8 py-4 bg-[#FBAE17] hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider rounded-md shadow-lg transition-all no-underline block">
              Consult Engineering Team
            </Link>
            <div className="flex items-center gap-2 text-emerald-300 text-xs uppercase tracking-widest font-bold px-4 py-3 bg-white/5 rounded-md border border-white/10">
              <Factory size={16} className="text-[#FBAE17]" />
              <span>ISO 9001:2015 Certified Plant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Mission Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-md overflow-hidden bg-slate-900 border border-slate-200 shadow-2xl">
              <img 
                src="/photos/DSC_9599.JPG" 
                alt="Synergyelectra Senior Engineering Assembly" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-[#072d1a] text-white p-8 rounded-md shadow-2xl border border-emerald-500/30 max-w-xs hidden sm:block">
              <span className="text-xs font-bold text-[#FBAE17] uppercase tracking-widest block mb-1">Industrial Benchmark</span>
              <span className="text-3xl font-black text-white block">₹50+ CRORE</span>
              <p className="text-[11px] text-slate-300 m-0 pt-1 leading-normal">Annual engineering turnover powering nationwide industrial switchyards and solar parks.</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-emerald-600"></span>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700">Foundational Electrical Infrastructure</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 m-0 tracking-tight">
              Engineering Reliability For Decades To Come
            </h2>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed m-0 font-normal">
              In today’s rapidly advancing industrial landscape, reliable power infrastructure is not optional — it is foundational. Synergyelectra stands as a trusted leader in delivering turnkey electrical boards, commercial solar plants, and heavy-duty battery chargers.
            </p>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed m-0 font-normal">
              We are not merely equipment manufacturers; we are comprehensive power solution architects offering custom CAD modeling, plant load analysis, automated fabrication, turnkey site installation, and lifetime field telematics support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded border border-slate-200">
                <ShieldCheck size={24} className="text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-900 uppercase">CPRI Type-Tested Boards</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded border border-slate-200">
                <Zap size={24} className="text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-900 uppercase">Zero-Millisecond Redundancy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visionary Leadership & Founder Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-24 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] max-w-sm mx-auto rounded-xl overflow-hidden bg-slate-800 border border-emerald-500/30 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] relative group">
              <img 
                src="/photos/founder.JPG" 
                alt="Synergyelectra Founder & Managing Director" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-6 left-6 right-6 text-left space-y-1">
                <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest block">Managing Director & Founder</span>
                <span className="text-2xl font-black text-white block">Visionary Leadership</span>
                <p className="text-xs text-slate-300 m-0 pt-1 font-light">Architecting turnkey power infrastructure across India.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#FBAE17]"></span>
              <span className="text-xs font-black uppercase tracking-widest text-[#FBAE17]">Guiding Principle & Foundation</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white m-0 tracking-tight">
              Driven By Engineering Mastery & Uncompromising Integrity
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed m-0 font-light">
              Under visionary leadership, Synergyelectra has grown from a specialized electrical switchboard workshop into a premier national power contractor scaling a ₹50+ Crore annual turnover.
            </p>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed m-0">
              With an uncompromising dedication to CPRI type-tested dielectric safety, zero-millisecond UPS redundancy, and severe-weather solar structural engineering, our founder instilled a corporate standard where reliability is never compromised. Every panel, charger, and power system is built to sustain critical plant loads for decades.
            </p>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-800/80">
              <div className="border-l-2 border-emerald-500 pl-4 space-y-1 mt-4">
                <span className="text-2xl font-black text-white block">25+ Years</span>
                <span className="text-xs text-slate-400 uppercase font-medium block">Industrial Engineering Legacy</span>
              </div>
              <div className="border-l-2 border-[#FBAE17] pl-4 space-y-1 mt-4">
                <span className="text-2xl font-black text-white block">1000+ Facilities</span>
                <span className="text-xs text-slate-400 uppercase font-medium block">Powered Nationwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Synergyelectra (Page 10 from PDF) */}
      <section className="bg-slate-900 text-white py-24 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#FBAE17] uppercase tracking-widest block">Core Corporate Pillars</span>
            <h2 className="text-3xl md:text-5xl font-black text-white m-0 tracking-tight">
              Why Partner With Synergyelectra
            </h2>
            <p className="text-slate-300 text-sm md:text-base m-0">
              Combining engineering mastery, certified high-grade components, and disciplined project execution to ensure maximum plant uptime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePillars.map((pillar, idx) => (
              <div key={idx} className="bg-slate-800/80 p-8 rounded-md border border-slate-700/80 hover:border-emerald-500/50 transition-all duration-300 space-y-4">
                <div className="w-12 h-12 bg-emerald-500/10 rounded flex items-center justify-center text-[#FBAE17] font-black text-lg border border-emerald-500/20">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-black text-white m-0 tracking-tight">{pillar.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed m-0 font-normal">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <span className="text-xs md:text-sm font-black tracking-widest text-emerald-400 uppercase bg-emerald-950/80 px-6 py-3 rounded-full border border-emerald-500/30 inline-block">
              Engineered for Reliability. Built for the Future. Powered by Sustainability.
            </span>
          </div>
        </div>
      </section>

      {/* Industrial FAQs */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block">Technical Clarifications</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 m-0 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-md border border-slate-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 bg-transparent border-none cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base font-black text-slate-900">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="text-emerald-600 shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-slate-400 shrink-0" size={20} />
                  )}
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey Consultation Footer CTA */}
      <section className="bg-[#072d1a] text-white pt-20 pb-44 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <span className="text-[#FBAE17] text-xs font-bold uppercase tracking-widest block">Ready To Commission Your Facility?</span>
          <h3 className="text-3xl md:text-5xl font-black text-white m-0 max-w-3xl mx-auto tracking-tight">
            Partner With Turnkey Electrical Specialists
          </h3>
          <p className="text-emerald-200 text-sm md:text-base max-w-xl mx-auto leading-relaxed m-0 font-normal">
            Whether upgrading a 400kV substation switchyard or deploying a rooftop factory solar park, our senior engineers are ready to audit your electrical load.
          </p>
          <div className="pt-4">
            <Link to="/contact" className="px-8 py-4 bg-[#FBAE17] hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider rounded-md shadow-xl transition-all inline-block no-underline">
              Request Site Electrical Audit
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
