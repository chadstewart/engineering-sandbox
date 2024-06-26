import { describe, expect, it } from "vitest";
import { parsePaginationRequest } from "../../../util/pagination-utils/parse-pagination-request";
import { Request } from "express";

describe("Util Function: Parse Pagination Request", () => {
  it("Should return an object with page attribute with a number on passing correct request object", () => {
    const testObj = {
      params: {
        page: "1"
      }
    };

    const variableToTest = parsePaginationRequest(testObj as unknown as Request<{ page: string }>);
    expect(variableToTest).toStrictEqual({
      page: 1
    });
  });

  it("Should return error object with 'MissingPage' when request object doesn't have page attribute", () => {
    const testObj = {
      params: {
        test: "1"
      }
    };

    const variableToTest = parsePaginationRequest(testObj as unknown as Request<{ page: string }>);
    expect(variableToTest).toStrictEqual({
      error: "MissingPage"
    });
  });

  it("Should return error object with 'MissingPage' when page number in request object is less than 1", () => {
    const testObj = {
      params: {
        page: "0"
      }
    };

    const variableToTest = parsePaginationRequest(testObj as unknown as Request<{ page: string }>);
    expect(variableToTest).toStrictEqual({
      error: "PageIsNotAValidNumber"
    });
  });

  it("Should return error object with 'MissingPage' when page number in request object is not a number", () => {
    const testObj = {
      params: {
        page: "test"
      }
    };

    const variableToTest = parsePaginationRequest(testObj as unknown as Request<{ page: string }>);
    expect(variableToTest).toStrictEqual({
      error: "PageIsNotAValidNumber"
    });
  });
});
