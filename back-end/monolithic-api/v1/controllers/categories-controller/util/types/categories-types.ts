import {
  PaginationRequest,
  PaginationRequestError
} from "../../../../../util/pagination-utils/parse-pagination-request-types";

export type GetCategoriesParams = {
  page: string;
};

export type GetCategoriesRequest = PaginationRequest;

export type GetCategoriesRequestError = PaginationRequestError;

export type GetCategoriesEvaluatedRequest = GetCategoriesRequest | GetCategoriesRequestError;

export type GetCategoryDetailsParams = {
  category_id: string;
};

export type GetCategoryDetailsRequest = {
  category_id: number;
};

export type GetCategoryDetailsRequestError = {
  error: "MissingCategoryId" | "CategoryIdIsNotAValidNumber";
};

export type GetCategoryDetailsEvaluatedRequest = GetCategoryDetailsRequest | GetCategoryDetailsRequestError;
