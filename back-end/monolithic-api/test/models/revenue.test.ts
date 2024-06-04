import { expect, describe, it, afterEach, beforeEach, vi } from "vitest";
import { totalRevenue } from "../../models/revenue";

describe("Models: Revenue", () => {
  beforeEach(() => {
    vi.mock("../../services/database", () => {
      return {
        prisma: {
          $queryRaw: vi.fn(() => "test")
        }
      };
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("totalRevenue: Should return something", async () => {
    const outputToTest = await totalRevenue();
    expect(outputToTest).toBe("test");
  });
});
