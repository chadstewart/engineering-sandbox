import { Request } from "express";
import { GetCategoryDetailsParams, GetCategoryDetailsEvaluatedRequest } from "../types/categories-types";

export const parseGetCategoryDetailsRequest = (
  req: Request<GetCategoryDetailsParams>
): GetCategoryDetailsEvaluatedRequest => {
  if (!req.params.category_id) return { error: "MissingCategoryId" };
  const categoryId = parseInt(req.params.category_id);
  if (isNaN(categoryId) || categoryId < 1) return { error: "CategoryIdIsNotAValidNumber" };
  return { category_id: categoryId };
};
