import { Request } from "express";
import {
  AddOrderNewCustomerEvaluatedRequest,
  AddOrderNewCustomerParams,
  AddOrderNewCustomerRequestBody
} from "../types/order-types";
import { addOrdersNewCustomerZodSchema } from "../../../../../util/schemas/add-orders-zod-schema";

type emptyObject = Record<string, never>;

export const parseAddOrderAddNewCustomerRequest = (
  req: Request<AddOrderNewCustomerParams, emptyObject, AddOrderNewCustomerRequestBody>
): AddOrderNewCustomerEvaluatedRequest => {
  if (!req.params.customer_id) return { error: "MissingCustomerId" };
  const customerId = parseInt(req.params.customer_id);
  if (isNaN(customerId) || customerId === 0) return { error: "CustomerIdIsNotAValidNumber" };
  try {
    const data = addOrdersNewCustomerZodSchema.parse(req.body);
    return { requestBody: data, params: req.params };
  } catch {
    return { error: "MissingRequestBodyData" };
  }
};
