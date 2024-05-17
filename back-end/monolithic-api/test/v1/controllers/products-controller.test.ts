import { expect, it, describe, vi, afterEach, beforeEach } from "vitest";
import { Request, Response } from "express";
import { getProductDetails, getProducts } from "../../../v1/controllers/products-controller";

describe("Controller: Products", () => {
  beforeEach(() => {
    vi.mock("../../../models/products", () => {
      return {
        products: () => "test",
        productDetails: () => "test"
      };
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("getProducts: Should send proper data response when called", async () => {
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

    await getProducts(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("getProducts: Should call the next function", async () => {
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

    await getProducts(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("getProducts: Should return a response object that says it failed because page isn't a number", async () => {
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

    await getProducts(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "products/'page' must be a number"
    });
  });

  it("getProductDetails: Should send proper data response when called", async () => {
    const mockRequest = {
      params: {
        product_id: 2
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

    await getProductDetails(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("getProductDetails: Should call the next function", async () => {
    const mockRequest = {
      params: {
        product_id: 2
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

    await getProductDetails(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("getProductDetails: Should return a response object that says it failed because page isn't a number", async () => {
    const mockRequest = {
      params: {
        product_id: "hello"
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

    await getProductDetails(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "products/details/'product_id' must be a number"
    });
  });
});
