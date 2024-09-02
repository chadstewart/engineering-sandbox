import {
  PaginationRequest,
  PaginationRequestError
} from "../../../../../util/pagination-utils/parse-pagination-request-types";
import zod from "zod";
import { addOrdersNewCustomerZodSchema } from "../../../../../util/schemas/add-orders-zod-schema";

export type GetOrdersParams = {
  page: string;
};

export type GetOrderRequest = PaginationRequest;

export type GetOrderRequestError = PaginationRequestError;

export type GetOrderEvaluatedRequest = GetOrderRequest | GetOrderRequestError;

export type GetOrderDetailsParams = {
  order_id: string;
};

export type GetOrderDetailsRequest = {
  order_id: number;
};

export type GetOrderDetailsRequestError = {
  error: "MissingOrderId" | "OrderIdIsNotAValidNumber";
};

export type GetOrderDetailsEvaluatedRequest = GetOrderDetailsRequest | GetOrderDetailsRequestError;

export type AddOrderNewCustomerRequestBody = zod.infer<typeof addOrdersNewCustomerZodSchema>;

export interface AddOrderNewCustomerRequest extends AddOrderNewCustomerRequestBody {}

export type AddOrderNewCustomerRequestError = {
  error: "MissingParams";
};

export type AddOrderNewCustomerEvaluatedRequest = AddOrderNewCustomerRequest | AddOrderNewCustomerRequestError;
