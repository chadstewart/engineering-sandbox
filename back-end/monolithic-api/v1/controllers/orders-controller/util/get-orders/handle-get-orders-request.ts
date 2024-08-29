import { orders } from "../../../../../models/orders";
import { createErrorMessage } from "./create-error-message";
import { GetOrderEvaluatedRequest } from "../types/order-types";

export const handleGetOrdersRequest = async (
  evaluatedRequest: GetOrderEvaluatedRequest,
  dataProvider: typeof orders,
  reqPath: string
) => {
  if ("error" in evaluatedRequest)
    return {
      statusCode: 400,
      status: "failed",
      error: createErrorMessage(evaluatedRequest, reqPath)
    };

  return {
    statusCode: 200,
    status: "success",
    data: await dataProvider(evaluatedRequest.page)
  };
};
