"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Layers, 
  BookOpen, 
  Code2, 
  Terminal, 
  Cpu, 
  Database, 
  Globe, 
  ShieldCheck,
  Layout,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { curriculumData } from "@/data/curriculum";

interface CurriculumSectionProps {
  slug: string;
}

const iconMap: Record<number, any> = {
  1: Terminal,
  2: Layers,
  3: Cpu,
  4: Database,
  5: Code2,
  6: Globe,
  7: Layout,
  8: ShieldCheck,
};

export const CurriculumSection = ({ slug }: CurriculumSectionProps) => {
  const [openIds, setOpenIds] = useState<number[]>([]);
  const modules = curriculumData[slug] || [];

  const toggleModule = (id: number) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  if (modules.length === 0) return null;

  return (
    <section id="curriculum-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/50 text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Learning Path
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#0f172a] mb-4 tracking-tight uppercase"
          >
            Domain <span className="text-blue-600">Curriculum</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto font-medium"
          >
            Designed by industry experts — structured step-by-step for real-world mastery.
          </motion.p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module, idx) => {
            const Icon = iconMap[module.id] || BookOpen;
            const isOpen = openIds.includes(module.id);
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={cn(
                  "group rounded-2xl border transition-all duration-300",
                  isOpen 
                    ? "bg-slate-50 border-blue-200 shadow-lg shadow-blue-500/5" 
                    : "bg-white border-slate-100 hover:border-blue-100 hover:shadow-md hover:-translate-y-0.5"
                )}
              >
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-5">
                    <div className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300",
                      isOpen ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
                    )}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">
                        Module {module.id}
                      </div>
                      <h3 className="text-lg font-bold text-[#0f172a] leading-tight">
                        {module.title}
                      </h3>
                    </div>
                  </div>
                  <div className={cn(
                    "w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 transition-all duration-300",
                    isOpen && "rotate-180 bg-blue-600 text-white"
                  )}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 pt-2">
                        <div className="bg-white rounded-xl border border-slate-200/60 p-5 space-y-3">
                           {module.topics.map((topic, tIdx) => (
                             <div key={tIdx} className="flex items-start gap-3 group/topic">
                                <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                                <span className="text-sm font-semibold text-slate-600 group-hover/topic:text-blue-600 transition-colors">
                                  {topic}
                                </span>
                             </div>
                           ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
