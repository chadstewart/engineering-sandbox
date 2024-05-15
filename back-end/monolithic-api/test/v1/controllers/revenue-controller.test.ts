import { expect, it, describe, vi, afterEach, beforeEach } from "vitest";
import { Request, Response } from "express";
import { getTotalRevenue } from "../../../v1/controllers/revenue-controller";

describe("Controller: Revenue", () => {
  beforeEach(() => {
    vi.mock("../../../models/revenue", () => {
      return {
        totalRevenue: vi.fn(() => "test")
      };
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Should send proper data response when called", async () => {
    const mockRequest = {
      path: ""
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

    await getTotalRevenue(mockRequest as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("Should call the next function", async () => {
    const mockRequest = {
      path: ""
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

    await getTotalRevenue(mockRequest as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockNextFunc).toHaveBeenCalled();
  });
});
