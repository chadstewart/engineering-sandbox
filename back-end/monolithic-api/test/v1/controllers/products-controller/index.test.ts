import { describe, expect, it, vi } from "vitest";
import { Request, Response } from "express";
import { getProductDetails, getProducts } from "../../../../v1/controllers/products-controller";
import {
  GetProductDetailsParams,
  GetProductsParams
} from "../../../../v1/controllers/products-controller/util/types/product-types";

describe("Controller: Products", () => {
  vi.mock("../../../../models/products", () => {
    return {
      products: vi.fn(() => "test"),
      productDetails: vi.fn(() => "test")
    };
  });

  vi.mock("../../../../v1/controllers/products-controller/util/get-products/handle-get-products-request", () => {
    return {
      handleGetProductsRequest: vi.fn(() => {
        return {
          statusCode: 200,
          data: "test"
        };
      })
    };
  });

  vi.mock("../../../../v1/controllers/products-controller/util/get-products/parse-get-products-request", () => {
    return {
      parseGetProductsRequest: vi.fn(() => "test")
    };
  });

  vi.mock(
    "../../../../v1/controllers/products-controller/util/get-products-details/handle-get-product-details-request",
    () => {
      return {
        handleGetProductDetailsRequest: vi.fn(() => {
          return {
            statusCode: 200,
            data: "test"
          };
        })
      };
    }
  );

  vi.mock(
    "../../../../v1/controllers/products-controller/util/get-products-details/parse-get-product-details-request",
    () => {
      return {
        parseGetProductDetailsRequest: vi.fn(() => "test")
      };
    }
  );

  it("getProducts: Should send a response", async () => {
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

    await getProducts(
      mockRequest as unknown as Request<GetProductsParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
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

    await getProducts(
      mockRequest as unknown as Request<GetProductsParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("getProductDetails: Should send a response", async () => {
    const mockRequest = {
      params: {
        product_id: 1
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

    await getProductDetails(
      mockRequest as unknown as Request<GetProductDetailsParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("getProductDetails: Should call the next function", async () => {
    const mockRequest = {
      params: {
        category_id: 1
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

    await getProductDetails(
      mockRequest as unknown as Request<GetProductDetailsParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockNextFunc).toHaveBeenCalled();
  });
});
