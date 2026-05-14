import React, { useMemo } from "react";
import { Clock, ChevronRight } from "lucide-react";
import { getNextBatchDetails } from "@/lib/batch-utils";

export function NextBatchPill() {
  const { batchDateStr, daysLeft, seatsLeft } = useMemo(() => {
    return getNextBatchDetails();
  }, []);

  return (
    <div className="w-max max-w-full lg:max-w-none bg-[#f1f5f9] rounded-2xl md:rounded-full border border-blue-100/50 p-4 md:px-6 md:py-4 flex flex-col lg:flex-row items-center justify-between gap-2 md:gap-4 lg:gap-5 xl:gap-8 shadow-sm text-center lg:text-left">
      
      <div className="flex flex-row flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[12px] sm:text-[13px] lg:text-[13.5px] xl:text-[14.5px] text-[#475569] font-medium">
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-[#0b5cd5] shrink-0" />
          <span className="whitespace-nowrap">Next batch: <span className="text-[#0f172a] font-bold">{batchDateStr}</span></span>
        </div>
        <span className="hidden md:block">
          <ChevronRight className="w-3.5 h-3.5 mx-0.5 text-gray-400 shrink-0" />
        </span>
        <span className="md:hidden text-gray-300 mx-1">•</span>
        <span className="whitespace-nowrap">Starts in <span className="text-[#0b5cd5] font-bold">{daysLeft} days</span></span>
      </div>

      <div className="flex items-center gap-3 font-bold text-[12px] sm:text-[12px] lg:text-[12.5px] xl:text-[13.5px] whitespace-nowrap shrink-0">
        <span className="text-red-500 whitespace-nowrap">Limited seats</span>
        <span className="text-[#475569] whitespace-nowrap">
          Seats left <span className="text-[#0b5cd5] ml-0.5">{seatsLeft}</span>
        </span>
      </div>

    </div>
  );
}
