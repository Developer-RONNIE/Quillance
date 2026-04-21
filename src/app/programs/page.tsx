"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { programsData } from "@/data/programs";
import Link from "next/link";
import { 
  Search, 
  ArrowRight, 
  Code2, 
  Cpu, 
  Settings, 
  BarChart3, 
  Palette, 
  Building2,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, any> = {
  "Computer Science & IT": Code2,
  "Mechanical Engineering": Settings,
  "Civil Engineering": Building2,
  "Electrical Engineering": Cpu,
  "Management & Business": BarChart3,
};

export default function ProgramsListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const categories = Object.keys(programsData);

  const allCourses = categories.flatMap(cat => 
    programsData[cat].map(prog => ({ ...prog, category: cat }))
  );

  const filteredCourses = allCourses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-20">
      {/* Hero Header */}
      <section className="bg-[#0f172a] text-white pt-24 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Career Accelerator Programs
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
              Master the Skills That <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Matter Today.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Join 10,000+ students in our industry-aligned programs designed to bridge the gap between education and high-growth careers.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto mt-12 relative"
          >
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input 
              type="text"
              placeholder="Search programs (e.g. Data Science, AutoCAD, Marketing)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all text-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Listing Content */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        {searchQuery.trim() !== "" ? (
          <div className="space-y-10">
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900">
                Found {filteredCourses.length} results for "{searchQuery}"
              </h2>
              <button 
                onClick={() => setSearchQuery("")}
                className="text-blue-600 font-bold hover:underline"
              >
                Clear Search
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, i) => (
                <CourseCard key={i} course={course} />
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-20">
            {categories.map((cat, catIdx) => (
              <div key={cat} className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                    {React.createElement(categoryIcons[cat] || Code2, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">{cat}</h2>
                    <p className="text-slate-500 font-medium">Professional certification tracks</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {programsData[cat].map((course, i) => (
                    <CourseCard key={i} course={{...course, category: cat}} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

function CourseCard({ course }: { course: any }) {
  const slug = course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-blue-50 transition-colors">
          {course.icon}
        </div>
        <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest">
          {course.category}
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
        {course.title}
      </h3>
      <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-grow">
        {course.desc}
      </p>

      <div className="flex items-center gap-2 mb-6">
        <span className="px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded text-[10px] font-bold">{course.b1}</span>
        <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-[10px] font-bold">{course.b2}</span>
      </div>

      <Link 
        href={`/programs/${slug}`}
        className="mt-auto flex items-center justify-between w-full p-4 rounded-2xl bg-slate-50 group-hover:bg-blue-600 group-hover:text-white transition-all font-bold"
      >
        View Curriculum
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
