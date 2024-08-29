import { afterAll, describe, expect, it, vi } from "vitest";
import {
  AddEmployeeEvaluatedRequest,
  AddEmployeeRequestError
} from "../../../../../../v1/controllers/employees-controller/util/types/employee-types";
import { handleAddEmployeeRequest } from "../../../../../../v1/controllers/employees-controller/util/add-employee/handle-add-employee-request";
import { createEmployee } from "../../../../../../models/employees";

describe("Employee Controller Util Function: Handle Add Employee Request", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  it("Should return a failed response object when it receives an object with an error attribute", async () => {
    vi.mock("../../../../../../v1/controllers/employees-controller/util/add-employee/create-error-message", () => {
      return {
        createErrorMessage: vi.fn(() => "test")
      };
    });

    const testObj: AddEmployeeRequestError = {
      error: "MissingParams"
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleAddEmployeeRequest(
      testObj,
      mockDataProvider as unknown as typeof createEmployee
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 400,
      status: "failed",
      error: "test"
    });
  });

  it("Should return a success response object when it receives an object with a region_id attribute", async () => {
    const testObj = {
      test: "test"
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleAddEmployeeRequest(
      testObj as unknown as AddEmployeeEvaluatedRequest,
      mockDataProvider as unknown as typeof createEmployee
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 200,
      status: "success",
      data: "test"
    });
  });
});
