import { afterEach, beforeEach, describe, expectTypeOf, it, vi } from "vitest";
import { getTotalRevenue } from "../../../../../lib/api/internal-apis/revenue";

describe("Internal API Function: Revenue", () => {
  beforeEach(() => {
    vi.mock("../../../../../lib/api/config/api", () => {
      return {
        default: {
          get: (schema: unknown, url: URL | RequestInfo) =>
            Promise.resolve({
              status: "test",
              data: [
                {
                  total_revenue: 1
                }
              ],
              url
            })
        }
      };
    });

    vi.mock("../../../../../lib/api/util/secrets-services-url", () => {
      return {
        secretsServicesUrl: () => Promise.resolve("test")
      };
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Return data in it's proper shape", async () => {
    const apiData = await getTotalRevenue();

    expectTypeOf(apiData).toEqualTypeOf({
      total_revenue: 1
    });
  });
});
