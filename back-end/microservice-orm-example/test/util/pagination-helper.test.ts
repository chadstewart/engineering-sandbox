import { afterEach, expect, it, describe, vi } from "vitest";
import { prismaPaginationHelper } from "../../util/pagination-helper";
import { ROW_LIMIT } from "../../util/row-limit";

describe("Util Function: Pagination Helper", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Should return an object with the skip and the take to be put into the SQL query for Prisma", () => {
    let pageNumber = 1;

    const paginationObject1 = prismaPaginationHelper(pageNumber);

    expect(paginationObject1).toStrictEqual({
      skip: 0,
      take: ROW_LIMIT
    });

    pageNumber = 2;

    const paginationObject2 = prismaPaginationHelper(pageNumber);

    expect(paginationObject2).toStrictEqual({
      skip: ROW_LIMIT,
      take: ROW_LIMIT
    });
  });

  it("Should return the proper skip and take when the row limit is defined", () => {
    const pageNumber = 3;
    const testRowLimit = 30;

    const pagionationObject = prismaPaginationHelper(pageNumber, testRowLimit);

    expect(pagionationObject).toStrictEqual({
      skip: 60,
      take: testRowLimit
    });
  });
});
