import zod from "zod";
import api from "../../config/api";
import { createEmployeeZodSchema } from "../../../util/schemas/employee-zod-schema";

const CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const getEmployees = async (page = 1) => {
  const data = await api.get(
    zod.object({
      status: zod.string(),
      data: zod.object({
        queryData: zod
          .object({
            employee_id: zod.number(),
            first_name: zod.string(),
            last_name: zod.string(),
            title: zod.string().nullable(),
            title_of_courtesy: zod.string(),
            birth_date: zod.string(),
            hire_date: zod.string(),
            address: zod.string(),
            city: zod.string(),
            region: zod.string().nullable(),
            postal_code: zod.string(),
            country: zod.string(),
            home_phone: zod.string(),
            extension: zod.string(),
            photo: zod.object({
              type: zod.string(),
              data: zod.any().array()
            }),
            notes: zod.string(),
            reports_to: zod.number().nullable(),
            photo_path: zod.string()
          })
          .array(),
        totalRows: zod.number(),
        totalPages: zod.number()
      })
    }),
    `${process.env.REST_API_URL}/v1/employees/${page}`
  );

  const result = data.data;
  return {
    employee: result.queryData,
    totalRows: result.totalRows,
    totalPages: result.totalPages
  };
};

export const getEmployeesById = async (employeeId = 1) => {
  const data = await api.get(
    zod.object({
      status: zod.string(),
      data: zod.object({
        queryData: zod
          .object({
            employee_id: zod.number(),
            first_name: zod.string(),
            last_name: zod.string(),
            title: zod.string().nullable(),
            title_of_courtesy: zod.string(),
            birth_date: zod.string(),
            hire_date: zod.string(),
            address: zod.string(),
            city: zod.string(),
            region: zod.string().nullable(),
            postal_code: zod.string(),
            country: zod.string(),
            home_phone: zod.string(),
            extension: zod.string(),
            photo: zod.object({
              type: zod.string(),
              data: zod.any().array()
            }),
            notes: zod.string(),
            reports_to: zod.number().nullable(),
            photo_path: zod.string()
          })
          .array()
      })
    }),
    `${process.env.REST_API_URL}/v1/employees/details/${employeeId}`
  );
  return data.data.queryData;
};

export const addEmployees = async (requestBody: typeof createEmployeeZodSchema) => {
  const data = await api.post(
    zod.object({
      status: zod.string(),
      data: zod.tuple([
        zod.object({
          employee_id: zod.number(),
          first_name: zod.string(),
          last_name: zod.string(),
          title: zod.string().nullable(),
          title_of_courtesy: zod.string(),
          birth_date: zod.string(),
          hire_date: zod.string(),
          address: zod.string(),
          city: zod.string(),
          region: zod.string().nullable(),
          postal_code: zod.string(),
          country: zod.string(),
          home_phone: zod.string(),
          extension: zod.string(),
          photo: zod
            .object({
              type: zod.string(),
              data: zod.any().array()
            })
            .nullable(),
          notes: zod.string(),
          reports_to: zod.number().nullable(),
          photo_path: zod.string()
        }),
        zod.object({
          employee_id: zod.number(),
          territory_id: zod.string()
        })
      ])
    }),
    `${process.env.REST_API_URL}/v1/employees`,
    requestBody,
    CONFIG
  );
  return {
    ...data.data[0],
    ...data.data[1]
  };
};
