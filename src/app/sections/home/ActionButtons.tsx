"use client";

import React from "react";
import { Phone, ChevronRight } from "lucide-react";

interface ActionButtonsProps {
  secondaryLabel?: string;
  onSecondaryClick?: () => void;
}

export function ActionButtons({ secondaryLabel, onSecondaryClick }: ActionButtonsProps) {
  const openPrograms = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      window.dispatchEvent(new CustomEvent("quillance-open-programs"));
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
      <button className="group bg-[#0b5cd5] hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold text-[15px] flex justify-center items-center shadow-lg shadow-blue-500/20 transition-all">
        <Phone className="w-4 h-4 mr-2 group-hover:animate-wiggle" fill="currentColor" />
        Talk to Career Expert
      </button>
      <button 
        onClick={openPrograms}
        className="group bg-white border border-gray-200 text-[#0f172a] px-8 py-3.5 rounded-full font-bold text-[15px] flex justify-center items-center transition-all duration-300 hover:bg-gray-50 hover:-translate-y-1 hover:shadow-lg"
      >
        {secondaryLabel || "Explore programs"}
        <ChevronRight className="w-4 h-4 ml-1 text-gray-400 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
}
