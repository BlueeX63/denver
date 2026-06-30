import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ShieldCheck, Zap, ArrowRight, CheckCircle2, Factory, Layers, Cpu, ChevronRight, Award, Building2, Sliders } from 'lucide-react';
import SEO from '../components/SEO';

export default function Panels() {
  const panelProducts = [
    {
      title: 'L.T. Panel (Low Tension)',
      subtitle: 'Low-Voltage Power Distribution up to 415V',
      desc: 'Distributes power from transformers to various industrial and commercial loads. Engineered with high short-circuit withstand capacity and robust sheet metal construction.',
      features: ['High Short-Circuit Withstand', 'Modular & Scalable Design', 'Corrosion-Resistant Enclosure'],
      path: '/panels-lt',
      badge: 'CORE DISTRIBUTION',
      image: "/photos/ai_electrical_panels.png"
    },
    {
      title: 'PCC (Power Control Center)',
      subtitle: 'Main Industrial Power Distribution Hub',
      desc: 'Manages and controls high-capacity electrical loads with centralized monitoring. Enhances energy efficiency by reducing transmission losses and improving load balancing.',
      features: ['Centralized Load Monitoring', 'Precision Copper Busbars', 'Heavy-Duty Fault Tolerance'],
      path: '/panels-pcc',
      badge: 'MAIN HUB',
      image: "/photos/DSC_9583.JPG"
    },
    {
      title: 'MCC (Motor Control Centre)',
      subtitle: 'Centralized Motor Feeder Protection',
      desc: 'Controls and protects multiple industrial motors from a centralized system. Reduces energy wastage through optimized motor control and overload defense.',
      features: ['Centralized Motor Control', 'Overload & Stall Defense', 'Structured Ventilation'],
      path: '/panels-mcc',
      badge: 'MOTOR CONTROL',
      image: "/photos/DSC_9562.JPG"
    },
    {
      title: 'Draw Out Panels',
      subtitle: 'Withdrawable Breaker Cassette Modules',
      desc: 'Features withdrawable breaker modules for rapid maintenance without disturbing the entire system. Prevents unnecessary operational downtime.',
      features: ['Fully Withdrawable Breakers', 'Zero-Shutdown Maintenance', 'High Interlock Safety'],
      path: '/panels-draw-out',
      badge: 'HOT SWAPPABLE',
      image: "/photos/DSC_9575.JPG"
    },
    {
      title: 'ACDB & DCDB Panels',
      subtitle: 'Solar PV & Telecom Distribution',
      desc: 'Integral to solar power systems and telecom infrastructure. Equipped with high-grade Type 1 & 2 surge protection devices for clean renewable distribution.',
      features: ['Solar & Telecom Type', 'High Surge Protection', 'IP65 Weatherproof Grade'],
      path: '/panels-acdb-dcdb',
      badge: 'RENEWABLE ENERGY',
      image: "/photos/DSC_9590.JPG"
    },
    {
      title: 'Distribution Boards',
      subtitle: 'Multi-Circuit Branch Distribution',
      desc: 'Divides electrical power into multiple subsidiary circuits with precise protective switching. Structured wiring architecture improves thermal stability.',
      features: ['Multi-Circuit Protection', 'Thermal Airflow Optimized', 'Heavy Gauge Sheet Steel'],
      path: '/panels-distribution-board',
      badge: 'BRANCH POWER',
      image: "/photos/DSC_9584.JPG"
    },
    {
      title: 'Bus Duct Systems',
      subtitle: 'High-Capacity Sandwich Busbar Trunking',
      desc: 'Advanced compact alternative to heavy traditional cabling. High-conductivity copper/aluminium busbars minimize transmission losses significantly.',
      features: ['High-Conductivity Busbars', 'Compact Sandwich Build', 'Extremely Low Voltage Drop'],
      path: '/panels-bus-duct',
      badge: 'HIGH CAPACITY',
      image: "/photos/DSC_9566.JPG"
    },
    {
      title: 'APFC Panels',
      subtitle: 'Automatic Power Factor Correction',
      desc: 'Automatically maintains optimum power factor levels, eliminating reactive power penalties. Intelligent capacitor switching prevents overcompensation.',
      features: ['Microprocessor Controlled', 'Penalty Elimination', 'Zero-Crossing Capacitor Switch'],
      path: '/panels-apfc',
      badge: 'ENERGY SAVING',
      image: "/photos/DSC_9570.JPG"
    },
    {
      title: 'Junction Boxes & Feeder Pillars',
      subtitle: 'Weatherproof Outdoor Termination Hubs',
      desc: 'Designed for safe outdoor cable termination and power distribution. Rugged corrosion-resistant construction ensures decades of maintenance-free service.',
      features: ['IP65/IP66 Weatherproof', 'Corrosion-Resistant Body', 'Anti-Vandal Outdoor Lock'],
      path: '/panels-junction-boxes',
      badge: 'OUTDOOR HUB',
      image: "/photos/DSC_9572.JPG"
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen font-outfit selection:bg-emerald-500 selection:text-white relative overflow-x-hidden text-slate-100">
      <SEO 
        title="Industrial Electrical Panels | Synergy Systems" 
        description="Explore our CPRI tested L.T. Panels, PCC, MCC, and Distribution Boards. Engineered for mission-critical plant safety and modular scalability."
        url="https://www.denver.com/panels"
      />
      {/* Hero Header Section - Full Screen Height */}
      <div className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden pt-6 pb-16 bg-cover bg-center border-b border-emerald-900/40" style={{ backgroundImage: `url('/photos/ai_electrical_panels.png')` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none"></div>
        
        <Navbar />

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 my-auto pt-24 pb-12 text-center md:text-left w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs md:text-sm mb-6 font-bold uppercase tracking-wider">
            <Sliders size={16} />
            <span>Switchboard Engineering & Control Portfolio</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 uppercase drop-shadow-lg leading-none">
            Industrial Electrical <br />
            <span className="text-[#FBAE17]">Power Panels</span>
          </h1>

          <p className="text-slate-300 text-base md:text-xl max-w-3xl leading-relaxed mb-8 font-light">
            Precision fabricated power distribution, motor control, and power factor correction centers. Certified CPRI & IEC manufacturing standards engineered for mission-critical plant safety and zero thermal breakdown.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#panel-catalog" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-md shadow-lg transition-all hover:scale-105 no-underline uppercase text-sm tracking-wider flex items-center gap-2">
              <span>Explore Switchboard Catalog</span>
              <ArrowRight size={18} />
            </a>
            <Link to="/contact" className="bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 font-bold px-8 py-4 rounded-md transition-all no-underline text-sm uppercase tracking-wider">
              Request CAD Sizing
            </Link>
          </div>
        </div>

        {/* Bottom Hero Indicator Strip */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 w-full pb-4 hidden md:flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-400 border-t border-slate-800/80 pt-4">
          <span>CPRI Tested up to 50kA</span>
          <span>•</span>
          <span>IS 8623 / IEC 61439 Compliant</span>
          <span>•</span>
          <span>Modular Compartmentalized Build</span>
        </div>
      </div>

      {/* Intro Banner */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 py-12 -mt-16">
        <div className="bg-slate-900 rounded-xl p-8 md:p-12 shadow-2xl border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-6">
            <div className="text-[#FBAE17] font-black text-2xl md:text-3xl">CPRI Tested</div>
            <p className="text-slate-400 text-xs m-0 leading-relaxed">Stringent short-circuit withstand capacity and structured heavy copper busbar fabrication.</p>
          </div>
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-6">
            <div className="text-emerald-400 font-black text-2xl md:text-3xl">Modular Scalability</div>
            <p className="text-slate-400 text-xs m-0 leading-relaxed">Corrosion-resistant sheet steel enclosures designed specifically for future plant expansion.</p>
          </div>
          <div className="space-y-2">
            <div className="text-blue-400 font-black text-2xl md:text-3xl">Energy Optimized</div>
            <p className="text-slate-400 text-xs m-0 leading-relaxed">Structured thermal airflow dissipation reducing heat losses and carbon footprint.</p>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section id="panel-catalog" className="max-w-7xl mx-auto px-6 py-20 space-y-12 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
            COMPREHENSIVE PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
            Industrial Power Distribution Centers
          </h2>
          <div className="w-24 h-1 bg-[#FBAE17] rounded-full mx-auto mb-6"></div>
          <p className="text-slate-400 text-base md:text-lg m-0">
            Click on any panel category below to view detailed engineering parameters, sustainability highlights, and CAD drawing specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {panelProducts.map((panel, idx) => (
            <Link 
              key={idx}
              to={panel.path}
              className="group bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-xl hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-500 flex flex-col justify-between no-underline text-slate-100 hover:-translate-y-1.5"
            >
              <div>
                <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden border-b border-slate-800">
                  <img 
                    src={panel.image} 
                    alt={panel.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider rounded shadow-lg">
                    {panel.badge}
                  </span>
                </div>

                <div className="p-8 space-y-4">
                  <span className="text-xs font-bold text-[#FBAE17] uppercase tracking-wider block">{panel.subtitle}</span>
                  <h3 className="text-2xl font-black text-white m-0 group-hover:text-emerald-400 transition-colors">
                    {panel.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed m-0 pt-1">
                    {panel.desc}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0 space-y-4">
                <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  {panel.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-300">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 flex items-center justify-between text-xs font-black text-emerald-400 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>View Technical Specs</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Corporate Trust Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 text-white pt-20 pb-36 border-t border-emerald-900/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <span className="text-[#FBAE17] text-xs font-bold uppercase tracking-wider block">Synergy Systems Switchboard Engineering</span>
            <h3 className="text-3xl md:text-5xl font-black text-white m-0 tracking-tight">
              Design, Manufacturing & Installation Under One Roof
            </h3>
            <p className="text-slate-300 text-base leading-relaxed m-0 font-light">
              Each electrical panel undergoes rigorous factory acceptance testing (FAT) before dispatch. We support national infrastructure projects across manufacturing plants, hospitals, commercial complexes, data centers, and renewable utility parks.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact" className="px-10 py-5 bg-[#FBAE17] hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider rounded-md transition-all shadow-xl hover:scale-105 no-underline inline-block">
                Consult Senior Switchboard Engineer
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 text-center">
            <div className="p-8 bg-slate-900/90 rounded-xl border border-slate-800 shadow-lg">
              <span className="text-4xl font-black text-[#FBAE17] block mb-1">100%</span>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">CPRI Compliant</span>
            </div>
            <div className="p-8 bg-slate-900/90 rounded-xl border border-slate-800 shadow-lg">
              <span className="text-4xl font-black text-emerald-400 block mb-1">24/7</span>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Site Field Support</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
