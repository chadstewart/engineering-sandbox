import { Request } from "express";
import { parsePaginationRequest } from "../../../../util/pagination-utils/parse-pagination-request";
import { UsStatesEvaluatedRequest, UsStatesParams } from "./types/us-states-types";

export const parseUsStatesRequest = (req: Request<UsStatesParams>): UsStatesEvaluatedRequest => {
  return parsePaginationRequest(req);
};
