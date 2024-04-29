import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import { getRegionById } from "../../../../../lib/api/internal-apis/regions";
import api from "../../../../../lib/api/config/api";

describe("Internal API Function: Region", () => {
  beforeEach(() => {
    vi.mock("../../../../../lib/api/config/api", () => {
      return {
        default: {
          get: (schema: unknown, url: URL | RequestInfo) =>
            Promise.resolve({
              data: [
                {
                  region_id: 1,
                  region_description: url
                }
              ]
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
    const apiData = await getRegionById();

    type typeToTest = {
      region_id: number;
      region_description: string;
    }[];

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("Should be called the proper number in the URL", async () => {
    const testNumber = 2;
    const apiSpy = vi.spyOn(api, "get");

    await getRegionById(testNumber);
    expect(apiSpy).toHaveBeenCalledOnce();

    expect(apiSpy.mock.calls[0].includes(`test/v1/regions/details/${testNumber}`)).toBeTruthy();
  });
});
