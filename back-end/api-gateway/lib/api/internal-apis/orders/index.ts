import zod from "zod";
import api from "../../config/api";
import { secretsServicesUrl } from "../../util/secrets-services-url";

const CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const getOrders = async (page = 1) => {
  const data = await api.get(
    zod.object({
      status: zod.string(),
      data: zod.object({
        queryData: zod
          .object({
            order_id: zod.number(),
            customer_id: zod.string(),
            employee_id: zod.number(),
            order_date: zod.string().nullable(),
            required_date: zod.string().nullable(),
            shipped_date: zod.string().nullable(),
            ship_via: zod.number().nullable(),
            freight: zod.number().nullable(),
            ship_name: zod.string().nullable(),
            ship_address: zod.string().nullable(),
            ship_city: zod.string().nullable(),
            ship_region: zod.string().nullable(),
            ship_postal_code: zod.string().nullable(),
            ship_country: zod.string().nullable()
          })
          .array(),
        totalRows: zod.number(),
        totalPages: zod.number()
      })
    }),
    `${await secretsServicesUrl()}/v1/orders/${page}`,
    {
      headers: {
        ...CONFIG.headers
      }
    }
  );

  const result = data.data;
  return {
    order: result.queryData,
    totalRows: result.totalRows,
    totalPages: result.totalPages
  };
};

export const getOrderDetails = async (orderId = 1) => {
  const data = await api.get(
    zod.object({
      status: zod.string(),
      data: zod
        .object({
          orders: zod.object({
            order_date: zod.string().nullable(),
            shipped_date: zod.string().nullable()
          }),
          products: zod.object({
            product_id: zod.number()
          }),
          order_id: zod.number(),
          unit_price: zod.number(),
          quantity: zod.number()
        })
        .array()
    }),
    `${await secretsServicesUrl()}/v1/orders/details/${orderId}`,
    {
      headers: {
        ...CONFIG.headers
      }
    }
  );

  const result = data.data.map((dataEntry) => {
    return {
      ...dataEntry.orders,
      ...dataEntry.products,
      ...dataEntry
    };
  });

  return result;
};
