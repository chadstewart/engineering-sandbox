import { addOrderExistingCustomer } from "../../../../../models/orders";
import { AddOrderExistingCustomerEvaluatedRequest } from "../types/order-types";
import { createErrorMessage } from "./create-error-message";

export const handleAddOrderExistingCustomerRequest = async (
  evaluatedRequest: AddOrderExistingCustomerEvaluatedRequest,
  dataProvider: typeof addOrderExistingCustomer
) => {
  if ("error" in evaluatedRequest)
    return {
      statusCode: 400,
      status: "failed",
      error: createErrorMessage(evaluatedRequest)
    };

  return {
    statusCode: 201,
    status: "success",
    data: await dataProvider(evaluatedRequest.requestBody, evaluatedRequest.params.customer_id)
  };
};
