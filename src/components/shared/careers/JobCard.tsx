"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Clock, ChevronDown, CheckCircle2 } from "lucide-react";
import { JobRole } from "@/data/careers";

export const JobCard = ({ job }: { job: JobRole }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 relative`}
    >
      {/* Left Color Border */}
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600`} />

      {/* Header / Clickable Area */}
      <div 
        className="p-6 pl-8 flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl border border-slate-100 flex items-center justify-center shrink-0 bg-slate-50 shadow-sm">
            <Briefcase className="w-5 h-5 text-slate-400" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-bold text-slate-900 leading-tight">{job.title}</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase text-blue-600 bg-blue-50 border border-blue-100 shrink-0">
                {job.department}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 shrink-0 mt-2 md:mt-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              {job.location}
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {job.workMode}
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
              <Briefcase className="w-3.5 h-3.5 text-slate-400" />
              {job.type}
            </div>
          </div>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors ml-auto md:ml-2 group"
          >
            <motion.span
              animate={{ x: [0, -2, 2, -2, 2, 0] }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "mirror", 
                duration: 2.5,
                delay: Math.random() * 2 
              }}
            >
              {isExpanded ? "Close job description" : "View job description"}
            </motion.span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-100 bg-slate-50/50"
          >
            <div className="p-6 pl-8 md:p-8 md:pl-10 text-sm text-slate-600 space-y-8">
              
              <div className="flex flex-col md:flex-row gap-x-12 gap-y-8">
                {/* Left Column */}
                <div className="flex-1 space-y-8">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">About Quillance</h4>
                    <p className="leading-relaxed">{job.about}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((res, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">What You'll Gain</h4>
                    <ul className="space-y-2">
                      {job.whatYouWillGain.map((gain, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{gain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex-1 space-y-8">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Role Overview</h4>
                    <p className="leading-relaxed">{job.overview}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Who Should Apply?</h4>
                    <ul className="space-y-2">
                      {job.whoShouldApply.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Internship Details</h4>
                    <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-2 shadow-sm">
                      {Object.entries(job.details).map(([key, value]) => {
                        if (!value) return null;
                        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                        return (
                          <div key={key} className="flex justify-between border-b border-slate-50 last:border-0 pb-2 last:pb-0">
                            <span className="text-slate-500 font-medium">{formattedKey}</span>
                            <span className="text-slate-900 font-semibold text-right">{value}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 4: Full-Time Opportunity (Full Width) */}
              {job.fullTime ? (
                <div className="bg-blue-50 rounded-xl border border-blue-100 p-6 w-full flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1">
                    <h5 className="font-bold text-blue-900 text-xs uppercase tracking-wider mb-2">Full-Time Opportunity</h5>
                    {job.fullTime.ctc && <div className="font-semibold text-blue-800 mb-1 text-lg">CTC: {job.fullTime.ctc}</div>}
                    <ul className="space-y-1 mt-2">
                      {job.fullTime.description?.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-blue-800 text-xs">
                          <div className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a 
                    href="mailto:info@quillance.com"
                    className="bg-slate-900 hover:bg-black text-white px-10 py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg shrink-0 whitespace-nowrap"
                  >
                    Apply Now
                  </a>
                </div>
              ) : (
                /* Action Button if no fullTime box */
                <div className="pt-6 border-t border-slate-200 flex justify-end">
                  <a 
                    href="mailto:info@quillance.com"
                    className="bg-slate-900 hover:bg-black text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-sm"
                  >
                    Apply Now
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
