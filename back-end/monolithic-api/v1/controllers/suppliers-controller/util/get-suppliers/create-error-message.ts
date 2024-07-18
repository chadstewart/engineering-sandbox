import { createPaginationErrorMessage } from "../../../../../util/pagination-utils/create-pagination-error-message";
import { GetSupplierRequestError } from "../types/supplier-types";

export const createErrorMessage = (evaluatedRequest: GetSupplierRequestError, routeString: string) => {
  return createPaginationErrorMessage(evaluatedRequest, routeString);
};
