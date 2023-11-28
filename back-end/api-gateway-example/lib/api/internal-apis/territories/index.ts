import zod from "zod";
import api from "../../config/api";

const CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const getTerritories = async (page = 1) => {
  const data = await api.get(
    zod.object({      
      status: zod.string(),
      data: zod.object({
        queryData: zod.object({
          territory_id: zod.string(),
          territory_description: zod.string(),
          region_id: zod.number()          
        }).array(),
        totalPages: zod.number()
      })
    }),
    `${process.env.REST_API_URL}/v1/territories/${page}`
  );
  return data.data.queryData;
};

export const getTerritoriesById = async (territoryId = 1) => {
  const data = await api.get(
    zod.object({      
      status: zod.string(),
      data: zod.object({
        queryData: zod.object({
          territory_id: zod.string(),
          territory_description: zod.string(),
          region_id: zod.number()          
        }).array(),
        totalPages: zod.number()
      })
    }),
    `${process.env.REST_API_URL}/v1/territories/details/${territoryId}`
  );
  return data.data.queryData;
};