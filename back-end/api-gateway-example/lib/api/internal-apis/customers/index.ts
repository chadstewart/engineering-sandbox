import zod from "zod";
import api from "../../config/api";
import { updateCustomerZodSchema } from "../../../util/schemas/update-customer-zod-schema";
import { secretsServicesUrl } from "../../util/secrets-services-url";

const CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const getCustomers = async (page = 1) => {
  const data = await api.get(
    zod.object({
      status: zod.string(),
      data: zod.object({
        queryData: zod
          .object({
            customer_id: zod.string(),
            company_name: zod.string(),
            contact_name: zod.string().nullable(),
            contact_title: zod.string().nullable(),
            address: zod.string(),
            city: zod.string(),
            region: zod.string().nullable(),
            postal_code: zod.string(),
            country: zod.string(),
            phone: zod.string(),
            fax: zod.string().nullable()
          })
          .array(),
        totalRows: zod.number(),
        totalPages: zod.number()
      })
    }),
    `${await secretsServicesUrl()}/v1/customers/${page}`
  );

  const result = data.data;
  return {
    customer: result.queryData,
    totalRows: result.totalRows,
    totalPages: result.totalPages
  };
};

export const getCustomerDetails = async (customerId = "") => {
  const data = await api.get(
    zod.object({
      status: zod.string(),
      data: zod
        .object({
          customer_id: zod.string(),
          company_name: zod.string(),
          contact_name: zod.string().nullable(),
          contact_title: zod.string().nullable(),
          address: zod.string(),
          city: zod.string(),
          region: zod.string().nullable(),
          postal_code: zod.string(),
          country: zod.string(),
          phone: zod.string(),
          fax: zod.string().nullable()
        })
        .array()
    }),
    `${await secretsServicesUrl()}/v1/customers/details/${customerId}`
  );
  return data.data;
};

export const updateCustomer = async (
  customerId: string,
  accessToken: string,
  requestBody: typeof updateCustomerZodSchema
) => {
  const data = await api.put(
    zod.object({
      status: zod.string(),
      data: zod.object({
        customer_id: zod.string(),
        company_name: zod.string(),
        contact_name: zod.string().nullable(),
        contact_title: zod.string().nullable(),
        address: zod.string().nullable(),
        city: zod.string().nullable(),
        region: zod.string().nullable(),
        postal_code: zod.string().nullable(),
        country: zod.string().nullable(),
        phone: zod.string().nullable(),
        fax: zod.string().nullable()
      })
    }),
    `${await secretsServicesUrl()}/v1/customers/${customerId}`,
    requestBody,
    {
      headers: {
        ...CONFIG.headers,
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
  return data.data;
};

export const getCustomerCountryDistribution = async () => {
  const data = await api.get(
    zod.object({
      status: zod.string(),
      data: zod
        .object({
          _count: zod.object({
            country: zod.number()
          }),
          country: zod.string()
        })
        .array()
    }),
    `${await secretsServicesUrl()}/v1/customers/distribution/country`
  );

  const resultMap = data.data.map((countryResponse) => {
    return {
      country: countryResponse.country,
      customerCount: countryResponse._count.country
    };
  });

  return resultMap;
};

export const getAllCustomerIDs = async (accessToken: string) => {
  const data = await api.get(
    zod.object({
      status: zod.string(),
      data: zod
        .object({
          customer_id: zod.string()
        })
        .array()
    }),
    `${await secretsServicesUrl()}/v1/customers/customer_id/all`,
    {
      headers: {
        ...CONFIG.headers,
        Authorization: `Bearer ${accessToken}`
      }
    }
  );

  const result = data.data.map((dataEntry) => dataEntry.customer_id);

  return result;
};
