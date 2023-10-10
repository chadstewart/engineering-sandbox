import zod from "zod";

export const updateCustomerZodSchema = zod.object({
  company_name: zod.optional(zod.string()),
  contact_name: zod.optional(zod.string()),
  contact_title: zod.optional(zod.string()),
  address: zod.optional(zod.string()),
  city: zod.optional(zod.string()),
  region: zod.optional(zod.string()),
  postal_code: zod.optional(zod.string()),
  country: zod.optional(zod.string()),
  phone: zod.optional(zod.string()),
  fax: zod.optional(zod.string())
});