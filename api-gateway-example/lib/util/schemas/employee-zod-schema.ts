import zod from "zod";

export const createEmployeeZodSchema =  zod.object({
  last_name: zod.string(),
  first_name: zod.string(),
  title: zod.string(),
  title_of_courtesy: zod.string(),
  birth_date: zod.union([zod.string(), zod.date()]).transform(val => new Date(val)),
  hire_date: zod.union([zod.string(), zod.date()]).transform(val => new Date(val)),
  address: zod.string(),
  city: zod.string(),
  region: zod.string(),
  postal_code: zod.string(),
  country: zod.string(),
  home_phone: zod.string(),
  extension: zod.string(),
  photo: zod.any().transform(val => Buffer.from("")),
  notes: zod.string(),
  reports_to: zod.number(),
  photo_path: zod.string(),
  territory_id: zod.string()
});