import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ShieldCheck, Zap, Sun, ArrowRight, CheckCircle2, PhoneCall, Layers, Cpu, ChevronRight, Award, Factory, Database, Building2, Radio, Server, Briefcase, Activity } from 'lucide-react';
import SEO from '../components/SEO';

export default function SolarUPS() {
  const products = [
    {
      title: 'Online & Industrial UPS 1+1',
      subtitle: 'Single Phase Input / Single Phase Output',
      desc: 'True online double-conversion UPS with 1+1 parallel active standby redundancy. Zero transfer time power protection for homes, medical clinics, and server rooms.',
      capacity: '5kVA - 30kVA',
      config: '1+1 Parallel Redundant',
      path: '/solar-ups-1-1',
      badge: 'MISSION CRITICAL',
      image: "/photos/ai_online_ups.png"
    },
    {
      title: 'Online & Industrial UPS 1+1+1',
      subtitle: 'Triple Modular Parallel Redundant',
      desc: 'Ultra-reliable N+2 triple redundant architecture. Designed specifically for tier-IV hyperscale data centers, defense telemetry, and continuous ICU facilities.',
      capacity: '15kVA - 120kVA',
      config: '1+1+1 Triple Redundant',
      path: '/solar-ups-1-1-1',
      badge: 'MAXIMUM RESILIENCE',
      image: "/photos/ai_power_room.png"
    },
    {
      title: 'Solar Hybrid UPS 3-1',
      subtitle: 'Three Phase Input / Single Phase Output',
      desc: 'Eliminates utility grid transformer phase imbalance while harvesting maximum solar irradiance. Supplies pristine single-phase pure sine wave power.',
      capacity: '10kVA - 50kVA',
      config: '3-Phase AC in / 1-Phase out',
      path: '/solar-ups-3-1',
      badge: 'GRID BALANCED',
      image: "/photos/ai_solar_ups.png"
    },
    {
      title: 'Heavy Industrial Solar UPS 3-3',
      subtitle: 'Three Phase Input / Three Phase Output',
      desc: 'Heavy industrial double-conversion powerhouse integrating solar PV arrays. Engineered to withstand high motor starting inrush currents across manufacturing plants.',
      capacity: '20kVA - 200kVA',
      config: 'Full 3-Phase Double Conversion',
      path: '/solar-ups-3-3',
      badge: 'HEAVY INDUSTRIAL',
      image: "/photos/DSC_9534.JPG"
    }
  ];

  const applications = [
    { icon: <Database size={28} className="text-[#FBAE17]" />, title: 'Data Centres & IT', desc: 'Continuous pure sine wave power preventing server reboots and data corruption.' },
    { icon: <Activity size={28} className="text-[#FBAE17]" />, title: 'Hospitals & Healthcare', desc: 'Zero transfer delay (0s) backup for life-saving ICU, MRI, and surgical equipment.' },
    { icon: <Radio size={28} className="text-[#FBAE17]" />, title: 'Telecom & Defense', desc: 'Ruggedized power conditioning for remote communication switchyards and radar networks.' },
    { icon: <Briefcase size={28} className="text-[#FBAE17]" />, title: 'Banking & Financial', desc: 'Secure continuous uptime for ATM networks, data vaults, and stock exchanges.' },
    { icon: <Factory size={28} className="text-[#FBAE17]" />, title: 'Industrial Automation', desc: 'Heavy-duty protection against voltage sags, surges, and harmonics in PLC/CNC lines.' },
    { icon: <Building2 size={28} className="text-[#FBAE17]" />, title: 'Commercial Establishments', desc: 'End-to-end clean hybrid solar energy integration for malls, offices, and campuses.' },
  ];

  return (
    <div className="bg-slate-950 min-h-screen font-outfit selection:bg-emerald-500 selection:text-white relative overflow-x-hidden text-slate-100">
      <SEO 
        title="Online & Industrial UPS Systems | Synergy Systems" 
        description="Explore Synergy Systems' Online & Industrial UPS and Solar UPS Systems. Engineered for Data Centres, Hospitals, Telecom, and Industrial Automation."
        url="https://www.denver.com/solar-ups"
      />
      
      {/* Hero Header Section - Full Screen Height */}
      <div className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden pt-6 pb-16 bg-cover bg-center border-b border-emerald-900/40" style={{ backgroundImage: `url('/photos/ai_power_room.png')` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none"></div>
        
        <Navbar />

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 my-auto pt-24 pb-12 text-center md:text-left w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs md:text-sm mb-6 font-bold uppercase tracking-wider">
            <Sun size={16} />
            <span>Power Conditioning Equipment Portfolio</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 uppercase drop-shadow-lg leading-none">
            Online & Industrial <br />
            <span className="text-[#FBAE17]">UPS Systems</span>
          </h1>

          <p className="text-slate-300 text-base md:text-xl max-w-3xl leading-relaxed mb-8 font-light">
            Engineered with precision and manufactured using premium-quality components. Our Online, Industrial, and Solar UPS systems deliver continuous pure sine wave power, zero transfer delay (0s), and intelligent battery control for mission-critical operations.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#models" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-md shadow-lg transition-all hover:scale-105 no-underline uppercase text-sm tracking-wider flex items-center gap-2">
              <span>Explore UPS Models</span>
              <ArrowRight size={18} />
            </a>
            <Link to="/contact" className="bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 font-bold px-8 py-4 rounded-md transition-all no-underline text-sm uppercase tracking-wider">
              Request Technical Consultation
            </Link>
          </div>
        </div>

        {/* Bottom Hero Indicator Strip */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 w-full pb-4 hidden md:flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-400 border-t border-slate-800/80 pt-4">
          <span>True Online Double Conversion</span>
          <span>•</span>
          <span>0s Zero Transfer Delay</span>
          <span>•</span>
          <span>DSP & MPPT Enabled</span>
        </div>
      </div>

      {/* Category Overview Intro */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 py-12 -mt-16">
        <div className="bg-slate-900 rounded-xl p-8 md:p-12 shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-5 border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-6">
            <div className="w-16 h-16 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center flex-shrink-0 font-black text-2xl shadow-inner">
              <Award size={32} />
            </div>
            <div>
              <h3 className="font-bold text-white text-xl m-0">35+ Years Expertise</h3>
              <p className="text-slate-400 text-sm m-0 mt-1">Delivering dependable power solutions since 1990</p>
            </div>
          </div>

          <div className="flex items-center gap-5 border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-6">
            <div className="w-16 h-16 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[#FBAE17] flex items-center justify-center flex-shrink-0 shadow-inner">
              <Zap size={32} />
            </div>
            <div>
              <h3 className="font-bold text-white text-xl m-0">0s Transfer Time</h3>
              <p className="text-slate-400 text-sm m-0 mt-1">True online double-conversion architecture</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center flex-shrink-0 shadow-inner">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h3 className="font-bold text-white text-xl m-0">ISO 9001 Certified</h3>
              <p className="text-slate-400 text-sm m-0 mt-1">Stringent quality testing & maximum reliability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Grid Section (From PDF) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
            APPLICATIONS & INDUSTRIES
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
            Reliable Power for Mission-Critical Sectors
          </h2>
          <div className="w-24 h-1 bg-[#FBAE17] rounded-full mx-auto mb-6"></div>
          <p className="text-slate-400 text-base md:text-lg">
            Every product manufactured by Synergy Systems undergoes rigorous quality testing to ensure superior performance in demanding industrial environments across India and overseas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, i) => (
            <div key={i} className="bg-slate-900/80 border border-slate-800 p-8 rounded-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg">
              <div className="w-14 h-14 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {app.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{app.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed m-0">{app.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Grid Section */}
      <section id="models" className="py-20 px-6 max-w-7xl mx-auto mb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
            OUR PRODUCT RANGE
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
            Online & Solar UPS Portfolio
          </h2>
          <div className="w-24 h-1 bg-emerald-500 rounded-full mx-auto mb-6"></div>
          <p className="text-slate-400 text-base md:text-lg">
            Select a model below to explore comprehensive technical specifications, redundancy architectures, and battery management features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((prod, idx) => (
            <div 
              key={idx}
              className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div className="relative h-72 overflow-hidden bg-slate-950 flex items-center justify-center p-6 border-b border-slate-800">
                  <span className="absolute top-4 left-4 z-10 bg-emerald-500 text-slate-950 text-[11px] font-black tracking-wider px-3.5 py-1.5 rounded-md uppercase shadow-lg">
                    {prod.badge}
                  </span>
                  <img 
                    src={prod.image} 
                    alt={prod.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                </div>

                <div className="p-8">
                  <span className="text-xs font-bold text-[#FBAE17] uppercase tracking-wider block mb-1">{prod.subtitle}</span>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {prod.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs font-semibold">
                    <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800/80">
                      <span className="block text-slate-400 text-[10px] uppercase tracking-wider mb-1">Capacity</span>
                      <span className="text-white font-bold text-sm">{prod.capacity}</span>
                    </div>
                    <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800/80">
                      <span className="block text-slate-400 text-[10px] uppercase tracking-wider mb-1">Topology</span>
                      <span className="text-emerald-400 font-bold text-sm">{prod.config}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <Link 
                  to={prod.path}
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 no-underline text-sm uppercase tracking-wider"
                >
                  <span>Explore Technical Specs</span>
                  <ArrowRight size={18} className="transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border-t border-emerald-900/50 text-white pt-20 pb-36 px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FBAE17]">SYNERGY ENGINEERING DESK</span>
          <h3 className="text-3xl md:text-5xl font-black text-white">
            Need Custom Power Sizing or AMC Support?
          </h3>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
            Our modern manufacturing facility at Sector-17A, Greater Noida, supported by a team of 50+ highly skilled professionals, provides end-to-end design, commissioning, and lifecycle support.
          </p>
          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-[#FBAE17] hover:bg-amber-400 text-slate-950 font-black px-10 py-5 rounded-md shadow-xl transition-transform hover:scale-105 no-underline text-sm uppercase tracking-wider"
            >
              Contact Engineering Department
            </Link>
          </div>
        </div>
      </section>
    </div>
  ) };
