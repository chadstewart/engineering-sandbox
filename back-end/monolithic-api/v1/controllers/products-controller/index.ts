import { Request, Response, NextFunction } from "express";
import { products, productDetails } from "../../../models/products";
import { handleGetProductsRequest } from "./util/get-products/handle-get-products-request";
import { parseGetProductsRequest } from "./util/get-products/parse-get-products-request";
import { GetProductsParams } from "./util/types/product-types";

export async function getProducts(req: Request<GetProductsParams>, res: Response, next: NextFunction) {
  const { statusCode, ...rest } = await handleGetProductsRequest(parseGetProductsRequest(req), products, req.path);
  const productResponse = rest;
  res.status(statusCode).json(productResponse);
  return next();
}

export async function getProductDetails(req: Request, res: Response, next: NextFunction) {
  let productId = 1;

  const isProductIdInRoute = req.params.product_id;
  if (isProductIdInRoute) productId = Number(req.params.product_id);

  const isProductIdNaN = Number.isNaN(productId) || productId === 1;
  if (isProductIdNaN) {
    res.status(400).json({
      status: "failed",
      error: "products/details/'product_id' must be a number"
    });

    return next();
  }

  const data = await productDetails(productId);

  res.status(200).json({
    status: "success",
    data: data
  });

  return next();
}
