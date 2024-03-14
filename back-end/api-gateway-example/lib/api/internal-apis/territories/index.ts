import zod from "zod";
import api from "../../config/api";
import { secretsServicesUrl } from "../../util/secrets-services-url";

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
        queryData: zod
          .object({
            territory_id: zod.string(),
            territory_description: zod.string(),
            region_id: zod.number()
          })
          .array(),
        totalRows: zod.number(),
        totalPages: zod.number()
      })
    }),
    `${await secretsServicesUrl()}/v1/territories/${page}`
  );

  const result = data.data;
  return {
    ...result.queryData,
    totalRows: result.totalRows,
    totalPages: result.totalPages
  };
};

export const getTerritoriesById = async (territoryId = 1) => {
  const data = await api.get(
    zod.object({
      status: zod.string(),
      data: zod.object({
        queryData: zod
          .object({
            territory_id: zod.string(),
            territory_description: zod.string(),
            region_id: zod.number()
          })
          .array()
      })
    }),
    `${await secretsServicesUrl()}/v1/territories/details/${territoryId}`
  );
  return data.data.queryData;
};

export const getEmployeeTerritories = async (page = 1) => {
  const data = await api.get(
    zod.object({
      status: zod.string(),
      data: zod.object({
        queryData: zod
          .object({
            employee_id: zod.number(),
            territory_id: zod.string()
          })
          .array(),
        totalRows: zod.number(),
        totalPages: zod.number()
      })
    }),
    `${await secretsServicesUrl()}/v1/employee_territories/${page}`
  );

  const result = data.data;
  const test = {
    employee_territory: result.queryData,
    totalRows: result.totalRows,
    totalPages: result.totalPages
  };

  console.log(test);
  return test;
};
