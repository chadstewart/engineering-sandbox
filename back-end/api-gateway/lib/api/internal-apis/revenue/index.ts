import zod from "zod";
import api from "../../config/api";
import { secretsServicesUrl } from "../../util/secrets-services-url";

const CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const getTotalRevenue = async () => {
  const data = await api.get(
    zod.object({
      status: zod.string(),
      data: zod
        .object({
          total_revenue: zod.number()
        })
        .array()
    }),
    `${await secretsServicesUrl()}/v1/revenue/total`
  );
  const result = data.data[0].total_revenue;
  return {
    total_revenue: result
  };
};
