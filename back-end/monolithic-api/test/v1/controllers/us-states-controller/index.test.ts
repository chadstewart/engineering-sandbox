import { describe, expect, it, vi } from "vitest";
import { getUSStates } from "../../../../v1/controllers/us-states-controller";
import { afterEach, beforeEach } from "node:test";
import { Request, Response } from "express";
import { UsStatesParams } from "../../../../v1/controllers/us-states-controller/util/types/us-states-types";

describe("Controller: US States", () => {
  beforeEach(() => {
    vi.mock("../../../../models/us-states", () => {
      return {
        usStates: vi.fn(() => "test")
      };
    });

    vi.mock("../../../../v1/controllers/us-states-controller/util/handle-us-states-request", () => {
      return {
        handleUsStatesRequest: vi.fn(() => {
          return {
            statusCode: 200,
            data: "test"
          };
        })
      };
    });

    vi.mock("../../../../v1/controllers/us-states-controller/util/parse-us-states-request", () => {
      return {
        parseUsStatesRequest: vi.fn(() => "test")
      };
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });
  it("Should send a response", async () => {
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

    await getUSStates(
      mockRequest as unknown as Request<UsStatesParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      data: "test"
    });
  });

  it("Should call the next function", async () => {
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

    await getUSStates(
      mockRequest as unknown as Request<UsStatesParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockNextFunc).toHaveBeenCalled();
  });
});
