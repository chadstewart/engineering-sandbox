import { afterAll, describe, expect, it, vi } from "vitest";
import { handleGetProductDetailsRequest } from "../../../../../../v1/controllers/products-controller/util/get-product-details/handle-get-products-details-request";
import {
  GetProductDetailsEvaluatedRequest,
  GetProductDetailsRequestError
} from "../../../../../../v1/controllers/products-controller/util/types/product-types";
import { productDetails } from "../../../../../../models/products";

describe("Category Controller Util Function: Handle Get Category Details Request", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  it("Should return a failed response object when it receives an object with an error attribute", async () => {
    vi.mock(
      "../../../../../../v1/controllers/products-controller/util/get-product-details/create-error-message",
      () => {
        return {
          createErrorMessage: vi.fn(() => "test")
        };
      }
    );

    const testObj: GetProductDetailsRequestError = {
      error: "MissingProductId"
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleGetProductDetailsRequest(
      testObj,
      mockDataProvider as unknown as typeof productDetails
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 400,
      status: "failed",
      error: "test"
    });
  });

  it("Should return a success response object when it receives an object with a region_id attribute", async () => {
    const testObj: GetProductDetailsEvaluatedRequest = {
      product_id: 2
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleGetProductDetailsRequest(
      testObj,
      mockDataProvider as unknown as typeof productDetails
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 200,
      status: "success",
      data: "test"
    });
  });
});
