import zod from "zod";
import api from "../../config/api";

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