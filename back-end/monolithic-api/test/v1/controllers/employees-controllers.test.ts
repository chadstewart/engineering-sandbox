import { expect, it, describe, vi, afterEach, beforeEach } from "vitest";
import { Request, Response } from "express";
import { addEmployee, getEmployeeById, getEmployees } from "../../../v1/controllers/employees-controller";

describe("Controller: Employees", () => {
  beforeEach(() => {
    vi.mock("../../../models/employees", () => {
      return {
        employees: () => "test",
        employeesFromId: () => "test",
        createEmployee: () => "test"
      };
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("getEmployees: Should send proper data response when called", async () => {
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

    await getEmployees(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
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

    await getEmployees(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("getEmployees: Should return a response object that says it failed because page isn't a number", async () => {
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

    await getEmployees(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "employees/'page' must be a number"
    });
  });

  it("getEmployeeById: Should send proper data response when called", async () => {
    const mockRequest = {
      params: {
        employee_id: 2
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

    await getEmployeeById(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(200);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("getEmployeeById: Should call the next function", async () => {
    const mockRequest = {
      params: {
        employee_id: 2
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

    await getEmployeeById(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("getEmployeeById: Should return a response object that says it failed because page isn't a number", async () => {
    const mockRequest = {
      params: {
        employee_id: "hello"
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

    await getEmployeeById(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "failed",
      error: "employees/'employeeId' must be a number"
    });
  });

  it("addEmployee: Should send proper data response when called", async () => {
    const mockRequest = {
      body: {
        last_name: "Hello",
        first_name: "Hello",
        title: "Hello",
        title_of_courtesy: "Hello",
        birth_date: "2023/12/1",
        hire_date: "2023/12/1",
        address: "Hello",
        city: "Hello",
        region: "Hello",
        postal_code: "Hello",
        country: "Hello",
        home_phone: "Hello",
        extension: "Boo",
        photo: "Hello",
        notes: "Hello",
        reports_to: 1,
        photo_path: "Hello",
        territory_id: "06897"
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

    await addEmployee(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(201);
    expect(mockJsonFunc).toHaveBeenCalledWith({
      status: "success",
      data: "test"
    });
  });

  it("addEmployee: Should call the next function", async () => {
    const mockRequest = {
      body: {
        last_name: "Hello",
        first_name: "Hello",
        title: "Hello",
        title_of_courtesy: "Hello",
        birth_date: "2023/12/1",
        hire_date: "2023/12/1",
        address: "Hello",
        city: "Hello",
        region: "Hello",
        postal_code: "Hello",
        country: "Hello",
        home_phone: "Hello",
        extension: "Boo",
        photo: "Hello",
        notes: "Hello",
        reports_to: 1,
        photo_path: "Hello",
        territory_id: "06897"
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

    await addEmployee(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(201);
    expect(mockNextFunc).toHaveBeenCalled();

    const mockBadRequest = {};

    await addEmployee(mockBadRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
    expect(mockNextFunc).toHaveBeenCalled();
  });

  it("addEmployee: Should return a response object that says it failed the body object isn't correct", async () => {
    const mockRequest = {
      params: {
        employee_id: "hello"
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

    await addEmployee(mockRequest as unknown as Request, mockResponse as unknown as Response, mockNextFunc);

    expect(mockStatusFunc).toHaveBeenCalledWith(400);
  });
});
