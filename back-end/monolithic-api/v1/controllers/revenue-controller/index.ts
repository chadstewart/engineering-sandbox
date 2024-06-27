import { Request, Response, NextFunction } from "express";
import { handleRevenueRequest } from "./util/handle-revenue-request";
import { totalRevenue } from "../../../models/revenue";

export async function getTotalRevenue(req: Request<null>, res: Response, next: NextFunction) {
  const { statusCode, ...rest } = await handleRevenueRequest(totalRevenue);
  const revenueRequest = rest;
  res.status(statusCode).json(revenueRequest);
  return next();
}
