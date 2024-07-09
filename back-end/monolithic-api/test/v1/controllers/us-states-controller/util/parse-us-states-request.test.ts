import { beforeEach, describe, expect, it, vi } from "vitest";
import { parseUsStatesRequest } from "../../../../../v1/controllers/us-states-controller/util/parse-us-states-request";
import { Request } from "express";
import { UsStatesParams } from "../../../../../v1/controllers/us-states-controller/util/types/us-states-types";

describe("US States Controller Util Function: ParseUsStatesRequest", () => {
  beforeEach(() => {
    vi.mock("../../../../../util/pagination-utils/parse-pagination-request", () => {
      return {
        parsePaginationRequest: vi.fn(() => "test")
      };
    });
  });

  it("Should return a variable", () => {
    const testObj = {
      page: "test"
    };

    const variableToTest = parseUsStatesRequest(testObj as unknown as Request<UsStatesParams>);
    expect(variableToTest).toBe("test");
  });
});
