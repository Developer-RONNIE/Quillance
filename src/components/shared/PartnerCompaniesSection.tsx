"use client";

import React, { useRef, useEffect } from "react";
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { PixelCard } from "@/components/ui/pixel-card";

const companyLogos = [
  "Accenture.png",
  "Adidas.png",
  "Allianz.png",
  "Alphabet Inc. (Google).png",
  "Amazon_2024.png",
  "Apple.png",
  "BMW.png",
  "Bayer.png",
  "Berkshire Hathaway.png",
  "Bosch.png",
  "Central-warehousing-corporation-logo.png",
  "Container_Corporation_of_India_logo.svg.png",
  "Deloitte.png",
  "Deutsche Telekom.png",
  "Google.png",
  "HAL.png",
  "HDFC Bank.png",
  "Hindustan_Petroleum_Logo.png",
  "IBM.png",
  "ICICI Bank.png",
  "Indian_Renewable_Energy_Development_Agency_Limited_(IREDA).png",
  "Infosys.png",
  "Intel_logo_2023.png",
  "Ircon_International.png",
  "JPMorgan Chase.png",
  "Johnson & Johnson.png",
  "Larsen & Toubro (L&T).png",
  "MTNL.png",
  "Mercedes-Benz Group.png",
  "Meta.png",
  "Microsoft_logo.png",
  "NALCO.png",
  "NBCC (India) Limited.png",
  "NLC India Limited.png",
  "NMDC Limited.png",
  "NVIDIA.png",
  "National_Fertilizers_Logo.png",
  "National_Thermal_Power.png",
  "ONGC.png",
  "Oracle.png",
  "Power_Grid_Corporation_of_India_Logo.png",
  "RINL (Rashtriya Ispat Nigam Limited).png",
  "RITES_green_logo.png",
  "Rashtriya Chemicals & Fertilisers (RCF).png",
  "Reliance Industries.png",
  "RvnlLOGO.png",
  "SAP.png",
  "Samsung_Black_icon.png",
  "Shipping_Corporation_of_India_Logo.svg.png",
  "Siemens.png",
  "State Bank of India (SBI).png",
  "Tata Consultancy Services (TCS).png",
  "Tata Motors.png",
  "Tesla.png",
  "Volkswagen Group.png",
  "logo of airtel.png"
];

const LogoItem = ({ filename, isGrid }: { filename: string; isGrid?: boolean }) => {
  const altText = filename.replace(/\.[^/.]+$/, "").replace(/_/g, " ");

  return (
    <div className={cn(
      "shrink-0 flex items-center justify-center bg-white border border-slate-100 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 group",
      isGrid ? "w-full h-24 p-6" : "w-[200px] h-20 mx-3 px-5"
    )}>
      <Image
        src={`/Partnered_Companies_logos/${encodeURIComponent(filename)}`}
        alt={`${altText} logo`}
        width={150}
        height={56}
        className={cn(
          "max-h-14 max-w-full object-contain transition-all duration-300 shrink-0 group-hover:scale-105",
          filename.toLowerCase().includes("accenture") && "scale-125"
        )}
        loading="lazy"
      />
    </div>
  );
};

const CompactLogoItem = ({ filename }: { filename: string }) => {
  const altText = filename.replace(/\.[^/.]+$/, "").replace(/_/g, " ");

  return (
    <div className="shrink-0 w-32 h-16 mx-2 px-3 flex items-center justify-center bg-white border border-slate-100 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.015)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 hover:border-blue-200 transition-all duration-300 group select-none">
      <Image
        src={`/Partnered_Companies_logos/${encodeURIComponent(filename)}`}
        alt={`${altText} logo`}
        width={96}
        height={36}
        className="max-h-9 max-w-full object-contain transition-all duration-300 shrink-0 group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
};

const LogoLoop = ({ logos }: { logos: string[] }) => {
  const row1 = logos.slice(0, 20);
  const row2 = logos.slice(20, 40);
  const row3 = logos.slice(40, 60);

  return (
    <div className="relative flex flex-col gap-4 w-full overflow-hidden mask-horizontal-fades py-4">
      {/* Edge Fade Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      {/* Row 1: Left scrolling */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-1">
        {[...row1, ...row1].map((filename, idx) => (
          <CompactLogoItem key={`row1-${idx}`} filename={filename} />
        ))}
      </div>

      {/* Row 2: Right scrolling */}
      <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] py-1">
        {[...row2, ...row2].map((filename, idx) => (
          <CompactLogoItem key={`row2-${idx}`} filename={filename} />
        ))}
      </div>

      {/* Row 3: Left scrolling */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-1">
        {[...row3, ...row3].map((filename, idx) => (
          <CompactLogoItem key={`row3-${idx}`} filename={filename} />
        ))}
      </div>
    </div>
  );
};

const MagnetLines = ({
  rows = 9,
  columns = 9,
  containerSize = "100%",
  lineColor = "#3b82f6",
  lineWidth = "2px",
  lineHeight = "20px",
  baseAngle = 0,
}: {
  rows?: number;
  columns?: number;
  containerSize?: string;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const lines = container.querySelectorAll<HTMLDivElement>(".magnet-line");
      
      lines.forEach((line) => {
        const lineRect = line.getBoundingClientRect();
        const centerX = lineRect.left + lineRect.width / 2;
        const centerY = lineRect.top + lineRect.height / 2;
        
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const angleDeg = (angle * 180) / Math.PI + baseAngle;
        line.style.transform = `rotate(${angleDeg}deg)`;
      });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [baseAngle]);

  return (
    <div
      ref={containerRef}
      style={{
        width: containerSize,
        height: containerSize,
        display: "grid",
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
      className="relative w-full h-full justify-items-center items-center gap-1 select-none"
    >
      {Array.from({ length: rows * columns }).map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-center w-full h-full"
        >
          <div
            className="magnet-line transition-transform duration-100 ease-out"
            style={{
              width: lineWidth,
              height: lineHeight,
              backgroundColor: lineColor,
              borderRadius: "9999px",
              transform: `rotate(${baseAngle}deg)`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

interface PartnerCompaniesSectionProps {
  layout?: "marquee" | "grid";
  className?: string;
  theme?: "light" | "dark";
}

export const PartnerCompaniesSection = ({ 
  layout = "marquee", 
  className,
  theme = "light"
}: PartnerCompaniesSectionProps) => {
  const topRow = companyLogos.slice(0, 28);
  const bottomRow = companyLogos.slice(28, 56);

  return (
    <section className={cn(
      "py-12 lg:py-24 relative overflow-hidden",
      theme === "dark" ? "bg-[#0f172a]" : "bg-gradient-to-b from-white to-slate-50/50",
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 lg:mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-700 font-semibold text-sm mb-6 uppercase">
          <Briefcase className="w-4 h-4" />
          Our Partner Companies
        </div>
        <h2 className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 uppercase",
          theme === "dark" ? "text-white" : "text-slate-900"
        )}>
          UPSKILL WITH THE WORLD&apos;S <span className="text-blue-600">TOP 1%</span>
        </h2>
        <p className={cn(
          "text-lg md:text-xl max-w-4xl lg:whitespace-nowrap mx-auto leading-relaxed",
          theme === "dark" ? "text-slate-400" : "text-slate-600"
        )}>
          Gain exclusive insights through 1:1 mentorship from industry experts at Big Tech leaders.
        </p>
      </div>

      {layout === "marquee" ? (
        <div className="relative flex flex-col gap-6 w-full max-w-[100vw] overflow-hidden mask-horizontal-fades">
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-inherit to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-inherit to-transparent pointer-events-none" />

          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...topRow, ...topRow].map((filename, idx) => (
              <LogoItem key={`top-${idx}`} filename={filename} />
            ))}
          </div>

          <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
            {[...bottomRow, ...bottomRow].map((filename, idx) => (
              <LogoItem key={`bottom-${idx}`} filename={filename} />
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-stretch items-center gap-8 lg:gap-12">
            {/* 1/3rd Pixel Card (hidden on mobile, left-side on desktop) */}
            <div className="hidden lg:flex w-full lg:w-1/3 justify-center">
              <PixelCard className="w-full max-w-[320px] h-full">
                <div className="w-full h-full p-8 flex items-center justify-center">
                  <img
                    src="/Logo/logo-full-night-trans.png"
                    alt="Quillance Night Logo"
                    className="max-w-[85%] max-h-[85%] object-contain transition-transform duration-500 ease-out group-hover:scale-108"
                  />
                </div>
              </PixelCard>
            </div>

            {/* 2/3rd Logo Loop */}
            <div className="w-full lg:w-2/3 overflow-hidden">
              <LogoLoop logos={companyLogos} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
