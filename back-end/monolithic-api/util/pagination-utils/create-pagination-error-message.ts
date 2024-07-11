import { PaginationRequestError } from "./parse-pagination-request-types";

export const createPaginationErrorMessage = (evaluatedRequest: PaginationRequestError, routeString: string) => {
  if (evaluatedRequest.error === "MissingPage") return `parameter 'page' in ${routeString}/'page' is missing`;
  return `${routeString}/'page' must be a number`;
};
