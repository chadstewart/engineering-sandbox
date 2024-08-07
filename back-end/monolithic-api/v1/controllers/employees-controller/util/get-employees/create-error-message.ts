import { createPaginationErrorMessage } from "../../../../../util/pagination-utils/create-pagination-error-message";
import { GetEmployeeRequestError } from "../types/employee-types";

export const createErrorMessage = (evaluatedRequest: GetEmployeeRequestError, routeString: string) => {
  return createPaginationErrorMessage(evaluatedRequest, routeString);
};
