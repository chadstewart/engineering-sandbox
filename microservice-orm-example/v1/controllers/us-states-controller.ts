import { Request, Response, NextFunction } from "express";
import { usStates } from "../../models/us-states";

export async function getUSStates (req: Request, res: Response, next: NextFunction) {
  let page = 1;

  const isPageNumberInRoute = req.params.page;
  if(isPageNumberInRoute) page = Number(req.params.page);

  const isPageNumberNaN = Number.isNaN(page);
  if(isPageNumberNaN) {
    res.status(400).json({
      status: "failed",
      error: "states/'page' must be a number"
    });

    return next();
  }

  const data = await usStates(page);

  res.status(200).json({
    status: "success",
    data: data
  });

  return next();
};