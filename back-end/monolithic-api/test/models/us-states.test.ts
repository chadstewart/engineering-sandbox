import { expect, describe, it, vi, afterEach } from "vitest";
import { usStates } from "../../models/us-states";
import { prismaPaginationHelper } from "../../util/pagination-helper";

describe("Models: US States", () => {
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
        us_states: {
          findMany: vi.fn(() => "test"),
          count: vi.fn(() => 1)
        }
      }
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("usStates: Should return data in the expected shape", async () => {
    const outputToTest = await usStates();
    expect(outputToTest).toStrictEqual({
      queryData: "test",
      totalRows: 1
    });
  });

  it("usStates: Should call prismaPagiantionHelper with appropriate page number", async () => {
    const testPageNumber = 2;
    const mockPaginationHelperFn = vi.mocked(prismaPaginationHelper);
    await usStates(testPageNumber);
    expect(mockPaginationHelperFn).toHaveBeenCalledWith(testPageNumber);
  });
});
