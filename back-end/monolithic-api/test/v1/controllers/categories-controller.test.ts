import { expect, it, describe, vi, afterEach, beforeEach } from "vitest";
import { Request, Response } from "express";
import { getCategories, getCategoryDetails } from "../../../v1/controllers/categories-controller";

describe("Controller: Categories", () => {
  beforeEach(() => {
    vi.mock("../../../models/categories", () => {
      return {
        categories: () => "test",
        categoryDetails: () => "test"
      };
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("getCategories: Should send proper data response when called", async () => {
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

    await getCategories(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("getCategories: Should call the next function", async () => {
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

    await getCategories(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("getCategories: Should return a response object that says it failed because page isn't a number", async () => {
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

    await getCategories(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "category/'page' must be a number"
    });
  });

  it("getCategoryDetails: Should send proper data response when called", async () => {
    const mockRequest = {
      params: {
        category_id: 2
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

    await getCategoryDetails(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("getCategoryDetails: Should call the next function", async () => {
    const mockRequest = {
      params: {
        category_id: 2
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

    await getCategoryDetails(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("getCategoryDetails: Should return a response object that says it failed because page isn't a number", async () => {
    const mockRequest = {
      params: {
        category: "hello"
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

    await getCategoryDetails(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "category/details/'category_id' must be a number"
    });
  });
});
