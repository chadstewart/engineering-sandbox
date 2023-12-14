import { prisma } from "../services/database";

export const totalRevenue = async () => {
  interface queryResponse {
    total_revenue: number;
  }

  const queryData = await prisma.$queryRaw<
    queryResponse[]
  >`SELECT ROUND(SUM((unit_price * quantity) * (1 - discount))) AS total_revenue FROM order_details`;

  return queryData;
};
