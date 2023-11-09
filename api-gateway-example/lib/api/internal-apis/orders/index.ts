import zod from "zod";
import api from "../../config/api";

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
        queryData: zod.object({
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
        }).array(),
        totalPages: zod.number()
      })
    }),
    `${process.env.REST_API_URL}/v1/orders/${page}`
  );
  return data.data.queryData;
};

export const getOrderDtails = async (orderId = '') => {
  const data = await api.get(
    zod.object({      
      status: zod.string(),
      data: zod.object({
        queryData: zod.object({
          orders: zod.object({
              order_date: zod.date().nullable(),
              shipped_date: zod.date().nullable()
          }),
          order_id: zod.number(),
          unit_price: zod.number(),
          quantity: zod.number(),
          products: zod.object({
              product_id: zod.number()
          })
        }).array(),
        totalPages: zod.number()
      })
    }),
    `${process.env.REST_API_URL}/v1/orders/details/${orderId}`
  );
  return data;
};