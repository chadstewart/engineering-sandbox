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
        queryData: zod.object({
          employee_id: zod.number(),
          first_name: zod.string(),
          last_name: zod.string(),
          title: zod.string().nullable(),
          photo: zod.instanceof(Buffer).nullable()
        }).array(),
        totalPages: zod.number()
      })
    }),
    `${process.env.REST_API_URL}/v1/employees/${page}`
  );
  return data.data.queryData;
};

export const getEmployeesById = async (employeeId = 1) => {
  const data = await api.get(
    zod.object({      
      status: zod.string(),
      data: zod.object({
        queryData: zod.object({
          employee_id: zod.number(),
          first_name: zod.string(),
          last_name: zod.string(),
          title: zod.string().nullable(),
          photo: zod.instanceof(Buffer).nullable()
        }).array()
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
      data: zod.object({
        queryData: zod.any().array()
      })
    }),
    `${process.env.REST_API_URL}/v1/employees`,
    requestBody,
    CONFIG
  );
  return data.data.queryData;
};