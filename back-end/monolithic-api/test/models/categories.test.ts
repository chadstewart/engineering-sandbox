import { expect, describe, it, vi, afterEach } from "vitest";
import { prismaPaginationHelper } from "../../util/pagination-helper";
import { categories, categoryDetails } from "../../models/categories";
import { prisma } from "../../services/database";

describe("Models: Categories", () => {
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
        categories: {
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

  it("categories: Should return data in the expected shape", async () => {
    const outputToTest = await categories();
    expect(outputToTest).toStrictEqual({
      queryData: "test",
      totalRows: 1,
      totalPages: 1
    });
  });

  it("categories: Should call prismaPagiantionHelper with appropriate page number", async () => {
    const testPageNumber = 2;
    const mockPaginationHelperFn = vi.mocked(prismaPaginationHelper);
    await categories(testPageNumber);
    expect(mockPaginationHelperFn).toHaveBeenCalledWith(testPageNumber);
  });

  it("categoryDetails: Should return data in the expected shape", async () => {
    const outputToTest = await categoryDetails();
    expect(outputToTest).toBe("test");
  });

  it("categoryDetails: Should call prismaPagiantionHelper with appropriate page number", async () => {
    const testCategoryId = 2;
    const mockFindManyFn = vi.mocked(prisma.categories.findMany);
    await categoryDetails(testCategoryId);
    expect(mockFindManyFn).toHaveBeenCalledWith({
      where: {
        category_id: testCategoryId
      }
    });
  });
});
