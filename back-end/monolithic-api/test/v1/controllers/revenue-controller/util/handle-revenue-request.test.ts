import { describe, expect, it, vi } from "vitest";
import { handleRevenueRequest } from "../../../../../v1/controllers/revenue-controller/util/handle-revenue-request";
import { totalRevenue } from "../../../../../models/revenue";

describe("Revenue Controller Utility Function: HandleRevenueRequest", () => {
  it("Should return an constructed response object", async () => {
    const mockDataProviderFn = vi.fn(() => "test");
    const variableToTest = await handleRevenueRequest(mockDataProviderFn as unknown as typeof totalRevenue);
    expect(variableToTest).toStrictEqual({
      statusCode: 200,
      status: "success",
      data: "test"
    });
  });
});
