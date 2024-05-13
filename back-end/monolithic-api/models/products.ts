import { prisma } from "../services/database";
import { prismaPaginationHelper } from "../util/pagination-helper";
import { ROW_LIMIT } from "../util/row-limit";

export const products = async (page = 1) => {
  const { skip, take } = prismaPaginationHelper(page);
  const queryData = await prisma.products.findMany({
    skip,
    take
  });
  const totalRows = await prisma.products.count();
  const totalPages = Math.ceil(totalRows / ROW_LIMIT);
  const data = {
    queryData,
    totalRows,
    totalPages
  };
  return data;
};

export const productDetails = async (productId = 1) => {
  const queryData = await prisma.products.findMany({
    where: {
      product_id: productId
    }
  });
  return queryData;
};
