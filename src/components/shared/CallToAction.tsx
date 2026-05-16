"use client";

import React from "react";
import { motion } from "motion/react";
import { Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CallToActionProps {
  className?: string;
  title?: string;
  description?: string;
}

export function CallToAction({ 
  className,
  title = "Ready for a real Upskilling?",
  description = "You'll train on real projects, learn how to position your work, and be evaluated through our training + internship program."
}: CallToActionProps) {
  return (
    <section className={cn("px-4 sm:px-6 lg:px-8 py-12", className)}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-[#0a0f1d] rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-2xl"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-bold uppercase tracking-widest mb-8">
               <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
               Next Step
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight max-w-full leading-[1.1]">
              {title}
            </h2>
            
            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-full">
              {description}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => window.open("https://forms.gle/8a2iEXN8wFw4TDDx8", "_blank")}
                className="bg-white text-slate-900 px-8 py-4 rounded-full font-black text-sm md:text-base flex items-center gap-3 hover:bg-slate-100 transition-all shadow-xl shadow-white/5 active:scale-95"
              >
                Talk to Career Expert
                <Phone className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
