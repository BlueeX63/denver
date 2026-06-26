import React, { useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What safety standards do your LT & PCC panels meet?",
            answer: "All switchboards are CPRI type-tested for short-circuit withstand up to 50kA and fabricated strictly adhering to IS 8623 / IEC 61439 safety codes."
        },
        {
            question: "What is the transfer time on Solar Online UPS units?",
            answer: "Our true online double conversion inverters feature true 0ms (zero millisecond) transfer time, ensuring continuous pure sine wave power continuity."
        },
        {
            question: "Do you execute turnkey industrial solar plant EPC?",
            answer: "Yes! We handle complete end-to-end EPC contracts including site load telemetering, custom structural CAD modeling, MMS fabrication, and grid synchronization."
        },
        {
            question: "Can your solar mounting structures survive severe storms?",
            answer: "Absolutely. Our MMS frameworks are cyclone-tested up to 180 km/h wind speeds and hot-dip galvanized with 80+ micron zinc protection against corrosion."
        },
        {
            question: "What industries rely on Synergyelectra infrastructure?",
            answer: "We partner with leading petrochemical refineries, hyperscale IT data centers, railway traction yards, textile mills, and commercial high-rise towers across India."
        },
        {
            question: "Do you offer annual maintenance and thermal scanning?",
            answer: "We provide comprehensive lifetime field AMC support, routine preventive infrared thermal scans, and 24/7 rapid emergency engineering dispatch."
        }
    ];

    // Split FAQs into two columns for desktop layout
    const leftColumnFaqs = [faqs[0], faqs[2], faqs[4]];
    const rightColumnFaqs = [faqs[1], faqs[3], faqs[5]];

    const toggleAccordion = (globalIndex) => {
        setOpenIndex(openIndex === globalIndex ? null : globalIndex);
    };

    return (
        <section className="bg-slate-50 pt-32 pb-48 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header Section */}
                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-8 h-[2px] bg-emerald-500"></span>
                        <span className="text-slate-800 font-bold text-sm uppercase tracking-wider">Faq's</span>
                        <span className="w-8 h-[2px] bg-emerald-500 opacity-0 hidden sm:block"></span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

                    {/* Left Column */}
                    <div className="flex flex-col gap-6">
                        {leftColumnFaqs.map((faq, idx) => {
                            const globalIndex = idx * 2; // Math to keep unique global indexes 0, 2, 4
                            const isOpen = openIndex === globalIndex;
                            return (
                                <div
                                    key={globalIndex}
                                    className={`bg-white transition-all duration-300 ${isOpen ? 'border border-emerald-500' : 'border border-transparent'}`}
                                >
                                    <button
                                        onClick={() => toggleAccordion(globalIndex)}
                                        className="w-full text-left p-6 md:p-8 flex justify-between items-center bg-white gap-4"
                                    >
                                        <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                                        <div className="shrink-0 text-slate-900">
                                            {isOpen ? <ArrowDown size={20} className="text-emerald-500" /> : <ArrowRight size={20} />}
                                        </div>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="p-6 md:p-8 pt-0 text-slate-500 text-[15px] leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6">
                        {rightColumnFaqs.map((faq, idx) => {
                            const globalIndex = (idx * 2) + 1; // Math to keep unique global indexes 1, 3, 5
                            const isOpen = openIndex === globalIndex;
                            return (
                                <div
                                    key={globalIndex}
                                    className={`bg-white transition-all duration-300 ${isOpen ? 'border border-emerald-500' : 'border border-transparent'}`}
                                >
                                    <button
                                        onClick={() => toggleAccordion(globalIndex)}
                                        className="w-full text-left p-6 md:p-8 flex justify-between items-center bg-white gap-4"
                                    >
                                        <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                                        <div className="shrink-0 text-slate-900">
                                            {isOpen ? <ArrowDown size={20} className="text-emerald-500" /> : <ArrowRight size={20} />}
                                        </div>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="p-6 md:p-8 pt-0 text-slate-500 text-[15px] leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
