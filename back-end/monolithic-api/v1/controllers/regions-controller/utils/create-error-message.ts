import { RegionRequestError } from "./types/region-types";

export const createErrorMessage = (evaluatedRequest: RegionRequestError) => {
  if (evaluatedRequest.error === "MissingRegionId")
    return "parameter 'regionId' in regions/details/'regionId' is missing";
  return "regions/details/'regionId' must be a number";
};
