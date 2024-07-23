import { afterAll, describe, expect, it, vi } from "vitest";
import { GetCategoriesEvaluatedRequest } from "../../../../../../v1/controllers/categories-controller/util/types/categories-types";
import { handleGetProductsRequest } from "../../../../../../v1/controllers/products-controller/util/get-products/handle-get-products-request";
import { products } from "../../../../../../models/products";

describe("Products Controller Util Function: HandleGetProductRequest", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  it("Should return a failed response object when it receives an object with an error attribute", async () => {
    vi.mock("../../../../../../v1/controllers/products-controller/util/get-products/create-error-message", () => {
      return {
        createErrorMessage: vi.fn(() => "test")
      };
    });

    const testObj: GetCategoriesEvaluatedRequest = {
      error: "MissingPage"
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleGetProductsRequest(
      testObj,
      mockDataProvider as unknown as typeof products,
      "test"
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 400,
      status: "failed",
      error: "test"
    });
  });

  it("Should return a success response object when it receives an object with a page attribute", async () => {
    const testObj: GetCategoriesEvaluatedRequest = {
      page: 2
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleGetProductsRequest(
      testObj,
      mockDataProvider as unknown as typeof products,
      "test"
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 200,
      status: "success",
      data: "test"
    });
  });
});
