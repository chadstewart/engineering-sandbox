import {
  PaginationRequest,
  PaginationRequestError
} from "../../../../../util/pagination-utils/parse-pagination-request-types";
import zod from "zod";
import {
  addOrdersExistingCustomerZodSchema,
  addOrdersNewCustomerZodSchema
} from "../../../../../util/schemas/add-orders-zod-schema";

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

export type AddOrderNewCustomerRequest = AddOrderExistingCustomerRequestBody;

export type AddOrderNewCustomerRequestError = {
  error: "MissingRequestBodyData";
};

export type AddOrderNewCustomerEvaluatedRequest = AddOrderNewCustomerRequest | AddOrderNewCustomerRequestError;

export type AddOrderExistingCustomerParams = {
  customer_id: string;
};

export type AddOrderExistingCustomerRequestBody = zod.infer<typeof addOrdersExistingCustomerZodSchema>;

export interface AddOrderExistingCustomerRequest {
  requestBody: AddOrderExistingCustomerRequestBody;
  params: {
    customer_id: number;
  };
}

export type AddOrderExistingCustomerRequestError = {
  error: "MissingRequestBodyData" | "MissingCustomerId" | "CustomerIdIsNotAValidNumber";
};

export type AddOrderExistingCustomerEvaluatedRequest =
  | AddOrderExistingCustomerRequest
  | AddOrderExistingCustomerRequestError;
