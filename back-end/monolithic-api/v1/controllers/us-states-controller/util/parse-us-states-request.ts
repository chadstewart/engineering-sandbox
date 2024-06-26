import { Request } from "express";
import { parsePaginationRequest } from "../../../../util/pagination-utils/parse-pagination-request";
import { UsStatesEvaluatedRequest } from "./types/us-states-types";

export const parseUsStatesRequest = (req: Request<{ page: string }>): UsStatesEvaluatedRequest => {
  return parsePaginationRequest(req);
};
