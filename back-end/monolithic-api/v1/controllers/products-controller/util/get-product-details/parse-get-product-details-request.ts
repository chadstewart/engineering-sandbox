import { Request } from "express";
import { GetProductDetailsParams, GetProductDetailsEvaluatedRequest } from "../types/product-types";

export const parseGetProductDetailsRequest = (
  req: Request<GetProductDetailsParams>
): GetProductDetailsEvaluatedRequest => {
  if (!req.params.product_id) return { error: "MissingProductId" };
  const productId = parseInt(req.params.product_id);
  if (isNaN(productId) || productId < 1) return { error: "ProductIdIsNotAValidNumber" };
  return { product_id: productId };
};
