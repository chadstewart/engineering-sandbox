import zod from "zod";

export const addOrdersNewCustomerZodSchema = zod.object({
  orders: zod.object({
    employee_id: zod.string(),
    order_date: zod.string(),
    required_date: zod.string(),
    shipped_date: zod.string(),
    ship_via: zod.string(),
    frieght: zod.string(),
    ship_name: zod.string(),
    ship_address: zod.string(),
    ship_city: zod.string(),
    ship_region: zod.string(),
    ship_postal_code: zod.string(),
    ship_country: zod.string(),
  }),
  order_details: zod.object({
    product_id: zod.string(),
    unit_price: zod.string(),
    quantity: zod.string(),
    discount: zod.string(),
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
    employee_id: zod.string(),
    order_date: zod.string(),
    required_date: zod.string(),
    shipped_date: zod.string(),
    ship_via: zod.string(),
    frieght: zod.string(),
    ship_name: zod.string(),
    ship_address: zod.string(),
    ship_city: zod.string(),
    ship_region: zod.string(),
    ship_postal_code: zod.string(),
    ship_country: zod.string(),
  }),
  order_details: zod.object({
    product_id: zod.string(),
    unit_price: zod.string(),
    quantity: zod.string(),
    discount: zod.string(),
  })
});