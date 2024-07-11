import { GetCategoriesRequestError } from "./types/get-categories-types";
import { createPaginationErrorMessage } from "../../../../../util/pagination-utils/create-pagination-error-message";

export const createErrorMessage = (evaluatedRequest: GetCategoriesRequestError, routeString: string) => {
  return createPaginationErrorMessage(evaluatedRequest, routeString);
};
