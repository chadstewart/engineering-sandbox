import { afterAll, describe, expect, it, vi } from "vitest";
import { handleGetOrderDetailsRequest } from "../../../../../../v1/controllers/orders-controller/util/get-order-details/handle-get-order-details-request";
import {
  GetOrderDetailsEvaluatedRequest,
  GetOrderDetailsRequestError
} from "../../../../../../v1/controllers/orders-controller/util/types/order-types";
import { orderDetails } from "../../../../../../models/orders";

describe("Orders Controller Util Function: Handle Get Orders Details Request", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  it("Should return a failed response object when it receives an object with an error attribute", async () => {
    vi.mock("../../../../../../v1/controllers/orders-controller/util/get-order-details/create-error-message", () => {
      return {
        createErrorMessage: vi.fn(() => "test")
      };
    });

    const testObj: GetOrderDetailsRequestError = {
      error: "MissingOrderId"
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleGetOrderDetailsRequest(
      testObj,
      mockDataProvider as unknown as typeof orderDetails
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 400,
      status: "failed",
      error: "test"
    });
  });

  it("Should return a success response object when it receives an object with a region_id attribute", async () => {
    const testObj: GetOrderDetailsEvaluatedRequest = {
      order_id: 2
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleGetOrderDetailsRequest(
      testObj,
      mockDataProvider as unknown as typeof orderDetails
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 200,
      status: "success",
      data: "test"
    });
  });
});
