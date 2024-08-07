import { Request } from "express";
import { parsePaginationRequest } from "../../../../../util/pagination-utils/parse-pagination-request";
import { GetEmployeeEvaluatedRequest, GetEmployeesParams } from "../types/employee-types";

export const parseGetEmployeesRequest = (req: Request<GetEmployeesParams>): GetEmployeeEvaluatedRequest => {
  return parsePaginationRequest(req);
};
