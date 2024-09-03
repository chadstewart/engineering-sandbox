import { afterAll, describe, expect, it, vi } from "vitest";
import {
  AddOrderExistingCustomerRequest,
  AddOrderExistingCustomerRequestError
} from "../../../../../../v1/controllers/orders-controller/util/types/order-types";
import { addOrderExistingCustomer } from "../../../../../../models/orders";
import { handleAddOrderExistingCustomerRequest } from "../../../../../../v1/controllers/orders-controller/util/add-order-existing-customer/handle-add-order-existing-customer-request";

describe("Orders Controller Util Function: Handle Add Order Existing Customer Request", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  it("Should return a failed response object when it receives an object with an error attribute", async () => {
    vi.mock(
      "../../../../../../v1/controllers/orders-controller/util/add-order-existing-customer/create-error-message",
      () => {
        return {
          createErrorMessage: vi.fn(() => "test")
        };
      }
    );

    const testObj: AddOrderExistingCustomerRequestError = {
      error: "MissingCustomerId"
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleAddOrderExistingCustomerRequest(
      testObj,
      mockDataProvider as unknown as typeof addOrderExistingCustomer
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 400,
      status: "failed",
      error: "test"
    });
  });

  it("Should return a success response object when it receives an object with a customer_id attribute", async () => {
    const testObj = {
      params: {
        customer_id: "1"
      }
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleAddOrderExistingCustomerRequest(
      testObj as unknown as AddOrderExistingCustomerRequest,
      mockDataProvider as unknown as typeof addOrderExistingCustomer
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 201,
      status: "success",
      data: "test"
    });
  });
});
