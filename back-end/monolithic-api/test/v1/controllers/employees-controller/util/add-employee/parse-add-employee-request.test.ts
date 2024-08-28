import { Request } from "express";
import { describe, it, expect } from "vitest";
import { parseAddEmployeeRequest } from "../../../../../../v1/controllers/employees-controller/util/add-employee/parse-add-employee-request";
import { AddEmployeeRequestBody } from "../../../../../../v1/controllers/employees-controller/util/types/employee-types";

describe("Product Controller Util Function: Parse Get Product Details Request", () => {
  const baseObj = {
    last_name: "Hello",
    first_name: "Hello",
    title: "Hello",
    title_of_courtesy: "Hello",
    birth_date: "2023/12/1",
    hire_date: "2023/12/1",
    address: "Hello",
    city: "Hello",
    region: "Hello",
    postal_code: "Hello",
    country: "Hello",
    home_phone: "Hello",
    extension: "Boo",
    photo: "Hello",
    notes: "Hello",
    reports_to: 1,
    photo_path: "Hello",
    territory_id: "06897"
  };

  type emptyObject = Record<string, never>;

  it("Should return an object with page attribute with a number on passing correct request object", () => {
    const testObj = {
      body: { ...baseObj }
    };

    const variableToTest = parseAddEmployeeRequest(
      testObj as unknown as Request<emptyObject, emptyObject, AddEmployeeRequestBody>
    );
    expect(variableToTest).toStrictEqual({
      address: "Hello",
      birth_date: new Date("2023-12-01T05:00:00.000Z"),
      city: "Hello",
      country: "Hello",
      extension: "Boo",
      first_name: "Hello",
      hire_date: new Date("2023-12-01T05:00:00.000Z"),
      home_phone: "Hello",
      last_name: "Hello",
      notes: "Hello",
      photo: Buffer.from(""),
      photo_path: "Hello",
      postal_code: "Hello",
      region: "Hello",
      reports_to: 1,
      territory_id: "06897",
      title: "Hello",
      title_of_courtesy: "Hello"
    });
  });

  it("Should return error object with 'MissingParams' when one of the object's params are incorrect", () => {
    const testObj = {
      body: {
        ...baseObj,
        postal_code: 1
      }
    };

    const variableToTest = parseAddEmployeeRequest(
      testObj as unknown as Request<emptyObject, emptyObject, AddEmployeeRequestBody>
    );
    expect(variableToTest).toStrictEqual({
      error: "MissingParams"
    });
  });

  it("Should return error object with 'MissingParams' when request object is missing params", () => {
    const testObj = {
      body: {}
    };

    const variableToTest = parseAddEmployeeRequest(
      testObj as unknown as Request<emptyObject, emptyObject, AddEmployeeRequestBody>
    );
    expect(variableToTest).toStrictEqual({
      error: "MissingParams"
    });
  });
});
