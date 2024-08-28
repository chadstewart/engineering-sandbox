import { describe, expect, it } from "vitest";
import { createErrorMessage } from "../../../../../../v1/controllers/employees-controller/util/add-employee/create-error-message";

describe("Add Employee Util: Create Error Message", () => {
  it("Should return an error string", () => {
    const variableToTest = createErrorMessage();
    expect(variableToTest).toBe("Some request parameters are missing from request body.");
  });
});
