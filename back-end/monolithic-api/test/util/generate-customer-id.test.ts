import { afterEach } from "node:test";
import { expect, describe, it, vi } from "vitest";
import { generateCustomerId } from "../../util/generate-customer-id";

describe("Util Function: Generate Customer ID", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Should return a 5 character string that is all capitalized", () => {
    const testName = "Chaddy";

    const generatedCustomerID = generateCustomerId(testName);

    expect(generatedCustomerID).toStrictEqual("CHADD");
  });

  it("Should throw an error if a string is less than 5 characters long", () => {
    const testName = "Chad";

    expect(() => generateCustomerId(testName)).toThrowError("Please add a name that is 5 characters or longer");
  });
});
