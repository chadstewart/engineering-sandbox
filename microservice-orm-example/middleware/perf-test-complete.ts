import { NextFunction, Request, Response } from "express";
import { testPerformance } from "../util/test-performance";

export const endPerformanceTest = (req: Request, res: Response, next: NextFunction) => {
  const startingTime = res.locals.startingTime;
  const totalRequestTime = testPerformance(startingTime);
  res.locals.totalRequestTime = totalRequestTime;
  next();
};