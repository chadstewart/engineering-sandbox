import { prisma } from "../services/database";

export const totalRevenue = async () => {
  interface queryResponse {
    round: number;
  }

  const queryData = await prisma.$queryRaw<
    queryResponse[]
  >`SELECT ROUND(SUM((unit_price * quantity) * (1 - discount))) FROM order_details`;

  return queryData;
};
