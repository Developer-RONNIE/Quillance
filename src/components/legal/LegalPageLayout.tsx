"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface Section {
  id: string;
  title: string;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated?: string;
  sections: Section[];
  children: React.ReactNode;
}

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={cn("w-5 h-5", className)}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
};

const CheckFilled = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("w-5 h-5", className)}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export function LegalPageLayout({ title, lastUpdated, sections, children }: LegalPageLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  useEffect(() => {
    // If no sections provided, don't run observer
    if (!sections || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the visible section
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // If multiple sections are visible, we might want the first one or the one taking up most space
          // Here we just take the first intersecting one for simplicity
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { 
        // Trigger when the element is 150px from the top (accounting for sticky header/navbar)
        rootMargin: '-150px 0px -60% 0px' 
      }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Handle case where we scroll to the very top to reset active section to the first one
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 200 && sections.length > 0) {
        setActiveSection(sections[0].id);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* Full-width Header with Dotted Glow Background & Gradient Hover */}
      <div 
        className="relative w-full overflow-hidden bg-slate-50 border-b border-slate-200 pt-20 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 lg:px-8 group"
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
      >
        {/* Default Dotted Background */}
        <div 
          className={cn(
            "absolute inset-0 z-0 transition-opacity duration-1000",
            isHeaderHovered ? "opacity-0" : "opacity-100"
          )}
        >
          <DottedGlowBackground 
            color="rgba(148, 163, 184, 0.4)" 
            glowColor="rgba(37, 99, 235, 0.7)" 
            radius={1.5}
            className="w-full h-full"
          />
        </div>

        {/* Hover Gradient Background */}
        <div 
          className={cn(
            "absolute inset-0 z-0 transition-opacity duration-1000 pointer-events-none",
            isHeaderHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <BackgroundGradientAnimation 
            gradientBackgroundStart="rgb(248, 250, 252)" 
            gradientBackgroundEnd="rgb(241, 245, 249)"   
            firstColor="37, 99, 235"  
            secondColor="96, 165, 250" 
            thirdColor="148, 163, 184" 
            fourthColor="191, 219, 254" 
            fifthColor="226, 232, 240" 
            pointerColor="37, 99, 235"
            size="120%"
            blendingValue="hard-light"
            interactive={false} // Disable interactivity to avoid cursor jumping issues during transition
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-2 tracking-tight"
          >
            {title}
          </motion.h1>
          {lastUpdated && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl mx-auto"
            >
              Last Updated: {lastUpdated}
            </motion.p>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full">
        <div className="flex gap-12 lg:gap-16 relative">
          
          {/* Notion Style Sidebar outline (Sticky on desktop, hidden on mobile) */}
          <div className="hidden lg:block w-16 shrink-0 relative">
            <div className="sticky top-32 flex flex-col items-start">
              {sections.length > 0 && (
                <div className="flex flex-col gap-1.5 py-4">
                  {sections.map((sec, index) => {
                    const activeIndex = sections.findIndex(s => s.id === activeSection);
                    const isCurrent = activeSection === sec.id;
                    const currentIdx = activeIndex === -1 ? 0 : activeIndex;
                    const isPast = index < currentIdx;

                    return (
                      <a 
                        key={sec.id}
                        href={`#${sec.id}`}
                        className="group relative flex items-center py-1 outline-none"
                      >
                        <div 
                          className={cn(
                            "h-[3px] rounded-full transition-all duration-300",
                            isCurrent 
                              ? "w-8 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)]" 
                              : isPast 
                                ? "w-5 bg-slate-400 group-hover:bg-slate-700" 
                                : "w-3 bg-slate-200 group-hover:bg-slate-400"
                          )} 
                        />
                        <span className="absolute left-12 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-1 pointer-events-none transition-all duration-200 bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-xl shadow-slate-950/20 whitespace-nowrap z-50">
                          {sec.title}
                        </span>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Main Body Content - Now takes full width and gets much more space! */}
          <div className="flex-1 max-w-none">
            <div className="flex flex-col space-y-16">
              {children}
            </div>
          </div>

        </div>
      </div>

      {/* Center aligned Questions & Contacts at the bottom (Full Width) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-10 border-t border-slate-100">
        <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-10 shadow-sm relative overflow-hidden group text-center max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Questions & contact</h4>
            <p className="text-slate-500 text-[15px] mb-6 leading-relaxed max-w-none">
              Need help or have questions about our policies? We are here to guide you.
            </p>
            <a 
              href="mailto:support@quillance.com" 
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-sm"
            >
              support@quillance.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
