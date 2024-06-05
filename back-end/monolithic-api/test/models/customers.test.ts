import { expect, describe, it, vi, afterEach } from "vitest";
import { prismaPaginationHelper } from "../../util/pagination-helper";
import { prisma } from "../../services/database";
import {
  allCustomerIDs,
  customerCountryDistribution,
  customerDetails,
  customers,
  updateCustomer
} from "../../models/customers";

describe("Models: Customers", () => {
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

  vi.mock("../../services/database", () => {
    return {
      prisma: {
        customers: {
          findMany: vi.fn(() => "test"),
          count: vi.fn(() => 1),
          update: vi.fn(() => "test"),
          groupBy: vi.fn(() => "test")
        }
      }
    };
  });

  vi.mock("../../util/row-limit", () => {
    return {
      ROW_LIMIT: 1
    };
  });

  vi.mock("../../util/remove-undefined-attributes", () => {
    return {
      removeUndefinedValuesFromObject: vi.fn(() => ["test"])
    };
  });

  vi.mock("../../util/schemas/update-customer-zod-schema", () => {
    return {
      updateCustomerZodSchema: {
        parse: vi.fn(() => "test")
      }
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("customers: Should return data in the expected shape", async () => {
    const outputToTest = await customers();
    expect(outputToTest).toStrictEqual({
      queryData: "test",
      totalRows: 1,
      totalPages: 1
    });
  });

  it("customers: Should call prismaPagiantionHelper with appropriate page number", async () => {
    const testPageNumber = 2;
    const mockPaginationHelperFn = vi.mocked(prismaPaginationHelper);
    await customers(testPageNumber);
    expect(mockPaginationHelperFn).toHaveBeenCalledWith(testPageNumber);
  });

  it("customerDetails: Should return data in the expected shape", async () => {
    const testCustomerId = "test";
    const outputToTest = await customerDetails(testCustomerId);
    expect(outputToTest).toBe("test");
  });

  it("customerDetails: Should call prismaPagiantionHelper with appropriate page number", async () => {
    const testCustomerId = "test";
    const mockFindManyFn = vi.mocked(prisma.customers.findMany);
    await customerDetails(testCustomerId);
    expect(mockFindManyFn).toHaveBeenCalledWith({
      where: {
        customer_id: testCustomerId
      }
    });
  });

  it("updateCustomer: Should return data in the expected shape", async () => {
    const testCustomerId = "test";
    const testBody = "test";
    const outputToTest = await updateCustomer(testCustomerId, testBody);
    expect(outputToTest).toBe("test");
  });

  it("updateCustomer: Should call prismaPagiantionHelper with appropriate page number", async () => {
    const testCustomerId = "test";
    const testBody = "test";
    const mockFindManyFn = vi.mocked(prisma.customers.update);
    await updateCustomer(testCustomerId, testBody);
    expect(mockFindManyFn).toHaveBeenCalledWith({
      where: {
        customer_id: testCustomerId
      },
      data: {
        0: "test"
      }
    });
  });

  it("customerCountryDistribution: Should return data in the expected shape", async () => {
    const outputToTest = await customerCountryDistribution();
    expect(outputToTest).toBe("test");
  });

  it("allCustomerIDs: Should return data in the expected shape", async () => {
    const outputToTest = await allCustomerIDs();
    expect(outputToTest).toBe("test");
  });
});
