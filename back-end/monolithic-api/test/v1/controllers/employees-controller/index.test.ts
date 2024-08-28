import { describe, expect, it, vi } from "vitest";
import { Request, Response } from "express";
import { getEmployees, getEmployeeById } from "../../../../v1/controllers/employees-controller/";
import {
  GetEmployeeByIdParams,
  GetEmployeesParams
} from "../../../../v1/controllers/employees-controller/util/types/employee-types";

describe("Controller: Employees", () => {
  vi.mock("../../../../models/employees", () => {
    return {
      employees: vi.fn(() => "test"),
      employeesFromId: vi.fn(() => "test")
    };
  });

  vi.mock("../../../../v1/controllers/employees-controller/util/get-employees/handle-get-employee-request", () => {
    return {
      handleGetEmployeesRequest: vi.fn(() => {
        return {
          statusCode: 200,
          data: "test"
        };
      })
    };
  });

  vi.mock("../../../../v1/controllers/employees-controller/util/get-employees/parse-get-employees-request", () => {
    return {
      parseGetEmployeesRequest: vi.fn(() => "test")
    };
  });

  vi.mock(
    "../../../../v1/controllers/employees-controller/util/get-employee-by-id/handle-get-employee-by-id-request",
    () => {
      return {
        handleGetEmployeeByIdRequest: vi.fn(() => {
          return {
            statusCode: 200,
            data: "test"
          };
        })
      };
    }
  );

  vi.mock(
    "../../../../v1/controllers/employees-controller/util/get-employee-by-id/parse-get-employee-by-id-request",
    () => {
      return {
        parseGetEmployeeByIdRequest: vi.fn(() => "test")
      };
    }
  );

  it("getEmployees: Should send a response", async () => {
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

    await getEmployees(
      mockRequest as unknown as Request<GetEmployeesParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      data: "test",
      status: "success"
    });
  });

  it("getEmployees: Should call the next function", async () => {
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

    await getEmployees(
      mockRequest as unknown as Request<GetEmployeesParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("getEmployeeById: Should send a response", async () => {
    const mockRequest = {
      params: {
        employee_id: 1
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

    await getEmployeeById(
      mockRequest as unknown as Request<GetEmployeeByIdParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      data: "test",
      status: "success"
    });
  });

  it("getEmployeeById: Should call the next function", async () => {
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

    await getEmployeeById(
      mockRequest as unknown as Request<GetEmployeeByIdParams>,
      mockResponse as unknown as Response,
      mockNextFunc
    );

    expect(mockNextFunc).toHaveBeenCalled();
  });
});
