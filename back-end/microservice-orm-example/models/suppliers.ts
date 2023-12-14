import { prismaPaginationHelper } from "../util/pagination-helper";
import { prisma } from "../services/database";
import { ROW_LIMIT } from "../util/row-limit";

export const supplier = async (page = 1) => {
  const { skip, take } = prismaPaginationHelper(page);
  const queryData = await prisma.suppliers.findMany({
    skip,
    take
  });
  const totalRows = await prisma.suppliers.count();
  const totalPages = Math.ceil(totalRows / ROW_LIMIT);
  const data = {
    queryData,
    totalRows,
    totalPages
  };
  return data;
};

export const supplierDetails = async (suppierId = 1) => {
  const queryData = await prisma.suppliers.findMany({
    where: {
      supplier_id: suppierId
    }
  });
  return queryData;
};
