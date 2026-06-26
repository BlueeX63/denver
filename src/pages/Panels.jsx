import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ShieldCheck, Zap, ArrowRight, CheckCircle2, Factory, Layers, Cpu, ChevronRight, Award, Building2 } from 'lucide-react';
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
      image: "/photos/DSC_9553.JPG"
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
    <div className="bg-white min-h-screen font-outfit selection:bg-emerald-500 selection:text-white relative overflow-x-hidden text-slate-800">
      <SEO 
        title="Industrial Electrical Panels | Synergyelectra" 
        description="Explore our CPRI tested L.T. Panels, PCC, MCC, and Distribution Boards. Engineered for mission-critical plant safety and modular scalability."
        url="https://www.denver.com/panels"
      />
      {/* Hero Header Section */}
      <div className="relative w-full bg-[#072d1a] overflow-hidden pt-6 pb-24 md:pb-32">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-emerald-600/10 to-transparent pointer-events-none"></div>
        
        <Navbar />

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 pt-32 md:pt-40 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-300 text-xs md:text-sm mb-4 font-medium">
            <Link to="/" className="hover:text-emerald-400 transition-colors no-underline text-slate-300">Home</Link>
            <ChevronRight size={14} className="text-emerald-500" />
            <span className="text-emerald-300 font-semibold">Electrical Panels</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#FBAE17] tracking-tight mb-4 drop-shadow-md uppercase m-0">
            Industrial Electrical Panels
          </h1>
          <p className="text-emerald-200 text-base md:text-xl max-w-2xl mt-2 mb-8 leading-relaxed font-normal m-0 mx-auto md:mx-0">
            Precision fabricated power distribution, motor control, and power factor correction centers. Certified CPRI & IEC manufacturing standards engineered for mission-critical plant safety.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a href="#panel-catalog" className="px-8 py-4 bg-[#FBAE17] hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider rounded-md shadow-lg transition-all no-underline block">
              Explore Panel Catalog
            </a>
            <div className="flex items-center gap-2 text-emerald-300 text-xs uppercase tracking-widest font-bold px-4 py-3 bg-white/5 rounded-md border border-white/10">
              <Factory size={16} className="text-[#FBAE17]" />
              <span>₹50+ Cr Annual Turnover Facility</span>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Banner */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 -mt-10">
        <div className="bg-white rounded-md p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-6">
            <div className="text-emerald-600 font-black text-2xl md:text-3xl">CPRI Tested</div>
            <p className="text-slate-600 text-xs m-0">Stringent short-circuit withstand capacity and structured busbar fabrication.</p>
          </div>
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-6">
            <div className="text-emerald-600 font-black text-2xl md:text-3xl">Modular Scalability</div>
            <p className="text-slate-600 text-xs m-0">Corrosion-resistant sheet steel enclosures designed for future plant expansion.</p>
          </div>
          <div className="space-y-2">
            <div className="text-emerald-600 font-black text-2xl md:text-3xl">Energy Optimized</div>
            <p className="text-slate-600 text-xs m-0">Structured thermal airflow dissipation reducing heat losses and carbon footprint.</p>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section id="panel-catalog" className="max-w-7xl mx-auto px-6 py-20 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block">Comprehensive Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 m-0 tracking-tight">
            Industrial Power Distribution Centers
          </h2>
          <p className="text-slate-600 text-sm md:text-base m-0">
            Click on any panel category below to view detailed engineering parameters, sustainability highlights, and CAD drawing specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {panelProducts.map((panel, idx) => (
            <Link 
              key={idx}
              to={panel.path}
              className="group bg-white rounded-md border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-600 transition-all duration-300 flex flex-col no-underline text-slate-800 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                <img 
                  src={panel.image} 
                  alt={panel.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#072d1a] text-[#FBAE17] text-[10px] font-black uppercase tracking-wider rounded border border-emerald-500/30">
                  {panel.badge}
                </span>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900 m-0 group-hover:text-emerald-700 transition-colors">
                    {panel.title}
                  </h3>
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider m-0">
                    {panel.subtitle}
                  </p>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed m-0 pt-2">
                    {panel.desc}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  {panel.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                  
                  <div className="pt-3 flex items-center justify-between text-xs font-black text-emerald-700 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    <span>View Engineering Specifications</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Corporate Trust Banner */}
      <section className="bg-slate-900 text-white pt-20 pb-44 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <span className="text-[#FBAE17] text-xs font-bold uppercase tracking-wider block">Synergyelectra Turnkey Solutions</span>
            <h3 className="text-3xl md:text-4xl font-black text-white m-0 tracking-tight">
              Design, Manufacturing & Installation Under One Roof
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed m-0">
              Each electrical panel undergoes rigorous factory acceptance testing (FAT) before dispatch. We support national infrastructure projects across manufacturing plants, hospitals, commercial complexes, data centers, and renewable utility parks.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/contact" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wider rounded-md transition-all no-underline inline-block">
                Consult Senior Engineer
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 text-center">
            <div className="p-6 bg-slate-800/80 rounded-md border border-slate-700">
              <span className="text-3xl font-black text-[#FBAE17] block">100%</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">CPRI Compliant</span>
            </div>
            <div className="p-6 bg-slate-800/80 rounded-md border border-slate-700">
              <span className="text-3xl font-black text-[#FBAE17] block">24/7</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">Site Field Support</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
