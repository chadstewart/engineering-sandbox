import { Request, Response, NextFunction } from "express";
import { supplier, supplierDetails } from "../../../models/suppliers";
import { handleGetSupplierRequest } from "./util/get-suppliers/handle-get-suppliers-request";
import { parseGetSupplierRequest } from "./util/get-suppliers/parse-get-suppliers-request";
import { GetSupplierDetailsParams, GetSuppliersParams } from "./util/types/supplier-types";
import { handleGetSupplierDetailsRequest } from "./util/get-supplier-details/handle-get-supplier-details-request";
import { parseGetSuppliersDetailsRequest } from "./util/get-supplier-details/parse-get-supplier-details-request";

export async function getSuppliers(req: Request<GetSuppliersParams>, res: Response, next: NextFunction) {
  const { statusCode, ...rest } = await handleGetSupplierRequest(parseGetSupplierRequest(req), supplier, req.path);
  const supplierResponse = rest;
  res.status(statusCode).json(supplierResponse);
  return next();
}

export async function getSupplierDetails(req: Request<GetSupplierDetailsParams>, res: Response, next: NextFunction) {
  const { statusCode, ...rest } = await handleGetSupplierDetailsRequest(
    parseGetSuppliersDetailsRequest(req),
    supplierDetails
  );
  const supplierDetailsResponse = rest;
  res.status(statusCode).json(supplierDetailsResponse);
  return next();
}
