import { beforeEach, describe, expect, it, vi } from "vitest";
import { parseGetEmployeesRequest } from "../../../../../../v1/controllers/employees-controller/util/get-employees/parse-get-employees-request";
import { Request } from "express";
import { GetEmployeesParams } from "../../../../../../v1/controllers/employees-controller/util/types/employee-types";

describe("Get Categories Util Function: ParseGetCategoriesRequest", () => {
  beforeEach(() => {
    vi.mock("../../../../../../util/pagination-utils/parse-pagination-request", () => {
      return {
        parsePaginationRequest: vi.fn(() => "test")
      };
    });
  });

  it("Should return a variable", () => {
    const testObj = {
      page: "test"
    };

    const variableToTest = parseGetEmployeesRequest(testObj as unknown as Request<GetEmployeesParams>);
    expect(variableToTest).toBe("test");
  });
});
