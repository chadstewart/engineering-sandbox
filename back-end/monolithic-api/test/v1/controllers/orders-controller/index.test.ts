import { expect, it, describe, vi, afterEach, beforeEach } from "vitest";
import { Request, Response } from "express";
import {
  getOrderDetails,
  getOrders,
  addOrderAddExistingCustomer,
  addOrderAddNewCustomer
} from "../../../../v1/controllers/orders-controller";

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
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("getOrders: Should send proper data response when called", async () => {
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

    await getOrders(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
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

    await getOrders(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("getOrders: Should return a response object that says it failed because page isn't a number", async () => {
    const mockRequest = {
      params: {
        page: "hello"
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

    await getOrders(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "orders/'page' must be a number"
    });
  });

  it("getOrderDetails: Should send proper data response when called", async () => {
    const mockRequest = {
      params: {
        order_id: 2
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

    await getOrderDetails(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("getOrderDetails: Should call the next function", async () => {
    const mockRequest = {
      params: {
        order_id: 2
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

    await getOrderDetails(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("getOrderDetails: Should return a response object that says it failed because page isn't a number", async () => {
    const mockRequest = {
      params: {
        order_id: "hello"
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

    await getOrderDetails(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "orders/details/'order_id' must be a number"
    });
  });

  it("addOrderAddExistingCustomer: Should send proper data response when called", async () => {
    const mockRequest = {
      params: {
        customer_id: "hello"
      },
      body: {
        orders: {
          type: "object",
          employee_id: 1,
          order_date: "2023/12/1",
          required_date: "2023/12/1",
          shipped_date: "2023/12/1",
          ship_via: 1,
          freight: 1,
          ship_name: "Hello",
          ship_address: "Hello",
          ship_city: "Hello",
          ship_region: "Hello",
          ship_postal_code: "Hello",
          ship_country: "Hello"
        },
        order_details: {
          type: "object",
          product_id: 1,
          unit_price: 1,
          quantity: 1,
          discount: 1
        }
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
      mockRequest as unknown as Request,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockStatusFunc).toHaveBeenCalledWith(201);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("addOrderAddExistingCustomer: Should call the next function", async () => {
    const mockRequest = {
      params: {
        customer_id: "hello"
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
      mockRequest as unknown as Request,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("addOrderAddExistingCustomer: Should return a response object that says it failed because customer_id isn't set", async () => {
    const mockRequest = {
      params: {
        customer_id: ""
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
      mockRequest as unknown as Request,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "orders/'order_id' must be a number"
    });
  });

  it("addOrderAddExistingCustomer: Should return a response object that says it failed because the body data isn't in the proper shape", async () => {
    const mockRequest = {
      params: {
        customer_id: "hello"
      },
      body: {
        test: "test"
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
      mockRequest as unknown as Request,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "The request body is not what was expected."
    });
  });

  it("addOrderAddNewCustomer: Should send proper data response when called", async () => {
    const mockRequest = {
      params: {
        customer_id: "hello"
      },
      body: {
        orders: {
          type: "object",
          employee_id: 1,
          order_date: "2023/12/1",
          required_date: "2023/12/1",
          shipped_date: "2023/12/1",
          ship_via: 1,
          freight: 1,
          ship_name: "Hello",
          ship_address: "Hello",
          ship_city: "Hello",
          ship_region: "Hello",
          ship_postal_code: "Hello",
          ship_country: "Hello"
        },
        order_details: {
          type: "object",
          product_id: 1,
          unit_price: 1,
          quantity: 1,
          discount: 1
        },
        customers: {
          company_name: "Hello",
          contact_name: "Hello",
          contact_title: "Hello",
          address: "Hello",
          city: "Hello",
          region: "Hello",
          postal_code: "Hello",
          country: "Hello",
          phone: "Hello",
          fax: "Hello"
        }
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

    await addOrderAddNewCustomer(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(201);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("addOrderAddNewCustomer: Should call the next function", async () => {
    const mockRequest = {};

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

    await addOrderAddNewCustomer(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("addOrderAddNewCustomer: Should return a response object that says it failed because the body data isn't in the shape that's expected", async () => {
    const mockRequest = {
      body: {
        test: "test"
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

    await addOrderAddNewCustomer(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "The request body is not what was expected."
    });
  });
});
