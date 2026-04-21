import React from "react";
import { ShieldCheck, Briefcase } from "lucide-react";

export function FeatureBadges() {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-3 pt-2">
      <div className="flex items-center gap-2 text-[#475569] text-[13px] font-bold">
        <ShieldCheck className="w-4 h-4 text-[#0b5cd5]" />
        Skill based learning
      </div>
      <div className="flex items-center gap-2 text-[#475569] text-[13px] font-bold">
        <Briefcase className="w-4 h-4 text-[#0b5cd5]" />
        Internship + projects
      </div>
      <div className="flex items-center gap-2 text-[#475569] text-[13px] font-bold">
        <ShieldCheck className="w-4 h-4 text-[#0b5cd5]" />
        Industry verified certificate
      </div>
    </div>
  );
}
