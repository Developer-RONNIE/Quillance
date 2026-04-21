"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Rocket, Timer } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function JobsPage() {
  return (
    <div className="relative min-h-[80vh] w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden py-20 px-4">
      {/* Background Effect */}
      <BackgroundBeams className="opacity-50" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-bold text-xs uppercase tracking-widest mb-8"
        >
          <Timer className="w-4 h-4" />
          Under Construction
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]"
        >
          QUILLANCE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            JOB PORTAL
          </span>
        </motion.h1>

        {/* Big Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative inline-block"
        >
          <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full opacity-50" />
          <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10 py-2 px-8 border-y border-white/10 uppercase tracking-[0.3em]">
            Coming Soon
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
        >
          We're building a revolutionary bridge between top talent and global industry leaders. 
          Get ready to showcase your proof of work and land your dream career.
        </motion.p>

        {/* Decorative Icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-12 text-slate-700"
        >
          <Briefcase className="w-10 h-10" />
          <div className="w-px h-12 bg-slate-800" />
          <Rocket className="w-10 h-10" />
        </motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
    </div>
  );
}
