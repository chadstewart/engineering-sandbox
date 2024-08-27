import { Request } from "express";
import { describe, it, expect } from "vitest";
import { parseGetEmployeeByIdRequest } from "../../../../../../v1/controllers/employees-controller/util/get-employee-by-id/parse-get-employee-by-id-request";
import { GetEmployeeByIdParams } from "../../../../../../v1/controllers/employees-controller/util/types/employee-types";

describe("Employee Controller Util Function: Parse Get Employee By Id Request", () => {
  it("Should return an object with page attribute with a number on passing correct request object", () => {
    const testObj = {
      params: {
        employee_id: "1"
      }
    };

    const variableToTest = parseGetEmployeeByIdRequest(testObj as unknown as Request<GetEmployeeByIdParams>);
    expect(variableToTest).toStrictEqual({
      employee_id: 1
    });
  });

  it("Should return error object with 'MissingEmployeeId' when request object doesn't have page attribute", () => {
    const testObj = {
      params: {
        test: "1"
      }
    };

    const variableToTest = parseGetEmployeeByIdRequest(testObj as unknown as Request<GetEmployeeByIdParams>);
    expect(variableToTest).toStrictEqual({
      error: "MissingEmployeeId"
    });
  });

  it("Should return error object with 'EmployeeIdIsNotAValidNumber' when page number in request object is less than 1", () => {
    const testObj = {
      params: {
        employee_id: "0"
      }
    };

    const variableToTest = parseGetEmployeeByIdRequest(testObj as unknown as Request<GetEmployeeByIdParams>);
    expect(variableToTest).toStrictEqual({
      error: "EmployeeIdIsNotAValidNumber"
    });
  });

  it("Should return error object with 'EmployeeIdIsNotAValidNumber' when page number in request object is not a number", () => {
    const testObj = {
      params: {
        employee_id: "test"
      }
    };

    const variableToTest = parseGetEmployeeByIdRequest(testObj as unknown as Request<GetEmployeeByIdParams>);
    expect(variableToTest).toStrictEqual({
      error: "EmployeeIdIsNotAValidNumber"
    });
  });
});
