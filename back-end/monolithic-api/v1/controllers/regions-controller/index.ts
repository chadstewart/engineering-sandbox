import { Request, Response, NextFunction } from "express";
import { regionDetails } from "../../../models/region";

export async function getRegionDetails(req: Request, res: Response, next: NextFunction) {
  let regionId = 1;

  const isRegionIdInRoute = req.params.region_id;
  if (isRegionIdInRoute) regionId = Number(req.params.region_id);

  const isRegionIdNaN = Number.isNaN(regionId) || regionId === 1;
  if (isRegionIdNaN) {
    res.status(400).json({
      status: "failed",
      error: "region/details/'region_id' must be a number"
    });

    return next();
  }

  const data = await regionDetails(regionId);

  res.status(200).json({
    status: "success",
    data: data
  });

  return next();
}
