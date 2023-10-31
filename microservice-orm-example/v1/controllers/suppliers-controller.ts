import { Request, Response, NextFunction } from "express";
import { supplier, supplierDetails } from "../../models/suppliers";

export async function getSuppliers (req: Request, res: Response, next: NextFunction) {
  let page = 1;

  const isPageNumberInRoute = req.params.page;
  if(isPageNumberInRoute) page = Number(req.params.page);

  const isPageNumberNaN = Number.isNaN(page);
  if(isPageNumberNaN) {
    res.status(400).json({
      status: "failed",
      error: "supplier/'page' must be a number"
    });

    return next();
  }

  const data = await supplier(page);

  res.status(200).json({
    status: "success",
    data: data
  });

  return next();
};

export async function getSupplierDetails (req: Request, res: Response, next: NextFunction) {
  let supplierId = 1;

  const isSupplierIdInRoute = req.params.supplier_id;
  if(isSupplierIdInRoute) supplierId = Number(req.params.supplier_id);

  const isSupplierIdNaN = Number.isNaN(supplierId);
  if(isSupplierIdNaN) {
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
};