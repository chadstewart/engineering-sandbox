import { Request, Response, NextFunction } from "express";
import { products, productDetails } from "../../models/products";

export async function getProducts (req: Request, res: Response, next: NextFunction) {
  let page = 1;

  const isPageNumberInRoute = req.params.page;
  if(isPageNumberInRoute) page = Number(req.params.page);

  const isPageNumberNaN = Number.isNaN(page);
  if(isPageNumberNaN) return res.status(400).json({
    status: "failed",
    error: "products/'page' must be a number"
  });

  const data = await products(page);

  return res.status(200).json({
    status: "success",
    data: data
  });
};

export async function getProductDetails (req: Request, res: Response, next: NextFunction) {
  let productId = 1;

  const isProductIdInRoute = req.params.product_id;
  if(isProductIdInRoute) productId = Number(req.params.product_id);

  const isProductIdNaN = Number.isNaN(productId);
  if(isProductIdNaN) return res.status(400).json({
    status: "failed",
    error: "products/details/'product_id' must be a number"
  });

  const data = await productDetails(productId);

  return res.status(200).json({
    status: "success",
    data: data
  });
};