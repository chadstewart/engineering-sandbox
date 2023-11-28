import zod from "zod";
import api from "../../config/api";
import { updateCustomerZodSchema } from "../../../util/schemas/update-customer-zod-schema";

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
        queryData: zod.object({
          customer_id: zod.string(),
          company_name: zod.string(),
          contact_name: zod.string().nullable(),
          contact_title: zod.string().nullable()
        }).array(),
        totalPages: zod.number()
      })
    }),
    `${process.env.REST_API_URL}/v1/customers/${page}`
  );
  return data.data.queryData;
};

export const getCustomerDetails = async (customerId = '') => {
  const data = await api.get(
    zod.object({      
      status: zod.string(),
      data: zod.object({
        queryData: zod.object({
          customer_id: zod.string(),
          company_name: zod.string(),
          contact_name: zod.string().nullable(),
          contact_title: zod.string().nullable(),
          customer_customer_demo: zod.object({
            customer_demographics: zod.object({
              customer_type_id: zod.string(),
              customer_desc: zod.string().nullable()
            })
          })
        }).array()
      })
    }),
    `${process.env.REST_API_URL}/v1/customers/details/${customerId}`
  );
  return data;
};

export const addCustomer = async (customerId = '', requestBody: typeof updateCustomerZodSchema ) => {
  const data = await api.put(
    zod.object({
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
    }),
    `${process.env.REST_API_URL}/v1/customers/${customerId}`,
    requestBody,
    CONFIG
  );
  return data;
}