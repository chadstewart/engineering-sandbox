import { Request } from "express";
import { parsePaginationRequest } from "../../../../../util/pagination-utils/parse-pagination-request";
import { GetProductEvaluatedRequest, GetProductsParams } from "../types/product-types";

export const parseGetProductsRequest = (req: Request<GetProductsParams>): GetProductEvaluatedRequest => {
  return parsePaginationRequest(req);
};
