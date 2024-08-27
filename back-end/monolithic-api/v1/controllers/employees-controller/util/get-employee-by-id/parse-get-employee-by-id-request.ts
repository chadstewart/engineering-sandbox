import { Request } from "express";
import { GetEmployeeByIdParams, GetEmployeeByIdEvaluatedRequest } from "../types/employee-types";

export const parseGetEmployeeByIdRequest = (req: Request<GetEmployeeByIdParams>): GetEmployeeByIdEvaluatedRequest => {
  if (!req.params.employee_id) return { error: "MissingEmployeeId" };
  const employeeId = parseInt(req.params.employee_id);
  if (isNaN(employeeId) || employeeId === 0) return { error: "EmployeeIdIsNotAValidNumber" };
  return { employee_id: employeeId };
};
