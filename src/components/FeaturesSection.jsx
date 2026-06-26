import React from 'react';
import { TrendingUp, Globe, Users, Network } from 'lucide-react';

export default function FeaturesSection() {
    return (
        <section className="bg-white py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header Section */}
                <div className="text-center mb-24 flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-8 h-[2px] bg-emerald-500"></span>
                        <span className="text-slate-800 font-semibold tracking-wider text-sm uppercase">Why Choose Us</span>
                        <span className="w-8 h-[2px] bg-emerald-500 hidden md:block opacity-0"></span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-tight max-w-4xl">
                        Key Advantages Of Synergyelectra<br />Power & Switchboards
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">

                    {/* Left Features */}
                    <div className="w-full lg:w-[30%] flex flex-col gap-20 order-2 lg:order-1 text-center lg:text-right relative z-10">
                        {/* Feature 1 */}
                        <div className="flex flex-col items-center lg:items-end group">
                            <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/30">
                                <TrendingUp size={32} strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">CPRI Type-Tested</h3>
                            <p className="text-slate-500 leading-relaxed text-[15px]">
                                Fully certified dielectric and short-circuit withstand capacity up to 50kA, ensuring uncompromised personnel safety.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col items-center lg:items-end group">
                            <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/30">
                                <Globe size={32} strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">IS 8623 Compliance</h3>
                            <p className="text-slate-500 leading-relaxed text-[15px]">
                                Designed strictly to Indian and IEC international standards with modular extendable busbar chambers and IP65 enclosures.
                            </p>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="w-full lg:w-[40%] flex justify-center order-1 lg:order-2 relative px-4">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-emerald-50/50 rounded-full blur-3xl -z-10"></div>

                        <img
                            src="/photos/DSC_9575.JPG"
                            alt="Synergyelectra Industrial Panel Setup"
                            className="w-full max-w-[500px] h-auto object-cover drop-shadow-2xl rounded-2xl border-4 border-emerald-500/20"
                        />
                    </div>

                    {/* Right Features */}
                    <div className="w-full lg:w-[30%] flex flex-col gap-20 order-3 lg:order-3 text-center lg:text-left relative z-10">
                        {/* Feature 3 */}
                        <div className="flex flex-col items-center lg:items-start group">
                            <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/30">
                                <Network size={32} strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">True 0ms Online UPS</h3>
                            <p className="text-slate-500 leading-relaxed text-[15px]">
                                Double conversion inverter architecture delivers continuous pure sine wave power without a single millisecond of voltage drop.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex flex-col items-center lg:items-start group">
                            <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/30">
                                <Users size={32} strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">25-Year Legacy</h3>
                            <p className="text-slate-500 leading-relaxed text-[15px]">
                                Over two decades of trusted engineering partnerships with India's leading hyperscale data centers and refinery plants.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
