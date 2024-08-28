import { afterAll, describe, expect, it, vi } from "vitest";
import {
  GetEmployeeByIdEvaluatedRequest,
  GetEmployeeByIdRequestError
} from "../../../../../../v1/controllers/employees-controller/util/types/employee-types";
import { handleGetEmployeeByIdRequest } from "../../../../../../v1/controllers/employees-controller/util/get-employee-by-id/handle-get-employee-by-id-request";
import { employeesFromId } from "../../../../../../models/employees";

describe("Employees Controller Util Function: Handle Get Employee By Id Request", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  it("Should return a failed response object when it receives an object with an error attribute", async () => {
    vi.mock(
      "../../../../../../v1/controllers/employees-controller/util/get-employee-by-id/create-error-message",
      () => {
        return {
          createErrorMessage: vi.fn(() => "test")
        };
      }
    );

    const testObj: GetEmployeeByIdRequestError = {
      error: "MissingEmployeeId"
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleGetEmployeeByIdRequest(
      testObj,
      mockDataProvider as unknown as typeof employeesFromId
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 400,
      status: "failed",
      error: "test"
    });
  });

  it("Should return a success response object when it receives an object with a employee_id attribute", async () => {
    const testObj: GetEmployeeByIdEvaluatedRequest = {
      employee_id: 2
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleGetEmployeeByIdRequest(
      testObj,
      mockDataProvider as unknown as typeof employeesFromId
    );
    expect(variableToTest).toStrictEqual({
      statusCode: 200,
      status: "success",
      data: "test"
    });
  });
});
