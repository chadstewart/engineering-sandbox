import { describe, expect, it, vi } from "vitest";
import { getCategories, getCategoryDetails } from "../../../../v1/controllers/categories-controller/index";
import { Request, Response } from "express";
import {
  GetCategoriesParams,
  GetCategoryDetailsParams
} from "../../../../v1/controllers/categories-controller/util/types/categories-types";

describe("Controller: Categories", () => {
  vi.mock("../../../../models/categories", () => {
    return {
      categories: vi.fn(() => "test"),
      categoryDetails: vi.fn(() => "test")
    };
  });

  vi.mock("../../../../v1/controllers/categories-controller/util/get-categories/handle-get-categories-request", () => {
    return {
      handleGetCategoriesRequest: vi.fn(() => {
        return {
          statusCode: 200,
          data: "test"
        };
      })
    };
  });

  vi.mock("../../../../v1/controllers/categories-controller/util/get-categories/parse-get-categories-request", () => {
    return {
      parseGetCategoriesRequest: vi.fn(() => "test")
    };
  });

  vi.mock(
    "../../../../v1/controllers/categories-controller/util/get-categories-details/handle-get-category-details-request",
    () => {
      return {
        handleGetCategoryDetailsRequest: vi.fn(() => {
          return {
            statusCode: 200,
            data: "test"
          };
        })
      };
    }
  );

  vi.mock(
    "../../../../v1/controllers/categories-controller/util/get-categories-details/parse-get-category-details-request",
    () => {
      return {
        parseGetCategoryDetailsRequest: vi.fn(() => "test")
      };
    }
  );

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

    await getCategories(
      mockRequest as unknown as Request<GetCategoriesParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
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

    await getCategories(
      mockRequest as unknown as Request<GetCategoriesParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("getCategoryDetails: Should send a response", async () => {
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

    await getCategoryDetails(
      mockRequest as unknown as Request<GetCategoryDetailsParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("getCategoryDetails: Should call the next function", async () => {
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

    await getCategoryDetails(
      mockRequest as unknown as Request<GetCategoryDetailsParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockNextFunc).toHaveBeenCalled();
  });
});
