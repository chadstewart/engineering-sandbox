import { describe, expect, it } from "vitest";
import { createErrorMessage } from "../../../../../../v1/controllers/orders-controller/util/add-order-existing-customer/create-error-message";
import { AddOrderExistingCustomerRequestError } from "../../../../../../v1/controllers/orders-controller/util/types/order-types";

describe("Add Order Existing Customer Util: Create Error Message", () => {
  it("Should output 'parameter 'customer_id' in /orders/details/'customer_id' is missing' when error object is 'MissingCustomerId'", () => {
    const testObj: AddOrderExistingCustomerRequestError = {
      error: "MissingCustomerId"
    };
    const variableToTest = createErrorMessage(testObj);
    expect(variableToTest).toBe("parameter 'customer_id' in /orders/'customer_id' is missing");
  });

  it("Should output '/orders/'customer_id' must be a number' when error object is 'CustomerIdIsNotAValidNumber'", () => {
    const testObj: AddOrderExistingCustomerRequestError = {
      error: "CustomerIdIsNotAValidNumber"
    };
    const variableToTest = createErrorMessage(testObj);
    expect(variableToTest).toBe("/orders/'customer_id' must be a number");
  });

  it("Should output 'some parameters are missing from request body' when error object is 'MissingRequestBodyData'", () => {
    const testObj: AddOrderExistingCustomerRequestError = {
      error: "MissingRequestBodyData"
    };
    const variableToTest = createErrorMessage(testObj);
    expect(variableToTest).toBe("Some parameters are missing from request body");
  });
});
