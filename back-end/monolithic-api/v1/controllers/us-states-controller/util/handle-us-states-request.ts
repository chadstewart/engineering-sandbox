import { usStates } from "../../../../models/us-states";
import { createErrorMessage } from "./create-error-message";
import { UsStatesEvaluatedRequest } from "./types/us-states-types";

export const handleUsStatesRequest = async (
  evaluatedRequest: UsStatesEvaluatedRequest,
  dataProvider: typeof usStates,
  reqPath: string
) => {
  if ("error" in evaluatedRequest)
    return {
      statusCode: 400,
      status: "failed",
      error: createErrorMessage(evaluatedRequest, reqPath)
    };

  return {
    statusCode: 200,
    status: "success",
    data: await dataProvider(evaluatedRequest.page)
  };
};
