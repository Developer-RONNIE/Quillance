"use client";

import React from "react";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { GridBackgroundDemo } from "@/components/grid-background-demo";
import { Briefcase, Globe, Sparkles, Send } from "lucide-react";
import { OrbitalTechStack } from "@/components/shared/OrbitalTechStack";
import { CallToAction } from "@/components/shared/CallToAction";

export default function JobsPage() {
  const [iframeLoaded, setIframeLoaded] = React.useState(false);
  const [showLoader, setShowLoader] = React.useState(true);

  React.useEffect(() => {
    if (iframeLoaded) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 5500); // 5.5 seconds buffer to fully cover the iframe's internal API fetch latency
      return () => clearTimeout(timer);
    }
  }, [iframeLoaded]);

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

            <div className="relative bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 overflow-hidden border border-slate-200 ring-8 ring-slate-100/50 min-h-[600px] md:min-h-[800px]">
               {showLoader && (
                 <div className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center p-6 sm:p-10">
                   {/* Premium modern skeleton loader */}
                   <div className="w-full max-w-4xl space-y-8 animate-pulse">
                     {/* Search bar skeleton */}
                     <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-10">
                       <div className="h-12 bg-slate-100 rounded-xl flex-grow"></div>
                       <div className="h-12 bg-slate-100 rounded-xl flex-grow"></div>
                       <div className="h-12 bg-blue-100/70 rounded-xl w-full sm:w-32"></div>
                     </div>
                     
                     {/* Filter capsules skeleton */}
                     <div className="flex flex-wrap gap-3 mb-6">
                       <div className="h-8 bg-slate-100 rounded-full w-24"></div>
                       <div className="h-8 bg-slate-100 rounded-full w-28"></div>
                       <div className="h-8 bg-slate-100 rounded-full w-20"></div>
                     </div>

                     {/* Job cards split screen skeleton */}
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       {/* Left list panel skeleton */}
                       <div className="md:col-span-1 space-y-4">
                         {[1, 2, 3].map((n) => (
                           <div key={n} className="p-4 border border-slate-100 rounded-2xl space-y-3">
                             <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                             <div className="h-3 bg-slate-50 rounded w-1/2"></div>
                             <div className="flex gap-2">
                               <div className="h-5 bg-slate-100 rounded-full w-12"></div>
                               <div className="h-5 bg-slate-100 rounded-full w-12"></div>
                             </div>
                           </div>
                         ))}
                       </div>
                       
                       {/* Right detail panel skeleton */}
                       <div className="hidden md:block md:col-span-2 p-6 border border-slate-100 rounded-2xl space-y-6">
                         <div className="space-y-3">
                           <div className="h-6 bg-slate-100 rounded w-1/2"></div>
                           <div className="h-4 bg-slate-50 rounded w-1/3"></div>
                         </div>
                         <div className="h-10 bg-blue-50/50 rounded-xl w-32"></div>
                         <div className="space-y-3">
                           <div className="h-3 bg-slate-100 rounded w-full"></div>
                           <div className="h-3 bg-slate-100 rounded w-full"></div>
                           <div className="h-3 bg-slate-100 rounded w-5/6"></div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               )}

               <iframe 
                 src="https://optimhire.com/d/Search-job-iframe?ref_code=quillance-infotech&skill=&positions=&dark_color=3f73ee&light_color=3b74e8" 
                 width="100%" 
                 height="800"
                 className={`w-full border-none transition-opacity duration-500 ${showLoader ? 'opacity-0' : 'opacity-100'}`}
                 title="Quillance Job Portal"
                 onLoad={() => setIframeLoaded(true)}
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
