import zod from "zod";
import api from "../../config/api";
import { secretsServicesUrl } from "../../util/secrets-services-url";

const CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const getRegionById = async (regionId = 1) => {
  const data = await api.get(
    zod.object({
      status: zod.string(),
      data: zod
        .object({
          region_id: zod.number(),
          region_description: zod.string()
        })
        .array()
    }),
    `${await secretsServicesUrl()}/v1/regions/details/${regionId}`
  );
  return data.data;
};
