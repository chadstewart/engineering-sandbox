import { Request } from "express";
import { RegionEvalutedRequest } from "./types/region-types";

export const parseRegionRequest = (req: Request<{ region_id: string }>): RegionEvalutedRequest => {
  if (!req.params.region_id) return { error: "MissingRegionId" };
  const regionId = parseInt(req.params.region_id);
  if (isNaN(regionId) || regionId < 1) return { error: "RegionIdIsNotAValidNumber" };
  return { region_id: regionId };
};
