import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ShieldCheck, Zap, Sun, ArrowRight, CheckCircle2, PhoneCall, Layers, Cpu, ChevronRight, Award, Factory } from 'lucide-react';
import SEO from '../components/SEO';

export default function SolarUPS() {
  const products = [
    {
      title: 'Solar Online UPS 1+1',
      subtitle: 'Single Phase Input / Single Phase Output',
      desc: 'True online double-conversion UPS with 1+1 parallel active standby redundancy. Zero transfer time power protection for homes, clinics, and offices.',
      capacity: '5kVA - 30kVA',
      config: '1+1 Parallel Redundant',
      path: '/solar-ups-1-1',
      badge: 'MOST POPULAR',
      image: "/photos/DSC_9528.JPG"
    },
    {
      title: 'Solar Online UPS 1+1+1',
      subtitle: 'Triple Modular Parallel Redundant',
      desc: 'Ultra-reliable N+2 triple redundant architecture. Designed specifically for tier-IV data centers, defense telemetry, and continuous ICU facilities.',
      capacity: '15kVA - 120kVA',
      config: '1+1+1 Triple Redundant',
      path: '/solar-ups-1-1-1',
      badge: 'MAXIMUM RESILIENCE',
      image: "/photos/DSC_9536.JPG"
    },
    {
      title: 'Solar Online UPS 3-1',
      subtitle: 'Three Phase Input / Single Phase Output',
      desc: 'Eliminates utility grid transformer phase imbalance while supplying pristine single-phase pure sine wave power to sensitive electronic equipment.',
      capacity: '10kVA - 50kVA',
      config: '3-Phase AC in / 1-Phase out',
      path: '/solar-ups-3-1',
      badge: 'GRID BALANCED',
      image: "/photos/DSC_9545.JPG"
    },
    {
      title: 'Solar Online UPS 3-3',
      subtitle: 'Three Phase Input / Three Phase Output',
      desc: 'Heavy industrial double-conversion powerhouse. Engineered to withstand high motor starting inrush currents and power entire manufacturing plants.',
      capacity: '20kVA - 200kVA',
      config: 'Full 3-Phase Double Conversion',
      path: '/solar-ups-3-3',
      badge: 'HEAVY INDUSTRIAL',
      image: "/photos/DSC_9534.JPG"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-outfit selection:bg-emerald-500 selection:text-white relative overflow-x-hidden">
      <SEO 
        title="Solar Online UPS Systems | Synergyelectra" 
        description="Explore our Industrial Solar UPS portfolio featuring 1+1 and 3-3 redundancy, 0ms transfer time, and reliable double-conversion architectures."
        url="https://www.denver.com/solar-ups"
      />
      {/* Hero Header Section */}
      <div className="relative w-full bg-[#072d1a] overflow-hidden pt-6 pb-24 md:pb-32">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-emerald-600/10 to-transparent pointer-events-none"></div>
        
        <Navbar />

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 pt-32 md:pt-40 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-300 text-xs md:text-sm mb-4 font-medium">
            <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-emerald-500" />
            <span className="text-emerald-300 font-semibold">Solar UPS Systems</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#FBAE17] tracking-tight mb-6 uppercase drop-shadow-md">
            Industrial Solar UPS
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-3xl leading-relaxed">
            Uninterrupted clean power is the backbone of mission-critical operations. Synergyelectra integrates DSP-based double conversion architecture with intelligent solar MPPT harvesting.
          </p>
        </div>
      </div>

      {/* Category Overview Intro */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 py-16 -mt-12">
        <div className="bg-white rounded-md p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-4 border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-6">
            <div className="w-14 h-14 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 font-black text-2xl">
              <Award size={28} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg m-0">₹50+ Crore Turnover</h3>
              <p className="text-slate-500 text-xs m-0 mt-1">Trusted legacy in heavy industrial electrical engineering</p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-6">
            <div className="w-14 h-14 rounded-md bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
              <Zap size={28} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg m-0">0ms Transfer Time</h3>
              <p className="text-slate-500 text-xs m-0 mt-1">True zero-interruption double conversion failover</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
              <Factory size={28} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg m-0">Turnkey Solutions</h3>
              <p className="text-slate-500 text-xs m-0 mt-1">Design, manufacturing, installation & 24/7 AMC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto mb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            OUR UPS PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
            Explore Solar Online UPS Models
          </h2>
          <div className="w-20 h-1.5 bg-emerald-500 rounded-full mx-auto mb-6"></div>
          <p className="text-slate-600 text-base md:text-lg">
            Engineered specifically for manufacturing plants, hyperscale data centers, medical institutions, and commercial infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((prod, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-md border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group hover:-translate-y-1.5 bg-white"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-100 flex items-center justify-center p-6">
                  <span className="absolute top-4 left-4 z-10 bg-slate-900 text-[#FBAE17] text-[11px] font-black tracking-wider px-3 py-1 rounded-lg uppercase shadow-md">
                    {prod.badge}
                  </span>
                  <img 
                    src={prod.image} 
                    alt={prod.title}
                    className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-8">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{prod.subtitle}</span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-3 group-hover:text-emerald-600 transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {prod.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <span className="block text-slate-400 text-[10px] uppercase">Capacity</span>
                      <span className="text-slate-900 font-bold">{prod.capacity}</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <span className="block text-slate-400 text-[10px] uppercase">Topology</span>
                      <span className="text-slate-900 font-bold">{prod.config}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <Link 
                  to={prod.path}
                  className="w-full py-4 bg-[#0D2366] group-hover:bg-emerald-600 text-white font-bold rounded-md shadow-md transition-all duration-300 flex items-center justify-center gap-2 no-underline text-sm uppercase tracking-wider"
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
      <section className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white pt-16 pb-40 px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            Need Custom N+1 Redundancy Sizing?
          </h3>
          <p className="text-slate-300 text-lg">
            Our senior technical team offers complimentary load auditing and CAD electrical design for heavy industrial projects.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-[#FBAE17] hover:bg-amber-500 text-slate-950 font-black px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105 no-underline text-base"
            >
              Contact Engineering Department
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
