import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Factory, ShieldCheck, Zap } from 'lucide-react';

export default function AboutSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const features = [
        {
            title: "1. Engineering & Manufacturing Excellence",
            content: "With an annual turnover exceeding ₹50+ Crores, Synergyelectra operates advanced ISO 9001:2015 manufacturing facilities. We combine seasoned engineering talent with automated assembly to produce CPRI-tested electrical boards and power systems."
        },
        {
            title: "2. Turnkey Power Infrastructure",
            content: "We are not merely equipment suppliers — we deliver complete load auditing, custom CAD electrical engineering, fabrication, site commissioning, and lifetime field telematics support."
        },
        {
            title: "3. Uncompromised Quality Assurance",
            content: "Every LT panel, PCC board, battery charger, and solar mounting structure undergoes rigorous Factory Acceptance Testing (FAT) including high-voltage dielectric withstand and continuous full-load thermal trials."
        }
    ];

    return (
        <section className="bg-white py-24 relative overflow-hidden text-slate-800 font-outfit">
            {/* Background Decorative Element */}
            <div className="absolute right-0 bottom-10 opacity-15 hidden lg:block pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 0C100 0 100 50 150 50C200 50 200 100 200 100" stroke="#10b981" strokeWidth="10" strokeLinecap="round" />
                    <path d="M100 200C100 200 100 150 50 150C0 150 0 100 0 100" stroke="#10b981" strokeWidth="10" strokeLinecap="round" />
                    <circle cx="100" cy="100" r="40" stroke="#10b981" strokeWidth="10" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">

                {/* Left Image Side */}
                <div className="w-full lg:w-1/2 relative">
                    <div className="absolute -left-8 -top-8 w-64 h-64 bg-[#072d1a] rounded-md -z-10 hidden lg:block opacity-10"></div>

                    <img
                        src="/photos/DSC_9530.JPG"
                        alt="Synergyelectra Industrial Manufacturing Facility"
                        className="w-full h-[400px] md:h-[560px] object-cover rounded-md shadow-2xl border border-slate-200 relative z-10"
                    />

                    <div className="absolute -bottom-6 -right-6 bg-[#072d1a] text-white p-6 rounded-md shadow-xl border border-emerald-500/30 hidden sm:block z-20">
                        <div className="flex items-center gap-3">
                            <Factory size={32} className="text-[#FBAE17]" />
                            <div>
                                <div className="text-2xl font-black text-[#FBAE17]">₹50+ CR</div>
                                <div className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Annual Turnover Legacy</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content Side */}
                <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-[2px] bg-emerald-600"></span>
                        <span className="text-emerald-700 font-black tracking-widest text-xs uppercase">Corporate Trust & Legacy</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
                        Powering Industries.<br />Enabling Sustainability.
                    </h2>

                    <p className="text-slate-600 text-sm md:text-base mb-8 leading-relaxed font-normal">
                        In today’s rapidly advancing industrial landscape, reliable power infrastructure is foundational. Synergyelectra stands as a benchmark in electrical engineering, turnkey panel manufacturing, industrial battery chargers, and high-yield solar infrastructures.
                    </p>

                    {/* Accordion Features */}
                    <div className="flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`rounded-md transition-all duration-300 border ${openIndex === index
                                    ? 'bg-white border-emerald-600 shadow-md'
                                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                                    className="w-full flex justify-between items-center p-5 text-left font-black text-sm md:text-base text-slate-900 bg-transparent border-none cursor-pointer focus:outline-none"
                                >
                                    <span>{feature.title}</span>
                                    {openIndex === index ? (
                                        <ChevronUp className="text-emerald-600 shrink-0 ml-2" size={20} />
                                    ) : (
                                        <ChevronDown className="text-slate-400 shrink-0 ml-2" size={20} />
                                    )}
                                </button>

                                {openIndex === index && (
                                    <div className="p-5 pt-0 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                        {feature.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
