import { Request, Response, NextFunction } from "express";
import { categories, categoryDetails } from "../../../models/categories";
import { handleGetCategoriesRequest } from "./util/get-categories/handle-get-categories-request";
import { parseGetCategoriesRequest } from "./util/get-categories/parse-get-categories-request";
import { GetCategoriesParams, GetCategoryDetailsParams } from "./util/types/categories-types";
import { handleGetCategoryDetailsRequest } from "./util/get-category-details/handle-get-category-details-request";
import { parseGetCategoryDetailsRequest } from "./util/get-category-details/parse-get-category-details-request";

export async function getCategories(req: Request<GetCategoriesParams>, res: Response, next: NextFunction) {
  const { statusCode, ...rest } = await handleGetCategoriesRequest(
    parseGetCategoriesRequest(req),
    categories,
    req.path
  );
  const getCategoriesResponse = rest;
  res.status(statusCode).json(getCategoriesResponse);
  return next();
}

export async function getCategoryDetails(req: Request<GetCategoryDetailsParams>, res: Response, next: NextFunction) {
  const { statusCode, ...rest } = await handleGetCategoryDetailsRequest(
    parseGetCategoryDetailsRequest(req),
    categoryDetails
  );
  const categoryDetailsResponse = rest;
  res.status(statusCode).json(categoryDetailsResponse);
  return next();
}
