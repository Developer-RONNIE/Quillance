"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Share2, 
  Phone, 
  ChevronRight, 
  ChevronLeft,
  ZoomIn,
  X
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
    image: "/Certificate/Train-cert.webp",
    shortLabel: "Training",
    shortDesc: "Expert-led cohort..."
  },
  {
    type: "Internship",
    subtitle: "Project + evaluation proof",
    image: "/Certificate/Inter-cert.webp",
    shortLabel: "Internship",
    shortDesc: "Project + evaluation proof"
  },
  {
    type: "Acceptance Letter",
    subtitle: "Official internship offer & acceptance",
    image: "/Certificate/Acc-cert.webp",
    shortLabel: "Acceptance",
    shortDesc: "Offer & acceptance letter"
  }
];

export const CertificationSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextCert = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCert = () => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  // Close modal on Escape key press and manage body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section className="pt-12 md:pt-16 pb-12 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
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
            GET CERTIFIED. <br className="md:hidden" /> <span className="text-blue-600">GET HIRED.</span>
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
            <a 
              href="https://forms.gle/8a2iEXN8wFw4TDDx8"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0b5cd5] hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2 group-hover:animate-wiggle" fill="currentColor" />
              Talk to Career Expert
            </a>
          </div>
          
          <p className="text-[10px] text-neutral-400 font-bold mt-6 text-center lg:text-left w-full">
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
            
            {/* Certificate Preview Box with Polished Greyish Glass Background */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-200/85 via-zinc-100/70 to-slate-300/80 backdrop-blur-2xl border border-slate-300/60 shadow-[inset_0_2px_6px_rgba(255,255,255,0.7),inset_0_-2px_6px_rgba(0,0,0,0.05),0_12px_28px_rgba(15,23,42,0.08)] group">
               <div 
                 onClick={() => setIsModalOpen(true)}
                 className="cursor-zoom-in"
                 title="Click to zoom in"
               >
                 <AnimatePresence mode="wait">
                   <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full aspect-[4/3] relative p-3 sm:p-4 flex items-center justify-center"
                   >
                     <Image 
                       src={certificates[activeIndex].image} 
                       alt={`${certificates[activeIndex].type} Certificate`} 
                       fill
                       sizes="(max-width: 768px) 100vw, 500px"
                       className="object-contain p-2 drop-shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
                       loading="lazy"
                     />
                   </motion.div>
                 </AnimatePresence>
               </div>

               {/* Zoom Button in the Right Bottom Corner (Icon only, reveals text on hover) */}
               <button
                 type="button"
                 onClick={(e) => {
                   e.stopPropagation();
                   setIsModalOpen(true);
                 }}
                 className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center justify-center h-9 px-2.5 hover:px-3.5 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-blue-600 shadow-[0_4px_16px_rgba(0,0,0,0.12)] backdrop-blur-md border border-white/90 transition-all duration-300 ease-out hover:scale-105 active:scale-95 cursor-pointer group/zoom"
                 title="Open centered view"
                 aria-label="Zoom document preview"
               >
                 <ZoomIn className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover/zoom:scale-110" />
                 <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover/zoom:max-w-[60px] group-hover/zoom:opacity-100 group-hover/zoom:ml-1.5 text-xs font-semibold tracking-wide transition-all duration-300 ease-out">
                   Zoom
                 </span>
               </button>
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

      {/* Centered Modal / Lightbox for Mobile, Tablet, and Desktop */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-slate-950/75 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white/95 backdrop-blur-2xl rounded-3xl p-4 sm:p-6 border border-white/60 shadow-[0_25px_60px_rgba(0,0,0,0.35)] flex flex-col items-center"
            >
              {/* Modal Header */}
              <div className="w-full flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 mb-3 sm:mb-4 gap-2">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-[11px] sm:text-xs shrink-0">
                    {certificates[activeIndex].type}
                  </span>
                  <h3 className="text-xs sm:text-base font-bold text-[#104382] truncate">
                    {certificates[activeIndex].subtitle}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <button
                    onClick={prevCert}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center text-slate-600 transition-all active:scale-90"
                    aria-label="Previous Certificate"
                    title="Previous"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextCert}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center text-slate-600 transition-all active:scale-90"
                    aria-label="Next Certificate"
                    title="Next"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-red-50 hover:text-red-600 flex items-center justify-center text-slate-600 transition-all active:scale-90 ml-1"
                    aria-label="Close modal"
                    title="Close (Esc)"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Image Container */}
              <div className="relative w-full h-[65vh] sm:h-[72vh] md:h-[76vh] flex items-center justify-center bg-gradient-to-br from-slate-200/80 via-zinc-100/60 to-slate-300/75 rounded-2xl overflow-hidden p-2 sm:p-4 border border-slate-300/60 shadow-inner">
                <Image
                  src={certificates[activeIndex].image}
                  alt={`${certificates[activeIndex].type} Full Document`}
                  fill
                  sizes="(max-width: 768px) 95vw, 850px"
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </div>

              {/* Modal Bottom Switcher */}
              <div className="flex items-center gap-2 mt-3 sm:mt-4">
                {certificates.map((cert, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-semibold transition-all",
                      activeIndex === idx
                        ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    )}
                  >
                    {cert.shortLabel}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

