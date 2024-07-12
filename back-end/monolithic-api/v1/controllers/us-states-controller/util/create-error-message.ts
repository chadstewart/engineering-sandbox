import { createPaginationErrorMessage } from "../../../../util/pagination-utils/create-pagination-error-message";
import { UsStatesRequestError } from "./types/us-states-types";

export const createErrorMessage = (evaluatedRequest: UsStatesRequestError, routeString: string) => {
  return createPaginationErrorMessage(evaluatedRequest, routeString);
};
