import { describe, expect, it, vi } from "vitest";
import { getTotalRevenue } from "../../../../v1/controllers/revenue-controller";
import { Request, Response } from "express";

describe("Controller: GetTotalRevenue", () => {
  vi.mock("../../../../models/revenue", () => {
    return {
      totalRevenue: vi.fn(() => "test")
    };
  });

  vi.mock("../../../../v1/controllers/revenue-controller/util/handle-revenue-request", () => {
    return {
      handleRevenueRequest: vi.fn(() => {
        return {
          statusCode: 200,
          status: "success",
          data: "test"
        };
      })
    };
  });

  it("Should send proper data response when called", async () => {
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

    await getTotalRevenue(mockRequest as Request<null>, mockResponse as unknown as Response, mockNextFunc);

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

    await getTotalRevenue(mockRequest as Request<null>, mockResponse as unknown as Response, mockNextFunc);

    expect(mockNextFunc).toHaveBeenCalled();
  });
});
