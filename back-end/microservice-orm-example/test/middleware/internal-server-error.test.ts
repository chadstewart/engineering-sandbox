import { expect, it, vi, describe, afterEach } from "vitest";
import { internalServerErrorMiddleware } from "../../middleware/internal-server-error";
import { Request, Response } from "express";

describe("Middleware: Internal Server Error", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Should call the status function in the res object with a 500 and should call the json function with an object", () => {
    const mockRequest = {};
    const mockErrorObject = {};
    const mockNextFunc = vi.fn();

    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const testResponse = {
      status: mockStatusFunc
    };

    internalServerErrorMiddleware(
      mockErrorObject as Error,
      mockRequest as Request,
      testResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockStatusFunc).toHaveBeenCalledWith(500);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "Internal Server Error"
    });
  });

  it("Should call the next function", () => {
    const mockRequest = {};
    const mockErrorObject = {};
    const mockNextFunc = vi.fn();

    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const testResponse = {
      status: mockStatusFunc
    };

    internalServerErrorMiddleware(
      mockErrorObject as Error,
      mockRequest as Request,
      testResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockNextFunc).toHaveBeenCalled();
  });
});
