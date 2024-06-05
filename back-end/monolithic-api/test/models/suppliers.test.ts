import { expect, describe, it, vi, afterEach } from "vitest";
import { prismaPaginationHelper } from "../../util/pagination-helper";
import { prisma } from "../../services/database";
import { supplier, supplierDetails } from "../../models/suppliers";

describe("Models: Suppliers", () => {
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
        suppliers: {
          findMany: vi.fn(() => "test"),
          count: vi.fn(() => 1)
        }
      }
    };
  });

  vi.mock("../../util/row-limit", () => {
    return {
      ROW_LIMIT: 1
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("supplier: Should return data in the expected shape", async () => {
    const outputToTest = await supplier();
    expect(outputToTest).toStrictEqual({
      queryData: "test",
      totalRows: 1,
      totalPages: 1
    });
  });

  it("supplier: Should call prismaPagiantionHelper with appropriate page number", async () => {
    const testPageNumber = 2;
    const mockPaginationHelperFn = vi.mocked(prismaPaginationHelper);
    await supplier(testPageNumber);
    expect(mockPaginationHelperFn).toHaveBeenCalledWith(testPageNumber);
  });

  it("supplierDetails: Should return data in the expected shape", async () => {
    const outputToTest = await supplierDetails();
    expect(outputToTest).toBe("test");
  });

  it("supplierDetails: Should call prismaPagiantionHelper with appropriate page number", async () => {
    const testSupplierId = 2;
    const mockFindManyFn = vi.mocked(prisma.suppliers.findMany);
    await supplierDetails(testSupplierId);
    expect(mockFindManyFn).toHaveBeenCalledWith({
      where: {
        supplier_id: testSupplierId
      }
    });
  });
});
