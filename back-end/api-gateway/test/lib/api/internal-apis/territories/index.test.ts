import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import api from "../../../../../lib/api/config/api";
import {
  getEmployeeTerritories,
  getTerritories,
  getTerritoriesById
} from "../../../../../lib/api/internal-apis/territories";

describe("Internal API Function: Territories", () => {
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

  it("getTerritories: Return data in it's proper shape", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        data: {
          queryData: [
            {
              territory_id: "test",
              territory_description: "test",
              region_id: 1
            }
          ]
        }
      })
    );

    type typeToTest = {
      territories: {
        territory_id: string;
        territory_description: string;
        region_id: number;
      }[];
      totalRows: number;
      totalPages: number;
    };

    const apiData = await getTerritories();

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("getTerritories: Should be called the proper number in the URL", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        data: {
          queryData: [
            {
              territory_id: "test",
              territory_description: "test",
              region_id: 1
            }
          ]
        }
      })
    );

    const testNumber = 2;
    const apiSpy = vi.spyOn(api, "get");

    await getTerritories(testNumber);
    expect(apiSpy.mock.calls[0].includes(`test/v1/territories/${testNumber}`)).toBeTruthy();
  });

  it("getTerritoryById: Return data in it's proper shape", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        data: {
          queryData: [
            {
              territory_id: "test",
              territory_description: "test",
              region_id: 1
            }
          ]
        }
      })
    );

    type typeToTest = {
      territory_id: string;
      territory_description: string;
      region_id: number;
    }[];

    const apiData = await getTerritoriesById(1);

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("getTerritoryById: Should be called the proper number in the URL", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        data: {
          queryData: [
            {
              territory_id: "test",
              territory_description: "test",
              region_id: 1
            }
          ]
        }
      })
    );

    const testNumber = 2;
    const apiSpy = vi.spyOn(api, "get");

    await getTerritoriesById(testNumber);
    expect(apiSpy.mock.calls[0].includes(`test/v1/territories/details/${testNumber}`)).toBeTruthy();
  });

  it("getEmployeeTerritories: Return data in it's proper shape", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        data: {
          queryData: [
            {
              employee_id: 1,
              territory_id: "test"
            }
          ]
        }
      })
    );

    type typeToTest = {
      employee_territory: {
        employee_id: number;
        territory_id: string;
      }[];
      totalRows: number;
      totalPages: number;
    };

    const apiData = await getEmployeeTerritories(1);

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("getEmployeeTerritories: Should be called the proper number in the URL", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        data: {
          queryData: [
            {
              employee_id: 1,
              territory_id: "test"
            }
          ]
        }
      })
    );

    const testNumber = 2;
    const apiSpy = vi.spyOn(api, "get");

    await getEmployeeTerritories(testNumber);
    expect(apiSpy.mock.calls[0].includes(`test/v1/employee_territories/${testNumber}`)).toBeTruthy();
  });
});
