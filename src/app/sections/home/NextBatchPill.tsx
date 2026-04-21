import React from "react";
import { Clock, ChevronRight } from "lucide-react";

export function NextBatchPill() {
  return (
    <div className="w-max max-w-full lg:max-w-none bg-[#f1f5f9] rounded-2xl md:rounded-full border border-blue-100/50 p-4 md:px-6 md:py-4 flex flex-col lg:flex-row items-start md:items-center justify-between gap-4 md:gap-4 lg:gap-5 xl:gap-8 shadow-sm">
      
      <div className="flex items-center gap-1.5 sm:gap-2 text-[12px] sm:text-[13px] lg:text-[13.5px] xl:text-[14.5px] text-[#475569] font-medium whitespace-nowrap">
        <Clock className="w-4 h-4 text-[#0b5cd5] shrink-0" />
        <span className="whitespace-nowrap">Next batch: <span className="text-[#0f172a] font-bold">10 May</span></span>
        <ChevronRight className="w-3.5 h-3.5 mx-0.5 text-gray-400 shrink-0" />
        <span className="whitespace-nowrap">Starts in <span className="text-[#0b5cd5] font-bold">23 days</span></span>
      </div>

      <div className="flex items-center gap-3 font-bold text-[12px] sm:text-[12px] lg:text-[12.5px] xl:text-[13.5px] whitespace-nowrap shrink-0">
        <span className="text-red-500 whitespace-nowrap">Limited seats</span>
        <span className="text-[#475569] whitespace-nowrap">
          Seats left <span className="text-[#0b5cd5] ml-0.5">18</span>
        </span>
      </div>

    </div>
  );
}
