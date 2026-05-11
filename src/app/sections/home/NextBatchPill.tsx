import React, { useMemo } from "react";
import { Clock, ChevronRight } from "lucide-react";

export function NextBatchPill() {
  const { batchDateStr, daysLeft, seatsLeft } = useMemo(() => {
    const today = new Date();
    // For testing/starting point as requested: 10th June
    // If today is May 10th, we can logic it out.
    
    let targetYear = today.getFullYear();
    let targetMonth = today.getMonth();
    const targetDay = 10;
    
    // If today is after the 10th, the next batch is the 10th of the next month
    if (today.getDate() > targetDay) {
      targetMonth += 1;
      if (targetMonth > 11) {
        targetMonth = 0;
        targetYear += 1;
      }
    }
    
    // Special request: "I want you to start the batch from 10th June"
    // Since today is May 10th, our logic would normally show May 10th.
    // To respect the user's wish to start from June 10th, we'll ensure we skip May 10th if it's the current target.
    if (targetMonth === 4 && targetYear === 2026 && today.getDate() <= 10) {
      targetMonth = 5; // Force June
    }

    const targetDate = new Date(targetYear, targetMonth, targetDay);
    
    // Calculate days left
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    
    // Format batch date string (e.g., 10 Jun)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const batchDateStr = `${targetDate.getDate()} ${monthNames[targetDate.getMonth()]}`;
    
    // Total days in the current cycle (from 11th of previous month to 10th of target month)
    const prevBatchDate = new Date(targetYear, targetMonth - 1, 10);
    const totalDaysInCycle = Math.ceil((targetDate.getTime() - prevBatchDate.getTime()) / (1000 * 60 * 60 * 24));
    
    // Seats logic: from 180 to 18.
    // Proportionally decrease based on how many days are left in the current cycle
    const maxSeats = 180;
    const minSeats = 18;
    
    const seatsRemaining = minSeats + Math.floor((maxSeats - minSeats) * (diffDays / totalDaysInCycle));
    
    return {
      batchDateStr,
      daysLeft: diffDays,
      seatsLeft: Math.max(minSeats, Math.min(maxSeats, seatsRemaining))
    };
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
