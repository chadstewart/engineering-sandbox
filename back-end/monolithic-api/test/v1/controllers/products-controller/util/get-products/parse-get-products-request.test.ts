import { beforeEach, describe, expect, it, vi } from "vitest";
import { parseGetProductsRequest } from "../../../../../../v1/controllers/products-controller/util/get-products/parse-get-products-request";
import { Request } from "express";
import { GetProductsParams } from "../../../../../../v1/controllers/products-controller/util/types/product-types";

describe("Get Categories Util Function: ParseGetCategoriesRequest", () => {
  beforeEach(() => {
    vi.mock("../../../../../../util/pagination-utils/parse-pagination-request", () => {
      return {
        parsePaginationRequest: vi.fn(() => "test")
      };
    });
  });

  it("Should return a variable", () => {
    const testObj = {
      page: "test"
    };

    const variableToTest = parseGetProductsRequest(testObj as unknown as Request<GetProductsParams>);
    expect(variableToTest).toBe("test");
  });
});
