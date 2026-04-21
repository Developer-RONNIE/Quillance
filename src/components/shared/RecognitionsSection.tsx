import React from "react";
import { Sparkles } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const recognitions = [
  {
    title: "Startup India",
    subtitle: "DPIIT Recognized",
    description: "Officially recognized by the Department for Promotion of Industry and Internal Trade.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "ISO 9001:2015",
    subtitle: "Quality Certified",
    description: "Certified for maintaining world-class quality management systems in education.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "MSME Certified",
    subtitle: "Govt. of India",
    description: "Registered under the Ministry of Micro, Small & Medium Enterprises.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export const RecognitionsSection = () => {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 font-semibold text-sm mb-6 uppercase">
          <Sparkles className="w-4 h-4" />
          Our Recognitions
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
          VALIDATED BY THE INDUSTRY.<br />
          <span className="text-blue-400">APPROVED BY THE GOVERNMENT.</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
          We are proud to be a DPIIT-recognized startup, backed by ISO 9001:2015 certification to deliver world-class, quality-controlled professional training.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
          {recognitions.map((recognition, idx) => (
            <CometCard key={idx} className="w-full max-w-sm mx-auto h-[400px]">
              <div className="h-full w-full rounded-2xl bg-white border border-slate-200 shadow-sm p-8 flex flex-col justify-between overflow-hidden relative group">
                {/* Background Glow */}
                <div
                  className={`absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br ${recognition.gradient} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${recognition.gradient} p-0.5 mb-8`}>
                    <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center shadow-inner">
                      <Sparkles className="w-8 h-8 text-slate-700" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {recognition.title}
                  </h3>
                  <div className="text-sm font-medium text-blue-600 mb-6">
                    {recognition.subtitle}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {recognition.description}
                  </p>
                </div>

                {/* Certificate Placeholder / Image area */}
                <div className="relative z-10 mt-8 pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>Certificate Details</span>
                    <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">Verified</span>
                  </div>
                </div>
              </div>
            </CometCard>
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/30 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/30 blur-[120px]" />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <StarsBackground />
        <ShootingStars />
      </div>
    </section>
  );
};
