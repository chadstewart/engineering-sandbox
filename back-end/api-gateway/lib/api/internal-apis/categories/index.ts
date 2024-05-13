import zod from "zod";
import api from "../../config/api";
import { secretsServicesUrl } from "../../util/secrets-services-url";

const CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const getCategories = async (page = 1) => {
  const data = await api.get(
    zod.object({
      status: zod.string(),
      data: zod.object({
        queryData: zod
          .object({
            category_id: zod.number(),
            category_name: zod.string(),
            description: zod.string().nullable(),
            picture: zod.object({
              type: zod.string(),
              data: zod.any().array()
            })
          })
          .array(),
        totalRows: zod.number(),
        totalPages: zod.number()
      })
    }),
    `${await secretsServicesUrl()}/v1/categories/${page}`
  );

  const result = data.data;
  return {
    category: result.queryData,
    totalRows: result.totalRows,
    totalPages: result.totalPages
  };
};

export const getCategoryDetails = async (categoryId = 1) => {
  const data = await api.get(
    zod.object({
      status: zod.string(),
      data: zod
        .object({
          category_id: zod.number(),
          category_name: zod.string(),
          description: zod.string().nullable(),
          picture: zod.object({
            type: zod.string(),
            data: zod.any().array()
          })
        })
        .array()
    }),
    `${await secretsServicesUrl()}/v1/categories/details/${categoryId}`
  );
  return data.data;
};
