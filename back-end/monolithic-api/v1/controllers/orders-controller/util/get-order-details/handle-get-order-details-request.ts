import { orderDetails } from "../../../../../models/orders";
import { GetOrderDetailsEvaluatedRequest } from "../types/order-types";
import { createErrorMessage } from "./create-error-message";

export const handleGetOrderDetailsRequest = async (
  evaluatedRequest: GetOrderDetailsEvaluatedRequest,
  dataProvider: typeof orderDetails
) => {
  if ("error" in evaluatedRequest)
    return {
      statusCode: 400,
      status: "failed",
      error: createErrorMessage(evaluatedRequest)
    };

  return {
    statusCode: 200,
    status: "success",
    data: await dataProvider(evaluatedRequest.order_id)
  };
};
