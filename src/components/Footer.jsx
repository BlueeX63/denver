import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative bg-slate-900 text-white mt-auto pt-40">
            {/* Overlay Subscribe Section (Floating halfway above footer) */}
            <div className="absolute left-1/2 -top-24 -translate-x-1/2 w-[90%] max-w-7xl z-20 group">
                <div className="bg-emerald-500 w-full flex flex-col lg:flex-row items-center justify-between p-6 md:p-10 lg:p-16 rounded-lg shadow-2xl shadow-emerald-500/20 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-emerald-500/40 relative overflow-hidden">
                    
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/20 rounded-lg blur-2xl transform group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-10 -mb-10 w-32 h-32 bg-white/20 rounded-lg blur-xl transform group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

                    <div className="mb-6 lg:mb-0 w-full lg:w-1/2 relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="w-8 h-[2px] bg-white transition-all duration-500 group-hover:w-12"></span>
                            <span className="text-white font-bold text-sm uppercase tracking-widest opacity-90">Get In Touch</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm">
                            Subscribe to newsletter
                        </h2>
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col sm:flex-row sm:h-16 gap-3 sm:gap-0 relative z-10 sm:bg-white sm:p-1.5 sm:rounded-lg sm:shadow-inner">
                        <input
                            type="email"
                            placeholder="Your email address:"
                            className="w-full px-5 py-4 sm:py-0 h-auto sm:h-full bg-white sm:bg-transparent text-slate-800 font-medium focus:outline-none focus:ring-0 outline-none border-none placeholder-slate-400 rounded-lg sm:rounded-none"
                        />
                        <button className="bg-slate-900 cursor-pointer hover:bg-slate-800 text-white font-bold px-8 py-4 sm:py-0 sm:h-full rounded-lg transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap group/btn shadow-lg hover:shadow-slate-900/50 border-none">
                            Subscribe <ArrowRight size={20} className="transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-16">

                {/* Column 1: Brand Info */}
                <div className="flex flex-col gap-6 pr-4">
                    <div className="flex items-center gap-2 mb-2">
                        {/* Brand Logo */}
                        <img src="/src/assets/logo.png" alt="Synergy Logo" className="h-24 w-auto transform transition-transform duration-500 hover:scale-105" />
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Tristique nulla aliquet enim tortor at auctor urna
                        massa enim nec dui nunc mattis enim ut tellus
                        aute irure repreaen ..
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                        <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-emerald-500">
                            <PhoneCall size={20} />
                        </div>
                        <div className="flex flex-col">
                            <a href="tel:8700144765" className="font-bold text-lg hover:text-emerald-500 transition-colors">+91 8700144765</a>
                            <span className="text-slate-400 text-xs">Got Questions? Call us 24/7</span>
                        </div>
                    </div>
                </div>

                {/* Column 2: Working Hours */}
                <div className="flex flex-col gap-6 mt-2">
                    <h3 className="text-lg font-bold text-white mb-2">Working Hours</h3>

                    <div className="flex flex-col gap-1">
                        <span className="text-slate-400 text-sm">Monday – Friday</span>
                        <span className="font-bold text-sm">9:00 AM – 6:00 PM</span>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-slate-400 text-sm">Saturday – Sunday</span>
                        <span className="font-bold text-sm text-emerald-500">Off / Closed</span>
                    </div>
                </div>

                {/* Column 3: Navigation */}
                <div className="flex flex-col gap-4 mt-2">
                    <h3 className="text-lg font-bold text-white mb-2">Navigation</h3>
                    <ul className="flex flex-col gap-3 list-none m-0 p-0">
                        {[
                            { label: 'Home', path: '/' },
                            { label: 'About Us', path: '/about' },
                            { label: 'Solar UPS', path: '/solar-ups' },
                            { label: 'Panels', path: '/panels' },
                            { label: 'Battery Charger', path: '/battery-charger' },
                            { label: 'Contact Us', path: '/contact' }
                        ].map((link, i) => (
                            <li key={i}>
                                <Link to={link.path} className="flex items-center gap-2 text-slate-400 hover:text-emerald-500 text-sm transition-colors no-underline">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: Contact Us */}
                <div className="flex flex-col gap-6 mt-2">
                    <h3 className="text-lg font-bold text-white mb-2">Contact Us</h3>

                    <div className="flex flex-col gap-1">
                        <span className="font-bold text-sm text-white">Address:</span>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            D 211, SURAJPUR SITE 5, KASNA,<br />
                            GREATER NOIDA UP 201312
                        </p>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="font-bold text-sm text-white">Email:</span>
                        <a href="mailto:seva.synergy@gmail.com" className="text-slate-400 text-sm hover:text-emerald-500 transition-colors">seva.synergy@gmail.com</a>
                    </div>


                </div>

            </div>

            {/* Copyright Strip */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4 text-center md:text-left">
                    <p>Copyright © 2024 Synergy All rights reserved.</p>
                </div>
            </div>

            {/* Scroll back to top button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="absolute right-0 bottom-6 bg-emerald-500 hover:bg-emerald-600 text-white w-14 h-14 flex items-center justify-center transition-colors shadow-lg"
                aria-label="Scroll back to top"
            >
                <ArrowRight size={24} className="-rotate-90" />
            </button>
        </footer>
    );
}
