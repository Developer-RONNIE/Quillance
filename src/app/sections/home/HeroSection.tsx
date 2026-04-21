import React from "react";
import { GridBackgroundDemo } from "@/components/grid-background-demo";
import { Spotlight } from "@/components/ui/spotlight-new";
import { HeroHeading } from "./HeroHeading";
import { SearchBar } from "./SearchBar";
import { ActionButtons } from "./ActionButtons";
import { FeatureBadges } from "./FeatureBadges";
import { NextBatchPill } from "./NextBatchPill";
import { OrbitalTechStack } from "@/components/shared/OrbitalTechStack";

export function HeroSection() {
  return (
    <div className="flex flex-col w-full">
      {/* We constrain the height and adjust padding to not have too much empty space at bottom */}
      <GridBackgroundDemo className="h-full w-full py-6 md:py-10 lg:pt-8 lg:pb-8 relative overflow-hidden">
        
        {/* Spotlight Effect behind text */}
        <Spotlight />

        {/* Main Content Container matching the image layout */}
        <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 relative z-50">
          
          {/* Left Column Content (Takes up 8 columns on large screens for more breathing room) */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-6 md:space-y-7 py-8 lg:py-12">
            <HeroHeading />
            <div className="flex flex-col space-y-4 md:space-y-5">
              <SearchBar />
              <ActionButtons />
              <FeatureBadges />
            </div>
          </div>

          {/* Right Column Content - Tech Animation & Batch Info */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end relative pt-6 lg:pt-0 lg:translate-y-[-20px]">
            {/* Animation moved significantly up */}
            <div className="w-full max-w-[420px] scale-[0.8] xl:scale-[0.85] origin-center lg:origin-right lg:translate-x-4 lg:translate-y-[-40px]">
              <OrbitalTechStack hideBgOrbit={true} />
            </div>
            
            {/* Batch Pill - precisely aligned with Explore Programs buttons */}
            <div className="w-full flex justify-center lg:justify-end mt-[-100px] pr-4 sm:pr-8 lg:pr-14 relative z-20 lg:translate-y-[15px]">
              <div className="scale-[0.8] origin-right">
                <NextBatchPill />
              </div>
            </div>
          </div>

        </div>
      </GridBackgroundDemo>
    </div>
  );
}
