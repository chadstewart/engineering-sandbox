import zod from "zod";
import api from "../../config/api";

const CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const getTerritories = async (territoryId = "98004", page = 1) => {
  const data = await api.get(
    zod.object({      
      status: zod.string(),
      data: zod.object({
        queryData: zod.object({
          employees: zod.object({
            first_name: zod.string(),
            last_name: zod.string(),
            title: zod.string().nullable(),
            hire_date: zod.date(),
            notes: zod.string(),
            home_phone: zod.string(),
            photo: zod.instanceof(Buffer).nullable()
          }),
          territories: zod.object({
            territory_description: zod.string(),
            region: zod.object({
              region_description: zod.string()
            })
          })
        }).array(),
        totalPages: zod.number()
      })
    }),
    `${process.env.REST_API_URL}/v1/territories/employees/${territoryId}/${page}`
  );
  return data.data.queryData;
};