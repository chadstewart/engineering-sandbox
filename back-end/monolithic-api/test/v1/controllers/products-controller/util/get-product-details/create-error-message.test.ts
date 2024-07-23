import { describe, expect, it } from "vitest";
import { createErrorMessage } from "../../../../../../v1/controllers/products-controller/util/get-product-details/create-error-message";
import { GetProductDetailsRequestError } from "../../../../../../v1/controllers/products-controller/util/types/product-types";

describe("Get Product Details Util: Create Error Message", () => {
  it("Should output 'parameter 'product_id' in /products/details/'product_id' is missing' when error object is 'MissingPage'", () => {
    const testObj: GetProductDetailsRequestError = {
      error: "MissingProductId"
    };
    const variableToTest = createErrorMessage(testObj);
    expect(variableToTest).toBe("parameter 'product_id' in /products/details/'product_id' is missing");
  });

  it("Should output '/products/details/'product_id' must be a number' when error object is 'PageIsNotAValidNumber'", () => {
    const testObj: GetProductDetailsRequestError = {
      error: "ProductIdIsNotAValidNumber"
    };
    const variableToTest = createErrorMessage(testObj);
    expect(variableToTest).toBe("/products/details/'product_id' must be a number");
  });
});
