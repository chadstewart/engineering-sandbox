import { products } from "../../../../../models/products";
import { createErrorMessage } from "./create-error-message";
import { GetProductEvaluatedRequest } from "../types/product-types";

export const handleGetProductsRequest = async (
  evaluatedRequest: GetProductEvaluatedRequest,
  dataProvider: typeof products,
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
