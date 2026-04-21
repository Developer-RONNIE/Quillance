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
        className="relative w-full overflow-hidden bg-slate-50 border-b border-slate-200 pt-32 pb-24 px-4 sm:px-6 lg:px-8 group"
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
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight"
          >
            {title}
          </motion.h1>
          {lastUpdated && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-500 font-medium text-lg max-w-2xl mx-auto"
            >
              Last Updated: {lastUpdated}
            </motion.p>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Sidebar (Sticky) - Stepper Style */}
          <div className="lg:w-1/3 shrink-0 order-2 lg:order-1 mt-10 lg:mt-0">
            <div className="sticky top-32">
              {sections.length > 0 && (
                <>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">On this page</h3>
                  <div className="relative">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-[9px] top-4 bottom-4 w-[2px] bg-slate-100 rounded-full" />
                    
                    <ul className="space-y-4 mb-10 relative">
                      {sections.map((sec, index) => {
                        const activeIndex = sections.findIndex(s => s.id === activeSection);
                        const isCurrent = activeSection === sec.id;
                        // If no active section yet, default to index 0 being current
                        const currentIdx = activeIndex === -1 ? 0 : activeIndex;
                        const isPast = index < currentIdx;

                        return (
                          <li key={sec.id} className="relative z-10 flex gap-4 items-center group">
                            <div className="shrink-0 bg-white">
                              {isPast ? (
                                <CheckFilled className="text-slate-400 group-hover:text-slate-600 transition-colors w-5 h-5" />
                              ) : isCurrent ? (
                                <motion.div
                                  layoutId="active-step"
                                  className="rounded-full bg-white"
                                >
                                  <CheckFilled className="text-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] rounded-full w-5 h-5" />
                                </motion.div>
                              ) : (
                                <CheckIcon className="text-slate-300 group-hover:text-slate-400 transition-colors w-5 h-5 bg-white" />
                              )}
                            </div>
                            <a 
                              href={`#${sec.id}`} 
                              className={cn(
                                "font-medium text-[15px] transition-all duration-200 py-1",
                                isCurrent 
                                  ? "text-blue-600 font-semibold translate-x-1" 
                                  : isPast 
                                    ? "text-slate-600 hover:text-slate-900" 
                                    : "text-slate-400 hover:text-slate-600"
                              )}
                            >
                              {sec.title}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </>
              )}

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <h4 className="font-bold text-slate-900 mb-2">Questions & contact</h4>
                  <p className="text-slate-500 text-[14px] mb-4 leading-relaxed">Need help or have questions about our policies?</p>
                  <a href="mailto:support@quillance.com" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    <Mail className="w-4 h-4" />
                    support@quillance.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Body Content */}
          <div className="lg:w-2/3 order-1 lg:order-2">
            <div className="flex flex-col space-y-16">
              {children}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
