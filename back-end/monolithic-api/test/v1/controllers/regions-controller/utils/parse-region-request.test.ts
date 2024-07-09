import { Request } from "express";
import { describe, it, expect } from "vitest";
import { parseRegionRequest } from "../../../../../v1/controllers/regions-controller/utils/parse-region-request";
import { RegionParams } from "../../../../../v1/controllers/regions-controller/utils/types/region-types";

describe("Region Controller Util Function: ParseRegionRequest", () => {
  it("Should return an object with page attribute with a number on passing correct request object", () => {
    const testObj = {
      params: {
        region_id: "1"
      }
    };

    const variableToTest = parseRegionRequest(testObj as unknown as Request<RegionParams>);
    expect(variableToTest).toStrictEqual({
      region_id: 1
    });
  });

  it("Should return error object with 'MissingPage' when request object doesn't have page attribute", () => {
    const testObj = {
      params: {
        test: "1"
      }
    };

    const variableToTest = parseRegionRequest(testObj as unknown as Request<RegionParams>);
    expect(variableToTest).toStrictEqual({
      error: "MissingRegionId"
    });
  });

  it("Should return error object with 'MissingPage' when page number in request object is less than 1", () => {
    const testObj = {
      params: {
        region_id: "0"
      }
    };

    const variableToTest = parseRegionRequest(testObj as unknown as Request<RegionParams>);
    expect(variableToTest).toStrictEqual({
      error: "RegionIdIsNotAValidNumber"
    });
  });

  it("Should return error object with 'MissingPage' when page number in request object is not a number", () => {
    const testObj = {
      params: {
        region_id: "test"
      }
    };

    const variableToTest = parseRegionRequest(testObj as unknown as Request<RegionParams>);
    expect(variableToTest).toStrictEqual({
      error: "RegionIdIsNotAValidNumber"
    });
  });
});
