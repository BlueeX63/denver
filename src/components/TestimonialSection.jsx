import React from 'react';
import testimonalsImage from '../assets/testimonals.png';

export default function TestimonialSection() {
    return (
        <section className="bg-slate-50 py-32 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                <div className="flex flex-col items-center gap-3 mb-16">
                    <span className="w-8 h-[2px] bg-emerald-500"></span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight uppercase">
                        Our valuable associates
                    </h2>
                </div>

                <div className="w-full flex justify-center">
                    <img 
                        src={testimonalsImage} 
                        alt="Our valuable associates" 
                        className="max-w-full h-auto object-contain animate-float"
                    />
                </div>
            </div>
        </section>
    );
}
