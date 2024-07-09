import { expect, it, describe, vi } from "vitest";
import { Request, Response } from "express";
import { getRegionDetails } from "../../../../v1/controllers/regions-controller";
import { RegionParams } from "../../../../v1/controllers/regions-controller/utils/types/region-types";

describe("Controller: Regions", () => {
  vi.mock("../../../models/region", () => {
    return {
      regionDetails: vi.fn(() => "test")
    };
  });

  vi.mock("../../../../v1/controllers/regions-controller/utils/handle-region-request", () => {
    return {
      handleRegionRequest: vi.fn(() => {
        return {
          statusCode: 200,
          data: "test"
        };
      })
    };
  });

  vi.mock("../../../../v1/controllers/regions-controller/utils/parse-region-request", () => {
    return {
      parseRegionRequest: vi.fn(() => "test")
    };
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

    await getRegionDetails(
      mockRequest as unknown as Request<RegionParams>,
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

    await getRegionDetails(
      mockRequest as unknown as Request<RegionParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockNextFunc).toHaveBeenCalled();
  });
});
