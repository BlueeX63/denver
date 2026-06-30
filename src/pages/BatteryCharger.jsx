import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ShieldCheck, Zap, Sun, ArrowRight, CheckCircle2, Factory, Layers, Cpu, ChevronRight, Award, BatteryCharging, Wrench } from 'lucide-react';
import SEO from '../components/SEO';

export default function BatteryCharger() {
  const powerInfrastructureProducts = [
    {
      title: 'Industrial Battery Chargers',
      subtitle: 'Heavy Substation Float & Boost Rectifiers',
      desc: 'Rugged thyristor and IGBT based float-boost battery chargers engineered for power utility substations, railway switchyards, and continuous process plants.',
      features: ['Automatic Float & Boost Mode', 'Precision Constant Voltage/Current', 'High Surge & Ripple Defense'],
      path: '/battery-charger-industrial',
      badge: 'HEAVY SUBSTATION',
      image: "/photos/ai_substation_charger.png"
    },
    {
      title: 'High-Efficiency Solar Panels',
      subtitle: 'Monocrystalline PERC Photovoltaic Modules',
      desc: 'Generate clean, renewable energy while significantly reducing plant carbon emissions. Built using advanced half-cut cell technology ensuring minimal annual degradation.',
      features: ['Up to 22.8% Module Efficiency', 'Anti-PID Certified Passivation', '25-Year Linear Yield Warranty'],
      path: '/battery-charger-solar-panel',
      badge: 'TIER-1 SOLAR',
      image: "/photos/ai_solar_structure.png"
    },
    {
      title: 'Engineered Solar Structures',
      subtitle: 'Cyclone-Tested MMS Mounting Frameworks',
      desc: 'Heavy-duty mounting systems ensuring decades of stability and durability. Manufactured with 80+ micron hot-dip galvanized steel to withstand severe coastal weather.',
      features: ['180 km/h Cyclone Withstand', 'Hot-Dip Galvanized AZ150 Grade', 'Non-Penetrating Roof Options'],
      path: '/battery-charger-solar-structure',
      badge: '30-YEAR STABILITY',
      image: "/photos/DSC_9609.JPG"
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen font-outfit selection:bg-emerald-500 selection:text-white relative overflow-x-hidden text-slate-100">
      <SEO 
        title="Industrial Battery Chargers & Solar Infrastructure | Synergy Systems" 
        description="Explore our substation float-boost battery chargers, high-efficiency PERC solar panels, and cyclone-tested MMS frameworks."
        url="https://www.denver.com/battery-charger"
      />
      {/* Hero Header Section - Full Screen Height */}
      <div className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden pt-6 pb-16 bg-cover bg-center border-b border-emerald-900/40" style={{ backgroundImage: `url('/photos/ai_substation_charger.png')` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none"></div>
        
        <Navbar />

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 my-auto pt-24 pb-12 text-center md:text-left w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs md:text-sm mb-6 font-bold uppercase tracking-wider">
            <BatteryCharging size={16} />
            <span>Rectifier & Renewable Infrastructure Portfolio</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 uppercase drop-shadow-lg leading-none">
            Industrial Battery <br />
            <span className="text-[#FBAE17]">Chargers & Solar</span>
          </h1>

          <p className="text-slate-300 text-base md:text-xl max-w-3xl leading-relaxed mb-8 font-light">
            Heavy-duty substation float-boost battery rectifiers, high-yield commercial photovoltaic arrays, and cyclone-tested mounting structures. Comprehensive renewable engineering designed for 25+ years of uncompromised power generation.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#system-portfolio" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-md shadow-lg transition-all hover:scale-105 no-underline uppercase text-sm tracking-wider flex items-center gap-2">
              <span>Explore Systems Portfolio</span>
              <ArrowRight size={18} />
            </a>
            <Link to="/contact" className="bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 font-bold px-8 py-4 rounded-md transition-all no-underline text-sm uppercase tracking-wider">
              Request Technical Datasheets
            </Link>
          </div>
        </div>

        {/* Bottom Hero Indicator Strip */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 w-full pb-4 hidden md:flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-400 border-t border-slate-800/80 pt-4">
          <span>Float & Boost Thyristor Rectifiers</span>
          <span>•</span>
          <span>22.8% PERC Solar Efficiency</span>
          <span>•</span>
          <span>180 km/h Cyclone Tested MMS</span>
        </div>
      </div>

      {/* Intro Banner */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 py-12 -mt-16">
        <div className="bg-slate-900 rounded-xl p-8 md:p-12 shadow-2xl border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-6">
            <div className="text-[#FBAE17] font-black text-2xl md:text-3xl">Substation Rectifiers</div>
            <p className="text-slate-400 text-xs m-0 leading-relaxed">Precision constant voltage and current float-boost battery charging units.</p>
          </div>
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-6">
            <div className="text-emerald-400 font-black text-2xl md:text-3xl">22.8% PERC Yield</div>
            <p className="text-slate-400 text-xs m-0 leading-relaxed">Guaranteed commercial photovoltaic generation with anti-PID cell passivation.</p>
          </div>
          <div className="space-y-2">
            <div className="text-blue-400 font-black text-2xl md:text-3xl">180 km/h Cyclone Safe</div>
            <p className="text-slate-400 text-xs m-0 leading-relaxed">Hot-dip galvanized structural mounting frameworks engineered for coastal storms.</p>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section id="system-portfolio" className="max-w-7xl mx-auto px-6 py-20 space-y-12 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
            CORE INFRASTRUCTURE
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
            Power Rectifiers & Renewable Systems
          </h2>
          <div className="w-24 h-1 bg-[#FBAE17] rounded-full mx-auto mb-6"></div>
          <p className="text-slate-400 text-base md:text-lg m-0">
            Select any system category below to examine detailed electrical specifications, structural highlights, and downloadable factory datasheets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {powerInfrastructureProducts.map((prod, idx) => (
            <Link 
              key={idx}
              to={prod.path}
              className="group bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-xl hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-500 flex flex-col justify-between no-underline text-slate-100 hover:-translate-y-1.5"
            >
              <div>
                <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden border-b border-slate-800">
                  <img 
                    src={prod.image} 
                    alt={prod.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider rounded shadow-lg">
                    {prod.badge}
                  </span>
                </div>

                <div className="p-8 space-y-4">
                  <span className="text-xs font-bold text-[#FBAE17] uppercase tracking-wider block">{prod.subtitle}</span>
                  <h3 className="text-2xl font-black text-white m-0 group-hover:text-emerald-400 transition-colors tracking-tight">
                    {prod.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed m-0 pt-1 font-normal">
                    {prod.desc}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0 space-y-4">
                <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  {prod.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-300">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 flex items-center justify-between text-xs font-black text-emerald-400 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Explore Technical Specs</span>
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
            <span className="text-[#FBAE17] text-xs font-bold uppercase tracking-wider block">Synergy Systems Comprehensive Solutions</span>
            <h3 className="text-3xl md:text-5xl font-black text-white m-0 tracking-tight">
              Comprehensive Design, Manufacturing & Lifetime Field Support
            </h3>
            <p className="text-slate-300 text-base leading-relaxed m-0 font-light">
              Whether you are commissioning a 400kV substation, a rooftop factory solar park, or a continuous telemetry facility, our senior engineers provide complete load analysis and comprehensive execution.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact" className="px-10 py-5 bg-[#FBAE17] hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider rounded-md transition-all shadow-xl hover:scale-105 no-underline inline-block">
                Consult Engineering Department
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 text-center">
            <div className="p-8 bg-slate-900/90 rounded-xl border border-slate-800 shadow-lg">
              <span className="text-4xl font-black text-[#FBAE17] block mb-1">35+ Years</span>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Engineering Legacy</span>
            </div>
            <div className="p-8 bg-slate-900/90 rounded-xl border border-slate-800 shadow-lg">
              <span className="text-4xl font-black text-emerald-400 block mb-1">ISO</span>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">9001:2015 Facility</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
