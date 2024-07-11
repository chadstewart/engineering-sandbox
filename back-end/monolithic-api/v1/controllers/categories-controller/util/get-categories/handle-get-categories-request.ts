import { categories } from "../../../../../models/categories";
import { createErrorMessage } from "./create-error-message";
import { GetCategoriesEvaluatedRequest } from "./types/get-categories-types";
import { Request } from "express";

export const handleGetCategoriesRequest = async (
  evaluatedRequest: GetCategoriesEvaluatedRequest,
  dataProvider: typeof categories,
  req: Request
) => {
  if ("error" in evaluatedRequest)
    return {
      statusCode: 400,
      status: "failed",
      error: createErrorMessage(evaluatedRequest, req.path)
    };

  return {
    statusCode: 200,
    status: "success",
    data: await dataProvider(evaluatedRequest.page)
  };
};
