import {
  PaginationRequest,
  PaginationRequestError
} from "../../../../../util/pagination-utils/parse-pagination-request-types";
import { createEmployeeZodSchema } from "../../../../../util/schemas/employee-zod-schema";
import zod from "zod";

export type GetEmployeesParams = {
  page: string;
};

export type GetEmployeeRequest = PaginationRequest;

export type GetEmployeeRequestError = PaginationRequestError;

export type GetEmployeeEvaluatedRequest = GetEmployeeRequest | GetEmployeeRequestError;

export type GetEmployeeByIdParams = {
  employee_id: string;
};

export type GetEmployeeByIdRequest = {
  employee_id: number;
};

export type GetEmployeeByIdRequestError = {
  error: "MissingEmployeeId" | "EmployeeIdIsNotAValidNumber";
};

export type GetEmployeeByIdEvaluatedRequest = GetEmployeeByIdRequest | GetEmployeeByIdRequestError;

export type AddEmployeeParams = zod.infer<typeof createEmployeeZodSchema>;

export interface AddEmployeeRequest extends AddEmployeeParams {}

export type AddEmployeeRequestError = {
  error: "MissingParams";
};

export type AddEmployeeEvaluatedRequest = AddEmployeeRequest | AddEmployeeRequestError;
