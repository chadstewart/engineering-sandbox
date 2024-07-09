import { regionDetails } from "../../../../models/region";
import { createErrorMessage } from "./create-error-message";
import { RegionEvalutedRequest } from "./types/region-types";

export const handleRegionRequest = async (
  evaluatedRequest: RegionEvalutedRequest,
  dataProvider: typeof regionDetails
) => {
  if ("error" in evaluatedRequest)
    return {
      statusCode: 400,
      status: "failed",
      error: createErrorMessage(evaluatedRequest)
    };

  return {
    statusCode: 200,
    status: "success",
    data: await dataProvider(evaluatedRequest.region_id)
  };
};
