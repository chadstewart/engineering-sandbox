import {
  PaginationRequest,
  PaginationRequestError
} from "../../../../../../util/pagination-utils/parse-pagination-request-types";

export type GetCategoriesParams = {
  page: string;
};

export type GetCategoriesRequest = PaginationRequest;

export type GetCategoriesRequestError = PaginationRequestError;

export type GetCategoriesEvaluatedRequest = GetCategoriesRequest | GetCategoriesRequestError;
