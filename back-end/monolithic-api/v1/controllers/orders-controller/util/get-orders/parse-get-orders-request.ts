import { Request } from "express";
import { parsePaginationRequest } from "../../../../../util/pagination-utils/parse-pagination-request";
import { GetOrderEvaluatedRequest, GetOrdersParams } from "../types/order-types";

export const parseGetOrdersRequest = (req: Request<GetOrdersParams>): GetOrderEvaluatedRequest => {
  return parsePaginationRequest(req);
};
