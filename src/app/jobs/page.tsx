"use client";

import React from "react";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { GridBackgroundDemo } from "@/components/grid-background-demo";
import { Briefcase, Globe, Sparkles, Send } from "lucide-react";
import { OrbitalTechStack } from "@/components/shared/OrbitalTechStack";
import { CallToAction } from "@/components/shared/CallToAction";

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Replicating Program Page Layout */}
      <section className="relative overflow-hidden bg-white">
        <GridBackgroundDemo className="w-full pt-20 pb-10 lg:pt-32 lg:pb-16 relative">
           <Spotlight />
           
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-widest mb-8"
                >
                   <Sparkles className="w-3.5 h-3.5" />
                   Explore Opportunities
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]"
                >
                  Your Bridge to <br />
                  <span className="text-blue-600">Industry Leaders</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-slate-500 text-lg md:text-xl max-w-xl mb-10 font-medium leading-relaxed"
                >
                  Connect with global employers and showcase your proof of work. 
                  Find high-impact roles tailored to your unique skill set.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-8 text-slate-400 font-bold text-xs uppercase tracking-widest"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-400" />
                    Remote Friendly
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-blue-400" />
                    Top Employers
                  </div>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden lg:flex justify-end"
              >
                <div className="w-full max-w-[450px] scale-110 origin-right translate-x-4">
                  <OrbitalTechStack hideBgOrbit={true} />
                </div>
              </motion.div>
           </div>
        </GridBackgroundDemo>
      </section>

      {/* Main Job Search Section */}
      <section className="pb-8 pt-10 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Get your dreams come true</h2>
               <p className="text-slate-500 font-medium mt-4">Verified industry roles waiting for you.</p>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 overflow-hidden border border-slate-200 ring-8 ring-slate-100/50">
               <iframe 
                 src="https://optimhire.com/d/Search-job-iframe?ref_code=quillance-infotech&skill=&positions=&dark_color=3f73ee&light_color=3b74e8" 
                 width="100%" 
                 height="800"
                 className="w-full border-none"
                 title="Quillance Job Portal"
               />
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-slate-400 text-sm font-medium">
                Powered by OptimHire • Exclusive Opportunities for Quillance Graduates
              </p>
            </div>
         </div>
      </section>

      {/* Call to Action Section */}
      <div className="pb-4">
        <CallToAction 
          className="py-8"
          title="Ready to Start Your Career?"
          description="Join thousands of students who have transformed their careers with Quillance. Take the first step towards industry leadership today."
        />
      </div>
    </div>
  );
}
