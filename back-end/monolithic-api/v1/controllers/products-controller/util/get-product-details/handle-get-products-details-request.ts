import { productDetails } from "../../../../../models/products";
import { GetProductDetailsEvaluatedRequest } from "../types/product-types";
import { createErrorMessage } from "./create-error-message";

export const handleGetProductDetailsRequest = async (
  evaluatedRequest: GetProductDetailsEvaluatedRequest,
  dataProvider: typeof productDetails
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
    data: await dataProvider(evaluatedRequest.product_id)
  };
};
