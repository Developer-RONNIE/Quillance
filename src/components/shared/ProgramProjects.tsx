"use client";

import React from "react";
import CardSwap, { Card } from "@/components/ui/CardSwap";

interface Project {
  title: string;
  imagePath: string;
  urlMock: string;
}

const programProjectsMap: Record<string, Project[]> = {
  // CSE
  "full-stack-development": [
    { title: "Project 1", imagePath: "/Course Program/Computer Science & IT/Full Stack Development-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Computer Science & IT/Full Stack Development-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Computer Science & IT/Full Stack Development-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Computer Science & IT/Full Stack Development-4.png", urlMock: "PROJECT 4" }
  ],
  "web-development": [
    { title: "Project 1", imagePath: "/Course Program/Computer Science & IT/Web Development-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Computer Science & IT/Web Development-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Computer Science & IT/Web Development-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Computer Science & IT/Web Development-4.png", urlMock: "PROJECT 4" }
  ],
  "cybersecurity": [
    { title: "Project 1", imagePath: "/Course Program/Computer Science & IT/Cybersecurity-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Computer Science & IT/Cybersecurity-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Computer Science & IT/Cybersecurity-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Computer Science & IT/Cybersecurity-4.png", urlMock: "PROJECT 4" }
  ],
  "gen-ai-agentic-ai": [
    { title: "Project 1", imagePath: "/Course Program/Computer Science & IT/Gen Agentic AI-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Computer Science & IT/Gen Agentic AI-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Computer Science & IT/Gen Agentic AI-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Computer Science & IT/Gen Agentic AI-4.png", urlMock: "PROJECT 4" }
  ],
  "artificial-intelligence-machine-learning": [
    { title: "Project 1", imagePath: "/Course Program/Computer Science & IT/AI and ML-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Computer Science & IT/AI and ML-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Computer Science & IT/AI and ML-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Computer Science & IT/AI and ML-4.png", urlMock: "PROJECT 4" }
  ],
  "data-science": [
    { title: "Project 1", imagePath: "/Course Program/Computer Science & IT/DataScience-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Computer Science & IT/DataScience-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Computer Science & IT/DataScience-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Computer Science & IT/DataScience-4.png", urlMock: "PROJECT 4" }
  ],
  "data-analytics": [
    { title: "Project 1", imagePath: "/Course Program/Computer Science & IT/Data Analytics-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Computer Science & IT/Data Analytics-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Computer Science & IT/Data Analytics-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Computer Science & IT/Data Analytics-4.png", urlMock: "PROJECT 4" }
  ],
  "software-testing-quality-assurance-qa": [
    { title: "Project 1", imagePath: "/Course Program/Computer Science & IT/Software Testing-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Computer Science & IT/Software Testing-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Computer Science & IT/Software Testing-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Computer Science & IT/Software Testing-4.png", urlMock: "PROJECT 4" }
  ],
  "software-testing-quality-assurance-qa-": [
    { title: "Project 1", imagePath: "/Course Program/Computer Science & IT/Software Testing-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Computer Science & IT/Software Testing-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Computer Science & IT/Software Testing-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Computer Science & IT/Software Testing-4.png", urlMock: "PROJECT 4" }
  ],
  "cloud-computing": [
    { title: "Project 1", imagePath: "/Course Program/Computer Science & IT/Cloud Computing-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Computer Science & IT/Cloud Computing-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Computer Science & IT/Cloud Computing-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Computer Science & IT/Cloud Computing-4.png", urlMock: "PROJECT 4" }
  ],

  // Mechanical
  "autocad-mechanical": [
    { title: "Project 1", imagePath: "/Course Program/Mechanical Engineering/AutoCAD Mechanical-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Mechanical Engineering/AutoCAD Mechanical-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Mechanical Engineering/AutoCAD Mechanical-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Mechanical Engineering/AutoCAD Mechanical-4.png", urlMock: "PROJECT 4" }
  ],
  "hybrid-electric-vehicles": [
    { title: "Project 1", imagePath: "/Course Program/Mechanical Engineering/Hybrid & Electric Vehicles-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Mechanical Engineering/Hybrid & Electric Vehicles-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Mechanical Engineering/Hybrid & Electric Vehicles-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Mechanical Engineering/Hybrid & Electric Vehicles-4.png", urlMock: "PROJECT 4" }
  ],

  // Civil
  "autocad-civil": [
    { title: "Project 1", imagePath: "/Course Program/Civil Engineering/AutoCAD Civil-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Civil Engineering/AutoCAD Civil-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Civil Engineering/AutoCAD Civil-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Civil Engineering/AutoCAD Civil-4.png", urlMock: "PROJECT 4" }
  ],
  "construction-planning-designing": [
    { title: "Project 1", imagePath: "/Course Program/Civil Engineering/Construction Planning-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Civil Engineering/Construction Planning-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Civil Engineering/Construction Planning-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Civil Engineering/Construction Planning-4.png", urlMock: "PROJECT 4" }
  ],

  // Electrical
  "embedded-systems": [
    { title: "Project 1", imagePath: "/Course Program/Electrical Engineering/Embedded Systems-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Electrical Engineering/Embedded Systems-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Electrical Engineering/Embedded Systems-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Electrical Engineering/Embedded Systems-4.png", urlMock: "PROJECT 4" }
  ],
  "internet-of-things-iot": [
    { title: "Project 1", imagePath: "/Course Program/Electrical Engineering/Internet of Things-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Electrical Engineering/Internet of Things-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Electrical Engineering/Internet of Things-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Electrical Engineering/Internet of Things-4.png", urlMock: "PROJECT 4" }
  ],
  "internet-of-things-iot-": [
    { title: "Project 1", imagePath: "/Course Program/Electrical Engineering/Internet of Things-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Electrical Engineering/Internet of Things-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Electrical Engineering/Internet of Things-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Electrical Engineering/Internet of Things-4.png", urlMock: "PROJECT 4" }
  ],

  // Management
  "digital-marketing": [
    { title: "Project 1", imagePath: "/Course Program/Management & Business/Digital Marketing-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Management & Business/Digital Marketing-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Management & Business/Digital Marketing-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Management & Business/Digital Marketing-4.png", urlMock: "PROJECT 4" }
  ],
  "finance": [
    { title: "Project 1", imagePath: "/Course Program/Management & Business/Finance-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Management & Business/Finance-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Management & Business/Finance-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Management & Business/Finance-4.png", urlMock: "PROJECT 4" }
  ],
  "human-resource-management-hr": [
    { title: "Project 1", imagePath: "/Course Program/Management & Business/Human Resource Management-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Management & Business/Human Resource Management-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Management & Business/Human Resource Management-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Management & Business/Human Resource Management-4.png", urlMock: "PROJECT 4" }
  ],
  "human-resource-management-hr-": [
    { title: "Project 1", imagePath: "/Course Program/Management & Business/Human Resource Management-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Management & Business/Human Resource Management-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Management & Business/Human Resource Management-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Management & Business/Human Resource Management-4.png", urlMock: "PROJECT 4" }
  ],
  "international-business-management": [
    { title: "Project 1", imagePath: "/Course Program/Management & Business/International Business Management-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Management & Business/International Business Management-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Management & Business/International Business Management-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Management & Business/International Business Management-4.png", urlMock: "PROJECT 4" }
  ],
  "product-management": [
    { title: "Project 1", imagePath: "/Course Program/Management & Business/Product Management-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Management & Business/Product Management-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Management & Business/Product Management-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Management & Business/Product Management-4.png", urlMock: "PROJECT 4" }
  ],
  "stock-market-and-crypto-currency": [
    { title: "Project 1", imagePath: "/Course Program/Management & Business/Stock Market-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Management & Business/Stock Market-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Management & Business/Stock Market-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Management & Business/Stock Market-4.png", urlMock: "PROJECT 4" }
  ],
  "business-analytics": [
    { title: "Project 1", imagePath: "/Course Program/Management & Business/Business Analytics-1.png", urlMock: "PROJECT 1" },
    { title: "Project 2", imagePath: "/Course Program/Management & Business/Business Analytics-2.png", urlMock: "PROJECT 2" },
    { title: "Project 3", imagePath: "/Course Program/Management & Business/Business Analytics-3.png", urlMock: "PROJECT 3" },
    { title: "Project 4", imagePath: "/Course Program/Management & Business/Business Analytics-4.png", urlMock: "PROJECT 4" }
  ]
};

// Default fallback list
const defaultProjects: Project[] = [
  { title: "Project 1", imagePath: "/Course Program/Computer Science & IT/Web Development-1.png", urlMock: "PROJECT 1" },
  { title: "Project 2", imagePath: "/Course Program/Computer Science & IT/Web Development-2.png", urlMock: "PROJECT 2" },
  { title: "Project 3", imagePath: "/Course Program/Computer Science & IT/Web Development-3.png", urlMock: "PROJECT 3" },
  { title: "Project 4", imagePath: "/Course Program/Computer Science & IT/Web Development-4.png", urlMock: "PROJECT 4" }
];

export function ProgramProjects({ slug }: { slug: string }) {
  // Normalize slug
  const cleanSlug = slug.endsWith("-") ? slug.slice(0, -1) : slug;
  const projects = programProjectsMap[cleanSlug] || defaultProjects;

  // Unified metadata description
  const description = "At Quillance, we carefully pick projects that align with industry needs. Our expert mentors will guide you from core concepts to final deployment, ensuring you build high-quality solutions to boost your professional portfolio.";

  return (
    <section className="py-8 md:py-16 lg:py-20 lg:min-h-screen flex flex-col justify-center bg-slate-50/50 border-y border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-start gap-8 md:gap-12 lg:gap-16">
        
        {/* Top: Section Header & Full-Width Metadata Description */}
        <div className="w-full flex flex-col items-center sm:items-start text-center sm:text-left space-y-3 shrink-0">
          {/* Title - Parallel Left Alignment on desktop, centered on mobile */}
          <h2 className="text-3xl font-bold text-[#0f172a] shadow-sm inline-block border-l-4 border-blue-600 pl-4 bg-blue-50/50 py-2 pr-6 rounded-r-lg select-none mx-auto sm:mx-0">
            Program Projects
          </h2>
          
          {/* Full-width metadata description paragraph - Centered on mobile, left-aligned on desktop */}
          <p className="text-slate-600 text-sm md:text-base lg:text-lg font-medium leading-relaxed w-full max-w-none text-center sm:text-left">
            {description}
          </p>
        </div>

        {/* Bottom: Natural block flow Cards Deck Area with custom responsive vertical padding gaps */}
        <div className="w-full flex items-center justify-center overflow-visible">
          <div className="relative overflow-visible flex items-center justify-center pt-8 sm:pt-12 lg:pt-16 pb-4 h-[220px] sm:h-[280px] lg:h-[450px] w-full max-w-[640px]">
            <CardSwap 
              width={640} 
              height={389} 
              cardDistance={25} 
              verticalDistance={20}
              delay={4000} 
              pauseOnHover={true}
            >
              {projects.map((proj, idx) => (
                <Card 
                  key={idx} 
                  className="w-[640px] h-[389px] flex flex-col justify-between border-slate-800 bg-slate-950 p-0 text-white overflow-hidden shadow-2xl relative transition-shadow duration-300 hover:shadow-blue-500/10"
                >
                  {/* Absolute Glow and Grids */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-0"></div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-lg z-0"></div>

                  {/* macOS Mockup Window Header */}
                  <div className="h-8 bg-slate-900 rounded-t-2xl flex items-center px-4 gap-1.5 border-b border-slate-800 relative z-10 shrink-0">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <div className="text-[10px] font-mono text-slate-400 mx-auto select-none bg-slate-950/60 px-4 py-0.5 rounded border border-slate-800/40 truncate max-w-[200px] text-center font-bold tracking-wider">
                      {proj.urlMock}
                    </div>
                  </div>

                  {/* Centered Image (Uses object-cover to completely eliminate left/right borders and match dimensions edge-to-edge) */}
                  <div className="flex-1 w-full h-full relative z-10 overflow-hidden bg-slate-950 rounded-b-2xl">
                    <img 
                      src={proj.imagePath} 
                      alt={proj.title} 
                      className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 hover:scale-[1.01]"
                    />
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>

      </div>
    </section>
  );
}
