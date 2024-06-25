import {
  PaginationRequest,
  PaginationRequestError
} from "../../../util/pagination-utils/parse-pagination-request-types";

export type UsStatesRequest = PaginationRequest;

export type UsStatesRequestError = PaginationRequestError;

export type UsStatesEvaluatedRequest = UsStatesRequest | UsStatesRequestError;
