import { expect, describe, it, vi, afterEach } from "vitest";
import { prisma } from "../../services/database";
import { regionDetails } from "../../models/region";

describe("Models: Regions", () => {
  vi.mock("../../services/database", () => {
    return {
      prisma: {
        region: {
          findMany: vi.fn(() => "test"),
          count: vi.fn(() => 1)
        }
      }
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("regionDetails: Should return data in the expected shape", async () => {
    const outputToTest = await regionDetails();
    expect(outputToTest).toBe("test");
  });

  it("regionDetails: Should call prismaPagiantionHelper with appropriate page number", async () => {
    const testRegionId = 2;
    const mockFindManyFn = vi.mocked(prisma.region.findMany);
    await regionDetails(testRegionId);
    expect(mockFindManyFn).toHaveBeenCalledWith({
      where: {
        region_id: testRegionId
      }
    });
  });
});
