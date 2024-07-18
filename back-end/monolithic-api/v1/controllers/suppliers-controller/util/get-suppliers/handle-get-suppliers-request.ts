import { supplier } from "../../../../../models/suppliers";
import { createErrorMessage } from "./create-error-message";
import { GetSupplierEvaluatedRequest } from "../types/supplier-types";

export const handleGetSupplierRequest = async (
  evaluatedRequest: GetSupplierEvaluatedRequest,
  dataProvider: typeof supplier,
  reqPath: string
) => {
  if ("error" in evaluatedRequest)
    return {
      statusCode: 400,
      status: "failed",
      error: createErrorMessage(evaluatedRequest, reqPath)
    };

  return {
    statusCode: 200,
    status: "success",
    data: await dataProvider(evaluatedRequest.page)
  };
};
