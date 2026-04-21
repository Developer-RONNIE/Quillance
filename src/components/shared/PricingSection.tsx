"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Clock, Phone, Zap, Star, ShieldCheck, Users, Rocket, Trophy, MessageSquare, GraduationCap, Briefcase, BarChart3, Presentation, Map, Globe, Brain, HelpCircle, Layout, Code, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const featuresLite = [
  { text: "Industry-Aligned Skill Training", icon: BookOpen },
  { text: "Portfolio-Ready Projects (3-4)", icon: Code },
  { text: "Industry Simulation Internship", icon: Layout },
  { text: "Verified Internship Certificate", icon: ShieldCheck },
  { text: "Advanced Tools & Problem Solving", icon: Brain },
  { text: "AI Resume + Profile Analyzer", icon: Zap },
  { text: "ATS Optimized Resume Building", icon: Star },
  { text: "LinkedIn Personal Branding", icon: Globe },
  { text: "Group Mock Interviews", icon: MessageSquare },
  { text: "Letter of Recommendation (LOR)", icon: Trophy },
  { text: "Exclusive Alumni Network Access", icon: Users },
  { text: "Career Orientation Session", icon: GraduationCap },
  { text: "Weekly Industry Mentor Sessions", icon: Users },
  { text: "Experts from Real Companies", icon: Star },
  { text: "Portfolio Demo Day", icon: Presentation },
  { text: "Beginner Career Strategy", icon: Map },
  { text: "Private Student Community", icon: Globe },
  { text: "Internship Opportunities", icon: Briefcase },
  { text: "Certificates & Recognition", icon: Trophy },
];

const featuresElite = [
  { text: "Foundation + Advanced Skills", icon: BookOpen },
  { text: "5+ Advanced Projects + Capstone", icon: Code },
  { text: "Industry Simulation Internship", icon: Layout },
  { text: "Verified Internship Certificate", icon: ShieldCheck },
  { text: "Advanced Level Training", icon: Brain },
  { text: "AI Resume + Profile Analyzer", icon: Zap },
  { text: "Professional Resume Creation", icon: Star },
  { text: "LinkedIn Personal Branding", icon: Globe },
  { text: "Group + 1-on-1 Interview Prep", icon: MessageSquare },
  { text: "LOR for Top Performers", icon: Trophy },
  { text: "Priority Alumni Access", icon: Users },
  { text: "Personalized Career Mentorship", icon: GraduationCap },
  { text: "Dedicated Industry Mentor Support", icon: Users },
  { text: "Access to Hiring Companies", icon: Briefcase },
  { text: "Experts from Real Companies", icon: Star },
  { text: "Industry Demo Presentation", icon: Presentation },
  { text: "Step-by-Step Career Strategy", icon: Map },
  { text: "Priority Community Access", icon: Globe },
  { text: "Referrals + Hiring Opportunities", icon: Rocket },
  { text: "Awards + Featured Talent", icon: Trophy },
];

export const PricingSection = () => {
  const [activePlan, setActivePlan] = React.useState<"lite" | "elite">("elite");

  return (
    <section id="pricing-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6"
          >
             ₹ Pricing
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight uppercase"
          >
            Launch Pricing. <span className="text-blue-600">Proven Outcomes.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto font-medium"
          >
            Cohort seats are limited. Scholarships are batch-based. The goal is outcomes: projects, evaluations, and hiring readiness.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-6xl mx-auto">
          {/* Card 1: Quillance Lite */}
          <PricingCard 
            title="Quillance Lite"
            price="5,000"
            originalPrice="8,999"
            features={featuresLite}
            outcome="Portfolio + Internship Experience"
            isActive={activePlan === "lite"}
            onClick={() => setActivePlan("lite")}
          />

          {/* Card 2: Quillance Elite */}
          <PricingCard 
            title="Quillance Elite"
            price="7,000"
            originalPrice="14,999"
            features={featuresElite}
            isActive={activePlan === "elite"}
            onClick={() => setActivePlan("elite")}
            outcome="Job-Ready Profile + Confidence"
          />
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ 
  title, 
  price, 
  originalPrice, 
  features, 
  isActive,
  onClick,
  outcome
}: { 
  title: string; 
  price: string; 
  originalPrice: string; 
  features: { text: string; icon: any }[];
  isActive: boolean;
  onClick: () => void;
  outcome: string;
}) => {
  return (
    <motion.div 
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative flex-1 bg-white rounded-[2.5rem] border p-8 md:p-10 flex flex-col transition-all duration-500 cursor-pointer",
        isActive ? "border-blue-500 shadow-2xl shadow-blue-500/10 ring-2 ring-blue-500/20" : "border-slate-100 shadow-xl shadow-slate-900/5 opacity-80"
      )}
    >
      {isActive && (
        <div className="absolute -top-4 right-10 bg-[#104382] text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          Best Value
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-black text-slate-900 mb-6">{title}</h3>
        
        <div className="bg-slate-50/80 rounded-3xl p-6 border border-slate-100">
           <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">List Price</div>
           <div className="flex items-baseline gap-3 mb-6">
              <span className="text-5xl font-black text-slate-900">₹{price}</span>
              <span className="text-2xl font-bold text-slate-300 line-through">₹{originalPrice}</span>
           </div>

           <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-slate-100 shadow-sm shrink-0">
                 <Clock className="w-3.5 h-3.5 text-blue-600" />
                 <span className="text-[10px] font-bold text-slate-600">Next batch: 10 May</span>
              </div>
              <div className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
                 Limited offer slots
              </div>
           </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
           <button className="py-4 rounded-2xl border-2 border-blue-600 text-blue-600 font-black text-sm hover:bg-blue-50 transition-all">
              Proceed to Pay
           </button>
           <button 
             onClick={(e) => {
               e.stopPropagation();
               window.location.href = "tel:+9163605";
             }}
             className="py-4 rounded-2xl bg-blue-600 text-white font-black text-sm hover:bg-blue-700 shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 transition-all"
           >
              <Phone className="w-4 h-4" />
              Talk to Expert
           </button>
        </div>
        <p className="text-[10px] text-slate-400 font-medium text-center mt-4">
           Limited-time offer is unlocked on call after a quick screening. Slots are batch-limited.
        </p>
      </div>

      <div className="border-t border-slate-100 pt-8 flex-1 flex flex-col">
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                 <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-blue-600 stroke-[3]" />
                 </div>
                 <span className="text-[11px] font-bold text-slate-600 truncate">{feature.text}</span>
              </div>
            ))}
         </div>

         <div className="mt-auto pt-6 border-t border-dashed border-slate-200">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  <Rocket className="w-5 h-5" />
               </div>
               <div>
                  <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Career Outcome</div>
                  <div className="text-sm font-black text-slate-900">{outcome}</div>
               </div>
            </div>
         </div>
      </div>
    </motion.div>
  );
};
