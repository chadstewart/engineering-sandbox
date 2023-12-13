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
        queryData: zod
          .object({
            product_id: zod.number(),
            product_name: zod.string(),
            unit_price: zod.number(),
            units_in_stock: zod.number().nullable(),
            units_on_order: zod.number().nullable(),
            discontinued: zod.number()
          })
          .array(),
        totalRows: zod.number(),
        totalPages: zod.number()
      })
    }),
    `${process.env.REST_API_URL}/v1/products/${page}`
  );

  const result = data.data;
  return {
    ...result.queryData,
    totalRows: result.totalRows,
    totalPages: result.totalPages
  };
};

export const getProductDetails = async (productId = 1) => {
  const data = await api.get(
    zod.object({
      status: zod.string(),
      data: zod.object({
        queryData: zod
          .object({
            product_name: zod.string(),
            unit_price: zod.number().nullable(),
            discontinued: zod.number(),
            categories: zod
              .object({
                category_name: zod.string(),
                description: zod.string().nullable()
              })
              .nullable(),
            suppliers: zod
              .object({
                company_name: zod.string(),
                contact_name: zod.string().nullable(),
                contact_title: zod.string().nullable(),
                phone: zod.string().nullable(),
                homepage: zod.string().nullable()
              })
              .nullable()
          })
          .array()
      })
    }),
    `${process.env.REST_API_URL}/v1/products/details/${productId}`
  );
  return data;
};
