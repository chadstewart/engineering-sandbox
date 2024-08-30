import { describe, expect, it } from "vitest";
import { createErrorMessage } from "../../../../../../v1/controllers/orders-controller/util/get-order-details/create-error-message";
import { GetOrderDetailsRequestError } from "../../../../../../v1/controllers/orders-controller/util/types/order-types";

describe("Get Order Details Util: Create Error Message", () => {
  it("Should output 'parameter 'order_id' in /orders/details/'order_id' is missing' when error object is 'MissingPage'", () => {
    const testObj: GetOrderDetailsRequestError = {
      error: "MissingOrderId"
    };
    const variableToTest = createErrorMessage(testObj);
    expect(variableToTest).toBe("parameter 'order_id' in /orders/details/'order_id' is missing");
  });

  it("Should output '/orders/details/'order_id' must be a number' when error object is 'PageIsNotAValidNumber'", () => {
    const testObj: GetOrderDetailsRequestError = {
      error: "OrderIdIsNotAValidNumber"
    };
    const variableToTest = createErrorMessage(testObj);
    expect(variableToTest).toBe("/orders/details/'order_id' must be a number");
  });
});
