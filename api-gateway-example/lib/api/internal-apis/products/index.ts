import zod from "zod";
import api from "../../config/api";

const CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const getProducts = async (page = 1) => {
  const data = await api.get(
    zod.object({      
      status: zod.string(),
      data: zod.object({
        queryData: zod.object({
          product_id: zod.number(),
          product_name: zod.string(),
          unit_price: zod.number(),
          units_in_stock: zod.number().nullable(),
          units_on_order: zod.number().nullable(),
          discontinued: zod.number()
        }).array(),
        totalPages: zod.number()
      })
    }),
    `${process.env.REST_API_URL}/v1/products/${page}`
  );
  return data.data.queryData;
};