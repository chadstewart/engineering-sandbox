import { describe, expect, it } from "vitest";
import { createErrorMessage } from "../../../../../../v1/controllers/categories-controller/util/get-categories/create-error-message";
import { GetCategoriesRequestError } from "../../../../../../v1/controllers/categories-controller/util/get-categories/types/get-categories-types";

describe("Get Categories Util: Create Error Message", () => {
  it("Should output 'parameter 'page' in states/'page' is missing' when error object is 'MissingPage'", () => {
    const testObj: GetCategoriesRequestError = {
      error: "MissingPage"
    };
    const variableToTest = createErrorMessage(testObj, "/categories");
    expect(variableToTest).toBe("parameter 'page' in /categories/'page' is missing");
  });

  it("Should output 'states/'page' must be a number' when error object is 'PageIsNotAValidNumber'", () => {
    const testObj: GetCategoriesRequestError = {
      error: "PageIsNotAValidNumber"
    };
    const variableToTest = createErrorMessage(testObj, "/categories");
    expect(variableToTest).toBe("/categories/'page' must be a number");
  });
});
