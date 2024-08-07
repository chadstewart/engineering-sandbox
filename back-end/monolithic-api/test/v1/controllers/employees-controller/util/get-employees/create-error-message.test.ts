import { describe, expect, it } from "vitest";
import { createErrorMessage } from "../../../../../../v1/controllers/employees-controller/util/get-employees/create-error-message";
import { GetEmployeeRequestError } from "../../../../../../v1/controllers/employees-controller/util/types/employee-types";

describe("Get Employeees Util: Create Error Message", () => {
  it("Should output 'parameter 'page' in /employees/'page' is missing' when error object is 'MissingPage'", () => {
    const testObj: GetEmployeeRequestError = {
      error: "MissingPage"
    };
    const variableToTest = createErrorMessage(testObj, "/employees");
    expect(variableToTest).toBe("parameter 'page' in /employees/'page' is missing");
  });

  it("Should output '/employees/'page' must be a number' when error object is 'PageIsNotAValidNumber'", () => {
    const testObj: GetEmployeeRequestError = {
      error: "PageIsNotAValidNumber"
    };
    const variableToTest = createErrorMessage(testObj, "/employees");
    expect(variableToTest).toBe("/employees/'page' must be a number");
  });
});
