import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ShieldCheck, Zap, Sun, ArrowRight, CheckCircle2, Factory, Layers, Cpu, ChevronRight, Award, BatteryCharging, Wrench } from 'lucide-react';
import SEO from '../components/SEO';

export default function BatteryCharger() {
  const powerInfrastructureProducts = [
    {
      title: 'High-Efficiency Solar Panels',
      subtitle: 'Monocrystalline PERC Photovoltaic Modules',
      desc: 'Generate clean, renewable energy while significantly reducing plant carbon emissions. Built using advanced half-cut cell technology ensuring minimal annual degradation.',
      features: ['Up to 22.8% Module Efficiency', 'Anti-PID Certified Standard', '25-Year Linear Yield Warranty'],
      path: '/battery-charger-solar-panel',
      badge: 'TIER-1 SOLAR',
      image: "/photos/DSC_9585.JPG"
    },
    {
      title: 'Engineered Solar Structures',
      subtitle: 'Cyclone-Tested MMS Mounting Frameworks',
      desc: 'Heavy-duty mounting systems ensuring decades of stability and durability. Manufactured with 80+ micron hot-dip galvanized steel to withstand severe coastal weather.',
      features: ['180 km/h Cyclone Withstand', 'Hot-Dip Galvanized AZ150', 'Non-Penetrating Roof Options'],
      path: '/battery-charger-solar-structure',
      badge: '30-YEAR STABILITY',
      image: "/photos/DSC_9609.JPG"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-outfit selection:bg-emerald-500 selection:text-white relative overflow-x-hidden text-slate-800">
      <SEO 
        title="Industrial Battery Chargers & Solar Structures | Synergy Systems" 
        description="Explore our high-efficiency solar panels and cyclone-tested MMS mounting frameworks designed for 25+ years of generation."
        url="https://www.denver.com/battery-charger"
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
            <span className="text-emerald-300 font-semibold">Power & Solar Systems</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#FBAE17] tracking-tight mb-4 drop-shadow-md uppercase m-0">
            Industrial Battery Chargers
          </h1>
          <p className="text-emerald-200 text-base md:text-xl max-w-2xl mt-2 mb-8 leading-relaxed font-normal m-0 mx-auto md:mx-0">
            High-yield commercial photovoltaic arrays and cyclone-tested mounting structures. Turnkey renewable engineering designed for 25+ years of uncompromised generation.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a href="#system-portfolio" className="px-8 py-4 bg-[#FBAE17] hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider rounded-md shadow-lg transition-all no-underline block">
              Explore Portfolio
            </a>
            <div className="flex items-center gap-2 text-emerald-300 text-xs uppercase tracking-widest font-bold px-4 py-3 bg-white/5 rounded-md border border-white/10">
              <Factory size={16} className="text-[#FBAE17]" />
              <span>35+ Years Engineering Legacy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Banner */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 -mt-10">
        <div className="bg-white rounded-md p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-6">
            <div className="text-emerald-600 font-black text-2xl md:text-3xl">22.8% PERC Efficiency</div>
            <p className="text-slate-600 text-xs m-0">Guaranteed commercial photovoltaic yield with anti-PID cell passivation.</p>
          </div>
          <div className="space-y-2">
            <div className="text-emerald-600 font-black text-2xl md:text-3xl">180 km/h Cyclone Withstand</div>
            <p className="text-slate-600 text-xs m-0">Hot-dip galvanized structural mounting frameworks engineered for coastal storms.</p>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section id="system-portfolio" className="max-w-7xl mx-auto px-6 py-20 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block">Core Solar Infrastructure</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 m-0 tracking-tight">
            Renewable Energy Portfolio
          </h2>
          <p className="text-slate-600 text-sm md:text-base m-0">
            Select either equipment category below to examine detailed electrical specifications, structural highlights, and instant downloadable CAD datasheets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {powerInfrastructureProducts.map((prod, idx) => (
            <Link 
              key={idx}
              to={prod.path}
              className="group bg-white rounded-md border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:border-emerald-600 transition-all duration-300 flex flex-col no-underline text-slate-800 hover:-translate-y-1.5"
            >
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                <img 
                  src={prod.image} 
                  alt={prod.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#072d1a] text-[#FBAE17] text-[10px] font-black uppercase tracking-wider rounded border border-emerald-500/30">
                  {prod.badge}
                </span>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-slate-900 m-0 group-hover:text-emerald-700 transition-colors tracking-tight">
                    {prod.title}
                  </h3>
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider m-0">
                    {prod.subtitle}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed m-0 pt-2 font-normal">
                    {prod.desc}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  {prod.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                  
                  <div className="pt-4 flex items-center justify-between text-xs font-black text-emerald-700 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    <span>Explore Technical Specifications</span>
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
            <span className="text-[#FBAE17] text-xs font-bold uppercase tracking-wider block">Synergy Systems Turnkey Solutions</span>
            <h3 className="text-3xl md:text-4xl font-black text-white m-0 tracking-tight">
              Turnkey Design, Manufacturing & Lifetime Field Support
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed m-0">
              Whether you are commissioning a 400kV substation, a rooftop factory solar park, or a continuous telemetry facility, our senior engineers provide complete load analysis and turnkey execution.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/contact" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wider rounded-md transition-all no-underline inline-block">
                Consult Engineering Department
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 text-center">
            <div className="p-6 bg-slate-800/80 rounded-md border border-slate-700">
              <span className="text-3xl font-black text-[#FBAE17] block">35+ Years</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">Engineering Legacy</span>
            </div>
            <div className="p-6 bg-slate-800/80 rounded-md border border-slate-700">
              <span className="text-3xl font-black text-[#FBAE17] block">ISO</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">9001:2015 Facility</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
