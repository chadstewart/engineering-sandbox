import zod from "zod";
import api from "../../config/api";

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

export const getCustomerDetails = async (orderId = '') => {
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
    `${process.env.REST_API_URL}/v1/customers/details/${orderId}`
  );
  return data;
};