import { prismaPaginationHelper } from "../util/pagination-helper";
import { prisma } from "../services/database";

export const supplier = async ( page = 1 ) => {
  const { skip, take } = prismaPaginationHelper(page);
  const queryData = await prisma.suppliers.findMany({
    skip,
    take
  });
  const totalRows = await prisma.suppliers.count();
  const data = {
    queryData,
    totalRows
  };
  return data;
};

export const supplierGraphQL = async ( suppierId = 1 ) => {
  const queryData = await prisma.suppliers.findMany({
    where: {
      supplier_id: suppierId
    }
  });
  return queryData;
}