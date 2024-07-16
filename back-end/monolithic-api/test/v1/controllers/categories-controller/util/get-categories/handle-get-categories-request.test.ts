import { afterAll, describe, expect, it, vi } from "vitest";
import { GetCategoriesEvaluatedRequest } from "../../../../../../v1/controllers/categories-controller/util/types/categories-types";
import { handleGetCategoriesRequest } from "../../../../../../v1/controllers/categories-controller/util/get-categories/handle-get-categories-request";
import { categories } from "../../../../../../models/categories";

describe("US States Controller Util Function: HandleUsStatesRequest", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  it("Should return a failed response object when it receives an object with an error attribute", async () => {
    vi.mock("../../../../../../v1/controllers/categories-controller/util/get-categories/create-error-message", () => {
      return {
        createErrorMessage: vi.fn(() => "test")
      };
    });

    const testObj: GetCategoriesEvaluatedRequest = {
      error: "MissingPage"
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleGetCategoriesRequest(
      testObj,
      mockDataProvider as unknown as typeof categories,
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

    const variableToTest = await handleGetCategoriesRequest(
      testObj,
      mockDataProvider as unknown as typeof categories,
      "test"
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 200,
      status: "success",
      data: "test"
    });
  });
});
