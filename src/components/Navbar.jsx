import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, ArrowRight, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [showQuoteModal, setShowQuoteModal] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [customSelectOpen, setCustomSelectOpen] = useState(false);
    const location = useLocation();
    const pathname = location.pathname;

    // Mobile accordion state
    const [mobileDropdown, setMobileDropdown] = useState(null);
    const toggleMobileDropdown = (key) => setMobileDropdown(mobileDropdown === key ? null : key);

    const isActive = (prefix) => {
        if (prefix === '/') return pathname === '/';
        return pathname.startsWith(prefix);
    };

    const renderNavLink = (path, content) => {
        const active = isActive(path);
        return (
            <Link to={path} className={`relative font-semibold text-sm transition-colors duration-300 flex items-center gap-1 no-underline py-2 px-1 group/nav cursor-pointer ${active ? 'text-emerald-400 font-bold' : 'text-white hover:text-slate-200'}`}>
                <span className="relative z-10 flex items-center gap-1">{content}</span>
                <span className={`absolute inset-x-0 bottom-0 h-[2.5px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-center ${active ? 'bg-emerald-400 scale-x-100 opacity-100 shadow-[0_1px_8px_rgba(52,211,153,0.8)]' : 'bg-emerald-400 scale-x-0 opacity-0 group-hover/nav:scale-x-100 group-hover/nav:opacity-100'}`} />
            </Link>
        );
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        capacity: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

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
                body: JSON.stringify({ ...formData, source: 'Navbar Quote Form' }),
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

    const upsLinks = [
        { path: '/solar-ups-1-1', label: 'Solar Online UPS 1+1' },
        { path: '/solar-ups-1-1-1', label: 'Solar Online UPS 1+1+1' },
        { path: '/solar-ups-3-1', label: 'Solar Online UPS 3-1' },
        { path: '/solar-ups-3-3', label: 'Solar Online UPS 3-3' }
    ];

    const panelLinks = [
        { path: '/panels-lt', label: 'LT Panels' },
        { path: '/panels-pcc', label: 'PCC Panels' },
        { path: '/panels-mcc', label: 'MCC Panels' },
        { path: '/panels-draw-out', label: 'Draw out panels' },
        { path: '/panels-acdb-dcdb', label: 'ACDB & DCDB' },
        { path: '/panels-distribution-board', label: 'Distribution Board' },
        { path: '/panels-bus-duct', label: 'Bus duct' },
        { path: '/panels-apfc', label: 'APFC Panel' },
        { path: '/panels-junction-boxes', label: 'Junction boxes' }
    ];

    const chargerLinks = [
        { path: '/battery-charger-solar-panel', label: 'Solar Panel' },
        { path: '/battery-charger-solar-structure', label: 'Solar Structure' }
    ];

    const renderDesktopDropdown = (links, extraClasses = '', gridCols = false) => (
        <div className={`absolute left-0 top-full pt-4 opacity-0 invisible translate-y-4 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-50 ${extraClasses}`}>
            <div className="w-full bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
                <ul className={`relative z-10 list-none m-0 p-0 ${gridCols ? 'grid grid-cols-2 gap-x-4 gap-y-1' : 'flex flex-col gap-1'}`}>
                    {links.map((item, i) => (
                        <li key={i}>
                            <Link to={item.path} className={`group/item flex items-center justify-between px-4 py-2.5 rounded-md text-sm transition-all duration-300 whitespace-nowrap no-underline ${pathname === item.path ? 'text-emerald-400 font-bold pl-6 border-l-2 border-emerald-400' : 'text-slate-300 font-medium hover:text-white hover:pl-6 hover:bg-white/5'}`}>
                                <span className="transform transition-transform duration-300 group-hover/item:translate-x-1">{item.label}</span>
                                <ArrowRight size={14} className={`transition-all duration-300 text-emerald-400 ${pathname === item.path ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0'}`} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return (
        <>
            <nav className="absolute top-0 left-0 w-full px-4 md:px-16 py-4 bg-transparent z-50 text-white">
                <div className="relative flex justify-between items-center max-w-7xl mx-auto">
                    <Link to="/" className="flex items-center gap-2 no-underline text-white">
                        <img src={logo} alt="Synergy Logo" className="h-24 w-auto transform transition-transform duration-500 hover:scale-105" />
                    </Link>

                    <button
                        onClick={() => { setOpen(!open); setMobileDropdown(null); }}
                        className="md:hidden p-2 text-white flex items-center justify-center border-none bg-transparent cursor-pointer z-[60]"
                        aria-label="Toggle navigation"
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* ===== DESKTOP NAV ===== */}
                    <div className="hidden md:block">
                        <ul className="flex flex-row gap-8 list-none m-0 p-0 items-center">
                            <li>{renderNavLink('/', 'Home')}</li>
                            <li>{renderNavLink('/about', 'About Us')}</li>
                            <li className="relative group py-0">
                                {renderNavLink('/solar-ups', <>Solar UPS <ChevronDown size={14} className="transform transition-transform duration-300 group-hover:rotate-180" /></>)}
                                {renderDesktopDropdown(upsLinks, 'min-w-[260px]')}
                            </li>
                            <li className="relative group py-0">
                                {renderNavLink('/panels', <>Panels <ChevronDown size={14} className="transform transition-transform duration-300 group-hover:rotate-180" /></>)}
                                {renderDesktopDropdown(panelLinks, 'md:-left-24 min-w-[500px]', true)}
                            </li>
                            <li className="relative group py-0">
                                {renderNavLink('/battery-charger', <>Battery Charger <ChevronDown size={14} className="transform transition-transform duration-300 group-hover:rotate-180" /></>)}
                                {renderDesktopDropdown(chargerLinks, 'min-w-[260px]')}
                            </li>
                            <li>{renderNavLink('/contact', 'Contact Us')}</li>
                        </ul>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button 
                            onClick={() => { setShowQuoteModal(true); setSubmitted(false); }}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white border-none py-3 px-6 font-bold rounded-md cursor-pointer transition-all hover:scale-105 shadow-md uppercase tracking-wider text-xs"
                        >
                            Get a Quote →
                        </button>
                        <a href="tel:8700144765" className="hidden lg:flex items-center gap-3 no-underline bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-4 py-2.5 transition-all duration-300 group/call">
                            <div className="w-10 h-10 rounded-full bg-[#FBAE17] flex items-center justify-center shrink-0 shadow-md group-hover/call:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-300 font-semibold uppercase tracking-wider">Call Us Now</span>
                                <span className="font-extrabold text-white text-sm tracking-wide">+91 8700144765</span>
                            </div>
                        </a>
                    </div>
                </div>
            </nav>

            {/* ===== MOBILE MENU OVERLAY ===== */}
            {open && (
                <div className="fixed inset-0 z-[55] md:hidden">
                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setOpen(false)}></div>

                    <div className="absolute right-0 top-0 h-full w-[85%] max-w-[360px] bg-slate-900 overflow-y-auto shadow-2xl">
                        <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
                            <img src={logo} alt="Synergy Logo" className="h-14 w-auto" />
                            <button onClick={() => setOpen(false)} className="p-2 text-white bg-white/10 rounded-full border-none cursor-pointer">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="px-5 py-6 flex flex-col gap-1">
                            <Link to="/" onClick={() => setOpen(false)} className={`py-3 px-3 rounded-lg text-sm font-semibold no-underline transition-colors ${pathname === '/' ? 'text-emerald-400 bg-emerald-500/10' : 'text-white hover:bg-white/5'}`}>Home</Link>
                            <Link to="/about" onClick={() => setOpen(false)} className={`py-3 px-3 rounded-lg text-sm font-semibold no-underline transition-colors ${pathname === '/about' ? 'text-emerald-400 bg-emerald-500/10' : 'text-white hover:bg-white/5'}`}>About Us</Link>

                            {/* Solar UPS Accordion */}
                            <div>
                                <button 
                                    onClick={() => toggleMobileDropdown('ups')}
                                    className={`w-full py-3 px-3 rounded-lg text-sm font-semibold flex items-center justify-between border-none cursor-pointer transition-colors ${isActive('/solar-ups') ? 'text-emerald-400 bg-emerald-500/10' : 'text-white hover:bg-white/5 bg-transparent'}`}
                                >
                                    <span>Solar UPS</span>
                                    <ChevronDown size={16} className={`transition-transform duration-300 ${mobileDropdown === 'ups' ? 'rotate-180 text-emerald-400' : 'text-slate-400'}`} />
                                </button>
                                {mobileDropdown === 'ups' && (
                                    <div className="ml-3 pl-3 border-l-2 border-emerald-500/30 flex flex-col gap-0.5 mt-1 mb-2">
                                        <Link to="/solar-ups" onClick={() => setOpen(false)} className="py-2.5 px-3 rounded-md text-sm no-underline transition-colors text-emerald-400 font-bold hover:bg-emerald-500/10">
                                            View All Solar UPS →
                                        </Link>
                                        {upsLinks.map((item, i) => (
                                            <Link key={i} to={item.path} onClick={() => setOpen(false)} className={`py-2.5 px-3 rounded-md text-sm no-underline transition-colors ${pathname === item.path ? 'text-emerald-400 font-bold bg-emerald-500/10' : 'text-slate-300 font-medium hover:text-white hover:bg-white/5'}`}>
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Panels Accordion */}
                            <div>
                                <button 
                                    onClick={() => toggleMobileDropdown('panels')}
                                    className={`w-full py-3 px-3 rounded-lg text-sm font-semibold flex items-center justify-between border-none cursor-pointer transition-colors ${isActive('/panels') ? 'text-emerald-400 bg-emerald-500/10' : 'text-white hover:bg-white/5 bg-transparent'}`}
                                >
                                    <span>Panels</span>
                                    <ChevronDown size={16} className={`transition-transform duration-300 ${mobileDropdown === 'panels' ? 'rotate-180 text-emerald-400' : 'text-slate-400'}`} />
                                </button>
                                {mobileDropdown === 'panels' && (
                                    <div className="ml-3 pl-3 border-l-2 border-emerald-500/30 flex flex-col gap-0.5 mt-1 mb-2">
                                        <Link to="/panels" onClick={() => setOpen(false)} className="py-2.5 px-3 rounded-md text-sm no-underline transition-colors text-emerald-400 font-bold hover:bg-emerald-500/10">
                                            View All Panels →
                                        </Link>
                                        {panelLinks.map((item, i) => (
                                            <Link key={i} to={item.path} onClick={() => setOpen(false)} className={`py-2.5 px-3 rounded-md text-sm no-underline transition-colors ${pathname === item.path ? 'text-emerald-400 font-bold bg-emerald-500/10' : 'text-slate-300 font-medium hover:text-white hover:bg-white/5'}`}>
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Battery Charger Accordion */}
                            <div>
                                <button 
                                    onClick={() => toggleMobileDropdown('charger')}
                                    className={`w-full py-3 px-3 rounded-lg text-sm font-semibold flex items-center justify-between border-none cursor-pointer transition-colors ${isActive('/battery-charger') ? 'text-emerald-400 bg-emerald-500/10' : 'text-white hover:bg-white/5 bg-transparent'}`}
                                >
                                    <span>Battery Charger</span>
                                    <ChevronDown size={16} className={`transition-transform duration-300 ${mobileDropdown === 'charger' ? 'rotate-180 text-emerald-400' : 'text-slate-400'}`} />
                                </button>
                                {mobileDropdown === 'charger' && (
                                    <div className="ml-3 pl-3 border-l-2 border-emerald-500/30 flex flex-col gap-0.5 mt-1 mb-2">
                                        <Link to="/battery-charger" onClick={() => setOpen(false)} className="py-2.5 px-3 rounded-md text-sm no-underline transition-colors text-emerald-400 font-bold hover:bg-emerald-500/10">
                                            View All Battery Chargers →
                                        </Link>
                                        {chargerLinks.map((item, i) => (
                                            <Link key={i} to={item.path} onClick={() => setOpen(false)} className={`py-2.5 px-3 rounded-md text-sm no-underline transition-colors ${pathname === item.path ? 'text-emerald-400 font-bold bg-emerald-500/10' : 'text-slate-300 font-medium hover:text-white hover:bg-white/5'}`}>
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Link to="/contact" onClick={() => setOpen(false)} className={`py-3 px-3 rounded-lg text-sm font-semibold no-underline transition-colors ${pathname === '/contact' ? 'text-emerald-400 bg-emerald-500/10' : 'text-white hover:bg-white/5'}`}>Contact Us</Link>
                        </div>

                        <div className="px-5 pb-8">
                            <button 
                                onClick={() => { setOpen(false); setShowQuoteModal(true); setSubmitted(false); }}
                                className="w-full bg-[#FBAE17] hover:bg-amber-400 text-slate-950 border-none py-4 px-6 font-black rounded-lg cursor-pointer transition-colors text-sm uppercase tracking-wider shadow-lg"
                            >
                                Get a Quote →
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Navbar Global Quote Modal */}
            {showQuoteModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity animate-fadeIn text-left font-outfit">
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
                                    <p className="text-slate-600 text-xs leading-relaxed max-w-xs m-0 mx-auto">Our engineering team will evaluate your project scope and reach out shortly.</p>
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

                                        <div className="relative">
                                            <div 
                                                onClick={() => setCustomSelectOpen(!customSelectOpen)}
                                                className="w-full px-4 py-3 rounded-md border border-slate-300 bg-white text-slate-900 text-sm font-medium shadow-sm flex items-center justify-between cursor-pointer hover:border-emerald-600 transition-colors select-none"
                                            >
                                                <span>{formData.capacity || 'Select System Category'}</span>
                                                <ChevronDown size={16} className={`text-slate-500 transition-transform duration-200 ${customSelectOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                                            </div>

                                            {customSelectOpen && (
                                                <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-200 rounded-md shadow-2xl z-[120] overflow-hidden py-1.5 animate-fadeIn">
                                                    {['Solar Online UPS (1+1 / 3-3 PH)', 'LT / PCC / MCC Panels', 'Industrial Battery Chargers', 'Complete Plant Electrical Infra'].map((opt, oIdx) => (
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
                                                placeholder="Project Scope / Specifications (optional)"
                                                value={formData.message}
                                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                                className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:border-emerald-600 text-slate-900 bg-white placeholder:text-slate-400 text-sm font-medium shadow-sm resize-none"
                                            ></textarea>
                                        </div>

                                        {errorMsg && (
                                            <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-md text-sm font-semibold mt-2">
                                                {errorMsg}
                                            </div>
                                        )}
                                        <button disabled={loading} type="submit" className="w-full py-4 bg-[#FBAE17] hover:bg-amber-400 disabled:opacity-70 disabled:cursor-not-allowed text-slate-950 font-black text-sm uppercase tracking-wider rounded-md shadow-lg transition-all flex items-center justify-center gap-2 border-none cursor-pointer mt-2">
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
        </>
    );
}
