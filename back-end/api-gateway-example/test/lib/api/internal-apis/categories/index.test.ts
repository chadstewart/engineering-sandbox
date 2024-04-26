import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import api from "../../../../../lib/api/config/api";
import { getCategories, getCategoryDetails } from "../../../../../lib/api/internal-apis/categories";

describe("Internal API Function: Categories", () => {
  beforeEach(() => {
    vi.mock("../../../../../lib/api/config/api");
    vi.mock("../../../../../lib/api/util/secrets-services-url", () => {
      return {
        secretsServicesUrl: () => Promise.resolve("test")
      };
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("getCategories: Return data in it's proper shape", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: {
          queryData: [
            {
              category_id: 1,
              category_name: "test",
              description: "test",
              picture: {
                data: "",
                type: "test"
              }
            }
          ]
        },
        totalRows: 1,
        totalPages: 1
      })
    );

    type typeToTest = {
      category: {
        category_id: number;
        category_name: string;
        description: string | null;
        picture: {
          data: unknown[];
          type: string;
        };
      }[];
      totalRows: number;
      totalPages: number;
    };

    const apiData = await getCategories();

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("getCategories: Should be called the proper number in the URL", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: {
          queryData: [
            {
              category_id: 1,
              category_name: "test",
              description: "test",
              picture: {
                data: "",
                type: "test"
              }
            }
          ]
        },
        totalRows: 1,
        totalPages: 1
      })
    );

    const testNumber = 2;
    const apiSpy = vi.spyOn(api, "get");

    await getCategories(testNumber);
    expect(apiSpy.mock.calls[0].includes(`test/v1/categories/${testNumber}`)).toBeTruthy();
  });

  it("getCategoryDetails: Return data in it's proper shape", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: {
          queryData: [
            {
              category_id: 1,
              category_name: "test",
              description: "test",
              picture: {
                data: "",
                type: "test"
              }
            }
          ]
        }
      })
    );

    type typeToTest = {
      category_id: number;
      category_name: string;
      description: string | null;
      picture: {
        data: unknown[];
        type: string;
      };
    }[];

    const apiData = await getCategoryDetails();

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("getCategoryDetails: Should be called the proper number in the URL", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: {
          queryData: [
            {
              category_id: 1,
              category_name: "test",
              description: "test",
              picture: {
                data: "",
                type: "test"
              }
            }
          ]
        }
      })
    );

    const testNumber = 2;
    const apiSpy = vi.spyOn(api, "get");

    await getCategoryDetails(testNumber);
    expect(apiSpy.mock.calls[0].includes(`test/v1/categories/details/${testNumber}`)).toBeTruthy();
  });
});
