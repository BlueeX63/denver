import React from 'react';
import { BatteryCharging, Home, Zap, Car, ShieldCheck, MapPin } from 'lucide-react';

export default function ServicesSection() {
    const services = [
        {
            icon: ShieldCheck,
            title: "Comprehensive Industrial\nLT & PCC Panels",
            description: "Custom designed Power Control Centres and Low Tension boards built to IS 8623 with 50kA short-circuit withstand capacity."
        },
        {
            icon: Zap,
            title: "True Online Double\nConversion UPS",
            description: "Zero-delay (0s) transfer time industrial inverters with DSP control, pure sine wave output, and galvanic isolation."
        },
        {
            icon: BatteryCharging,
            title: "Heavy Substation\nBattery Chargers",
            description: "Rugged float and boost industrial battery charging systems tailored for railway switchyards and thermal plants."
        },
        {
            icon: Home,
            title: "Utility-Scale Solar\nEPC & Arrays",
            description: "Comprehensive solar plant installations backed by 25-year linear performance warranties and grid sync."
        },
        {
            icon: Car,
            title: "180 km/h Cyclone\nTested MMS",
            description: "Hot-dip galvanized Module Mounting Structures engineered to withstand extreme coastal winds and corrosive environments."
        },
        {
            icon: MapPin,
            title: "24/7 On-Site Field\nEngineering",
            description: "Comprehensive dielectric audits, preventive thermal imaging scans, and rapid emergency dispatch across India."
        }
    ];

    return (
        <section className="bg-slate-50 py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header Section */}
                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-8 h-[2px] bg-emerald-500"></span>
                        <span className="text-slate-800 font-semibold tracking-wider text-sm uppercase">Engineering Excellence</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight max-w-3xl">
                        Comprehensive Industrial Power &<br />Switchboard Infrastructure
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white p-10 cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                {/* Background Decorative Pattern (Visible on hover) */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id={`grid-pattern-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
                                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                                                <circle cx="20" cy="20" r="1.5" fill="white" />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill={`url(#grid-pattern-${index})`} />
                                    </svg>
                                </div>

                                {/* Hover Background overlay */}
                                <div className="absolute inset-0 bg-emerald-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

                                {/* Content relative to stay above background */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="mb-6 flex">
                                        <IconComponent
                                            size={48}
                                            strokeWidth={1.5}
                                            className="text-emerald-500 group-hover:text-white transition-colors duration-300"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-4 leading-snug transition-colors duration-300 whitespace-pre-line">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 group-hover:text-white/90 mb-8 leading-relaxed transition-colors duration-300">
                                        {service.description}
                                    </p>

                                    {/* Link */}
                                    <a
                                        href="#"
                                        className="inline-flex items-center text-emerald-500 group-hover:text-white font-bold text-sm transition-colors duration-300 mt-auto"
                                    >
                                        Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
