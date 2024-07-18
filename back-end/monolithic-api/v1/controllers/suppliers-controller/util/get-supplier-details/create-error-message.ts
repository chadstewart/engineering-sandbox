import { GetSupplierDetailsRequestError } from "../types/supplier-types";

export const createErrorMessage = (evaluatedRequest: GetSupplierDetailsRequestError) => {
  if (evaluatedRequest.error === "MissingSupplierId")
    return "parameter 'supplier_id' in /suppliers/details/'supplier_id' is missing";
  return "/suppliers/details/'supplier_id' must be a number";
};
