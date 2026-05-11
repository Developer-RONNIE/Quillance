"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  UserPlus, 
  Target, 
  BookOpen, 
  CreditCard, 
  Rocket, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Phone
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "01",
    title: "Register",
    fullTitle: "Register for Quillance Learning Platform",
    subtitle: "Fast & Easy Signup for Career-Focused Learning",
    description: "Start your journey with Quillance in just a few minutes. No complexity—just a simple registration process to begin your skill development journey.",
    whatHappens: "Create your account and set up your learner profile to access personalized, industry-relevant courses.",
    icon: UserPlus,
    benefits: ["Quick signup", "Profile setup", "Course catalog"]
  },
  {
    id: "02",
    title: "Share goals",
    fullTitle: "Define Your Career Goals",
    subtitle: "Personalized Learning Path Based on Your Goals",
    description: "Tell us your career direction so we can create a customized learning experience tailored to your ambitions.",
    whatHappens: "Share your target job role, skill level, and career interests to get a personalized roadmap for success.",
    icon: Target,
    benefits: ["Career mapping", "Skill assessment", "Tailored roadmap"]
  },
  {
    id: "03",
    title: "Pick a program",
    fullTitle: "Choose the Right Program",
    subtitle: "Industry-Ready Courses Designed for Real Jobs",
    description: "Select from a wide range of programs built to match real-world industry demands and high-growth careers.",
    whatHappens: "Pick a structured training program aligned with your career goals—whether it's tech, management, or emerging fields.",
    icon: BookOpen,
    benefits: ["Expert-led cohorts", "Real projects", "Clear rubrics"]
  },
  {
    id: "04",
    title: "Payment & access",
    fullTitle: "Complete Payment & Get LMS Access",
    subtitle: "Secure Enrollment with Instant Course Access",
    description: "Enroll securely and unlock full access to your learning dashboard, resources, and onboarding materials.",
    whatHappens: "Complete a safe online payment and get instant access to the LMS, course content, and mentorship support.",
    icon: CreditCard,
    benefits: ["Secure payment", "Instant LMS access", "Onboarding kit"]
  },
  {
    id: "05",
    title: "Start learning",
    fullTitle: "Start Learning & Build Real Skills",
    subtitle: "Gain Practical Experience with Real-World Projects",
    description: "Begin your learning journey with hands-on projects, expert mentorship, and industry-recognized certifications.",
    whatHappens: "Work on real-world assignments, build your portfolio, receive feedback from mentors, and prepare for job opportunities.",
    icon: Rocket,
    benefits: ["Live mentorship", "Portfolio building", "Job readiness"]
  }
];

export const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Badge & Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            How It Works
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[#104382] mb-2 tracking-tight"
          >
            FROM ENROLMENT TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">PORTFOLIO PROOF</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 text-lg md:text-xl font-medium mb-6"
          >
            Simple steps. Tight outcomes. Zero confusion.
          </motion.p>

          <a
            href="https://forms.gle/8a2iEXN8wFw4TDDx8"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0b5cd5] hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center"
          >
            <Phone className="w-4 h-4 mr-2 group-hover:animate-wiggle" fill="currentColor" />
            Talk to Career Expert
          </a>
        </div>

        {/* Desktop Stepper */}
        <div className="relative mb-8 hidden md:block bg-white/60 backdrop-blur-sm border border-neutral-100 p-2 rounded-[2.5rem] shadow-sm">
          <div className="relative flex justify-between items-center gap-2">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={cn(
                    "flex flex-row items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 z-10",
                    isActive ? "bg-white shadow-md border border-blue-100 scale-[1.02]" : "hover:bg-blue-50/50"
                  )}
                >
                  <div className={cn(
                    "w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300",
                    isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-blue-50 text-blue-400"
                  )}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col items-start leading-none">
                    <p className={cn(
                      "text-[9px] font-bold uppercase tracking-wider mb-1",
                      isActive ? "text-blue-600" : "text-neutral-400"
                    )}>
                      Step {step.id}
                    </p>
                    <p className={cn(
                      "text-sm font-black",
                      isActive ? "text-[#104382]" : "text-neutral-500"
                    )}>
                      {step.title}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* Floating Navigation Arrows (Desktop) */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2">
               <button 
                onClick={handleBack}
                disabled={activeStep === 0}
                className="w-8 h-8 rounded-full bg-white border border-neutral-100 shadow-sm flex items-center justify-center text-neutral-400 hover:text-blue-600 disabled:opacity-0 transition-all"
               >
                 <ChevronLeft className="w-4 h-4" />
               </button>
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2">
               <button 
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
                className="w-8 h-8 rounded-full bg-white border border-neutral-100 shadow-sm flex items-center justify-center text-neutral-400 hover:text-blue-600 disabled:opacity-0 transition-all"
               >
                 <ChevronRight className="w-4 h-4" />
               </button>
            </div>
          </div>

          {/* Overall Progress Loader - Now Tightly Packed Inside */}
          <div className="mt-2 px-4 pb-1 flex items-center gap-4">
             <div className="flex-1 h-1.5 bg-neutral-100/50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  className="h-full bg-blue-600 rounded-full"
                />
             </div>
             <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-tighter whitespace-nowrap">Step {activeStep + 1} / {steps.length} — {steps[activeStep].title}</span>
          </div>
        </div>

        {/* Mobile Stepper */}
        <div className="md:hidden flex items-center justify-between mb-6 bg-white p-3 rounded-2xl shadow-sm border border-neutral-100">
          <button 
            onClick={handleBack} 
            disabled={activeStep === 0}
            className="p-2 text-neutral-400 disabled:opacity-30"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex flex-col items-center">
            <span className="text-[9px] uppercase font-bold text-blue-600 tracking-widest">Step {activeStep + 1} / 5</span>
            <span className="font-bold text-[#104382] text-sm truncate max-w-[150px]">{steps[activeStep].title}</span>
          </div>
          <button 
            onClick={handleNext} 
            disabled={activeStep === steps.length - 1}
            className="p-2 text-neutral-400 disabled:opacity-30"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Content Card */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] shadow-xl shadow-blue-900/5 p-6 md:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch"
            >
              {/* Left Side: Step Info */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 ring-4 ring-blue-50/50">
                      {React.createElement(steps[activeStep].icon, { className: "w-7 h-7" })}
                   </div>
                   <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 opacity-70">Step {steps[activeStep].id}</span>
                      <h3 className="text-xl md:text-2xl font-black text-[#104382] leading-tight">{steps[activeStep].fullTitle}</h3>
                   </div>
                </div>

                <p className="text-[#104382] font-bold text-base mb-4 leading-relaxed">
                  {steps[activeStep].subtitle}
                </p>
                
                <div className="flex flex-col gap-2.5">
                  {steps[activeStep].benefits.map((benefit, i) => (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (i * 0.05) }}
                      key={benefit} 
                      className="flex items-center gap-3 bg-neutral-50/50 border border-neutral-100 px-4 py-2.5 rounded-xl group hover:bg-blue-50 hover:border-blue-100 transition-all cursor-default"
                    >
                      <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-sm font-bold text-[#104382] opacity-80 group-hover:opacity-100">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Side: Process Info & Action */}
              <div className="w-full lg:w-[400px] bg-neutral-50/30 rounded-[1.5rem] border border-neutral-100 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    What Happens Here
                  </h4>
                  
                  <p className="text-[#104382] text-base md:text-lg font-bold leading-snug mb-6">
                    {steps[activeStep].whatHappens}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-neutral-200 text-neutral-500 font-bold text-sm hover:bg-white hover:text-blue-600 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all group"
                  >
                    {activeStep === steps.length - 1 ? (
                      "Finish"
                    ) : (
                      <>
                        Next
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Background Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
        </div>
      </div>
    </section>
  );
};
