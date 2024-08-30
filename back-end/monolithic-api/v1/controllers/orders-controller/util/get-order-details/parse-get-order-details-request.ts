import { Request } from "express";
import { GetOrderDetailsParams, GetOrderDetailsEvaluatedRequest } from "../types/order-types";

export const parseGetOrderDetailsRequest = (req: Request<GetOrderDetailsParams>): GetOrderDetailsEvaluatedRequest => {
  if (!req.params.order_id) return { error: "MissingOrderId" };
  const orderId = parseInt(req.params.order_id);
  if (isNaN(orderId) || orderId < 1) return { error: "OrderIdIsNotAValidNumber" };
  return { order_id: orderId };
};
