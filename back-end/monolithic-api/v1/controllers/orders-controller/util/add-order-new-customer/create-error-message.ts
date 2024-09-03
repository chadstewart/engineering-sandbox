import { AddOrderNewCustomerRequestError } from "../types/order-types";

export const createErrorMessage = (evaluatedRequest: AddOrderNewCustomerRequestError) => {
  if (evaluatedRequest.error === "MissingCustomerId")
    return "parameter 'customer_id' in /orders/'customer_id' is missing";
  if (evaluatedRequest.error === "CustomerIdIsNotAValidNumber") return "/orders/'customer_id' must be a number";
  return "Some request parameters are missing from request body";
};
