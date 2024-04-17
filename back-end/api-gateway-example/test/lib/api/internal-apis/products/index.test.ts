import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import api from "../../../../../lib/api/config/api";
import { getProductDetails, getProducts } from "../../../../../lib/api/internal-apis/products";

describe("Internal API Function: Products", () => {
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

  it("getProducts: Return data in it's proper shape", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: {
          queryData: [
            {
              product_id: 1,
              product_name: "test",
              supplier_id: 1,
              category_id: 1,
              unit_price: 1,
              units_in_stock: 1,
              units_on_order: 1,
              discontinued: 1
            }
          ]
        },
        totalRows: 1,
        totalPages: 1
      })
    );

    type typeToTest = {
      product: {
        product_id: number;
        product_name: string;
        supplier_id: number;
        category_id: number;
        unit_price: number;
        units_in_stock: number | null;
        units_on_order: number | null;
        discontinued: number;
      }[];
      totalRows: number;
      totalPages: number;
    };

    const apiData = await getProducts();

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("getProducts: Should be called the proper number in the URL", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: {
          queryData: [
            {
              product_id: 1,
              product_name: "test",
              supplier_id: 1,
              category_id: 1,
              unit_price: 1,
              units_in_stock: 1,
              units_on_order: 1,
              discontinued: 1
            }
          ]
        },
        totalRows: 1,
        totalPages: 1
      })
    );

    const testNumber = 2;
    const apiSpy = vi.spyOn(api, "get");

    await getProducts(testNumber);
    expect(apiSpy.mock.calls[0].includes(`test/v1/products/${testNumber}`)).toBeTruthy();
  });

  it("getProductDetails: Return data in it's proper shape", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: [
          {
            product_id: 1,
            product_name: "test",
            supplier_id: 1,
            category_id: 1,
            unit_price: 1,
            units_in_stock: 1,
            units_on_order: 1,
            discontinued: 1
          }
        ]
      })
    );

    type typeToTest = {
      product_id: number;
      product_name: string;
      supplier_id: number;
      category_id: number;
      unit_price: number;
      units_in_stock: number | null;
      units_on_order: number | null;
      discontinued: number;
    }[];

    const apiData = await getProductDetails();

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("getProductDetails: Should be called the proper number in the URL", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: [
          {
            product_id: 1,
            product_name: "test",
            supplier_id: 1,
            category_id: 1,
            unit_price: 1,
            units_in_stock: 1,
            units_on_order: 1,
            discontinued: 1
          }
        ]
      })
    );

    const testNumber = 2;
    const apiSpy = vi.spyOn(api, "get");

    await getProductDetails(testNumber);
    expect(apiSpy.mock.calls[0].includes(`test/v1/products/details/${testNumber}`)).toBeTruthy();
  });
});
