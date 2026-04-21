"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  PhoneCall, 
  Mail,
  Zap,
  Star,
  LifeBuoy
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const faqs = [
  {
    question: "What exactly is Quillance?",
    answer: "Not a course—Quillance is a career-building system where you learn by doing real work, not just watching videos.",
  },
  {
    question: "Who will I learn from?",
    answer: "From professionals who are currently working in the roles you aim for—not outdated trainers.",
  },
  {
    question: "Is this beginner-friendly?",
    answer: "Yes—but only if you’re willing to take action. We guide from basics to real execution.",
  },
  {
    question: "What will I actually gain?",
    answer: "You’ll leave with real projects, practical skills, and proof of work not just theory.",
  },
  {
    question: "How is Quillance different from other platforms?",
    answer: "Others focus on content. We focus on outcomes and execution.",
  },
  {
    question: "What does placement support really mean here?",
    answer: "Resume building, interview practice, and real guidance—so you’re ready, not just hopeful.",
  },
  {
    question: "Do I get a certificate?",
    answer: "Yes—but more importantly, you earn experience that actually matters in hiring.",
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-0 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-neutral-100">
        
        {/* Left Side: Branding & Contact */}
        <div className="lg:w-[400px] bg-[#104382] p-10 lg:p-14 flex flex-col items-start text-white relative group/sidebar overflow-hidden">
          <BackgroundGradientAnimation 
            containerClassName="absolute inset-0 z-0 opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-1000"
            gradientBackgroundStart="#104382"
            gradientBackgroundEnd="#0d366a"
            firstColor="14, 165, 233"    // Sky blue
            secondColor="30, 58, 138"    // Deep blue
            thirdColor="56, 189, 248"    // Light blue
            fourthColor="3, 105, 161"    // Ocean blue
            fifthColor="2, 132, 199"     // Bright blue
          />
          
          <div className="relative z-10 w-full">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-300 opacity-80 mb-6 block">Got Questions?</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight leading-[1.1]">
              Questions & <br />Answers
            </h2>
            <p className="text-blue-100/70 text-lg font-medium mb-12 leading-relaxed">
              Have more questions? Don't hesitate to reach out — we're here to help you find the right track.
            </p>
            
            <div className="flex flex-col gap-4 w-full">
              <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md px-6 py-4 rounded-2xl transition-all group">
                <div className="w-10 h-10 rounded-xl bg-blue-500/30 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm">Talk to a career expert</span>
              </button>
              
              <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md px-6 py-4 rounded-2xl transition-all group">
                <div className="w-10 h-10 rounded-xl bg-blue-500/30 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm">support@quillance.com</span>
              </button>
            </div>
          </div>
          
          {/* Stacked Vertical Branding: F-A-Q - Positioned under buttons with increased spacing */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none select-none opacity-15 transition-all duration-700 group-hover/sidebar:opacity-60 select-none leading-[0.75] z-10">
            {["F", "A", "Q"].map((letter, i) => (
              <h1 
                key={i} 
                className="text-[120px] md:text-[180px] font-black tracking-tighter bg-gradient-to-r from-white/0 via-white/80 to-white/0 bg-[length:200%_auto] bg-[position:-100%_center] group-hover/sidebar:bg-[position:100%_center] bg-clip-text text-transparent transition-all duration-1000 ease-in-out"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {letter}
              </h1>
            ))}
          </div>
        </div>
        
        {/* Right Side: Accordion */}
        <div className="flex-1 p-8 lg:p-14 lg:pl-10">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "border-b border-neutral-100 last:border-0 pb-4 last:pb-0 transition-all duration-300",
                  openIndex === idx ? "pt-2" : ""
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center gap-6 py-5 text-left group"
                >
                  <span className={cn(
                    "text-xs font-black tracking-widest transition-colors duration-300 shrink-0",
                    openIndex === idx ? "text-blue-600" : "text-neutral-300"
                  )}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className={cn(
                    "flex-1 text-lg font-bold transition-all duration-300",
                    openIndex === idx ? "text-blue-600" : "text-[#104382] group-hover:text-blue-500"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300",
                    openIndex === idx ? "bg-blue-600 border-blue-600 text-white rotate-180 shadow-lg shadow-blue-200" : "border-neutral-100 text-neutral-400 group-hover:border-blue-200 group-hover:text-blue-500"
                  )}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-14 pr-12 pb-6">
                        <p className="text-neutral-500 text-lg font-medium leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-neutral-50 flex items-center justify-center">
             <span className="text-[10px] uppercase font-bold text-neutral-300 tracking-[0.2em]">Fast response • No spam • Real guidance</span>
          </div>
        </div>
        
      </div>
    </section>
  );
};
