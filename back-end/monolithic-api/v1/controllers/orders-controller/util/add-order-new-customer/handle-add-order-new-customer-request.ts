import { addOrderNewCustomer } from "../../../../../models/orders";
import { AddOrderNewCustomerEvaluatedRequest } from "../types/order-types";
import { createErrorMessage } from "./create-error-message";

export const handleAddOrderNewCustomerRequest = async (
  evaluatedRequest: AddOrderNewCustomerEvaluatedRequest,
  dataProvider: typeof addOrderNewCustomer
) => {
  if ("error" in evaluatedRequest)
    return {
      statusCode: 400,
      status: "failed",
      error: createErrorMessage()
    };

  return {
    statusCode: 200,
    status: "success",
    data: await dataProvider(evaluatedRequest)
  };
};
