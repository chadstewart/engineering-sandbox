import {
  PaginationRequest,
  PaginationRequestError
} from "../../../../../util/pagination-utils/parse-pagination-request-types";

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
