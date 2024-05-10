import { expect, it, describe, vi, afterEach, beforeEach } from "vitest";
import { Request, Response } from "express";
import routeAuth from "../../middleware/route-authz";
import { auth } from "express-oauth2-jwt-bearer";

describe("Middleware: Route Authorization", () => {
  beforeEach(() => {
    vi.mock("@aws-sdk/client-secrets-manager", () => {
      return {
        SecretsManagerClient: class {
          constructor() {}

          send() {
            return {
              SecretString: null
            };
          }
        },
        GetSecretValueCommand: class {
          constructor() {}
        }
      };
    });

    vi.mock("express-oauth2-jwt-bearer", () => {
      return {
        auth: vi.fn()
      };
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it(`Should call next function immediately if request path is "/" and request method is "GET"`, async () => {
    const mockRequest = {
      path: "/",
      method: "GET"
    };

    const mockNextFunc = vi.fn();
    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const testResponse = {
      status: mockStatusFunc
    };

    await routeAuth(mockRequest as Request, testResponse as unknown as Response, mockNextFunc);
    expect(mockNextFunc).toHaveBeenCalled();
    expect(mockJsonFunc).not.toHaveBeenCalled();
    expect(mockStatusFunc).not.toHaveBeenCalled();
  });

  it(`Should call next function checkJwt has no error`, async () => {
    vi.mocked(auth).mockReturnValue((mockReq: unknown, mockRes: unknown, mockNext: () => void) => mockNext());
    const mockRequest = {
      path: "",
      method: ""
    };

    const mockNextFunc = vi.fn();
    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const testResponse = {
      status: mockStatusFunc
    };

    await routeAuth(mockRequest as Request, testResponse as unknown as Response, mockNextFunc);
    expect(mockNextFunc).toHaveBeenCalled();
  });

  it(`Should call status function and json function when there is an error`, async () => {
    vi.mocked(auth).mockReturnValue((mockReq: unknown, mockRes: unknown, mockNext: (test: unknown) => void) =>
      mockNext("test")
    );
    const mockRequest = {
      path: "",
      method: ""
    };

    const mockNextFunc = vi.fn();
    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const testResponse = {
      status: mockStatusFunc
    };

    await routeAuth(mockRequest as Request, testResponse as unknown as Response, mockNextFunc);
    expect(mockStatusFunc).toHaveBeenCalledWith(401);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      message: "unauthorized"
    });
  });
});
