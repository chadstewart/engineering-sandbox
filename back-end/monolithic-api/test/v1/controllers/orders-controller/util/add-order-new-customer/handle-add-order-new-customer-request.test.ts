import { afterAll, describe, expect, it, vi } from "vitest";
import {
  AddOrderNewCustomerEvaluatedRequest,
  AddOrderNewCustomerRequestError
} from "../../../../../../v1/controllers/orders-controller/util/types/order-types";
import { handleAddOrderNewCustomerRequest } from "../../../../../../v1/controllers/orders-controller/util/add-order-new-customer/handle-add-order-new-customer-request";
import { addOrderNewCustomer } from "../../../../../../models/orders";

describe("Order Controller Util Function: Handle Add Order New Customer Request", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  it("Should return a failed response object when it receives an object with an error attribute", async () => {
    vi.mock(
      "../../../../../../v1/controllers/orders-controller/util/add-order-new-customer/create-error-message",
      () => {
        return {
          createErrorMessage: vi.fn(() => "test")
        };
      }
    );

    const testObj: AddOrderNewCustomerRequestError = {
      error: "MissingRequestBodyData"
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleAddOrderNewCustomerRequest(
      testObj,
      mockDataProvider as unknown as typeof addOrderNewCustomer
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 400,
      status: "failed",
      error: "test"
    });
  });

  it("Should return a success response object when it receives an object with a region_id attribute", async () => {
    const testObj = {
      test: "test"
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleAddOrderNewCustomerRequest(
      testObj as unknown as AddOrderNewCustomerEvaluatedRequest,
      mockDataProvider as unknown as typeof addOrderNewCustomer
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 200,
      status: "success",
      data: "test"
    });
  });
});
