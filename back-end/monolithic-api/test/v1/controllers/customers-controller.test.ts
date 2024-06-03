import { expect, it, describe, vi, afterEach, beforeEach } from "vitest";
import { Request, Response } from "express";
import {
  getAllCustomerIDs,
  getCustomerCountryDistribution,
  getCustomerDetails,
  getCustomers,
  updateCustomerById
} from "../../../v1/controllers/customers-controller";

describe("Controller: Customers", () => {
  beforeEach(() => {
    vi.mock("../../../models/customers", () => {
      return {
        customers: () => "test",
        customerDetails: () => "test",
        updateCustomer: () => "test",
        customerCountryDistribution: () => "test",
        allCustomerIDs: () => "test"
      };
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("getCustomers: Should send proper data response when called", async () => {
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

    await getCustomers(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("getCustomers: Should call the next function", async () => {
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

    await getCustomers(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("getCustomers: Should return a response object that says it failed because page isn't a number", async () => {
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

    await getCustomers(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "customers/'page' must be a number"
    });
  });

  it("getCustomerDetails: Should send proper data response when called", async () => {
    const mockRequest = {
      params: {
        customer_id: 2
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

    await getCustomerDetails(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("getCustomerDetails: Should call the next function", async () => {
    const mockRequest = {
      params: {
        customer_id: 2
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

    await getCustomerDetails(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("getCustomerDetails: Should return a response object that says it failed because customer_id isn't set", async () => {
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

    await getCustomerDetails(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "customers/details/'customer_id' must have a value"
    });
  });

  it("updateCustomerById: Should send proper data response when called", async () => {
    const mockRequest = {
      params: {
        customer_id: "hello"
      },
      body: {
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

    await updateCustomerById(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("updateCustomerById: Should call the next function", async () => {
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

    await updateCustomerById(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("updateCustomerById: Should return a response object that says it failed because customer_id isn't set", async () => {
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

    await updateCustomerById(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "customers/'customer_id' must have a value"
    });
  });

  it("updateCustomerById: Should return a response object that says it failed because the body data isn't in the proper shape", async () => {
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

    await updateCustomerById(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "The request body is not what was expected."
    });
  });

  it("getCustomerCountryDistribution: Should send proper data response when called", async () => {
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

    await getCustomerCountryDistribution(
      mockRequest as unknown as Request,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("getCustomerCountryDistribution: Should call the next function", async () => {
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

    await getCustomerCountryDistribution(
      mockRequest as unknown as Request,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("getAllCustomerIDs: Should send proper data response when called", async () => {
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

    await getAllCustomerIDs(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("getAllCustomerIDs: Should call the next function", async () => {
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

    await getAllCustomerIDs(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockNextFunc).toHaveBeenCalled();
  });
});
