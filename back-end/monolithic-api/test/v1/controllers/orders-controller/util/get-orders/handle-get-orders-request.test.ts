import { afterAll, describe, expect, it, vi } from "vitest";
import { GetOrderEvaluatedRequest } from "../../../../../../v1/controllers/orders-controller/util/types/order-types";
import { handleGetOrdersRequest } from "../../../../../../v1/controllers/orders-controller/util/get-orders/handle-get-orders-request";
import { orders } from "../../../../../../models/orders";

describe("Orders Controller Util Function: HandleGetOrderRequest", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  it("Should return a failed response object when it receives an object with an error attribute", async () => {
    vi.mock("../../../../../../v1/controllers/orders-controller/util/get-orders/create-error-message", () => {
      return {
        createErrorMessage: vi.fn(() => "test")
      };
    });

    const testObj: GetOrderEvaluatedRequest = {
      error: "MissingPage"
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleGetOrdersRequest(testObj, mockDataProvider as unknown as typeof orders, "test");
    expect(variableToTest).toStrictEqual({
      statusCode: 400,
      status: "failed",
      error: "test"
    });
  });

  it("Should return a success response object when it receives an object with a page attribute", async () => {
    const testObj: GetOrderEvaluatedRequest = {
      page: 2
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleGetOrdersRequest(testObj, mockDataProvider as unknown as typeof orders, "test");
    expect(variableToTest).toStrictEqual({
      statusCode: 200,
      status: "success",
      data: "test"
    });
  });
});
