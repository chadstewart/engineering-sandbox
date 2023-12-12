import zod from "zod";
import api from "../../config/api";

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
          round: zod.number()
        })
        .array()
    }),
    `${process.env.REST_API_URL}/v1/revenue/total`
  );
  const result = data.data[0].round;
  return {
    round: result
  };
};
