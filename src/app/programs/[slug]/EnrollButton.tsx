"use client";

import React from "react";

export function EnrollButton() {
  return (
    <button 
      onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
      className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
    >
      Enroll Now
    </button>
  );
}
