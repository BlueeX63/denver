import React from 'react';

export default function SafetySection() {
    return (
        <section className="relative w-full py-32 overflow-hidden bg-slate-900 ">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{
                    backgroundImage: `url('/photos/DSC_9594.JPG')`,
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/70"></div>
            </div>

            {/* Left Decorative Shape */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
                <svg width="60" height="200" viewBox="0 0 60 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L60 60V140L0 200V0Z" fill="white" />
                    <path d="M0 140L60 80V140L0 200V140Z" fill="#10b981" />
                </svg>
            </div>

            {/* Right Decorative Shape */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
                <svg width="60" height="200" viewBox="0 0 60 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60 0L0 60V140L60 200V0Z" fill="white" />
                    <path d="M60 140L0 80V140L60 200V140Z" fill="#10b981" />
                </svg>
            </div>

            {/* Content Container */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-16">

                {/* Left Side Content */}
                <div className="w-full lg:w-1/2 text-left">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-8 h-[2px] bg-emerald-500"></span>
                        <span className="text-[#FBAE17] font-semibold tracking-wider text-sm uppercase">CPRI Certified Standard</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                        Electrical Safety Is Our<br />Absolute Priority.
                    </h2>

                    <p className="text-slate-300 text-base md:text-lg mb-10 leading-relaxed max-w-lg font-light">
                        Every switchboard, LT/PCC panel, and UPS infrastructure manufactured by Synergyelectra adheres to strict IEC safety compliance. Our engineers enforce continuous thermal load testing and high-voltage dielectric insulation defense to protect your plant personnel.
                    </p>

                    <a href="/contact" className="bg-[#FBAE17] text-slate-950 no-underline inline-block py-4 px-8 font-black text-sm uppercase tracking-wider rounded shadow-lg transition duration-300 ease-in-out hover:bg-amber-400 hover:shadow-xl transform hover:-translate-y-0.5">
                        Consult Safety Engineering →
                    </a>
                </div>

                {/* Right Side Stats */}
                <div className="w-full lg:w-1/2 flex justify-between lg:justify-end gap-8 md:gap-16 text-left">
                    {/* Stat 1 */}
                    <div className="flex flex-col">
                        <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">100<span className="text-emerald-500">%</span></h3>
                        <p className="text-slate-300 font-medium text-sm">CPRI Tested</p>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col">
                        <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">1000<span className="text-[#FBAE17]">+</span></h3>
                        <p className="text-slate-300 font-medium text-sm">Plants Commissioned</p>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex flex-col">
                        <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">24/7</h3>
                        <p className="text-slate-300 font-medium text-sm">Field Telematics Support</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
