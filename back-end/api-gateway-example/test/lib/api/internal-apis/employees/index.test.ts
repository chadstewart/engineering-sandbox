import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import api from "../../../../../lib/api/config/api";
import { addEmployees, getEmployees, getEmployeesById } from "../../../../../lib/api/internal-apis/employees";

describe("Internal API Function: Categories", () => {
  beforeEach(() => {
    vi.mock("../../../../../lib/api/config/api");
    vi.mock("../../../../../lib/api/util/secrets-services-url", () => {
      return {
        secretsServicesUrl: () => Promise.resolve("test")
      };
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("getEmployees: Return data in it's proper shape", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: {
          queryData: [
            {
              employee_id: 1,
              first_name: "test",
              last_name: "test",
              title: "test",
              title_of_courtesy: "test",
              birth_date: "test",
              hire_date: "test",
              address: "test",
              city: "test",
              region: "test",
              postal_code: "test",
              country: "test",
              home_phone: "test",
              extension: "test",
              photo: {
                type: "test",
                data: []
              },
              notes: "test",
              reports_to: 1,
              photo_path: "test"
            }
          ]
        },
        totalRows: 1,
        totalPages: 1
      })
    );

    type typeToTest = {
      employee: {
        employee_id: number;
        first_name: string;
        last_name: string;
        title: string | null;
        title_of_courtesy: string;
        birth_date: string;
        hire_date: string;
        address: string;
        city: string;
        region: string | null;
        postal_code: string;
        country: string;
        home_phone: string;
        extension: string;
        photo: {
          type: string;
          data: unknown[];
        };
        notes: string;
        reports_to: number | null;
        photo_path: string;
      }[];
      totalRows: number;
      totalPages: number;
    };

    const apiData = await getEmployees();

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("getEmployees: Should be called the proper number in the URL", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: {
          queryData: [
            {
              employee_id: 1,
              first_name: "test",
              last_name: "test",
              title: "test",
              title_of_courtesy: "test",
              birth_date: "test",
              hire_date: "test",
              address: "test",
              city: "test",
              region: "test",
              postal_code: "test",
              country: "test",
              home_phone: "test",
              extension: "test",
              photo: {
                type: "test",
                data: []
              },
              notes: "test",
              reports_to: 1,
              photo_path: "test"
            }
          ]
        },
        totalRows: 1,
        totalPages: 1
      })
    );

    const testNumber = 2;
    const apiSpy = vi.spyOn(api, "get");

    await getEmployees(testNumber);
    expect(apiSpy.mock.calls[0].includes(`test/v1/employees/${testNumber}`)).toBeTruthy();
  });

  it("getEmployeeDetails: Return data in it's proper shape", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: {
          queryData: [
            {
              employee_id: 1,
              first_name: "test",
              last_name: "test",
              title: "test",
              title_of_courtesy: "test",
              birth_date: "test",
              hire_date: "test",
              address: "test",
              city: "test",
              region: "test",
              postal_code: "test",
              country: "test",
              home_phone: "test",
              extension: "test",
              photo: {
                type: "test",
                data: []
              },
              notes: "test",
              reports_to: 1,
              photo_path: "test"
            }
          ]
        }
      })
    );

    type typeToTest = {
      employee_id: number;
      first_name: string;
      last_name: string;
      title: string | null;
      title_of_courtesy: string;
      birth_date: string;
      hire_date: string;
      address: string;
      city: string;
      region: string | null;
      postal_code: string;
      country: string;
      home_phone: string;
      extension: string;
      photo: {
        type: string;
        data: unknown[];
      };
      notes: string;
      reports_to: number | null;
      photo_path: string;
    }[];

    const apiData = await getEmployeesById();

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("getEmployeeDetails: Should be called the proper number in the URL", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: {
          queryData: [
            {
              employee_id: 1,
              first_name: "test",
              last_name: "test",
              title: "test",
              title_of_courtesy: "test",
              birth_date: "test",
              hire_date: "test",
              address: "test",
              city: "test",
              region: "test",
              postal_code: "test",
              country: "test",
              home_phone: "test",
              extension: "test",
              photo: {
                type: "test",
                data: []
              },
              notes: "test",
              reports_to: 1,
              photo_path: "test"
            }
          ]
        }
      })
    );

    const testNumber = 2;
    const apiSpy = vi.spyOn(api, "get");

    await getEmployeesById(testNumber);
    expect(apiSpy.mock.calls[0].includes(`test/v1/employees/details/${testNumber}`)).toBeTruthy();
  });

  it("addEmployee: Should call api post function with proper args", async () => {
    vi.mocked(api.post).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: ["test"]
      })
    );

    type typeToTest = {
      first_name: string;
      last_name: string;
      title: string | null;
      title_of_courtesy: string;
      birth_date: string;
      hire_date: string;
      address: string;
      city: string;
      region: string | null;
      postal_code: string;
      country: string;
      home_phone: string;
      extension: string;
      photo: unknown;
      notes: string;
      reports_to: number | null;
      photo_path: string;
      employee_id: number;
      territory_id: string;
    };

    const testAccessToken = "Test Access Token";
    const testFunctionArg = {
      last_name: "test",
      first_name: "test",
      title: "test",
      title_of_courtesy: "test",
      birth_date: "test",
      hire_date: "test",
      address: "test",
      city: "test",
      region: "test",
      postal_code: "test",
      country: "test",
      home_phone: "test",
      extension: "test",
      photo: Buffer.from(""),
      notes: "test",
      reports_to: 1,
      photo_path: "test",
      territory_id: "test"
    };

    const apiData = await addEmployees(testAccessToken, testFunctionArg);

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("addEmployee: Should call api post function with proper args", async () => {
    vi.mocked(api.post).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: ["test"]
      })
    );

    const apiSpy = vi.spyOn(api, "post");
    const testAccessToken = "Test Access Token";
    const testConfig: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${testAccessToken}`
      }
    };
    const testFunctionArg = {
      last_name: "test",
      first_name: "test",
      title: "test",
      title_of_courtesy: "test",
      birth_date: "test",
      hire_date: "test",
      address: "test",
      city: "test",
      region: "test",
      postal_code: "test",
      country: "test",
      home_phone: "test",
      extension: "test",
      photo: Buffer.from(""),
      notes: "test",
      reports_to: 1,
      photo_path: "test",
      territory_id: "test"
    };

    await addEmployees(testAccessToken, testFunctionArg);

    expect(apiSpy.mock.calls[0][1] === `test/v1/employees`).toBeTruthy();
    expect(JSON.stringify(apiSpy.mock.calls[0][2]) === JSON.stringify(testFunctionArg)).toBeTruthy();
    expect(JSON.stringify(apiSpy.mock.calls[0][3]) === JSON.stringify(testConfig)).toBeTruthy();
  });
});
