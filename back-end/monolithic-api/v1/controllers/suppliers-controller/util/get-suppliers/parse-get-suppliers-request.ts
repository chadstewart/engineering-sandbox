import { Request } from "express";
import { parsePaginationRequest } from "../../../../../util/pagination-utils/parse-pagination-request";
import { GetSuppliersParams, GetSupplierEvaluatedRequest } from "../types/supplier-types";

export const parseGetSupplierRequest = (req: Request<GetSuppliersParams>): GetSupplierEvaluatedRequest => {
  return parsePaginationRequest(req);
};
