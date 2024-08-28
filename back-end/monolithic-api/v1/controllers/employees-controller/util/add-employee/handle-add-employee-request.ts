import { createEmployee } from "../../../../../models/employees";
import { AddEmployeeEvaluatedRequest } from "../types/employee-types";
import { createErrorMessage } from "./create-error-message";

export const handleAddEmployeeRequest = async (
  evaluatedRequest: AddEmployeeEvaluatedRequest,
  dataProvider: typeof createEmployee
) => {
  if ("error" in evaluatedRequest)
    return {
      statusCode: 400,
      status: "failed",
      error: createErrorMessage()
    };

  return {
    statusCode: 200,
    status: "success",
    data: await dataProvider(evaluatedRequest)
  };
};
