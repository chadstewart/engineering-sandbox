import { describe, expect, it } from "vitest";
import { createErrorMessage } from "../../../../../v1/controllers/us-states-controller/util/create-error-message";
import { UsStatesRequestError } from "../../../../../v1/controllers/us-states-controller/util/types/us-states-types";

describe("US States Controller Util: Create Error Message", () => {
  it("Should output 'parameter 'page' in states/'page' is missing' when error object is 'MissingPage'", () => {
    const testObj: UsStatesRequestError = {
      error: "MissingPage"
    };
    const variableToTest = createErrorMessage(testObj, "/states");
    expect(variableToTest).toBe("parameter 'page' in /states/'page' is missing");
  });

  it("Should output 'states/'page' must be a number' when error object is 'PageIsNotAValidNumber'", () => {
    const testObj: UsStatesRequestError = {
      error: "PageIsNotAValidNumber"
    };
    const variableToTest = createErrorMessage(testObj, "/states");
    expect(variableToTest).toBe("/states/'page' must be a number");
  });
});
