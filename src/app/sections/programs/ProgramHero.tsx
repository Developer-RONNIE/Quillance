"use client";
import React from "react";
import { GridBackgroundDemo } from "@/components/grid-background-demo";
import { Spotlight } from "@/components/ui/spotlight-new";
import { OrbitalTechStack } from "@/components/shared/OrbitalTechStack";
import { ActionButtons } from "../home/ActionButtons";
import { FeatureBadges } from "../home/FeatureBadges";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const mentors = [
  {
    id: 1,
    name: "Alex Rivera",
    designation: "Senior Dev at Google",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "Sarah Chen",
    designation: "Product Lead at Meta",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "Marcus Thorne",
    designation: "Tech Architect at Amazon",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
  },
];

export function ProgramHero({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex flex-col w-full">
      <GridBackgroundDemo className="h-full w-full py-8 md:py-14 lg:pt-16 lg:pb-10 relative overflow-hidden">
        
        {/* Spotlight Effect behind text */}
        <Spotlight />

        {/* Main Content Container matching the image layout */}
        <div className="w-full max-w-[88rem] mx-auto px-4 sm:px-6 md:px-8 relative z-50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-7">
              {/* Tooltip Badge */}
              <div className="flex flex-row items-center gap-6 mb-2">
                <div className="flex flex-row items-center">
                  <AnimatedTooltip 
                    items={mentors} 
                    imageClassName="!h-9 !w-9 sm:!h-10 sm:!w-10"
                  />
                </div>
                <p className="text-[#475569] text-[13px] sm:text-[15px] font-medium uppercase tracking-tight">
                  Trusted by <span className="text-[#1d4ed8] font-black">10K+ STUDENTS</span>
                </p>
              </div>

              {/* Heading */}
              <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.2rem] xl:text-[3.8rem] font-bold text-[#0f172a] leading-[1.1] tracking-tight">
                {title}
              </h1>
              
              {/* Description */}
              <p className="text-[#475569] text-[15px] sm:text-lg leading-relaxed max-w-2xl font-medium">
                {desc}. Elevate your career with Quillance's industry-aligned expertise and certification.
              </p>

              <div className="flex flex-col space-y-4 md:space-y-5">
                <ActionButtons 
                  secondaryLabel="Explore curriculum"
                  onSecondaryClick={() => document.getElementById('curriculum-section')?.scrollIntoView({ behavior: 'smooth' })}
                />
                <FeatureBadges />
              </div>
            </div>

            {/* Right Column: Orbital Animation */}
            <div className="lg:col-span-5 hidden lg:flex justify-center items-center">
               <OrbitalTechStack />
            </div>
          </div>
        </div>
      </GridBackgroundDemo>
    </div>
  );
}
