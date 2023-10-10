import zod from "zod";

export const updateCustomerZodSchema = zod.object({
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
});