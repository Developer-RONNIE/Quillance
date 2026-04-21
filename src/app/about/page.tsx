"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { 
  AlertCircle, 
  Target, 
  Rocket, 
  BookOpen, 
  Code, 
  Navigation, 
  Briefcase,
  Users,
  ShieldCheck,
  Zap,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { PartnerCompaniesSection } from "@/components/shared/PartnerCompaniesSection";
import { OrbitalTechStack } from "@/components/shared/OrbitalTechStack";

export default function AboutPage() {
  return (
    <div className="bg-[#1e293b] min-h-screen">
      {/* Hero Section: Why We Exist */}
      <section className="relative w-full overflow-hidden border-b border-white/5 pt-12 pb-16 lg:pt-20 lg:pb-24">
        {/* Independent Lamp Background */}
        <div className="absolute inset-0 pointer-events-none">
          <LampContainer className="h-full pt-0" hideLine={true} minHeight="min-h-[400px]">
             <div className="hidden" /> {/* Empty child just to trigger the lamp effect */}
          </LampContainer>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <h1 className="bg-gradient-to-br from-white to-blue-400 py-4 bg-clip-text text-left text-4xl font-extrabold tracking-tight text-transparent md:text-7xl leading-[1.1]">
              Degrees alone no longer <br /> guarantee careers.
            </h1>
            <p className="mt-4 text-blue-200/60 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
              Quillance was built to bridge the gap between classroom learning and real industry expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[450px] lg:translate-x-10">
              <OrbitalTechStack 
                hideInnerOrbit={true} 
                hideOuterOrbit={false} 
                hideBgOrbit={true} 
              />
            </div>
          </motion.div>
        </div>
        
        {/* Background Beams decorative touch */}
        <BackgroundBeams className="opacity-30" />
      </section>

      {/* Problem & Solution Bento Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
        <div
          className={cn(
            "absolute inset-0 pt-6",
            "[background-size:20px_20px]",
            "[background-image:linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient mask for the container */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black text-[#104382] mb-6 uppercase tracking-tight">
              The Reality of <span className="text-blue-500">Education</span>
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[22rem]">
            <BentoGridItem
              title="The Problem"
              description="Students learn theory but struggle with jobs and internships. The academic curriculum often lags years behind industry needs."
              header={
                <div className="flex-1 w-full h-full min-h-[8rem] rounded-xl overflow-hidden relative group">
                  <Image 
                    src="/student_struggling_jobs_1776670824765.png" 
                    alt="Student struggling" 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-red-500/10 group-hover:bg-transparent transition-colors" />
                </div>
              }
              icon={<AlertCircle className="h-4 w-4 text-red-500" />}
              className="md:col-span-1"
            />
            <BentoGridItem
              title="The Reality"
              description="Companies need practical skills, communication, and project exposure. Hiring is now based on 'Proof of Work,' not just certificates."
              header={
                <div className="flex-1 w-full h-full min-h-[8rem] rounded-xl overflow-hidden relative group">
                  <Image 
                    src="/skilled_labor_professional_1776670850339.png" 
                    alt="Skilled labor" 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors" />
                </div>
              }
              icon={<Target className="h-4 w-4 text-blue-500" />}
              className="md:col-span-1"
            />
            <BentoGridItem
              title="The Solution"
              description="Quillance helps students become job-ready through live training, mentorship, internships, and leadership programs designed by pros."
              header={
                <div className="flex-1 w-full h-full min-h-[8rem] rounded-xl overflow-hidden relative group">
                  <Image 
                    src="/professional_handshake_1776670873790.png" 
                    alt="Professional handshake" 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-transparent transition-colors" />
                </div>
              }
              icon={<Rocket className="h-4 w-4 text-emerald-500" />}
              className="md:col-span-1"
            />
          </BentoGrid>
        </div>
      </section>

      {/* The Student Journey */}
      <section className="py-16 px-4 sm:px-12 lg:pl-24 lg:pr-12 bg-white text-slate-900 border-y border-neutral-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                THE STUDENT <br /> <span className="text-blue-600">JOURNEY</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10 max-w-lg">
                At Quillance, every learner follows a journey designed to transform academic knowledge into professional success.
              </p>
              
              <div className="flex flex-col gap-4">
                {/* Row 1 */}
                <div className="flex items-center gap-4">
                  {["Learn", "Build"].map((step, i) => (
                    <React.Fragment key={i}>
                      <motion.div 
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-blue-100 rounded-2xl shadow-sm hover:border-blue-600 hover:shadow-md transition-all cursor-default group"
                      >
                        <span className="text-blue-600 font-black text-lg">{i + 1}.</span>
                        <span className="text-slate-700 font-bold text-sm uppercase tracking-wider group-hover:text-blue-600 transition-colors">{step}</span>
                      </motion.div>
                      {i === 0 && (
                        <div className="hidden sm:block border-t-2 border-dotted border-blue-200 w-8 md:w-12" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
                {/* Row 2 - Diagonal Shift */}
                <div className="flex items-center gap-4 ml-12 md:ml-20">
                   <div className="hidden sm:block border-t-2 border-dotted border-blue-200 w-8 md:w-12" />
                   {["Lead", "Hire"].map((step, i) => (
                    <React.Fragment key={i}>
                      <motion.div 
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-blue-100 rounded-2xl shadow-sm hover:border-blue-600 hover:shadow-md transition-all cursor-default group"
                      >
                        <span className="text-blue-600 font-black text-lg">{i + 3}.</span>
                        <span className="text-slate-700 font-bold text-sm uppercase tracking-wider group-hover:text-blue-600 transition-colors">{step}</span>
                      </motion.div>
                      {i === 0 && (
                        <div className="hidden sm:block border-t-2 border-dotted border-blue-200 w-8 md:w-12" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {[
                { title: "Learn", icon: <BookOpen className="w-6 h-6" />, desc: "Industry-aligned skills from experts." },
                { title: "Build", icon: <Code className="w-6 h-6" />, desc: "Execute real-world projects." },
                { title: "Lead", icon: <Navigation className="w-6 h-6" />, desc: "Develop leadership & soft skills." },
                { title: "Get Hire", icon: <Briefcase className="w-6 h-6" />, desc: "Bridge to your dream career." },
              ].map((step, i) => (
                <CardContainer key={i} containerClassName="py-0 h-full" className="h-full">
                  <CardBody className="p-6 rounded-3xl bg-neutral-50 border border-neutral-100 hover:bg-[#104382] transition-all duration-300 group h-full w-full">
                    <CardItem translateZ="50" className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </CardItem>
                    <CardItem translateZ="60" as="h4" className="font-bold text-slate-900 mb-2 group-hover:text-white transition-colors">
                      {step.title}
                    </CardItem>
                    <CardItem translateZ="40" as="p" className="text-xs text-slate-500 font-medium leading-relaxed group-hover:text-blue-100 transition-colors">
                      {step.desc}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aptisure Influence: Why We Differentiate */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2 uppercase tracking-widest">
              Why We Differentiate
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-4xl mx-auto">
              Our core pillars that ensure your transition from a learner to a leader is seamless.
            </p>
          </div>
          <InfiniteMovingCards
            items={[
              { title: "Experts Led", desc: "Learn from mentors currently working at MAANG & Top Tech firms.", icon: <Users /> },
              { title: "ISO Certified", desc: "Government recognized (DPIIT) & ISO 9001:2015 certified programs.", icon: <ShieldCheck /> },
              { title: "Live Cohorts", desc: "Interactive live training - no outdated pre-recorded videos.", icon: <Zap /> },
              { title: "Work Ready", desc: "Resume building, mock interviews, and LinkedIn optimization.", icon: <Star /> }
            ]}
            direction="right"
            speed="slow"
          />
        </div>
      </section>

      {/* Partner Companies Grid */}
      <PartnerCompaniesSection layout="grid" theme="light" className="bg-white" />
    </div>
  );
}
