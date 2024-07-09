import { Request } from "express";
import { RegionEvalutedRequest, RegionParams } from "./types/region-types";

export const parseRegionRequest = (req: Request<RegionParams>): RegionEvalutedRequest => {
  if (!req.params.region_id) return { error: "MissingRegionId" };
  const regionId = parseInt(req.params.region_id);
  if (isNaN(regionId) || regionId < 1) return { error: "RegionIdIsNotAValidNumber" };
  return { region_id: regionId };
};
