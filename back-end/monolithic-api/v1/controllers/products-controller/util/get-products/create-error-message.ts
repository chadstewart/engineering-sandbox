import { createPaginationErrorMessage } from "../../../../../util/pagination-utils/create-pagination-error-message";
import { GetProductRequestError } from "../types/product-types";

export const createErrorMessage = (evaluatedRequest: GetProductRequestError, routeString: string) => {
  return createPaginationErrorMessage(evaluatedRequest, routeString);
};
