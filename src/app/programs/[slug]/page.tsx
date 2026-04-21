import React from "react";
import { programsData } from "@/data/programs";
import { ProgramHero } from "@/app/sections/programs/ProgramHero" ;
import { PricingSection } from "@/components/shared/PricingSection";
import { CertRecogSlider } from "@/components/shared/CertRecogSlider";
import { CurriculumSection } from "@/components/shared/CurriculumSection";
import { curriculumData } from "@/data/curriculum";
import { EnrollButton } from "./EnrollButton";

export async function generateStaticParams() {
  return Object.keys(curriculumData).map((slug) => ({
    slug: slug,
  }));
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Find program by slug
  let programMatch = null;
  
  for (const category in programsData) {
    const found = programsData[category].find(p => 
      p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
    );
    if (found) {
      programMatch = found;
      break;
    }
  }

  if (!programMatch) {
    return (
      <div className="flex-1 flex items-center justify-center bg-slate-50 min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Program Not Found</h1>
          <p className="text-slate-600">Please check the URL or browse our other programs.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <article>
        <ProgramHero title={programMatch.title} desc={programMatch.desc} />
        
        {/* Course Highlights Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#0f172a] shadow-sm inline-block border-l-4 border-blue-600 pl-4 bg-blue-50/50 py-2 pr-6 rounded-r-lg">
                Program Highlights
              </h2>
              <p className="text-[#475569] leading-relaxed font-medium">
                Our {programMatch.title} program is meticulously designed by industry experts to ensure you gain practical, 
                hands-on experience. We focus on outcome-based learning that bridges the gap between academics and the professional world.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Industry-aligned curriculum", 
                  "Live projects & case studies", 
                  "Dedicated placement support", 
                  "Mentorship from top professionals",
                  "Verified Certifications",
                  "Lifetime community access"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-neutral-50 p-3 rounded-xl border border-neutral-100 hover:border-blue-200 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-[#0f172a] font-semibold text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
               <div className="relative bg-white p-10 rounded-[2rem] border border-slate-100 flex flex-col items-center justify-center space-y-6">
                  <div className="text-6xl">{programMatch.icon}</div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{programMatch.title}</h3>
                    <p className="text-sm text-slate-500 italic max-w-xs mx-auto">Detailed curriculum and roadmap for this course will be shared via our learning management systems after enrollment.</p>
                  </div>
                  <EnrollButton />
                </div>
             </div>
           </div>
        </section>
        <CurriculumSection slug={slug} />
        <CertRecogSlider />
        <PricingSection />
      </article>
    </div>
  );
}
