"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";
import { allCourses } from "@/data/programs";

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const searchPlaceholders = [
    "Search 'Data Science'...",
    "Search 'Web Development'...",
    "Search 'Cloud Computing'...",
    "Search 'Digital Marketing'...",
    "Search 'AutoCAD'..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  
  const filteredCourses = searchQuery.trim() !== "" 
    ? allCourses.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.desc.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)
    : [];

  return (
    <div className="w-full max-w-xl relative shrink-0">
      <div className={`relative flex items-center bg-white border border-gray-200 rounded-xl p-1 shadow-sm focus-within:ring-2 focus-within:ring-blue-100 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5 hover:shadow-lg group z-30 ${filteredCourses.length > 0 && isFocused ? 'rounded-b-none border-b-0 shadow-lg' : ''}`}>
        <Search className="w-4 h-4 text-gray-400 absolute left-4 group-hover:text-blue-500 transition-colors z-40 pointer-events-none" />
        
        <div className="relative flex-1 w-full overflow-hidden h-full flex items-center">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            className="w-full pl-10 pr-4 py-2 sm:py-2.5 bg-transparent outline-none text-[13px] sm:text-[14px] text-gray-800 relative z-30"
          />
          {!searchQuery && (
            <div className="absolute inset-0 left-10 flex items-center pointer-events-none z-20">
              <span 
                key={placeholderIndex} 
                className="text-gray-400 text-[13px] sm:text-[14px] animate-in fade-in slide-in-from-bottom-2 duration-500"
              >
                {searchPlaceholders[placeholderIndex]}
              </span>
            </div>
          )}
        </div>

        <button className="bg-[#0b5cd5] hover:bg-blue-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-bold text-[13px] sm:text-[14px] flex items-center transition-colors shrink-0 relative z-30">
          Enroll now <ChevronRight className="w-4 h-4 ml-1 hidden sm:block" />
        </button>
      </div>

      {/* Auto suggest dropdown */}
      {searchQuery.trim() !== "" && isFocused && (
        <div className="absolute top-[85%] left-0 w-full bg-white border border-gray-200 rounded-b-xl shadow-2xl overflow-hidden z-20 flex flex-col pt-3">
          {filteredCourses.length > 0 ? filteredCourses.map((prog, i) => (
            <Link 
              href={`/programs/${prog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} 
              key={i} 
              className="px-5 py-3 hover:bg-slate-50 flex items-center gap-3 border-b border-gray-100 last:border-b-0 cursor-pointer"
            >
              <div className="w-8 h-8 rounded shrink-0 bg-blue-50/50 flex items-center justify-center text-lg">{prog.icon}</div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-800 leading-tight group-hover:text-blue-600">{prog.title}</span>
                <span className="text-xs text-gray-500 leading-tight mt-0.5 font-medium">{prog.category}</span>
              </div>
            </Link>
          )) : (
            <div className="px-5 py-4 text-sm text-gray-500 text-center font-medium">No programs found</div>
          )}
        </div>
      )}
    </div>
  );
}
