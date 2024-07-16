import { describe, expect, it } from "vitest";
import { createErrorMessage } from "../../../../../../v1/controllers/categories-controller/util/get-category-details/create-error-message";
import { GetCategoryDetailsRequestError } from "../../../../../../v1/controllers/categories-controller/util/types/categories-types";

describe("Category Controller Util: Get Category Details Create Error Message", () => {
  it("Should output 'parameter 'category_id' in category/details/'category_id' is missing' is missing' when error object is 'MissingCategoryId'", () => {
    const testObj: GetCategoryDetailsRequestError = {
      error: "MissingCategoryId"
    };
    const variableToTest = createErrorMessage(testObj);
    expect(variableToTest).toBe("parameter 'category_id' in category/details/'category_id' is missing");
  });

  it("Should output 'category/details/'category_id' must be a number' when error object is 'CategoryIdIsNotAValidNumber'", () => {
    const testObj: GetCategoryDetailsRequestError = {
      error: "CategoryIdIsNotAValidNumber"
    };
    const variableToTest = createErrorMessage(testObj);
    expect(variableToTest).toBe("category/details/'category_id' must be a number");
  });
});
