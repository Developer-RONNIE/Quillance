import React from "react";
import { ArrowRight } from "lucide-react";

export const CareersHero = () => {
  return (
    <div className="relative w-full pt-8 pb-12 pl-8 sm:pl-16 lg:pl-24 pr-4 sm:pr-8 lg:pr-12 bg-white border-b border-slate-100 overflow-hidden">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Headlines */}
        <div className="flex flex-col items-start z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50/50 text-sm font-bold text-blue-600 mb-6 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            Hiring across India · 4 open roles
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-[#104382] tracking-tight leading-[1.05] mb-6">
            Careers at <br /><span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Quillance</span>
          </h1>

          <p className="text-lg text-slate-500 mb-8 max-w-lg font-medium leading-relaxed">
            Join a fast-growing team building career-first learning for
            students and early-career professionals across India.
          </p>

          <div className="flex flex-wrap gap-2">
            {["Business Development", "Human Resources", "Digital Marketing", "Operations"].map((dept) => (
              <span
                key={dept}
                className="px-4 py-1.5 rounded-full border border-slate-100 text-[12px] text-slate-500 bg-slate-50/50 font-bold uppercase tracking-wide"
              >
                {dept}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Why Work With Us Card (FAQ Themed) */}
        <div className="relative z-10 w-full max-w-lg mx-auto lg:ml-auto">
          <div className="relative bg-[#104382] p-10 lg:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden text-white group">
            {/* Background Gradient Animation like FAQ */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-[#104382] opacity-90" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-all duration-1000" />

            <div className="relative z-10">
              <span className="text-[10px] font-black tracking-[0.3em] text-blue-300 uppercase mb-6 block opacity-80">
                WHY WORK WITH US
              </span>
              <h2 className="text-3xl font-black mb-6 leading-tight">
                Build with mentors, <br />solve real problems.
              </h2>
              <p className="text-blue-100/70 text-base font-medium leading-relaxed mb-8">
                Work directly with founding & product teams, ship fast, and watch your work impact thousands of learners.
              </p>

              <ul className="space-y-4 mb-10 w-full">
                {[
                  "High-ownership roles & steep learning curve",
                  "Fast feedback, modern stack & tools",
                  "Mentorship, learning credits & growth path",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 group/item">
                    <div className="w-5 h-5 rounded-lg bg-blue-500/30 flex items-center justify-center border border-white/10 group-hover/item:bg-blue-500 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    <span className="text-sm font-bold text-blue-50">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-[#104382] font-black py-4 px-8 rounded-2xl flex items-center gap-2 hover:scale-105 transition-all shadow-xl shadow-blue-950/20 uppercase tracking-widest text-xs"
              >
                View Open Roles
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-8 pt-6 border-t border-white/10 w-full text-center">
                <span className="text-[10px] font-bold text-blue-300/50 uppercase tracking-widest">Built for learners • Powered by builders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
