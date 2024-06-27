import { totalRevenue } from "../../../../models/revenue";

export const handleRevenueRequest = async (dataProvider: typeof totalRevenue) => {
  return {
    statusCode: 200,
    status: "success",
    data: await dataProvider()
  };
};
