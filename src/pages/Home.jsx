import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import SafetySection from '../components/SafetySection';
import FeaturesSection from '../components/FeaturesSection';
import PricingSection from '../components/PricingSection';
import SustainableTravelSection from '../components/SustainableTravelSection';
import TestimonialSection from '../components/TestimonialSection';
import FAQSection from '../components/FAQSection';


const slides = [
    {
        id: 1,
        title: "Visionary Leadership\n& Engineering\nExcellence",
        subtitle: "FOUNDER & MANAGING DIRECTOR",
        image: "/photos/founder.JPG",
        linkText: "About Our Legacy",
        path: "/about"
    },
    {
        id: 2,
        title: "High-Yield Solar Arrays &\nCyclone-Tested MMS",
        subtitle: "25-YEAR LINEAR GENERATION WARRANTY",
        image: "/photos/DSC_9599.JPG",
        linkText: "Discover Solar",
        path: "/battery-charger-solar-panel"
    },
    {
        id: 3,
        title: "Turnkey Industrial\nSwitchboards & Power",
        subtitle: "35+ YEARS OF ENGINEERING EXCELLENCE",
        image: "/photos/DSC_9607.JPG",
        linkText: "Explore Panels",
        path: "/panels"
    }
];

import SEO from '../components/SEO';

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-white">
            <SEO 
              title="Denver | Power Electronics & Solar Solutions" 
              description="Discover Denver's visionary leadership in high-yield solar arrays, turnkey industrial switchboards, and power electronics."
              url="https://www.denver.com/"
            />
            {/* Hero Section */}
            <div className="relative w-full overflow-hidden bg-slate-900">
                <Navbar />

                <div className="w-full min-h-[650px] md:h-[85vh] relative">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-center ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent"></div>

                            <div className="relative z-20 w-full h-full flex justify-between items-center px-8 md:px-16 max-w-7xl mx-auto pb-12">
                                <div className="max-w-2xl">
                                    <div className={`flex items-center gap-3 mb-6 transform transition-all duration-500 ease-out delay-500 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                        }`}>
                                        <span className="w-8 h-0.5 bg-emerald-500"></span>
                                        <span className="text-emerald-400 font-bold tracking-wider text-xs md:text-sm uppercase">{slide.subtitle}</span>
                                    </div>

                                    <h1 className={`text-white text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-extrabold m-0 mb-8 tracking-tight transform transition-all duration-500 ease-out delay-700 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                        }`}>
                                        {slide.title.split('\n').map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </h1>

                                    <Link to={slide.path} className={`bg-[#FBAE17] hover:bg-amber-400 text-slate-950 no-underline inline-flex items-center gap-2 py-3.5 px-7 text-base font-extrabold uppercase tracking-wider rounded cursor-pointer shadow-xl transform transition-all duration-500 ease-out delay-1000 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                        }`}>
                                        {slide.linkText} →
                                    </Link>
                                </div>
                            </div>


                        </div>
                    ))}

                    <div className="absolute bottom-12 left-8 md:left-16 flex gap-4 z-20">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`h-1 border-none cursor-pointer p-0 transition-all duration-300 ${index === currentSlide ? 'bg-emerald-500 w-10' : 'bg-white/30 w-8'
                                    }`}
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* About Section */}
            <AboutSection />

            {/* Services Section */}
            <ServicesSection />

            {/* Safety & Stats Banner */}
            <SafetySection />

            {/* Features Section */}
            <FeaturesSection />

            {/* Pricing Section */}
            <PricingSection />

            {/* Sustainable Travel Section */}
            <SustainableTravelSection />

            {/* Testimonials Section */}
            <TestimonialSection />

            {/* FAQ Section */}
            <FAQSection />
        </div>
    );
}
