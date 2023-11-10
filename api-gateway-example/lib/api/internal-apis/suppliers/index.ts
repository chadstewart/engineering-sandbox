import zod from "zod";
import api from "../../config/api";

const CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const getSuppliers = async (page = 1) => {
  const data = await api.get(
    zod.object({      
      status: zod.string(),
      data: zod.object({
        queryData: zod.object({
          supplier_id: zod.number(), 
          company_name: zod.string(), 
          contact_name: zod.string().nullable(), 
          contact_title: zod.string().nullable(), 
          address: zod.string().nullable(), 
          city: zod.string().nullable(), 
          region: zod.string().nullable(), 
          postal_code: zod.string().nullable(), 
          country: zod.string().nullable(), 
          phone: zod.string().nullable(), 
          fax: zod.string().nullable(), 
          homepage: zod.string().nullable() 
        }).array(),
        totalPages: zod.number()
      })
    }),
    `${process.env.REST_API_URL}/v1/suppliers/${page}`
  );
  return data.data.queryData;
};