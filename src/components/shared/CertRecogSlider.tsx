"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RecognitionsSection } from "./RecognitionsSection";
import { CertificationSection } from "./CertificationSection";

export const CertRecogSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const sections = [
    { id: "recognitions", component: <RecognitionsSection /> },
    { id: "certification", component: <CertificationSection /> }
  ];

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setIndex((prevIndex) => (prevIndex + newDirection + sections.length) % sections.length);
  }, [sections.length]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, paginate]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div 
      className="relative w-full overflow-hidden bg-slate-950 min-h-[700px] group/slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-full w-full flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="w-full h-full"
          >
            {sections[index].component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 pointer-events-none z-50">
        <button
          onClick={() => paginate(-1)}
          className="w-12 h-12 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 backdrop-blur-md hover:bg-blue-600 hover:text-white hover:border-blue-400 transition-all pointer-events-auto group/btn shadow-[0_0_20px_rgba(37,99,235,0.1)]"
        >
          <ChevronLeft className="w-6 h-6 group-hover/btn:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="w-12 h-12 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 backdrop-blur-md hover:bg-blue-600 hover:text-white hover:border-blue-400 transition-all pointer-events-auto group/btn shadow-[0_0_20px_rgba(37,99,235,0.1)]"
        >
          <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Dot Indicators (Optional but helpful for loop feel) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 pointer-events-auto ${
              index === i ? "w-8 bg-blue-500" : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
