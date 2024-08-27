import { employeesFromId } from "../../../../../models/employees";
import { GetEmployeeByIdEvaluatedRequest } from "../types/employee-types";
import { createErrorMessage } from "./create-error-message";

export const handleGetEmployeeByIdRequest = async (
  evaluatedRequest: GetEmployeeByIdEvaluatedRequest,
  dataProvider: typeof employeesFromId
) => {
  if ("error" in evaluatedRequest)
    return {
      statusCode: 400,
      status: "failed",
      error: createErrorMessage(evaluatedRequest)
    };

  return {
    statusCode: 200,
    status: "success",
    data: await dataProvider(evaluatedRequest.employee_id)
  };
};
