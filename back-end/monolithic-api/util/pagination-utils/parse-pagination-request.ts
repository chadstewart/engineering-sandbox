import { Request } from "express";
import { PaginationRequest, PaginationRequestError } from "./parse-pagination-request-types";

export const parsePaginationRequest = (req: Request<{ page: string }>): PaginationRequest | PaginationRequestError => {
  if (!req.params.page) return { error: "MissingPage" };
  const page = parseInt(req.params.page);
  if (isNaN(page) || page < 1) return { error: "PageIsNotAValidNumber" };
  return { page };
};
