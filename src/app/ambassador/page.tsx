"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  const [kitIndex, setKitIndex] = useState(0);
  const [hasStartedSliding, setHasStartedSliding] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const kitImages = [
    "/assets/All-Goodies.png",
    "/assets/Bottle-swags.png",
    "/assets/Bag-swages.png",
    "/assets/Tshirt-swages.png",
    "/assets/Notebook_swages.png"
  ];

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
                <a 
                  href="https://forms.gle/yMjJ22CEzxXrr2Fu5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-[#104382] font-extrabold rounded-2xl shadow-xl shadow-blue-950/20 hover:scale-105 transition-transform w-[220px] flex items-center justify-center"
                >
                  Apply Now
                </a>
                <a 
                  href="https://forms.gle/8a2iEXN8wFw4TDDx8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-transparent border-2 border-white/20 text-white font-extrabold rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all flex items-center justify-center gap-2 w-auto min-w-[220px] whitespace-nowrap"
                >
                  <svg className="group-hover:animate-wiggle" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Talk to Program Mentor
                </a>
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
                <div className="w-full lg:w-1/2 flex justify-center">
                   <div 
                    onClick={() => {
                      if (!hasStartedSliding) {
                        setHasStartedSliding(true);
                      } else {
                        setKitIndex((prev) => (prev + 1) % kitImages.length);
                      }
                    }}
                    className="relative w-full max-w-[340px] aspect-square rotate-3 bg-gradient-to-br from-blue-400/20 to-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/20 flex flex-col items-center justify-center p-0 text-center overflow-hidden cursor-pointer group transform-gpu isolate shrink-0"
                   >
                      <AnimatePresence mode="wait">
                        {!hasStartedSliding ? (
                          <motion.div
                            key="initial"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center p-8 h-full w-full"
                          >
                             <Gift className="w-20 h-20 text-blue-300 mb-6 animate-bounce" />
                             <h4 className="text-2xl font-black text-white mb-2">Exclusive Kit</h4>
                             <p className="text-xs font-bold text-white/60 uppercase tracking-widest">Hoodies • Stickers • Tools</p>
                          </motion.div>
                        ) : (
                          <motion.img
                            key={kitIndex}
                            src={kitImages[kitIndex]}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                            alt="Quillance Swag"
                          />
                        )}
                      </AnimatePresence>

                      {hasStartedSliding && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                          <div className="relative z-10 mt-auto pb-8">
                            <h4 className="text-xl font-black text-white drop-shadow-md mb-1">Exclusive Kit</h4>
                            <p className="text-[10px] font-bold text-white/80 uppercase tracking-widest drop-shadow-sm">Hoodies • Stickers • Tools</p>
                          </div>
                        </>
                      )}

                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-tighter shadow-lg z-20">
                        Top Performers
                      </div>

                      {/* Click Indicator */}
                      <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md text-white/80 p-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
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
                      <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-blue-100/50 hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-100 hover:border-blue-300 transition-all duration-300 ease-out cursor-pointer">
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0f1d] text-white relative overflow-hidden">
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
                <div 
                  key={i} 
                  className="relative group cursor-pointer select-none"
                  onClick={() => setActiveStep(activeStep === i ? null : i)}
                >
                   <div className={cn(
                     "text-[80px] font-black absolute -top-10 right-6 left-auto md:right-auto md:-left-6 transition-all duration-300 pointer-events-none select-none z-20 md:z-0",
                     activeStep === i ? "text-blue-500/50 scale-105" : "text-white/10 group-hover:text-blue-500/50"
                   )}>
                     {i+1}
                   </div>
                   <div className={cn(
                     "p-8 rounded-[2rem] border transition-all backdrop-blur-sm relative z-10",
                     activeStep === i ? "border-blue-500 bg-white/10" : "bg-white/5 border-white/10 group-hover:border-blue-500"
                   )}>
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

      {/* Application Experience Section */}
      <section id="apply-form" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto bg-[#104382] rounded-[3.5rem] p-10 md:p-12 shadow-2xl relative overflow-hidden border border-blue-400/20">
           <div className="relative z-10">
              <div className="text-center mb-10">
                 <h2 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">How it feels like</h2>
                 <p className="text-blue-100/60 font-bold text-lg">Experience the journey of a Quillance Leader.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { step: "Step 1", title: "Apply", image: "/assets/step1_applying.png" },
                  { step: "Step 2", title: "Get Selected", image: "/assets/step2_handshake.png" },
                  { step: "Step 3", title: "Start Leading", image: "/assets/step3_leading.png" },
                  { step: "Step 4", title: "Unlock Opportunities", image: "/assets/step4_networking.png" }
                ].map((item, i) => (
                  <div key={i} className="group flex flex-col rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/10 transition-all">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                    </div>
                    <div className="p-5">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400 mb-1 block">{item.step}</span>
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 md:gap-8 mt-12 text-center md:text-left">
                 <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">What are you waiting for?</h2>
                 <a 
                  href="https://forms.gle/yMjJ22CEzxXrr2Fu5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#104382] font-black uppercase tracking-[0.2em] rounded-2xl shadow-2xl shadow-blue-950/30 hover:scale-105 active:scale-95 transition-all text-sm shrink-0"
                >
                  <Send className="w-4 h-4" />
                  Apply Now
                </a>
              </div>
           </div>
           
           <div className="absolute top-0 right-0 p-4 text-white opacity-5">
              <Target className="w-80 h-80" />
           </div>

           <div className="absolute bottom-0 left-0 p-4 text-white opacity-5">
              <Star className="w-80 h-80 rotate-[15deg] fill-white" />
           </div>
           
           {/* Radar effect in background */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full pointer-events-none" />
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
        const isCompletedOrActive = i <= currentStep;
        return (
          <div key={i} className="flex items-center gap-4">
            <div
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center border-2 shrink-0 transition-all duration-500",
                isCompletedOrActive 
                  ? "bg-blue-600 border-blue-600 text-white" 
                  : "bg-blue-600/10 border-blue-600/20 text-blue-600/30",
                isActive && "scale-110 shadow-lg shadow-blue-500/25"
              )}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
            <span className={cn(
              "text-sm font-bold transition-all duration-500",
              isCompletedOrActive ? "text-blue-600" : "text-neutral-400"
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
