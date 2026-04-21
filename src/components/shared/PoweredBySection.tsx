"use client";

import React from "react";
import { ImagesBadge } from "@/components/ui/images-badge";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";

const poweredByLogos = [
  "AWS.png",
  "Cashfree.jpg",
  "Clerk.png",
  "Google Cloud.png",
  "Hostinge.png",
  "Meta.jpg",
  "MongoDB.png",
  "Razorpay.png",
  "bb_Appwrite.png",
];

const topRow = poweredByLogos.slice(0, 5);
const bottomRow = poweredByLogos.slice(5);

const LogoItem = ({ filename }: { filename: string }) => {
  const altText = filename.replace(/\.[^/.]+$/, "").replace(/_/g, " ");

  return (
    <div className="w-[180px] md:w-[220px] h-20 md:h-24 shrink-0 flex items-center justify-center bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 mx-3 px-6 group">
      <img
        src={`/Powered_by_logo/${filename}`}
        alt={`${altText} logo`}
        className="max-h-10 md:max-h-14 max-w-full object-contain transition-all duration-500 shrink-0 group-hover:scale-110"
        loading="lazy"
      />
    </div>
  );
};

export const PoweredBySection = () => {
  return (
    <section className="bg-slate-950 overflow-hidden relative border-t border-slate-900 pt-32 md:pt-48 pb-24 min-h-[800px] flex flex-col items-center">
      {/* Task: Aceternity Spotlight Background Effect - Enhanced with two light sources */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw] opacity-10"
        fill="white"
      />

      {/* Task: Small Grid Background Overlay */}
      <div
        className={cn(
          "absolute inset-0 z-0 opacity-30",
          "[background-size:30px_30px]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      
      {/* Radial gradient mask to fade the grid edges */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-slate-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Heading and Metadata Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 mb-20">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-slate-50 to-slate-400 tracking-tight uppercase leading-[1.1] mb-6">
          POWERED BY <span className="text-blue-500">TOP-TIER TECH</span>
        </h2>
        
        <p className="text-lg md:text-xl text-slate-400 font-medium tracking-tight whitespace-nowrap lg:whitespace-nowrap max-w-4xl mx-auto">
          A secure, high-stability platform designed to deliver curriculum with zero interruptions.
        </p>
      </div>

      {/* Massive Folder and Marquee Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            
            {/* Left Div: Massive Tech Stack Folder with Optimized Smaller Cards */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <ImagesBadge
                text="Our Tech Stack Assets"
                direction="vertical"
                imagesBehind={true}
                images={[
                  "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Chart%20Increasing.png",
                  "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Locked%20with%20Key.png",
                ]}
                className="bg-slate-900/50 backdrop-blur-md border border-slate-800 px-12 py-10 rounded-3xl shadow-2xl hover:border-blue-500/50 transition-all duration-300 w-full max-w-[340px]"
                folderSize={{ width: 175, height: 135 }}
                teaserImageSize={{ width: 90, height: 68 }}
                hoverImageSize={{ width: 192, height: 192 }}
                hoverTranslateY={-100}
                hoverSpread={120}
              />
            </div>

            {/* Right Div: Brand Marquees */}
            <div className="lg:col-span-8 relative flex flex-col gap-8 overflow-hidden">
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-4">
                {[...topRow, ...topRow, ...topRow].map((filename, idx) => (
                  <LogoItem key={`top-${idx}`} filename={filename} />
                ))}
              </div>

              <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] py-4">
                {[...bottomRow, ...bottomRow, ...bottomRow].map((filename, idx) => (
                  <LogoItem key={`bottom-${idx}`} filename={filename} />
                ))}
              </div>
              
              {/* Horizontal Fades */}
              <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
