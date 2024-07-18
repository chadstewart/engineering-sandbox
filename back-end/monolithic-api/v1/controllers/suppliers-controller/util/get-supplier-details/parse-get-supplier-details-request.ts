import { Request } from "express";
import { GetSupplierDetailsEvaluatedRequest, GetSupplierDetailsParams } from "../types/supplier-types";

export const parseGetSuppliersDetailsRequest = (
  req: Request<GetSupplierDetailsParams>
): GetSupplierDetailsEvaluatedRequest => {
  if (!req.params.supplier_id) return { error: "MissingSupplierId" };
  const SuppliersId = parseInt(req.params.supplier_id);
  if (isNaN(SuppliersId) || SuppliersId < 1) return { error: "SupplierIdIsNotAValidNumber" };
  return { supplier_id: SuppliersId };
};
