import { Request } from "express";
import { parsePaginationRequest } from "../../../util/pagination-utils/parse-pagination-request";
import { UsStatesEvaluatedRequest } from "./us-states-types";

export const parseUsStatesRequest = (req: Request): UsStatesEvaluatedRequest => {
  return parsePaginationRequest(req);
};
