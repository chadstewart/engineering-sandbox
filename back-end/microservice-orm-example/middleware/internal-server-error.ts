import { NextFunction, Request, Response } from "express";

export const internalServerErrorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(`Something went wrong, error message: ${error}`);
  res.status(500).json({
    status: "failed",
    error: "Internal Server Error"
  });

  next();
};
