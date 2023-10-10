import { client } from "../services/database";
import { addPagination } from "../util/pagination-helper";
import { totalPaginationPages } from "../util/total-pagination-pages";
import { updateCustomerZodSchema } from "../util/schemas/update-customer-zod-schema";

export const customers = async (page = 1) => {
  const { inputtedRowLimit, offsetForQuery } = addPagination(page);
  const databaseQuery =
  `SELECT
      customer_id,
      company_name,
      contact_name,
      contact_title
    FROM
      customers
    LIMIT $1 OFFSET $2;`;
  const databaseQueryValues = [inputtedRowLimit, offsetForQuery];
  const queryData = await client.query(databaseQuery, databaseQueryValues);
  const totalPages = await totalPaginationPages("product_id", "products");
  const data = {
    ...queryData,
    totalPages
  };
  return data;
};

export const customerDetails = async (customerId: string) => {
  const databaseQuery =
  `Select
      customers.customer_id,
      company_name,
      contact_name,
      contact_title,
      customer_desc    
    From
      customers
    LEFT JOIN
      customer_customer_demo on customers.customer_id=customer_customer_demo.customer_id
    LEFT JOIN
      customer_demographics on customer_customer_demo.customer_type_id=customer_demographics.customer_type_id
    WHERE
      customers.customer_id=$1;`;
  const queryData = await client.query(databaseQuery, [customerId]);
  return queryData;
};

export const updateCustomer = async (customerId: string, reqBody: any) => {
  try {
    const updateCustomerSchema = await updateCustomerZodSchema.parse(reqBody);

    const {
      company_name,
      contact_name,
      contact_title,
      address,
      city,
      region,
      postal_code,
      country,
      phone,
      fax
    } = updateCustomerSchema;

    const databaseQuery =
    `UPDATE
      customers
    SET
      contact_name=$1,
      contact_title=$2,
      address=$3,
      city=$4,
      region=$5,
      postal_code=$6,
      country=$7,
      phone=$8,
      fax=$9
    WHERE
      customer_id=$10;`;
    const databaseQueryValues = [
      contact_name,
      contact_title,
      address,
      city,
      region,
      postal_code,
      country,
      phone,
      fax,
      customerId
    ];
    return await client.query(databaseQuery, databaseQueryValues);
  } catch (error) {
    console.log(error);
    throw error;
  }
};