import { UsStatesRequestError } from "./us-states-types";

export const createErrorMessage = (evaluatedRequest: UsStatesRequestError) => {
  if (evaluatedRequest.error === "MissingPage") return "parameter 'page' in states/'page' is missing";
  return "states/'page' must be a number";
};
