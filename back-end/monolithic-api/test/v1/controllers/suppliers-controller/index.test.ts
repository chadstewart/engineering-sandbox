import { describe, expect, it, vi } from "vitest";
import { getSupplierDetails, getSuppliers } from "../../../../v1/controllers/suppliers-controller";
import { Request, Response } from "express";
import {
  GetSupplierDetailsParams,
  GetSuppliersParams
} from "../../../../v1/controllers/suppliers-controller/util/types/supplier-types";

describe("Controller: Supplier", () => {
  vi.mock("../../../../models/suppliers", () => {
    return {
      supplier: vi.fn(() => "test"),
      supplierDetails: vi.fn(() => "test")
    };
  });

  vi.mock("../../../../v1/controllers/suppliers-controller/util/get-suppliers/handle-get-supplier-request", () => {
    return {
      handleGetSupplierRequest: vi.fn(() => {
        return {
          statusCode: 200,
          data: "test"
        };
      })
    };
  });

  vi.mock("../../../../v1/controllers/suppliers-controller/util/get-suppliers/parse-get-supplier-request", () => {
    return {
      parseGetSupplierRequest: vi.fn(() => "test")
    };
  });

  vi.mock(
    "../../../../v1/controllers/suppliers-controller/util/get-supplier-details/handle-get-supplier-details-request",
    () => {
      return {
        handleGetSupplierDetailsRequest: vi.fn(() => {
          return {
            statusCode: 200,
            data: "test"
          };
        })
      };
    }
  );

  vi.mock(
    "../../../../v1/controllers/suppliers-controller/util/get-supplier-details/parse-get-supplier-details-request",
    () => {
      return {
        parseGetSuppliersDetailsRequest: vi.fn(() => "test")
      };
    }
  );

  it("getSuppliers: Should send a response", async () => {
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

  it("getSuppliers: Should call the next function", async () => {
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

  it("getSupplierDetails: Should send a response", async () => {
    const mockRequest = {
      params: {
        supplier_id: 2
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

    await getSupplierDetails(
      mockRequest as unknown as Request<GetSupplierDetailsParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      data: "test"
    });
  });

  it("getSupplierDetails: Should call the next function", async () => {
    const mockRequest = {
      params: {
        supplier_id: 2
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

    await getSupplierDetails(
      mockRequest as unknown as Request<GetSupplierDetailsParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockNextFunc).toHaveBeenCalled();
  });
});
