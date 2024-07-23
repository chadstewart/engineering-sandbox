import { Request } from "express";
import { describe, it, expect } from "vitest";
import { parseGetProductDetailsRequest } from "../../../../../../v1/controllers/products-controller/util/get-product-details/parse-get-product-details-request";
import { GetProductDetailsParams } from "../../../../../../v1/controllers/products-controller/util/types/product-types";

describe("Product Controller Util Function: Parse Get Product Details Request", () => {
  it("Should return an object with page attribute with a number on passing correct request object", () => {
    const testObj = {
      params: {
        product_id: "1"
      }
    };

    const variableToTest = parseGetProductDetailsRequest(testObj as unknown as Request<GetProductDetailsParams>);
    expect(variableToTest).toStrictEqual({
      product_id: 1
    });
  });

  it("Should return error object with 'MissingProductId' when request object doesn't have page attribute", () => {
    const testObj = {
      params: {
        test: "1"
      }
    };

    const variableToTest = parseGetProductDetailsRequest(testObj as unknown as Request<GetProductDetailsParams>);
    expect(variableToTest).toStrictEqual({
      error: "MissingProductId"
    });
  });

  it("Should return error object with 'ProductIdIsNotAValidNumber' when page number in request object is less than 1", () => {
    const testObj = {
      params: {
        product_id: "0"
      }
    };

    const variableToTest = parseGetProductDetailsRequest(testObj as unknown as Request<GetProductDetailsParams>);
    expect(variableToTest).toStrictEqual({
      error: "ProductIdIsNotAValidNumber"
    });
  });

  it("Should return error object with 'ProductIdIsNotAValidNumber' when page number in request object is not a number", () => {
    const testObj = {
      params: {
        product_id: "test"
      }
    };

    const variableToTest = parseGetProductDetailsRequest(testObj as unknown as Request<GetProductDetailsParams>);
    expect(variableToTest).toStrictEqual({
      error: "ProductIdIsNotAValidNumber"
    });
  });
});
