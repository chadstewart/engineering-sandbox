import { NextFunction, Request, Response } from "express";

export const startPerformanceTest = (req: Request, res: Response, next: NextFunction) => {
  const startingTime = new Date();
  res.locals.startingTime = startingTime;
  next();
};