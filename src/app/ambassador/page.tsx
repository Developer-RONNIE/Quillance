"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { 
  Users, 
  Award, 
  Gift, 
  TrendingUp, 
  CheckCircle2, 
  Send,
  Milestone,
  ShieldCheck,
  Star,
  FileBadge,
  MapPin,
  GraduationCap,
  Target,
  Navigation
} from "lucide-react";
import { cn } from "@/lib/utils";
import { LoaderCore, LoadingState } from "@/components/ui/multi-step-loader";

export default function AmbassadorPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    collegeName: "",
    branch: "",
    year: "",
    email: "",
    phone: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: "", collegeName: "", branch: "", year: "", email: "", phone: "" });
      alert("Application submitted successfully! Our team will get back to you soon.");
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-[#104382] overflow-hidden">
        <WavyBackground 
          className="max-w-4xl mx-auto pt-16 pb-20" 
          containerClassName="min-h-[500px]"
          backgroundFill="#104382"
          waveOpacity={0.4}
        >
          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
               <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-blue-300 uppercase border border-blue-400/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
                Campus Growth Leader
              </span>
              <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                Become the Face of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-200">Quillance</span> in Your College
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100/70 font-medium mb-10 leading-relaxed">
                Lead your campus community and unlock internships, rewards, and leadership opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white text-[#104382] font-extrabold rounded-2xl shadow-xl shadow-blue-950/20 hover:scale-105 transition-transform w-[220px]"
                >
                  Apply Now
                </button>
                <button className="group px-8 py-4 bg-transparent border-2 border-white/20 text-white font-extrabold rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all flex items-center justify-center gap-2 w-auto min-w-[220px] whitespace-nowrap">
                  <svg className="group-hover:animate-wiggle" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Talk to Program Mentor
                </button>
              </div>

              {/* Trust Tags */}
              <div className="mt-12 flex flex-wrap justify-center gap-3 opacity-80">
                {[
                  { icon: <TrendingUp className="w-3.5 h-3.5" />, text: "Internship Opportunity" },
                  { icon: <ShieldCheck className="w-3.5 h-3.5" />, text: "Certificate + LoR" },
                  { icon: <Users className="w-3.5 h-3.5" />, text: "Leadership Role" },
                  { icon: <Gift className="w-3.5 h-3.5" />, text: "Exclusive Rewards" }
                ].map((tag, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[11px] font-bold text-white uppercase tracking-wider backdrop-blur-sm">
                    {tag.icon}
                    {tag.text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </WavyBackground>
        <div className="absolute inset-0 pointer-events-none">
          <StarsBackground />
          <ShootingStars />
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-neutral-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#104382] mb-6 tracking-tight">
              Why Join the <span className="text-blue-600">Quillance Ambassador</span> Program?
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-neutral-500 font-medium leading-relaxed">
              Join a fast-growing student leadership community where you can build your network, develop professional skills, and create real impact inside your college.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
             { [
               { title: "Network Building", desc: "Connect with students from top colleges across the country.", icon: <Users /> },
               { title: "Professional Growth", desc: "Develop leadership, marketing, and communication skills.", icon: <TrendingUp /> },
               { title: "Real Impact", desc: "Create a ripple effect by bringing industry-aligned education to your peers.", icon: <Star /> }
             ].map((item, i) => (
               <motion.div 
                 key={i} 
                 whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                 className="p-8 rounded-[2.5rem] bg-white border border-neutral-100 shadow-sm hover:shadow-xl transition-all group perspective-1000"
               >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-xl font-bold text-[#104382] mb-3">{item.title}</h3>
                  <p className="text-neutral-500 font-medium leading-relaxed text-sm">{item.desc}</p>
               </motion.div>
             ))}
          </div>

          <div className="bg-[#104382] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
             <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                   <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">Earn More Than Just Experience</h2>
                   <div className="grid grid-cols-2 gap-4">
                      {["Stipend Incentives", "Official Certificates", "Internship Offers", "Exclusive Goodies", "T-shirt / Stickers", "Gift Vouchers"].map((reward, i) => (
                        <div key={i} className="flex items-center gap-2 group cursor-default">
                           <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center group-hover:bg-blue-400 transition-colors">
                             <CheckCircle2 className="w-3 h-3" />
                           </div>
                           <span className="text-sm font-bold opacity-80 group-hover:opacity-100">{reward}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                   <div className="relative w-full max-w-[300px] h-[300px] rotate-3 bg-gradient-to-br from-blue-400/20 to-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/20 flex flex-col items-center justify-center p-8 text-center">
                      <Gift className="w-20 h-20 text-blue-300 mb-6 animate-bounce" />
                      <h4 className="text-xl font-black mb-2">Exclusive Kit</h4>
                      <p className="text-xs font-medium opacity-60 uppercase tracking-widest">Hoodies • Stickers • Tools</p>
                      <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-xs uppercase tracking-tighter">Top Performers</div>
                   </div>
                </div>
             </div>
             
             {/* Decorative blob */}
             <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Role & Gain Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
           <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-black text-[#104382] mb-10 tracking-tight">Your Role as an Ambassador</h2>
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-blue-100 shadow-xl shadow-blue-900/5">
                <RoleStepLoader />
              </div>
           </div>
           
           <div className="lg:w-1/2">
              <div className="p-10 rounded-[3rem] bg-blue-50 border border-blue-100">
                 <h2 className="text-2xl font-black text-[#104382] mb-8">What You Will Gain</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: <FileBadge className="w-5 h-5" />, text: "Ambassador Certificate" },
                      { icon: <ShieldCheck className="w-5 h-5" />, text: "Letter of Recommendation" },
                      { icon: <TrendingUp className="w-5 h-5" />, text: "Internship Priority" },
                      { icon: <Users className="w-5 h-5" />, text: "Direct Mentor Access" },
                      { icon: <Navigation className="w-5 h-5" />, text: "National Networking" },
                      { icon: <Gift className="w-5 h-5" />, text: "Quillance Goodies" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-blue-100/50">
                         <div className="text-blue-600">{item.icon}</div>
                         <span className="text-[13px] font-bold text-neutral-700">{item.text}</span>
                      </div>
                    ))}
                 </div>
                 <p className="mt-8 text-neutral-500 text-sm font-medium leading-relaxed italic border-l-2 border-blue-300 pl-4">
                  "Build credibility, gain leadership recognition, and strengthen your profile for future placements and internships."
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* How It Works Layered Step Flow */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black mb-4">How It Works</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "Step 1", title: "Apply", desc: "Submit your application form below." },
                { step: "Step 2", title: "Get Selected", desc: "Attend onboarding session and orientation." },
                { step: "Step 3", title: "Start Leading", desc: "Represent Quillance actively on campus." },
                { step: "Step 4", title: "Unlock Opportunities", desc: "Earn certificates, internships, and rewards." }
              ].map((item, i) => (
                <div key={i} className="relative group">
                   <div className="text-[80px] font-black text-white/10 absolute -top-10 -left-6 group-hover:text-blue-500/50 transition-all duration-300 pointer-events-none select-none">
                     {i+1}
                   </div>
                   <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 group-hover:border-blue-500 transition-all backdrop-blur-sm relative z-10">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-4 block">{item.step}</span>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-white/50 text-sm font-medium leading-relaxed">{item.desc}</p>
                   </div>
                   {i < 3 && <div className="hidden md:block absolute top-1/2 -right-4 translate-y-[-50%] text-white/10"><ChevronRight className="w-8 h-8" /></div>}
                </div>
              ))}
           </div>
        </div>
        
        {/* Animated background stars */}
        <StarsBackground />
        <ShootingStars />
      </section>

      {/* Application Form Section */}
      <section id="apply-form" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto bg-[#104382] rounded-[3.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
           <div className="relative z-10">
              <div className="text-center mb-12">
                 <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Apply Now</h2>
                 <p className="text-blue-100/60 font-medium">Take the first step towards student leadership.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-blue-300 uppercase tracking-widest pl-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/30 outline-none focus:border-blue-400 transition-colors backdrop-blur-md"
                      value={formData.fullName}
                      onChange={e => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-blue-300 uppercase tracking-widest pl-2">College Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="University of Excellence"
                      className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/30 outline-none focus:border-blue-400 transition-colors backdrop-blur-md"
                      value={formData.collegeName}
                      onChange={e => setFormData({...formData, collegeName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-blue-300 uppercase tracking-widest pl-2">Branch</label>
                    <input 
                      required
                      type="text" 
                      placeholder="CS / IT / Business"
                      className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/30 outline-none focus:border-blue-400 transition-colors backdrop-blur-md"
                      value={formData.branch}
                      onChange={e => setFormData({...formData, branch: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-blue-300 uppercase tracking-widest pl-2">Year of Study</label>
                    <select 
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white outline-none focus:border-blue-400 transition-colors backdrop-blur-md appearance-none"
                      value={formData.year}
                      onChange={e => setFormData({...formData, year: e.target.value})}
                    >
                      <option value="" disabled className="bg-slate-900">Select Year</option>
                      <option value="1st" className="bg-slate-900">1st Year</option>
                      <option value="2nd" className="bg-slate-900">2nd Year</option>
                      <option value="3rd" className="bg-slate-900">3rd Year</option>
                      <option value="4th" className="bg-slate-900">4th Year</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-blue-300 uppercase tracking-widest pl-2">Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/30 outline-none focus:border-blue-400 transition-colors backdrop-blur-md"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-blue-300 uppercase tracking-widest pl-2">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/30 outline-none focus:border-blue-400 transition-colors backdrop-blur-md"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={submitted}
                  className="w-full mt-8 py-5 bg-white text-[#104382] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-blue-950/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {submitted ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#104382]"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Application
                    </>
                  )}
                </button>
              </form>
           </div>
           
           <div className="absolute top-0 right-0 p-8 text-white opacity-5">
              <Target className="w-64 h-64" />
           </div>
        </div>
        
        {/* Background blobs */}
        <div className="absolute top-[20%] -left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-[20%] -right-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl -z-10" />
      </section>
    </div>
  );
}

const roleStates: LoadingState[] = [
  { text: "Promote Quillance programs in your campus" },
  { text: "Connect interested students with our mentors" },
  { text: "Coordinate awareness drives & webinars" },
  { text: "Share event and workshop updates across socials" },
  { text: "Support building student communities" },
];

function RoleStepLoader() {
  const [currentStep, setCurrentStep] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev === roleStates.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      {roleStates.map((state, i) => {
        const isActive = i === currentStep;
        return (
          <div key={i} className="flex items-center gap-4 transition-all duration-500">
            <motion.div
              animate={{ 
                scale: isActive ? 1.2 : 1,
                backgroundColor: isActive ? "rgba(37, 99, 235, 1)" : "rgba(37, 99, 235, 0.1)",
                borderColor: isActive ? "rgba(37, 99, 235, 1)" : "rgba(37, 99, 235, 0.2)"
              }}
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center border-2 shrink-0 transition-colors",
                isActive ? "text-white" : "text-blue-600/30"
              )}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
            </motion.div>
            <span className={cn(
              "text-sm font-bold transition-all duration-500",
              isActive ? "text-blue-600 translate-x-1" : "text-neutral-400"
            )}>
              {state.text}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function NavigationIcon({ className }: { className?: string }) {
  // Mock icon to avoid build errors if Navigation component is needed
  return <TrendingUp className={className} />;
}

const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
);
