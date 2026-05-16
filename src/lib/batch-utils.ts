export function getNextBatchDetails() {
  const today = new Date();
  
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
  
  // Special rule: Force July 10th as the next batch if today is before then
  const forceDate = new Date(2026, 6, 10); // July 10, 2026
  if (today < forceDate) {
    targetMonth = 6;
    targetYear = 2026;
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
  const maxSeats = 180;
  const minSeats = 18;
  
  const seatsRemaining = minSeats + Math.floor((maxSeats - minSeats) * (diffDays / totalDaysInCycle));
  const finalSeats = Math.max(minSeats, Math.min(maxSeats, seatsRemaining));

  return {
    batchDateStr,
    daysLeft: diffDays,
    seatsLeft: finalSeats
  };
}
