"use client";

import React from "react";
import { Building2, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { WavyBackground } from "@/components/ui/wavy-background";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export const HiringPartnersSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-700 font-semibold text-sm mb-6 uppercase tracking-wider">
          <Building2 className="w-4 h-4" />
          Join the unfair advantage
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 uppercase">
          OUR <span className="text-blue-600">HIRING PARTNER</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-4xl lg:max-w-5xl mx-auto leading-relaxed lg:whitespace-nowrap">
          Top firms trust our curriculum to train the best and they dive into our talent pool to hire them.
        </p>
      </div>

      <WavyBackground 
        backgroundFill="white"
        colors={["#eff6ff", "#dbeafe", "#bfdbfe", "#93c5fd", "#60a5fa"]}
        containerClassName="h-auto min-h-[400px] w-full"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center"
        waveOpacity={0.6}
        blur={10}
      >
        <CardContainer className="inter-var">
          <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.1] border-slate-200/60 hover:border-blue-500 group-hover/card:ring-4 group-hover/card:ring-blue-500/10 w-auto sm:w-[24rem] h-auto rounded-3xl p-8 border transition-all duration-300">
            <Link href="/jobs" className="block relative z-10 h-full">
              {/* Top Right Arrow Floating */}
              <CardItem
                translateZ="100"
                className="absolute top-0 right-0 text-blue-400 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
              >
                <ArrowUpRight className="w-8 h-8" />
              </CardItem>

              <div className="flex flex-col items-center justify-center min-h-[12rem] w-full py-4">
                {/* Logo - Removed 3D translation for static look */}
                <div className="w-full flex justify-center mb-8 relative h-24">
                  <Image 
                    src="/Powered_by_logo/optim hire.jpeg" 
                    alt="OptimHire Logo" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain mix-blend-multiply"
                    priority
                  />
                </div>

                {/* Tagline Floating at a different depth */}
                <CardItem
                  translateZ="50"
                  className="text-[12px] font-black tracking-[0.3em] text-blue-500 uppercase flex items-center gap-2"
                >
                  <div className="h-px w-8 bg-blue-100" />
                  Official Partner
                  <div className="h-px w-8 bg-blue-100" />
                </CardItem>
              </div>
            </Link>
          </CardBody>
        </CardContainer>
      </WavyBackground>
    </section>
  );
};
