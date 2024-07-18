import { describe, expect, it, vi } from "vitest";
import { getSuppliers } from "../../../../v1/controllers/suppliers-controller";
import { Request, Response } from "express";
import { GetSuppliersParams } from "../../../../v1/controllers/suppliers-controller/util/types/supplier-types";

describe("Controller: Supplier", () => {
  vi.mock("../../../../models/suppliers", () => {
    return {
      supplier: vi.fn(() => "test"),
      supplierDetails: vi.fn(() => "test")
    };
  });

  vi.mock("../../../../v1/controllers/categories-controller/util/get-categories/handle-get-categories-request", () => {
    return {
      handleGetSupplierRequest: vi.fn(() => {
        return {
          statusCode: 200,
          data: "test"
        };
      })
    };
  });

  vi.mock("../../../../v1/controllers/categories-controller/util/get-categories/parse-get-categories-request", () => {
    return {
      parseGetSupplierRequest: vi.fn(() => "test")
    };
  });

  it("getCategories: Should send a response", async () => {
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

    await getSuppliers(
      mockRequest as unknown as Request<GetSuppliersParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

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

    await getSuppliers(
      mockRequest as unknown as Request<GetSuppliersParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockNextFunc).toHaveBeenCalled();
  });
});
