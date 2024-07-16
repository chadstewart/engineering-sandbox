import { Request } from "express";
import { describe, it, expect } from "vitest";
import { parseGetCategoryDetailsRequest } from "../../../../../../v1/controllers/categories-controller/util/get-category-details/parse-get-category-details-request";
import { GetCategoryDetailsParams } from "../../../../../../v1/controllers/categories-controller/util/types/categories-types";

describe("Category Controller Util Function: Parse Get Category Details Request", () => {
  it("Should return an object with page attribute with a number on passing correct request object", () => {
    const testObj = {
      params: {
        category_id: "1"
      }
    };

    const variableToTest = parseGetCategoryDetailsRequest(testObj as unknown as Request<GetCategoryDetailsParams>);
    expect(variableToTest).toStrictEqual({
      category_id: 1
    });
  });

  it("Should return error object with 'MissingCategoryId' when request object doesn't have page attribute", () => {
    const testObj = {
      params: {
        test: "1"
      }
    };

    const variableToTest = parseGetCategoryDetailsRequest(testObj as unknown as Request<GetCategoryDetailsParams>);
    expect(variableToTest).toStrictEqual({
      error: "MissingCategoryId"
    });
  });

  it("Should return error object with 'CategoryIdIsNotAValidNumber' when page number in request object is less than 1", () => {
    const testObj = {
      params: {
        category_id: "0"
      }
    };

    const variableToTest = parseGetCategoryDetailsRequest(testObj as unknown as Request<GetCategoryDetailsParams>);
    expect(variableToTest).toStrictEqual({
      error: "CategoryIdIsNotAValidNumber"
    });
  });

  it("Should return error object with 'CategoryIdIsNotAValidNumber' when page number in request object is not a number", () => {
    const testObj = {
      params: {
        category_id: "test"
      }
    };

    const variableToTest = parseGetCategoryDetailsRequest(testObj as unknown as Request<GetCategoryDetailsParams>);
    expect(variableToTest).toStrictEqual({
      error: "CategoryIdIsNotAValidNumber"
    });
  });
});
