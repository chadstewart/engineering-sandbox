import zod from "zod";

export const addOrdersNewCustomerZodSchema = zod.object({
  orders: zod.object({
    employee_id: zod.number(),
    order_date:  zod.union([zod.string(), zod.date()]).transform(val => new Date(val)),
    required_date:  zod.union([zod.string(), zod.date()]).transform(val => new Date(val)),
    shipped_date:  zod.union([zod.string(), zod.date()]).transform(val => new Date(val)),
    ship_via: zod.number(),
    freight: zod.number(),
    ship_name: zod.string(),
    ship_address: zod.string(),
    ship_city: zod.string(),
    ship_region: zod.string(),
    ship_postal_code: zod.string(),
    ship_country: zod.string(),
  }),
  order_details: zod.object({
    product_id: zod.number(),
    unit_price: zod.number(),
    quantity: zod.number(),
    discount: zod.number(),
  }),
  customers: zod.object({
    company_name: zod.string(),
    contact_name: zod.string(),
    contact_title: zod.string(),
    address: zod.string(),
    city: zod.string(),
    region: zod.string(),
    postal_code: zod.string(),
    country: zod.string(),
    phone: zod.string(),
    fax: zod.string()
  })
});

export const addOrdersExistingCustomerZodSchema = zod.object({
  orders: zod.object({
    employee_id: zod.number(),
    order_date: zod.union([zod.string(), zod.date()]).transform(val => new Date(val)),
    required_date: zod.union([zod.string(), zod.date()]).transform(val => new Date(val)),
    shipped_date: zod.union([zod.string(), zod.date()]).transform(val => new Date(val)),
    ship_via: zod.number(),
    freight: zod.number(),
    ship_name: zod.string(),
    ship_address: zod.string(),
    ship_city: zod.string(),
    ship_region: zod.string(),
    ship_postal_code: zod.string(),
    ship_country: zod.string(),
  }),
  order_details: zod.object({
    product_id: zod.number(),
    unit_price: zod.number(),
    quantity: zod.number(),
    discount: zod.number(),
  })
});