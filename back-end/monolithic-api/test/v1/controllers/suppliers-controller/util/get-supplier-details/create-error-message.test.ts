import { describe, expect, it } from "vitest";
import { createErrorMessage } from "../../../../../../v1/controllers/suppliers-controller/util/get-supplier-details/create-error-message";
import { GetSupplierDetailsRequestError } from "../../../../../../v1/controllers/suppliers-controller/util/types/supplier-types";

describe("Get Supplier Details Util: Create Error Message", () => {
  it("Should output 'supplier_id' in /suppliers/details/'supplier_id' when error object is 'MissingPage'", () => {
    const testObj: GetSupplierDetailsRequestError = {
      error: "MissingSupplierId"
    };
    const variableToTest = createErrorMessage(testObj);
    expect(variableToTest).toBe("parameter 'supplier_id' in /suppliers/details/'supplier_id' is missing");
  });

  it("Should output '/suppliers/details/'supplier_id' must be a number' when error object is 'PageIsNotAValidNumber'", () => {
    const testObj: GetSupplierDetailsRequestError = {
      error: "SupplierIdIsNotAValidNumber"
    };
    const variableToTest = createErrorMessage(testObj);
    expect(variableToTest).toBe("/suppliers/details/'supplier_id' must be a number");
  });
});
