import {
  PaginationRequest,
  PaginationRequestError
} from "../../../../../util/pagination-utils/parse-pagination-request-types";

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
