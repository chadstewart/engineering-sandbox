import { afterAll, describe, expect, it, vi } from "vitest";
import { categoryDetails } from "../../../../../../models/categories";
import { handleGetCategoryDetailsRequest } from "../../../../../../v1/controllers/categories-controller/util/get-category-details/handle-get-category-details-request";
import {
  GetCategoryDetailsEvaluatedRequest,
  GetCategoryDetailsRequestError
} from "../../../../../../v1/controllers/categories-controller/util/types/categories-types";

describe("Category Controller Util Function: Handle Get Category Details Request", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  it("Should return a failed response object when it receives an object with an error attribute", async () => {
    vi.mock(
      "../../../../../../v1/controllers/categories-controller/util/get-category-details/create-error-message",
      () => {
        return {
          createErrorMessage: vi.fn(() => "test")
        };
      }
    );

    const testObj: GetCategoryDetailsRequestError = {
      error: "MissingCategoryId"
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleGetCategoryDetailsRequest(
      testObj,
      mockDataProvider as unknown as typeof categoryDetails
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 400,
      status: "failed",
      error: "test"
    });
  });

  it("Should return a success response object when it receives an object with a region_id attribute", async () => {
    const testObj: GetCategoryDetailsEvaluatedRequest = {
      category_id: 2
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleGetCategoryDetailsRequest(
      testObj,
      mockDataProvider as unknown as typeof categoryDetails
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 200,
      status: "success",
      data: "test"
    });
  });
});
