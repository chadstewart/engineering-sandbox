import { beforeEach, describe, expect, it, vi } from "vitest";
import { parseGetSupplierRequest } from "../../../../../v1/controllers/suppliers-controller/util/get-suppliers/parse-get-suppliers-request";
import { Request } from "express";
import { GetSuppliersParams } from "../../../../../v1/controllers/suppliers-controller/util/types/supplier-types";

describe("Get Supplier Util Function: Parse Get Supplier Request", () => {
  beforeEach(() => {
    vi.mock("../../../../../util/pagination-utils/parse-pagination-request", () => {
      return {
        parsePaginationRequest: vi.fn(() => "test")
      };
    });
  });

  it("Should return a variable", () => {
    const testObj = {
      page: "test"
    };

    const variableToTest = parseGetSupplierRequest(testObj as unknown as Request<GetSuppliersParams>);
    expect(variableToTest).toBe("test");
  });
});
