import { describe, expect, it } from "vitest";

// A simple identity function that returns whatever is passed to it
function identity<T>(arg: T): T {
	return arg;
}

describe("generic identity function", () => {
	// Test with a string type
	it("should return the string as-is", () => {
		const result = identity<string>("hello world");
		expect(result).toBe("hello world");
		expect(result).toBeTypeOf("string");
	});

	// Test with a number type
	it("should return the number as-is", () => {
		const result = identity<number>(42);
		expect(result).toBe(42);
		expect(result).toBeTypeOf("number");
	});
});
