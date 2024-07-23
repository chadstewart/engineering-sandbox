import { afterAll, describe, expect, it, vi } from "vitest";
import {
  GetSupplierDetailsEvaluatedRequest,
  GetSupplierDetailsRequestError
} from "../../../../../../v1/controllers/suppliers-controller/util/types/supplier-types";
import { handleGetSupplierDetailsRequest } from "../../../../../../v1/controllers/suppliers-controller/util/get-supplier-details/handle-get-supplier-details-request";
import { supplierDetails } from "../../../../../../models/suppliers";

describe("Supplier Controller Util Function: Handle Get Supplier Details Request", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  it("Should return a failed response object when it receives an object with an error attribute", async () => {
    vi.mock(
      "../../../../../../v1/controllers/suppliers-controller/util/get-supplier-details/create-error-message",
      () => {
        return {
          createErrorMessage: vi.fn(() => "test")
        };
      }
    );

    const testObj: GetSupplierDetailsRequestError = {
      error: "MissingSupplierId"
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleGetSupplierDetailsRequest(
      testObj,
      mockDataProvider as unknown as typeof supplierDetails
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 400,
      status: "failed",
      error: "test"
    });
  });

  it("Should return a success response object when it receives an object with a region_id attribute", async () => {
    const testObj: GetSupplierDetailsEvaluatedRequest = {
      supplier_id: 2
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleGetSupplierDetailsRequest(
      testObj,
      mockDataProvider as unknown as typeof supplierDetails
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 200,
      status: "success",
      data: "test"
    });
  });
});
