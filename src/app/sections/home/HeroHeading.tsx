import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { cn } from "@/lib/utils";

const mentors = [
  {
    id: 1,
    name: "Alex Rivera",
    designation: "Senior Dev at Google",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "Sarah Chen",
    designation: "Product Lead at Meta",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "Marcus Thorne",
    designation: "Tech Architect at Amazon",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
  },
];

export function HeroHeading() {
  return (
    <div className="flex flex-col space-y-3 md:space-y-4">
      {/* Tooltip Badge */}
      <div className="flex flex-row items-center gap-6 mb-2">
        <div className="flex flex-row items-center">
          <AnimatedTooltip 
            items={mentors} 
            imageClassName="!h-9 !w-9 sm:!h-10 sm:!w-10"
          />
        </div>
        <p className="text-[#475569] text-[13px] sm:text-[15px] font-medium uppercase tracking-tight">
          Trusted by <span className="text-[#1d4ed8] font-black">10K+ STUDENTS</span>
        </p>
      </div>

      {/* Heading */}
      <h1 className="text-[2.2rem] sm:text-4xl lg:text-[2.8rem] xl:text-[3.2rem] font-bold text-[#0f172a] leading-[1.15] tracking-tight">
        <span className="xl:whitespace-nowrap">Empowering Youth to Lead</span>
        <br className="hidden sm:block" />
        the <span className="text-[#1d4ed8]">Global Workforce</span>
      </h1>
      
      {/* Paragraph */}
      <p className="text-[#475569] text-[14px] sm:text-base leading-relaxed max-w-xl font-medium">
        Transform your career with Quillance. We align education with industry demands through skill development and credible certifications to build future-ready pros.
      </p>
    </div>
  );
}
