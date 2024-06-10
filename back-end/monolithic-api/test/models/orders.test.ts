import { expect, describe, it, vi, afterEach } from "vitest";
import { prismaPaginationHelper } from "../../util/pagination-helper";
import { addOrderExistingCustomer, addOrderNewCustomer, orderDetails, orders } from "../../models/orders";

describe("Models: Orders", () => {
  vi.mock("../../util/pagination-helper", () => {
    return {
      prismaPaginationHelper: vi.fn(() => {
        return {
          skip: 1,
          take: 1
        };
      })
    };
  });

  vi.mock("../../util/generate-customer-id", () => {
    return {
      generateCustomerId: vi.fn(() => "test")
    };
  });

  vi.mock("../../services/database", () => {
    return {
      prisma: {
        orders: {
          findMany: vi.fn(() => "test"),
          create: vi.fn(() => 1),
          count: vi.fn(() => 1)
        },
        order_details: {
          findMany: vi.fn(() => "test"),
          create: vi.fn(() => "test")
        },
        customers: {
          create: vi.fn(() => "test")
        },
        $transaction: vi.fn(() => "test")
      }
    };
  });

  vi.mock("../../util/row-limit", () => {
    return {
      ROW_LIMIT: 1
    };
  });

  vi.mock("../../util/schemas/add-orders-zod-schema", () => {
    return {
      addOrdersNewCustomerZodSchema: {
        parse: vi.fn(() => {
          return {
            orders: {
              employee_id: "test",
              order_date: "test",
              required_date: "test",
              shipped_date: "test",
              ship_via: "test",
              freight: "test",
              ship_name: "test",
              ship_address: "test",
              ship_city: "test",
              ship_region: "test",
              ship_postal_code: "test",
              ship_country: "test"
            },
            order_details: { product_id: "test", unit_price: "test", quantity: "test", discount: "test" },
            customers: {
              company_name: "test",
              contact_name: "test",
              contact_title: "test",
              address: "test",
              city: "test",
              region: "test",
              postal_code: "test",
              country: "test",
              phone: "test"
            }
          };
        })
      },
      addOrdersExistingCustomerZodSchema: {
        parse: vi.fn(() => {
          return {
            orders: {
              employee_id: "test",
              order_date: "test",
              required_date: "test",
              shipped_date: "test",
              ship_via: "test",
              freight: "test",
              ship_name: "test",
              ship_address: "test",
              ship_city: "test",
              ship_region: "test",
              ship_postal_code: "test",
              ship_country: "test"
            },
            order_details: { product_id: "test", unit_price: "test", quantity: "test", discount: "test" }
          };
        })
      }
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("orders: Should return data in the expected shape", async () => {
    const outputToTest = await orders();
    expect(outputToTest).toStrictEqual({
      queryData: "test",
      totalRows: 1,
      totalPages: 1
    });
  });

  it("orders: Should call prismaPagiantionHelper with appropriate page number", async () => {
    const testPageNumber = 2;
    const mockPaginationHelperFn = vi.mocked(prismaPaginationHelper);
    await orders(testPageNumber);
    expect(mockPaginationHelperFn).toHaveBeenCalledWith(testPageNumber);
  });

  it("orderDetails: Should return data in the expected shape", async () => {
    const testOrderId = 1;
    const outputToTest = await orderDetails(testOrderId);
    expect(outputToTest).toBe("test");
  });

  it("addOrderNewCustomer: Should return data in the expected shape", async () => {
    const testBody = "test";
    const outputToTest = await addOrderNewCustomer(testBody);
    expect(outputToTest).toBe("test");
  });

  it("addOrderNewCustomer: Should call prismaPagiantionHelper with appropriate page number", async () => {
    const testBody = "test";
    const dataToTest = await addOrderNewCustomer(testBody);
    expect(dataToTest).toStrictEqual("test");
  });

  it("addOrderExistingCustomer: Should return data in the expected shape", async () => {
    const testCustomerId = "test";
    const testBody = "test";
    const outputToTest = await addOrderExistingCustomer(testBody, testCustomerId);
    expect(outputToTest).toBe("test");
  });

  it("addOrderExistingCustomer: Should call prismaPagiantionHelper with appropriate page number", async () => {
    const testCustomerId = "test";
    const testBody = "test";
    const dataToTest = await addOrderExistingCustomer(testBody, testCustomerId);
    expect(dataToTest).toStrictEqual("test");
  });
});
