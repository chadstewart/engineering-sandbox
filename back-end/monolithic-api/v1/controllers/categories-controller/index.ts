import { Request, Response, NextFunction } from "express";
import { categories, categoryDetails } from "../../../models/categories";

export async function getCategories(req: Request, res: Response, next: NextFunction) {
  let page = 1;

  const isPageNumberInRoute = req.params.page;
  if (isPageNumberInRoute) page = Number(req.params.page);

  const isPageNumberNaN = Number.isNaN(page);
  if (isPageNumberNaN) {
    res.status(400).json({
      status: "failed",
      error: "category/'page' must be a number"
    });

    return next();
  }

  const data = await categories(page);

  res.status(200).json({
    status: "success",
    data: data
  });

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
