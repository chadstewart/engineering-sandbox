import { categoryDetails } from "../../../../../models/categories";
import { GetCategoryDetailsEvaluatedRequest } from "../types/categories-types";
import { createErrorMessage } from "./create-error-message";

export const handleGetCategoryDetailsRequest = async (
  evaluatedRequest: GetCategoryDetailsEvaluatedRequest,
  dataProvider: typeof categoryDetails
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
    data: await dataProvider(evaluatedRequest.category_id)
  };
};
