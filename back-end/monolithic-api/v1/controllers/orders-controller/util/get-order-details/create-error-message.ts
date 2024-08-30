import { GetOrderDetailsRequestError } from "../types/order-types";

export const createErrorMessage = (evaluatedRequest: GetOrderDetailsRequestError) => {
  if (evaluatedRequest.error === "MissingOrderId")
    return "parameter 'order_id' in /orders/details/'order_id' is missing";
  return "/orders/details/'order_id' must be a number";
};
