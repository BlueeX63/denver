import React from 'react';

export default function SustainableTravelSection() {
    return (
        <section className="w-full h-[70vh] flex flex-col md:flex-row bg-[#0f172a] text-white">
            {/* Left Image Side */}
            <div className="w-full md:w-1/2 h-[500px] md:h-auto">
                <img
                    src="/photos/DSC_9599.JPG"
                    alt="Synergy Systems Switchboard Wiring Specialists"
                    className="w-full h-full object-cover border-r-4 border-emerald-500"
                />
            </div>

            {/* Right Content Side */}
            <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                <div className="relative z-10 max-w-lg">
                    {/* Section Header */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-8 h-[2px] bg-emerald-500"></span>
                        <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Industrial Reliability</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                        Powering India's<br />Industrial Grid
                    </h2>

                    <p className="text-slate-300 text-[15px] leading-relaxed mb-12">
                        For over 25 years, Synergy Systems has engineered mission-critical electrical infrastructure, comprehensive low-tension panels, and pure sine wave power systems with zero dielectric compromise.
                    </p>

                    {/* Progress Bars */}
                    <div className="flex flex-col gap-8">
                        {/* Progress Bar 1 */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <span className="font-bold text-sm tracking-wide text-slate-200">CPRI Type-Tested Dielectric Safety</span>
                                <span className="font-bold text-sm tracking-wide text-emerald-400">100 %</span>
                            </div>
                            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                                <div className="h-full bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" style={{ width: '100%' }}></div>
                            </div>
                        </div>

                        {/* Progress Bar 2 */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <span className="font-bold text-sm tracking-wide text-slate-200">On-Time Comprehensive Commissioning</span>
                                <span className="font-bold text-sm tracking-wide text-emerald-400">98 %</span>
                            </div>
                            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                                <div className="h-full bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" style={{ width: '98%' }}></div>
                            </div>
                        </div>

                        {/* Progress Bar 3 */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <span className="font-bold text-sm tracking-wide text-slate-200">Zero-Millisecond Inverter Transfer</span>
                                <span className="font-bold text-sm tracking-wide text-emerald-400">100 %</span>
                            </div>
                            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                                <div className="h-full bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" style={{ width: '100%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
