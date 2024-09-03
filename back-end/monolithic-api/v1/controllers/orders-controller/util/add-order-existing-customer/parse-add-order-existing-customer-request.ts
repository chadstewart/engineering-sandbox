import { Request } from "express";
import {
  AddOrderExistingCustomerEvaluatedRequest,
  AddOrderExistingCustomerParams,
  AddOrderExistingCustomerRequestBody
} from "../types/order-types";
import { addOrdersExistingCustomerZodSchema } from "../../../../../util/schemas/add-orders-zod-schema";

type emptyObject = Record<string, never>;

export const parseAddOrderExistingCustomerRequest = (
  req: Request<AddOrderExistingCustomerParams, emptyObject, AddOrderExistingCustomerRequestBody>
): AddOrderExistingCustomerEvaluatedRequest => {
  if (!req.params.customer_id) return { error: "MissingCustomerId" };
  const customerId = parseInt(req.params.customer_id);
  if (isNaN(customerId) || customerId === 0) return { error: "CustomerIdIsNotAValidNumber" };
  try {
    const data = addOrdersExistingCustomerZodSchema.parse(req.body);
    return { requestBody: data, params: req.params };
  } catch {
    return { error: "MissingRequestBodyData" };
  }
};
