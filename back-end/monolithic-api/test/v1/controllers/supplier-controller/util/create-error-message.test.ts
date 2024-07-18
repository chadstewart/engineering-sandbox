import { describe, expect, it } from "vitest";
import { createErrorMessage } from "../../../../../v1/controllers/suppliers-controller/util/get-suppliers/create-error-message";
import { GetSupplierRequestError } from "../../../../../v1/controllers/suppliers-controller/util/types/supplier-types";

describe("Get Supplier Util: Create Error Message", () => {
  it("Should output 'parameter 'page' in /suppliers/'page' is missing' when error object is 'MissingPage'", () => {
    const testObj: GetSupplierRequestError = {
      error: "MissingPage"
    };
    const variableToTest = createErrorMessage(testObj, "/suppliers");
    expect(variableToTest).toBe("parameter 'page' in /suppliers/'page' is missing");
  });

  it("Should output '/suppliers/'page' must be a number' when error object is 'PageIsNotAValidNumber'", () => {
    const testObj: GetSupplierRequestError = {
      error: "PageIsNotAValidNumber"
    };
    const variableToTest = createErrorMessage(testObj, "/suppliers");
    expect(variableToTest).toBe("/suppliers/'page' must be a number");
  });
});
