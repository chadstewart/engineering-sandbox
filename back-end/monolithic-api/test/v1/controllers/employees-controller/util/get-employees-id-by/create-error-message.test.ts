import { describe, expect, it } from "vitest";
import { createErrorMessage } from "../../../../../../v1/controllers/employees-controller/util/get-employee-by-id/create-error-message";
import { GetEmployeeByIdRequestError } from "../../../../../../v1/controllers/employees-controller/util/types/employee-types";

describe("Get Employee By Id Util: Create Error Message", () => {
  it("Should output 'parameter 'employee_id' in employee/details/'employee_id' is missing' when error object is 'MissingEmployeeId'", () => {
    const testObj: GetEmployeeByIdRequestError = {
      error: "MissingEmployeeId"
    };
    const variableToTest = createErrorMessage(testObj);
    expect(variableToTest).toBe("parameter 'employee_id' in /employee/details/'employee_id' is missing");
  });

  it("Should output '/employee/details/'employee_id' must be a number' when error object is 'EmployeeIdIsNotAValidNumber'", () => {
    const testObj: GetEmployeeByIdRequestError = {
      error: "EmployeeIdIsNotAValidNumber"
    };
    const variableToTest = createErrorMessage(testObj);
    expect(variableToTest).toBe("/employee/details/'employee_id' must be a number");
  });
});
