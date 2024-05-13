import { Request, Response, NextFunction } from "express";
import { totalRevenue } from "../../models/revenue";

export async function getTotalRevenue(req: Request, res: Response, next: NextFunction) {
  const data = await totalRevenue();

  res.status(200).json({
    status: "success",
    data: data
  });

  return next();
}
