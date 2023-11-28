export const testPerformance = (startingTime: Date) => {
  const endTime = new Date();
  const diffTime = Math.abs(startingTime.getTime() - endTime.getTime());
  return diffTime;
}