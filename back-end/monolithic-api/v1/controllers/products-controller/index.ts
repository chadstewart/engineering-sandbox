import { Request, Response, NextFunction } from "express";
import { products, productDetails } from "../../../models/products";
import { handleGetProductsRequest } from "./util/get-products/handle-get-products-request";
import { parseGetProductsRequest } from "./util/get-products/parse-get-products-request";
import { GetProductDetailsParams, GetProductsParams } from "./util/types/product-types";
import { parseGetProductDetailsRequest } from "./util/get-product-details/parse-get-product-details-request";
import { handleGetProductDetailsRequest } from "./util/get-product-details/handle-get-products-details-request";

export async function getProducts(req: Request<GetProductsParams>, res: Response, next: NextFunction) {
  const { statusCode, ...rest } = await handleGetProductsRequest(parseGetProductsRequest(req), products, req.path);
  const productResponse = rest;
  res.status(statusCode).json(productResponse);
  return next();
}

export async function getProductDetails(req: Request<GetProductDetailsParams>, res: Response, next: NextFunction) {
  const { statusCode, ...rest } = await handleGetProductDetailsRequest(
    parseGetProductDetailsRequest(req),
    productDetails
  );
  const productDetailResponse = rest;
  res.status(statusCode).json(productDetailResponse);
  return next();
}
