import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { 
  Download, FileText, CheckCircle2, ArrowRight, MessageSquare, 
  PhoneCall, Sun, Zap, ShieldCheck, Cpu, BatteryCharging, 
  RefreshCw, Sliders, Award, Activity, Layers, Settings, 
  Factory, Building2, Server, Stethoscope, Leaf, Sparkles, ChevronRight, ChevronDown, X, Send
} from 'lucide-react';

export default function PanelDetailLayout({
  breadcrumb,
  category = "Electrical Panels",
  categoryPath = "/panels",
  title,
  subtitle,
  intro,
  sustainabilityText,
  specifications,
  features,
  applications,
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
  <p style="margin:0;color:#f1f5f9;font-size:15px;">${subtitle || intro || 'Industrial Power Distribution Infrastructure'}</p>
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
    a.download = `${title ? title.replace(/[^a-zA-Z0-9]/g, '_') : 'Synergyelectra'}_Technical_Datasheet.html`;
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
        body: JSON.stringify({ ...formData, source: 'Panel Details Form' }),
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
    <div className="bg-white min-h-screen font-outfit selection:bg-emerald-500 selection:text-white relative overflow-x-hidden text-slate-800">
      
      {/* Downloading Toast */}
      {downloadingToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-6 py-4 rounded-md shadow-2xl flex items-center gap-3 border border-emerald-500/30 animate-bounce">
          <Download className="text-emerald-400 animate-pulse" size={20} />
          <div>
            <p className="text-sm font-bold m-0 text-white">Downloading Technical Datasheet...</p>
            <p className="text-xs text-slate-400 m-0">Synergyelectra_Spec_Sheet.pdf (2.4 MB)</p>
          </div>
        </div>
      )}

      {/* Quick Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity animate-fadeIn text-left font-outfit">
          <div className="bg-white rounded-md max-w-md w-full p-0 shadow-2xl relative border border-slate-300 overflow-visible transform transition-all">
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
                        <span>{formData.capacity || title || 'Select System Category'}</span>
                        <ChevronDown size={16} className={`text-slate-500 transition-transform duration-200 ${customSelectOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                      </div>

                      {customSelectOpen && (
                        <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-200 rounded-md shadow-2xl z-[70] overflow-hidden py-1.5 animate-fadeIn">
                          {[title, 'LT / PCC / MCC Panels', 'Draw Out Panels', 'Bus Duct & APFC', 'Industrial Battery Charger', 'Solar Structure'].map((opt, oIdx) => (
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
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-emerald-600/10 to-transparent pointer-events-none"></div>
        
        <Navbar />

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 pt-32 md:pt-40">
          <div className="flex items-center gap-2 text-slate-300 text-xs md:text-sm mb-4 font-medium">
            <Link to="/" className="hover:text-emerald-400 transition-colors no-underline text-slate-300">Home</Link>
            <ChevronRight size={14} className="text-emerald-500" />
            <Link to={categoryPath} className="hover:text-emerald-400 transition-colors no-underline text-slate-300">{category}</Link>
            <ChevronRight size={14} className="text-emerald-500" />
            <span className="text-emerald-300 font-semibold">{breadcrumb}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#FBAE17] tracking-tight mb-4 drop-shadow-md uppercase m-0">
            {title}
          </h1>
          {subtitle && (
            <p className="text-emerald-200 text-lg md:text-xl font-medium max-w-2xl mt-2 mb-6 leading-relaxed">
              {subtitle}
            </p>
          )}

          <div className="flex items-center gap-1 w-full max-w-sm">
            <div className="h-2 w-16 bg-emerald-500 rounded-full"></div>
            <div className="h-2 flex-1 bg-white/20 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Section 1: Intro Headline + Visual Showcase */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 py-16 md:py-20 -mt-10">
        <div className="bg-white rounded-md p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wider uppercase">
              <Factory size={14} className="text-emerald-600" />
              <span>CPRI & IEC Certified Standard</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight m-0">
              Engineered for Industrial Safety & Longevity
            </h2>
            
            <p className="text-slate-600 text-base md:text-lg leading-relaxed m-0">
              {intro}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={() => setShowQuoteModal(true)}
                className="px-8 py-4 bg-[#072d1a] hover:bg-emerald-900 text-[#FBAE17] font-black text-sm uppercase tracking-wider rounded-md shadow-lg hover:shadow-xl transition-all flex items-center gap-2 border-none cursor-pointer"
              >
                <span>Request Custom Quote</span>
                <ArrowRight size={16} />
              </button>
              
              <button 
                onClick={handleDownloadBrochure}
                className="px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm uppercase tracking-wider rounded-md transition-all flex items-center gap-2 border border-slate-300 cursor-pointer"
              >
                <Download size={16} className="text-emerald-600" />
                <span>Datasheet PDF</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            {(() => {
              const defaultFallback = [
                "/photos/DSC_9530.JPG",
                "/photos/DSC_9575.JPG",
                "/photos/DSC_9594.JPG",
                "/photos/DSC_9607.JPG"
              ];
              const sourceArray = (productImages && productImages.length > 0 ? productImages : defaultFallback);
              const safeList = Array.from(new Set(sourceArray)).slice(0, 4);
              const curIdx = activeImageIndex % safeList.length;

              return (
                <div className="relative rounded-md overflow-hidden border-2 border-emerald-600 shadow-2xl aspect-[4/3] bg-slate-900 group">
                  {safeList.map((img, idx) => (
                    <img 
                      key={idx}
                      src={img} 
                      alt={`${title} view ${idx+1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === curIdx ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
                    <div>
                      <span className="text-xs font-bold text-[#FBAE17] uppercase tracking-wider block mb-1">Heavy Duty Construction</span>
                      <span className="text-lg font-black">{title} Infrastructure</span>
                    </div>
                    <div className="flex gap-1.5">
                      {safeList.map((_, dotIdx) => (
                        <div 
                          key={dotIdx}
                          onClick={() => setActiveImageIndex(dotIdx)}
                          className={`h-1.5 rounded-full cursor-pointer transition-all ${dotIdx === curIdx ? 'w-6 bg-[#FBAE17]' : 'w-2 bg-white/40'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

        </div>
      </section>

      {/* Section 2: Sustainability & Engineering Depth Card (PDF Highlight) */}
      {sustainabilityText && (
        <section className="max-w-7xl mx-auto px-6 py-8">
          <div className="bg-gradient-to-br from-slate-900 to-[#072d1a] rounded-md p-8 md:p-12 text-white shadow-xl border border-emerald-500/30 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
              <Leaf size={280} className="text-emerald-400" />
            </div>
            
            <div className="relative z-10 max-w-4xl space-y-4">
              <div className="flex items-center gap-2 text-[#FBAE17] font-bold text-xs uppercase tracking-wider">
                <Leaf size={16} />
                <span>Sustainability & Premium Engineering Highlights</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white m-0 tracking-tight">
                Optimizing Power Flow While Lowering Carbon Footprint
              </h3>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed m-0 font-light">
                {sustainabilityText}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Section 3: Technical Specifications & Core Features */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Specs Table */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
            <Sliders size={16} />
            <span>Technical Datasheet</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 m-0 tracking-tight">
            System Rating & Parameters
          </h3>

          <div className="border border-slate-300 rounded-md overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse m-0">
              <tbody>
                {specifications && specifications.map((spec, sIdx) => (
                  <tr key={sIdx} className={sIdx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="py-4 px-6 font-bold text-slate-700 text-sm border-b border-slate-200 w-1/3 uppercase tracking-wider">{spec.label}</td>
                    <td className="py-4 px-6 font-semibold text-slate-900 text-sm border-b border-slate-200">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Features Cards Grid */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
            <Award size={16} />
            <span>Key Advantages</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 m-0 tracking-tight">
            Core Design Advantages
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {features && features.map((feat, fIdx) => (
              <div key={fIdx} className="p-5 rounded-md bg-white border border-slate-200 shadow-sm hover:border-emerald-600 transition-colors flex items-start gap-4">
                <div className="p-2.5 rounded bg-emerald-50 text-emerald-600 mt-0.5">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 m-0 mb-1">{feat.title}</h4>
                  <p className="text-xs text-slate-600 m-0 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Section 4: Applications Sector Banner */}
      {applications && (
        <section className="bg-slate-50 border-y border-slate-200 py-16">
          <div className="max-w-7xl mx-auto px-6 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">Target Deployment Sectors</span>
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 m-0 tracking-tight">Mission-Critical Industry Applications</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {applications.map((app, aIdx) => (
                <div key={aIdx} className="bg-white p-6 rounded-md border border-slate-200 shadow-sm text-center flex flex-col items-center justify-center space-y-3 hover:border-emerald-600 transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-full bg-[#072d1a] text-[#FBAE17] flex items-center justify-center">
                    <Building2 size={24} />
                  </div>
                  <span className="font-bold text-slate-900 text-sm md:text-base">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 5: Corporate Positioning (50+ Crore Turnover Tone from PDF) */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-44">
        <div className="bg-[#072d1a] text-white rounded-md p-10 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="lg:col-span-8 space-y-6 relative z-10">
            <span className="text-[#FBAE17] font-bold text-xs uppercase tracking-wider block">Corporate Profile & Positioning</span>
            <h3 className="text-3xl md:text-5xl font-black text-white m-0 tracking-tight leading-tight">
              Trusted 50+ Crore Annual Turnover Engineering Legacy
            </h3>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed m-0">
              Synergyelectra has built a national reputation for technical excellence, premium manufacturing standards, and successful execution of complex industrial projects across sectors. We are not merely equipment assemblers — we are comprehensive power solution providers offering turnkey design, manufacturing, integration, and lifetime service support.
            </p>
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                <CheckCircle2 size={18} className="text-[#FBAE17]" />
                <span>End-to-End Solutions Under One Roof</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                <CheckCircle2 size={18} className="text-[#FBAE17]" />
                <span>Stringent Quality Testing Standards</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                <CheckCircle2 size={18} className="text-[#FBAE17]" />
                <span>Repeat Clientele Built on Trust</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center relative z-10">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-md border border-white/20 text-center w-full max-w-xs space-y-4">
              <span className="text-4xl md:text-5xl font-black text-[#FBAE17] block">₹50+ Cr</span>
              <span className="text-xs uppercase font-bold tracking-widest text-emerald-200 block">Annual Turnover Profile</span>
              <div className="h-px bg-white/20 w-full"></div>
              <p className="text-xs text-slate-300 m-0">Engineering complex infrastructure across manufacturing, healthcare, and defense.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}