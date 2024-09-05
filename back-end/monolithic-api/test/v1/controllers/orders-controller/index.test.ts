import { expect, it, describe, vi } from "vitest";
import { Request, Response } from "express";
import {
  getOrders,
  getOrderDetails,
  addOrderAddExistingCustomer,
  addOrderAddNewCustomer
} from "../../../../v1/controllers/orders-controller/";
import {
  AddOrderExistingCustomerParams,
  AddOrderExistingCustomerRequestBody,
  AddOrderNewCustomerRequestBody,
  GetOrderDetailsParams,
  GetOrdersParams
} from "../../../../v1/controllers/orders-controller/util/types/order-types";

type emptyObject = Record<string, never>;

describe("Controller: Orders", () => {
  vi.mock("../../../../models/orders", () => {
    return {
      orders: vi.fn(() => "test"),
      orderDetails: vi.fn(() => "test"),
      addOrderNewCustomer: vi.fn(() => "test"),
      addOrderExistingCustomer: vi.fn(() => "test")
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

  vi.mock(
    "../../../../v1/controllers/orders-controller/util/add-order-new-customer/handle-add-order-new-customer-request",
    () => {
      return {
        handleAddOrderNewCustomerRequest: vi.fn(() => {
          return {
            statusCode: 200,
            data: "test"
          };
        })
      };
    }
  );

  vi.mock(
    "../../../../v1/controllers/orders-controller/util/add-order-new-customer/parse-add-order-new-customer-request",
    () => {
      return {
        parseAddOrderNewCustomerRequest: vi.fn(() => "test")
      };
    }
  );

  vi.mock(
    "../../../../v1/controllers/orders-controller/util/add-order-existing-customer/handle-add-order-existing-customer-request",
    () => {
      return {
        handleAddOrderExistingCustomerRequest: vi.fn(() => {
          return {
            statusCode: 200,
            data: "test"
          };
        })
      };
    }
  );

  vi.mock(
    "../../../../v1/controllers/orders-controller/util/add-order-existing-customer/parse-add-order-existing-customer-request",
    () => {
      return {
        parseAddOrderExistingCustomerRequest: vi.fn(() => "test")
      };
    }
  );

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
      data: "test"
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
      data: "test"
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

  it("addOrderAddNewCustomer: Should send a response", async () => {
    const mockRequest = {
      test: "test"
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

    await addOrderAddNewCustomer(
      mockRequest as unknown as Request<emptyObject, emptyObject, AddOrderNewCustomerRequestBody>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      data: "test"
    });
  });

  it("AddOrderAddNewCustomer: Should call the next function", async () => {
    const mockRequest = {
      params: {
        customer_id: 1
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

    await addOrderAddNewCustomer(
      mockRequest as unknown as Request<emptyObject, emptyObject, AddOrderNewCustomerRequestBody>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("addOrderAddExistingCustomer: Should send a response", async () => {
    const mockRequest = {
      test: "test"
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

    await addOrderAddExistingCustomer(
      mockRequest as unknown as Request<
        AddOrderExistingCustomerParams,
        emptyObject,
        AddOrderExistingCustomerRequestBody
      >,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      data: "test"
    });
  });

  it("AddOrderAddExistingCustomer: Should call the next function", async () => {
    const mockRequest = {
      params: {
        customer_id: 1
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

    await addOrderAddExistingCustomer(
      mockRequest as unknown as Request<
        AddOrderExistingCustomerParams,
        emptyObject,
        AddOrderExistingCustomerRequestBody
      >,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockNextFunc).toHaveBeenCalled();
  });
});
