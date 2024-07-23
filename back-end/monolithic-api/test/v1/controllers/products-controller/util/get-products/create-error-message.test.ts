import { describe, expect, it } from "vitest";
import { createErrorMessage } from "../../../../../../v1/controllers/products-controller/util/get-products/create-error-message";
import { GetProductRequestError } from "../../../../../../v1/controllers/products-controller/util/types/product-types";

describe("Get Products Util: Create Error Message", () => {
  it("Should output 'parameter 'page' in /products/'page' is missing' when error object is 'MissingPage'", () => {
    const testObj: GetProductRequestError = {
      error: "MissingPage"
    };
    const variableToTest = createErrorMessage(testObj, "/products");
    expect(variableToTest).toBe("parameter 'page' in /products/'page' is missing");
  });

  it("Should output '/products/'page' must be a number' when error object is 'PageIsNotAValidNumber'", () => {
    const testObj: GetProductRequestError = {
      error: "PageIsNotAValidNumber"
    };
    const variableToTest = createErrorMessage(testObj, "/products");
    expect(variableToTest).toBe("/products/'page' must be a number");
  });
});
