import { Request, Response, NextFunction } from "express";
import { orders } from "../../models/orders";

export default async function getOrders (req: Request, res: Response, next: NextFunction) {
  const data = await orders();

  res.status(200).json({
    status: "success",
    data: data
  });
};