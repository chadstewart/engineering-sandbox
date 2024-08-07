import { afterAll, describe, expect, it, vi } from "vitest";
import { GetEmployeeEvaluatedRequest } from "../../../../../../v1/controllers/employees-controller/util/types/employee-types";
import { handleGetEmployeesRequest } from "../../../../../../v1/controllers/employees-controller/util/get-employees/handle-get-employee-request";
import { employees } from "../../../../../../models/employees";

describe("Employees Controller Util Function: HandleGetEmployeeRequest", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  it("Should return a failed response object when it receives an object with an error attribute", async () => {
    vi.mock("../../../../../../v1/controllers/employees-controller/util/get-employees/create-error-message", () => {
      return {
        createErrorMessage: vi.fn(() => "test")
      };
    });

    const testObj: GetEmployeeEvaluatedRequest = {
      error: "MissingPage"
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleGetEmployeesRequest(
      testObj,
      mockDataProvider as unknown as typeof employees,
      "test"
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 400,
      status: "failed",
      error: "test"
    });
  });

  it("Should return a success response object when it receives an object with a page attribute", async () => {
    const testObj: GetEmployeeEvaluatedRequest = {
      page: 2
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleGetEmployeesRequest(
      testObj,
      mockDataProvider as unknown as typeof employees,
      "test"
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 200,
      status: "success",
      data: "test"
    });
  });
});
