import { employees } from "../../../../../models/employees";
import { createErrorMessage } from "./create-error-message";
import { GetEmployeeEvaluatedRequest } from "../types/employee-types";

export const handleGetEmployeesRequest = async (
  evaluatedRequest: GetEmployeeEvaluatedRequest,
  dataProvider: typeof employees,
  reqPath: string
) => {
  if ("error" in evaluatedRequest)
    return {
      statusCode: 400,
      status: "failed",
      error: createErrorMessage(evaluatedRequest, reqPath)
    };

  return {
    statusCode: 200,
    status: "success",
    data: await dataProvider(evaluatedRequest.page)
  };
};
