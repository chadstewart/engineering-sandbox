import { GetProductDetailsRequestError } from "../types/product-types";

export const createErrorMessage = (evaluatedRequest: GetProductDetailsRequestError) => {
  if (evaluatedRequest.error === "MissingProductId")
    return "parameter 'product_id' in /products/details/'product_id' is missing";
  return "/products/details/'product_id' must be a number";
};
