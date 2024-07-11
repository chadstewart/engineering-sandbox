import { categories } from "../../../../../models/categories";
import { createErrorMessage } from "./create-error-message";
import { GetCategoriesEvaluatedRequest } from "./types/get-categories-types";

export const handleGetCategoriesRequest = async (
  evaluatedRequest: GetCategoriesEvaluatedRequest,
  dataProvider: typeof categories,
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
