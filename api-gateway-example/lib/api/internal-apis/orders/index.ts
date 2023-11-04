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
      order_id: zod.number(),
      order_date: zod.date().nullable(),
      shipped_date: zod.date().nullable(),
      ship_via: zod.number().nullable(),
    }),
    `rest-api:3000/v1/orders/${page}`,
    CONFIG
  );
  return data;
};

export const getOrderDtails = async (orderId = '') => {
  const data = await api.get(
    zod.object({
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
    }),
    `rest-api:3000/v1/orders/details/${orderId}`,
    CONFIG
  );
  return data;
};