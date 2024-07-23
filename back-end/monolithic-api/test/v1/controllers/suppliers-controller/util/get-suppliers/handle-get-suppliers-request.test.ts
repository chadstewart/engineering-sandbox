import { afterAll, describe, expect, it, vi } from "vitest";
import {
  GetSupplierRequestError,
  GetSupplierEvaluatedRequest
} from "../../../../../../v1/controllers/suppliers-controller/util/types/supplier-types";
import { handleGetSupplierRequest } from "../../../../../../v1/controllers/suppliers-controller/util/get-suppliers/handle-get-suppliers-request";
import { supplier } from "../../../../../../models/suppliers";

describe("Supplier Controller Util Function: Handle Get Supplier Request", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  it("Should return a failed response object when it receives an object with an error attribute", async () => {
    vi.mock("../../../../../v1/controllers/suppliers-controller/util/get-suppliers/create-error-message", () => {
      return {
        createErrorMessage: vi.fn(() => "test")
      };
    });

    const testObj: GetSupplierRequestError = {
      error: "MissingPage"
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleGetSupplierRequest(
      testObj,
      mockDataProvider as unknown as typeof supplier,
      "test"
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 400,
      status: "failed",
      error: "test"
    });
  });

  it("Should return a success response object when it receives an object with a page attribute", async () => {
    const testObj: GetSupplierEvaluatedRequest = {
      page: 2
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleGetSupplierRequest(
      testObj,
      mockDataProvider as unknown as typeof supplier,
      "test"
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 200,
      status: "success",
      data: "test"
    });
  });
});
