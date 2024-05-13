import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import { getSupplierDetails, getSuppliers } from "../../../../../lib/api/internal-apis/suppliers";
import api from "../../../../../lib/api/config/api";

describe("Internal API Function: Suppliers", () => {
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

  it("getSuppliers: Return data in it's proper shape", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: {
          queryData: [
            {
              supplier_id: 1,
              company_name: "test",
              contact_name: "test",
              contact_title: "test",
              address: "test",
              city: "test",
              region: "test",
              postal_code: "test",
              country: "test",
              phone: "test",
              fax: "test",
              homepage: "test"
            }
          ]
        },
        totalRows: 1,
        totalPages: 1
      })
    );

    type typeToTest = {
      supplier: {
        supplier_id: number;
        company_name: string;
        contact_name: string | null;
        contact_title: string | null;
        address: string | null;
        city: string | null;
        region: string | null;
        postal_code: string | null;
        country: string | null;
        phone: string | null;
        fax: string | null;
        homepage: string | null;
      }[];
      totalRows: number;
      totalPages: number;
    };

    const apiData = await getSuppliers();

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("getSuppliers: Should be called the proper number in the URL", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: {
          queryData: [
            {
              supplier_id: 1,
              company_name: "test",
              contact_name: "test",
              contact_title: "test",
              address: "test",
              city: "test",
              region: "test",
              postal_code: "test",
              country: "test",
              phone: "test",
              fax: "test",
              homepage: "test"
            }
          ]
        },
        totalRows: 1,
        totalPages: 1
      })
    );

    const testNumber = 2;
    const apiSpy = vi.spyOn(api, "get");

    await getSuppliers(testNumber);
    expect(apiSpy.mock.calls[0].includes(`test/v1/suppliers/${testNumber}`)).toBeTruthy();
  });

  it("getSupplierDetails: Return data in it's proper shape", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: {
          queryData: [
            {
              supplier_id: 1,
              company_name: "test",
              contact_name: "test",
              contact_title: "test",
              address: "test",
              city: "test",
              region: "test",
              postal_code: "test",
              country: "test",
              phone: "test",
              fax: "test",
              homepage: "test"
            }
          ]
        }
      })
    );

    type typeToTest = {
      supplier_id: number;
      company_name: string;
      contact_name: string | null;
      contact_title: string | null;
      address: string | null;
      city: string | null;
      region: string | null;
      postal_code: string | null;
      country: string | null;
      phone: string | null;
      fax: string | null;
      homepage: string | null;
    }[];

    const apiData = await getSupplierDetails();

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("getSupplierDetails: Should be called the proper number in the URL", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        status: "test",
        data: {
          queryData: [
            {
              supplier_id: 1,
              company_name: "test",
              contact_name: "test",
              contact_title: "test",
              address: "test",
              city: "test",
              region: "test",
              postal_code: "test",
              country: "test",
              phone: "test",
              fax: "test",
              homepage: "test"
            }
          ]
        }
      })
    );

    const testNumber = 2;
    const apiSpy = vi.spyOn(api, "get");

    await getSupplierDetails(testNumber);
    expect(apiSpy.mock.calls[0].includes(`test/v1/suppliers/details/${testNumber}`)).toBeTruthy();
  });
});
