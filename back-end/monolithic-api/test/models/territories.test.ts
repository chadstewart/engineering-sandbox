import { expect, describe, it, vi, afterEach } from "vitest";
import { prismaPaginationHelper } from "../../util/pagination-helper";
import { employeeFromTerritories, employeeTerritories, territories, territoriesById } from "../../models/territories";
import { prisma } from "../../services/database";

describe("Models: Territories", () => {
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
        territories: {
          findMany: vi.fn(() => "test"),
          count: vi.fn(() => 1),
          update: vi.fn(() => "test"),
          groupBy: vi.fn(() => "test")
        },
        employee_territories: {
          findMany: vi.fn(() => "test")
        },
        $queryRaw: vi.fn(() => [{ total_rows: 1 }])
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

  it("territories: Should return data in the expected shape", async () => {
    const outputToTest = await territories();
    expect(outputToTest).toStrictEqual({
      queryData: "test",
      totalRows: 1,
      totalPages: 1
    });
  });

  it("territories: Should call prismaPagiantionHelper with appropriate page number", async () => {
    const testPageNumber = 2;
    const mockPaginationHelperFn = vi.mocked(prismaPaginationHelper);
    await territories(testPageNumber);
    expect(mockPaginationHelperFn).toHaveBeenCalledWith(testPageNumber);
  });

  it("employeeTerritories: Should return data in the expected shape", async () => {
    const outputToTest = await employeeTerritories();
    expect(outputToTest).toStrictEqual({
      queryData: "test",
      totalRows: 1,
      totalPages: 1
    });
  });

  it("employeeTerritories: Should call prismaPagiantionHelper with appropriate page number", async () => {
    const testPageNumber = 2;
    const mockPaginationHelperFn = vi.mocked(prismaPaginationHelper);
    await employeeTerritories(testPageNumber);
    expect(mockPaginationHelperFn).toHaveBeenCalledWith(testPageNumber);
  });

  it("territoriesById: Should return data in the expected shape", async () => {
    const testTerritoryId = "test";
    const outputToTest = await territoriesById(testTerritoryId);
    expect(outputToTest).toStrictEqual({
      queryData: "test"
    });
  });

  it("territoriesById: Should call findMany with specific territoryId", async () => {
    const testTerritoryId = "test";
    const mockFindManyFn = vi.mocked(prisma.territories.findMany);
    await territoriesById(testTerritoryId);
    expect(mockFindManyFn).toHaveBeenCalledWith({
      where: {
        territory_id: `${testTerritoryId}`
      }
    });
  });

  it("employeeFromTerritories: Should return data in the expected shape", async () => {
    const outputToTest = await employeeFromTerritories();
    expect(outputToTest).toStrictEqual({
      queryData: "test",
      totalRows: 1,
      totalPages: 1
    });
  });

  it("employeeFromTerritories: Should call prismaPagiantionHelper with appropriate page number and $queryRaw is correct territoryId", async () => {
    const testPageNumber = 2;
    const testTerritoryId = "test";
    const queryToTestFor = [
      `
    Select
      COUNT ( 
        employees.employee_id
      )
    AS
      total_rows
    From
      employee_territories
    LEFT JOIN
      employees on employees.employee_id=employee_territories.employee_id
    LEFT JOIN
      territories on employee_territories.territory_id=territories.territory_id
    LEFT JOIN
      region on territories.region_id=region.region_id
    WHERE
      employee_territories.territory_id::int=`,
      "::int"
    ];
    const mockPaginationHelperFn = vi.mocked(prismaPaginationHelper);
    const mockRawQueryFn = vi.mocked(prisma.$queryRaw);
    await employeeFromTerritories(testPageNumber, testTerritoryId);
    expect(mockPaginationHelperFn).toHaveBeenCalledWith(testPageNumber);
    expect(mockRawQueryFn).toHaveBeenCalledWith(queryToTestFor, testTerritoryId);
  });
});
