import { Request } from "express";
import { AddOrderNewCustomerEvaluatedRequest, AddOrderNewCustomerRequest } from "../types/order-types";
import { addOrdersNewCustomerZodSchema } from "../../../../../util/schemas/add-orders-zod-schema";

type emptyObject = Record<string, never>;

export const parseAddOrderNewCustomerRequest = (
  req: Request<emptyObject, emptyObject, AddOrderNewCustomerRequest>
): AddOrderNewCustomerEvaluatedRequest => {
  try {
    const data = addOrdersNewCustomerZodSchema.parse(req.body);
    return data;
  } catch {
    return { error: "MissingRequestBodyData" };
  }
};
