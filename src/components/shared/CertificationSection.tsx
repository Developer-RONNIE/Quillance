"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Share2, 
  Phone, 
  ChevronRight, 
  ChevronLeft,
  Search
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: ShieldCheck,
    title: "Outcome-based credential",
    description: "Issued after rubric checks + expert review, not attendance."
  },
  {
    icon: ShieldCheck,
    title: "Hiring trust built-in",
    description: "Signals proof-of-work, evaluation, and consistency in delivery."
  },
  {
    icon: Share2,
    title: "Clean & shareable",
    description: "Fits resume + LinkedIn. Looks professional across devices."
  }
];

const certificates = [
  {
    type: "Training",
    subtitle: "Expert-led cohort completion",
    image: "/Certificate/Train-cert.png",
    shortLabel: "Training",
    shortDesc: "Expert-led cohort..."
  },
  {
    type: "Internship",
    subtitle: "Project + evaluation proof",
    image: "/Certificate/Inter-cert.png",
    shortLabel: "Internship",
    shortDesc: "Project + evaluation proof"
  },
  {
    type: "Outstanding Certificate",
    subtitle: "Top performance recognition",
    image: "/Certificate/Out-cert.png",
    shortLabel: "Excellence",
    shortDesc: "Top performance..."
  }
];

export const CertificationSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCert = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCert = () => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/50 text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 w-max"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Certification That Signals Proof
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#104382] mb-8 tracking-tight"
          >
            GET CERTIFIED. <span className="text-blue-600">GET HIRED.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 text-lg md:text-xl font-medium mb-12 max-w-xl leading-relaxed"
          >
            Your certificate is tied to real deliverables, projects, expert checks, and rubric-based evaluation, so recruiters see signal, not fluff.
          </motion.p>
          
          <div className="space-y-8 mb-12">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#104382] mb-1">{feature.title}</h4>
                  <p className="text-neutral-500 font-medium">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-[#0b5cd5] hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2 group-hover:animate-wiggle" fill="currentColor" />
              Talk to Career Expert
            </button>
            <button className="group bg-white border border-neutral-200 text-[#104382] px-8 py-4 rounded-full font-bold flex items-center justify-center hover:bg-neutral-50 hover:border-blue-200 transition-all">
              See Reviews
              <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          
          <p className="text-[10px] text-neutral-400 font-bold mt-6">
            *Issued after evaluation & rubric validation.
          </p>
        </div>
        
        {/* Right Side: Certificate Preview */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] border border-neutral-100 shadow-2xl p-6 relative z-10"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between mb-8 border-b border-neutral-50 pb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Certificate Preview</span>
                <AnimatePresence mode="wait">
                  <motion.h4 
                    key={activeIndex}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-base font-bold text-[#104382]"
                  >
                    {certificates[activeIndex].type} • {certificates[activeIndex].subtitle}
                  </motion.h4>
                </AnimatePresence>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={prevCert}
                  className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-blue-600 hover:bg-blue-50 transition-all active:scale-90"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextCert}
                  className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-blue-600 hover:bg-blue-50 transition-all active:scale-90"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Certificate Preview Box */}
            <div className="relative rounded-2xl overflow-hidden bg-neutral-900 group shadow-inner">
               <AnimatePresence mode="wait">
                 <motion.img 
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  src={certificates[activeIndex].image} 
                  alt={`${certificates[activeIndex].type} Certificate`} 
                  className="w-full aspect-[4/3] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                 />
               </AnimatePresence>
            </div>
            
            {/* Status Bars */}
            <div className="grid grid-cols-3 gap-6 mt-8">
               {certificates.map((cert, idx) => (
                 <button 
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "text-left space-y-3 transition-all duration-300",
                    idx !== 0 && "border-l border-neutral-100 pl-6",
                    activeIndex === idx ? "opacity-100" : "opacity-40 hover:opacity-70"
                  )}
                 >
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">{cert.shortLabel}</p>
                    <p className="text-[11px] font-bold text-[#104382] leading-tight mb-2 line-clamp-1">{cert.shortDesc}</p>
                    <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                       <motion.div 
                        initial={false}
                        animate={{ width: activeIndex === idx ? "100%" : "0%" }}
                        className="h-full bg-blue-600 rounded-full" 
                       />
                    </div>
                 </button>
               ))}
            </div>
          </motion.div>
          
          {/* Decorative Background Elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-50/80 rounded-full blur-3xl -z-10" />
        </div>
        
      </div>
    </section>
  );
};
