import { Request, Response } from "express";
import { describe, it, vi, expect, afterEach } from "vitest";
import serverLogger from "../../middleware/logger";
import logger from "../../services/logger";

describe("Middleware: Logger", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Should call logger.info with proper arguments", () => {
    const loggerInfoSpy = vi.spyOn(logger, "info");

    const mockRequest = {
      body: "test body"
    };
    const mockResponse = {
      statusCode: 200,
      getHeaders: vi.fn(() => "test header")
    };

    const resultToTestFor = JSON.stringify({
      headers: mockResponse.getHeaders(),
      statusCode: mockResponse.statusCode,
      body: mockRequest.body
    });

    serverLogger(mockRequest as Request, mockResponse as unknown as Response);
    expect(loggerInfoSpy).toHaveBeenCalledWith(resultToTestFor);
  });

  it("Should call logger.warn (if status code is out of 200 - 300 range) with proper arguments", () => {
    const loggerWarnSpy = vi.spyOn(logger, "warn");

    const mockRequest = {
      body: "test body"
    };
    const mockResponse = {
      statusCode: 400,
      getHeaders: vi.fn(() => "test header")
    };

    const resultToTestFor = JSON.stringify({
      headers: mockResponse.getHeaders(),
      statusCode: mockResponse.statusCode
    });

    serverLogger(mockRequest as Request, mockResponse as unknown as Response);
    expect(loggerWarnSpy).toHaveBeenCalledWith(resultToTestFor);
  });
});
