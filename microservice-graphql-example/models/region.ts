import { prisma } from "../services/database";
import { prismaPaginationHelper } from "../util/pagination-helper";

export const regionsGraphQL = async (regionId = 1) => {
  const queryData = await prisma.region.findMany({
    where: {
      region_id: regionId
    }
  });
  return queryData;
};