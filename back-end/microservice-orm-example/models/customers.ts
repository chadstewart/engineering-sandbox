import { prisma } from "../services/database";
import { prismaPaginationHelper } from "../util/pagination-helper";
import { removeUndefinedValuesFromObject } from "../util/remove-undefined-attributes";
import { ROW_LIMIT } from "../util/row-limit";
import { updateCustomerZodSchema } from "../util/schemas/update-customer-zod-schema";

export const customers = async (page = 1) => {
  const { skip, take } = prismaPaginationHelper(page);
  const queryData = await prisma.customers.findMany({
    select: {
      customer_id: true,
      company_name: true,
      contact_name: true,
      contact_title: true
    },
    skip,
    take
  });
  const totalRows = await prisma.customers.count();
  const totalPages = Math.ceil(totalRows / ROW_LIMIT);
  const data = {
    queryData,
    totalRows,
    totalPages
  };
  return data;
};

export const customerDetails = async (customerId: string) => {
  const queryData = await prisma.customers.findMany({
    select: {
      customer_id: true,
      company_name: true,
      contact_name: true,
      contact_title: true,
      customer_customer_demo: {
        select: {
          customer_demographics: true
        }
      }
    },
    where: {
      customer_id: customerId
    }
  });
  return queryData;
};

export const updateCustomer = async (customerId: string, reqBody: unknown) => {
  try {
    const updateCustomerSchema = removeUndefinedValuesFromObject(await updateCustomerZodSchema.parse(reqBody));

    const queryData = await prisma.customers.update({
      where: {
        customer_id: customerId
      },
      data: {
        ...updateCustomerSchema
      }
    });
    return queryData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const customerCountryDistribution = async () => {
  const queryData = await prisma.customers.groupBy({
    by: ["country"],
    _count: {
      country: true
    }
  });

  return queryData;
};
