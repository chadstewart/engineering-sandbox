import { createPaginationErrorMessage } from "../../../../../util/pagination-utils/create-pagination-error-message";
import { GetOrderRequestError } from "../types/order-types";

export const createErrorMessage = (evaluatedRequest: GetOrderRequestError, routeString: string) => {
  return createPaginationErrorMessage(evaluatedRequest, routeString);
};
