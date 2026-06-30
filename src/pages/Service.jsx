import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle } from "lucide-react";

import { Home, ChevronDown, ChevronUp, Star } from 'lucide-react';
import ServicesSection from '../components/ServicesSection';
import SustainableTravelSection from '../components/SustainableTravelSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialSection from '../components/TestimonialSection';
import { User, MessageCircle } from "lucide-react";
import SEO from '../components/SEO';


export default function Service() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const blogs = [
  {
    image: "/blog1.jpg",
    title: "Navigating the World of EV Charging",
    comments: 3,
  },
  {
    image: "/blog2.jpg",
    title: "Evolution of EV Charging Infrastructure",
    comments: 5,
  },
  {
    image: "/blog3.jpg",
    title: "Discovering the Best EV Charging Options",
    comments: 6,
  },
];

  const faqs = [
    {
      question: "What safety compliance standards do your electrical boards meet?",
      answer: "All our LT panels, PCC, MCC, and distribution boards are CPRI type-tested and built strictly to IS 8623 / IEC 61439 industrial benchmarks."
    },
    {
      question: "Do you offer complete installation for industrial solar plants?",
      answer: "Yes! We handle end-to-end solar EPC including site load analysis, custom CAD structure modeling, MMS fabrication, and grid synchronization."
    },
    {
      question: "What is the transfer time on your Solar Online UPS systems?",
      answer: "Our true online double-conversion UPS units feature true 0s (zero millisecond) transfer time, ensuring continuous pure sine wave backup."
    },
    {
      question: "Can your mounting structures withstand severe storm weather?",
      answer: "Absolutely. Our solar mounting frameworks are cyclone-tested up to 180 km/h wind speeds and hot-dip galvanized with 80+ micron zinc protection."
    },
    {
      question: "Do you provide annual maintenance and field telematics?",
      answer: "We provide lifetime field telematics monitoring, routine preventive thermal scans, and rapid 24/7 on-site emergency engineering support."
    }
  ];

  const teamMembers = [
    { 
      name: "Senior Fabrication Division", 
      role: "Structural & MMS Assembly",
      image: "/photos/DSC_9607.JPG"
    },
    { 
      name: "Switchboard Engineering", 
      role: "LT & PCC Wiring Specialists",
      image: "/photos/DSC_9599.JPG"
    },
    { 
      name: "Quality Assurance Unit", 
      role: "Dielectric & CPRI Testing",
      image: "/photos/DSC_9594.JPG"
    },
    { 
      name: "Site Commissioning Team", 
      role: "complete installation Experts",
      image: "/photos/DSC_9605.JPG"
    }
  ];

  const testimonials = [
    "Synergy Systems commissioned our entire 415V PCC and LT panel setup for our manufacturing facility. Zero downtime over 5 years of heavy continuous operation!",
    "Their 1+1+1 parallel redundant Solar UPS powers our critical ICU telemetry without a single millisecond of voltage drop. Truly unmatched reliability.",
    "The comprehensive solar plant installation was flawless. The MMS structures survived last season's severe coastal cyclones effortlessly. Highly recommended engineering team.",
    "Exceptional field support and CPRI certified safety documentation. Synergy Systems has been our trusted electrical infrastructure partner for over a decade."
  ];

  return (
    <div className="min-h-screen flex flex-col font-outfit">
      <SEO 
        title="Our Services | Synergy Systems" 
        description="Explore our end-to-end Comprehensive Solutions: LT/PCC panels, solar installations, and zero-millisecond solar online UPS systems."
        url="https://www.denver.com/service"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[600px] bg-cover bg-center bg-no-repeat" 
               style={{backgroundImage: "url('/photos/DSC_9607.JPG')"}}>
        <div className="absolute inset-0  bg-opacity-50"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
           
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Service
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Nostrum exercitationem ullam corporis suscipit laboriosam, nisiaeruo aliuid consenua rearehenderit in volutate esse acia incidieunt magna.
            </p>
          </div>
        </div>
      </section>

      <ServicesSection />

      <SustainableTravelSection />

      <FeaturesSection />

      <TestimonialSection />


      <section className="bg-gray-100 py-20 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="flex justify-center items-center gap-2 text-green-500 font-medium mb-3">
            <span className="w-6 h-[2px] bg-green-500"></span>
            News & Articles
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Latest Blog Posts
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <User size={14} className="text-green-500" />
                    Admin
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={14} className="text-green-500" />
                    {blog.comments} Comments
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {blog.title}
                </h3>

                {/* Read More */}
                <button className="text-green-500 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

     


   
    
    </div>
  );
}
