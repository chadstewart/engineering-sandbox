import { beforeEach, describe, expect, it, vi } from "vitest";
import { parseGetCategoriesRequest } from "../../../../../../v1/controllers/categories-controller/util/get-categories/parse-get-categories-request";
import { Request } from "express";
import { GetCategoriesParams } from "../../../../../../v1/controllers/categories-controller/util/get-categories/types/get-categories-types";

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

    const variableToTest = parseGetCategoriesRequest(testObj as unknown as Request<GetCategoriesParams>);
    expect(variableToTest).toBe("test");
  });
});
