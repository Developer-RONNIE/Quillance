"use client";

import React from "react";
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const companyLogos = [
  "Accenture.png",
  "Adidas.png",
  "Allianz.png",
  "Alphabet Inc. (Google).png",
  "Amazon_2024.svg.png",
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
  "HDFC Bank.webp",
  "Hindustan_Petroleum_Logo.svg.png",
  "IBM.png",
  "ICICI Bank.png",
  "Indian_Renewable_Energy_Development_Agency_Limited_(IREDA).png",
  "Infosys.png",
  "Intel_logo_2023.svg.png",
  "Ircon_International.svg.png",
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
  "National_Fertilizers_Logo.svg.png",
  "National_Thermal_Power.png",
  "ONGC.png",
  "Oracle.png",
  "Power_Grid_Corporation_of_India_Logo.svg.png",
  "RINL (Rashtriya Ispat Nigam Limited).png",
  "RITES_green_logo.svg.png",
  "Rashtriya Chemicals & Fertilisers (RCF).png",
  "Reliance Industries.png",
  "RvnlLOGO.png",
  "SAP.png",
  "Samsung_Black_icon.svg.png",
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
      <img
        src={`/Partnered_Companies_logos/${filename}`}
        alt={`${altText} logo`}
        className={cn(
          "max-h-14 max-w-full object-contain transition-all duration-300 shrink-0 group-hover:scale-105",
          filename.toLowerCase().includes("accenture") && "scale-125"
        )}
        loading="lazy"
      />
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
      "py-24 relative overflow-hidden",
      theme === "dark" ? "bg-[#0f172a]" : "bg-gradient-to-b from-white to-slate-50/50",
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-700 font-semibold text-sm mb-6 uppercase">
          <Briefcase className="w-4 h-4" />
          Our Partner Companies
        </div>
        <h2 className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 uppercase",
          theme === "dark" ? "text-white" : "text-slate-900"
        )}>
          UPSKILL WITH THE WORLD'S <span className="text-blue-600">TOP 1%</span>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {companyLogos.map((filename, idx) => (
              <LogoItem key={`grid-${idx}`} filename={filename} isGrid />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
