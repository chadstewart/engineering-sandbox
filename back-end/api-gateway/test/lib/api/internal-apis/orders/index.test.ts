import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import api from "../../../../../lib/api/config/api";
import { getOrderDetails, getOrders } from "../../../../../lib/api/internal-apis/orders";

describe("Internal API Function: Orders", () => {
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

  it("getOrders: Return data in it's proper shape", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: {
          queryData: [
            {
              order_id: 1,
              customer_id: "test",
              employee_id: 1,
              order_date: "test",
              required_date: "test",
              shipped_date: "test",
              ship_via: 1,
              freight: 1,
              ship_name: "test",
              ship_address: "test",
              ship_city: "test",
              ship_region: "test",
              ship_postal_code: "test",
              ship_country: "test"
            }
          ]
        },
        totalRows: 1,
        totalPages: 1
      })
    );

    type typeToTest = {
      order: {
        order_id: number;
        customer_id: string;
        employee_id: number;
        order_date: string | null;
        required_date: string | null;
        shipped_date: string | null;
        ship_via: number | null;
        freight: number | null;
        ship_name: string | null;
        ship_address: string | null;
        ship_city: string | null;
        ship_region: string | null;
        ship_postal_code: string | null;
        ship_country: string | null;
      }[];
      totalRows: number;
      totalPages: number;
    };

    const apiData = await getOrders();

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("getOrders: Should be called the proper number in the URL", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: {
          queryData: [
            {
              order_id: 1,
              customer_id: "test",
              employee_id: 1,
              order_date: "test",
              required_date: "test",
              shipped_date: "test",
              ship_via: 1,
              freight: 1,
              ship_name: "test",
              ship_address: "test",
              ship_city: "test",
              ship_region: "test",
              ship_postal_code: "test",
              ship_country: "test"
            }
          ]
        },
        totalRows: 1,
        totalPages: 1
      })
    );

    const testNumber = 2;
    const apiSpy = vi.spyOn(api, "get");

    await getOrders(testNumber);
    expect(apiSpy.mock.calls[0].includes(`test/v1/orders/${testNumber}`)).toBeTruthy();
  });

  it("getOrderDetails: Return data in it's proper shape", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: [
          {
            orders: {
              order_date: "test",
              shipped_date: "test"
            },
            products: {
              product_id: 1
            },
            order_id: 1,
            unit_price: 1,
            quantity: 1
          }
        ]
      })
    );

    type typeToTest = {
      orders: {
        order_date: string | null;
        shipped_date: string | null;
      };
      products: {
        product_id: number;
      };
      order_id: number;
      unit_price: number;
      quantity: number;
    }[];

    const apiData = await getOrderDetails();

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("getOrderDetails: Should be called the proper number in the URL", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: [
          {
            orders: {
              order_date: "test",
              shipped_date: "test"
            },
            products: {
              product_id: 1
            },
            order_id: 1,
            unit_price: 1,
            quantity: 1
          }
        ]
      })
    );

    const testNumber = 2;
    const apiSpy = vi.spyOn(api, "get");

    await getOrderDetails(testNumber);
    expect(apiSpy.mock.calls[0].includes(`test/v1/orders/details/${testNumber}`)).toBeTruthy();
  });
});
