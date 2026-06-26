import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingSection() {
    const plans = [
        {
            name: "Switchboard Supply",
            description: "Custom fabrication and wiring of CPRI type-tested Low Tension panels.",
            price: "Custom Quote",
            features: [
                "Built strictly to IS 8623 / IEC 61439",
                "Short-circuit capacity up to 50kA",
                "Electrolytic grade copper busbars",
                "Comprehensive dielectric certificates"
            ]
        },
        {
            name: "Turnkey Solar EPC",
            description: "End-to-end engineering, procurement, and construction of industrial solar installations.",
            price: "Turnkey EPC",
            features: [
                "25-year linear generation warranty",
                "180 km/h cyclone tested MMS",
                "Hot-dip galvanized 80+ micron zinc",
                "Net-metering & grid synchronization"
            ]
        },
        {
            name: "Critical Power Systems",
            description: "Zero-millisecond online UPS and heavy industrial substation battery chargers.",
            price: "EPC + AMC",
            features: [
                "True 0ms double-conversion transfer",
                "DSP controlled pure sine wave output",
                "Rugged float & boost charger profiles",
                "24/7 on-site emergency field support"
            ]
        }
    ];

    return (
        <section className="bg-slate-50 py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header Section */}
                <div className="text-center mb-20 flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-8 h-[2px] bg-emerald-500"></span>
                        <span className="text-slate-800 font-semibold tracking-wider text-sm uppercase">Contracting Models</span>
                        <span className="w-8 h-[2px] bg-emerald-500 hidden md:block opacity-0"></span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight max-w-3xl">
                        Turnkey Industrial Engineering &<br />Power Contracting Tiers
                    </h2>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="bg-white p-10 md:p-12 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border-t-4 border-emerald-500 rounded-lg"
                        >
                            {/* Plan Header */}
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{plan.name}</h3>
                            <p className="text-slate-500 text-[15px] leading-relaxed mb-8 min-h-[48px]">
                                {plan.description}
                            </p>

                            {/* Price / Contract Tier */}
                            <div className="flex items-center mb-8 pb-8 border-b border-slate-100">
                                <span className="text-3xl font-extrabold text-emerald-600 tracking-tight">{plan.price}</span>
                            </div>

                            {/* Features List */}
                            <ul className="flex flex-col gap-4 mb-10 flex-grow p-0">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 list-none">
                                        <Check className="text-emerald-500 shrink-0 mt-0.5" size={18} strokeWidth={3} />
                                        <span className="text-slate-600 text-[15px] font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Link to="/contact" className="w-full bg-emerald-500 text-white font-bold py-4 rounded transition-colors duration-300 ease-in-out hover:bg-slate-900 hover:text-emerald-300 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group mt-auto border-none cursor-pointer uppercase tracking-wider text-sm no-underline">
                                Request Proposal
                                <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
