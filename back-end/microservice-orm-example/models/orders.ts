import { prisma } from "../services/database";
import { generateCustomerId } from "../util/generate-customer-id";
import { prismaPaginationHelper } from "../util/pagination-helper";
import { ROW_LIMIT } from "../util/row-limit";
import {
  addOrdersExistingCustomerZodSchema,
  addOrdersNewCustomerZodSchema
} from "../util/schemas/add-orders-zod-schema";

export const orders = async (page = 1) => {
  const { skip, take } = prismaPaginationHelper(page);
  const queryData = await prisma.orders.findMany({
    skip,
    take
  });
  const totalRows = await prisma.orders.count();
  const totalPages = Math.ceil(totalRows / ROW_LIMIT);
  const data = {
    queryData,
    totalRows,
    totalPages
  };
  return data;
};

export const orderDetails = async (orderId = 0) => {
  const queryData = await prisma.order_details.findMany({
    select: {
      order_id: true,
      products: {
        select: {
          product_id: true
        }
      },
      unit_price: true,
      quantity: true,
      orders: {
        select: {
          order_date: true,
          shipped_date: true
        }
      }
    },
    where: {
      order_id: orderId
    }
  });
  return queryData;
};

export const addOrderNewCustomer = async (reqBody: unknown) => {
  try {
    const addOrdersSchema = await addOrdersNewCustomerZodSchema.parse(reqBody);

    const {
      orders: {
        employee_id,
        order_date,
        required_date,
        shipped_date,
        ship_via,
        freight,
        ship_name,
        ship_address,
        ship_city,
        ship_region,
        ship_postal_code,
        ship_country
      },
      order_details: { product_id, unit_price, quantity, discount },
      customers: { company_name, contact_name, contact_title, address, city, region, postal_code, country, phone }
    } = addOrdersSchema;

    const latestOrderIdsQuery = await prisma.orders.findMany({
      select: {
        order_id: true
      },
      orderBy: {
        order_id: "desc"
      },
      take: 1
    });

    const newOrderId = latestOrderIdsQuery[0].order_id + 1;

    const newCustomerId = generateCustomerId(contact_name);

    const queryData = await prisma.$transaction([
      prisma.customers.create({
        data: {
          customer_id: newCustomerId,
          company_name,
          contact_name,
          contact_title,
          address,
          city,
          region,
          postal_code,
          country,
          phone
        }
      }),
      prisma.orders.create({
        data: {
          order_id: newOrderId,
          customer_id: newCustomerId,
          employee_id,
          order_date,
          required_date,
          shipped_date,
          ship_via,
          freight,
          ship_name,
          ship_address,
          ship_city,
          ship_region,
          ship_postal_code,
          ship_country
        }
      }),
      prisma.order_details.create({
        data: {
          order_id: newOrderId,
          product_id,
          unit_price,
          quantity,
          discount
        }
      })
    ]);

    return queryData;
  } catch (error) {
    throw error;
  }
};

export const addOrderExistingCustomer = async (reqBody: unknown, customer_id: string) => {
  try {
    const addOrdersSchema = await addOrdersExistingCustomerZodSchema.parse(reqBody);

    const {
      orders: {
        employee_id,
        order_date,
        required_date,
        shipped_date,
        ship_via,
        freight,
        ship_name,
        ship_address,
        ship_city,
        ship_region,
        ship_postal_code,
        ship_country
      },
      order_details: { product_id, unit_price, quantity, discount }
    } = addOrdersSchema;

    const latestOrderIdsQuery = await prisma.orders.findMany({
      select: {
        order_id: true
      },
      orderBy: {
        order_id: "desc"
      },
      take: 1
    });

    const newOrderId = latestOrderIdsQuery[0].order_id + 1;

    const queryData = await prisma.$transaction([
      prisma.orders.create({
        data: {
          order_id: newOrderId,
          customer_id,
          employee_id,
          order_date,
          required_date,
          shipped_date,
          ship_via,
          freight,
          ship_name,
          ship_address,
          ship_city,
          ship_region,
          ship_postal_code,
          ship_country
        }
      }),
      prisma.order_details.create({
        data: {
          order_id: newOrderId,
          product_id,
          unit_price,
          quantity,
          discount
        }
      })
    ]);

    return queryData;
  } catch (error) {
    throw error;
  }
};
