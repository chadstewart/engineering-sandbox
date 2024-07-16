import { Request } from "express";
import { parsePaginationRequest } from "../../../../../util/pagination-utils/parse-pagination-request";
import { GetCategoriesEvaluatedRequest, GetCategoriesParams } from "../types/categories-types";

export const parseGetCategoriesRequest = (req: Request<GetCategoriesParams>): GetCategoriesEvaluatedRequest => {
  return parsePaginationRequest(req);
};
