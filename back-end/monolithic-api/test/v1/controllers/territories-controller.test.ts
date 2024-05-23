import { expect, it, describe, vi, afterEach, beforeEach } from "vitest";
import { Request, Response } from "express";
import {
  getEmployeeTerritories,
  getEmployeesByTerritories,
  getTerritories,
  getTerritoriesDetails
} from "../../../v1/controllers/territories-controller";

describe("Controller: Territories", () => {
  beforeEach(() => {
    vi.mock("../../../models/territories", () => {
      return {
        employeeFromTerritories: () => "test",
        employeeTerritories: () => "test",
        territories: () => "test",
        territoriesById: () => "test"
      };
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("getTerritories: Should send proper data response when called", async () => {
    const mockRequest = {
      params: {
        page: 1
      }
    };

    const mockNextFunc = vi.fn();
    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const mockResponse = {
      status: mockStatusFunc
    };

    await getTerritories(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("getTerritories: Should call the next function", async () => {
    const mockRequest = {
      params: {
        page: 1
      }
    };

    const mockNextFunc = vi.fn();
    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const mockResponse = {
      status: mockStatusFunc
    };

    await getTerritories(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("getTerritories: Should return a response object that says it failed because page isn't a number", async () => {
    const mockRequest = {
      params: {
        page: "hello"
      }
    };

    const mockNextFunc = vi.fn();
    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const mockResponse = {
      status: mockStatusFunc
    };

    await getTerritories(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "territories/'page' must be a number"
    });
  });

  it("getEmployeesByTerritories: Should send proper data response when called", async () => {
    const mockRequest = {
      params: {
        page: 1,
        territory_id: "test"
      }
    };

    const mockNextFunc = vi.fn();
    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const mockResponse = {
      status: mockStatusFunc
    };

    await getEmployeesByTerritories(
      mockRequest as unknown as Request,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("getEmployeesByTerritories: Should call the next function", async () => {
    const mockRequest = {
      params: {
        page: 1,
        territory_id: "test"
      }
    };

    const mockNextFunc = vi.fn();
    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const mockResponse = {
      status: mockStatusFunc
    };

    await getEmployeesByTerritories(
      mockRequest as unknown as Request,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("getEmployeesByTerritories: Should return a response object that says it failed because page isn't a number", async () => {
    const mockRequest = {
      params: {
        page: "test",
        territory_id: "test"
      }
    };

    const mockNextFunc = vi.fn();
    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const mockResponse = {
      status: mockStatusFunc
    };

    await getEmployeesByTerritories(
      mockRequest as unknown as Request,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "territories/employees/'page' must be a number"
    });
  });

  it("getEmployeesByTerritories: Should return a response object that says it failed because territory_id isn't valid", async () => {
    const mockRequest = {
      params: {
        page: 1,
        territory_id: ""
      }
    };

    const mockNextFunc = vi.fn();
    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const mockResponse = {
      status: mockStatusFunc
    };

    await getEmployeesByTerritories(
      mockRequest as unknown as Request,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "territories/employees/'territory_id' must be a number"
    });
  });

  it("getTerritoryDetails: Should send proper data response when called", async () => {
    const mockRequest = {
      params: {
        territory_id: "test"
      }
    };

    const mockNextFunc = vi.fn();
    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const mockResponse = {
      status: mockStatusFunc
    };

    await getTerritoriesDetails(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("getTerritoryDetails: Should call the next function", async () => {
    const mockRequest = {
      params: {
        territory_id: "test"
      }
    };

    const mockNextFunc = vi.fn();
    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const mockResponse = {
      status: mockStatusFunc
    };

    await getTerritoriesDetails(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("getTerritoryDetails: Should return a response object that says it failed because territory id is empty", async () => {
    const mockRequest = {
      params: {
        territory_id: ""
      }
    };

    const mockNextFunc = vi.fn();
    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const mockResponse = {
      status: mockStatusFunc
    };

    await getTerritoriesDetails(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "territories/details/'territories_id' must have a value"
    });
  });

  it("getEmployeeTerritories: Should send proper data response when called", async () => {
    const mockRequest = {
      params: {
        page: 1
      }
    };

    const mockNextFunc = vi.fn();
    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const mockResponse = {
      status: mockStatusFunc
    };

    await getEmployeeTerritories(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("getEmployeeTerritories: Should call the next function", async () => {
    const mockRequest = {
      params: {
        page: 1
      }
    };

    const mockNextFunc = vi.fn();
    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const mockResponse = {
      status: mockStatusFunc
    };

    await getEmployeeTerritories(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("getEmployeeTerritories: Should return a response object that says it failed because page isn't a number", async () => {
    const mockRequest = {
      params: {
        page: "hello"
      }
    };

    const mockNextFunc = vi.fn();
    const mockJsonFunc = vi.fn();
    const mockStatusFunc = vi.fn(() => {
      return {
        json: mockJsonFunc
      };
    });
    const mockResponse = {
      status: mockStatusFunc
    };

    await getEmployeeTerritories(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "employee_territories/'page' must be a number"
    });
  });
});
