import { describe, expect, it } from "vitest";
import { createErrorMessage } from "../../../../../v1/controllers/regions-controller/utils/create-error-message";
import { RegionRequestError } from "../../../../../v1/controllers/regions-controller/utils/types/region-types";

describe("US States Controller Util: Create Error Message", () => {
  it("Should output 'parameter 'regionId' in regions/details/'regionId' is missing' when error object is 'MissingRegionId'", () => {
    const testObj: RegionRequestError = {
      error: "MissingRegionId"
    };
    const variableToTest = createErrorMessage(testObj);
    expect(variableToTest).toBe("parameter 'regionId' in regions/details/'regionId' is missing");
  });

  it("Should output 'regions/details/'regionId' must be a number' when error object is 'RegionIdIsNotAValidNumber'", () => {
    const testObj: RegionRequestError = {
      error: "RegionIdIsNotAValidNumber"
    };
    const variableToTest = createErrorMessage(testObj);
    expect(variableToTest).toBe("regions/details/'regionId' must be a number");
  });
});
