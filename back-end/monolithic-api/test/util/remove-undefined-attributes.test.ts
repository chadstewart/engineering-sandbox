import { describe, it, vi, afterEach, expect } from "vitest";
import { removeUndefinedValuesFromObject } from "../../util/remove-undefined-attributes";

describe("Util Function: Remove undefined attributes", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Should remove undefined (falsy) values in an object", () => {
    const testObject = {
      test1: "Hello",
      test2: ""
    };

    const updatedObject = removeUndefinedValuesFromObject(testObject);

    expect(JSON.stringify(updatedObject) === JSON.stringify({ test1: "Hello" })).toBeTruthy();
    expect(JSON.stringify(updatedObject) === JSON.stringify({ test1: "Hello", test2: "" })).toBeFalsy();
  });

  it("Should not remove any values from an object if they are all truthy", () => {
    const testObject = {
      test1: "Hello",
      test2: "World"
    };

    const updatedObject = removeUndefinedValuesFromObject(testObject);

    expect(updatedObject).toStrictEqual({
      test1: "Hello",
      test2: "World"
    });
  });
});
