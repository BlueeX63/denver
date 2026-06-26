import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { 
  Download, FileText, CheckCircle2, ArrowRight, MessageSquare, 
  PhoneCall, Sun, Zap, ShieldCheck, Cpu, BatteryCharging, 
  RefreshCw, Sliders, Award, Activity, Layers, Settings, 
  Factory, Building2, Server, Stethoscope, Leaf, Sparkles, ChevronRight, ChevronDown, X, Send
} from 'lucide-react';

export default function SolarUPSDetailLayout({
  breadcrumb,
  title,
  headline,
  intro,
  specifications,
  features,
  seamlessTransfer,
  whyChoose,
  howItWorks,
  applications,
  environmental,
  productImages
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [downloadingToast, setDownloadingToast] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', capacity: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [customSelectOpen, setCustomSelectOpen] = useState(false);

  useEffect(() => {
    if (!productImages || productImages.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % productImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [productImages]);

  const handleDownloadBrochure = () => {
    setDownloadingToast(true);

    const specTableRows = specifications ? specifications.map(s => `<tr><td style="padding:12px;border:1px solid #cbd5e1;font-weight:bold;background:#f8fafc;width:40%;text-transform:uppercase;font-size:13px;">${s.label}</td><td style="padding:12px;border:1px solid #cbd5e1;font-size:13px;color:#0f172a;font-weight:600;">${s.value}</td></tr>`).join('') : '';

    const htmlContent = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>${title} - Technical Datasheet</title>
<style>
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 40px auto; max-width: 800px; color: #1e293b; line-height: 1.6; }
.header { background: #072d1a; color: white; padding: 35px; border-radius: 8px; border-bottom: 4px solid #10b981; }
h1 { color: #FBAE17; margin: 0 0 10px 0; font-size: 28px; text-transform: uppercase; letter-spacing: -0.5px; }
.turnover { color: #34d399; font-weight: 800; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; }
table { border-collapse: collapse; margin-top: 25px; width: 100%; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-radius: 6px; overflow: hidden; }
.footer { margin-top: 50px; padding-top: 20px; border-top: 2px solid #072d1a; font-size: 12px; color: #64748b; }
.badge { display: inline-block; background: #ecfdf5; color: #065f46; padding: 4px 10px; border-radius: 4px; font-weight: bold; font-size: 11px; margin-top: 15px; border: 1px solid #a7f3d0; }
</style>
</head>
<body>
<div class="header">
  <div class="turnover">₹50+ Cr Annual Turnover Facility • CPRI & IEC Certified</div>
  <h1>${title}</h1>
  <p style="margin:0;color:#f1f5f9;font-size:15px;">${headline || intro || 'True Online Double-Conversion Power Backup'}</p>
  <div class="badge">OFFICIAL FACTORY SPECIFICATION SHEET</div>
</div>
<h2 style="margin-top:35px;color:#072d1a;font-size:20px;letter-spacing:-0.3px;">Technical System Parameters</h2>
<table>
  ${specTableRows}
</table>
<div class="footer">
  <strong style="color:#0f172a;">SYNERGYELECTRA POWER SOLUTIONS</strong><br>
  Powering Industries. Enabling Sustainability. Engineering the Future.<br>
  Turnkey Design, Manufacturing & Lifetime Service Support • ISO 9001:2015 Certified
</div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title ? title.replace(/[^a-zA-Z0-9]/g, '_') : 'Synergyelectra_UPS'}_Technical_Datasheet.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setDownloadingToast(false);
    }, 4000);
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, source: 'Solar UPS Form' }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setShowQuoteModal(false);
          setFormData({ name: '', email: '', phone: '', capacity: '', message: '' });
        }, 3000);
      } else {
        setErrorMsg(data.error || 'Failed to send message.');
      }
    } catch (error) {
      setErrorMsg('Failed to connect to the server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen font-outfit selection:bg-emerald-500 selection:text-white relative overflow-x-hidden">
      {/* Downloading Toast Notification */}
      {downloadingToast && (
        <div className="fixed top-24 right-6 z-50 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl border border-emerald-500/30 flex items-center gap-3 animate-bounce">
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
          <div>
            <p className="text-sm font-bold text-emerald-400 m-0">Brochure Downloading...</p>
            <p className="text-xs text-slate-300 m-0">Synergyelectra_Technical_Brochure.pdf (4.8 MB)</p>
          </div>
        </div>
      )}

      {/* Quick Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity animate-fadeIn text-left font-outfit">
          <div className="bg-white rounded-md max-w-md w-full p-0 shadow-2xl relative border border-slate-300 overflow-visible transform transition-all">
            {/* Top Emerald Header Banner */}
            <div className="bg-[#072d1a] px-6 py-4 text-white flex justify-between items-center rounded-t-md border-b border-emerald-500/30">
              <div className="flex items-center gap-2 text-[#FBAE17] font-bold text-xs tracking-wider uppercase">
                <Sparkles size={15} />
                <span>Quick Quotation</span>
              </div>
              <button 
                onClick={() => setShowQuoteModal(false)}
                className="text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 p-1 rounded transition-colors border-none cursor-pointer flex items-center justify-center"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-6 md:p-8 bg-white rounded-b-md">
              {submitted ? (
                <div className="py-8 text-center flex flex-col items-center justify-center bg-white">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-3 shadow-sm">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 mt-0">Request Received!</h3>
                  <p className="text-slate-600 text-xs leading-relaxed max-w-xs m-0 mx-auto">Our engineering team will analyze your requirements and reach out shortly.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6 mt-0 tracking-tight">Request Factory Estimate</h3>

                  <form onSubmit={handleQuoteSubmit} className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        required
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:border-emerald-600 text-slate-900 bg-white placeholder:text-slate-400 text-sm font-medium shadow-sm"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        type="email" 
                        required
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:border-emerald-600 text-slate-900 bg-white placeholder:text-slate-400 text-sm font-medium shadow-sm"
                      />
                      <input 
                        type="tel" 
                        required
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:border-emerald-600 text-slate-900 bg-white placeholder:text-slate-400 text-sm font-medium shadow-sm"
                      />
                    </div>

                    {/* Custom Theme Dropdown */}
                    <div className="relative">
                      <div 
                        onClick={() => setCustomSelectOpen(!customSelectOpen)}
                        className="w-full px-4 py-3 rounded-md border border-slate-300 bg-white text-slate-900 text-sm font-medium shadow-sm flex items-center justify-between cursor-pointer hover:border-emerald-600 transition-colors select-none"
                      >
                        <span>{formData.capacity || 'Select Capacity Range'}</span>
                        <ChevronDown size={16} className={`text-slate-500 transition-transform duration-200 ${customSelectOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                      </div>

                      {customSelectOpen && (
                        <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-200 rounded-md shadow-2xl z-[70] overflow-hidden py-1.5 animate-fadeIn">
                          {['5kVA - 10kVA', '15kVA - 30kVA', '40kVA - 80kVA', '100kVA+ Industrial'].map((opt, oIdx) => (
                            <div 
                              key={oIdx}
                              onClick={() => {
                                setFormData({...formData, capacity: opt});
                                setCustomSelectOpen(false);
                              }}
                              className={`px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center justify-between select-none ${formData.capacity === opt ? 'bg-emerald-50 text-emerald-700 font-bold' : 'text-slate-700 font-medium hover:bg-slate-50'}`}
                            >
                              <span>{opt}</span>
                              {formData.capacity === opt && <CheckCircle2 size={15} className="text-emerald-600" />}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div>
                      <textarea 
                        rows={2}
                        placeholder="Project Details / City Location (optional)"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:border-emerald-600 text-slate-900 bg-white placeholder:text-slate-400 text-sm font-medium shadow-sm resize-none"
                      ></textarea>
                    </div>

                    {errorMsg && (
                      <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-md text-sm font-semibold">
                        {errorMsg}
                      </div>
                    )}
                    <button disabled={loading} type="submit" className="w-full py-4 bg-[#FBAE17] hover:bg-amber-400 disabled:opacity-70 disabled:cursor-not-allowed text-slate-950 font-black text-sm uppercase tracking-wider rounded-md shadow-lg transition-all flex items-center justify-center gap-2 border-none cursor-pointer">
                      <span>{loading ? 'Submitting...' : 'Request Quotation'}</span>
                      {!loading && <Send size={16} />}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Header Section */}
      <div className="relative w-full bg-[#072d1a] overflow-hidden pt-6 pb-20 md:pb-28">
        {/* Sketch Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-emerald-600/10 to-transparent pointer-events-none"></div>
        
        {/* Navbar */}
        <Navbar />

        {/* Hero Banner Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 pt-32 md:pt-40">
          <div className="flex items-center gap-2 text-slate-300 text-xs md:text-sm mb-4 font-medium">
            <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-emerald-500" />
            <Link to="/solar-ups" className="hover:text-emerald-400 transition-colors">Product</Link>
            <ChevronRight size={14} className="text-emerald-500" />
            <span className="text-emerald-300 font-semibold">{breadcrumb}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#FBAE17] tracking-tight mb-4 drop-shadow-md uppercase">
            {title}
          </h1>

          {/* Indicator Underline */}
          <div className="flex items-center gap-1 w-full max-w-sm">
            <div className="h-2 w-16 bg-emerald-500 rounded-full"></div>
            <div className="h-2 flex-1 bg-white/20 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Section 1: Intro Headline + Product Showcase Cards */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 py-16 md:py-20 -mt-10">
        <div className="bg-white rounded-md p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wider uppercase border border-emerald-200">
              <Award size={14} />
              <span>True Online Double Conversion Architecture</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              {headline}
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              {intro}
            </p>
          </div>

          {/* Right Product Images Showcase (Continuous Left-Only Sliding Green Cards Track) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full overflow-hidden bg-white rounded-md p-2">
            {(() => {
              const defaultFallback = [
                "/photos/DSC_9594.JPG",
                "/photos/DSC_9599.JPG",
                "/photos/DSC_9605.JPG",
                "/photos/DSC_9607.JPG"
              ];
              const sourceArray = (productImages && productImages.length > 0 ? productImages : defaultFallback);
              const safeList = Array.from(new Set(sourceArray)).slice(0, 4);
              const currentSlide = activeImageIndex % safeList.length;
              const displayDeck = [...safeList, ...safeList];

              const handleIndicatorClick = (targetIdx) => {
                setActiveImageIndex(targetIdx % safeList.length);
              };

              return (
                <>
                  <div className="relative w-full overflow-hidden py-4 bg-white">
                    {/* Sliding Track of Cards */}
                    <div 
                      className="flex gap-5 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-full"
                      style={{
                        transform: `translateX(calc(-${currentSlide} * (50% + 10px)))`
                      }}
                    >
                      {displayDeck.map((imgUrl, idx) => (
                        <div 
                          key={idx}
                          onClick={() => handleIndicatorClick(idx % safeList.length)}
                          className="w-[calc(50%-10px)] h-72 md:h-80 border-2 border-emerald-500 rounded-md p-0 relative overflow-hidden flex-shrink-0 bg-white shadow-[0_10px_30px_rgba(16,185,129,0.12)] cursor-pointer group hover:shadow-[0_15px_40px_rgba(16,185,129,0.25)] transition-shadow duration-300"
                        >
                          <img 
                            src={imgUrl} 
                            alt={`${title} view ${idx + 1}`} 
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = defaultFallback[idx % defaultFallback.length];
                            }}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clickable Slider Indicator Lines */}
                  <div className="flex items-center justify-center gap-2 mt-6 flex-wrap z-20 relative bg-white w-full pt-2">
                    {safeList.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleIndicatorClick(idx)}
                        className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer border-none p-0 ${
                          currentSlide === idx 
                            ? 'w-8 bg-emerald-500 shadow-sm animate-pulse' 
                            : 'w-4 bg-slate-300 hover:bg-slate-400'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Section 2: Large Product View + Orange Header Specification Table */}
      <section className="bg-slate-50 py-20 px-6 border-y border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Large Main Product View Card (Static single image, matching exact specification table height) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div className="bg-white border border-slate-200 rounded-md p-8 shadow-sm flex flex-col items-center justify-between relative overflow-hidden group flex-1 h-full min-h-[600px]">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-amber-400 to-blue-600"></div>
              
              <div className="w-full flex justify-between items-center mb-4 z-10 relative">
                <span className="text-xs font-bold text-slate-400 tracking-wider">INDUSTRIAL GRADE</span>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-md">DSP CONTROLLED</span>
              </div>

              {/* Locked permanently to static image [0] */}
              <div className="w-full flex-1 flex items-center justify-center relative my-6 z-10">
                <img 
                  src={(productImages && productImages[0]) ? productImages[0] : "/photos/DSC_9575.JPG"} 
                  alt={`${title} static specification view`}
                  className="max-w-full max-h-[440px] lg:max-h-[500px] object-contain transform transition-transform duration-700 group-hover:scale-105" 
                />
              </div>

              <div className="w-full bg-slate-50 p-4 rounded-md border border-slate-100 flex items-center justify-between text-xs text-slate-600 mt-4 z-10 relative flex-wrap gap-2">
                <span>⚡ Zero Switching Time</span>
                <span>🛡️ High Overload Withstand</span>
                <span>🔋 Smart MPPT</span>
              </div>
            </div>

            {/* Bottom Left Floating Contact Us Badge */}
            <div className="mt-6 flex items-center gap-3">
              <Link 
                to="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white p-3.5 rounded-md shadow-lg shadow-purple-600/30 transition-all hover:scale-110 flex items-center justify-center no-underline text-white"
              >
                <MessageSquare size={24} />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white border border-slate-200 px-5 py-3 rounded-md shadow-sm text-slate-800 font-bold text-sm hover:border-purple-300 transition-colors no-underline text-slate-900"
              >
                Contact us
              </Link>
            </div>
          </div>

          {/* Specification Table Column */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm">
              {/* Table Header (Exact Orange #F26E21 from reference) */}
              <div className="bg-[#F26E21] text-white grid grid-cols-12 font-bold text-base md:text-lg">
                <div className="col-span-5 py-4 px-6 border-r border-orange-400/40">Specification</div>
                <div className="col-span-7 py-4 px-6">Value</div>
              </div>

              {/* Table Body Rows */}
              <div className="divide-y divide-slate-100 text-sm md:text-base">
                {specifications.map((spec, i) => (
                  <div 
                    key={i}
                    className={`grid grid-cols-12 transition-colors ${
                      i % 2 === 1 ? 'bg-[#FAFDF9]' : 'bg-white'
                    } hover:bg-emerald-50/50`}
                  >
                    <div className="col-span-5 py-4 px-6 font-semibold text-slate-800 border-r border-slate-100 flex items-center">
                      {spec.label}
                    </div>
                    <div className="col-span-7 py-4 px-6 text-slate-600 font-medium flex items-center">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Introduction & Key Features Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {/* INTRODUCTION */}
        <div className="mb-16 max-w-4xl">
          <h3 className="text-xl md:text-2xl font-black uppercase text-slate-900 tracking-wider mb-2">
            INTRODUCTION
          </h3>
          <div className="w-16 h-1.5 bg-emerald-500 rounded-full mb-6"></div>
          
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Today's industrial landscape demands <strong className="text-slate-900">uninterrupted power</strong> and <strong className="text-slate-900">sustainable energy</strong>. Synergyelectra’s <strong className="text-slate-900">{title}</strong> delivers both acting as a <span className="text-emerald-700 font-semibold">solar inverter and true online double conversion UPS</span> in one robust system. By combining <strong className="text-slate-800">solar generation, grid power, and battery backup</strong>, it guarantees zero-downtime continuous supply while drastically reducing utility electricity bills. With <strong className="text-slate-800">DSP-based design, high MPPT efficiency, and comprehensive industrial protections</strong>, this UPS is the perfect foundational power infrastructure for modern industries.
          </p>
        </div>

        {/* KEY FEATURES */}
        <div>
          <h3 className="text-xl md:text-2xl font-black uppercase text-slate-900 tracking-wider mb-2">
            KEY FEATURES
          </h3>
          <div className="w-16 h-1.5 bg-emerald-500 rounded-full mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-5 border-b border-slate-100 pb-8 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 border border-slate-200/80 flex items-center justify-center flex-shrink-0 text-emerald-600 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-emerald-600 transition-colors">
                    {feat.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed m-0">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Seamless Transfer Accent Feature (Matching Screenshot 4) */}
            {seamlessTransfer && (
              <div className="flex items-start gap-5 border-b border-slate-100 pb-8 group md:col-span-2 bg-emerald-50/40 p-6 rounded-md border border-emerald-200/60">
                <div className="w-16 h-16 rounded-md bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <RefreshCw size={28} className="animate-spin-slow" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1 text-emerald-800">
                    Seamless Transfer Architecture
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">
                    {seamlessTransfer}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 4: 2-Column Grid (Why Choose Synergyelectra & How It Works) */}
      <section className="bg-slate-50 py-20 px-6 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: WHY CHOOSE SYNERGYELECTRA */}
          <div>
            <h3 className="text-xl md:text-2xl font-black uppercase text-slate-900 tracking-wider mb-2">
              WHY CHOOSE SYNERGYELECTRA?
            </h3>
            <div className="w-16 h-1.5 bg-emerald-500 rounded-full mb-8"></div>

            <ul className="space-y-4 list-none p-0 m-0">
              {whyChoose.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 text-base">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                  <p className="m-0 leading-relaxed">
                    <strong className="text-slate-900 font-bold">{item.title}: </strong>
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: HOW IT WORKS */}
          <div>
            <h3 className="text-xl md:text-2xl font-black uppercase text-slate-900 tracking-wider mb-2">
              HOW IT WORKS
            </h3>
            <div className="w-16 h-1.5 bg-emerald-500 rounded-full mb-8"></div>

            <ul className="space-y-4 list-none p-0 m-0">
              {howItWorks.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 text-base">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
                  <p className="m-0 leading-relaxed">
                    <strong className="text-slate-900 font-bold">{step.title} – </strong>
                    {step.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Applications & Environmental Compliance Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20 pt-16 border-t border-slate-200">
          {/* Left: APPLICATIONS */}
          <div>
            <h3 className="text-xl md:text-2xl font-black uppercase text-slate-900 tracking-wider mb-2">
              APPLICATIONS
            </h3>
            <div className="w-16 h-1.5 bg-emerald-500 rounded-full mb-8"></div>

            <ul className="space-y-4 list-none p-0 m-0">
              {applications.map((app, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 text-base">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                  <p className="m-0 leading-relaxed">
                    <strong className="text-slate-900 font-bold">{app.title} – </strong>
                    {app.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: ENVIRONMENTAL & COMPLIANCE */}
          <div>
            <h3 className="text-xl md:text-2xl font-black uppercase text-slate-900 tracking-wider mb-2">
              ENVIRONMENTAL & COMPLIANCE
            </h3>
            <div className="w-16 h-1.5 bg-emerald-500 rounded-full mb-8"></div>

            <ul className="space-y-4 list-none p-0 m-0">
              {environmental.map((env, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 text-base">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></span>
                  <p className="m-0 leading-relaxed">
                    <strong className="text-slate-900 font-bold">{env.title}: </strong>
                    {env.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white pt-16 pb-40 px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            Ready to Upgrade Your Power Infrastructure?
          </h3>
          <p className="text-slate-300 text-lg">
            Consult with Synergyelectra's technical experts for turnkey site survey, N+X redundancy planning, and custom solar integration.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setShowQuoteModal(true)}
              className="bg-[#FBAE17] hover:bg-amber-500 text-slate-950 font-black px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105 border-none cursor-pointer text-base"
            >
              Request Technical Consultation
            </button>
            <Link 
              to="/contact" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold px-8 py-4 rounded-full transition-all no-underline text-base flex items-center gap-2"
            >
              <PhoneCall size={18} />
              <span>Contact Helplines</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
