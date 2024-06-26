import { Request } from "express";
import { PaginationRequest, PaginationRequestError } from "./parse-pagination-request-types";

type MustHavePageParamInRequest = Request<{ page: string }> & Request<unknown>;

export const parsePaginationRequest = (req: MustHavePageParamInRequest): PaginationRequest | PaginationRequestError => {
  if (!req.params.page) return { error: "MissingPage" };
  const page = parseInt(req.params.page);
  if (isNaN(page) || page < 1) return { error: "PageIsNotAValidNumber" };
  return { page };
};
