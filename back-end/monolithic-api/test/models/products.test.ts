import { expect, describe, it, vi, afterEach } from "vitest";
import { prismaPaginationHelper } from "../../util/pagination-helper";
import { prisma } from "../../services/database";
import { productDetails, products } from "../../models/products";

describe("Models: Products", () => {
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
        products: {
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

  it("products: Should return data in the expected shape", async () => {
    const outputToTest = await products();
    expect(outputToTest).toStrictEqual({
      queryData: "test",
      totalRows: 1,
      totalPages: 1
    });
  });

  it("products: Should call prismaPagiantionHelper with appropriate page number", async () => {
    const testPageNumber = 2;
    const mockPaginationHelperFn = vi.mocked(prismaPaginationHelper);
    await products(testPageNumber);
    expect(mockPaginationHelperFn).toHaveBeenCalledWith(testPageNumber);
  });

  it("productDetails: Should return data in the expected shape", async () => {
    const outputToTest = await productDetails();
    expect(outputToTest).toBe("test");
  });

  it("productDetails: Should call prismaPagiantionHelper with appropriate page number", async () => {
    const testProductId = 2;
    const mockFindManyFn = vi.mocked(prisma.products.findMany);
    await productDetails(testProductId);
    expect(mockFindManyFn).toHaveBeenCalledWith({
      where: {
        product_id: testProductId
      }
    });
  });
});
