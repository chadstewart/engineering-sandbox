export type RegionRequest = {
  region_id: number;
};

export type RegionRequestError = {
  error: "MissingRegionId" | "RegionIdIsNotAValidNumber";
};

export type RegionEvalutedRequest = RegionRequest | RegionRequestError;
