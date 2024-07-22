import {
  PaginationRequest,
  PaginationRequestError
} from "../../../../../util/pagination-utils/parse-pagination-request-types";

export type GetProductsParams = {
  page: string;
};

export type GetProductRequest = PaginationRequest;

export type GetProductRequestError = PaginationRequestError;

export type GetProductEvaluatedRequest = GetProductRequest | GetProductRequestError;

export type GetProductDetailsParams = {
  product_id: string;
};

export type GetProductDetailsRequest = {
  product_id: number;
};

export type GetProductDetailsRequestError = {
  error: "MissingProductId" | "ProductIdIsNotAValidNumber";
};

export type GetProductDetailsEvaluatedRequest = GetProductDetailsRequest | GetProductDetailsRequestError;
