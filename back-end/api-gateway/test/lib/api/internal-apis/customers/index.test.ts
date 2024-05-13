import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import api from "../../../../../lib/api/config/api";
import {
  getAllCustomerIDs,
  getCustomerCountryDistribution,
  getCustomerDetails,
  getCustomers,
  updateCustomer
} from "../../../../../lib/api/internal-apis/customers";

describe("Internal API Function: Customers", () => {
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

  it("getCustomers: Return data in it's proper shape", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: {
          queryData: [
            {
              customer_id: "test",
              company_name: "test",
              contact_name: "test",
              contact_title: "test",
              address: "test",
              city: "test",
              region: "test",
              postal_code: "test",
              country: "test",
              phone: "test",
              fax: "test"
            }
          ]
        },
        totalRows: 1,
        totalPages: 1
      })
    );

    type typeToTest = {
      customer: {
        customer_id: string;
        company_name: string;
        contact_name: string | null;
        contact_title: string | null;
        address: string;
        city: string;
        region: string | null;
        postal_code: string;
        country: string;
        phone: string;
        fax: string | null;
      }[];
      totalRows: number;
      totalPages: number;
    };

    const apiData = await getCustomers();

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("getCustomers: Should be called the proper number in the URL", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: {
          queryData: [
            {
              customer_id: "test",
              company_name: "test",
              contact_name: "test",
              contact_title: "test",
              address: "test",
              city: "test",
              region: "test",
              postal_code: "test",
              country: "test",
              phone: "test",
              fax: "test"
            }
          ]
        },
        totalRows: 1,
        totalPages: 1
      })
    );

    const testNumber = 2;
    const apiSpy = vi.spyOn(api, "get");

    await getCustomers(testNumber);
    expect(apiSpy.mock.calls[0].includes(`test/v1/customers/${testNumber}`)).toBeTruthy();
  });

  it("getCustomerDetails: Return data in it's proper shape", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: {
          queryData: [
            {
              customer_id: "test",
              company_name: "test",
              contact_name: "test",
              contact_title: "test",
              address: "test",
              city: "test",
              region: "test",
              postal_code: "test",
              country: "test",
              phone: "test",
              fax: "test"
            }
          ]
        }
      })
    );

    type typeToTest = {
      customer_id: string;
      company_name: string;
      contact_name: string | null;
      contact_title: string | null;
      address: string;
      city: string;
      region: string | null;
      postal_code: string;
      country: string;
      phone: string;
      fax: string | null;
    }[];

    const apiData = await getCustomerDetails();

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("getCustomerDetails: Should be called the proper number in the URL", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: {
          queryData: [
            {
              customer_id: "test",
              company_name: "test",
              contact_name: "test",
              contact_title: "test",
              address: "test",
              city: "test",
              region: "test",
              postal_code: "test",
              country: "test",
              phone: "test",
              fax: "test"
            }
          ]
        }
      })
    );

    const testString = "2";
    const apiSpy = vi.spyOn(api, "get");

    await getCustomerDetails(testString);
    expect(apiSpy.mock.calls[0].includes(`test/v1/customers/details/${testString}`)).toBeTruthy();
  });

  /* Not completed */

  it("updateCustomer: Should return data in the proper shape", async () => {
    vi.mocked(api.put).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: ["test"]
      })
    );

    type typeToTest = {
      customer_id: string | null;
      company_name: string | null;
      contact_name: string | null;
      contact_title: string | null;
      address: string | null;
      city: string | null;
      region: string | null;
      postal_code: string | null;
      country: string | null;
      phone: string | null;
      fax: string | null;
    };

    const testCustomerID = "test";
    const testAccessToken = "Test Access Token";
    const testFunctionArg = {
      customer_id: "test",
      company_name: "test",
      contact_name: "test",
      contact_title: "test",
      address: "test",
      city: "test",
      region: "test",
      postal_code: "test",
      country: "test",
      phone: "test",
      fax: "test"
    };

    const apiData = await updateCustomer(testCustomerID, testAccessToken, testFunctionArg);

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("updateCustomer: Should call api put function with proper args", async () => {
    vi.mocked(api.put).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: ["test"]
      })
    );

    const apiSpy = vi.spyOn(api, "put");
    const testAccessToken = "Test Access Token";
    const testConfig: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${testAccessToken}`
      }
    };
    const testCustomerID = "test";
    const testFunctionArg = {
      customer_id: "test",
      company_name: "test",
      contact_name: "test",
      contact_title: "test",
      address: "test",
      city: "test",
      region: "test",
      postal_code: "test",
      country: "test",
      phone: "test",
      fax: "test"
    };

    await updateCustomer(testCustomerID, testAccessToken, testFunctionArg);

    expect(apiSpy.mock.calls[0][1] === `test/v1/customers/${testCustomerID}`).toBeTruthy();
    expect(JSON.stringify(apiSpy.mock.calls[0][2]) === JSON.stringify(testFunctionArg)).toBeTruthy();
    expect(JSON.stringify(apiSpy.mock.calls[0][3]) === JSON.stringify(testConfig)).toBeTruthy();
  });

  /* Not completed */

  it("getCustomerDistribution: Return data in it's proper shape", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: [
          {
            _count: {
              country: 1
            },
            country: "test"
          }
        ]
      })
    );

    type typeToTest = {
      country: string;
      customerCount: number;
    }[];

    const apiData = await getCustomerCountryDistribution();

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("getCustomerDistribution: Should be called with the proper URL", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: [
          {
            _count: {
              country: 1
            },
            country: "test"
          }
        ]
      })
    );

    const apiSpy = vi.spyOn(api, "get");

    await getCustomerCountryDistribution();
    expect(apiSpy.mock.calls[0].includes(`test/v1/customers/distribution/country`)).toBeTruthy();
  });

  it("getAllCustomerIDs: Should call api get function with proper args", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: ["test"]
      })
    );
    const testAccessToken = "Test Access Token";

    type typeToTest = string[];

    const apiData = await getAllCustomerIDs(testAccessToken);

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("getAllCustomerIDs: Should call api get function with proper args", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: ["test"]
      })
    );

    const apiSpy = vi.spyOn(api, "get");
    const testAccessToken = "Test Access Token";
    const testConfig: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${testAccessToken}`
      }
    };

    await getAllCustomerIDs(testAccessToken);

    expect(apiSpy.mock.calls[0][1] === `test/v1/customers/customer_id/all`).toBeTruthy();
    expect(JSON.stringify(apiSpy.mock.calls[0][2]) === JSON.stringify(testConfig)).toBeTruthy();
  });
});
