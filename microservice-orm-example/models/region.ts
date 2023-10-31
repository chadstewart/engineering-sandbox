import { prisma } from "../services/database";

export const regionDetails = async (regionId = 1) => {
  const queryData = await prisma.region.findMany({
    where: {
      region_id: regionId
    }
  });
  return queryData;
};