import { Request, Response, NextFunction } from "express";
import { regionDetails } from "../../../models/region";
import { RegionParams } from "./utils/types/region-types";
import { handleRegionRequest } from "./utils/handle-region-request";
import { parseRegionRequest } from "./utils/parse-region-request";

export async function getRegionDetails(req: Request<RegionParams>, res: Response, next: NextFunction) {
  const { statusCode, ...rest } = await handleRegionRequest(parseRegionRequest(req), regionDetails);
  const regionsResponse = rest;
  res.status(statusCode).json(regionsResponse);
  return next();
}
