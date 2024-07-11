import { Request, Response, NextFunction } from "express";
import { categories, categoryDetails } from "../../../models/categories";
import { handleGetCategoriesRequest } from "./util/get-categories/handle-get-categories-request";
import { parseGetCategoriesRequest } from "./util/get-categories/parse-get-categories-request";
import { GetCategoriesParams } from "./util/get-categories/types/get-categories-types";

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

export async function getCategoryDetails(req: Request, res: Response, next: NextFunction) {
  let categoryId = 1;

  const isCategoryIdInRoute = req.params.category_id;
  if (isCategoryIdInRoute) categoryId = Number(req.params.category_id);

  const isCategoryIdNaN = Number.isNaN(categoryId) || categoryId === 1;
  if (isCategoryIdNaN) {
    res.status(400).json({
      status: "failed",
      error: "category/details/'category_id' must be a number"
    });

    return next();
  }

  const data = await categoryDetails(categoryId);

  res.status(200).json({
    status: "success",
    data: data
  });

  return next();
}
