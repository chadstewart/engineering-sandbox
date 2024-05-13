import { prismaPaginationHelper } from "../util/pagination-helper";
import { prisma } from "../services/database";
import { ROW_LIMIT } from "../util/row-limit";

export const categories = async (page = 1) => {
  const { skip, take } = prismaPaginationHelper(page);
  const queryData = await prisma.categories.findMany({
    skip,
    take
  });
  const totalRows = await prisma.categories.count();
  const totalPages = Math.ceil(totalRows / ROW_LIMIT);
  const data = {
    queryData,
    totalRows,
    totalPages
  };
  return data;
};

export const categoryDetails = async (categoryId = 1) => {
  const queryData = await prisma.categories.findMany({
    where: {
      category_id: categoryId
    }
  });
  return queryData;
};
