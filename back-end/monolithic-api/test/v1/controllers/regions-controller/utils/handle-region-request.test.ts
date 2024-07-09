import { afterAll, describe, expect, it, vi } from "vitest";
import { regionDetails } from "../../../../../models/region";
import { handleRegionRequest } from "../../../../../v1/controllers/regions-controller/utils/handle-region-request";
import {
  RegionEvalutedRequest,
  RegionRequestError
} from "../../../../../v1/controllers/regions-controller/utils/types/region-types";

describe("US States Controller Util Function: HandleUsStatesRequest", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  it("Should return a failed response object when it receives an object with an error attribute", async () => {
    vi.mock("../../../../../v1/controllers/regions-controller/utils/create-error-message", () => {
      return {
        createErrorMessage: vi.fn(() => "test")
      };
    });

    const testObj: RegionRequestError = {
      error: "MissingRegionId"
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleRegionRequest(testObj, mockDataProvider as unknown as typeof regionDetails);
    expect(variableToTest).toStrictEqual({
      statusCode: 400,
      status: "failed",
      error: "test"
    });
  });

  it("Should return a success response object when it receives an object with a region_id attribute", async () => {
    const testObj: RegionEvalutedRequest = {
      region_id: 2
    };

    const mockDataProvider = vi.fn(() => "test");

    const variableToTest = await handleRegionRequest(testObj, mockDataProvider as unknown as typeof regionDetails);
    expect(variableToTest).toStrictEqual({
      statusCode: 200,
      status: "success",
      data: "test"
    });
  });
});
