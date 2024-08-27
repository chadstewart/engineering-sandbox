import { GetEmployeeByIdRequestError } from "../types/employee-types";

export const createErrorMessage = (evaluatedRequest: GetEmployeeByIdRequestError) => {
  if (evaluatedRequest.error === "MissingEmployeeId")
    return "parameter 'employee_id' in /employee/details/'employee_id' is missing";
  return "/employee/details/'employee_id' must be a number";
};
