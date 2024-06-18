import { toCurrency } from "@/lib/util/to-currency";
import { describe, expect, it } from "vitest";

describe("Utililty Function: toCurrency", () => {
  it("Should output a string that looks like money", () => {
    const testNumber = 10000;
    const expectedString = "$10,000";
    const outputToTest = toCurrency(testNumber);
    expect(outputToTest).toBe(expectedString);
  });

  it("Should output a 3 character string that looks like money", () => {
    const testNumber = 100;
    const expectedString = "$100";
    const outputToTest = toCurrency(testNumber);
    expect(outputToTest).toBe(expectedString);
  });

  it("Should output a negative value that looks like money", () => {
    const testNumber = -100;
    const expectedString = "-$100";
    const outputToTest = toCurrency(testNumber);
    expect(outputToTest).toBe(expectedString);
  });

  it("Should make 0 look like money", () => {
    const testNumber = 0;
    const expectedString = "$0";
    const outputToTest = toCurrency(testNumber);
    expect(outputToTest).toBe(expectedString);
  });
});
