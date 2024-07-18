import { Request, Response, NextFunction } from "express";
import { supplier, supplierDetails } from "../../../models/suppliers";
import { handleGetSupplierRequest } from "./util/get-suppliers/handle-get-suppliers-request";
import { parseGetSupplierRequest } from "./util/get-suppliers/parse-get-suppliers-request";
import { GetSuppliersParams } from "./util/types/supplier-types";

export async function getSuppliers(req: Request<GetSuppliersParams>, res: Response, next: NextFunction) {
  const { statusCode, ...rest } = await handleGetSupplierRequest(parseGetSupplierRequest(req), supplier, req.path);
  const supplierResponse = rest;
  res.status(statusCode).json(supplierResponse);
  return next();
}

export async function getSupplierDetails(req: Request, res: Response, next: NextFunction) {
  let supplierId = 1;

  const isSupplierIdInRoute = req.params.supplier_id;
  if (isSupplierIdInRoute) supplierId = Number(req.params.supplier_id);

  const isSupplierIdNaN = Number.isNaN(supplierId) || supplierId === 1;
  if (isSupplierIdNaN) {
    res.status(400).json({
      status: "failed",
      error: "supplier/details/'supplier_id' must be a number"
    });

    return next();
  }

  const data = await supplierDetails(supplierId);

  res.status(200).json({
    status: "success",
    data: data
  });

  return next();
}
