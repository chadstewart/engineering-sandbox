import { describe, expect, it } from "vitest";
import { createErrorMessage } from "../../../../../../v1/controllers/orders-controller/util/add-order-new-customer/create-error-message";

describe("Add Order Add New Customer Util: Create Error Message", () => {
  it("Should return an error string", () => {
    const variableToTest = createErrorMessage();
    expect(variableToTest).toBe("Some request parameters are missing from request body.");
  });
});
