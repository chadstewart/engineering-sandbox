import { afterAll, describe, expect, it, vi } from "vitest";
import { UsStatesEvaluatedRequest } from "../../../../../v1/controllers/us-states-controller/util/types/us-states-types";
import { handleUsStatesRequest } from "../../../../../v1/controllers/us-states-controller/util/handle-us-states-request";
import { usStates } from "../../../../../models/us-states";

describe("US States Controller Util Function: HandleUsStatesRequest", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  it("Should return a failed response object when it receives an object with an error attribute", async () => {
    vi.mock("../../../../../v1/controllers/us-states-controller/util/create-error-message", () => {
      return {
        createErrorMessage: vi.fn(() => "test")
      };
    });

    const testObj: UsStatesEvaluatedRequest = {
      error: "MissingPage"
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleUsStatesRequest(testObj, mockDataProvider as unknown as typeof usStates);
    expect(variableToTest).toStrictEqual({
      statusCode: 400,
      status: "failed",
      error: "test"
    });
  });

  it("Should return a success response object when it receives an object with a page attribute", async () => {
    const testObj: UsStatesEvaluatedRequest = {
      page: 2
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleUsStatesRequest(testObj, mockDataProvider as unknown as typeof usStates);
    expect(variableToTest).toStrictEqual({
      statusCode: 200,
      status: "success",
      data: "test"
    });
  });
});
