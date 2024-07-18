import {
  PaginationRequest,
  PaginationRequestError
} from "../../../../../util/pagination-utils/parse-pagination-request-types";

export type GetSuppliersParams = {
  page: string;
};

export type GetSupplierRequest = PaginationRequest;

export type GetSupplierRequestError = PaginationRequestError;

export type GetSupplierEvaluatedRequest = GetSupplierRequest | GetSupplierRequestError;

export type GetSupplierDetailsParams = {
  supplier_id: string;
};

export type GetSupplierDetailsRequest = {
  supplier_id: number;
};

export type GetSupplierDetailsRequestError = {
  error: "MissingSupplierId" | "SupplierIdIsNotAValidNumber";
};

export type GetSupplierDetailsEvaluatedRequest = GetSupplierDetailsRequest | GetSupplierDetailsRequestError;
