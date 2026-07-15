import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Briefcase, Send, CheckCircle2, Factory, UploadCloud, AlertCircle } from "lucide-react";
import SEO from '../components/SEO';

export default function Career() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  });
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    if (!resume) {
      setErrorMsg("Please upload your resume.");
      setLoading(false);
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('position', formData.position);
    data.append('message', formData.message);
    data.append('resume', resume);
    data.append('source', 'Careers Page');

    try {
      const response = await fetch('/api/career', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', position: '', message: '' });
        setResume(null);
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setErrorMsg(result.error || 'Failed to submit application.');
      }
    } catch (error) {
      setErrorMsg('Failed to connect to the server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-slate-50 border border-slate-300 px-5 py-4 text-sm font-medium text-slate-900 rounded-md outline-none focus:border-emerald-600 focus:bg-white transition shadow-sm placeholder:text-slate-400";

  return (
    <div className="min-h-screen flex flex-col font-outfit bg-white selection:bg-emerald-500 selection:text-white text-slate-800">
      <SEO 
        title="Careers | Synergy Systems" 
        description="Join Synergy Systems and build your career in electrical engineering, solar EPC, and power manufacturing."
        url="https://www.denver.com/career"
      />
      
      {/* HERO SECTION - Full Screen Height */}
      <div 
        className="relative w-full min-h-[80vh] flex flex-col justify-between overflow-hidden pt-6 pb-16 bg-cover bg-center border-b border-emerald-900/40"
        style={{ backgroundImage: `url('/photos/DSC_9528.JPG')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60"></div>
        
        <Navbar />

        <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto my-auto pt-24 pb-12 text-center md:text-left w-full">
          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-300 text-xs md:text-sm mb-4 font-medium">
            <Link to="/" className="hover:text-emerald-400 transition-colors no-underline text-slate-300">Home</Link>
            <span className="text-emerald-500">/</span>
            <span className="text-emerald-300 font-semibold">Careers</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#FBAE17] tracking-tight mb-4 drop-shadow-md uppercase m-0">
            Build Your Career
          </h1>
          <p className="text-emerald-200 text-base md:text-xl max-w-2xl mt-2 mb-8 leading-relaxed font-normal m-0 mx-auto md:mx-0">
            Join a legacy of engineering excellence. We are looking for talented individuals to drive innovation in power conditioning, distribution, and solar energy solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <div className="flex items-center gap-2 text-emerald-300 text-xs uppercase tracking-widest font-bold px-4 py-3 bg-white/5 rounded-md border border-white/10">
              <Briefcase size={16} className="text-[#FBAE17]" />
              <span>Explore Opportunities</span>
            </div>
          </div>
        </div>

        {/* Bottom Hero Indicator Strip */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 w-full pb-4 hidden md:flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-400 border-t border-slate-800/80 pt-4">
          <span>Engineering Roles</span>
          <span>•</span>
          <span>Manufacturing & Operations</span>
          <span>•</span>
          <span>Sales & Support</span>
        </div>
      </div>

      {/* VALUE PROPOSITION CARDS */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto -mt-16 relative z-30 w-full">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Innovative Environment",
              desc: "Work on cutting-edge CPRI-tested switchboards and state-of-the-art zero-millisecond UPS systems."
            },
            {
              title: "Career Growth",
              desc: "We foster continuous learning, offering leadership opportunities within a rapidly expanding industrial footprint."
            },
            {
              title: "Impactful Projects",
              desc: "Contribute to massive solar EPC projects and critical plant infrastructure that powers the nation."
            }
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-md shadow-xl border border-slate-200 hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="w-14 h-14 bg-[#072d1a] rounded-md flex items-center justify-center mb-6 shadow-md border border-emerald-500/20">
                <Factory size={28} className="text-[#FBAE17]" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-xl m-0 mb-3 tracking-tight block">
                  {card.title}
                </h3>
                <p className="text-slate-600 font-normal text-sm m-0 leading-relaxed block">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JOB APPLICATION FORM */}
      <section className="py-12 px-6 md:px-16 max-w-4xl mx-auto pb-32 w-full">
        <div className="bg-white p-8 md:p-12 rounded-md border border-slate-200 shadow-xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 text-center">
            <span className="text-xs font-black text-emerald-700 uppercase tracking-widest block mb-1">Join Our Team</span>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 m-0 tracking-tight">
              Submit Your Application
            </h2>
            <p className="text-slate-600 text-sm mt-2 font-normal m-0 max-w-xl mx-auto">
              Our HR department is always on the lookout for exceptional talent. Fill out the form below with your up-to-date resume.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-emerald-50 rounded-md border border-emerald-300 text-center space-y-3 my-8 relative z-10">
              <CheckCircle2 size={48} className="text-emerald-600 mx-auto" />
              <h3 className="text-xl font-black text-slate-900 m-0">Application Submitted Successfully</h3>
              <p className="text-sm text-slate-600 m-0">Our recruitment team will review your profile and contact you if your qualifications match our current openings.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2.5 bg-slate-900 text-white rounded-md font-bold text-sm hover:bg-slate-800 transition-colors border-none cursor-pointer"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Full Name *</label>
                  <input required type="text" placeholder="e.g. John Doe" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Email Address *</label>
                  <input required type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className={inputClass} />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Phone Number *</label>
                  <input required type="tel" placeholder="+91 XXXX XXX XXX" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Position Applied For *</label>
                  <input required type="text" placeholder="e.g. Electrical Engineer" value={formData.position} onChange={(e) => setFormData({...formData, position: e.target.value})} className={inputClass} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Cover Letter / Message</label>
                <textarea rows={4} placeholder="Tell us about your experience and why you're a good fit..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className={inputClass} />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Upload Resume (PDF, DOCX) *</label>
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="resume-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-md cursor-pointer bg-slate-50 hover:bg-white hover:border-emerald-500 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadCloud className="w-8 h-8 mb-2 text-slate-400" />
                      <p className="mb-1 text-sm text-slate-600"><span className="font-bold text-slate-800">Click to upload</span> or drag and drop</p>
                      {resume ? (
                        <p className="text-xs font-bold text-emerald-600 mt-1 truncate max-w-[250px]">{resume.name}</p>
                      ) : (
                        <p className="text-xs text-slate-500">Max file size: 5MB</p>
                      )}
                    </div>
                    <input id="resume-upload" type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                  </label>
                </div>
              </div>

              {errorMsg && (
                <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-md text-sm font-semibold flex items-center gap-2">
                  <AlertCircle size={18} />
                  {errorMsg}
                </div>
              )}
              
              <button disabled={loading} type="submit" className="w-full py-4 bg-[#FBAE17] hover:bg-amber-400 disabled:opacity-70 disabled:cursor-not-allowed text-slate-950 font-black text-sm uppercase tracking-wider rounded-md shadow-lg transition-all flex items-center justify-center gap-2 border-none cursor-pointer mt-4">
                <span>{loading ? 'Submitting...' : 'Submit Application'}</span>
                {!loading && <Send size={16} />}
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
