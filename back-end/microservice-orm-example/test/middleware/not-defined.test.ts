import { expect, it, vi, describe, afterEach } from "vitest";
import { Request, Response } from "express";
import notDefined from "../../middleware/not-defined";

describe("Middleware: Not Defined", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Should return a response object when path does not meet the requirements to proceed", () => {
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
    const testResponse = {
      status: mockStatusFunc
    };

    notDefined(mockRequest as Request, testResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(405);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: false,
      message: "The route you tried to access is not defined"
    });
  });

  it("Should call the next function when path meets the requirements to proceed", () => {
    const mockRequest = {
      path: "/v1"
    };
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

    notDefined(mockRequest as Request, testResponse as unknown as Response, mockNextFunc);

    expect(mockNextFunc).toHaveBeenCalled();
  });
});
