"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

          <button
            className="group bg-[#0b5cd5] hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center"
          >
            <Phone className="w-4 h-4 mr-2 group-hover:animate-wiggle" fill="currentColor" />
            Talk to Career Expert
          </button>
        </div>

        {/* Desktop Stepper */}
        <div className="relative mb-6 hidden md:block">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-100 -translate-y-1/2" />
          
          <div className="relative flex justify-between items-center bg-white/50 backdrop-blur-sm border border-neutral-100 p-4 rounded-3xl shadow-sm">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              const isCompleted = activeStep > idx;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={cn(
                    "relative flex flex-col items-center gap-2 px-6 py-2.5 rounded-2xl transition-all duration-300 z-10",
                    isActive ? "bg-white shadow-lg border border-blue-100 scale-105" : "hover:bg-blue-50/50"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                    isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-blue-50 text-blue-400"
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <p className={cn(
                      "text-[10px] font-bold uppercase tracking-wider mb-0.5",
                      isActive ? "text-blue-600" : "text-neutral-400"
                    )}>
                      Step {step.id}
                    </p>
                    <p className={cn(
                      "text-sm font-bold",
                      isActive ? "text-[#104382]" : "text-neutral-500"
                    )}>
                      {step.title}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* Floating Navigation Arrows (Desktop) */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
               <button 
                onClick={handleBack}
                disabled={activeStep === 0}
                className="w-10 h-10 rounded-full bg-white border border-neutral-100 shadow-md flex items-center justify-center text-neutral-400 hover:text-blue-600 disabled:opacity-0 transition-all"
               >
                 <ChevronLeft className="w-5 h-5" />
               </button>
            </div>
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
               <button 
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
                className="w-10 h-10 rounded-full bg-white border border-neutral-100 shadow-md flex items-center justify-center text-neutral-400 hover:text-blue-600 disabled:opacity-0 transition-all"
               >
                 <ChevronRight className="w-5 h-5" />
               </button>
            </div>
          </div>

          {/* Overall Progress Loader */}
          <div className="mt-4 flex items-center gap-4 justify-center">
             <div className="w-full max-w-lg h-2 bg-neutral-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  className="h-full bg-blue-600 rounded-full"
                />
             </div>
             <span className="text-xs font-bold text-neutral-400 whitespace-nowrap">Step {activeStep + 1} / {steps.length} — {steps[activeStep].title}</span>
          </div>
        </div>

        {/* Mobile Stepper */}
        <div className="md:hidden flex items-center justify-between mb-6 bg-white p-4 rounded-2xl shadow-sm border border-neutral-100">
          <button 
            onClick={handleBack} 
            disabled={activeStep === 0}
            className="p-2 text-neutral-400 disabled:opacity-30"
          >
            <ChevronLeft />
          </button>
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase font-bold text-blue-600 tracking-widest">Step {activeStep + 1} / 5</span>
            <span className="font-bold text-[#104382] truncate max-w-[150px]">{steps[activeStep].title}</span>
          </div>
          <button 
            onClick={handleNext} 
            disabled={activeStep === steps.length - 1}
            className="p-2 text-neutral-400 disabled:opacity-30"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Content Card */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/80 backdrop-blur-xl border border-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch"
            >
              {/* Left Side: Step Info */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 ring-4 ring-blue-50/50">
                      {React.createElement(steps[activeStep].icon, { className: "w-8 h-8" })}
                   </div>
                   <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-blue-600 opacity-70">Step {steps[activeStep].id}</span>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-[#104382] leading-tight">{steps[activeStep].fullTitle}</h3>
                   </div>
                </div>

                <p className="text-[#104382] font-semibold text-lg mb-4 leading-relaxed">
                  {steps[activeStep].subtitle}
                </p>
                
                <p className="text-neutral-500 text-base leading-relaxed mb-6 max-w-xl">
                  {steps[activeStep].description}
                </p>

                <div className="mt-auto flex flex-col gap-3">
                  {steps[activeStep].benefits.map((benefit, i) => (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      key={benefit} 
                      className="flex items-center gap-3 bg-neutral-50/50 border border-neutral-100 px-5 py-3 rounded-2xl group hover:bg-blue-50 hover:border-blue-100 transition-all cursor-default"
                    >
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px]">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span className="text-sm font-bold text-[#104382] opacity-80 group-hover:opacity-100">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Side: Process Info & Action */}
              <div className="w-full lg:w-[450px] bg-neutral-50/50 rounded-[2rem] border border-neutral-100 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    What Happens Here
                  </h4>
                  
                  <p className="text-[#104382] text-lg font-bold leading-snug mb-6">
                    {steps[activeStep].whatHappens}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-end">
                       <span className="text-[10px] font-bold uppercase text-neutral-400">Progress</span>
                       <span className="text-sm font-black text-[#104382] tracking-wide">{activeStep + 1}/5</span>
                    </div>
                    <div className="h-2 w-full bg-white rounded-full overflow-hidden border border-neutral-100">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${((activeStep + 1) / 5) * 100}%` }}
                          transition={{ duration: 0.6, ease: "circOut" }}
                        />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-neutral-200 text-neutral-500 font-bold hover:bg-white hover:text-blue-600 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all group"
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
