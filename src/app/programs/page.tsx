"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { programsData } from "@/data/programs";
import Link from "next/link";
import { 
  Search, 
  ChevronRight,
  Sparkles,
  Users,
  LayoutGrid,
  CheckCircle2,
  Rocket,
  Globe,
  Briefcase,
  Code,
  Cpu,
  Wrench,
  Building,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CallToAction } from "@/components/shared/CallToAction";
import { Spotlight } from "@/components/ui/spotlight-new";

const domainIcons: Record<string, React.ReactNode> = {
  "All": <LayoutGrid className="w-4 h-4" />,
  "Computer Science & IT": <Code className="w-4 h-4" />,
  "Mechanical Engineering": <Wrench className="w-4 h-4" />,
  "Civil Engineering": <Building className="w-4 h-4" />,
  "Electrical Engineering": <Cpu className="w-4 h-4" />,
  "Management & Business": <Briefcase className="w-4 h-4" />,
};

function HeroVisual() {
  const topCourses = useMemo(() => {
    return Object.keys(programsData).flatMap(domain => 
      programsData[domain].slice(0, 2).map(course => ({
        ...course,
        domain,
        slug: course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      }))
    );
  }, []);

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % topCourses.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [topCourses.length]);

  const currentCourse = topCourses[currentIndex];

  const scrollToCourse = (slug: string) => {
    const element = document.getElementById(`course-${slug}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.classList.add("ring-4", "ring-blue-500/30");
      setTimeout(() => {
        element.classList.remove("ring-4", "ring-blue-500/30");
      }, 2000);
    }
  };

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
      <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-white rounded-3xl border border-slate-100 shadow-2xl p-8 flex flex-col">
         {/* Browser-like header */}
         <div className="flex items-center gap-2 mb-8">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
         </div>
         
         <div className="flex-1 flex flex-col items-center">
            <h4 className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4 text-center w-full">Top performing courses</h4>
            
            <div className="relative flex-1 bg-slate-50/50 rounded-2xl border border-slate-100 p-6 overflow-hidden">
               <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex flex-col items-center text-center justify-center h-full gap-4"
                  >
                    <button 
                      onClick={() => scrollToCourse(currentCourse.slug)}
                      className="w-20 h-20 bg-white rounded-2xl shadow-xl shadow-blue-500/10 flex items-center justify-center text-4xl border border-blue-50 transition-transform active:scale-90"
                    >
                      {currentCourse.icon}
                    </button>
                    <div>
                       <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">{currentCourse.domain}</div>
                       <h5 className="text-lg font-black text-slate-900 leading-tight">{currentCourse.title}</h5>
                    </div>
                  </motion.div>
               </AnimatePresence>
            </div>
         </div>

         <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="flex gap-1.5 pl-8">
               {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
               ))}
            </div>
            <button 
              onClick={() => {
                const el = document.getElementById('program-database');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
            >
              Explore all courses
            </button>
         </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center animate-bounce duration-[3s] z-20">
         <Rocket className="w-8 h-8 text-blue-500" />
      </div>
      <div className="absolute bottom-4 left-0 w-16 h-16 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center animate-bounce duration-[4s] z-20">
         <Users className="w-8 h-8 text-blue-500" />
      </div>
    </div>
  );
}

export default function ProgramsListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  
  const domains = useMemo(() => ["All", ...Object.keys(programsData)], []);

  const allCourses = useMemo(() => 
    Object.keys(programsData).flatMap(cat => 
      programsData[cat].map(prog => ({ ...prog, category: cat }))
    ), 
  []);

  const filteredCourses = useMemo(() => {
    return allCourses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTab = activeTab === "All" || course.category === activeTab;
      return matchesSearch && matchesTab;
    });
  }, [allCourses, searchQuery, activeTab]);

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero Header - Light Theme Grid */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden border-b border-slate-100">
        <Spotlight />
        
        {/* Grid Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Mentor" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-[13px] font-bold text-slate-500">
                  PARTNERED WITH <span className="text-blue-600">5K+ MENTORS</span>
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]"
              >
                Browse All Certification <br />
                <span className="text-blue-600">Programs.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed mb-10"
              >
                Transform your career with Quillance. We align education with industry demands through skill development and credible certifications to build future-ready pros.
              </motion.p>

              {/* Search & Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl"
              >
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input 
                    type="text"
                    placeholder="Search 'Data Science'..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                  />
                </div>
                <button 
                  onClick={() => window.open("https://forms.gle/8a2iEXN8wFw4TDDx8", "_blank")}
                  className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                >
                  Talk to Career Expert
                </button>
              </motion.div>

              {/* Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10"
              >
                {[
                  { icon: CheckCircle2, text: "Skill based learning" },
                  { icon: Briefcase, text: "Internship + projects" },
                  { icon: Globe, text: "Industry verified certificate" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                    <item.icon className="w-4 h-4 text-blue-500" />
                    {item.text}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Side Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block flex-1 relative"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notion-style Filter & List */}
      <section id="program-database" className="max-w-7xl mx-auto px-4 pt-12 pb-2 scroll-mt-20">
        <div className="mb-10 text-center lg:text-left">
           <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">Choose Your <span className="text-blue-600">Program.</span></h2>
           <p className="text-slate-500 font-bold">Discover your path with our curated list of expert-led courses.</p>
        </div>
        {/* Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-100 mb-10 overflow-x-auto no-scrollbar pb-2">
          {domains.map((domain) => (
            <button
              key={domain}
              onClick={() => setActiveTab(domain)}
              className={cn(
                "px-4 py-3 text-sm font-bold transition-all whitespace-nowrap relative flex items-center gap-2.5",
                activeTab === domain ? "text-blue-600" : "text-slate-400 hover:text-slate-600"
              )}
            >
              <span className={cn(
                "transition-colors",
                activeTab === domain ? "text-blue-600" : "text-slate-300"
              )}>
                {domainIcons[domain]}
              </span>
              {domain}
              {activeTab === domain && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                />
              )}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={course.title}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredCourses.length === 0 && (
          <div className="py-20 text-center text-slate-400 font-bold">
            No courses found matching your criteria.
          </div>
        )}
      </section>

      {/* CTA Section */}
      <CallToAction className="pt-8 pb-10" />
    </main>
  );
}

function CourseCard({ course }: { course: any }) {
  const slug = course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  return (
    <Link 
      id={`course-${slug}`}
      href={`/programs/${slug}`}
      className="group flex flex-col bg-white rounded-3xl border border-slate-100 p-6 transition-all hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 h-full relative scroll-mt-24"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-blue-50 transition-colors">
          {course.icon}
        </div>
        <div className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 text-[9px] font-black uppercase tracking-widest">
          {course.category}
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
        {course.title}
      </h3>
      <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 line-clamp-2">
        {course.desc}
      </p>

      <div className="flex items-center gap-2 mb-6 mt-auto">
        <span className="px-2 py-0.5 bg-slate-50 text-slate-600 rounded text-[10px] font-bold border border-slate-100">{course.b1}</span>
        <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-[10px] font-bold border border-blue-100">{course.b2}</span>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-50 text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
        <span>View Details</span>
        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
