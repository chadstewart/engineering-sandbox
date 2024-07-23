import { Request } from "express";
import { describe, it, expect } from "vitest";
import { parseGetSuppliersDetailsRequest } from "../../../../../../v1/controllers/suppliers-controller/util/get-supplier-details/parse-get-supplier-details-request";
import { GetSupplierDetailsParams } from "../../../../../../v1/controllers/suppliers-controller/util/types/supplier-types";

describe("Supplier Controller Util Function: Parse Get Supplier Details Request", () => {
  it("Should return an object with page attribute with a number on passing correct request object", () => {
    const testObj = {
      params: {
        supplier_id: "1"
      }
    };

    const variableToTest = parseGetSuppliersDetailsRequest(testObj as unknown as Request<GetSupplierDetailsParams>);
    expect(variableToTest).toStrictEqual({
      supplier_id: 1
    });
  });

  it("Should return error object with 'MissingSupplierId' when request object doesn't have page attribute", () => {
    const testObj = {
      params: {
        test: "1"
      }
    };

    const variableToTest = parseGetSuppliersDetailsRequest(testObj as unknown as Request<GetSupplierDetailsParams>);
    expect(variableToTest).toStrictEqual({
      error: "MissingSupplierId"
    });
  });

  it("Should return error object with 'SupplierIdIsNotAValidNumber' when page number in request object is less than 1", () => {
    const testObj = {
      params: {
        supplier_id: "0"
      }
    };

    const variableToTest = parseGetSuppliersDetailsRequest(testObj as unknown as Request<GetSupplierDetailsParams>);
    expect(variableToTest).toStrictEqual({
      error: "SupplierIdIsNotAValidNumber"
    });
  });

  it("Should return error object with 'SupplierIdIsNotAValidNumber' when page number in request object is not a number", () => {
    const testObj = {
      params: {
        supplier_id: "test"
      }
    };

    const variableToTest = parseGetSuppliersDetailsRequest(testObj as unknown as Request<GetSupplierDetailsParams>);
    expect(variableToTest).toStrictEqual({
      error: "SupplierIdIsNotAValidNumber"
    });
  });
});
