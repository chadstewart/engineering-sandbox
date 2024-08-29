import { expect, it, describe, vi, afterEach, beforeEach } from "vitest";
import { Request, Response } from "express";
import {
  getOrders
  /* getOrderDetails,
  addOrderAddExistingCustomer,
  addOrderAddNewCustomer */
} from "../../../../v1/controllers/orders-controller/";
import { GetOrdersParams } from "../../../../v1/controllers/orders-controller/util/types/order-types";

describe("Controller: Orders", () => {
  beforeEach(() => {
    vi.mock("../../../models/orders", () => {
      return {
        orders: () => "test",
        orderDetails: () => "test",
        addOrderNewCustomer: () => "test",
        addOrderExistingCustomer: () => "test"
      };
    });

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
  });

  afterEach(() => {
    vi.resetAllMocks();
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
});
