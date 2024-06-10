import { expect, describe, it, vi, afterEach } from "vitest";
import { prismaPaginationHelper } from "../../util/pagination-helper";
import { createEmployee, employees, employeesFromId } from "../../models/employees";
import { prisma } from "../../services/database";

describe("Models: Employees", () => {
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
        employees: {
          findMany: vi.fn(() => "test"),
          create: vi.fn(() => 1),
          count: vi.fn(() => 1)
        },
        employee_territories: {
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

  vi.mock("../../util/schemas/employee-zod-schema", () => {
    return {
      createEmployeeZodSchema: {
        parse: vi.fn(() => "test")
      }
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("employees: Should return data in the expected shape", async () => {
    const outputToTest = await employees();
    expect(outputToTest).toStrictEqual({
      queryData: "test",
      totalRows: 1,
      totalPages: 1
    });
  });

  it("employees: Should call prismaPagiantionHelper with appropriate page number", async () => {
    const testPageNumber = 2;
    const mockPaginationHelperFn = vi.mocked(prismaPaginationHelper);
    await employees(testPageNumber);
    expect(mockPaginationHelperFn).toHaveBeenCalledWith(testPageNumber);
  });

  it("employeesFromId: Should return data in the expected shape", async () => {
    const testEmployeeId = 1;
    const outputToTest = await employeesFromId(testEmployeeId);
    expect(outputToTest).toStrictEqual({
      queryData: "test"
    });
  });

  it("employeesFromId: Should call findMany with specific territoryId", async () => {
    const testEmployeeId = 1;
    const mockFindManyFn = vi.mocked(prisma.employees.findMany);
    await employeesFromId(testEmployeeId);
    expect(mockFindManyFn).toHaveBeenCalledWith({
      where: {
        employee_id: testEmployeeId
      }
    });
  });

  it("createEmployee: Should return data in the expected shape", async () => {
    const testBody = "test";
    const outputToTest = await createEmployee(testBody);
    expect(outputToTest).toBe("test");
  });

  it("createEmployee: Should call prismaPagiantionHelper with appropriate page number", async () => {
    const testBody = "test";
    const dataToTest = await createEmployee(testBody);
    expect(dataToTest).toStrictEqual("test");
  });
});
