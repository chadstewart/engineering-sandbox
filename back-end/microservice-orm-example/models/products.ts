import { prisma } from "../services/database";
import { prismaPaginationHelper } from "../util/pagination-helper";

export const products = async (page = 1) => {
  const { skip, take } = prismaPaginationHelper(page);
  const queryData = await prisma.products.findMany({
    select: {
      product_id: true,
      product_name: true,
      unit_price: true,
      units_in_stock: true,
      units_on_order: true,
      discontinued: true
    },
    skip,
    take
  });
  const totalPages = await prisma.products.count();    
  const data = {
    queryData,
    totalPages
  };
  return data;
};

export const productDetails = async (productId = 1) => {
  const queryData = await prisma.products.findMany({
    select: {
      product_name: true,
      unit_price: true,
      discontinued: true,
      categories: {
        select: {
          category_name: true,
          description: true
        }
      },
      suppliers: {
        select: {
          company_name: true,
          contact_name: true,
          contact_title: true,
          phone: true,
          homepage: true
        }
      }
    },
    where: {
      product_id: productId
    }
  });
  return queryData;
};