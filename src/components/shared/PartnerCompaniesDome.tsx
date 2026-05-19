"use client";

import React from "react";
import DomeGallery from "./DomeGallery";

const LOGO_ASSETS = [
  { src: "/Partnered_Companies_logos/Alphabet Inc. (Google).png", alt: "Google" },
  { src: "/Partnered_Companies_logos/Amazon_2024.png", alt: "Amazon" },
  { src: "/Partnered_Companies_logos/Apple.png", alt: "Apple" },
  { src: "/Partnered_Companies_logos/Meta.png", alt: "Meta" },
  { src: "/Partnered_Companies_logos/Microsoft_logo.png", alt: "Microsoft" },
  { src: "/Partnered_Companies_logos/NVIDIA.png", alt: "NVIDIA" },
  { src: "/Partnered_Companies_logos/Accenture.png", alt: "Accenture" },
  { src: "/Partnered_Companies_logos/Deloitte.png", alt: "Deloitte" },
  { src: "/Partnered_Companies_logos/IBM.png", alt: "IBM" },
  { src: "/Partnered_Companies_logos/Infosys.png", alt: "Infosys" },
  { src: "/Partnered_Companies_logos/Intel_logo_2023.png", alt: "Intel" },
  { src: "/Partnered_Companies_logos/JPMorgan Chase.png", alt: "JPMorgan Chase" },
  { src: "/Partnered_Companies_logos/Tata Consultancy Services (TCS).png", alt: "TCS" },
  { src: "/Partnered_Companies_logos/Tesla.png", alt: "Tesla" },
  { src: "/Partnered_Companies_logos/Samsung_Black_icon.png", alt: "Samsung" },
  { src: "/Partnered_Companies_logos/SAP.png", alt: "SAP" },
  { src: "/Partnered_Companies_logos/Oracle.png", alt: "Oracle" },
  { src: "/Partnered_Companies_logos/State Bank of India (SBI).png", alt: "SBI" },
  { src: "/Partnered_Companies_logos/Reliance Industries.png", alt: "Reliance Industries" },
  { src: "/Partnered_Companies_logos/Siemens.png", alt: "Siemens" },
  { src: "/Partnered_Companies_logos/Adidas.png", alt: "Adidas" },
  { src: "/Partnered_Companies_logos/BMW.png", alt: "BMW" },
  { src: "/Partnered_Companies_logos/Larsen & Toubro (L&T).png", alt: "L&T" },
  { src: "/Partnered_Companies_logos/Tata Motors.png", alt: "Tata Motors" }
];

export function PartnerCompaniesDome() {
  return (
    <section className="w-full bg-[#fafafa]/50 dark:bg-slate-950/20 py-20 border-t border-b border-slate-100 dark:border-slate-800 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1 rounded-full">
          Our Partner Companies
        </span>
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-3.5 mb-2.5">
          UPSKILL WITH THE WORLD'S TOP 1%
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl mx-auto">
          Gain exclusive insights through 1:1 mentorship from industry experts at Big Tech leaders.
        </p>
      </div>

      <div className="relative w-full h-[400px] md:h-[480px] bg-white/40 dark:bg-slate-900/10 rounded-3xl border border-slate-100/50 dark:border-slate-800/30 shadow-[inset_0_4px_30px_rgba(0,0,0,0.02)] overflow-hidden">
        <DomeGallery
          images={LOGO_ASSETS}
          fit={0.45}
          fitBasis="auto"
          minRadius={500}
          maxRadius={900}
          padFactor={0.15}
          overlayBlurColor="rgba(250, 250, 250, 0.95)"
          maxVerticalRotationDeg={10}
          dragSensitivity={25}
          enlargeTransitionMs={350}
          segments={28}
          dragDampening={1.8}
          openedImageWidth="180px"
          openedImageHeight="180px"
          imageBorderRadius="20px"
          openedImageBorderRadius="24px"
          grayscale={false}
        />
      </div>
    </section>
  );
}
