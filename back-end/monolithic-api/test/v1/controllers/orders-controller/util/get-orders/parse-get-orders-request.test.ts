import { beforeEach, describe, expect, it, vi } from "vitest";
import { parseGetOrdersRequest } from "../../../../../../v1/controllers/orders-controller/util/get-orders/parse-get-orders-request";
import { Request } from "express";
import { GetOrdersParams } from "../../../../../../v1/controllers/orders-controller/util/types/order-types";

describe("Get Orders Util Function: Parse Get Order Request", () => {
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

    const variableToTest = parseGetOrdersRequest(testObj as unknown as Request<GetOrdersParams>);
    expect(variableToTest).toBe("test");
  });
});
