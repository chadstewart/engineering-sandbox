import { supplierDetails } from "../../../../../models/suppliers";
import { GetSupplierDetailsEvaluatedRequest } from "../types/supplier-types";
import { createErrorMessage } from "./create-error-message";

export const handleGetSupplierDetailsRequest = async (
  evaluatedRequest: GetSupplierDetailsEvaluatedRequest,
  dataProvider: typeof supplierDetails
) => {
  if ("error" in evaluatedRequest)
    return {
      statusCode: 400,
      status: "failed",
      error: createErrorMessage(evaluatedRequest)
    };

  return {
    statusCode: 200,
    status: "success",
    data: await dataProvider(evaluatedRequest.supplier_id)
  };
};
