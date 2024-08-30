import { expect, it, describe, vi } from "vitest";
import { Request, Response } from "express";
import {
  getOrders,
  getOrderDetails
  /* addOrderAddExistingCustomer,
  addOrderAddNewCustomer */
} from "../../../../v1/controllers/orders-controller/";
import {
  GetOrderDetailsParams,
  GetOrdersParams
} from "../../../../v1/controllers/orders-controller/util/types/order-types";

describe("Controller: Orders", () => {
  vi.mock("../../../../models/orders", () => {
    return {
      orders: vi.fn(() => "test"),
      orderDetails: vi.fn(() => "test")
    };
  });

  vi.mock("../../../../v1/controllers/orders-controller/util/get-orders/handle-get-orders-request", () => {
    return {
      handleGetOrdersRequest: vi.fn(() => {
        return {
          statusCode: 200,
          data: "test"
        };
      })
    };
  });

  vi.mock("../../../../v1/controllers/orders-controller/util/get-orders/parse-get-orders-request", () => {
    return {
      parseGetOrdersRequest: vi.fn(() => "test")
    };
  });

  vi.mock(
    "../../../../v1/controllers/orders-controller/util/get-order-details/handle-get-order-details-request",
    () => {
      return {
        handleGetOrderDetailsRequest: vi.fn(() => {
          return {
            statusCode: 200,
            data: "test"
          };
        })
      };
    }
  );

  vi.mock("../../../../v1/controllers/orders-controller/util/get-order-details/parse-get-order-details-request", () => {
    return {
      parseGetOrderDetailsRequest: vi.fn(() => "test")
    };
  });

  it("getOrders: Should send a response", async () => {
    const mockRequest = {
      params: {
        page: 1
      }
    };

    const mockNextFunc = vi.fn();
    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const mockResponse = {
      status: mockStatusFunc
    };

    await getOrders(
      mockRequest as unknown as Request<GetOrdersParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      data: "test",
      status: "success"
    });
  });

  it("getOrders: Should call the next function", async () => {
    const mockRequest = {
      params: {
        page: 1
      }
    };

    const mockNextFunc = vi.fn();
    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const mockResponse = {
      status: mockStatusFunc
    };

    await getOrders(
      mockRequest as unknown as Request<GetOrdersParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("getOrderDetails: Should send a response", async () => {
    const mockRequest = {
      params: {
        order_id: 1
      }
    };

    const mockNextFunc = vi.fn();
    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const mockResponse = {
      status: mockStatusFunc
    };

    await getOrderDetails(
      mockRequest as unknown as Request<GetOrderDetailsParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      data: "test",
      status: "success"
    });
  });

  it("getOrderDetails: Should call the next function", async () => {
    const mockRequest = {
      params: {
        order_id: 1
      }
    };

    const mockNextFunc = vi.fn();
    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const mockResponse = {
      status: mockStatusFunc
    };

    await getOrderDetails(
      mockRequest as unknown as Request<GetOrderDetailsParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockNextFunc).toHaveBeenCalled();
  });
});
