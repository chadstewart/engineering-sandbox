import { Request, Response, NextFunction } from "express";
import { usStates } from "../../models/us-states";

export async function getUSStates (req: Request, res: Response, next: NextFunction) {
  let page = 1;

  const isPageNumberInRoute = req.params.page;
  if(isPageNumberInRoute) page = Number(req.params.page);

  const isPageNumberNaN = Number.isNaN(page);
  if(isPageNumberNaN) return res.status(400).json({
    status: "failed",
    error: "states/'page' must be a number"
  });

  const data = await usStates(page);

  return res.status(200).json({
    status: "success",
    data: data
  });
};