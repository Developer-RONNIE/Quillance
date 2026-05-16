"use client";
import React from "react";
import { Download } from "lucide-react";

export function EnrollButton() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
      <button 
        onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 w-full sm:w-auto"
      >
        Enroll Now
      </button>
      <button 
        className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
      >
        <Download className="w-4 h-4" />
        Download brochure
      </button>
    </div>
  );
}
