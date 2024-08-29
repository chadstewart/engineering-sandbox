import { describe, expect, it } from "vitest";
import { createErrorMessage } from "../../../../../../v1/controllers/orders-controller/util/get-orders/create-error-message";
import { GetOrderRequestError } from "../../../../../../v1/controllers/orders-controller/util/types/order-types";

describe("Get Orders Util: Create Error Message", () => {
  it("Should output 'parameter 'page' in /orders/'page' is missing' when error object is 'MissingPage'", () => {
    const testObj: GetOrderRequestError = {
      error: "MissingPage"
    };
    const variableToTest = createErrorMessage(testObj, "/orders");
    expect(variableToTest).toBe("parameter 'page' in /orders/'page' is missing");
  });

  it("Should output '/orders/'page' must be a number' when error object is 'PageIsNotAValidNumber'", () => {
    const testObj: GetOrderRequestError = {
      error: "PageIsNotAValidNumber"
    };
    const variableToTest = createErrorMessage(testObj, "/orders");
    expect(variableToTest).toBe("/orders/'page' must be a number");
  });
});
