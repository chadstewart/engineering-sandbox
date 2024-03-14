import zod from "zod";
import api from "../../config/api";
import { secretsServicesUrl } from "../../util/secrets-services-url";

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
            supplier_id: zod.number(),
            category_id: zod.number(),
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
    `${await secretsServicesUrl()}/v1/products/${page}`
  );

  const result = data.data;
  return {
    product: result.queryData,
    totalRows: result.totalRows,
    totalPages: result.totalPages
  };
};

export const getProductDetails = async (productId = 1) => {
  const data = await api.get(
    zod.object({
      status: zod.string(),
      data: zod
        .object({
          product_id: zod.number(),
          product_name: zod.string(),
          supplier_id: zod.number(),
          category_id: zod.number(),
          unit_price: zod.number(),
          units_in_stock: zod.number().nullable(),
          units_on_order: zod.number().nullable(),
          discontinued: zod.number()
        })
        .array()
    }),
    `${await secretsServicesUrl()}/v1/products/details/${productId}`
  );
  return data.data;
};
