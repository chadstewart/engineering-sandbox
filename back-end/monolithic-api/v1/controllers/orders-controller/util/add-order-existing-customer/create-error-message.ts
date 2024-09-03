import { AddOrderExistingCustomerRequestError } from "../types/order-types";

export const createErrorMessage = (evaluatedRequest: AddOrderExistingCustomerRequestError) => {
  if (evaluatedRequest.error === "MissingCustomerId")
    return "parameter 'customer_id' in /orders/'customer_id' is missing";
  if (evaluatedRequest.error === "CustomerIdIsNotAValidNumber") return "/orders/'customer_id' must be a number";
  return "Some parameters are missing from request body";
};
