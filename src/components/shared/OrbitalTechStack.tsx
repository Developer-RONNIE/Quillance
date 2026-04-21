"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Cloud, 
  Folder, 
  Cpu, 
  Search, 
  Code2, 
  Database, 
  Star, 
  Terminal, 
  Globe, 
  Shield 
} from "lucide-react";

const techStack = [
  {
    name: "Cloud Infrastructure",
    icon: Cloud,
    code: `1  resource "aws_lambda_function" "app" {
2    function_name = "ProcessData"
3    handler       = "index.handler"
4    runtime       = "nodejs20.x"
5    role          = aws_iam_role.iam.arn
6  }`
  },
  {
    name: "File Management",
    icon: Folder,
    code: `1  import { uploadFile } from "@/lib/storage";
2
3  export const POST = async (req) => {
4    const data = await req.formData();
5    return await uploadFile(data.file);
6  };`
  },
  {
    name: "Security & Shield",
    icon: Shield,
    code: `1  import { protect } from "@quillance/auth";
2
3  export const config = {
4    matcher: ["/dashboard/:path*"],
5    runtime: "nodejs"
6  };`
  },
  {
    name: "Global Networking",
    icon: Globe,
    code: `1  const dns = new Route53.Record("cdn", {
2    zoneId: "Z12345",
3    name: "api.quillance.com",
4    type: "CNAME",
5    ttl: 300
6  });`
  },
  {
    name: "AI & Machine Learning",
    icon: Cpu,
    code: `1  import { loadModel } from "@quillance/ml";
2
3  const model = await loadModel("v2-alpha");
4  const result = await model.predict(input);
5  console.log("Outcome Ready:", result);`
  },
  {
    name: "Terminal & Logic",
    icon: Terminal,
    code: `1  #!/bin/bash
2  echo "Starting Quillance Environment..."
3  npm run build && npm run start
4  # Ready for production
5  status="online"`
  }
];

export const OrbitalTechStack = ({ 
  hideInnerOrbit = false,
  hideOuterOrbit = false,
  hideBgOrbit = false 
}: { 
  hideInnerOrbit?: boolean;
  hideOuterOrbit?: boolean;
  hideBgOrbit?: boolean;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Constants for synchronization
  const rotationDuration = 120; // 120 seconds for a full 360 loop
  const numIcons = techStack.length;
  const intervalTime = (rotationDuration / numIcons) * 1000; 

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % numIcons);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime, numIcons]);

  if (!mounted) return <div className="h-[500px]" />;

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center select-none pointer-events-none">
      {/* Concentric Orbital Paths */}
      <div className="absolute left-[15%] flex items-center justify-center">
         {!hideOuterOrbit && (
            <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-blue-100/50" />
         )}
         {!hideInnerOrbit && (
            <div className="absolute w-[200px] h-[200px] rounded-full border-2 border-blue-100/30" />
         )}
         
         {/* Inner Orbit: Small star icons revolving anticlockwise very slowly */}
         <motion.div 
           animate={{ rotate: -360 }}
           transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
           className="absolute w-[200px] h-[200px]"
         >
            {[0, 120, 240].map((angle, i) => (
              <div 
                key={i}
                className="absolute text-blue-400 opacity-50"
                style={{
                  left: `${50 + 50 * Math.cos(angle * Math.PI / 180)}%`,
                  top: `${50 + 50 * Math.sin(angle * Math.PI / 180)}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <Star size={12} fill="currentColor" />
              </div>
            ))}
         </motion.div>

         {/* Outer Orbit: Revolving clockwise at a very slow pace */}
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: rotationDuration, repeat: Infinity, ease: "linear" }}
           className="absolute w-[300px] h-[300px]"
         >
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              const angle = (i * (360 / numIcons));
              return (
                <div 
                  key={i}
                  className={cn(
                    "absolute p-3 bg-white rounded-full shadow-lg border transition-all duration-700",
                    activeIndex === i ? "shadow-blue-500/20 border-blue-200 scale-110 text-blue-600" : "shadow-blue-500/5 border-blue-50 text-slate-400"
                  )}
                  style={{
                    left: `${50 + 50 * Math.cos(angle * Math.PI / 180)}%`,
                    top: `${50 + 50 * Math.sin(angle * Math.PI / 180)}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <Icon size={16} />
                </div>
              );
            })}
         </motion.div>
      </div>

      {/* Main Code Card */}
      <motion.div 
        className="relative z-10 ml-20 w-[420px] h-[320px] bg-white rounded-3xl border border-blue-100 shadow-[0_20px_50px_rgba(30,64,175,0.05)] flex"
      >
        <div className="flex-1 p-8 font-mono text-[11px] leading-relaxed relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, rotateX: 45, y: 10 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, rotateX: -45, y: -10 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="text-slate-600 h-full"
            >
              <div className="text-[10px] uppercase font-black text-blue-900/20 tracking-widest mb-4">
                {techStack[activeIndex].name}
              </div>
              <pre className="whitespace-pre-wrap">
                <code className="block">
                  {techStack[activeIndex].code.split('\n').map((line, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="text-slate-300 w-4 text-right shrink-0">{i + 1}</span>
                      <span className="text-blue-900 font-medium">{line.replace(/^\d+\s+/, '')}</span>
                    </div>
                  ))}
                </code>
              </pre>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Central Large Active Icon - Switches with Card */}
        <div className="absolute left-[-45px] top-1/2 -translate-y-1/2 z-30">
           <AnimatePresence mode="wait">
             <motion.div
               key={activeIndex}
               initial={{ scale: 0.8, opacity: 0, x: -30 }}
               animate={{ scale: 1, opacity: 1, x: 0 }}
               exit={{ scale: 0.8, opacity: 0, x: 30 }}
               transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
               className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full shadow-[0_15px_40px_rgba(30,64,175,0.3)] flex items-center justify-center text-white border-4 border-white"
             >
                {React.createElement(techStack[activeIndex].icon, { size: 40, strokeWidth: 2.5 })}
             </motion.div>
           </AnimatePresence>
           
           {/* Glow Effect */}
           <div className="absolute inset-0 bg-blue-500/20 blur-2xl -z-10 rounded-full scale-150" />
        </div>
      </motion.div>

      {/* Background Decorative Faint Orbit */}
      {!hideBgOrbit && (
        <div className="absolute right-0 w-[600px] h-[600px] border border-blue-50 rounded-full opacity-50 -z-10 translate-x-1/2" />
      )}
    </div>
  );
};
