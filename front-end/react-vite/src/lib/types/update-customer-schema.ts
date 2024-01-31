import zod from "zod";

export const updateCustomerZodSchema = zod
  .object({
    customer_id: zod.string(),
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
  .partial()
  .refine(
    ({ company_name, contact_name, contact_title, address, city, region, postal_code, country, phone, fax }) =>
      company_name !== undefined ||
      contact_name !== undefined ||
      contact_title !== undefined ||
      address !== undefined ||
      city !== undefined ||
      region !== undefined ||
      postal_code !== undefined ||
      country !== undefined ||
      phone !== undefined ||
      fax !== undefined
  );

export type updateCustomerType = zod.infer<typeof updateCustomerZodSchema>;
